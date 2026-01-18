import React, { useState, useCallback, useEffect } from 'react';
import type { Character } from '../types';
import { CloseIcon } from './icons/CloseIcon';
import { PlayIcon } from './icons/PlayIcon';
import { StopIcon } from './icons/StopIcon';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { ChevronDownIcon } from './icons/ChevronDownIcon';
import { ChevronUpIcon } from './icons/ChevronUpIcon';
import { PlusIcon } from './icons/PlusIcon';
import { MinusIcon } from './icons/MinusIcon';
import { CopyIcon } from './icons/CopyIcon';
import { CheckIcon } from './icons/CheckIcon';

interface CharacterModalProps {
  character: Character;
  onClose: () => void;
}

interface ParsedLine {
  label: string;
  tone: string;
  dialogue: string;
  context: string;
  isOptional: boolean;
}

export const CharacterModal: React.FC<CharacterModalProps> = ({
  character,
  onClose,
}) => {
  const [activeAudio, setActiveAudio] = useState<HTMLAudioElement | null>(null);
  const [playingVoiceLine, setPlayingVoiceLine] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [areLinesVisible, setAreLinesVisible] = useState<boolean>(false);
  const [lineFontSize, setLineFontSize] = useState<number>(24);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  useEffect(() => {
    return () => {
      if (activeAudio) {
        activeAudio.pause();
        activeAudio.currentTime = 0;
      }
    };
  }, [activeAudio]);

  const handleToggleAuditionLines = useCallback(() => {
    setAreLinesVisible((prev) => !prev);
  }, []);

  const handlePlayVoiceExample = (voiceUrl: string) => {
    if (activeAudio) {
      activeAudio.pause();
      activeAudio.currentTime = 0;
    }

    if (playingVoiceLine === voiceUrl) {
      setPlayingVoiceLine(null);
      setActiveAudio(null);
    } else {
      const newAudio = new Audio(voiceUrl);
      newAudio.volume = 0.7;
      newAudio.play();

      newAudio.onended = () => {
        setPlayingVoiceLine(null);
      };

      setActiveAudio(newAudio);
      setPlayingVoiceLine(voiceUrl);
    }
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + character.imageUrls.length) %
        character.imageUrls.length,
    );
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % character.imageUrls.length,
    );
  };

  const handleCopyLines = () => {
    if (!character.auditionLines) return;
    navigator.clipboard
      .writeText(character.auditionLines)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((err) => {
        console.error('Failed to copy audition lines:', err);
      });
  };

  const parseLines = (text: string): ParsedLine[] => {
    return text
      .split('\n')
      .filter((l) => l.trim())
      .map((line) => {
        const isOptional = line.trim().toUpperCase().startsWith('OPTIONAL:');
        const cleanLine = line.replace(/^OPTIONAL:\s*/i, '').trim();

        // Pattern 1: Label: (Tone) "Dialogue" Context
        const regexWithLabel = /^([^:]+):\s*\(([^)]+)\)\s*"([^"]+)"\s*(.*)$/i;
        // Pattern 2: (Tone) "Dialogue" Context (no label)
        const regexNoLabel = /^\(([^)]+)\)\s*"([^"]+)"\s*(.*)$/i;

        const matchWithLabel = cleanLine.match(regexWithLabel);
        if (matchWithLabel) {
          return {
            label: matchWithLabel[1].trim(),
            tone: matchWithLabel[2].trim(),
            dialogue: matchWithLabel[3].trim(),
            context: matchWithLabel[4].trim().replace(/^-/, '').trim(),
            isOptional,
          };
        }

        const matchNoLabel = cleanLine.match(regexNoLabel);
        if (matchNoLabel) {
          return {
            label: '',
            tone: matchNoLabel[1].trim(),
            dialogue: matchNoLabel[2].trim(),
            context: matchNoLabel[3].trim().replace(/^-/, '').trim(),
            isOptional,
          };
        }

        return {
          label: '',
          tone: '',
          dialogue: cleanLine,
          context: '',
          isOptional,
        };
      });
  };

  const renderContextWithLinks = (context: string) => {
    const chapterMatch = context.match(/Chapter (\d+)/i);
    if (chapterMatch) {
      const chapterUrl = `https://yeoldetreehouse.com/chapter${chapterMatch[1]}`;
      const parts = context.split(chapterMatch[0]);
      return (
        <span className="flex items-center gap-1">
          {parts[0]}
          <a
            href={chapterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#016F93] hover:text-[#0288ad] hover:underline underline-offset-4 transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {chapterMatch[0]}
          </a>
          {parts[1]}
        </span>
      );
    }
    return context;
  };

  const parsedAuditionLines = parseLines(character.auditionLines);
  const isMangaPage = currentImageIndex > 0;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-md z-[70] flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className={`relative bg-slate-900 border border-slate-700 rounded-2xl max-w-6xl w-full h-[90vh] md:h-[85vh] overflow-x-hidden overflow-y-auto flex flex-col ${
          areLinesVisible ? 'md:grid-cols-1' : 'md:grid-cols-2'
        } md:grid gap-0 transition-all duration-500 ease-in-out shadow-2xl`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-30 bg-black/40 rounded-full p-2 hover:bg-black/60 md:bg-transparent"
        >
          <CloseIcon />
        </button>

        {/* Visual Reference (Image Gallery) - Always visible, moves to top when script open */}
        <div
          className={`relative overflow-hidden shrink-0 flex items-center justify-center bg-white transition-all duration-500 ${
            areLinesVisible
              ? 'h-[40vh] md:h-[50vh] w-full'
              : isMangaPage
                ? 'h-[35vh] md:h-full'
                : 'h-[45vh] sm:h-[55vh] md:h-full'
          }`}
        >
          <div
            className={`w-full h-full flex items-center justify-center ${
              !isMangaPage ? 'p-4 md:p-10' : 'p-0'
            }`}
          >
            <img
              key={currentImageIndex}
              src={character.imageUrls[currentImageIndex]}
              alt={`${character.name}`}
              className={`max-w-full max-h-full transition-all duration-300 object-contain ${
                !isMangaPage ? 'shadow-[0_25px_50px_rgba(0,0,0,0.2)]' : ''
              } border border-slate-100 rounded-sm`}
            />
          </div>

          {character.imageUrls.length > 1 && (
            <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center gap-4 z-10">
              <button
                onClick={handlePrevImage}
                className="p-2 bg-black/60 rounded-full text-white hover:bg-black/80 transition-colors shadow-lg backdrop-blur-sm"
              >
                <ArrowLeftIcon />
              </button>
              <span className="text-white text-[10px] md:text-xs font-bold bg-black/60 px-3 py-1.5 rounded-full tabular-nums uppercase tracking-widest backdrop-blur-sm">
                {currentImageIndex + 1} / {character.imageUrls.length}
              </span>
              <button
                onClick={handleNextImage}
                className="p-2 bg-black/60 rounded-full text-white hover:bg-black/80 transition-colors shadow-lg backdrop-blur-sm"
              >
                <ArrowRightIcon />
              </button>
            </div>
          )}
        </div>

        {/* Content Area */}
        <div
          className={`p-6 md:p-10 flex flex-col flex-1 bg-slate-900 scrollbar-thin scrollbar-thumb-[#016F93] ${
            areLinesVisible ? 'overflow-visible' : 'overflow-y-auto min-h-0'
          }`}
        >
          <div className="pb-10 max-w-4xl mx-auto w-full">
            <h2 className="text-4xl md:text-5xl font-bold font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-[#E0F7FA] to-[#016F93] mb-2">
              {character.name}
            </h2>
            <p className="text-[#016F93] font-bold text-xl tracking-[0.2em] uppercase font-cinzel mb-8 opacity-90">
              {character.role}
            </p>

            <div className="flex flex-col gap-10 mb-12">
              <section>
                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-[0.3em] mb-3 font-cinzel border-b border-slate-800 pb-1">
                  Biography
                </h4>
                <p className="text-slate-300 font-light text-xl leading-relaxed">
                  {character.bio}
                </p>
              </section>

              <section>
                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-[0.3em] mb-3 font-cinzel border-b border-slate-800 pb-1">
                  Personality
                </h4>
                <p className="text-slate-300 font-light text-xl leading-relaxed">
                  {character.personality}
                </p>
              </section>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 border-b border-slate-700/50 pb-2">
              <h4 className="font-bold text-xl text-slate-200 font-cinzel">
                Voice Reference
              </h4>
              {character.voiceRef && (
                <span className="text-lg italic text-[#016F93] font-bold tracking-wide">
                  "{character.voiceRef}"
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {character.voiceExamples.map((voiceUrl, index) => (
                <button
                  key={index}
                  onClick={() => handlePlayVoiceExample(voiceUrl)}
                  className="group flex items-center justify-between p-4 bg-slate-800/40 border border-slate-700/50 rounded-xl text-left hover:bg-slate-800 transition-all hover:border-[#016F93]/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-[#016F93]">
                      {playingVoiceLine === voiceUrl ? (
                        <StopIcon />
                      ) : (
                        <PlayIcon />
                      )}
                    </div>
                    <span className="text-lg text-slate-200 font-semibold">
                      Example {index + 1}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    Listen
                  </span>
                </button>
              ))}
            </div>

            <div className="mt-8">
              <button
                onClick={handleToggleAuditionLines}
                className="w-full flex items-center justify-center gap-3 bg-[#016F93] text-white font-bold py-5 px-8 rounded-2xl hover:bg-[#0288ad] transition-all duration-300 shadow-xl shadow-[#016F93]/10 active:scale-[0.98]"
              >
                {areLinesVisible ? <ChevronUpIcon /> : <ChevronDownIcon />}
                <span className="font-cinzel tracking-[0.2em] uppercase text-sm">
                  {areLinesVisible ? 'Hide Script' : 'View Audition Script'}
                </span>
              </button>

              <div
                className={`transition-all duration-700 ease-in-out overflow-hidden ${
                  areLinesVisible
                    ? 'max-h-[5000px] opacity-100 mt-8'
                    : 'max-h-0 opacity-0'
                }`}
              >
                {/* Script Controls */}
                <div className="flex justify-between items-center bg-slate-800/80 p-4 rounded-t-2xl border-x border-t border-slate-700">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                    <h5 className="font-bold text-[10px] text-slate-400 uppercase tracking-[0.3em]">
                      Audition Lines
                    </h5>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleCopyLines}
                      className="p-2 rounded-lg hover:bg-slate-700 transition-colors text-slate-400 hover:text-white"
                      title="Copy script to clipboard"
                    >
                      {isCopied ? <CheckIcon /> : <CopyIcon />}
                    </button>
                    <div className="h-4 w-px bg-slate-600 mx-2"></div>
                    <button
                      onClick={() =>
                        setLineFontSize((f) => Math.max(f - 2, 12))
                      }
                      className="p-2 rounded-lg hover:bg-slate-700 transition-colors text-slate-400 hover:text-white"
                      disabled={lineFontSize <= 12}
                    >
                      <MinusIcon />
                    </button>
                    <span className="text-[11px] text-[#016F93] w-10 text-center tabular-nums font-mono font-black">
                      {lineFontSize}px
                    </span>
                    <button
                      onClick={() =>
                        setLineFontSize((f) => Math.min(f + 2, 48))
                      }
                      className="p-2 rounded-lg hover:bg-slate-700 transition-colors text-slate-400 hover:text-white"
                      disabled={lineFontSize >= 48}
                    >
                      <PlusIcon />
                    </button>
                  </div>
                </div>

                {/* The Parsed Script Blocks */}
                <div className="bg-slate-800/30 border-x border-b border-slate-700 rounded-b-2xl divide-y divide-slate-700/50">
                  {parsedAuditionLines.map((line, idx) => (
                    <div
                      key={idx}
                      className={`p-8 hover:bg-slate-800/20 transition-colors relative ${
                        line.isOptional
                          ? 'border-l-4 border-amber-500/50 bg-amber-500/5'
                          : ''
                      }`}
                    >
                      {line.isOptional && (
                        <div className="absolute top-0 right-0 px-3 py-1 bg-amber-500/20 text-amber-500 text-[10px] font-black uppercase tracking-[0.2em] rounded-bl-lg border-l border-b border-amber-500/20">
                          Optional
                        </div>
                      )}
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                        <div className="flex flex-wrap items-center gap-4">
                          {/* Sync Text Sizes: Label and Tone */}
                          <div className="text-xl font-black uppercase tracking-[0.3em] text-slate-400">
                            {line.label || `LINE ${idx + 1}`}
                          </div>
                          {line.tone && (
                            <div className="text-xl font-cinzel font-bold text-[#016F93] uppercase tracking-wide">
                              [ {line.tone} ]
                            </div>
                          )}
                        </div>
                        {line.context && (
                          <div className="text-sm text-slate-200 font-bold uppercase tracking-widest whitespace-nowrap bg-black/40 px-5 py-2.5 rounded-xl border border-slate-700/50 shadow-inner">
                            {renderContextWithLinks(line.context)}
                          </div>
                        )}
                      </div>

                      <div className="relative mt-2">
                        <blockquote
                          className="text-slate-100 font-medium leading-relaxed font-lato"
                          style={{ fontSize: `${lineFontSize}px` }}
                        >
                          {line.dialogue.startsWith('"')
                            ? line.dialogue
                            : `"${line.dialogue}"`}
                        </blockquote>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 text-center">
                  <p className="text-xs text-slate-500 uppercase tracking-[0.4em] italic font-cinzel">
                    End of Audition Lines
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
