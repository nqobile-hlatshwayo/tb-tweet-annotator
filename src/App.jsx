import React, { useState, useEffect, useMemo } from 'react';
import { Download, CheckCircle2, XCircle, MapPin, Clock, User, Info, Globe, Flag } from 'lucide-react';
import { initialTweets } from './tb_tweets_pilot_data.js';

export default function App() {
  const [tweets, setTweets] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState('Unannotated'); // All, Unannotated, Relevant, Irrelevant, Flagged
  const [flash, setFlash] = useState(null); // Used for the 300ms visual feedback
  const [showGuidelines, setShowGuidelines] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('tb_annotations');
    if (savedData) {
      const parsed = JSON.parse(savedData);
      
      // Check if the saved data length matches our imported file to detect dataset swaps
      if (parsed.length !== initialTweets.length) {
        console.log("New dataset size detected. Overwriting old save.");
        setTweets(initialTweets.map(t => ({ ...t, label: null })));
      } else {
        // Load the saved progress normally
        setTweets(parsed);
        const firstUnannotated = parsed.findIndex(t => !t.label);
        setCurrentIndex(firstUnannotated !== -1 ? firstUnannotated : 0);
      }
    } else {
      // Initialize with no labels
      setTweets(initialTweets.map(t => ({ ...t, label: null })));
    }
  }, []);

  // Save to localStorage whenever tweets change
  useEffect(() => {
    if (tweets.length > 0) {
      localStorage.setItem('tb_annotations', JSON.stringify(tweets));
    }
  }, [tweets]);

  // Derived state for the filtered view
  const filteredTweets = useMemo(() => {
    if (filter === 'All') return tweets;
    if (filter === 'Unannotated') return tweets.filter(t => !t.label);
    return tweets.filter(t => t.label === filter);
  }, [tweets, filter]);

  const currentTweet = filteredTweets[currentIndex];

  const handleLabel = (label) => {
    if (!currentTweet) return;

    // 1. Visual flash feedback
    setFlash(label);

    // 2. Update the data
    const updatedTweets = tweets.map(t => 
      t.id === currentTweet.id ? { ...t, label } : t
    );
    setTweets(updatedTweets);

    // 3. Auto-advance after 300ms
    setTimeout(() => {
      setFlash(null);
      // If we are in 'Unannotated' view, the current item disappears from the array, 
      // so we don't need to increment the index. If in 'All' view, we move forward.
      if (filter === 'All') {
        if (currentIndex < filteredTweets.length - 1) {
          setCurrentIndex(currentIndex + 1);
        }
      }
    }, 300);
  };

  const exportCSV = () => {
    const headers = ['Tweet ID', 'Text', 'Created At', 'Location', 'Language', 'Label'];
    const csvContent = [
      headers.join(','),
      ...tweets.map(t => `"${t.id}","${t.text.replace(/"/g, '""')}","${t.createdAt || ''}","${(t.location || '').replace(/"/g, '""')}","${t.language || ''}","${t.label || ''}"`)
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'tb_annotations_export.csv';
    link.click();
  };

  // Metrics
  const total = tweets.length;
  const annotated = tweets.filter(t => t.label).length;

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-emerald-500/30">
      
      {/* Header & Metrics */}
      <header className="border-b border-slate-800 bg-slate-900/50 p-4 sticky top-0 backdrop-blur-sm z-10">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-lg font-semibold tracking-wide text-slate-100">TB Discourse Classifier</h1>
            <p className="text-sm text-slate-400 font-mono mt-1">
              Progress: {annotated} / {total} ({(annotated/total * 100).toFixed(1)}%)
            </p>
          </div>
          
          <div className="flex gap-3">
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
          </div>
        </div>

        {/* Filter Chips */}
        <div className="max-w-3xl mx-auto mt-6 flex gap-2 overflow-x-auto pb-2">
          {['Unannotated', 'All', 'Relevant', 'Irrelevant', 'Flagged'].map(f => (
            <button
              key={f}
              onClick={() => { setFilter(f); setCurrentIndex(0); }}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                filter === f 
                  ? 'bg-slate-700 text-slate-100 ring-1 ring-slate-500' 
                  : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </header>

      {/* Main Annotation Area */}
      <main className="max-w-3xl mx-auto p-4 flex flex-col items-center justify-center min-h-[60vh] pb-36">
        {!currentTweet ? (
          <div className="text-center text-slate-500 p-8 border border-dashed border-slate-700 rounded-xl w-full">
            <CheckCircle2 size={48} className="mx-auto mb-4 opacity-50" />
            <h2 className="text-xl font-medium text-slate-300">Queue Empty</h2>
            <p className="mt-2 text-sm">No tweets match the "{filter}" filter.</p>
          </div>
        ) : (
          <div className="w-full relative">
            
            {/* Status Badge (if viewing previously annotated tweets) */}
            {currentTweet.label && (
              <div className="absolute -top-3 left-4 px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded bg-slate-800 border border-slate-700 z-10">
                <span className={
                  currentTweet.label === 'Relevant' ? 'text-emerald-400' : 
                  currentTweet.label === 'Flagged' ? 'text-amber-400' : 
                  'text-slate-400'
                }>
                  Currently: {currentTweet.label}
                </span>
              </div>
            )}

            {/* Tweet Card */}
            <div className={`w-full bg-slate-800 rounded-xl p-6 md:p-8 shadow-2xl border transition-all duration-200 flex flex-col gap-4 ${
              flash === 'Relevant' ? 'border-emerald-500/50 bg-emerald-900/20' : 
              flash === 'Irrelevant' ? 'border-red-500/50 bg-red-900/20' : 
              flash === 'Flagged' ? 'border-amber-500/50 bg-amber-900/20' : 
              'border-slate-700'
            }`}>
              
              {/* Tweet Header (Metadata) */}
              <div className="flex items-center gap-3 border-b border-slate-700/50 pb-4">
                {/* Generic Avatar */}
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

              {/* Tweet Body */}
              <p className="text-xl md:text-2xl leading-relaxed text-slate-100 font-medium whitespace-pre-wrap mt-2">
                {currentTweet.text}
              </p>
              
              {/* Tweet Footer */}
              <div className="mt-4 text-xs text-slate-600 font-mono">
                System ID: {currentTweet.id}
              </div>
            </div>

            {/* Navigation (Only show if multiple items in view) */}
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

      {/* Fixed Action Bar at Bottom */}
      {currentTweet && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-950 via-slate-900 to-transparent pb-8 z-10">
          <div className="max-w-3xl mx-auto flex gap-3">
            <button
              onClick={() => handleLabel('Irrelevant')}
              className="flex-[2] flex flex-col items-center justify-center py-4 rounded-xl bg-red-900 hover:bg-red-800 active:bg-red-950 text-white transition-colors shadow-[0_0_15px_rgba(153,27,27,0.2)] border border-red-800"
            >
              <XCircle className="mb-1 opacity-90" size={24} />
              <span className="font-semibold tracking-wide">Irrelevant</span>
            </button>
            
            <button
              onClick={() => handleLabel('Flagged')}
              className="flex-1 flex flex-col items-center justify-center py-4 rounded-xl bg-amber-900/80 hover:bg-amber-800 active:bg-amber-950 text-amber-100 transition-colors border border-amber-700/50"
            >
              <Flag className="mb-1 opacity-80 text-amber-400" size={20} />
              <span className="text-sm font-medium tracking-wide">Skip / Flag</span>
            </button>

            <button
              onClick={() => handleLabel('Relevant')}
              className="flex-[2] flex flex-col items-center justify-center py-4 rounded-xl bg-emerald-700 hover:bg-emerald-600 active:bg-emerald-800 text-white transition-colors shadow-[0_0_15px_rgba(4,120,87,0.3)] border border-emerald-600"
            >
              <CheckCircle2 className="mb-1 opacity-90" size={24} />
              <span className="font-semibold tracking-wide">Relevant</span>
            </button>
          </div>
        </div>
      )}

      {/* Guidelines Modal Overlay */}
      {showGuidelines && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm transition-opacity">
          <div className="bg-slate-800 rounded-xl max-w-lg w-full p-6 md:p-8 border border-slate-700 shadow-2xl max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
              <Info className="text-slate-400" /> Annotation Guidelines
            </h2>
            
            <div className="space-y-6 text-sm text-slate-300">
              
              {/* Target Symptoms & Vocabulary Section */}
              <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4">
                <h3 className="font-bold text-slate-200 mb-2">Target TB Symptoms (Multilingual)</h3>
                <p className="text-xs text-slate-400 mb-3">
                  To be marked "Relevant," the tweet must mention at least one of these primary symptoms in a personal context. 
                  <span className="text-emerald-400 block mt-1">Note: Past-tense reports (e.g., bengikhwehlela, ne ke khohlela) are highly relevant!</span>
                </p>
                <div className="grid grid-cols-1 gap-3 text-slate-300 text-xs">
                  <ul className="list-none space-y-2">
                    <li className="flex flex-col border-b border-slate-700/50 pb-2">
                      <span className="font-semibold text-slate-200">Coughing (Chronic/Blood)</span> 
                      <span className="text-slate-400">ukukhwehlela / ndikhohlela / ho hohlola / ukukhwehlela igazi / ho khohlela madi</span>
                    </li>
                    <li className="flex flex-col border-b border-slate-700/50 pb-2">
                      <span className="font-semibold text-slate-200">Night Sweats</span> 
                      <span className="text-slate-400">ukujuluka ebusuku / ukubila ebusuku / ho fufuleloa bosiu</span>
                    </li>
                    <li className="flex flex-col border-b border-slate-700/50 pb-2">
                      <span className="font-semibold text-slate-200">Chest Pain & Breathlessness</span> 
                      <span className="text-slate-400">isifuba sibuhlungu / sefuba se bohloko / ngiphelelwa umoya / ho hloka moya</span>
                    </li>
                    <li className="flex flex-col border-b border-slate-700/50 pb-2">
                      <span className="font-semibold text-slate-200">Weight & Appetite Loss</span> 
                      <span className="text-slate-400">ngiyancipha / ho fokotsehela / angifuni ukudla / akungeni ukutya / ha ke rate ho ja</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-semibold text-slate-200">Fever & Fatigue</span> 
                      <span className="text-slate-400">umkhuhlane / ifiva / feberu / ukukhathala / ngiphelelwa amandla / ha ke na matla</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Relevant Rules */}
              <div className="bg-emerald-900/20 border border-emerald-800/50 rounded-lg p-4">
                <h3 className="font-bold text-emerald-400 mb-2 flex items-center gap-2">
                  <CheckCircle2 size={16} /> Relevant
                </h3>
                <p className="leading-relaxed">
                  First-person accounts expressing symptoms or direct personal concern. Includes colloquialisms and code-switching (e.g., "ngine-TB").
                </p>
                <ul className="mt-2 list-disc list-inside text-slate-400 marker:text-emerald-500 space-y-1">
                  <li>"Ngikhwehlela kabi and my chest is tight."</li>
                  <li>"Ne ke fufuleloa bosiu, I couldn't sleep." (Past tense included)</li>
                  <li>"My body failing, ngiphelelwa amandla."</li>
                </ul>
              </div>

              {/* Irrelevant Rules */}
              <div className="bg-red-900/20 border border-red-800/50 rounded-lg p-4">
                <h3 className="font-bold text-red-400 mb-2 flex items-center gap-2">
                  <XCircle size={16} /> Irrelevant
                </h3>
                <p className="leading-relaxed">
                  News, commentary, jokes, metaphors, or general illness without specific TB context.
                </p>
                <ul className="mt-2 list-disc list-inside text-slate-400 marker:text-red-500 space-y-1">
                  <li>"This heartbreak got my chest hurting." (Metaphor)</li>
                  <li>"Rats are being trained to detect Tuberculosis." (News)</li>
                  <li>"Ngiphethwe yikhanda." (Illness: headache, not a primary TB symptom)</li>
                </ul>
              </div>

              {/* Flag / Unsure Rules */}
              <div className="bg-amber-900/20 border border-amber-800/50 rounded-lg p-4">
                <h3 className="font-bold text-amber-400 mb-2 flex items-center gap-2">
                  <Flag size={16} /> Skip / Flag (Language & Uncertainty)
                </h3>
                <div className="leading-relaxed space-y-2 text-slate-300">
                  <p className="text-amber-200 font-medium">
                    CRITICAL: Do NOT use this for spam, ads, or non-health tweets. Pure noise is ALWAYS "Irrelevant".
                  </p>
                  <p>
                    Use this button <strong>ONLY</strong> when you physically cannot understand the language, dialect, or slang well enough to make a safe clinical judgment. Never guess.
                  </p>
                </div>
                <ul className="mt-3 list-disc list-inside text-slate-400 marker:text-amber-500 space-y-1">
                  <li>Tweets in languages you do not speak fluently (e.g., deep Xitsonga or Tshivenda).</li>
                  <li>Heavy Tsotsitaal or localized slang where the literal meaning is totally obscured.</li>
                  <li>Prevents "Blind Agreement" on unknown data. These will be isolated and translated later.</li>
                </ul>
              </div>

            </div>

            <button 
              onClick={() => setShowGuidelines(false)}
              className="mt-8 w-full py-3 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg font-medium transition-colors border border-slate-600 shadow-md"
            >
              Resume Annotation
            </button>
          </div>
        </div>
      )}

    </div>
  );
}