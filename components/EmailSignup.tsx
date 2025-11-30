import React, { useState } from 'react';

export const EmailSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    // In a real application, you would connect this to a backend service 
    // or a third-party like Mailchimp to handle the subscription.
    console.log(`Email submitted for mailing list: ${email}`);
    setSubmitted(true);
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
        <h2 className="text-3xl md:text-4xl font-bold font-cinzel text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#E0F7FA] to-[#236088]">
          Stay Updated
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-slate-300">
          New roles are added periodically. Join our mailing list to be the first to know when new casting calls are announced!
        </p>
        
        {submitted ? (
          <div className="text-lg text-green-400 font-bold p-4 bg-green-900/20 border border-green-700 rounded-md inline-block">
            Thank you for subscribing! We'll keep you posted.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4" noValidate>
            <label htmlFor="email-input" className="sr-only">Email address</label>
            <input
              id="email-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              className="flex-grow px-4 py-3 rounded-md bg-[#343F40] border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-[#006E92] transition"
              aria-label="Email Address"
              required
            />
            <button
              type="submit"
              className="bg-[#006E92] text-white font-bold py-3 px-6 rounded-md hover:bg-[#005c7a] transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#006E92]/30"
            >
              Join List
            </button>
          </form>
        )}
        {error && !submitted && <p className="text-red-500 text-sm mt-4">{error}</p>}
      </div>
    </section>
  );
};