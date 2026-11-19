import React, { useState } from 'react';
import { Heart, Eye, ShoppingBag } from 'lucide-react';

export default function ProductCard({
  product,
  onQuickView,
  onToggleWishlist,
  isWishlisted = false,
  onAddToCart,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const getBadgeStyle = (badgeType) => {
    switch (badgeType) {
      case 'bestseller':
        return 'bg-gold-500 text-charcoal-950 font-semibold';
      case 'new':
        return 'bg-charcoal-900 text-ivory-50 border border-gold-400/30';
      case 'sale':
        return 'bg-charcoal-800 text-gold-300 border border-gold-500/40';
      case 'limited':
        return 'bg-charcoal-950 text-gold-400 border border-gold-400/50';
      case 'iconic':
        return 'bg-sand-300 text-charcoal-950 font-medium';
      default:
        return 'bg-charcoal-900 text-ivory-50';
    }
  };

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
    <article
      className="group flex flex-col bg-ivory-50 border border-sand-200/90 transition-all duration-300 hover:border-sand-400/80 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-sand-100 cursor-pointer">
        {/* Skeleton shimmer before load */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-sand-200 animate-pulse" />
        )}

        {/* Primary and Secondary Hover Image */}
        <img
          src={isHovered && product.secondaryImage ? product.secondaryImage : product.image}
          alt={product.name}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onClick={() => onQuickView(product)}
          className={`h-full w-full object-cover object-center transition-all duration-700 ease-out ${
            imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          } ${isHovered ? 'scale-105 filter brightness-95' : 'scale-100'}`}
        />

        {/* Badge (Bestseller, New Season, Archive Discount) */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span
              className={`inline-block px-2.5 py-1 text-[10px] uppercase tracking-ultra shadow-sm ${getBadgeStyle(
                product.badgeType
              )}`}
            >
              {product.badge}
            </span>
          </div>
        )}

        {/* Wishlist Heart Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className={`absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
            isWishlisted
              ? 'bg-charcoal-900 text-gold-400 shadow-md'
              : 'bg-ivory-50/80 text-charcoal-700 hover:bg-ivory-50 hover:text-charcoal-950 backdrop-blur-sm'
          }`}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart
            className={`w-4 h-4 transition-transform active:scale-125 ${
              isWishlisted ? 'fill-gold-400 text-gold-400' : 'stroke-[1.8]'
            }`}
          />
        </button>

        {/* Hover Action Bar */}
        <div
          className={`absolute inset-x-3 bottom-3 z-10 grid grid-cols-2 gap-2 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
          }`}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-ivory-50/95 hover:bg-ivory-50 text-charcoal-950 text-[11px] uppercase tracking-wider font-medium shadow-md backdrop-blur-sm border border-sand-300 transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Quick View</span>
            <span className="sm:hidden">View</span>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-charcoal-950 hover:bg-gold-600 text-ivory-50 text-[11px] uppercase tracking-wider font-medium shadow-md transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Add</span>
          </button>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
        <div>
          {/* Category Tag */}
          <span className="text-[10px] uppercase tracking-ultra text-charcoal-400 font-medium block mb-1">
            {product.category}
          </span>

          {/* Product Name */}
          <h3
            onClick={() => onQuickView(product)}
            className="font-serif text-base sm:text-lg text-charcoal-900 group-hover:text-gold-700 transition-colors cursor-pointer line-clamp-1 font-normal tracking-wide"
            title={product.name}
          >
            {product.name}
          </h3>

          {/* Brief Material Note */}
          <p className="text-charcoal-500 text-xs mt-1 font-light line-clamp-1">
            {product.material}
          </p>
        </div>

        {/* Pricing */}
        <div className="mt-4 pt-3 border-t border-sand-200/80 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-sm sm:text-base font-medium text-charcoal-950 tracking-wider font-sans">
              {formattedPrice}
            </span>
            {formattedOriginalPrice && (
              <span className="text-xs text-charcoal-400 line-through tracking-wider">
                {formattedOriginalPrice}
              </span>
            )}
          </div>

          <span className="text-[10px] uppercase tracking-widest text-gold-600 font-semibold group-hover:underline underline-offset-4">
            Details
          </span>
        </div>
      </div>
    </article>
  );
}
