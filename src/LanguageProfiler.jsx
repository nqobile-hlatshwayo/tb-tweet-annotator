import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { db } from './firebase';
import {
  collection, doc, getDocs, setDoc, serverTimestamp, query, orderBy
} from 'firebase/firestore';
import {
  Languages, ArrowLeft, Check, CheckCircle2, XCircle,
  HelpCircle, Shuffle, Download, Loader2, Sparkles, AlertCircle, Layers
} from 'lucide-react';

const EVAL_LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'zu', label: 'isiZulu' },
  { code: 'xh', label: 'isiXhosa' },
  { code: 'st', label: 'Sesotho' },
  { code: 'other', label: 'Other' }
];

const BATCH_SIZE = 100;
export default function LanguageProfiler({ onBack, annotatorId = "A" }) {
  const [tweets, setTweets] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [batchIndex, setBatchIndex] = useState(0); // Tracks which 100 we are viewing
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [filter, setFilter] = useState('Unchecked');

  const [selectedLangs, setSelectedLangs] = useState([]);
  const [verdict, setVerdict] = useState(null); 
  const [notes, setNotes] = useState('');

  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const tweetSnap = await getDocs(
        query(collection(db, 'language_eval_tweets'), orderBy('sample_index', 'asc'))
      );

      const tweetMap = {};
      tweetSnap.forEach(d => {
        tweetMap[d.id] = { id: d.id, ...d.data(), verification: null };
      });

      const verSnap = await getDocs(collection(db, 'language_annotations'));
      verSnap.forEach(d => {
        const data = d.data();
        if (tweetMap[data.tweetId]) {
          tweetMap[data.tweetId].verification = data;
        }
      });

      const list = Object.values(tweetMap);
      setTweets(list);
      setCurrentIndex(0);
      setBatchIndex(0);
    } catch (err) {
      console.error("Error loading language profiling data:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { loadData(); }, [loadData]);

  // 1. First, apply the filter
  const filteredTweets = useMemo(() => {
    if (filter === 'Unchecked') return tweets.filter(t => !t.verification);
    if (filter === 'All') return tweets;
    return tweets.filter(t => t.verification?.verdict === filter);
  }, [tweets, filter]);

  // 2. Then, chunk into batches of 100
  const totalBatches = Math.ceil(filteredTweets.length / BATCH_SIZE) || 1;
  const currentBatchTweets = useMemo(() => {
    const start = batchIndex * BATCH_SIZE;
    return filteredTweets.slice(start, start + BATCH_SIZE);
  }, [filteredTweets, batchIndex]);

  const currentTweet = currentBatchTweets[currentIndex] ?? null;

  useEffect(() => {
    if (currentTweet?.verification) {
      setSelectedLangs(currentTweet.verification.manualLanguages || []);
      setVerdict(currentTweet.verification.verdict || null);
      setNotes(currentTweet.verification.notes || '');
    } else {
      setSelectedLangs([]);
      setVerdict(null);
      setNotes('');
    }
  }, [currentTweet]);

  const toggleLanguage = (langLabel) => {
    setSelectedLangs(prev =>
      prev.includes(langLabel)
        ? prev.filter(l => l !== langLabel)
        : [...prev, langLabel]
    );
  };

  const handleSave = async () => {
    if (!currentTweet || !verdict || selectedLangs.length === 0) return;

    setSaving(true);
    const payload = {
      tweetId: currentTweet.id,
      annotatorId,
      predicted_language: currentTweet.predicted_language || 'Unknown',
      manualLanguages: selectedLangs,
      verdict,
      notes: notes.trim(),
      updatedAt: serverTimestamp(),
    };

    try {
      await setDoc(doc(db, 'language_annotations', `${currentTweet.id}_${annotatorId}`), payload, { merge: true });

      setTweets(prev => prev.map(t =>
        t.id === currentTweet.id ? { ...t, verification: payload } : t
      ));

      // Auto-advance logic
      if (filter !== 'Unchecked' && currentIndex < currentBatchTweets.length - 1) {
        setCurrentIndex(i => i + 1);
      }
      // Note: If filter is 'Unchecked', the item disappears from the array automatically, 
      // so currentIndex stays the same, pulling the next item into view smoothly.
    } catch (err) {
      console.error("Failed to save language verification:", err);
    } finally {
      setSaving(false);
    }
  };

  const exportLanguageCSV = () => {
    const headers = ['Tweet ID', 'Text', 'Predicted Language', 'Manual Languages', 'Verdict', 'Notes'];
    const rows = tweets.map(t => {
      const v = t.verification;
      return [
        `"${t.id}"`,
        `"${(t.text || '').replace(/"/g, '""')}"`,
        `"${t.predicted_language || ''}"`,
        `"${(v?.manualLanguages || []).join('; ')}"`,
        `"${v?.verdict || 'Unchecked'}"`,
        `"${(v?.notes || '').replace(/"/g, '""')}"`
      ].join(',');
    });

    const blob = new Blob([[headers.join(','), ...rows].join('\n')], { type: 'text/csv;charset=utf-8;' });
    const a = Object.assign(document.createElement('a'), {
      href: URL.createObjectURL(blob),
      download: `language_profiling_export_${annotatorId}.csv`,
    });
    a.click();
  };

  const total = tweets.length;
  const verifiedCount = tweets.filter(t => t.verification).length;
  const correctCount = tweets.filter(t => t.verification?.verdict === 'Correct').length;
  const measuredAccuracy = verifiedCount > 0 ? ((correctCount / verifiedCount) * 100).toFixed(1) : '0.0';

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-8 text-slate-400 font-mono">
        <Loader2 size={36} className="animate-spin mb-4 text-emerald-400" />
        <p>Loading Language Evaluation Set...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-emerald-500/30">
      <header className="border-b border-slate-800 bg-slate-900/80 p-4 sticky top-0 backdrop-blur-md z-20">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-slate-200 transition-colors border border-slate-700"
            >
              <ArrowLeft size={18} />
            </button>
            <div>
              <h1 className="text-lg font-semibold text-slate-100 flex items-center gap-2">
                <Languages className="text-emerald-400" size={20} />
                Language Profiling
              </h1>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                Checked: {verifiedCount} / {total} · Accuracy: <span className="text-emerald-400 font-bold">{measuredAccuracy}%</span>
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={exportLanguageCSV}
              className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-md text-xs font-medium border border-slate-700 transition-colors"
            >
              <Download size={14} /> Export CSV
            </button>
          </div>
        </div>

        {/* Filter & Batch Controls */}
        <div className="max-w-4xl mx-auto mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pb-1">
          <div className="flex gap-2 overflow-x-auto">
            {['Unchecked', 'All', 'Correct', 'Incorrect', 'Code-Switched'].map(f => (
              <button
                key={f}
                onClick={() => { setFilter(f); setBatchIndex(0); setCurrentIndex(0); }}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
                  filter === f
                    ? 'bg-emerald-900/60 text-emerald-300 ring-1 ring-emerald-500/50'
                    : 'bg-slate-800/60 text-slate-400 hover:bg-slate-800'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Batch Selector */}
          <div className="flex items-center gap-2 bg-slate-800/50 p-1 rounded-lg border border-slate-700">
            <Layers size={14} className="text-slate-400 ml-2" />
            <span className="text-xs text-slate-400 font-mono mr-1">Batch:</span>
            <select
              value={batchIndex}
              onChange={(e) => { setBatchIndex(Number(e.target.value)); setCurrentIndex(0); }}
              className="bg-slate-900 text-slate-200 text-xs rounded border border-slate-700 px-2 py-1 focus:outline-none focus:border-emerald-500"
            >
              {Array.from({ length: totalBatches }).map((_, idx) => (
                <option key={idx} value={idx}>
                  {idx + 1} of {totalBatches}
                </option>
              ))}
            </select>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4 md:p-6 pb-28">
        {!currentTweet ? (
          <div className="text-center text-slate-500 p-12 border border-dashed border-slate-800 rounded-2xl">
            <CheckCircle2 size={48} className="mx-auto mb-3 text-emerald-500/40" />
            <h2 className="text-lg font-medium text-slate-300">Batch Empty</h2>
            <p className="text-sm mt-1 text-slate-500">No tweets match the "{filter}" filter in this batch.</p>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-xl relative">
              <div className="flex justify-between items-center pb-3 mb-4 border-b border-slate-700/60 text-xs font-mono text-slate-400">
                <span>Tweet ID: <span className="text-slate-300">{currentTweet.id}</span></span>
                <div className="flex items-center gap-2">
                  <span>Predicted:</span>
                  <span className="px-2 py-0.5 bg-blue-900/40 text-blue-300 rounded border border-blue-800/60 font-semibold">
                    {currentTweet.predicted_language || 'Unknown'}
                  </span>
                </div>
              </div>

              <p className="text-xl md:text-2xl text-slate-100 font-medium leading-relaxed whitespace-pre-wrap">
                {currentTweet.text}
              </p>
            </div>

            <div className="bg-slate-800/70 border border-slate-700 rounded-xl p-6">
              <h3 className="text-sm font-semibold text-slate-200 mb-3 flex items-center gap-2">
                <Sparkles size={16} className="text-emerald-400" />
                Select all languages that appear:
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                {EVAL_LANGUAGES.map(lang => {
                  const isSelected = selectedLangs.includes(lang.label);
                  return (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => toggleLanguage(lang.label)}
                      className={`flex items-center justify-between p-2.5 rounded-lg text-xs font-medium transition-all border ${
                        isSelected
                          ? 'bg-emerald-900/40 border-emerald-500 text-emerald-200 ring-1 ring-emerald-500/30'
                          : 'bg-slate-900/40 border-slate-700/80 text-slate-400 hover:bg-slate-800'
                      }`}
                    >
                      <span>{lang.label}</span>
                      {isSelected && <Check size={14} className="text-emerald-400 flex-shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="bg-slate-800/70 border border-slate-700 rounded-xl p-6">
              <h3 className="text-sm font-semibold text-slate-200 mb-3 flex items-center gap-2">
                <AlertCircle size={16} className="text-blue-400" />
                Classification Verdict:
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'Correct', label: 'Correct', icon: CheckCircle2, color: 'hover:border-emerald-500 active:bg-emerald-900/30' },
                  { id: 'Incorrect', label: 'Incorrect', icon: XCircle, color: 'hover:border-red-500 active:bg-red-900/30' },
                  { id: 'Code-Switched', label: 'Code-Switched', icon: Shuffle, color: 'hover:border-purple-500 active:bg-purple-900/30' },
                  { id: 'Ambiguous', label: 'Ambiguous', icon: HelpCircle, color: 'hover:border-amber-500 active:bg-amber-900/30' },
                ].map(item => {
                  const Icon = item.icon;
                  const isChecked = verdict === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setVerdict(item.id)}
                      className={`flex flex-col items-center justify-center p-3 rounded-lg border text-xs font-medium gap-1.5 transition-all ${
                        isChecked
                          ? 'bg-slate-700 border-emerald-500 text-emerald-300 ring-1 ring-emerald-500'
                          : `bg-slate-900/50 border-slate-700 text-slate-400 ${item.color}`
                      }`}
                    >
                      <Icon size={18} />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-4">
                <label className="text-xs text-slate-400 font-mono block mb-1">
                  Notes (Optional):
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Mixed with slang"
                  className="w-full px-3 py-2 bg-slate-900/80 border border-slate-700 rounded-md text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500 font-sans"
                />
              </div>
            </div>

            {currentBatchTweets.length > 1 && (
              <div className="flex justify-between items-center text-xs font-mono text-slate-500">
                <button
                  disabled={currentIndex === 0}
                  onClick={() => setCurrentIndex(i => i - 1)}
                  className="hover:text-slate-300 disabled:opacity-30"
                >
                  ← Previous
                </button>
                <span>{currentIndex + 1} of {currentBatchTweets.length} (Batch {batchIndex + 1})</span>
                <button
                  disabled={currentIndex === currentBatchTweets.length - 1}
                  onClick={() => setCurrentIndex(i => i + 1)}
                  className="hover:text-slate-300 disabled:opacity-30"
                >
                  Next →
                </button>
              </div>
            )}
          </div>
        )}
      </main>

      {currentTweet && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-slate-950/80 backdrop-blur-md border-t border-slate-800 z-30">
          <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
            <div className="text-xs text-slate-400 font-mono hidden sm:block">
              Selected: <span className="text-emerald-400">{selectedLangs.join(', ') || 'None'}</span>
            </div>
            <button
              onClick={handleSave}
              disabled={saving || !verdict || selectedLangs.length === 0}
              className="w-full sm:w-auto px-8 py-3 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white rounded-lg text-sm font-semibold transition-colors disabled:opacity-50 flex items-center justify-center gap-2 ml-auto shadow-lg shadow-emerald-900/30"
            >
              {saving ? <Loader2 size={16} className="animate-spin" /> : <Check size={16} />}
              Save & Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}