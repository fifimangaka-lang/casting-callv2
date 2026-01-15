import React, { useState, useCallback, useRef, useEffect } from 'react';
import {
  GLOBAL_PRONUNCIATIONS,
  MANGA_TITLE,
  type PronunciationEntry,
} from '../constants';
import { Volume2Icon } from './icons/Volume2Icon';

export const PronunciationSection: React.FC = () => {
  const [speakingTerm, setSpeakingTerm] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<string | null>(null);
  const [errorTerm, setErrorTerm] = useState<string | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  // Use a ref to track the current term for the event listeners to avoid stale closures
  const currentTermRef = useRef<string | null>(null);

  useEffect(() => {
    // Initialize audio element exactly once
    const audio = new Audio();
    audioRef.current = audio;

    const handleEnded = () => {
      setSpeakingTerm(null);
      currentTermRef.current = null;
    };

    const handlePlaying = () => {
      setIsLoading(null);
      setErrorTerm(null);
    };

    const handleError = () => {
      console.error('Audio playback error');
      const term = currentTermRef.current;
      if (term) setErrorTerm(term);
      setSpeakingTerm(null);
      setIsLoading(null);
    };

    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('playing', handlePlaying);
    audio.addEventListener('error', handleError);

    return () => {
      audio.pause();
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('playing', handlePlaying);
      audio.removeEventListener('error', handleError);
      audioRef.current = null;
    };
  }, []);

  const handlePlayPronunciation = useCallback(
    (entry: PronunciationEntry) => {
      const audio = audioRef.current;
      if (!entry.audioUrl || !audio) return;

      // Toggle logic: If clicking the currently playing term, stop it.
      if (speakingTerm === entry.term) {
        audio.pause();
        setSpeakingTerm(null);
        currentTermRef.current = null;
        return;
      }

      // Set UI states
      setSpeakingTerm(entry.term);
      setIsLoading(entry.term);
      setErrorTerm(null);
      currentTermRef.current = entry.term;

      // Reset audio state
      audio.pause();
      audio.currentTime = 0;
      audio.src = entry.audioUrl;

      // load() is essential before play() when changing sources
      audio.load();

      // Modern browsers return a promise from play()
      const playPromise = audio.play();

      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          // We only care about errors if they aren't 'AbortError'
          // (which happens when we intentionally switch tracks quickly)
          if (error.name !== 'AbortError') {
            console.error('Playback failed:', error);
            setErrorTerm(entry.term);
            setSpeakingTerm(null);
            setIsLoading(null);
          }
        });
      }

      // Protection against infinite loading UI if file is missing or network hangs
      const timeout = setTimeout(() => {
        if (
          currentTermRef.current === entry.term &&
          audio.paused &&
          !audio.ended
        ) {
          setIsLoading(null);
        }
      }, 4000);

      return () => clearTimeout(timeout);
    },
    [speakingTerm]
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
          <p className="text-slate-600 max-w-2xl mx-auto font-light mb-8">
            The guide to pronouncing things in{' '}
            <span className="font-bold font-cinzel text-[#016F93]">
              {MANGA_TITLE}
            </span>
            . Click any term below to hear the official recording and
            pronunciation.
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
                  (p, i) => {
                    const hasAudio = !!p.audioUrl;
                    const isPlaying = speakingTerm === p.term;
                    const isBuffering = isLoading === p.term;
                    const isErrored = errorTerm === p.term;

                    return (
                      <button
                        key={i}
                        onClick={() => handlePlayPronunciation(p)}
                        disabled={!hasAudio}
                        className={`w-full group flex items-center justify-between p-4 bg-white border rounded-xl transition-all text-left shadow-sm
                        ${
                          isPlaying || isBuffering
                            ? 'border-[#016F93] ring-2 ring-[#016F93]/20 bg-[#f0f9fb]'
                            : isErrored
                            ? 'border-red-400 bg-red-50'
                            : 'border-slate-200 hover:border-[#016F93] hover:shadow-md'
                        }
                        ${
                          !hasAudio
                            ? 'opacity-40 grayscale cursor-not-allowed'
                            : 'active:scale-[0.98]'
                        }`}
                        title={
                          !hasAudio
                            ? 'Audio coming soon'
                            : isErrored
                            ? 'Click to retry'
                            : 'Play pronunciation'
                        }
                      >
                        <div className="flex-1">
                          <div
                            className={`font-bold transition-colors ${
                              isPlaying || isBuffering
                                ? 'text-[#016F93]'
                                : isErrored
                                ? 'text-red-500'
                                : 'text-slate-800'
                            }`}
                          >
                            {p.term}
                          </div>
                          {p.phonetic && (
                            <div
                              className={`text-xs italic font-medium ${
                                isErrored ? 'text-red-400' : 'text-[#016F93]/70'
                              }`}
                            >
                              [{p.phonetic}]
                            </div>
                          )}
                        </div>
                        <div
                          className={`${
                            isPlaying || isBuffering
                              ? 'text-[#016F93]'
                              : isErrored
                              ? 'text-red-400'
                              : 'text-slate-300 group-hover:text-[#016F93]'
                          } transition-colors`}
                        >
                          {isBuffering ? (
                            <div className="flex gap-1">
                              <div className="w-1.5 h-1.5 bg-current rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                              <div className="w-1.5 h-1.5 bg-current rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                              <div className="w-1.5 h-1.5 bg-current rounded-full animate-bounce"></div>
                            </div>
                          ) : isPlaying ? (
                            <div className="flex items-end gap-0.5 h-4 mb-1">
                              <div className="w-0.5 bg-current animate-[music-bar_0.5s_ease-in-out_infinite] h-full"></div>
                              <div className="w-0.5 bg-current animate-[music-bar_0.7s_ease-in-out_infinite] h-2/3"></div>
                              <div className="w-0.5 bg-current animate-[music-bar_0.4s_ease-in-out_infinite] h-1/2"></div>
                            </div>
                          ) : isErrored ? (
                            <span className="text-[10px] font-black uppercase">
                              Retry
                            </span>
                          ) : (
                            <Volume2Icon />
                          )}
                        </div>
                      </button>
                    );
                  }
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes music-bar {
          0%, 100% { height: 4px; }
          50% { height: 16px; }
        }
      `}</style>
    </section>
  );
};
