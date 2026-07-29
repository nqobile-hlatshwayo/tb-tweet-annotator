// agreementMetrics.js
// Extends the pairwise Cohen's Kappa you already have in Dashboard.jsx

// Fleiss' Kappa — overall agreement across N raters (rater count per item must be constant)
export function fleissKappa(byTweet, labels = ['Relevant', 'Irrelevant', 'Flagged']) {
  const items = Object.values(byTweet).filter(counts => {
    const n = labels.reduce((s, l) => s + (counts[l] || 0), 0);
    return n >= 2; // need at least 2 raters to say anything
  });
  if (items.length === 0) return null;

  const n = labels.reduce((s, l) => s + (items[0][l] || 0), 0); // raters per item
  const N = items.length;

  const Pi = items.map(counts => {
    const sumSq = labels.reduce((s, l) => {
      const nij = counts[l] || 0;
      return s + nij * (nij - 1);
    }, 0);
    return sumSq / (n * (n - 1));
  });
  const PBar = Pi.reduce((a, b) => a + b, 0) / N;

  const pj = labels.map(l => {
    const total = items.reduce((s, counts) => s + (counts[l] || 0), 0);
    return total / (N * n);
  });
  const PeBar = pj.reduce((s, p) => s + p * p, 0);

  return PeBar === 1 ? 1 : (PBar - PeBar) / (1 - PeBar);
}

// Krippendorff's Alpha (nominal) — handles missing/unequal raters per item
export function krippendorffAlpha(byTweetLabelArrays) {
  // byTweetLabelArrays: { tweetId: ['Relevant','Irrelevant', ...] } — one entry per rater who labeled it
  const validItems = Object.values(byTweetLabelArrays).filter(v => v.length >= 2);
  if (validItems.length === 0) return null;

  const categories = [...new Set(validItems.flat())];
  const idx = Object.fromEntries(categories.map((c, i) => [c, i]));
  const k = categories.length;
  const o = Array.from({ length: k }, () => Array(k).fill(0));

  validItems.forEach(vals => {
    const m = vals.length;
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < m; j++) {
        if (i === j) continue;
        o[idx[vals[i]]][idx[vals[j]]] += 1 / (m - 1);
      }
    }
  });

  const nC = o.map(row => row.reduce((a, b) => a + b, 0));
  const nTotal = nC.reduce((a, b) => a + b, 0);

  let Do = 0;
  for (let c = 0; c < k; c++) for (let cp = 0; cp < k; cp++) if (c !== cp) Do += o[c][cp];
  Do /= nTotal;

  let De = 0;
  for (let c = 0; c < k; c++) for (let cp = 0; cp < k; cp++) if (c !== cp) De += nC[c] * nC[cp];
  De /= (nTotal * (nTotal - 1));

  return De === 0 ? null : 1 - Do / De;
}

// Confusion counts between two specific annotators (for diagnosing WHERE they disagree)
export function pairwiseConfusion(annsA, annsB, labels = ['Relevant', 'Irrelevant', 'Flagged']) {
  const shared = Object.keys(annsA).filter(id => annsB[id]);
  const matrix = {};
  labels.forEach(l1 => { matrix[l1] = {}; labels.forEach(l2 => matrix[l1][l2] = 0); });
  shared.forEach(id => { matrix[annsA[id]][annsB[id]]++; });
  return { matrix, n: shared.length };
}

// Per-annotator label-distribution check (spot outlier annotators)
export function annotatorPositivityRates(byAnnotator, labels = ['Relevant', 'Irrelevant', 'Flagged']) {
  const rates = {};
  Object.entries(byAnnotator).forEach(([id, labelMap]) => {
    const counts = { total: 0 };
    labels.forEach(l => counts[l] = 0);
    Object.values(labelMap).forEach(l => { counts[l] = (counts[l] || 0) + 1; counts.total++; });
    rates[id] = counts;
  });
  return rates;
}

// Precision/Recall/F1 of each annotator's raw label against the adjudicated gold label
export function scoreAgainstGold(byAnnotator, goldLabels, positiveLabel = 'Relevant') {
  const scores = {};
  Object.entries(byAnnotator).forEach(([id, labelMap]) => {
    let tp = 0, fp = 0, fn = 0, tn = 0;
    Object.entries(goldLabels).forEach(([tweetId, gold]) => {
      const pred = labelMap[tweetId];
      if (!pred) return;
      const predPos = pred === positiveLabel;
      const goldPos = gold === positiveLabel;
      if (predPos && goldPos) tp++;
      else if (predPos && !goldPos) fp++;
      else if (!predPos && goldPos) fn++;
      else tn++;
    });
    const precision = tp + fp > 0 ? tp / (tp + fp) : null;
    const recall = tp + fn > 0 ? tp / (tp + fn) : null;
    const f1 = precision && recall && (precision + recall > 0) ? (2 * precision * recall) / (precision + recall) : null;
    scores[id] = { precision, recall, f1, tp, fp, fn, tn };
  });
  return scores;
}