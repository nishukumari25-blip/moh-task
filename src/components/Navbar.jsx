import React, { useState, useEffect } from 'react';
import { Search, Heart, Menu } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Shop', href: '#shop' },
  { name: 'Collections', href: '#collections' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({
  onOpenSearch,
  onOpenMobileMenu,
  wishlistCount = 0,
  onNavigate,
  onOpenWishlistToast,
}) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-ivory-50/95 backdrop-blur-md shadow-sm py-3 border-b border-sand-200/80'
          : 'bg-ivory-50 py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Mobile menu hamburger button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={onOpenMobileMenu}
              className="p-2 -ml-2 text-charcoal-800 hover:text-gold-600 transition-colors"
              aria-label="Open mobile menu"
            >
              <Menu className="w-6 h-6" />
            </button>
            <button
              onClick={onOpenSearch}
              className="p-2 text-charcoal-800 hover:text-gold-600 transition-colors ml-1"
              aria-label="Open search"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Left Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
            {NAV_LINKS.slice(0, 3).map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(link.href);
                }}
                className="text-xs uppercase tracking-ultra text-charcoal-800 hover:text-gold-600 transition-colors font-medium relative gold-line"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Centered Brand Logo */}
          <div className="text-center">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('#home');
              }}
              className="inline-block group"
              aria-label="LUXE Homepage"
            >
              <span className="font-serif text-3xl sm:text-4xl tracking-[0.28em] font-semibold text-charcoal-950 block transition-transform group-hover:scale-[1.02]">
                LUXE
              </span>
              <span className="text-[9px] uppercase tracking-[0.45em] text-gold-600 block -mt-1 font-sans font-light">
                Haute Couture
              </span>
            </a>
          </div>

          {/* Right Desktop Nav Links & Action Icons */}
          <div className="flex items-center space-x-6 sm:space-x-8">
            <nav className="hidden lg:flex items-center space-x-8" aria-label="Secondary Navigation">
              {NAV_LINKS.slice(3).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(link.href);
                  }}
                  className="text-xs uppercase tracking-ultra text-charcoal-800 hover:text-gold-600 transition-colors font-medium relative gold-line"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="flex items-center space-x-4 sm:space-x-5 border-l border-sand-200/80 pl-4 sm:pl-6">
              {/* Desktop Search Trigger */}
              <button
                onClick={onOpenSearch}
                className="hidden lg:flex items-center gap-2 text-xs uppercase tracking-wider text-charcoal-700 hover:text-gold-600 transition-colors"
                aria-label="Search garments"
              >
                <Search className="w-4 h-4" />
                <span className="hidden xl:inline text-[11px]">Search</span>
              </button>

              {/* Wishlist Icon */}
              <button
                onClick={onOpenWishlistToast}
                className="relative p-1.5 text-charcoal-800 hover:text-gold-600 transition-colors"
                aria-label="View saved pieces"
                title="Private Wishlist"
              >
                <Heart className="w-5 h-5 stroke-[1.75]" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gold-600 text-ivory-50 text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {wishlistCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export { NAV_LINKS };
