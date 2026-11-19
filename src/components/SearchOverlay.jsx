import React, { useRef, useEffect } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';

const QUICK_SEARCHES = ['Cashmere Coat', 'Silk Slip Dress', 'Tote Bag', 'Wool Blazer', 'Chelsea Boot', 'Mule'];

export default function SearchOverlay({
  isOpen,
  onClose,
  searchQuery,
  setSearchQuery,
  onSearchSubmit,
}) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(searchQuery);
    onClose();
  };

  const handleQuickTagClick = (tag) => {
    setSearchQuery(tag);
    onSearchSubmit(tag);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-charcoal-950/75 backdrop-blur-md transition-all">
      <div className="bg-ivory-50 w-full max-w-3xl border border-sand-200 shadow-2xl p-6 md:p-8 animate-fadeIn">
        <div className="flex items-center justify-between pb-4 border-b border-sand-200">
          <div className="flex items-center gap-2">
            <span className="text-[11px] tracking-ultra uppercase text-gold-600 font-semibold">Maison Search</span>
          </div>
          <button
            onClick={onClose}
            className="text-charcoal-500 hover:text-charcoal-900 transition-colors p-1"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-6">
          <div className="relative flex items-center">
            <Search className="w-5 h-5 text-charcoal-400 absolute left-0" />
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search garments, noble materials, silhouettes..."
              className="w-full bg-transparent pl-8 pr-12 py-3 text-lg md:text-xl font-serif text-charcoal-900 border-b border-charcoal-300 focus:border-charcoal-900 focus:outline-none placeholder:text-charcoal-400 placeholder:font-sans placeholder:text-sm"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-8 text-charcoal-400 hover:text-charcoal-700"
                aria-label="Clear input"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              type="submit"
              className="absolute right-0 text-charcoal-900 hover:text-gold-600 transition-colors"
              aria-label="Submit search"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </form>

        <div className="mt-6 pt-4 border-t border-sand-100">
          <p className="text-[11px] uppercase tracking-widest text-charcoal-500 mb-3 font-medium">
            Curated Searches:
          </p>
          <div className="flex flex-wrap gap-2">
            {QUICK_SEARCHES.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => handleQuickTagClick(tag)}
                className="px-3 py-1.5 bg-ivory-100 hover:bg-sand-200 text-charcoal-700 text-xs tracking-wider transition-colors border border-sand-200"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
