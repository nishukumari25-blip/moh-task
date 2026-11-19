import React from 'react';
import { ArrowRight, Quote, Sparkles } from 'lucide-react';
import { EDITORIAL_FEATURES } from '../data/products';

export default function TrendingSection({ onExploreCapsule }) {
  const editorial = EDITORIAL_FEATURES[0];

  return (
    <section id="collections" className="py-20 lg:py-28 bg-charcoal-950 text-ivory-50 overflow-hidden relative">
      {/* Subtle gold glowing accent */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gold-600/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-sand-400/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Imagery composition */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5] overflow-hidden shadow-2xl border border-charcoal-800">
              <img
                src={editorial.image}
                alt="Autumn Winter 2025 editorial lookbook"
                className="w-full h-full object-cover object-center filter brightness-[0.92] hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent" />
              
              {/* Floating Badge on Image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-6 bg-charcoal-950/85 backdrop-blur-md border border-charcoal-700/80">
                <span className="text-[10px] uppercase tracking-ultra text-gold-400 block mb-1">
                  Atelier Showcase 01
                </span>
                <p className="font-serif text-lg sm:text-xl text-ivory-100 font-light">
                  Hand-draped double-breasted outerwear in Melange wool and cashmere.
                </p>
              </div>
            </div>

            {/* Inset Secondary Image for high-fashion asymmetrical appeal */}
            <div className="hidden sm:block absolute -bottom-10 -right-8 w-48 lg:w-56 aspect-[3/4] border-4 border-charcoal-950 shadow-2xl overflow-hidden">
              <img
                src={editorial.secondaryImage}
                alt="Detailed textile texture"
                className="w-full h-full object-cover filter brightness-[0.85] hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right Column: Narrative, Quote & Philosophy */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span className="text-[11px] uppercase tracking-ultra text-gold-400 font-semibold">
                Trending Capsule
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-ivory-50 tracking-tight leading-tight">
              {editorial.title}
            </h2>

            <div className="w-16 h-px bg-gold-500/80 my-6" />

            <p className="text-sand-200/90 text-sm sm:text-base font-light leading-relaxed">
              Rooted in the architectural ethos of modernist sculpture, our latest seasonal capsule rejects superfluous ornamentation. Each line serves an intention; every seam embraces the natural kinetic posture of the body.
            </p>

            {/* Editorial Quote Box */}
            <div className="my-8 p-6 bg-charcoal-900/80 border-l-2 border-gold-400">
              <Quote className="w-6 h-6 text-gold-400/60 mb-2 stroke-1" />
              <blockquote className="font-serif italic text-base sm:text-lg text-ivory-200 font-light leading-relaxed">
                "{editorial.quote}"
              </blockquote>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-px bg-sand-400/40" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-ivory-100 font-medium">
                    {editorial.author}
                  </p>
                  <p className="text-[10px] uppercase tracking-widest text-gold-400/80">
                    {editorial.role}
                  </p>
                </div>
              </div>
            </div>

            {/* Key Specs */}
            <div className="grid grid-cols-2 gap-4 pt-2 pb-6 border-b border-charcoal-800 text-xs text-sand-300">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-charcoal-400 block mb-0.5">Origin</span>
                <span className="font-medium text-ivory-100">Biella & Florence, Italy</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-charcoal-400 block mb-0.5">Textile</span>
                <span className="font-medium text-ivory-100">Super 140s Wool / Cashmere</span>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <button
                onClick={onExploreCapsule}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gold-500 hover:bg-gold-400 text-charcoal-950 transition-all duration-300 text-xs uppercase tracking-ultra font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>Discover The Capsule</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
