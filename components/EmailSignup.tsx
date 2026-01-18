import React, { useState } from 'react';

export const EmailSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Specific validation requested by user
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('The email address you entered is not valid');
      return;
    }

    setIsSubmitting(true);

    /**
     * VITE & LOOPS RESOLUTION:
     * Attempting to resolve the URL from various standard browser/bundler patterns.
     */
    const mailingListUrl =
      (import.meta as any).env?.VITE_MAILING_LIST_URL ||
      process.env.VITE_MAILING_LIST_URL ||
      process.env.MAILING_LIST_URL;

    // Simulation fallback if no endpoint is configured
    if (!mailingListUrl) {
      console.warn('LOOPS CONFIGURATION MISSING: Running in Simulation Mode.');
      await new Promise((resolve) => setTimeout(resolve, 800));
      setSubmitted(true);
      setEmail('');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(mailingListUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail('');
      } else {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.message || 'The service returned an error.');
      }
    } catch (err) {
      console.error('Mailing list submission error:', err);
      setError(
        'Connection failed. Please check your network or try again later.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="signup"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        backgroundColor: '#0B4556',
      }}
    >
      {/* Background Decor */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#016F93]/50 to-transparent"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold font-cinzel text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#E0F7FA] to-[#016F93] tracking-[0.2em] uppercase">
          Join the Chronicle
        </h2>
        <p className="max-w-2xl mx-auto mb-12 text-slate-300 text-lg md:text-xl font-light leading-relaxed">
          Be the first to know when the next chapter drops, or when new casting
          calls are announced.
        </p>

        {submitted ? (
          <div className="inline-flex flex-col items-center gap-6 p-10 bg-slate-900/40 border border-[#016F93]/30 rounded-3xl backdrop-blur-md animate-fade-in shadow-2xl">
            <div className="h-16 w-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center border-2 border-green-500/30">
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
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold font-cinzel text-white mb-2 tracking-widest uppercase">
                You're all signed up!
              </p>
              <p className="text-slate-400 font-light text-sm md:text-base">
                A confirmation has been sent to your inbox.
              </p>
            </div>
            <button
              onClick={() => setSubmitted(false)}
              className="text-xs uppercase tracking-[0.3em] font-bold text-[#016F93] hover:text-[#0288ad] transition-colors"
            >
              Back to Form
            </button>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 group p-2 bg-slate-900/60 rounded-2xl border border-slate-700/50 backdrop-blur-xl focus-within:border-[#016F93]/60 transition-all shadow-2xl"
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
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError('');
                }}
                placeholder="Enter your email to subscribe..."
                className="flex-grow px-6 py-4 rounded-xl bg-transparent text-white text-lg focus:outline-none placeholder:text-slate-500 disabled:opacity-50 font-lato"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#016F93] text-white font-bold py-4 px-10 rounded-xl hover:bg-[#0288ad] active:scale-[0.97] transition-all duration-300 flex items-center justify-center min-w-[160px] shadow-lg shadow-[#016F93]/40 disabled:bg-slate-700 uppercase tracking-[0.2em] font-cinzel text-sm"
              >
                {isSubmitting ? (
                  <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  'Subscribe'
                )}
              </button>
            </form>

            {/* Error Message Section */}
            <div className="min-h-[2rem] mt-6">
              {error && (
                <div className="flex items-center justify-center gap-2 text-red-400 font-bold uppercase tracking-widest text-[10px] md:text-xs animate-pulse">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  {error}
                </div>
              )}
            </div>

            <p className="text-slate-500 text-[9px] uppercase tracking-[0.5em] font-cinzel opacity-50">
              Powered by Loops
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
