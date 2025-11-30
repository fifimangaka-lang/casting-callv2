import React, { useState, useRef, useEffect, useCallback } from 'react';
import { OST_PLAYLIST } from '../constants';
import { PlayerPreviousIcon } from './icons/PlayerPreviousIcon';
import { PlayerPlayIcon } from './icons/PlayerPlayIcon';
import { PlayerPauseIcon } from './icons/PlayerPauseIcon';
import { PlayerNextIcon } from './icons/PlayerNextIcon';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [volume, setVolume] = useState(0.3);
  const [isVolumeSliderVisible, setIsVolumeSliderVisible] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const playlist = OST_PLAYLIST;

  // Effect to initialize the audio element and set up long-term event listeners
  useEffect(() => {
    audioRef.current = new Audio();
    const audio = audioRef.current;

    const handleEnded = () => {
      setCurrentTrackIndex(prev => (prev + 1) % playlist.length);
    };

    // Sync React state with the actual audio element's state
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    // Cleanup on unmount
    return () => {
      audio.pause();
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
  }, [playlist.length]);

  // Effect to handle track changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const shouldPlay = !audio.paused;
    audio.src = playlist[currentTrackIndex].url;

    if (shouldPlay) {
      audio.play().catch(e => {
        console.error("Error auto-playing next track:", e);
      });
    }
  }, [currentTrackIndex, playlist]);
  
  // Effect to handle volume changes
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
    }
  }, [volume]);


  const togglePlayPause = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch(e => {
        console.error("Audio playback failed on toggle.", e);
      });
    } else {
      audio.pause();
    }
  }, []);

  const playNextTrack = useCallback(() => {
    setCurrentTrackIndex(prev => (prev + 1) % playlist.length);
  }, [playlist.length]);

  const playPreviousTrack = useCallback(() => {
    setCurrentTrackIndex(prev => (prev - 1 + playlist.length) % playlist.length);
  }, [playlist.length]);

  const handleVolumeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  }, []);

  return (
    <div
      onMouseEnter={() => setIsVolumeSliderVisible(true)}
      onMouseLeave={() => setIsVolumeSliderVisible(false)}
      className="fixed bottom-6 right-6 z-50 p-3 bg-slate-900/80 backdrop-blur-md border border-[#079CB5]/60 rounded-lg flex flex-col items-center gap-2 shadow-lg shadow-[#079CB5]/20 transition-all"
      aria-label="Music Player"
    >
      <div className={`absolute bottom-full mb-3 p-2 bg-slate-900/90 rounded-md transition-opacity duration-300 ${isVolumeSliderVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <label htmlFor="volume-slider" className="sr-only">Volume</label>
          <input
              id="volume-slider"
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="w-24 h-2 bg-slate-700/50 rounded-lg appearance-none cursor-pointer accent-[#079CB5]"
          />
      </div>
      <div className="text-xs text-white font-bold truncate w-32 text-center" title={playlist[currentTrackIndex].title}>
        {playlist[currentTrackIndex].title}
      </div>
      <div className="flex items-center justify-center gap-4 text-[#E0F7FA]">
        <button onClick={playPreviousTrack} aria-label="Previous track" className="hover:text-white transition-colors disabled:opacity-50" disabled={!audioRef.current}>
          <PlayerPreviousIcon />
        </button>
        <button onClick={togglePlayPause} aria-label={isPlaying ? 'Pause music' : 'Play music'} className="w-10 h-10 rounded-full bg-[#079CB5]/80 flex items-center justify-center text-white hover:bg-[#079CB5] transition-colors disabled:opacity-50" disabled={!audioRef.current}>
          {isPlaying ? <PlayerPauseIcon /> : <PlayerPlayIcon />}
        </button>
        <button onClick={playNextTrack} aria-label="Next track" className="hover:text-white transition-colors disabled:opacity-50" disabled={!audioRef.current}>
          <PlayerNextIcon />
        </button>
      </div>
    </div>
  );
};