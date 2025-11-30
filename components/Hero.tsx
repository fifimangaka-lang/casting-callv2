import React from 'react';
import { MANGA_TITLE } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section
      className="relative h-[70vh] md:h-[90vh] flex items-center justify-center text-center text-white overflow-hidden p-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://64.media.tumblr.com/b8a0238077041130df1dae58e2d8dd12/1a77a7e9112be76a-e4/s2048x3072/d56a22719b3ef6c6a42ce4a35b3683e88965c226.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
      <div className="relative z-10 p-8 md:p-12 bg-black/25 backdrop-blur-lg rounded-xl border border-white/20 max-w-3xl w-full">
        <h2 className="text-4xl md:text-6xl font-bold font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 mb-4 animate-fade-in-down">
          Casting Call
        </h2>
        <p className="text-lg md:text-2xl font-light mb-8 max-w-3xl mx-auto animate-fade-in-up text-slate-200">
          For the fantasy adventure manga:{' '}
          <span className="font-bold font-cinzel text-white">
            {MANGA_TITLE}
          </span>
        </p>
        <a
          href="#characters"
          className="bg-[#006E92] text-white font-bold py-3 px-8 rounded-full hover:bg-[#005c7a] transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#006E92]/30 animate-pulse-slow"
        >
          View Characters
        </a>
      </div>
    </section>
  );
};
