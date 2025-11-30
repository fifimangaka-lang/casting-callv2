
import React from 'react';
import { GOOGLE_FORM_EMBED_URL } from '../constants';
import { CloseIcon } from './icons/CloseIcon';

interface ApplyModalProps {
  onClose: () => void;
}

export const ApplyModal: React.FC<ApplyModalProps> = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-slate-900 border border-slate-700 rounded-xl max-w-4xl w-full h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b border-slate-700">
            <h2 className="text-2xl font-bold font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-[#E0F7FA] to-[#236088]">
                Audition Form
            </h2>
            <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                <CloseIcon />
            </button>
        </div>
        <div className="flex-grow overflow-hidden rounded-b-xl">
            <iframe
                src={GOOGLE_FORM_EMBED_URL}
                className="w-full h-full border-0"
                title="Casting Call Application Form"
            >
                Loading…
            </iframe>
        </div>
      </div>
    </div>
  );
};