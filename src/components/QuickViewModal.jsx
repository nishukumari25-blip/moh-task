import React, { useState, useEffect } from 'react';
import { X, Heart, ShieldCheck, Truck, Sparkles } from 'lucide-react';

export default function QuickViewModal({
  product,
  isOpen,
  onClose,
  onInquire,
  onToggleWishlist,
  isWishlisted,
}) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  useEffect(() => {
    if (product) {
      setSelectedImage(product.image);
      setSelectedSize(product.sizes?.[0] || '');
      setSelectedColor(product.colors?.[0] || '');
    }
  }, [product]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(product.price);

  const formattedOriginalPrice = product.originalPrice
    ? new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
      }).format(product.originalPrice)
    : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-charcoal-950/80 backdrop-blur-md transition-opacity">
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-4xl bg-ivory-50 border border-sand-300 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col md:flex-row animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-ivory-50/80 hover:bg-ivory-50 text-charcoal-700 hover:text-charcoal-950 rounded-full backdrop-blur-sm transition-colors border border-sand-200"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Image Gallery */}
        <div className="md:w-1/2 bg-sand-100 flex flex-col justify-between p-6">
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-ivory-100">
            <img
              src={selectedImage || product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center transition-all duration-500"
            />
            {product.badge && (
              <span className="absolute top-3 left-3 bg-charcoal-950 text-ivory-50 text-[10px] uppercase tracking-ultra px-2.5 py-1">
                {product.badge}
              </span>
            )}
          </div>

          {/* Thumbnails */}
          {product.secondaryImage && (
            <div className="flex items-center gap-3 mt-4">
              <button
                onClick={() => setSelectedImage(product.image)}
                className={`w-16 h-20 border-2 overflow-hidden transition-all ${
                  selectedImage === product.image ? 'border-gold-500' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={product.image} alt="View 1" className="w-full h-full object-cover" />
              </button>
              <button
                onClick={() => setSelectedImage(product.secondaryImage)}
                className={`w-16 h-20 border-2 overflow-hidden transition-all ${
                  selectedImage === product.secondaryImage ? 'border-gold-500' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={product.secondaryImage} alt="View 2" className="w-full h-full object-cover" />
              </button>
            </div>
          )}
        </div>

        {/* Right Column: Details & Actions */}
        <div className="md:w-1/2 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] uppercase tracking-ultra text-gold-600 font-semibold">
                {product.category}
              </span>
              <span className="text-sand-300">•</span>
              <span className="text-[11px] uppercase tracking-wider text-charcoal-500 font-light">
                Maison Archive
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl text-charcoal-950 font-normal tracking-wide">
              {product.name}
            </h2>

            {/* Price */}
            <div className="mt-3 flex items-baseline gap-3">
              <span className="text-2xl font-serif text-charcoal-950 font-medium">
                {formattedPrice}
              </span>
              {formattedOriginalPrice && (
                <span className="text-sm text-charcoal-400 line-through">
                  {formattedOriginalPrice}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="mt-4 text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
              {product.description}
            </p>

            {/* Noble Material Spec */}
            <div className="mt-4 p-3 bg-ivory-100 border border-sand-200">
              <span className="text-[10px] uppercase tracking-ultra text-charcoal-400 block mb-1">
                Noble Composition
              </span>
              <p className="text-xs font-serif text-charcoal-900 italic">
                {product.material}
              </p>
            </div>

            {/* Color Swatches */}
            {product.colors && product.colors.length > 0 && (
              <div className="mt-5">
                <label className="text-[11px] uppercase tracking-wider text-charcoal-700 block mb-2 font-medium">
                  Color: <span className="font-normal text-charcoal-900">{selectedColor}</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-3 py-1.5 text-xs tracking-wider border transition-all ${
                        selectedColor === color
                          ? 'border-charcoal-950 bg-charcoal-950 text-ivory-50'
                          : 'border-sand-300 text-charcoal-700 hover:border-charcoal-700'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selector */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mt-5">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-[11px] uppercase tracking-wider text-charcoal-700 font-medium">
                    Select Size
                  </label>
                  <span className="text-[11px] text-charcoal-400 underline underline-offset-2">
                    Size Guide
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-10 px-3 py-2 text-xs font-medium border transition-all ${
                        selectedSize === size
                          ? 'border-gold-600 bg-gold-500 text-charcoal-950 font-bold'
                          : 'border-sand-300 text-charcoal-800 hover:border-charcoal-800'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="mt-8 pt-6 border-t border-sand-200 space-y-3">
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  onInquire?.({ ...product, selectedSize, selectedColor });
                  onClose();
                }}
                className="flex-1 py-4 bg-charcoal-950 hover:bg-gold-600 text-ivory-50 transition-colors text-xs uppercase tracking-ultra font-semibold flex items-center justify-center gap-2 shadow-lg"
              >
                <Sparkles className="w-4 h-4 text-gold-400" />
                <span>Request Private Viewing</span>
              </button>

              <button
                onClick={() => onToggleWishlist(product)}
                className={`p-4 border transition-colors ${
                  isWishlisted
                    ? 'border-gold-500 bg-charcoal-900 text-gold-400'
                    : 'border-sand-300 hover:border-charcoal-900 text-charcoal-800'
                }`}
                aria-label="Wishlist toggle"
              >
                <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-gold-400' : ''}`} />
              </button>
            </div>

            {/* Service Highlights */}
            <div className="grid grid-cols-2 gap-2 text-[11px] text-charcoal-500 pt-2 font-light">
              <div className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                <span>Complimentary Delivery</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                <span>100% Authenticity Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
