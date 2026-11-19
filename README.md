# LUXE — Modern Haute Couture & Luxury Retail Homepage

A complete, responsive, premium retail homepage built for the luxury clothing brand **LUXE**.

> **MOH Technology — Frontend Developer Internship Assessment**  
> **Brand**: LUXE Maison de Haute Couture  
> **Aesthetic**: Warm Ivory, Champagne Sand, Charcoal Noir, Subtle Gold Accents  
> **Tech Stack**: React 18, Vite, Tailwind CSS, Lucide Icons  

---

## ✦ Design Philosophy & Brand Direction

LUXE is designed to evoke the restraint and timeless sophistication of modern luxury fashion maisons such as *Céline*, *The Row*, *Khaite*, and *Loro Piana*.

- **Palette**: Warm ivory (`#FDFCF7`), champagne sand (`#ECE6DA`, `#DFD7C7`), charcoal black (`#121214`), and subtle antique gold (`#C5A880`, `#D4AF37`).
- **Typography**: Editorial serifs (*Cormorant Garamond* & *Playfair Display*) paired with clean modernist grotesque typography (*Plus Jakarta Sans*).
- **Whitespace & Rhythm**: Generous editorial spacing, hairline borders, uppercase tracked labels (`tracking-ultra`), and refined micro-interactions.
- **Imagery**: Curated high-fashion editorial imagery showcasing fine textures, cashmere drape, and architectural tailoring.

---

## ✦ Implemented Sections (10/10)

1. **Announcement Bar**: Promotional header highlighting complimentary global white-glove shipping on orders over $500, flagship cities (*Paris, Milan, London, New York*), and currency indicator.
2. **Responsive Navigation Bar**:
   - Centered luxury serif logo (`LUXE — Haute Couture`)
   - Links: Home, Shop, Collections, About, Contact
   - Working search trigger (modal overlay with live query and curated keywords)
   - Interactive Wishlist counter badge
   - Mobile hamburger menu triggering an editorial slide-out drawer
3. **Editorial Hero Banner**:
   - Grand campaign imagery with layered subtle gradients
   - Compelling editorial headline: *"Architectural Silhouettes, Timeless Nobility"*
   - Subtitle articulating noble materials (Mongolian cashmere, French calfskin, mulberry silk)
   - Dual Call-to-Action buttons: *"Shop The Collection"* & *"Explore Editorial Capsule"*
   - Atelier heritage credentials & animated scroll indicator
4. **Category Showcase**:
   - 4 primary departments: **Women**, **Men**, **Accessories**, and **Footwear**
   - High-resolution editorial cards with smooth hover zoom transitions
   - Direct click-to-filter interaction that jumps and smoothly sets the active department in the catalog
5. **Featured Products Section (16 Luxury Creations)**:
   - At least 12 products required — **16 high-fashion items included** (4 Women, 4 Men, 4 Accessories, 4 Footwear)
   - Product Cards display: high-res primary image, secondary lookbook image on hover, product name, price, original price strikethrough (for archive sales), category tag, noble material snippet, and badge (*Bestseller*, *New Season*, *Limited Edition*, *Iconic*, *Archive -15%*)
   - Category filtering tabs: *All Products*, *Women*, *Men*, *Accessories*, *Footwear*
   - Real-time search filter with instant result count
   - Sorting dropdown: *Curated (Featured)*, *Price: Low to High*, *Price: High to Low*, *Highest Rated*
   - Active filter tags with single-click dismissal and "Reset All Filters"
   - Empty search state with fallback action
6. **Trending Collection / Editorial Spotlight**:
   - Split-screen asymmetric editorial layout
   - Creative Director quote (*Elena Rostova*)
   - Highlighting the Autumn/Winter capsule: *"The Architecture of Restraint"*
   - Provenance specifications: Biella & Florence ateliers, Super 140s wool & cashmere
7. **Seasonal Promotional Banner**:
   - High-impact luxury archive sale callout
   - Live dynamic countdown clock (*Days, Hours, Minutes, Seconds*)
   - Exclusive voucher code `LUXE-ARCHIVE` with one-click copy and toast notification
   - Direct CTA to the archive collection
8. **Why Choose Us (The LUXE Promise)**:
   - 4 brand pillars:
     1. *Atelier Craftsmanship* (Generational single-needle tailoring)
     2. *Pure Noble Fibers* (Traceable Mongolian cashmere & GOTS silk)
     3. *Complimentary Express Shipping* (Climate-controlled worldwide delivery with prepaid duties)
     4. *Private Client Concierge* (24/7 styling advisory & archive sourcing)
9. **Newsletter Subscription**:
   - VIP salon invitation to *"The LUXE Circle"*
   - Email format validation, clean error feedback, instant success state, and toast notification
   - Reassurance of strict confidentiality and zero spam
