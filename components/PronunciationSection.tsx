import React, { useState, useEffect, useCallback } from 'react';
import { GLOBAL_PRONUNCIATIONS } from '../constants';
import { Volume2Icon } from './icons/Volume2Icon';

export const PronunciationSection: React.FC = () => {
  const [speakingTerm, setSpeakingTerm] = useState<string | null>(null);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  // Initialize voices and handle async loading in some browsers
  useEffect(() => {
    const updateVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      if (availableVoices.length > 0) {
        setVoices(availableVoices);
      }
    };

    updateVoices();
    // Chrome/Edge load voices asynchronously
    window.speechSynthesis.onvoiceschanged = updateVoices;

    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const handlePlayPronunciation = useCallback(
    (term: string, phonetic?: string) => {
      if (!window.speechSynthesis) return;

      window.speechSynthesis.cancel();

      // Syllable dashes (KAY-len) cause robotic pauses if replaced with spaces.
      // Removing them entirely (KAYlen) allows the engine to pronounce the word fluently.
      // Lowercasing prevents the engine from potentially spelling out uppercase letters.
      const speechText = (phonetic || term)
        .replace(/-/g, '')
        .replace(/[\[\]]/g, '')
        .toLowerCase();

      const utterance = new SpeechSynthesisUtterance(speechText);

      // Voice selection: Prioritize 'Natural', 'Google', or 'Premium' high-quality voices
      const preferredVoice =
        voices.find(
          (v) =>
            (v.name.includes('Natural') ||
              v.name.includes('Google') ||
              v.name.includes('Premium')) &&
            v.lang.startsWith('en')
        ) || voices.find((v) => v.lang.startsWith('en'));

      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }

      // Rate 1.0 is essential for natural human rhythm.
      // Slower rates often trigger a mechanical "syllable-by-syllable" synthesis mode.
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      utterance.volume = 1.0;

      utterance.onstart = () => setSpeakingTerm(term);
      utterance.onend = () => setSpeakingTerm(null);
      utterance.onerror = (e) => {
        console.error('Speech synthesis error:', e);
        setSpeakingTerm(null);
      };

      window.speechSynthesis.speak(utterance);
    },
    [voices]
  );

  const categories = [
    { id: 'name', title: 'Characters' },
    { id: 'location', title: 'Locations' },
    { id: 'term', title: 'Terminology' },
  ] as const;

  return (
    <section id="pronunciation" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-cinzel text-[#016F93] mb-4">
            Pronunciation Guide
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto font-light">
            Master the names and world-building terms of Atheria. Click any card
            to hear the official pronunciation.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div key={cat.id} className="flex flex-col">
              <h3 className="text-xl font-bold font-cinzel text-slate-800 mb-6 pb-2 border-b border-slate-200">
                {cat.title}
              </h3>
              <div className="space-y-3">
                {GLOBAL_PRONUNCIATIONS.filter((p) => p.category === cat.id).map(
                  (p, i) => (
                    <button
                      key={i}
                      onClick={() =>
                        handlePlayPronunciation(p.term, p.phonetic)
                      }
                      className={`w-full group flex items-center justify-between p-4 bg-white border rounded-xl transition-all text-left shadow-sm hover:shadow-md
                      ${
                        speakingTerm === p.term
                          ? 'border-[#016F93] ring-2 ring-[#016F93]/20 bg-[#f0f9fb]'
                          : 'border-slate-200 hover:border-[#016F93]'
                      }`}
                    >
                      <div className="flex-1">
                        <div
                          className={`font-bold transition-colors ${
                            speakingTerm === p.term
                              ? 'text-[#016F93]'
                              : 'text-slate-800'
                          }`}
                        >
                          {p.term}
                        </div>
                        {p.phonetic && (
                          <div className="text-xs text-[#016F93]/70 italic font-medium">
                            [{p.phonetic}]
                          </div>
                        )}
                      </div>
                      <div
                        className={`${
                          speakingTerm === p.term
                            ? 'text-[#016F93] animate-pulse'
                            : 'text-slate-300 group-hover:text-[#016F93]'
                        } transition-colors`}
                      >
                        <Volume2Icon />
                      </div>
                    </button>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
