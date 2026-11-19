import React from 'react';
import { Sparkles, Feather, Globe2, ShieldCheck } from 'lucide-react';
import { BRAND_PILLARS } from '../data/products';

const ICON_MAP = {
  Sparkles: Sparkles,
  Feather: Feather,
  Globe2: Globe2,
  ShieldCheck: ShieldCheck,
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-ivory-50 border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-[11px] uppercase tracking-ultra text-gold-600 font-semibold block mb-2">
            The LUXE Promise
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal-950 font-light tracking-tight">
            Pillars of Uncompromising Luxury
          </h2>
          <div className="w-12 h-px bg-gold-500 mx-auto mt-4 mb-4" />
          <p className="text-charcoal-600 text-sm sm:text-base font-light tracking-wide max-w-xl mx-auto">
            From generational ateliers to climate-controlled concierge delivery, every detail is considered without compromise.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {BRAND_PILLARS.map((pillar, idx) => {
            const IconComponent = ICON_MAP[pillar.icon] || Sparkles;
            return (
              <div
                key={pillar.title}
                className="group relative p-8 bg-ivory-100/60 border border-sand-200 hover:border-gold-400/80 hover:bg-ivory-50 transition-all duration-300 flex flex-col justify-between hover:shadow-xl"
              >
                {/* Decorative step number */}
                <span className="absolute top-4 right-5 font-serif text-3xl font-light text-sand-300/60 group-hover:text-gold-500/40 transition-colors">
                  0{idx + 1}
                </span>

                <div>
                  {/* Icon container */}
                  <div className="w-12 h-12 bg-charcoal-950 text-gold-400 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-md">
                    <IconComponent className="w-6 h-6 stroke-[1.5]" />
                  </div>

                  <span className="text-[10px] uppercase tracking-ultra text-gold-600 block mb-1 font-semibold">
                    {pillar.subtitle}
                  </span>

                  <h3 className="font-serif text-xl text-charcoal-950 font-normal tracking-wide mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-charcoal-600 text-xs sm:text-sm font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-sand-200/80 flex items-center text-[10px] uppercase tracking-widest text-charcoal-500 group-hover:text-charcoal-900 transition-colors font-medium">
                  <span>Maison Guaranteed</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
