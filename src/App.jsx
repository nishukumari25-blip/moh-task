import React, { useState } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar, { NAV_LINKS } from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import SearchOverlay from './components/SearchOverlay';
import Hero from './components/Hero';
import CategoryShowcase from './components/CategoryShowcase';
import FeaturedProducts from './components/FeaturedProducts';
import TrendingSection from './components/TrendingSection';
import PromoBanner from './components/PromoBanner';
import WhyChooseUs from './components/WhyChooseUs';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import QuickViewModal from './components/QuickViewModal';
import Toast from './components/Toast';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [wishlist, setWishlist] = useState(['prod-w1', 'prod-a1']);
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  const handleNavigate = (href) => {
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (categoryId) => {
    setActiveCategory(categoryId);
    const shopSection = document.getElementById('shop');
    if (shopSection) {
      shopSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchSubmit = (query) => {
    setSearchQuery(query);
    setActiveCategory('all');
    const shopSection = document.getElementById('shop');
    if (shopSection) {
      shopSection.scrollIntoView({ behavior: 'smooth' });
    }
    showToast(`Showing search results for "${query}"`);
  };

  const handleToggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.includes(product.id);
      if (exists) {
        showToast(`Removed "${product.name}" from your private wishlist`, 'info');
        return prev.filter((id) => id !== product.id);
      } else {
        showToast(`Added "${product.name}" to your private wishlist`, 'success');
        return [...prev, product.id];
      }
    });
  };

  const handleInquire = (product) => {
    const sizeNote = product.selectedSize ? ` (Size ${product.selectedSize})` : '';
    showToast(`Private viewing request for "${product.name}${sizeNote}" received. Our concierge will contact you.`, 'success');
  };

  const handleOpenWishlistToast = () => {
    showToast(`You have ${wishlist.length} curated creations saved in your private wishlist`);
  };

  return (
    <div className="min-h-screen bg-ivory-50 text-charcoal-900 flex flex-col selection:bg-gold-500 selection:text-white">
      {/* 1. Announcement Bar */}
      <AnnouncementBar
        onExplorePromo={() => {
          const promoElement = document.querySelector('#shop');
          promoElement?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 2. Responsive Navigation Bar */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        wishlistCount={wishlist.length}
        onNavigate={handleNavigate}
        onOpenWishlistToast={handleOpenWishlistToast}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 3. Hero Banner */}
        <Hero
          onShopNow={() => handleNavigate('#shop')}
          onViewCollections={() => handleNavigate('#collections')}
        />

        {/* 4. Category Showcase */}
        <CategoryShowcase
          onSelectCategory={handleSelectCategory}
        />

        {/* 5. Featured Products Section */}
        <FeaturedProducts
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onQuickView={(prod) => setQuickViewProduct(prod)}
          onToggleWishlist={handleToggleWishlist}
          wishlistIds={wishlist}
        />

        {/* 6. Trending Collection Section */}
        <TrendingSection
          onExploreCapsule={() => {
            setActiveCategory('all');
            handleNavigate('#shop');
          }}
        />

        {/* 7. Promotional Seasonal Banner */}
        <PromoBanner
          onShopPromo={() => {
            setActiveCategory('all');
            handleNavigate('#shop');
          }}
          onShowToast={showToast}
        />

        {/* 8. Why Choose Us (Pillars of Luxury) */}
        <WhyChooseUs />

        {/* 9. Newsletter Subscription */}
        <Newsletter
          onShowToast={showToast}
        />
      </main>

      {/* 10. Complete Footer */}
      <Footer
        onNavigate={handleNavigate}
        onSelectCategory={handleSelectCategory}
      />

      {/* Search Overlay */}
      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearchSubmit={handleSearchSubmit}
      />

      {/* Mobile Navigation Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={NAV_LINKS}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
        onSelectCategory={handleSelectCategory}
      />

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onInquire={handleInquire}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={quickViewProduct ? wishlist.includes(quickViewProduct.id) : false}
      />

      {/* Interactive Toast Notifications */}
      <Toast
        message={toast?.message}
        type={toast?.type}
        onClose={() => setToast(null)}
      />
    </div>
  );
}
