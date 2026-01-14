import React, { useState } from 'react';

/**
 * GOOGLE SHEETS INTEGRATION GUIDE:
 * 1. Create a Google Sheet.
 * 2. Go to Extensions > Apps Script.
 * 3. Paste the following code:
 *
 * function doPost(e) {
 *   var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 *   var email = e.parameter.email;
 *   sheet.appendRow([new Date(), email]);
 *   return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
 * }
 *
 * 4. Deploy > New Deployment > Web App.
 * 5. Set 'Execute as' to 'Me' and 'Who has access' to 'Anyone'.
 * 6. Copy the Web App URL and paste it in the GOOGLE_SCRIPT_URL constant below.
 */

// Replace this with your actual Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbySaK4nm0CsRw48NWjbEfl0lCPeijmALiQ6ZYuq9lzGE9ArRYJF0OCOU04HG8TD3q6mxg/exec';

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

    if (
      GOOGLE_SCRIPT_URL ===
      'https://script.google.com/macros/s/AKfycbySaK4nm0CsRw48NWjbEfl0lCPeijmALiQ6ZYuq9lzGE9ArRYJF0OCOU04HG8TD3q6mxg/exec'
    ) {
      console.warn(
        'Google Script URL not set. See EmailSignup.tsx for setup instructions.'
      );
      setError('System configuration incomplete. Please try again later.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Direct POST to Google Apps Script
      // mode: 'no-cors' allows sending to a different origin without preflight,
      // which is ideal for simple Apps Script triggers.
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ email }).toString(),
      });

      // Since 'no-cors' hides the response, we assume success if no error is thrown
      setSubmitted(true);
      setEmail('');
    } catch (err) {
      setError('A connection error occurred. Please try again later.');
      console.error('Mailing list submission error:', err);
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
        <h2 className="text-3xl md:text-4xl font-bold font-cinzel text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#E0F7FA] to-[#016F93]">
          Stay Updated
        </h2>
        <p className="max-w-2xl mx-auto mb-10 text-slate-300 text-lg">
          Join the Atheria mailing list. Your email will be recorded directly
          into our chronicle (Google Sheets) for future callouts.
        </p>

        {submitted ? (
          <div className="text-xl text-green-400 font-bold p-6 bg-green-900/30 border border-green-500/30 rounded-2xl inline-flex items-center gap-3 animate-fade-in shadow-xl">
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
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Added to the Chronicle! Check back for updates.</span>
          </div>
        ) : (
          <div className="max-w-xl mx-auto">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 group"
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
                placeholder="your.email@example.com"
                className="flex-grow px-6 py-4 rounded-xl bg-slate-900/60 border border-slate-700 text-white text-lg focus:outline-none focus:ring-2 focus:ring-[#016F93] transition-all placeholder:text-slate-500 disabled:opacity-50"
                aria-label="Email Address"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#016F93] text-white font-bold py-4 px-8 rounded-xl hover:bg-[#015a7a] hover:brightness-110 active:scale-95 transition-all duration-300 flex items-center justify-center min-w-[140px] shadow-lg shadow-[#016F93]/30 disabled:bg-slate-700 disabled:shadow-none"
              >
                {isSubmitting ? (
                  <div className="h-6 w-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  'Join List'
                )}
              </button>
            </form>
            {error && (
              <p className="text-red-400 text-sm mt-4 font-medium animate-pulse">
                {error}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