10. **Comprehensive Footer**:
    - Maison heritage summary & flagship atelier addresses (Paris & Milan)
    - Department navigation links
    - Maison story & sustainability links
    - Client concierge service directory
    - Social links (Instagram, Twitter/X, Facebook, YouTube)
    - Region & currency indicator (`United States (USD $)`)
    - Smooth "Back To Top" action and copyright notice

---

## ✦ Interactive Features

- **Frontend Product Search**: Instant debounced search filtering by name, department, material, and keywords.
- **Category Filtering**: Seamless toggling between departments with responsive count badges.
- **Quick View Modal**: Deep-dive popup modal with image switcher, size selector, color swatches, noble fabric composition details, and "Request Private Viewing" concierge action.
- **Wishlist Toggle**: Heart icon on every card and modal updating live counter and toast state.
- **Micro-Interactions**: Smooth scrolling between anchors (`#home`, `#shop`, `#collections`, `#why-us`, `#contact`, `#about`), image hover scale, and toast notifications.

---

## ✦ Project Structure

```
moh/
├── index.html                  # HTML entry point with Google Fonts (Cormorant Garamond, Plus Jakarta Sans)
├── package.json                # Project dependencies & scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailored luxury palette, fonts & animations
├── postcss.config.js           # PostCSS Tailwind integration
├── src/
│   ├── main.jsx                # Application root mount
│   ├── App.jsx                 # Top-level state coordinator & section assembly
│   ├── index.css               # Global CSS, luxury scrollbars, utility styles
│   ├── data/
│   │   └── products.js         # Static luxury product catalog, categories & pillars
│   └── components/
│       ├── AnnouncementBar.jsx # Promotional top banner
│       ├── Navbar.jsx          # Desktop & mobile responsive header
│       ├── MobileMenu.jsx      # Mobile navigation drawer
│       ├── SearchOverlay.jsx   # Search dialog with curated search tags
│       ├── Hero.jsx            # Editorial campaign hero banner
│       ├── CategoryShowcase.jsx# Department cards (Women, Men, Accessories, Footwear)
│       ├── FeaturedProducts.jsx# Product catalog with search, tabs, sort & count
│       ├── ProductCard.jsx     # Reusable product card with dual image & badges
│       ├── QuickViewModal.jsx  # Detailed product inspection modal
│       ├── TrendingSection.jsx # Editorial narrative & Creative Director quote
│       ├── PromoBanner.jsx     # Seasonal archive sale with countdown timer
│       ├── WhyChooseUs.jsx     # 4 Pillars of luxury artisanship
│       ├── Newsletter.jsx      # VIP salon newsletter subscription
│       ├── Footer.jsx          # Complete footer with legal, links & socials
│       └── Toast.jsx           # Self-dismissing interaction notification toast
└── README.md                   # Complete documentation
```

---

## ✦ Getting Started Locally

### Prerequisites
- Node.js `v18+` or `v20+` (tested on Node v26)
- npm `v9+` or `v10+`

### Installation
```bash
# Clone or navigate to the repository directory
cd moh

# Install dependencies
npm install

# Start local development server
npm run dev
```

The development server runs at `http://localhost:3000`.

### Production Build
```bash
# Compile and bundle for production
npm run build

# Preview production build locally
npm run preview
```

---

## ✦ Deployment to Vercel

This repository is pre-configured and 100% deployment-ready for **Vercel**:

1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete luxury fashion retail homepage for LUXE"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```
2. In the [Vercel Dashboard](https://vercel.com):
   - Click **Add New Project** -> **Import Git Repository**.
   - Select your `luxe` repository.
   - Framework Preset: **Vite** (auto-detected).
   - Build Command: `npm run build` (default).
   - Output Directory: `dist` (default).
   - Click **Deploy**.

---

## ✦ Assessment Compliance Checklist

- [x] **Design Direction**: Warm ivory, beige, charcoal black, subtle gold, editorial typography, generous whitespace.
- [x] **10 Required Sections**: Announcement bar, Navbar, Hero, Categories, 16 Products, Trending collection, Seasonal promo banner, Why Choose Us, Newsletter UI, Complete footer.
- [x] **Product Requirements**: Image, name, price, category, discount/bestseller badges, static data file.
- [x] **Functional Requirements**: Real-time product search, category filter, "All Products" filter, responsive mobile menu, smooth scrolling, hover transitions, interactive buttons.
- [x] **Responsive Layout**: Mobile phones, tablets, desktop screens tested without overflow.
- [x] **Code Quality**: Zero broken images, semantic HTML, functional components & hooks, reusable atomic structure, zero build errors.
- [x] **Strict Restrictions**: No backend, no database, no real payment/auth, pure static UI/UX frontend.
