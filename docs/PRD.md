LuxeTime Watch Store
Product Requirements Document
Next.js + MUI  |  Vercel Deployment
Version 1.0  |  March 2026

Field
Details
Document Title
LuxeTime Watch Store — Product Requirements Document
Version
1.0 (Initial Release)
Date
March 2026
Stack
Next.js 14 (App Router), Material UI (MUI) v5, TypeScript
Deployment
Vercel (CI/CD via GitHub integration)
Status
Draft — Awaiting Engineering Review

1. Project Overview
LuxeTime is a small, focused e-commerce front-end application that showcases three premium timepieces for sale: a Bronze Watch, a Silver Watch, and a Gold Watch. The goal is to provide a polished, modern shopping experience that builds customer trust and drives conversions, all delivered through a lightweight, performant Next.js application styled with Material UI and hosted on Vercel.
1.1 Objectives
    • Present the three watch products in an elegant, mobile-first product catalog.
    • Provide clear pricing, feature descriptions, and high-quality visuals for each watch.
    • Allow users to add watches to a shopping cart and proceed to a checkout summary.
    • Achieve 90+ Lighthouse performance and accessibility scores.
    • Enable zero-downtime continuous deployment via Vercel on every push to main.
1.2 Out of Scope
    • Backend payment processing (Stripe integration deferred to v2).
    • User authentication, accounts, and order history.
    • Inventory management or CMS integration.
    • Internationalisation (i18n) beyond English.

2. Technology Stack
Layer
Technology
Rationale
Framework
Next.js 14 (App Router)
SSR/SSG support, file-based routing, image optimisation built-in
Language
TypeScript 5
Type safety, better DX, reduced runtime errors
UI Library
Material UI (MUI) v5
Comprehensive component library, theming system, accessibility
State
React Context + useReducer
Lightweight cart state without external dependencies
Styling
MUI sx prop + theme
Co-located styles, consistent design tokens
Hosting
Vercel
Zero-config Next.js deployment, edge CDN, preview URLs
Package Manager
npm
Default Next.js toolchain, simple CI integration

3. Product Catalogue
The application features exactly three watch products. All data is statically defined in a /src/data/products.ts file.

SKU
Product Name
Price (USD)
Key Material
Tag Line
LTBZ-001
Bronze Watch
$149.99
Bronze-tone alloy case
Raw character, lasting style
LTSL-002
Silver Watch
$249.99
Stainless steel case
Timeless precision
LTGD-003
Gold Watch
$449.99
Gold-plated steel case
Opulence, redefined
3.1 Per-Product Fields
    • id — unique string identifier (slug)
    • name — display name
    • price — number in USD
    • tagline — one-sentence marketing copy
    • description — 2–3 sentence product description
    • features — string[] of up to 5 bullet features
    • imageSrc — path to static image asset in /public/images/
    • accentColor — hex colour string used for the card's accent strip and badge

4. Pages & Routes
Route
Page Name
Description
/
Home / Product Listing
Hero banner + grid of 3 product cards with Add to Cart CTA
/watch/[id]
Product Detail
Full product image, description, features list, quantity selector, Add to Cart
/cart
Shopping Cart
Line items, quantity controls, subtotal, Proceed to Checkout CTA
/checkout/confirm
Order Confirmation
Static thank-you screen with order summary (mock — no payment in v1)

5. Component Architecture
5.1 Layout Components
    • Navbar — app logo, navigation links, cart icon badge with item count
    • Footer — brand name, copyright, placeholder social links
    • Layout — root wrapper with MUI ThemeProvider and CartProvider
5.2 Product Components
    • ProductCard — image, name, price, tagline, accent colour strip, Add to Cart button
    • ProductGrid — responsive MUI Grid container for the 3 ProductCards
    • ProductDetail — full-page layout with image gallery stub, features, and quantity input
    • HeroBanner — full-width promotional banner on the home page
5.3 Cart Components
    • CartDrawer — slide-in MUI Drawer with cart items and totals
    • CartItem — individual line item with thumbnail, name, price, quantity stepper, remove
    • CartSummary — subtotal, taxes (static 10%), grand total, checkout button
5.4 Shared / Utility
    • WatchBadge — coloured chip component (Bronze / Silver / Gold variant)
    • PriceTag — formatted currency display
    • AddToCartButton — loading-state aware CTA button

