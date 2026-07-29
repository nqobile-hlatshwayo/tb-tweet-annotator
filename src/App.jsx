// App.jsx
// ------------------------------------------------------------------
// TB Tweet Annotation Tool – Firebase edition
//
// Auth flow
//   1. User clicks "Sign in with Google"
//   2. App looks up their email in the `users` collection
//      { email: "...", annotatorId: "A" | "B", displayName: "..." }
//   3. If no document found → "not authorised" screen
//   4. Otherwise, fetch tweets for their buckets and saved annotations
//
// Firestore collections used
//   tweet_assignments/{tweetId}   – seeded once by your Python script
//   annotations/{tweetId_annId}  – one doc per (tweet, annotator) pair
//   users/{email}                – role mapping; seed manually after first sign-ins
// ------------------------------------------------------------------

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  Download, CheckCircle2, XCircle, MapPin, Clock, User,
  Info, Globe, Flag, LogOut, Loader2, BarChart3
} from 'lucide-react';
import Dashboard from './Dashboard';
import Adjudication from './Adjudication';
import { fleissKappa, krippendorffAlpha } from './agreementMetrics';
import { auth, provider, db } from './firebase';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import {
  collection, doc, getDocs, getDoc,
  setDoc, query, where, serverTimestamp
} from 'firebase/firestore';

// ─── tiny helpers ──────────────────────────────────────────────────────────────

function Spinner({ label = "Loading…" }) {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center gap-4 text-slate-400">
      <Loader2 size={36} className="animate-spin" />
      <p className="text-sm font-mono">{label}</p>
    </div>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────

export default function App() {
  // ── Auth & role state ──────────────────────────────────────────────────────
  const [authUser,     setAuthUser]     = useState(undefined); // undefined = initialising
  const [annotatorId,  setAnnotatorId]  = useState(null);      // "A" | "B"

  // ── Data state ─────────────────────────────────────────────────────────────
  const [tweets,       setTweets]       = useState([]);         // merged tweet + label
  const [loading,      setLoading]      = useState(false);
  const [saving,       setSaving]       = useState(false);      // per-label async indicator

  // ── UI state ───────────────────────────────────────────────────────────────
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter,       setFilter]       = useState('Unannotated');
  const [sortOrder,     setSortOrder]     = useState('default');
  const [flash,        setFlash]        = useState(null);
  const [showGuidelines, setShowGuidelines] = useState(false);

  const [showDashboard, setShowDashboard] = useState(false);
  const [showAdjudication, setShowAdjudication] = useState(false);

  const [userRole, setUserRole] = useState(null);   // 'admin', 'annotator', or null (unauthorised)
  const [accessDenied, setAccessDenied] = useState(false);
  // ── 1. Listen to Firebase Auth ─────────────────────────────────────────────
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setAuthUser(user ?? null));
    return unsub;
  }, []);

  // ── 2. When auth resolves, fetch dynamic role from Firestore ───────────────
  useEffect(() => {
    async function fetchUserRole() {
      if (!authUser) { 
        setAnnotatorId(null); 
        setUserRole(null);
        setAccessDenied(false);
        return; 
      }

      try {
        const userDocRef = doc(db, 'users', authUser.email);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const data = userDocSnap.data();
          setAnnotatorId(data.annotatorId);
          setUserRole(data.role || 'annotator'); 
          setAccessDenied(false);
        } else {
          console.warn(`Unauthorized access attempt by: ${authUser.email}`);
          setAccessDenied(true); 
        }
      } catch (error) {
        console.error("Error fetching user role:", error);
      }
    }

    fetchUserRole();
  }, [authUser]);

  // ── 3. When role is known, load tweets + existing annotations ─────────────
  const loadData = useCallback(async () => {
    if (!annotatorId) return;

    setLoading(true);
    try {
      const buckets = ['Shared', `Annotator_${annotatorId}`];

      // Firestore 'in' query supports max 10 values — fine here
      const tweetSnap = await getDocs(
        query(collection(db, 'tweet_assignments'), where('bucket', 'in', buckets))
      );

      const tweetMap = {};
      tweetSnap.forEach(d => { tweetMap[d.id] = { ...d.data(), id: d.id, label: null }; });

      // Fetch this annotator's saved labels
      const annSnap = await getDocs(
        query(collection(db, 'annotations'), where('annotatorId', '==', annotatorId))
      );
      annSnap.forEach(d => {
        const { tweetId, label, updatedAt } = d.data();
        if (tweetMap[tweetId]) {
          tweetMap[tweetId].label = label;
          // Convert Firestore timestamp to milliseconds for easy sorting
          tweetMap[tweetId].updatedAt = updatedAt?.toMillis() || 0; 
        }
      });

      // Sort tweets to start with the shared set first
      const merged = Object.values(tweetMap).sort((a, b) => {
        const rank = t => (t.bucket === 'Shared' ? 0 : 1);
        return rank(a) - rank(b);
      });
      setTweets(merged);

      // Jump to first unannotated
      const firstBlank = merged.findIndex(t => !t.label);
      setCurrentIndex(firstBlank !== -1 ? firstBlank : 0);
    } finally {
      setLoading(false);
    }
  }, [annotatorId]);

  useEffect(() => { loadData(); }, [loadData]);

  // ── 4. Label a tweet ───────────────────────────────────────────────────────
  const handleLabel = async (label) => {
    if (!currentTweet || saving) return;

    setFlash(label);
    setSaving(true);

    const now = Date.now(); // Capture current time for local sorting
    
    // Optimistic local update
    const updatedTweets = tweets.map(t =>
      t.id === currentTweet.id ? { ...t, label, updatedAt: now } : t
    );
    setTweets(updatedTweets);

    // Write to Firestore
    await setDoc(
      doc(db, 'annotations', `${currentTweet.id}_${annotatorId}`),
      {
        tweetId:     currentTweet.id,
        annotatorId,
        label,
        updatedAt:   serverTimestamp(),
      },
      { merge: true }   // upsert — handles re-labels cleanly
    );

    setSaving(false);

    setTimeout(() => {
      setFlash(null);
      if (filter === 'All' && currentIndex < filteredTweets.length - 1) {
        setCurrentIndex(i => i + 1);
      }
    }, 300);
  };

  // ── 5. Export CSV ──────────────────────────────────────────────────────────
  const exportCSV = () => {
    const headers = ['Tweet ID', 'Text', 'Created At', 'Location', 'Language', 'Label'];
    const rows = tweets.map(t =>
      `"${t.tweet_id}","${(t.text ?? '').replace(/"/g, '""')}","${t.createdAt ?? ''}","${(t.location ?? '').replace(/"/g, '""')}","${t.language ?? ''}","${t.label ?? ''}"`
    );
    const blob = new Blob([[headers.join(','), ...rows].join('\n')], { type: 'text/csv' });
    const a = Object.assign(document.createElement('a'), {
      href: URL.createObjectURL(blob),
      download: `tb_annotations_${annotatorId}_export.csv`,
    });
    a.click();
  };

