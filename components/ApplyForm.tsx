import React, { useState, useRef } from 'react';
import { MANGA_TITLE, CHARACTERS } from '../constants';

const RequiredBadge = () => (
  <span className="text-red-500 ml-1 font-bold" aria-hidden="true">
    *
  </span>
);

export const ApplyForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    experience: '',
    equipment: '',
    primaryRole: '',
    otherRoles: '',
    notify: '',
    googleDriveLink: '',
  });
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string>('');
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing again
    if (submitError) setSubmitError('');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError('');
    const MAX_FILE_SIZE = 8 * 1024 * 1024; // 8MB limit

    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      const allowedExtensions = ['.wav', '.mp3'];
      const fileName = selectedFile.name.toLowerCase();

      const hasValidExtension = allowedExtensions.some((ext) =>
        fileName.endsWith(ext)
      );
      const isSizeValid = selectedFile.size <= MAX_FILE_SIZE;

      if (!hasValidExtension) {
        setFile(null);
        setFileError('Error: Only .wav or .mp3 files are accepted.');
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      } else if (!isSizeValid) {
        setFile(null);
        const sizeInMb = (selectedFile.size / (1024 * 1024)).toFixed(2);
        setFileError(
          `Error: File is too large (${sizeInMb}MB). Maximum size is 8MB.`
        );
        setShowLinkInput(true); // Trigger visibility of Google Drive link input

        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      } else {
        setFile(selectedFile);
      }
    }
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    // Email validation
    if (!validateEmail(formData.email)) {
      setSubmitError('Please enter a valid email address.');
      return;
    }

    if (formData.age === 'under-18') {
      setSubmitError(
        'Sorry, you must be 18 or older to submit an audition for this project.'
      );
      return;
    }

    // Validation: Require either a file OR a Google Drive link
    if (!file && !formData.googleDriveLink) {
      setFileError(
        'Please upload an audition file or provide a Google Drive link.'
      );
      return;
    }

    if (!file) {
      setFileError('Please upload an audition file before submitting.');
      return;
    }

    setIsSubmitting(true);

    // Using FormData to handle file upload for Netlify
    const netlifyData = new FormData();
    netlifyData.append('form-name', 'casting-call'); // Must match the name in index.html
    netlifyData.append('name', formData.name);
    netlifyData.append('email', formData.email);
    netlifyData.append('age', formData.age);
    netlifyData.append('experience', formData.experience);
    netlifyData.append('equipment', formData.equipment);
    netlifyData.append('primaryRole', formData.primaryRole);
    netlifyData.append('otherRoles', formData.otherRoles);
    netlifyData.append('notify', formData.notify);
    netlifyData.append('googleDriveLink', formData.googleDriveLink);

    if (file) {
      netlifyData.append('audition-file', file);
    }

    try {
      const response = await fetch('/', {
        method: 'POST',
        body: netlifyData,
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        setSubmitError(
          'Submission failed. Please check your connection or try again.'
        );
      }
    } catch (err) {
      setSubmitError(
        'An error occurred during submission. Please try again later.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center px-6 bg-slate-900 h-full">
        <div className="w-24 h-24 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-8 border-2 border-green-500/30">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12"
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
        <h2 className="text-4xl font-bold font-cinzel text-white mb-6">
          Audition Sent!
        </h2>
        <p className="text-slate-300 text-2xl max-w-xl mb-10 leading-relaxed">
          Thank you,{' '}
          <span className="text-white font-bold">{formData.name}</span>. <br />
          Your audition for{' '}
          <span className="text-[#016F93]">{formData.primaryRole}</span> has
          been received!
        </p>
        <button
          onClick={() => {
            setIsSuccess(false);
            setFile(null);
            setShowLinkInput(false);

            setFormData({
              name: '',
              email: '',
              age: '',
              experience: '',
              equipment: '',
              primaryRole: '',
              otherRoles: '',
              notify: '',
              googleDriveLink: '',
            });
          }}
          className="text-xl text-[#016F93] hover:text-white transition-colors underline underline-offset-8"
        >
          Submit another character audition
        </button>
      </div>
    );
  }

  return (
    <div
      className="bg-slate-900 text-slate-200 overflow-y-auto h-full overscroll-contain transform-gpu"
      style={{ backfaceVisibility: 'hidden' }}
    >
      <div className="p-8 md:p-16 max-w-4xl mx-auto">
        <header className="mb-12 border-b border-slate-700 pb-10">
          <h1 className="text-4xl md:text-5xl font-bold font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-[#E0F7FA] to-[#016F93] mb-8">
            {MANGA_TITLE} Casting
          </h1>
          <div className="space-y-6 text-xl text-slate-300 leading-relaxed">
            <p>
              This is a paid casting call for the comic dub{' '}
              <span className="text-white font-bold">{MANGA_TITLE}</span>.
              Submissions are handled securely via our internal stack.
            </p>
          </div>
        </header>

        <form
          name="casting-call"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="space-y-12 pb-20"
        >
          {/* Hidden field required by Netlify for React forms */}
          <input type="hidden" name="form-name" value="casting-call" />

          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="block text-xl font-bold uppercase tracking-widest text-slate-400">
                Name <RequiredBadge />
              </label>
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Preferred Name"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-5 text-2xl focus:border-[#016F93] outline-none transition-colors"
              />
            </div>
            <div className="space-y-3">
              <label className="block text-xl font-bold uppercase tracking-widest text-slate-400">
                Email Address <RequiredBadge />
              </label>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="email@example.com"
                className={`w-full bg-slate-800 border rounded-xl p-5 text-2xl focus:border-[#016F93] outline-none transition-colors ${
                  formData.email && !validateEmail(formData.email)
                    ? 'border-red-500/50'
                    : 'border-slate-700'
                }`}
              />
            </div>
          </div>

          {/* Age Confirmation */}
          <div className="space-y-5">
            <label className="block text-xl font-bold uppercase tracking-widest text-slate-400">
              Age Confirmation <RequiredBadge />
            </label>
            <div className="flex flex-col gap-5">
              <label className="flex items-center gap-5 cursor-pointer group">
                <input
                  required
                  type="radio"
                  name="age"
                  value="18+"
                  checked={formData.age === '18+'}
                  onChange={handleInputChange}
                  className="w-7 h-7 accent-[#016F93]"
                />
                <span className="text-2xl group-hover:text-white transition-colors">
                  I am 18 years or older
                </span>
              </label>
              <label className="flex items-center gap-5 cursor-pointer group">
                <input
                  required
                  type="radio"
                  name="age"
                  value="under-18"
                  checked={formData.age === 'under-18'}
                  onChange={handleInputChange}
                  className="w-7 h-7 accent-[#016F93]"
                />
                <span className="text-2xl group-hover:text-white transition-colors">
                  I am under 18
                </span>
              </label>
            </div>
          </div>

          {/* Experience Level */}
          <div className="space-y-5">
            <label className="block text-xl font-bold uppercase tracking-widest text-slate-400">
              Experience Level <RequiredBadge />
            </label>
            <div className="flex flex-col gap-5">
              {['Professional', 'Indie / Hobbyist', 'Beginner'].map((exp) => (
                <label
                  key={exp}
                  className="flex items-center gap-5 cursor-pointer group"
                >
                  <input
                    required
                    type="radio"
                    name="experience"
                    value={exp}
                    checked={formData.experience === exp}
                    onChange={handleInputChange}
                    className="w-7 h-7 accent-[#016F93]"
                  />
                  <span className="text-2xl group-hover:text-white transition-colors">
                    {exp}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Equipment */}
          <div className="space-y-3">
            <label className="block text-xl font-bold uppercase tracking-widest text-slate-400">
              Equipment & Environment <RequiredBadge />
            </label>
            <textarea
              required
              name="equipment"
              value={formData.equipment}
              onChange={handleInputChange}
              rows={4}
              placeholder="Describe your recording setup..."
              className="w-full bg-slate-800 border border-slate-700 rounded-xl p-5 text-2xl focus:border-[#016F93] outline-none transition-colors leading-relaxed"
            />
          </div>

          {/* Character Selection */}
          <div className="space-y-5">
            <label className="block text-xl font-bold uppercase tracking-widest text-slate-400">
              Auditioning For <RequiredBadge />
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CHARACTERS.map((char) => (
                <label
                  key={char.id}
                  className="flex items-center gap-5 p-6 bg-slate-800/40 border border-slate-700 rounded-xl cursor-pointer hover:bg-slate-700/60 transition-colors"
                >
                  <input
                    required
                    type="radio"
                    name="primaryRole"
                    value={char.name}
                    checked={formData.primaryRole === char.name}
                    onChange={handleInputChange}
                    className="w-7 h-7 accent-[#016F93]"
                  />
                  <span className="text-2xl font-bold">{char.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Audio Submission */}
          <div className="bg-slate-800 border-2 border-dashed border-slate-600 rounded-3xl p-10 space-y-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold font-cinzel text-white mb-4">
                Audition Audio
              </h3>
              <p className="text-xl text-slate-400 italic">
                Upload your .wav or .mp3 audition file. 8MB max size.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <input
                type="file"
                name="audition-file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept=".wav,.mp3"
                className="hidden"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="w-full flex items-center justify-center gap-4 bg-[#016F93] hover:bg-[#015a7a] text-white font-bold py-6 px-10 rounded-2xl transition-all shadow-xl text-2xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                {file ? 'Change File' : 'Upload Audio File'}
              </button>

              {file && (
                <div className="flex items-center justify-center gap-3 text-green-400 font-bold bg-green-400/10 p-4 rounded-xl border border-green-400/20 text-xl">
                  <span className="truncate">File: {file.name}</span>
                </div>
              )}

              {fileError && (
                <div className="text-center text-red-400 font-bold bg-red-400/10 p-4 rounded-xl border border-red-400/20 text-xl animate-pulse">
                  {fileError}
                </div>
              )}

              {showLinkInput && (
                <div className="mt-8 space-y-4 pt-8 border-t border-slate-700 animate-fade-in">
                  <label className="block text-xl font-bold text-[#E0F7FA] text-center">
                    Audition file too large? Use a google drive link instead!
                  </label>
                  <input
                    type="url"
                    name="googleDriveLink"
                    value={formData.googleDriveLink}
                    onChange={handleInputChange}
                    placeholder="https://drive.google.com/..."
                    className="w-full bg-slate-900 border border-[#016F93]/50 rounded-xl p-5 text-xl focus:border-[#016F93] outline-none transition-colors"
                  />
                  <p className="text-sm text-slate-400 text-center italic">
                    Make sure link permissions are set to "Anyone with the
                    link".
                  </p>
                </div>
              )}
            </div>
          </div>

          {submitError && (
            <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-xl text-red-400 text-center font-bold text-xl animate-bounce">
              {submitError}
            </div>
          )}
          <button
            type="submit"
            disabled={isSubmitting || formData.age === 'under-18'}
            className="w-full bg-[#016F93] hover:bg-[#0288ad] hover:scale-[1.02] active:scale-[0.98] text-white font-bold py-6 rounded-2xl shadow-xl shadow-[#016F93]/20 hover:shadow-[#016F93]/40 disabled:bg-slate-700 disabled:shadow-none disabled:scale-100 transition-all flex items-center justify-center gap-4 text-2xl font-cinzel tracking-wide mt-8 cursor-pointer disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="h-7 w-7 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Processing...</span>
              </>
            ) : (
              <>
                <span>Submit Audition</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
