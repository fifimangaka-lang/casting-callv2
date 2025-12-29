import React from 'react';
import { MANGA_TITLE } from '../constants';

interface HeaderProps {
  onApplyClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onApplyClick }) => {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#E0F7FA]/95 backdrop-blur-lg border-b border-slate-300/50">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        <a
          href="#"
          onClick={handleLogoClick}
          className="flex items-center gap-3"
        >
          <img
            src="https://64.media.tumblr.com/211984b804eaf14bf4fe36ba6cc75664/1a77a7e9112be76a-83/s128x128u_c1/79f0189c9de5fb048a526126cc5faf7873419a78.pnj"
            alt={`${MANGA_TITLE} Logo`}
            className="h-12 w-12 md:h-14 md:w-14 object-contain"
          />
          <h1 className="text-xl md:text-2xl font-bold font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-[#236088] to-[#006E92]">
            {MANGA_TITLE}
          </h1>
        </a>
        <nav>
          <ul className="flex space-x-4 md:space-x-6 text-sm md:text-base text-slate-700">
            <li>
              <a
                href="#characters"
                onClick={(e) => handleNavClick(e, '#characters')}
                className="hover:text-[#006E92] transition-colors duration-300"
              >
                Characters
              </a>
            </li>
            <li>
              <a
                href="#project"
                onClick={(e) => handleNavClick(e, '#project')}
                className="hover:text-[#006E92] transition-colors duration-300"
              >
                Project
              </a>
            </li>
            <li>
              <a
                href="#pronunciation"
                onClick={(e) => handleNavClick(e, '#pronunciation')}
                className="hover:text-[#016F93] transition-colors duration-300"
              >
                Pronunciation
              </a>
            </li>
            <li>
              <button
                onClick={onApplyClick}
                className="hover:text-[#006E92] transition-colors duration-300"
              >
                Audition
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