6. State Management
Cart state is managed globally via a CartContext provider at the app root. No external library (Redux, Zustand) is required for v1 given the small scope.
6.1 CartContext Interface
interface CartItem { id: string; name: string; price: number; quantity: number; imageSrc: string; }
6.2 Actions
    • ADD_ITEM — adds a product or increments quantity if already present
    • REMOVE_ITEM — removes all quantities of a product from the cart
    • UPDATE_QUANTITY — sets a specific quantity for a cart item
    • CLEAR_CART — empties the cart (called after mock checkout)

7. Design System
7.1 Theme
A custom MUI theme is defined in /src/theme/index.ts and applied via ThemeProvider. Key tokens:
Token
Value
Usage
primary.main
#1A1A2E
Navbar, headings, primary buttons
secondary.main
#E94560
Accent CTAs, badge highlights
background.default
#F5F5F5
Page background
Bronze accent
#CD7F32
Bronze watch card accent
Silver accent
#A8A9AD
Silver watch card accent
Gold accent
#FFD700
Gold watch card accent
Typography
Inter (Google Fonts)
All body and UI text
7.2 Responsive Breakpoints
    • xs (0–600px) — single-column stacked layout
    • sm (600–900px) — 2-column product grid
    • md+ (900px+) — 3-column product grid, side-by-side product detail

8. Project File Structure
luxetime/
 ├── public/
 │   └── images/          # watch product images
 ├── src/
 │   ├── app/             # Next.js App Router pages
 │   │   ├── page.tsx     # / Home
 │   │   ├── watch/[id]/  # /watch/:id Product Detail
 │   │   ├── cart/        # /cart
 │   │   └── checkout/    # /checkout/confirm
 │   ├── components/      # Reusable UI components
 │   ├── context/         # CartContext + reducer
 │   ├── data/            # products.ts static data
 │   ├── theme/           # MUI theme config
 │   └── types/           # TypeScript interfaces
 ├── vercel.json          # Vercel config
 ├── next.config.js
 └── package.json

9. Vercel Deployment
9.1 Setup Steps
    1. Push repository to GitHub (github.com/org/luxetime).
    2. Log in to Vercel and click "Add New Project", importing the GitHub repo.
    3. Vercel auto-detects Next.js; accept default build settings (next build).
    4. Add any environment variables in the Vercel dashboard (none required for v1).
    5. Click Deploy. Vercel assigns a production URL (e.g. luxetime.vercel.app).
    6. Every push to main triggers an automatic re-deployment; PRs get preview URLs.
9.2 vercel.json
{ "framework": "nextjs", "buildCommand": "next build", "outputDirectory": ".next" }

10. Non-Functional Requirements
Category
Requirement
Target / Detail
Performance
Lighthouse Performance Score
>= 90 on mobile, >= 95 on desktop
Accessibility
Lighthouse Accessibility Score
>= 90; WCAG 2.1 AA compliance
SEO
Next.js Metadata API
Per-page title, description, og:image tags
Images
next/image optimisation
WebP conversion, responsive srcSet, lazy loading
Bundle Size
JS bundle (gzipped)
< 150 kB for initial page load
Security
HTTP Security Headers
X-Frame-Options, CSP, HSTS via next.config.js headers()

11. Acceptance Criteria
Home Page
    • Three ProductCard components are rendered in a responsive grid.
    • Each card displays the correct product name, price, tagline, and accent colour.
    • Clicking a card navigates to the correct /watch/[id] route.
    • Add to Cart button adds the item to the cart and updates the Navbar badge count.
Product Detail Page
    • Correct product data (name, description, features, price) is displayed.
    • Quantity selector defaults to 1 and does not allow values below 1.
    • Add to Cart respects the selected quantity.
Cart Page
    • All added items appear with correct names, prices, and quantities.
    • Quantity changes update the line total and grand total immediately.
    • Removing an item removes it from the list; empty cart shows an empty state message.
    • Proceed to Checkout navigates to /checkout/confirm.
Deployment
    • Application builds without errors via next build.
    • Production URL is publicly accessible on Vercel.
    • Preview deployment is created automatically for every open PR.

12. Milestones & Timeline
Milestone
Target Date
Deliverables
M1 — Project Setup
Week 1
Repo, Next.js scaffold, MUI theme, Vercel link
M2 — Data & Components
Week 2
products.ts, ProductCard, ProductGrid, Navbar, Footer
M3 — Pages
Week 3
Home, Product Detail, Cart, Checkout pages
M4 — Polish & QA
Week 4
Responsive fixes, Lighthouse audit, a11y fixes
M5 — Launch
Week 5
Production deploy, stakeholder sign-off
— End of Document —