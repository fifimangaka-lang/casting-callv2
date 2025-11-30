import React from 'react';
import { MANGA_TITLE } from '../constants';

interface ProjectSpecsProps {
  onApplyClick: () => void;
}

export const ProjectSpecs: React.FC<ProjectSpecsProps> = ({ onApplyClick }) => {
  return (
    <section id="project" className="py-20 md:py-28 bg-white text-[#0E5B6D]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-cinzel text-center mb-12 text-[#0E5B6D]">
          Project Details
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-bold font-cinzel text-[#0E5B6D] mb-4">
              Synopsis
            </h3>
            <p className="font-light leading-relaxed">
              A mind-reading captain, a diamond-fisted genius, and a
              fire-breathing swordsman hunt a rogue ringmaster whose forbidden
              magic defies the law. But when the chase exposes corruption within
              their own ranks, their mission and their loyalties begin to
              unravel.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-bold font-cinzel text-[#0E5B6D] mb-4">
              Project Scope
            </h3>
            <p className="font-light leading-relaxed">
              We are casting for the main roles in an upcoming comic dub
              adaptation of the fantasy adventure manga "Ye Olde Treehouse". The
              total project will encompass the "Nosferi Dilemma" Arc; Volumes
              1-5. This website is updated regularly with new roles, so be sure
              to check back often!
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-bold font-cinzel text-[#0E5B6D] mb-4">
              Requirements
            </h3>
            <ul className="list-disc list-inside font-light space-y-2">
              <li>High-quality microphone and recording setup.</li>
              <li>Ability to take direction and perform script revisions.</li>
              <li>
                Prior voice acting experience is preferred but not required.
              </li>
              <li>Passion for fantasy and storytelling.</li>
            </ul>
          </div>
          <div
            id="apply"
            className="bg-gray-50 p-6 rounded-lg border border-gray-200 md:col-span-2 text-center"
          >
            <h3 className="text-xl font-bold font-cinzel text-[#0E5B6D] mb-4">
              Audition
            </h3>
            <p className="font-light leading-relaxed mb-6">
              Ready to join the adventure? Fill out the application to submit
              your audition. Submissions close on Dec 31st.
            </p>
            <button
              onClick={onApplyClick}
              className="bg-[#006E92] text-white font-bold py-3 px-8 rounded-full hover:bg-[#005c7a] transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#006E92]/30"
            >
              Open Audition Form
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
