import React from 'react';
import { MANGA_TITLE } from '../constants';

interface ProjectSpecsProps {
  onApplyClick: () => void;
  onStaffClick: () => void;
}

export const ProjectSpecs: React.FC<ProjectSpecsProps> = ({
  onApplyClick,
  onStaffClick,
}) => {
  return (
    <section
      id="project"
      className="py-24 md:py-32 bg-slate-50 relative overflow-hidden border-t border-slate-200"
    >
      {/* Ambient Light Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E0F7FA] blur-[120px] rounded-full pointer-events-none opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#016F93]/5 blur-[100px] rounded-full pointer-events-none opacity-40"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center gap-4 text-[#016F93]">
              <div className="h-px w-8 md:w-20 bg-gradient-to-r from-transparent to-current opacity-30"></div>
              <h2 className="text-3xl md:text-5xl font-bold font-cinzel tracking-[0.2em] uppercase text-[#014d66]">
                Project Details
              </h2>
              <div className="h-px w-8 md:w-20 bg-gradient-to-l from-transparent to-current opacity-30"></div>
            </div>
          </div>
          <p className="text-slate-500 max-w-2xl mx-auto font-light text-lg md:text-xl leading-relaxed">
            Everything you need to know about joining the production of{' '}
            <span className="text-[#016F93] font-bold font-cinzel tracking-wider">
              {MANGA_TITLE}
            </span>
            .
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Synopsis */}
          <div className="group bg-white/70 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-[#016F93]/10 hover:border-[#016F93]/40 transition-all duration-500 shadow-xl shadow-[#016F93]/5">
            <h3 className="text-2xl font-bold font-cinzel text-[#014d66] mb-6 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-[#016F93] rounded-full group-hover:scale-y-125 transition-transform origin-bottom"></span>
              Synopsis
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed font-normal">
              A mind-reading captain, a genius with diamond fists, and a
              fire-breathing swordsman hunt a rogue ringmaster whose forbidden
              magic defies the law. But when the chase exposes corruption within
              their own ranks, their mission and their loyalties begin to
              unravel.
            </p>
          </div>

          {/* Scope */}
          <div className="group bg-white/70 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-[#016F93]/10 hover:border-[#016F93]/40 transition-all duration-500 shadow-xl shadow-[#016F93]/5">
            <h3 className="text-2xl font-bold font-cinzel text-[#014d66] mb-6 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-[#016F93] rounded-full group-hover:scale-y-125 transition-transform origin-bottom"></span>
              Project Scope
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed font-normal">
              We are casting for the main roles in an upcoming comic voice-over
              of the fantasy adventure manga "{MANGA_TITLE}". The total project
              will encompass the "Nosferi Dilemma" Arc; Volumes 1-5. This
              website is updated regularly with new roles, so be sure to check
              back often!
            </p>
          </div>

          {/* Requirements */}
          <div className="group bg-white/70 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-[#016F93]/10 hover:border-[#016F93]/40 transition-all duration-500 shadow-xl shadow-[#016F93]/5">
            <h3 className="text-2xl font-bold font-cinzel text-[#014d66] mb-6 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-[#016F93] rounded-full group-hover:scale-y-125 transition-transform origin-bottom"></span>
              Requirements
            </h3>
            <ul className="space-y-4 text-slate-600 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-[#016F93] font-bold mt-1 scale-125">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span>
                  Audition files must be either{' '}
                  <strong className="text-slate-900">MP3</strong> or{' '}
                  <strong className="text-slate-900">WAV</strong>.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#016F93] font-bold mt-1 scale-125">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span>
                  Files must be labeled as{' '}
                  <strong className="text-slate-900">Character_YourName</strong>{' '}
                  (e.g., Rou_JohnDoe).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#016F93] font-bold mt-1 scale-125">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span>
                  Please record{' '}
                  <strong className="text-slate-900">at least two takes</strong>{' '}
                  per line.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#016F93] font-bold mt-1 scale-125">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span>
                  Prior voice acting experience is preferred but not required.
                </span>
              </li>
            </ul>
          </div>

          {/* Payment */}
          <div className="group bg-white/70 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-[#016F93]/10 hover:border-[#016F93]/40 transition-all duration-500 shadow-xl shadow-[#016F93]/5">
            <h3 className="text-2xl font-bold font-cinzel text-[#014d66] mb-6 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-[#016F93] rounded-full group-hover:scale-y-125 transition-transform origin-bottom"></span>
              Payment Details
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              This is a{' '}
              <strong className="text-slate-900 uppercase">PAID</strong> voice
              acting casting call. Please note, this is an indie project/budget
              with 1 staff member (Sam) creating story and art for the manga,
              building the websites, and handling all other production.
            </p>
            <div className="p-5 bg-[#E0F7FA]/30 rounded-xl border border-[#016F93]/10 shadow-inner">
              <p className="font-bold text-[#014d66] uppercase tracking-widest text-xs mb-3">
                Payment Rate:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#016F93]"></div>
                  <span className="font-bold text-slate-900">
                    $3 USD per line
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#016F93]"></div>
                  <span className="text-sm">
                    Rates follow the{' '}
                    <a
                      href="https://voiceactingclub.com/rates/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#016F93] font-bold hover:underline"
                    >
                      Voice Acting Club Indie Rate Guide
                    </a>
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#016F93]"></div>
                  <span className="text-sm">
                    Payment made via{' '}
                    <strong className="text-slate-900">Paypal</strong>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Luminous CTA Audition Card */}
          <div
            id="apply"
            className="bg-gradient-to-br from-[#016F93] to-[#014d66] p-8 md:p-12 rounded-3xl text-center shadow-2xl relative group overflow-hidden"
          >
            {/* Animated BG Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>

            <h3 className="text-2xl md:text-3xl font-bold font-cinzel text-white mb-4 tracking-wider relative z-10">
              Voice Actors Audition
            </h3>
            <p className="text-[#E0F7FA] text-base font-light mb-8 max-w-2xl mx-auto leading-relaxed relative z-10">
              <span className="text-white font-bold underline decoration-white/30 underline-offset-4">
                The VA audition window is closed.
              </span>{' '}
              Thank you to everyone who auditioned!!
            </p>
            {/* <button
              onClick={onApplyClick}
              className="w-full bg-white text-[#014d66] font-bold py-4 px-8 rounded-full hover:bg-[#E0F7FA] transition-all duration-300 transform hover:scale-105 uppercase tracking-[0.2em] font-cinzel text-xs relative z-10 shadow-xl"
            >
              Audition Form
            </button> */}
          </div>

          {/* CTA Staff Card */}
          <div className="bg-slate-900 p-8 md:p-12 rounded-3xl text-center shadow-2xl relative group overflow-hidden border border-[#016F93]/30">
            <h3 className="text-2xl md:text-3xl font-bold font-cinzel text-white mb-4 tracking-wider relative z-10">
              Send Your Portfolio
            </h3>
            <p className="text-slate-400 text-base font-light mb-8 max-w-2xl mx-auto leading-relaxed relative z-10">
              Seeking Sound Designers, Video Editors! Send in your portfolio
              below.
            </p>
            <button
              onClick={onStaffClick}
              className="w-full bg-transparent border-2 border-[#016F93] text-[#016F93] hover:text-white hover:bg-[#016F93] font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 uppercase tracking-[0.2em] font-cinzel text-xs relative z-10 shadow-xl shadow-black/40"
            >
              Portfolio Submission
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
