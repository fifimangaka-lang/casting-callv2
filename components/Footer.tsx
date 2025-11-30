import React from 'react';
import { MANGA_TITLE } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent border-t border-[#236088]/50">
      <div className="container mx-auto px-6 py-8 text-center text-slate-400">
        <p>
          &copy; {new Date().getFullYear()} {MANGA_TITLE}.
        </p>
        <p className="text-sm mt-2 text-slate-500">
          Impossible circumstances meet unbreakable bonds. 🌳✨
        </p>
      </div>
    </footer>
  );
};
