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

const LOREM_IPSUM_LINES = `1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
2. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
3. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`;

export const CharacterModal: React.FC<CharacterModalProps> = ({
  character,
  onClose,
}) => {
  const [auditionLines, setAuditionLines] = useState<string>('');
  const [activeAudio, setActiveAudio] = useState<HTMLAudioElement | null>(null);
  const [playingVoiceLine, setPlayingVoiceLine] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [areLinesVisible, setAreLinesVisible] = useState<boolean>(false);
  const [lineFontSize, setLineFontSize] = useState<number>(14);
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
    if (!auditionLines) {
      setAuditionLines(LOREM_IPSUM_LINES);
    }
    setAreLinesVisible((prev) => !prev);
  }, [auditionLines]);

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
        character.imageUrls.length
    );
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % character.imageUrls.length
    );
  };

  const increaseFontSize = () => {
    setLineFontSize((prevSize) => Math.min(prevSize + 2, 28));
  };

  const decreaseFontSize = () => {
    setLineFontSize((prevSize) => Math.max(prevSize - 2, 12));
  };

  const handleCopyLines = () => {
    if (!auditionLines) return;
    navigator.clipboard
      .writeText(auditionLines)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((err) => {
        console.error('Failed to copy audition lines:', err);
      });
  };

  // Index 0 is the Atmosphere Cover Art
  // Index 1+ are Manga Pages (B4 Sizing)
  const isMangaPage = currentImageIndex > 0;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[70] flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className={`relative bg-slate-900 border border-slate-700 rounded-xl max-w-6xl w-full h-[90vh] md:h-[85vh] overflow-hidden flex flex-col md:grid ${
          areLinesVisible ? 'md:grid-cols-[0fr_1fr]' : 'md:grid-cols-2'
        } gap-0 transition-all duration-500 ease-in-out shadow-2xl`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-20 bg-black/40 rounded-full p-2 hover:bg-black/60 md:bg-transparent"
        >
          <CloseIcon />
        </button>

        {/* Left Side: Image Display Area */}
        <div
          className={`relative overflow-hidden shrink-0 flex items-center justify-center bg-black transition-all duration-300 ${
            isMangaPage ? 'h-[60vh] md:h-full' : 'h-48 sm:h-64 md:h-full'
          }`}
        >
          <img
            key={currentImageIndex}
            src={character.imageUrls[currentImageIndex]}
            alt={`${character.name}`}
            fetchPriority="high"
            loading="eager"
            className={`w-full h-full ${
              isMangaPage ? 'object-contain' : 'object-cover'
            }`}
          />
          {character.imageUrls.length > 1 && (
            <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-4 z-10">
              <button
                onClick={handlePrevImage}
                className="p-2 bg-black/50 rounded-full text-white hover:bg-black/80 transition-colors shadow-lg"
              >
                <ArrowLeftIcon />
              </button>
              <span className="text-white text-xs md:text-sm font-semibold bg-black/50 px-3 py-1 rounded-full tabular-nums">
                {currentImageIndex + 1} / {character.imageUrls.length}
              </span>
              <button
                onClick={handleNextImage}
                className="p-2 bg-black/50 rounded-full text-white hover:bg-black/80 transition-colors shadow-lg"
              >
                <ArrowRightIcon />
              </button>
            </div>
          )}
        </div>

        {/* Right Side: Content Area */}
        <div className="p-6 md:p-8 flex flex-col flex-1 overflow-y-auto min-h-0 bg-slate-900">
          <div className="pb-8">
            <h2 className="text-3xl md:text-4xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-[#E0F7FA] to-[#016F93] mb-2">
              {character.name}
            </h2>
            <p className="text-[#E0F7FA] mb-6 text-lg tracking-wide uppercase  opacity-80">
              {character.role}
            </p>

            <h4 className="font-bold text-lg text-slate-200 mt-4 mb-2 border-b border-slate-700/50 pb-1 ">
              Biography
            </h4>
            <p className="text-slate-300 font-light text-base leading-relaxed mb-6">
              {character.bio}
            </p>

            <h4 className="font-bold text-lg text-slate-200 mt-6 mb-2 border-b border-slate-700/50 pb-1 ">
              Personality
            </h4>
            <p className="text-slate-300 font-light text-base leading-relaxed mb-6">
              {character.personality}
            </p>

            <div className="flex flex-col sm:flex-row sm:items-end justify-between mt-6 mb-3 border-b border-slate-700/50 pb-1">
              <h4 className="font-bold text-lg text-slate-200 ">
                Voice Reference
              </h4>
              {character.voiceRef && (
                <span className="text-sm italic text-[#DEF3F6] mb-1 sm:mb-0 font-medium">
                  {character.voiceRef}
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {character.voiceExamples.map((voiceUrl, index) => (
                <button
                  key={index}
                  onClick={() => handlePlayVoiceExample(voiceUrl)}
                  className="flex items-center gap-3 p-3 bg-slate-800 border border-slate-700 rounded-lg text-left hover:bg-slate-700 transition-colors hover:border-slate-500"
                >
                  {playingVoiceLine === voiceUrl ? <StopIcon /> : <PlayIcon />}
                  <span className="text-sm text-slate-200">
                    Example Line {index + 1}
                  </span>
                </button>
              ))}
            </div>

            <div className="mt-4">
              <button
                onClick={handleToggleAuditionLines}
                className="w-full flex items-center justify-center gap-2 bg-[#016F93] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#015a7a] transition-all duration-300 shadow-md"
              >
                {areLinesVisible ? <ChevronUpIcon /> : <ChevronDownIcon />}
                {areLinesVisible
                  ? 'Hide Audition Lines'
                  : 'Show Audition Lines'}
              </button>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  areLinesVisible
                    ? 'max-h-[3000px] opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                {auditionLines && (
                  <div className="mt-4 p-5 bg-slate-800 border border-slate-600 rounded-lg shadow-inner">
                    <div className="flex justify-between items-center mb-3 border-b border-slate-700/50 pb-2">
                      <h5 className="font-bold text-md text-slate-200 ">
                        Audition Lines:
                      </h5>
                      <div className="flex items-center gap-2 text-slate-300">
                        <button
                          onClick={handleCopyLines}
                          className="p-1.5 rounded-full hover:bg-slate-700 transition-colors disabled:cursor-not-allowed"
                        >
                          {isCopied ? <CheckIcon /> : <CopyIcon />}
                        </button>
                        <div className="h-4 w-px bg-slate-600 mx-1"></div>
                        <button
                          onClick={decreaseFontSize}
                          className="p-1.5 rounded-full hover:bg-slate-700 transition-colors"
                          disabled={lineFontSize <= 12}
                        >
                          <MinusIcon />
                        </button>
                        <span className="text-sm text-slate-300 w-8 text-center tabular-nums font-mono">
                          {lineFontSize}px
                        </span>
                        <button
                          onClick={increaseFontSize}
                          className="p-1.5 rounded-full hover:bg-slate-700 transition-colors"
                          disabled={lineFontSize >= 28}
                        >
                          <PlusIcon />
                        </button>
                      </div>
                    </div>
                    <div
                      className="text-slate-200 font-light space-y-4 whitespace-pre-wrap transition-all duration-300"
                      style={{
                        fontSize: `${lineFontSize}px`,
                        lineHeight: '1.6',
                      }}
                    >
                      {auditionLines}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
