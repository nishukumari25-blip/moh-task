import React from 'react';
import { ArrowUp, Instagram, Twitter, Facebook, Youtube, Globe } from 'lucide-react';

export default function Footer({ onNavigate, onSelectCategory }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="about" className="bg-charcoal-950 text-ivory-100 pt-16 lg:pt-20 pb-12 border-t border-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-16 border-b border-charcoal-800">
          {/* Brand Column (2 cols wide on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-serif text-3xl tracking-[0.28em] font-semibold text-ivory-50 block">
              LUXE
            </span>
            <span className="text-[10px] uppercase tracking-[0.45em] text-gold-400 block -mt-2 font-light">
              Maison de Haute Couture
            </span>

            <p className="text-sand-300 text-xs sm:text-sm font-light leading-relaxed max-w-sm pt-2">
              Founded in Paris and crafted across the historic mills of Biella and Tuscany, LUXE epitomizes quiet luxury through architectural precision, unlined cashmere, and noble materials.
            </p>

            <div className="pt-2 text-xs text-charcoal-400 space-y-1">
              <p>Maison Flagship: 12 Place Vendôme, 75001 Paris, France</p>
              <p>Private Atelier: Via Montenapoleone 8, 20121 Milano, Italy</p>
              <p>Concierge Desk: +1 (800) 892-LUXE • concierge@luxe-maison.com</p>
            </div>
          </div>

          {/* Department Links */}
          <div>
            <h4 className="text-[11px] uppercase tracking-ultra text-gold-400 font-semibold mb-5">
              Departments
            </h4>
            <ul className="space-y-3 text-xs text-sand-300 font-light">
              <li>
                <button
                  onClick={() => onSelectCategory('women')}
                  className="hover:text-gold-300 transition-colors"
                >
                  Women's Atelier
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('men')}
                  className="hover:text-gold-300 transition-colors"
                >
                  Men's Sartorial
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('accessories')}
                  className="hover:text-gold-300 transition-colors"
                >
                  Fine Leather & Jewelry
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('footwear')}
                  className="hover:text-gold-300 transition-colors"
                >
                  Handcrafted Footwear
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('all')}
                  className="hover:text-gold-300 transition-colors"
                >
                  Seasonal Lookbook
                </button>
              </li>
            </ul>
          </div>

          {/* Maison & Heritage */}
          <div>
            <h4 className="text-[11px] uppercase tracking-ultra text-gold-400 font-semibold mb-5">
              The Maison
            </h4>
            <ul className="space-y-3 text-xs text-sand-300 font-light">
              <li>
                <a href="#about" onClick={(e) => { e.preventDefault(); onNavigate('#about'); }} className="hover:text-gold-300 transition-colors">
                  Our Heritage & Ethos
                </a>
              </li>
              <li>
                <a href="#why-us" onClick={(e) => { e.preventDefault(); onNavigate('#why-us'); }} className="hover:text-gold-300 transition-colors">
                  Generational Ateliers
                </a>
              </li>
              <li>
                <a href="#collections" onClick={(e) => { e.preventDefault(); onNavigate('#collections'); }} className="hover:text-gold-300 transition-colors">
                  Runway Archives
                </a>
              </li>
              <li>
                <a href="#why-us" onClick={(e) => { e.preventDefault(); onNavigate('#why-us'); }} className="hover:text-gold-300 transition-colors">
                  Traceability & Sustainability
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => { e.preventDefault(); onNavigate('#contact'); }} className="hover:text-gold-300 transition-colors">
                  Press & Private Salons
                </a>
              </li>
            </ul>
          </div>

          {/* Client Concierge Services */}
          <div>
            <h4 className="text-[11px] uppercase tracking-ultra text-gold-400 font-semibold mb-5">
              Client Concierge
            </h4>
            <ul className="space-y-3 text-xs text-sand-300 font-light">
              <li>
                <a href="#why-us" onClick={(e) => { e.preventDefault(); onNavigate('#why-us'); }} className="hover:text-gold-300 transition-colors">
                  Complimentary Shipping
                </a>
              </li>
              <li>
                <a href="#shop" onClick={(e) => { e.preventDefault(); onNavigate('#shop'); }} className="hover:text-gold-300 transition-colors">
                  White-Glove Delivery
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => { e.preventDefault(); onNavigate('#contact'); }} className="hover:text-gold-300 transition-colors">
                  Bespoke Monogramming
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => { e.preventDefault(); onNavigate('#contact'); }} className="hover:text-gold-300 transition-colors">
                  Private Styling Suite
                </a>
              </li>
              <li>
                <a href="#why-us" onClick={(e) => { e.preventDefault(); onNavigate('#why-us'); }} className="hover:text-gold-300 transition-colors">
                  Lifetime Authenticity
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Middle Bar: Social Icons & Currency Selector */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-charcoal-800 text-xs">
          {/* Social Icons */}
          <div className="flex items-center gap-5">
            <span className="text-[11px] uppercase tracking-wider text-charcoal-400">Follow The Maison:</span>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-sand-300 hover:text-gold-400 transition-colors p-1"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-sand-300 hover:text-gold-400 transition-colors p-1"
              aria-label="Twitter / X"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="text-sand-300 hover:text-gold-400 transition-colors p-1"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="text-sand-300 hover:text-gold-400 transition-colors p-1"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>

          {/* Region / Currency */}
          <div className="flex items-center gap-2 text-sand-300">
            <Globe className="w-4 h-4 text-gold-400" />
            <span>Region:</span>
            <span className="text-ivory-100 font-medium tracking-wider">United States (USD $)</span>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[11px] uppercase tracking-ultra text-sand-300 hover:text-gold-400 transition-colors"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-charcoal-400 font-light">
          <p>© {new Date().getFullYear()} LUXE Haute Couture S.A. All rights reserved. MOH Technology Internship Assessment.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-sand-300 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-sand-300 cursor-pointer">Terms of Maison</span>
            <span>•</span>
            <span className="hover:text-sand-300 cursor-pointer">Cookie Preferences</span>
            <span>•</span>
            <span className="hover:text-sand-300 cursor-pointer">Legal Notice</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
