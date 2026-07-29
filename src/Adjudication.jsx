// Adjudication.jsx
// ------------------------------------------------------------------
// Flag-resolution workflow (Annotator A only):
//   1. Shared-set flags: A supplies a binary replacement (Relevant/
//      Irrelevant) for each Flagged VOTE within a shared-set tweet.
//      Once every vote on that tweet is binary, majority vote can run
//      automatically (2-1 or 3-0 — a tie is mathematically impossible
//      once only 2 categories exist).
//   2. Individual-bucket flags: a single annotator's own item, no
//      peer votes to fall back on. A resolves these directly as the
//      final label — flagged explicitly in the record as a
//      single-adjudicator decision, not a cross-checked one.
//
// Firestore collections used (new, alongside your existing ones):
//   flag_resolutions/{tweetId}_{annotatorId}
//     { tweetId, annotatorId, originalLabel: 'Flagged',
//       resolvedLabel, resolvedBy, resolvedAt }
//   adjudications/{tweetId}
//     { tweetId, finalLabel, method, raterLabels, hadFlags,
//       resolvedBy?, resolvedAt }
// ------------------------------------------------------------------

import React, { useState, useEffect, useMemo } from 'react';
import {
  collection, doc, getDocs, setDoc,
  serverTimestamp, writeBatch,
} from 'firebase/firestore';
import { db, auth } from './firebase';
import {
  CheckCircle2, XCircle, Flag, Loader2, ArrowLeft,
  Users, User, AlertTriangle, Layers,
} from 'lucide-react';

const BINARY = ['Relevant', 'Irrelevant'];

