import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, X, Sparkles } from 'lucide-react';
import ProductCard from './ProductCard';
import { CATEGORIES, PRODUCTS } from '../data/products';

export default function FeaturedProducts({
  activeCategory,
  onSelectCategory,
  searchQuery,
  setSearchQuery,
  onQuickView,
  onToggleWishlist,
  wishlistIds = [],
  onAddToCart,
}) {
  const [sortBy, setSortBy] = useState('featured');

  // Filter products by category and search query
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      const matchesCategory =
        activeCategory === 'all' || product.category === activeCategory;

      // Search query filter
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q) ||
        product.material.toLowerCase().includes(q) ||
        (product.badge && product.badge.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // 'featured' preserves default curated order
    });
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <section id="shop" className="py-20 lg:py-28 bg-ivory-50 border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span className="text-[11px] uppercase tracking-ultra text-gold-600 font-semibold">
              The Permanent & Seasonal Collection
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal-950 font-light tracking-tight">
            Featured Creations
          </h2>
          <div className="w-12 h-px bg-gold-500 mx-auto mt-4 mb-4" />
          <p className="text-charcoal-600 text-sm sm:text-base font-light tracking-wide">
            Explore 16 meticulously crafted garments and accessories defined by pure lines and noble origins.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col gap-6 mb-10 pb-6 border-b border-sand-200">
          {/* Category Tabs */}
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-2 sm:gap-3 py-1">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`whitespace-nowrap px-4 sm:px-5 py-2.5 text-xs uppercase tracking-ultra transition-all font-medium ${
                    isActive
                      ? 'bg-charcoal-950 text-ivory-50 shadow-md'
                      : 'bg-ivory-100 hover:bg-sand-200 text-charcoal-700 border border-sand-200'
                  }`}
                >
                  {cat.name}
                  <span className={`ml-1.5 text-[10px] ${isActive ? 'text-gold-300' : 'text-charcoal-400'}`}>
                    ({cat.count})
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search & Sort Controls Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Inline Search Bar */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-charcoal-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter by name, material, or keyword..."
                className="w-full bg-ivory-100 border border-sand-300 text-xs text-charcoal-900 pl-9 pr-8 py-2.5 focus:border-charcoal-900 focus:outline-none transition-colors placeholder:text-charcoal-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-charcoal-400 hover:text-charcoal-800 p-0.5"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Results count & Sort dropdown */}
            <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4">
              <span className="text-xs text-charcoal-500 tracking-wider">
                Showing <strong className="text-charcoal-900 font-semibold">{filteredProducts.length}</strong> of {PRODUCTS.length} pieces
              </span>

              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-3.5 h-3.5 text-charcoal-400 hidden sm:inline" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-ivory-100 border border-sand-300 text-xs text-charcoal-800 py-2 px-3 focus:border-charcoal-900 focus:outline-none tracking-wider uppercase cursor-pointer"
                  aria-label="Sort products"
                >
                  <option value="featured">Curated (Featured)</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
          </div>

          {/* Active Search / Category Notification Badge */}
          {(searchQuery || activeCategory !== 'all') && (
            <div className="flex items-center flex-wrap gap-2 pt-2">
              <span className="text-[11px] uppercase tracking-wider text-charcoal-400 font-medium">
                Active Filters:
              </span>
              {activeCategory !== 'all' && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-sand-200 text-charcoal-800 text-xs tracking-wider">
                  <span>Category: {activeCategory}</span>
                  <button onClick={() => onSelectCategory('all')} className="hover:text-charcoal-950">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {searchQuery && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-sand-200 text-charcoal-800 text-xs tracking-wider">
                  <span>Search: "{searchQuery}"</span>
                  <button onClick={() => setSearchQuery('')} className="hover:text-charcoal-950">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              <button
                onClick={() => {
                  onSelectCategory('all');
                  setSearchQuery('');
                }}
                className="text-[11px] uppercase tracking-wider text-gold-600 hover:underline underline-offset-4 font-semibold ml-2"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={onQuickView}
                onToggleWishlist={onToggleWishlist}
                isWishlisted={wishlistIds.includes(product.id)}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="py-20 text-center bg-ivory-100 border border-dashed border-sand-300 max-w-xl mx-auto px-6">
            <Search className="w-10 h-10 text-sand-400 mx-auto mb-4 stroke-1" />
            <h3 className="font-serif text-2xl text-charcoal-900 mb-2">No creations found</h3>
            <p className="text-charcoal-500 text-sm font-light mb-6">
              We couldn't find any items matching "{searchQuery}" in this category. Try adjusting your query or explore our full archive.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                onSelectCategory('all');
              }}
              className="px-6 py-3 bg-charcoal-950 text-ivory-50 text-xs uppercase tracking-ultra font-semibold hover:bg-gold-600 transition-colors"
            >
              View Full Collection
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