// ── Derived state ──────────────────────────────────────────────────────────
  const filteredTweets = useMemo(() => {
    let result = tweets;
    
    // 1. Apply Filter
    if (filter === 'Unannotated') {
      result = tweets.filter(t => !t.label);
    } else if (filter !== 'All') {
      result = tweets.filter(t => t.label === filter);
    }

    // 2. Apply Sort
    if (sortOrder === 'newest') {
      result = [...result].sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));
    } else if (sortOrder === 'oldest') {
      result = [...result].sort((a, b) => (a.updatedAt || 0) - (b.updatedAt || 0));
    }

    return result;
  }, [tweets, filter, sortOrder]);

  const currentTweet = filteredTweets[currentIndex] ?? null;
  const total        = tweets.length;
  const annotated    = tweets.filter(t => t.label).length;

  // ── Render guards ──────────────────────────────────────────────────────────

  if (authUser === undefined) return <Spinner label="Initialising…" />;
  
  if (accessDenied) {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4 text-center">
        <XCircle size={48} className="text-red-500 mb-4" />
        <h2 className="text-xl font-semibold text-slate-100 mb-2">Access Denied</h2>
        <p className="text-slate-400 max-w-md mb-6">
          This sovereign annotation chamber is reserved for certified TB discourse, AI and natural language specialists.
        </p>

        <p className="text-slate-400 font-mono text-sm">
          Asidlali la mfowethu.
        </p>
        <p className="text-slate-500 text-xs mt-6">
          NOTE: This sacred archive remains closed to wandering souls. Should your purpose prove sincere, Grand Master Popo may grant audience. Good luck.
        </p>
        
        <br></br>
        <a
          href="mailto:popovich.thelord@gmail.com"
          className="px-6 py-2 bg-slate-800 text-slate-300 rounded hover:bg-slate-700 transition-colors border border-slate-700"
        >
          Present Your Plea
        </a>

        <br></br>

        <br></br>
        <button 
          onClick={() => {
            setAccessDenied(false);
            signOut(auth);
          }} 
          className="px-6 py-2 bg-slate-800 text-slate-300 rounded hover:bg-slate-700 transition-colors border border-slate-700"
        >
          Return to Sign In
        </button>
      </div>
    );
  }

  if (!authUser) return <SignInScreen />;

  // For annotators: wait until annotatorId is set (should be immediate after role)
  if (!annotatorId) return <Spinner label="Loading your role…" />;

  if (showDashboard) {
    return <Dashboard onBack={() => setShowDashboard(false)} />;
  }

  if (showAdjudication) {
  return <Adjudication onBack={() => setShowAdjudication(false)} />;
}

  if (loading) return <Spinner label="Loading your annotation set…" />;

  // ── Main UI ────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-emerald-500/30">

      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 p-4 sticky top-0 backdrop-blur-sm z-10">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-lg font-semibold tracking-wide text-slate-100">TB Discourse Classifier</h1>
            <p className="text-sm text-slate-400 font-mono mt-1">
              Annotator {annotatorId} · Progress: {annotated} / {total}
              {total > 0 && ` (${(annotated / total * 100).toFixed(1)}%)`}
            </p>
          </div>

          <div className="flex gap-3 items-center">
        
          {userRole === 'admin' && (
              <>
                <button
                  onClick={() => setShowDashboard(true)}
                  className="flex items-center gap-2 px-3 py-2 bg-emerald-900/30 hover:bg-emerald-800/50 text-emerald-400 rounded-md text-sm font-medium transition-colors border border-emerald-800/50"
                >
                  <BarChart3 size={16} /> Dashboard
                </button>
                <button
                  onClick={() => setShowAdjudication(true)}
                  className="flex items-center gap-2 px-3 py-2 bg-amber-900/30 hover:bg-amber-800/50 text-amber-400 rounded-md text-sm font-medium transition-colors border border-amber-800/50"
                >
                  <Flag size={16} /> Adjudication
                </button>
              </>
            )}

            {/* User avatar */}
            {authUser.photoURL ? (
              <img
                src={authUser.photoURL}
                alt={authUser.displayName || 'Annotator'}
                title={`Signed in as ${authUser.email}`}
                referrerPolicy="no-referrer" 
                className="w-8 h-8 rounded-full border border-slate-600 bg-slate-800 object-cover"
              />
            ) : (
              <div 
                className="w-8 h-8 rounded-full border border-slate-600 bg-slate-800 flex items-center justify-center"
                title={`Signed in as ${authUser.email}`}
              >
                <User size={16} className="text-slate-400" />
              </div>
            )}

            <button
              onClick={() => setShowGuidelines(true)}
              className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700 text-slate-300 rounded-md text-sm font-medium transition-colors border border-slate-700"
            >
              <Info size={16} /> Guidelines
            </button>
            <button
              onClick={exportCSV}
              className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-md text-sm font-medium transition-colors border border-slate-700"
            >
              <Download size={16} /> Export
            </button>
            <button
              onClick={() => signOut(auth)}
              title="Sign out"
              className="flex items-center gap-2 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-400 rounded-md text-sm transition-colors border border-slate-700"
            >
              <LogOut size={16} />
            </button>
          </div>
        </div>

        {/* Filter & Sort Bar */}
        <div className="max-w-3xl mx-auto mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 overflow-x-auto pb-1">
          
          {/* Filters */}
          <div className="flex gap-2">
            {['Unannotated', 'All', 'Relevant', 'Irrelevant', 'Flagged'].map(f => (
              <button
                key={f}
                onClick={() => { setFilter(f); setCurrentIndex(0); }}
                className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                  filter === f
                    ? 'bg-slate-700 text-slate-100 ring-1 ring-slate-500'
                    : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Sorter */}
          {filter !== 'Unannotated' && (
            <select
              value={sortOrder}
              onChange={(e) => { setSortOrder(e.target.value); setCurrentIndex(0); }}
              className="px-3 py-1.5 bg-slate-800 border border-slate-700 text-slate-300 text-xs rounded-md focus:outline-none focus:border-emerald-500 transition-colors"
            >
              <option value="default">Default Order</option>
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          )}
        </div>
      </header>

      {/* Main annotation area */}
      <main className="max-w-3xl mx-auto p-4 flex flex-col items-center justify-center min-h-[60vh] pb-36">
        {!currentTweet ? (
          <div className="text-center text-slate-500 p-8 border border-dashed border-slate-700 rounded-xl w-full">
            <CheckCircle2 size={48} className="mx-auto mb-4 opacity-50" />
            <h2 className="text-xl font-medium text-slate-300">Queue Empty</h2>
            <p className="mt-2 text-sm">No tweets match the "{filter}" filter.</p>
          </div>
        ) : (
          <div className="w-full relative">

            {currentTweet.label && (
              <div className="absolute -top-3 left-4 px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded bg-slate-800 border border-slate-700 z-10">
                <span className={
                  currentTweet.label === 'Relevant'   ? 'text-emerald-400' :
                  currentTweet.label === 'Flagged'    ? 'text-amber-400'   :
                  'text-slate-400'
                }>
                  Currently: {currentTweet.label}
                </span>
              </div>
            )}

            <div className={`w-full bg-slate-800 rounded-xl p-6 md:p-8 shadow-2xl border transition-all duration-200 flex flex-col gap-4 ${
              flash === 'Relevant'   ? 'border-emerald-500/50 bg-emerald-900/20' :
              flash === 'Irrelevant' ? 'border-red-500/50    bg-red-900/20'      :
              flash === 'Flagged'    ? 'border-amber-500/50  bg-amber-900/20'    :
              'border-slate-700'
            }`}>

              <div className="flex items-center gap-3 border-b border-slate-700/50 pb-4">
                <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0">
                  <User size={20} className="text-slate-400" />
                </div>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-300 font-mono">
                  {currentTweet.createdAt && (
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} className="text-slate-400" />
                      {new Date(currentTweet.createdAt).toLocaleString('en-ZA', {
                        year: 'numeric', month: 'short', day: 'numeric',
                        hour: '2-digit', minute: '2-digit'
                      })}
                    </span>
                  )}
                  {currentTweet.location && currentTweet.location !== 'Unknown' && (
                    <span className="flex items-center gap-1.5 truncate">
                      <MapPin size={14} className="text-slate-400" />
                      {currentTweet.location}
                    </span>
                  )}
                  {currentTweet.language && currentTweet.language !== 'Unknown' && (
                    <span className="flex items-center gap-1.5 px-2 py-0.5 bg-slate-700/50 rounded-md border border-slate-600 text-slate-300">
                      <Globe size={12} className="text-blue-400" />
                      {currentTweet.language}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-xl md:text-2xl leading-relaxed text-slate-100 font-medium whitespace-pre-wrap mt-2">
                {currentTweet.text}
              </p>

              <div className="mt-4 text-xs text-slate-600 font-mono flex justify-between items-center">
                <span>ID: {currentTweet.id}</span>
                <span className="text-slate-700">{currentTweet.bucket}</span>
              </div>
            </div>

            {filter !== 'Unannotated' && filteredTweets.length > 1 && (
              <div className="flex justify-between mt-4 text-sm font-mono text-slate-500">
                <button disabled={currentIndex === 0} onClick={() => setCurrentIndex(i => i - 1)} className="hover:text-slate-300 disabled:opacity-30">← Previous</button>
                <span>{currentIndex + 1} of {filteredTweets.length}</span>
                <button disabled={currentIndex === filteredTweets.length - 1} onClick={() => setCurrentIndex(i => i + 1)} className="hover:text-slate-300 disabled:opacity-30">Next →</button>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Fixed action bar */}
      {currentTweet && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-950 via-slate-900 to-transparent pb-8 z-10">
          <div className="max-w-3xl mx-auto flex gap-3">
            <button
              onClick={() => handleLabel('Irrelevant')}
              disabled={saving}
              className="flex-[2] flex flex-col items-center justify-center py-4 rounded-xl bg-red-900 hover:bg-red-800 active:bg-red-950 text-white transition-colors shadow-[0_0_15px_rgba(153,27,27,0.2)] border border-red-800 disabled:opacity-60"
            >
              <XCircle className="mb-1 opacity-90" size={24} />
              <span className="font-semibold tracking-wide">Irrelevant</span>
            </button>

            <button
              onClick={() => handleLabel('Flagged')}
              disabled={saving}
              className="flex-1 flex flex-col items-center justify-center py-4 rounded-xl bg-amber-900/80 hover:bg-amber-800 active:bg-amber-950 text-amber-100 transition-colors border border-amber-700/50 disabled:opacity-60"
            >
              <Flag className="mb-1 opacity-80 text-amber-400" size={20} />
              <span className="text-sm font-medium tracking-wide">Flag</span>
            </button>

            <button
              onClick={() => handleLabel('Relevant')}
              disabled={saving}
              className="flex-[2] flex flex-col items-center justify-center py-4 rounded-xl bg-emerald-700 hover:bg-emerald-600 active:bg-emerald-800 text-white transition-colors shadow-[0_0_15px_rgba(4,120,87,0.3)] border border-emerald-600 disabled:opacity-60"
            >
              <CheckCircle2 className="mb-1 opacity-90" size={24} />
              <span className="font-semibold tracking-wide">Relevant</span>
            </button>
          </div>
        </div>
      )}

      {/* Guidelines modal — unchanged from original */}
      {showGuidelines && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-slate-800 rounded-xl max-w-lg w-full p-6 md:p-8 border border-slate-700 shadow-2xl max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
              <Info className="text-slate-400" /> Annotation Guidelines
            </h2>
            <div className="space-y-6 text-sm text-slate-300">
              <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4">
                <h3 className="font-bold text-slate-200 mb-2">Target TB Symptoms (Multilingual)</h3>
                <p className="text-xs text-slate-400 mb-3">
                  To be marked "Relevant," the tweet must mention at least one primary symptom in a personal context.
                  <span className="text-emerald-400 block mt-1">Note: Past-tense reports are highly relevant!</span>
                </p>
                <ul className="list-none space-y-2 text-xs">
                  {[
                    ["Coughing (Chronic/Blood)", "ukukhwehlela / ndikhohlela / ho hohlola / ukukhwehlela igazi"],
                    ["Night Sweats",             "ukujuluka ebusuku / ukubila ebusuku / ho fufuleloa bosiu"],
                    ["Chest Pain & Breathlessness", "isifuba sibuhlungu / sefuba se bohloko / ngiphelelwa umoya"],
                    ["Weight & Appetite Loss",   "ngiyancipha / ho fokotsehela / angifuni ukudla / ha ke rate ho ja"],
                    ["Fever & Fatigue",          "umkhuhlane / ifiva / feberu / ukukhathala / ngiphelelwa amandla"],
                  ].map(([name, terms]) => (
                    <li key={name} className="flex flex-col border-b border-slate-700/50 pb-2 last:border-0">
                      <span className="font-semibold text-slate-200">{name}</span>
                      <span className="text-slate-400">{terms}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-emerald-900/20 border border-emerald-800/50 rounded-lg p-4">
                <h3 className="font-bold text-emerald-400 mb-2 flex items-center gap-2"><CheckCircle2 size={16} /> Relevant</h3>
                <p className="leading-relaxed">First-person accounts expressing symptoms or direct personal concern. Includes colloquialisms and code-switching.</p>
              </div>
              <div className="bg-red-900/20 border border-red-800/50 rounded-lg p-4">
                <h3 className="font-bold text-red-400 mb-2 flex items-center gap-2"><XCircle size={16} /> Irrelevant</h3>
                <p className="leading-relaxed">News, commentary, jokes, metaphors, or general illness without specific TB context.</p>
              </div>
              <div className="bg-amber-900/20 border border-amber-800/50 rounded-lg p-4">
                <h3 className="font-bold text-amber-400 mb-2 flex items-center gap-2"><Flag size={16} /> Flag</h3>
                <p className="leading-relaxed">Use <strong>only</strong> when you cannot understand the language/dialect well enough to make a safe clinical judgement. Pure noise is always "Irrelevant".</p>
              </div>
            </div>
            <button
              onClick={() => setShowGuidelines(false)}
              className="mt-8 w-full py-3 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg font-medium transition-colors border border-slate-600"
            >
              Resume Annotation
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Sign-in screen ───────────────────────────────────────────────────────────

function SignInScreen() {
  const [error, setError] = useState(null);

  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="bg-slate-800 border border-slate-700 rounded-2xl p-10 max-w-sm w-full text-center shadow-2xl">
        <div className="w-14 h-14 rounded-full bg-emerald-700/20 border border-emerald-700/40 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={28} className="text-emerald-400" />
        </div>
        <h1 className="text-2xl font-semibold text-slate-100 mb-2">TB Discourse Classifier</h1>
        <p className="text-sm text-slate-400 mb-8">
          Sign in with your institutional Google account to access your annotation queue.
        </p>
        <button
          onClick={handleSignIn}
          className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-white hover:bg-slate-100 text-slate-900 rounded-lg font-medium transition-colors shadow-md"
        >
          {/* Google SVG icon */}
          <svg width="18" height="18" viewBox="0 0 18 18">
            <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"/>
            <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z"/>
            <path fill="#FBBC05" d="M3.964 10.706A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.038l3.007-2.332z"/>
            <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.962L3.964 6.294C4.672 4.167 6.656 3.58 9 3.58z"/>
          </svg>
          Sign in with Google
        </button>
        {error && <p className="mt-4 text-xs text-red-400">{error}</p>}
      </div>
    </div>
  );
}