export default function Adjudication({ onBack }) {
  // ── Raw data ────────────────────────────────────────────────────
  const [tweets, setTweets]               = useState({}); // tweetId -> { id, bucket, text, ... }
  const [rawAnnotations, setRawAnnotations] = useState({}); // tweetId -> { annotatorId: label }
  const [flagResolutions, setFlagResolutions] = useState({}); // "tweetId_annotatorId" -> { resolvedLabel, ... }
  const [adjudications, setAdjudications] = useState({}); // tweetId -> { finalLabel, ... }

  const [loading, setLoading] = useState(true);
  const [saving,  setSaving]  = useState(null);
  const [tab,     setTab]     = useState('overview'); // 'overview' | 'sharedFlags' | 'individualFlags'
  const [sharedQueueIdx,     setSharedQueueIdx]     = useState(0);
  const [individualQueueIdx, setIndividualQueueIdx] = useState(0);

  // ── Load everything once ───────────────────────────────────────
  useEffect(() => {
    async function load() {
      setLoading(true);

      const tweetSnap = await getDocs(collection(db, 'tweet_assignments'));
      const tw = {};
      tweetSnap.forEach(d => { tw[d.id] = { ...d.data(), id: d.id }; });

      const annSnap = await getDocs(collection(db, 'annotations'));
      const grouped = {};
      annSnap.forEach(d => {
        const { tweetId, annotatorId, label } = d.data();
        grouped[tweetId] = grouped[tweetId] || {};
        grouped[tweetId][annotatorId] = label;
      });

      const flagSnap = await getDocs(collection(db, 'flag_resolutions'));
      const flags = {};
      flagSnap.forEach(d => { flags[d.id] = d.data(); });

      const adjSnap = await getDocs(collection(db, 'adjudications'));
      const adj = {};
      adjSnap.forEach(d => { adj[d.id] = d.data(); });

      setTweets(tw);
      setRawAnnotations(grouped);
      setFlagResolutions(flags);
      setAdjudications(adj);
      setLoading(false);
    }
    load();
  }, []);

  // ── Effective label helper: substitutes resolved flags in ─────
  const effectiveLabel = (tweetId, annotatorId) => {
    const raw = rawAnnotations[tweetId]?.[annotatorId];
    if (raw !== 'Flagged') return raw;
    const res = flagResolutions[`${tweetId}_${annotatorId}`];
    return res ? res.resolvedLabel : 'Flagged'; // still 'Flagged' if unresolved
  };

  // ── Classify every SHARED tweet ────────────────────────────────
  const sharedClassification = useMemo(() => {
    
      
      // Add alongside the existing `out` object in sharedClassification
    const missingByAnnotator = {}; // annotatorId -> count of shared tweets they haven't labeled

    Object.values(tweets)
    .filter(t => t.bucket === 'Shared')
    .forEach(t => {
        const labelMap = rawAnnotations[t.id] || {};
        ['A', 'B', 'D'].forEach(aid => { // swap in your actual 3 completed annotator IDs
        if (!labelMap[aid]) {
            missingByAnnotator[aid] = (missingByAnnotator[aid] || 0) + 1;
        }
        });
    });

    const out = {
      incomplete: [],          // fewer than 3 raters so far
      needsFlagResolution: [],  // has >=1 still-unresolved Flagged vote
      readyForMajority: [],     // all votes binary, not yet written to adjudications
      resolved: [],             // already in adjudications
    };

    Object.values(tweets)
      .filter(t => t.bucket === 'Shared')
      .forEach(t => {
        const labelMap = rawAnnotations[t.id] || {};
        const annotatorIds = Object.keys(labelMap);

        if (annotatorIds.length < 3) { out.incomplete.push(t.id); return; }
        if (adjudications[t.id]) { out.resolved.push(t.id); return; }

        const pendingFlags = annotatorIds.filter(
          aid => effectiveLabel(t.id, aid) === 'Flagged'
        );

        if (pendingFlags.length > 0) {
          out.needsFlagResolution.push({ tweetId: t.id, pendingFlags });
        } else {
          out.readyForMajority.push(t.id);
        }
      });
    // return { ...out, missingByAnnotator } instead of just out

    return { ...out, missingByAnnotator }; // return out;
  }, [tweets, rawAnnotations, flagResolutions, adjudications]);

  // ── Flat queue of individual (tweetId, annotatorId) flags to resolve ──
  const sharedFlagQueue = useMemo(() => {
    const q = [];
    sharedClassification.needsFlagResolution.forEach(({ tweetId, pendingFlags }) => {
      pendingFlags.forEach(annotatorId => q.push({ tweetId, annotatorId }));
    });
    return q;
  }, [sharedClassification]);

  // ── Individual-bucket flags (no peer votes, single-annotator items) ──
  const individualFlagQueue = useMemo(() => {
    return Object.values(tweets)
      .filter(t => t.bucket && t.bucket.startsWith('Annotator_'))
      .map(t => {
        const annotatorId = t.bucket.replace('Annotator_', '');
        const raw = rawAnnotations[t.id]?.[annotatorId];
        return { tweetId: t.id, annotatorId, raw };
      })
      .filter(({ tweetId, annotatorId, raw }) =>
        raw === 'Flagged' &&
        !flagResolutions[`${tweetId}_${annotatorId}`] &&
        !adjudications[tweetId]
      );
  }, [tweets, rawAnnotations, flagResolutions, adjudications]);

  // ── Actions ─────────────────────────────────────────────────────

  // A resolves one flagged vote inside a shared-set tweet
  const resolveSharedFlag = async (tweetId, annotatorId, resolvedLabel) => {
    setSaving(`${tweetId}_${annotatorId}`);
    const key = `${tweetId}_${annotatorId}`;
    await setDoc(doc(db, 'flag_resolutions', key), {
      tweetId,
      annotatorId,
      originalLabel: 'Flagged',
      resolvedLabel,
      resolvedBy: auth.currentUser?.email || 'unknown',
      resolvedAt: serverTimestamp(),
    });
    setFlagResolutions(prev => ({ ...prev, [key]: { resolvedLabel, resolvedBy: auth.currentUser?.email } }));
    setSaving(null);
    setSharedQueueIdx(i => Math.max(0, Math.min(i, sharedFlagQueue.length - 2)));
  };

  // A resolves a standalone individual-bucket flagged item directly
  const resolveIndividualFlag = async (tweetId, annotatorId, finalLabel) => {
    setSaving(`${tweetId}_${annotatorId}`);
    const key = `${tweetId}_${annotatorId}`;
    const batch = writeBatch(db);
    batch.set(doc(db, 'flag_resolutions', key), {
      tweetId,
      annotatorId,
      originalLabel: 'Flagged',
      resolvedLabel: finalLabel,
      resolvedBy: auth.currentUser?.email || 'unknown',
      resolvedAt: serverTimestamp(),
    });
    batch.set(doc(db, 'adjudications', tweetId), {
      tweetId,
      finalLabel,
      method: 'flag_resolved_individual', // single-adjudicator, no cross-check — flagged as such
      raterLabels: { [annotatorId]: finalLabel },
      hadFlags: true,
      resolvedBy: auth.currentUser?.email || 'unknown',
      resolvedAt: serverTimestamp(),
    });
    await batch.commit();

    setFlagResolutions(prev => ({ ...prev, [key]: { resolvedLabel: finalLabel } }));
    setAdjudications(prev => ({ ...prev, [tweetId]: { finalLabel, method: 'flag_resolved_individual' } }));
    setSaving(null);
    setIndividualQueueIdx(i => Math.max(0, Math.min(i, individualFlagQueue.length - 2)));
  };

  // Bulk: run majority vote on every shared tweet that's fully binary
  const applyMajorityToReady = async () => {
    const batch = writeBatch(db);
    let count = 0;

    sharedClassification.readyForMajority.forEach(tweetId => {
      const labelMap = rawAnnotations[tweetId];
      const annotatorIds = Object.keys(labelMap);
      const effMap = {};
      annotatorIds.forEach(aid => { effMap[aid] = effectiveLabel(tweetId, aid); });

      const counts = {};
      Object.values(effMap).forEach(l => { counts[l] = (counts[l] || 0) + 1; });
      const finalLabel = Object.keys(counts).sort((a, b) => counts[b] - counts[a])[0];
      const hadFlags = Object.values(labelMap).some(l => l === 'Flagged');

      batch.set(doc(db, 'adjudications', tweetId), {
        tweetId,
        finalLabel,
        method: hadFlags ? 'majority_after_flag_resolution' : 'majority',
        raterLabels: effMap,
        hadFlags,
        resolvedAt: serverTimestamp(),
      });
      count++;
    });

    if (count > 0) {
      await batch.commit();
      setAdjudications(prev => {
        const next = { ...prev };
        sharedClassification.readyForMajority.forEach(id => { next[id] = next[id] || { placeholder: true }; });
        return next;
      });
    }
  };

  // ── Render guards ───────────────────────────────────────────────
  if (loading) return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-slate-400 gap-4">
      <Loader2 size={32} className="animate-spin" />
      <p className="font-mono text-sm">Loading annotation data…</p>
    </div>
  );

  const currentSharedFlag = sharedFlagQueue[sharedQueueIdx];
  const currentIndividualFlag = individualFlagQueue[individualQueueIdx];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 p-6">
      <div className="max-w-3xl mx-auto flex flex-col gap-6">

        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-slate-100">Flag Resolution & Adjudication</h1>
          {onBack && (
            <button onClick={onBack} className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-md text-sm border border-slate-700">
              <ArrowLeft size={16} /> Back
            </button>
          )}
        </div>

        {/* Tabs */}
        <div className="flex gap-2">
          {[
            ['overview', 'Overview'],
            ['sharedFlags', `Shared-Set Flags (${sharedFlagQueue.length})`],
            ['individualFlags', `Individual-Bucket Flags (${individualFlagQueue.length})`],
          ].map(([key, label]) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                tab === key ? 'bg-slate-700 text-slate-100 ring-1 ring-slate-500' : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* ── OVERVIEW ─────────────────────────────────────────── */}
        {tab === 'overview' && (
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                ['Ready for majority', sharedClassification.readyForMajority.length],
                ['Needs flag resolution', sharedClassification.needsFlagResolution.length],
                ['Already resolved', sharedClassification.resolved.length],
                ['Incomplete (<3 raters)', sharedClassification.incomplete.length],
              ].map(([label, val]) => (
                <div key={label} className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                  <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">{label}</p>
                  <p className="text-2xl font-bold text-slate-100">{val}</p>
                </div>
              ))}
            </div>

            <div className="bg-slate-800 rounded-xl p-5 border border-slate-700 flex items-start gap-3">
              <Layers size={18} className="text-emerald-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-slate-200 font-medium mb-1">
                  {sharedClassification.readyForMajority.length} shared tweet{sharedClassification.readyForMajority.length === 1 ? '' : 's'} can be majority-resolved right now
                </p>
                <p className="text-xs text-slate-400 mb-3">
                  Every vote on these is binary (either originally, or after your flag resolutions) — a majority always exists once there are only 2 categories.
                </p>
                <button
                  onClick={applyMajorityToReady}
                  disabled={sharedClassification.readyForMajority.length === 0}
                  className="px-4 py-2 bg-emerald-900/40 hover:bg-emerald-800/50 text-emerald-400 rounded-md text-sm font-medium border border-emerald-800/50 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Apply majority vote to {sharedClassification.readyForMajority.length} item{sharedClassification.readyForMajority.length === 1 ? '' : 's'}
                </button>
              </div>
            </div>

            {sharedClassification.needsFlagResolution.length > 0 && (
              <div className="bg-amber-900/10 rounded-xl p-5 border border-amber-800/40 flex items-start gap-3">
                <AlertTriangle size={18} className="text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-slate-200 font-medium mb-1">
                    {sharedClassification.needsFlagResolution.length} shared tweet{sharedClassification.needsFlagResolution.length === 1 ? '' : 's'} still blocked on a flag
                  </p>
                  <p className="text-xs text-slate-400">
                    Switch to the "Shared-Set Flags" tab to resolve these — once done, they'll move into the majority-ready bucket above.
                  </p>
                </div>
              </div>
            )}

            {Object.keys(sharedClassification.missingByAnnotator || {}).length > 0 && (
                <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
                    <p className="text-sm text-slate-300 font-medium mb-3">Missing from the shared set, by annotator</p>
                    <div className="flex gap-3 text-xs font-mono">
                    {Object.entries(sharedClassification.missingByAnnotator).map(([aid, count]) => (
                        <span key={aid} className="px-3 py-1.5 bg-slate-900 border border-slate-700 rounded">
                        Ann {aid}: {count} missing
                        </span>
                    ))}
                    </div>
                </div>
            )}

          </div>
        )}

        {/* ── SHARED-SET FLAGS ─────────────────────────────────── */}
        {tab === 'sharedFlags' && (
          currentSharedFlag ? (
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                <Users size={14} /> Flag {sharedQueueIdx + 1} of {sharedFlagQueue.length} · Tweet {currentSharedFlag.tweetId} · Annotator {currentSharedFlag.annotatorId}
              </div>

              <p className="text-lg text-slate-100 whitespace-pre-wrap">
                {tweets[currentSharedFlag.tweetId]?.text}
              </p>

              <div className="flex flex-wrap gap-2 text-xs font-mono border-t border-slate-700 pt-3">
                {Object.keys(rawAnnotations[currentSharedFlag.tweetId] || {}).map(aid => {
                  const eff = effectiveLabel(currentSharedFlag.tweetId, aid);
                  const isPending = aid === currentSharedFlag.annotatorId;
                  return (
                    <span
                      key={aid}
                      className={`px-2 py-1 rounded border ${
                        isPending ? 'bg-amber-900/30 border-amber-700/50 text-amber-300' : 'bg-slate-900 border-slate-700 text-slate-300'
                      }`}
                    >
                      Ann {aid}: {isPending ? 'Flagged (pending)' : eff}
                    </span>
                  );
                })}
              </div>

              <p className="text-xs text-slate-500">
                Assign the real label Annotator {currentSharedFlag.annotatorId} would have given — this replaces their flagged vote in the majority tally.
              </p>

              <div className="flex gap-3">
                {BINARY.map(label => (
                  <button
                    key={label}
                    onClick={() => resolveSharedFlag(currentSharedFlag.tweetId, currentSharedFlag.annotatorId, label)}
                    disabled={!!saving}
                    className={`flex-1 flex flex-col items-center py-3 rounded-xl border disabled:opacity-60 ${
                      label === 'Relevant'
                        ? 'bg-emerald-700 hover:bg-emerald-600 text-white border-emerald-600'
                        : 'bg-red-900 hover:bg-red-800 text-white border-red-800'
                    }`}
                  >
                    {label === 'Relevant' ? <CheckCircle2 size={20} className="mb-1" /> : <XCircle size={20} className="mb-1" />}
                    {label}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center text-slate-500 p-8 border border-dashed border-slate-700 rounded-xl">
              <CheckCircle2 size={40} className="mx-auto mb-3 opacity-50" />
              No pending shared-set flags.
            </div>
          )
        )}

        {/* ── INDIVIDUAL-BUCKET FLAGS ──────────────────────────── */}
        {tab === 'individualFlags' && (
          currentIndividualFlag ? (
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-xs text-amber-400 font-mono">
                <User size={14} /> Individual flag {individualQueueIdx + 1} of {individualFlagQueue.length} · Annotator {currentIndividualFlag.annotatorId}'s own item
              </div>
              <p className="text-xs text-slate-500 -mt-2">
                No second opinion exists for this item — this decision rests on Annotator A alone.
              </p>

              <p className="text-lg text-slate-100 whitespace-pre-wrap">
                {tweets[currentIndividualFlag.tweetId]?.text}
              </p>

              <div className="flex gap-3 mt-2">
                {BINARY.map(label => (
                  <button
                    key={label}
                    onClick={() => resolveIndividualFlag(currentIndividualFlag.tweetId, currentIndividualFlag.annotatorId, label)}
                    disabled={!!saving}
                    className={`flex-1 flex flex-col items-center py-3 rounded-xl border disabled:opacity-60 ${
                      label === 'Relevant'
                        ? 'bg-emerald-700 hover:bg-emerald-600 text-white border-emerald-600'
                        : 'bg-red-900 hover:bg-red-800 text-white border-red-800'
                    }`}
                  >
                    {label === 'Relevant' ? <CheckCircle2 size={20} className="mb-1" /> : <XCircle size={20} className="mb-1" />}
                    {label}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center text-slate-500 p-8 border border-dashed border-slate-700 rounded-xl">
              <CheckCircle2 size={40} className="mx-auto mb-3 opacity-50" />
              No pending individual-bucket flags.
            </div>
          )
        )}
      </div>
    </div>
  );
}