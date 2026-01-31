import React from 'react';
import { CloseIcon } from './icons/CloseIcon';
import { CreativesForm } from './CreativesForm';

interface CreativesModalProps {
  onClose: () => void;
}

export const CreativesModal: React.FC<CreativesModalProps> = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-md z-[65] flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-slate-900 border border-slate-700 rounded-2xl max-w-3xl w-full h-[80vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-6 border-b border-slate-700 bg-slate-900/50 z-10">
          <h2 className="text-xl md:text-2xl font-bold font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-[#E0F7FA] to-[#016F93]">
            Portfolio Submission
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-full"
          >
            <CloseIcon />
          </button>
        </div>
        <div className="flex-grow overflow-hidden relative">
          <CreativesForm />
        </div>
      </div>
    </div>
  );
};
