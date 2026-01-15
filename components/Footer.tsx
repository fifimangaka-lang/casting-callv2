import React from 'react';
import { MANGA_TITLE, SOCIAL_LINKS } from '../constants';
import { TwitterIcon } from './icons/TwitterIcon';
import { YoutubeIcon } from './icons/YoutubeIcon';
import { InstagramIcon } from './icons/InstagramIcon';
import { PatreonIcon } from './icons/PatreonIcon';
import { TreeIcon } from './icons/TreeIcon';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020810] border-t border-[#016F93]/30 py-16">
      <div className="container mx-auto px-6 flex flex-col items-center">
        {/* Social & Manga Links */}
        <div className="flex items-center gap-8 mb-12">
          <a
            href={SOCIAL_LINKS.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-[#1DA1F2] transition-all transform hover:scale-110"
            aria-label="Twitter"
          >
            <TwitterIcon />
          </a>
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-[#E4405F] transition-all transform hover:scale-110"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
          <a
            href={SOCIAL_LINKS.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-[#FF0000] transition-all transform hover:scale-110"
            aria-label="YouTube"
          >
            <YoutubeIcon />
          </a>
          <a
            href={SOCIAL_LINKS.patreon}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-[#FF424D] transition-all transform hover:scale-110"
            aria-label="Patreon"
          >
            <PatreonIcon />
          </a>

          <div className="w-px h-8 bg-slate-800 mx-2"></div>

          <a
            href={SOCIAL_LINKS.readManga}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#016F93] hover:text-[#0288ad] transition-all transform hover:scale-110 flex flex-col items-center group"
            aria-label="Read the Manga"
          >
            <TreeIcon />
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] mt-2 opacity-100 text-[#016F93]">
              Read Manga
            </span>
          </a>
        </div>

        <div className="text-center">
          <p className="text-slate-400 max-w-md mx-auto leading-relaxed mb-8 text-lg font-light">
            Impossible circumstances meet unbreakable bonds. 🌳✨
          </p>

          <div className="pt-8 border-t border-slate-900 w-full max-w-xs mx-auto">
            <p className="text-slate-600 text-xs uppercase tracking-widest font-bold">
              &copy; 2026 Ye Olde Treehouse.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
