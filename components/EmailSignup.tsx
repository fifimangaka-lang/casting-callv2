import React, { useState } from 'react';

/**
 * LOOPS.SO INTEGRATION:
 * 1. Create a free account at Loops.so.
 * 2. Go to 'Forms' and create a 'Newsletter' form.
 * 3. Copy the 'Form Endpoint' URL.
 * 4. Add it to your environment variables as: MAILING_LIST_URL
 */

const MAILING_LIST_URL = process.env.MAILING_LIST_URL;

export const EmailSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!MAILING_LIST_URL) {
      console.warn('MAILING_LIST_URL environment variable is not set.');
      setError('Mailing list configuration missing.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(MAILING_LIST_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail('');
      } else {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.message || 'Failed to join the list.');
      }
    } catch (err) {
      console.error('Mailing list error:', err);
      setError('Connection failed. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="signup"
      className="py-20 md:py-28 relative"
      style={{
        backgroundColor: '#0B4556',
      }}
    >
      <div className="absolute inset-0 bg-black/60" aria-hidden="true"></div>
      <div className="container mx-auto px-6 text-center relative">
        <h2 className="text-3xl md:text-5xl font-bold font-cinzel text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#E0F7FA] to-[#016F93] tracking-widest">
          Stay Connected
        </h2>
        <p className="max-w-2xl mx-auto mb-12 text-slate-300 text-lg md:text-xl font-light">
          Get notified about new casting calls, and new and updates about YOT.
        </p>

        {submitted ? (
          <div className="text-xl text-green-400 font-bold p-8 bg-green-900/30 border border-green-500/30 rounded-2xl inline-flex items-center gap-4 animate-fade-in shadow-2xl backdrop-blur-sm">
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
            <div className="text-left">
              <p className="text-2xl">You're in!</p>
              <p className="text-sm font-normal text-slate-400 mt-1">
                Check your inbox for a confirmation from Loops.
              </p>
            </div>
          </div>
        ) : (
          <div className="max-w-xl mx-auto">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 group p-2 bg-slate-900/40 rounded-2xl border border-slate-700/50 backdrop-blur-md"
              noValidate
            >
              <label htmlFor="email-input" className="sr-only">
                Email address
              </label>
              <input
                id="email-input"
                type="email"
                name="email"
                value={email}
                disabled={isSubmitting}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email.@example.com"
                className="flex-grow px-6 py-4 rounded-xl bg-transparent text-white text-lg focus:outline-none placeholder:text-slate-500 disabled:opacity-50"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#016F93] text-white font-bold py-4 px-10 rounded-xl hover:bg-[#0288ad] active:scale-95 transition-all duration-300 flex items-center justify-center min-w-[140px] shadow-lg shadow-[#016F93]/40 disabled:bg-slate-700 uppercase tracking-widest font-cinzel text-sm"
              >
                {isSubmitting ? (
                  <div className="h-6 w-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  'Subscribe'
                )}
              </button>
            </form>
            {error && (
              <p className="text-red-400 text-sm mt-6 font-bold uppercase tracking-widest animate-pulse">
                {error}
              </p>
            )}
            <p className="text-slate-500 text-[10px] mt-8 uppercase tracking-[0.3em] font-cinzel">
              Powered by Loops.so
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
