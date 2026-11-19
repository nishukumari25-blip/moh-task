import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORY_SHOWCASE } from '../data/products';

export default function CategoryShowcase({ onSelectCategory }) {
  return (
    <section id="categories" className="py-20 lg:py-28 bg-ivory-100/70 border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-18">
          <span className="text-[11px] uppercase tracking-ultra text-gold-600 font-semibold block mb-2">
            The Maisons Departments
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal-950 font-light tracking-tight">
            Curated Categories
          </h2>
          <div className="w-12 h-px bg-gold-500 mx-auto mt-4 mb-4" />
          <p className="text-charcoal-600 text-sm sm:text-base font-light tracking-wide max-w-xl mx-auto">
            Discover tailored garments, artisanal footwear, and sculptural accessories shaped with noble materials.
          </p>
        </div>

        {/* 4 Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {CATEGORY_SHOWCASE.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.categoryFilter)}
              className="group relative cursor-pointer overflow-hidden bg-charcoal-900 aspect-[3/4] shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-end p-6 sm:p-7"
            >
              {/* Background Image with smooth zoom */}
              <img
                src={cat.image}
                alt={`${cat.title} collection`}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out filter brightness-[0.88] group-hover:brightness-[0.75]"
              />

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/30 to-transparent transition-opacity" />
              <div className="absolute inset-0 border border-ivory-50/10 group-hover:border-gold-400/40 transition-colors duration-300 pointer-events-none" />

              {/* Content */}
              <div className="relative z-10 text-ivory-50 transform transition-transform duration-300 group-hover:-translate-y-1">
                <span className="text-[10px] uppercase tracking-ultra text-gold-300 block mb-1.5 font-medium">
                  {cat.tag}
                </span>
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal tracking-wide text-ivory-50 group-hover:text-gold-200 transition-colors">
                    {cat.title}
                  </h3>
                  <div className="w-8 h-8 rounded-full border border-ivory-50/30 flex items-center justify-center text-ivory-50 group-hover:border-gold-400 group-hover:bg-gold-400 group-hover:text-charcoal-950 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
                <p className="text-sand-200/80 text-xs mt-2 line-clamp-2 font-light leading-relaxed">
                  {cat.description}
                </p>
                <div className="mt-4 pt-3 border-t border-ivory-50/20 flex items-center justify-between text-[11px] uppercase tracking-widest text-gold-300/90 font-medium opacity-90 group-hover:opacity-100">
                  <span>Explore Department</span>
                  <span>View All</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
