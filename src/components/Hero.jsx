import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

export default function Hero({ onShopNow, onViewCollections }) {
  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-[94vh] flex items-center justify-center overflow-hidden bg-charcoal-950">
      {/* Background Image with refined luxury gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=2000&q=85"
          alt="LUXE Haute Couture Collection editorial model"
          className="w-full h-full object-cover object-center filter brightness-[0.82] contrast-[1.05] scale-[1.02] transition-transform duration-1000 ease-out"
        />
        {/* Multilayered subtle luxury vignette & gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-charcoal-950/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/70 via-transparent to-charcoal-950/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-ivory-50 flex flex-col items-center">
        {/* Seasonal Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-gold-400/40 bg-charcoal-900/60 backdrop-blur-md mb-6 animate-fadeIn">
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-gold-300 font-medium">
            Autumn / Winter 2025 Haute Collection
          </span>
        </div>

        {/* Grand Editorial Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] font-light text-ivory-50 max-w-4xl text-shadow-md">
          Architectural <span className="italic font-serif font-normal text-gold-300">Silhouettes</span>, Timeless Nobility
        </h1>

        {/* Editorial Subtitle */}
        <p className="mt-6 text-sm sm:text-base md:text-lg text-sand-200/90 max-w-2xl font-light tracking-wide leading-relaxed">
          Sartorial perfection sculpted in pure Mongolian double-faced cashmere, French box calfskin, and fluid mulberry silk crepe.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <button
            onClick={onShopNow}
            className="w-full sm:w-auto px-9 py-4 bg-ivory-50 text-charcoal-950 hover:bg-gold-400 hover:text-charcoal-950 transition-all duration-300 text-xs uppercase tracking-ultra font-semibold shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
          >
            Shop The Collection
          </button>
          <button
            onClick={onViewCollections}
            className="w-full sm:w-auto px-8 py-4 bg-charcoal-900/50 hover:bg-charcoal-900/80 text-ivory-100 border border-sand-300/40 hover:border-gold-400 transition-all duration-300 text-xs uppercase tracking-ultra font-medium backdrop-blur-sm"
          >
            Explore Editorial Capsule
          </button>
        </div>

        {/* Atelier Heritage Tagline */}
        <div className="mt-14 pt-8 border-t border-ivory-50/15 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-[11px] uppercase tracking-widest text-sand-300/80 font-light">
          <span>Single-Needle Craftsmanship</span>
          <span className="hidden sm:inline">•</span>
          <span>Certified Traceable Mills</span>
          <span className="hidden sm:inline">•</span>
          <span>Complimentary Global Delivery</span>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <button
        onClick={onShopNow}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sand-300/80 hover:text-gold-300 transition-colors flex flex-col items-center gap-2 z-10 p-2"
        aria-label="Scroll to collection"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-light">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  );
}
