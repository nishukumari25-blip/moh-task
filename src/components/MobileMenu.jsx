import React from 'react';
import { X, Search, ChevronRight, ArrowUpRight } from 'lucide-react';

export default function MobileMenu({
  isOpen,
  onClose,
  navLinks,
  onNavigate,
  onOpenSearch,
  onSelectCategory,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-sm w-full bg-ivory-50 shadow-2xl flex flex-col justify-between p-6 sm:p-8 overflow-y-auto border-l border-sand-200">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-sand-200">
            <span className="font-serif text-2xl tracking-[0.25em] font-semibold text-charcoal-900">
              LUXE
            </span>
            <button
              onClick={onClose}
              className="p-2 text-charcoal-500 hover:text-charcoal-950 transition-colors"
              aria-label="Close mobile navigation"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Search Trigger */}
          <button
            onClick={() => {
              onClose();
              onOpenSearch();
            }}
            className="w-full mt-6 py-3 px-4 bg-ivory-100 border border-sand-200 text-left flex items-center justify-between text-xs tracking-wider uppercase text-charcoal-600 hover:border-gold-500 transition-colors"
          >
            <span className="flex items-center gap-2">
              <Search className="w-4 h-4 text-charcoal-400" />
              <span>Search Collections</span>
            </span>
            <ChevronRight className="w-4 h-4 text-charcoal-400" />
          </button>

          {/* Navigation Links */}
          <nav className="mt-8 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                  onNavigate(link.href);
                }}
                className="group flex items-center justify-between py-2 text-lg font-serif tracking-wider text-charcoal-800 hover:text-gold-600 transition-colors border-b border-sand-100"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-charcoal-300 group-hover:text-gold-600 transition-colors" />
              </a>
            ))}
          </nav>

          {/* Categories Quick Filter */}
          <div className="mt-8 pt-6 border-t border-sand-200">
            <p className="text-[11px] uppercase tracking-ultra text-gold-600 font-semibold mb-3">
              Shop By Department
            </p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: 'Women', id: 'women' },
                { name: 'Men', id: 'men' },
                { name: 'Accessories', id: 'accessories' },
                { name: 'Footwear', id: 'footwear' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    onClose();
                    onSelectCategory(cat.id);
                  }}
                  className="text-left px-3 py-2 bg-ivory-100 hover:bg-sand-200 text-xs tracking-wider text-charcoal-800 transition-colors border border-sand-200"
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer in Drawer */}
        <div className="pt-8 border-t border-sand-200 text-xs text-charcoal-500">
          <p className="tracking-widest uppercase text-[10px] text-charcoal-400 mb-2">Concierge & Client Services</p>
          <p className="font-serif text-charcoal-800 text-sm">concierge@luxe-maison.com</p>
          <p className="mt-1">+1 (800) 892-LUXE • Paris & New York</p>
          <div className="mt-4 flex items-center gap-4 text-charcoal-600 text-[11px] uppercase tracking-wider">
            <a href="#about" onClick={(e) => { e.preventDefault(); onClose(); onNavigate('#about'); }} className="hover:text-charcoal-900">Maison Story</a>
            <span>•</span>
            <a href="#why-us" onClick={(e) => { e.preventDefault(); onClose(); onNavigate('#why-us'); }} className="hover:text-charcoal-900">Artisanship</a>
          </div>
        </div>
      </div>
    </div>
  );
}
