import React, { useState } from 'react';
import { MANGA_TITLE } from '../constants';

const RequiredBadge = () => (
  <span className="text-red-500 ml-1 font-bold" aria-hidden="true">
    *
  </span>
);

export const CreativesForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    portfolio: '',
    experience: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const netlifyData = new FormData();
    netlifyData.append('form-name', 'creatives-submission');
    netlifyData.append('name', formData.name);
    netlifyData.append('email', formData.email);
    netlifyData.append('role', formData.role);
    netlifyData.append('portfolio', formData.portfolio);
    netlifyData.append('experience', formData.experience);

    try {
      const response = await fetch('/', {
        method: 'POST',
        body: netlifyData,
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        throw new Error('Failed to submit');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center px-6 bg-slate-900 h-full">
        <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6 border-2 border-green-500/30">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-3xl font-bold font-cinzel text-white mb-4">
          Submission Received!
        </h2>
        <p className="text-slate-300 text-lg mb-8">
          We've received your portfolio and will reach out if your style fits
          the project!
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="text-[#016F93] hover:text-white font-bold underline underline-offset-8"
        >
          Submit another role
        </button>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 text-slate-200 overflow-y-auto h-full p-8 md:p-12">
      <div className="max-w-2xl mx-auto">
        <header className="mb-10 text-center">
          <h2 className="text-3xl font-bold font-cinzel text-[#E0F7FA] mb-2">
            Join the Production
          </h2>
          <p className="text-slate-400">
            Seeking Sound Designers and Video Editors for{' '}
            <span className="text-white font-bold">the {MANGA_TITLE} </span>
            motion comic project.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-500">
                Name <RequiredBadge />
              </label>
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-4 focus:border-[#016F93] outline-none transition-colors"
                placeholder="Your Name"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-500">
                Email <RequiredBadge />
              </label>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-4 focus:border-[#016F93] outline-none transition-colors"
                placeholder="email@example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-500">
              I am a... <RequiredBadge />
            </label>
            <select
              required
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-4 focus:border-[#016F93] outline-none transition-colors"
            >
              <option value="">Select your specialty</option>
              <option value="Sound Design">Sound Designer</option>
              <option value="Video Editing">
                Video Editor / Motion Graphics
              </option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-500">
              Portfolio
              <RequiredBadge />
            </label>
            <input
              required
              type="text"
              name="portfolio"
              value={formData.portfolio}
              onChange={handleInputChange}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-4 focus:border-[#016F93] outline-none transition-colors"
              placeholder="Share a link to your portfolio or work samples"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-500">
              Anything you'd like me to know?
            </label>
            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              rows={4}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-4 focus:border-[#016F93] outline-none transition-colors"
              placeholder="Tell us about your style or projects you've worked on..."
            />
          </div>

          {error && (
            <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-center font-bold text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#016F93] hover:bg-[#0288ad] text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-sm"
          >
            {isSubmitting ? (
              <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              'Submit Portfolio'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
