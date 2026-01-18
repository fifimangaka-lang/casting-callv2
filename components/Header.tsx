import React, { useState } from 'react';
import { MANGA_TITLE, SOCIAL_LINKS } from '../constants';

interface HeaderProps {
  onApplyClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onApplyClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
          <h1 className="text-xl md:text-2xl font-bold font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-[#016F93] to-[#015a7a]">
            {MANGA_TITLE}
          </h1>
        </a>

        {/* Hamburger Toggle Button - Mobile Only */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-[#016F93] focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-slate-700">
            <li>
              <a
                href="#characters"
                onClick={(e) => handleNavClick(e, '#characters')}
                className="hover:text-[#016F93] transition-colors duration-300"
              >
                Characters
              </a>
            </li>
            <li>
              <a
                href="#project"
                onClick={(e) => handleNavClick(e, '#project')}
                className="hover:text-[#016F93] transition-colors duration-300"
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
                className="hover:text-[#016F93] transition-colors duration-300 font-bold"
              >
                Audition
              </button>
            </li>
            <li>
              <a
                href={SOCIAL_LINKS.readManga}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#016F93] transition-colors duration-300"
              >
                Read Manga
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <nav className="bg-[#E0F7FA] border-t border-slate-300/30 shadow-inner">
          <ul className="flex flex-col p-4 space-y-4 text-center text-slate-700 font-bold">
            <li>
              <a
                href="#characters"
                onClick={(e) => handleNavClick(e, '#characters')}
                className="block py-2 hover:text-[#016F93]"
              >
                Characters
              </a>
            </li>
            <li>
              <a
                href="#project"
                onClick={(e) => handleNavClick(e, '#project')}
                className="block py-2 hover:text-[#016F93]"
              >
                Project
              </a>
            </li>
            <li>
              <a
                href="#pronunciation"
                onClick={(e) => handleNavClick(e, '#pronunciation')}
                className="block py-2 hover:text-[#016F93]"
              >
                Pronunciation
              </a>
            </li>
            <li>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onApplyClick();
                }}
                className="w-full py-2 text-[#016F93] hover:text-[#015a7a] font-bold"
              >
                Audition
              </button>
            </li>
            <li>
              <a
                href={SOCIAL_LINKS.readManga}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 hover:text-[#016F93]"
              >
                Read Manga
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
