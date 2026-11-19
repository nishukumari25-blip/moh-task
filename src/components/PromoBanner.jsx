import React, { useState, useEffect } from 'react';
import { Tag, Copy, Check, Clock, ArrowRight } from 'lucide-react';

export default function PromoBanner({ onShopPromo, onShowToast }) {
  const [copied, setCopied] = useState(false);
  
  // Real-time styled countdown timer
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 18,
    minutes: 42,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const promoCode = 'LUXE-ARCHIVE';

  const handleCopyCode = () => {
    navigator.clipboard?.writeText(promoCode);
    setCopied(true);
    if (onShowToast) {
      onShowToast(`Promotional code "${promoCode}" copied to clipboard!`);
    }
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section className="relative py-20 lg:py-24 bg-sand-100 overflow-hidden border-b border-sand-300">
      {/* Background Subtle Luxury Editorial Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#121214_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-charcoal-950 text-ivory-50 p-8 sm:p-12 lg:p-16 shadow-2xl border border-charcoal-800 flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left: Headline & Offer details */}
          <div className="max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-charcoal-900 border border-gold-500/40 text-gold-400 text-[10px] uppercase tracking-ultra font-semibold mb-4">
              <Tag className="w-3 h-3" />
              <span>Private Salon Invitation</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-ivory-50 tracking-tight leading-tight">
              Mid-Season Archive <span className="italic font-serif text-gold-300">Privilege</span>
            </h3>

            <p className="mt-4 text-sand-200/90 text-sm sm:text-base font-light leading-relaxed">
              Acquire curated pieces from our heritage collections at up to 25% off. Includes complimentary bespoke cashmere monogramming and luxury keepsake packaging.
            </p>

            {/* Voucher Code Box */}
            <div className="mt-6 inline-flex items-center gap-3 bg-charcoal-900 border border-sand-300/30 p-2 sm:p-2.5">
              <span className="text-[11px] uppercase tracking-wider text-charcoal-400 pl-2">
                Use Invitation Code:
              </span>
              <span className="font-mono text-sm tracking-widest text-gold-300 font-bold px-2 py-0.5 bg-charcoal-950">
                {promoCode}
              </span>
              <button
                onClick={handleCopyCode}
                className="p-2 text-charcoal-300 hover:text-gold-300 transition-colors"
                title="Copy promo code"
                aria-label="Copy code"
              >
                {copied ? <Check className="w-4 h-4 text-gold-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Right: Countdown Timer & CTA */}
          <div className="flex flex-col items-center lg:items-end w-full lg:w-auto">
            <div className="flex items-center gap-2 mb-4 text-xs text-sand-300 uppercase tracking-widest">
              <Clock className="w-4 h-4 text-gold-400" />
              <span>Privilege Concludes In:</span>
            </div>

            {/* Countdown Grid */}
            <div className="grid grid-cols-4 gap-3 sm:gap-4 text-center mb-8">
              {[
                { label: 'Days', val: String(timeLeft.days).padStart(2, '0') },
                { label: 'Hours', val: String(timeLeft.hours).padStart(2, '0') },
                { label: 'Mins', val: String(timeLeft.minutes).padStart(2, '0') },
                { label: 'Secs', val: String(timeLeft.seconds).padStart(2, '0') },
              ].map((unit) => (
                <div
                  key={unit.label}
                  className="bg-charcoal-900 border border-charcoal-800 p-3 sm:p-4 min-w-[65px] sm:min-w-[80px]"
                >
                  <span className="font-serif text-2xl sm:text-3xl font-medium text-gold-300 block">
                    {unit.val}
                  </span>
                  <span className="text-[9px] uppercase tracking-widest text-charcoal-400 block mt-1">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Button */}
            <button
              onClick={onShopPromo}
              className="w-full sm:w-auto px-8 py-4 bg-ivory-50 text-charcoal-950 hover:bg-gold-400 transition-all duration-300 text-xs uppercase tracking-ultra font-semibold flex items-center justify-center gap-2 shadow-xl hover:-translate-y-0.5"
            >
              <span>Access Private Archive</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
