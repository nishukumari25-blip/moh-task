import React, { useState } from 'react';
import { Sparkles, X, ChevronRight } from 'lucide-react';

export default function AnnouncementBar({ onExplorePromo }) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <aside aria-label="Promotional announcements" className="bg-charcoal-950 text-ivory-100 text-xs border-b border-charcoal-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between">
        {/* Left note for subtle elegance */}
        <div className="hidden md:flex items-center gap-2 text-sand-300 text-[11px] tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse"></span>
          <span>Paris • Milan • London • New York</span>
        </div>

        {/* Center message */}
        <div className="flex-1 md:flex-initial text-center flex items-center justify-center gap-2 font-light">
          <Sparkles className="w-3.5 h-3.5 text-gold-400 shrink-0 hidden sm:inline-block" />
          <span className="tracking-widest uppercase text-[11px] sm:text-xs">
            Complimentary Worldwide White-Glove Delivery on orders over $500
          </span>
          <button
            onClick={onExplorePromo}
            className="text-gold-400 hover:text-gold-300 underline underline-offset-4 font-medium transition-colors ml-1 inline-flex items-center gap-0.5 text-[11px] uppercase tracking-wider"
          >
            <span>Learn More</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>

        {/* Right close / currency */}
        <div className="flex items-center gap-4">
          <span className="hidden lg:inline-block text-[11px] text-charcoal-400 tracking-wider">USD ($)</span>
          <button
            onClick={() => setIsVisible(false)}
            aria-label="Dismiss announcement"
            className="text-charcoal-400 hover:text-ivory-100 transition-colors p-0.5"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
