// Dashboard.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from './firebase';
import { Loader2, BarChart3, User } from 'lucide-react';
import { fleissKappa, krippendorffAlpha } from './agreementMetrics';

// ─── Shared Helper ─────────────────────────────────────────────────────────────
function cohenKappa(annsA, annsB) {
  const shared = Object.keys(annsA).filter(id => annsB[id]);
  if (shared.length === 0) return null;

  const labels = ['Relevant', 'Irrelevant', 'Flagged'];
  let agree = 0;
  const countA = {}, countB = {};
  labels.forEach(l => { countA[l] = 0; countB[l] = 0; });

  shared.forEach(id => {
    if (annsA[id] === annsB[id]) agree++;
    countA[annsA[id]]++;
    countB[annsB[id]]++;
  });

  const n = shared.length;
  if (n === 0) return null;
  
  const po = agree / n;
  const pe = labels.reduce((sum, l) => sum + (countA[l] / n) * (countB[l] / n), 0);

  return pe === 1 ? 1 : (po - pe) / (1 - pe);
}

// ─── Dashboard Component ───────────────────────────────────────────────────────
export default function Dashboard({ onBack }) {
  // Raw Data States
  const [users, setUsers] = useState({});
  const [assignmentsMeta, setAssignmentsMeta] = useState({ bucketCounts: {}, sharedIds: new Set() });
  const [annotations, setAnnotations] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. Setup Real-time Listeners
  useEffect(() => {
    let usersLoaded = false;
    let assignmentsLoaded = false;
    let annotationsLoaded = false;

    const checkDone = () => {
      if (usersLoaded && assignmentsLoaded && annotationsLoaded) setLoading(false);
    };

    // A. Listen to active users
    const unsubUsers = onSnapshot(collection(db, 'users'), (snap) => {
      const userMap = {};
      snap.forEach(doc => {
        const data = doc.data();
        if (data.annotatorId) userMap[data.annotatorId] = { email: doc.id, ...data };
      });
      setUsers(userMap);
      usersLoaded = true; checkDone();
    });

    // B. Listen to Tweet Assignments (for dynamic totals and shared IDs)
    const unsubAssignments = onSnapshot(collection(db, 'tweet_assignments'), (snap) => {
      const counts = {};
      const shared = new Set();
      snap.forEach(doc => {
        const bucket = doc.data().bucket;
        counts[bucket] = (counts[bucket] || 0) + 1;
        if (bucket === 'Shared') shared.add(doc.id);
      });
      setAssignmentsMeta({ bucketCounts: counts, sharedIds: shared });
      assignmentsLoaded = true; checkDone();
    });

    // C. Listen to all Annotations
    const unsubAnnotations = onSnapshot(collection(db, 'annotations'), (snap) => {
      const anns = [];
      snap.forEach(doc => anns.push(doc.data()));
      setAnnotations(anns);
      annotationsLoaded = true; checkDone();
    });

    return () => {
      unsubUsers();
      unsubAssignments();
      unsubAnnotations();
    };
  }, []);

  // 2. Crunch the numbers whenever raw data changes
  const stats = useMemo(() => {
    const activeAnnotators = Object.keys(users).sort();
    
    // Build { tweetId: {Relevant: n, Irrelevant: n, Flagged: n} } for Fleiss,
    // and { tweetId: ['Relevant','Irrelevant',...] } for Krippendorff —
    // both restricted to shared-set tweets.
    const sharedCounts = {};
    const sharedArrays = {};
    assignmentsMeta.sharedIds.forEach(tweetId => {
      sharedCounts[tweetId] = { Relevant: 0, Irrelevant: 0, Flagged: 0 };
      sharedArrays[tweetId] = [];
    });
    annotations.forEach(({ tweetId, label }) => {
      if (sharedCounts[tweetId]) {
        sharedCounts[tweetId][label] = (sharedCounts[tweetId][label] || 0) + 1;
        sharedArrays[tweetId].push(label);
      }
    });

    const overallFleiss = fleissKappa(sharedCounts);
    const overallAlpha = krippendorffAlpha(sharedArrays);

    // Initialize tracking
    const byAnnotator = {};
    const labelCounts = {};
    activeAnnotators.forEach(id => {
      byAnnotator[id] = {};
      labelCounts[id] = { Relevant: 0, Irrelevant: 0, Flagged: 0, total: 0 };
    });

    // Process annotations
    annotations.forEach(({ annotatorId, tweetId, label }) => {
      if (byAnnotator[annotatorId]) {
        byAnnotator[annotatorId][tweetId] = label;
        labelCounts[annotatorId][label] = (labelCounts[annotatorId][label] || 0) + 1;
        labelCounts[annotatorId].total += 1;
      }
    });

    // Calculate dynamic Kappa
    const kappa = {};
    for (let i = 0; i < activeAnnotators.length; i++) {
      for (let j = i + 1; j < activeAnnotators.length; j++) {
        const x = activeAnnotators[i];
        const y = activeAnnotators[j];
        
        const sharedX = Object.fromEntries(
          Object.entries(byAnnotator[x]).filter(([id]) => assignmentsMeta.sharedIds.has(id))
        );
        const sharedY = Object.fromEntries(
          Object.entries(byAnnotator[y]).filter(([id]) => assignmentsMeta.sharedIds.has(id))
        );
        
        kappa[`${x}${y}`] = cohenKappa(sharedX, sharedY);
      }
    }

    // Totals
    const totalLabels = annotations.length;
    const totalRelevant = activeAnnotators.reduce((sum, id) => sum + (labelCounts[id].Relevant || 0), 0);

    return {
      activeAnnotators,
      byAnnotator, 
      labelCounts,
      overallFleiss, 
      overallAlpha,
      kappa,
      totalLabels,
      prevalence: totalLabels > 0 ? totalRelevant / totalLabels : 0,
      totalRelevant,
    };
  }, [users, assignmentsMeta, annotations]);

  // ─── Render Guards & Helpers ─────────────────────────────────────────────────
  
  if (loading) return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-16 text-slate-400">
      <Loader2 size={36} className="animate-spin mb-4" />
      <p className="font-mono text-sm">Syncing live database...</p>
    </div>
  );

  const kappaLabel = k => k === null ? 'pending'
    : k >= 0.8 ? `κ ${k.toFixed(2)} ✓ strong`
    : k >= 0.6 ? `κ ${k.toFixed(2)} ✓ good`
    :            `κ ${k.toFixed(2)} ⚠ review`;

  return (
    <div className="min-h-screen bg-slate-900 font-sans p-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-6 text-slate-200">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-2">
          <div>
            <h1 className="text-2xl font-semibold text-slate-100 flex items-center gap-3">
              <div className="p-2 bg-emerald-900/50 rounded-lg border border-emerald-800/50">
                <BarChart3 className="text-emerald-400" size={24} />
              </div>
              Team Progress Dashboard
            </h1>
            <p className="text-sm text-slate-400 font-mono mt-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Live Sync Active
            </p>
          </div>
          {onBack && (
            <button 
              onClick={onBack}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-md text-sm font-medium transition-colors border border-slate-700"
            >
              ← Back to Queue
            </button>
          )}
        </div>

        {/* Top Summary Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'Total Annotated', value: stats.totalLabels.toLocaleString() },
            { label: 'Relevant Rate',   value: `${(stats.prevalence * 100).toFixed(1)}%` },
            { label: 'Positives So Far', value: stats.totalRelevant },
            { label: 'Positives Target', value: `600 Target` }, // Static target reminder
          ].map(({ label, value }) => (
            <div key={label} className="bg-slate-800 rounded-xl p-5 border border-slate-700 shadow-lg">
              <p className="text-xs text-slate-400 mb-1 tracking-wide uppercase font-semibold">{label}</p>
              <p className="text-2xl font-bold text-slate-100">{value}</p>
            </div>
          ))}
        </div>

        {/* Detailed Progress Cards (Inspired by the new snippet) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.activeAnnotators.map((id) => {
            // Dynamic workload calculation
            const sharedTotal = assignmentsMeta.bucketCounts['Shared'] || 0;
            const personalTotal = assignmentsMeta.bucketCounts[`Annotator_${id}`] || 0;
            const targetTotal = sharedTotal + personalTotal;
            
            const lc = stats.labelCounts[id];
            const done = lc.total;
            const remaining = targetTotal - done;
            const pct = targetTotal > 0 ? (done / targetTotal * 100) : 0;

            // Optional: Pull display name if you add it to the users collection later
            const userEmail = users[id].email || `Annotator ${id}`;

            return (
              <div key={id} className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-lg flex flex-col">
                <div className="flex items-center gap-3 mb-5 border-b border-slate-700 pb-4">
                  <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-600 flex items-center justify-center flex-shrink-0">
                    <User size={20} className="text-slate-400" />
                  </div>
                  <div className="overflow-hidden">
                    <h2 className="text-lg font-semibold text-slate-100 truncate">Annotator {id}</h2>
                    <p className="text-xs text-slate-400 truncate">{userEmail}</p>
                  </div>
                </div>

                <div className="space-y-3 flex-grow">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Total Assigned</span>
                    <span className="font-mono text-slate-200">{targetTotal}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Annotated</span>
                    <span className="font-mono text-emerald-400">{done}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Remaining</span>
                    <span className="font-mono text-amber-400">{Math.max(0, remaining)}</span>
                  </div>
                  
                  <div className="pt-2">
                    <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-slate-700">
                      <div
                        className="bg-emerald-500 h-full rounded-full transition-all duration-500"
                        style={{ width: `${Math.min(pct, 100)}%` }}
                      />
                    </div>
                    <p className="text-right text-xs text-slate-500 mt-1 font-mono">{pct.toFixed(1)}%</p>
                  </div>
                </div>

                {/* Label breakdown pills */}
                <div className="mt-4 pt-4 border-t border-slate-700">
                  <div className="flex flex-wrap gap-2 text-xs font-mono">
                    <span className="px-2 py-1 bg-emerald-900/30 border border-emerald-800/50 text-emerald-400 rounded">
                      Rel: {lc.Relevant}
                    </span>
                    <span className="px-2 py-1 bg-red-900/30 border border-red-800/50 text-red-400 rounded">
                      Irr: {lc.Irrelevant}
                    </span>
                    <span className="px-2 py-1 bg-amber-900/30 border border-amber-800/50 text-amber-400 rounded">
                      Flag: {lc.Flagged}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cohen's Kappa Footer */}
        <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 shadow-lg">
          <div className="flex justify-between items-center mb-4 border-b border-slate-700 pb-3">
            <h3 className="text-sm font-medium text-slate-300 uppercase tracking-wider">
              Inter-rater Reliability
            </h3>
            <span className="text-xs text-slate-500 font-mono">
              Shared Set: {assignmentsMeta.sharedIds.size} tweets
            </span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            {Object.entries(stats.kappa).map(([pair, k]) => {
              const [x, y] = pair.split('');
              return (
                <div key={pair} className="flex justify-between items-center bg-slate-900/50 p-3 rounded-lg border border-slate-700/50">
                  <span className="text-slate-300 font-medium">Ann {x} ↔ {y}</span>
                  <span className={`font-mono font-bold ${
                    k === null   ? 'text-slate-600' :
                    k >= 0.8     ? 'text-emerald-400' :
                    k >= 0.6     ? 'text-emerald-500' :
                                   'text-amber-400'
                  }`}>
                    {kappaLabel(k)}
                  </span>
                </div>
              );
            })}
            
            {Object.keys(stats.kappa).length === 0 && (
              <div className="text-slate-500 italic text-xs">
                Not enough annotators registered to calculate agreement.
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-between items-center bg-slate-900/60 p-4 rounded-lg border border-slate-700 mb-4">
          <span className="text-slate-300 font-medium">Overall (Fleiss' κ)</span>
          <span className="font-mono font-bold text-emerald-400">
            {stats.overallFleiss !== null ? stats.overallFleiss.toFixed(2) : 'pending'}
          </span>
        </div>
        <div className="flex justify-between items-center bg-slate-900/60 p-4 rounded-lg border border-slate-700 mb-4">
          <span className="text-slate-300 font-medium">Overall (Krippendorff's α)</span>
          <span className="font-mono font-bold text-emerald-400">
            {stats.overallAlpha !== null ? stats.overallAlpha.toFixed(2) : 'pending'}
          </span>
        </div>

      </div>
    </div>
  );
}
