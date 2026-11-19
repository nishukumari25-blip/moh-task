import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight, Sparkles, Shield } from 'lucide-react';

export default function Newsletter({ onShowToast }) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please provide a valid private email address.');
      return;
    }

    setIsSubscribed(true);
    if (onShowToast) {
      onShowToast('Welcome to The LUXE Circle. Your invitation has been dispatched.');
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-charcoal-900 text-ivory-50 relative overflow-hidden border-b border-charcoal-800">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-gold-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-charcoal-800 border border-gold-500/30 text-gold-400 text-[10px] uppercase tracking-ultra font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span>The LUXE Circle</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-ivory-50 tracking-tight leading-tight">
          Receive Private Salon Invitations
        </h2>

        <div className="w-12 h-px bg-gold-500 mx-auto my-6" />

        <p className="text-sand-200/90 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed">
          Members of The LUXE Circle receive advance access to limited runway capsules, private salon appointments, and complimentary bespoke styling previews.
        </p>

        {/* Subscription Form or Success Confirmation */}
        <div className="mt-10 max-w-md mx-auto">
          {isSubscribed ? (
            <div className="p-6 bg-charcoal-950 border border-gold-500/50 shadow-2xl animate-fadeIn text-center">
              <CheckCircle2 className="w-8 h-8 text-gold-400 mx-auto mb-3" />
              <h4 className="font-serif text-xl text-ivory-50 mb-1">Welcome to The Circle</h4>
              <p className="text-xs text-sand-300 font-light leading-relaxed">
                A private confirmation has been dispatched to <strong className="text-ivory-100">{email}</strong>. We look forward to introducing our upcoming season.
              </p>
              <button
                onClick={() => {
                  setIsSubscribed(false);
                  setEmail('');
                }}
                className="mt-4 text-[11px] uppercase tracking-wider text-gold-400 hover:text-gold-300 underline"
              >
                Register another address
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="relative flex flex-col sm:flex-row items-stretch gap-2">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-charcoal-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder="Enter your personal email address..."
                    className="w-full bg-charcoal-950/90 border border-charcoal-700 text-ivory-50 pl-11 pr-4 py-4 text-xs tracking-wider focus:border-gold-400 focus:outline-none placeholder:text-charcoal-500 transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-4 bg-gold-500 hover:bg-gold-400 text-charcoal-950 text-xs uppercase tracking-ultra font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {error && (
                <p className="text-xs text-red-400 text-left pl-1">{error}</p>
              )}

              {/* Privacy Reassurance */}
              <div className="flex items-center justify-center gap-2 mt-2 text-[11px] text-charcoal-400 font-light">
                <Shield className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                <span>Strictly confidential. No spam. One-click unsubscribe.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
