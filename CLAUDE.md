# CLAUDE.md — LuxeTime Watch Store

This file provides context and guidance for AI assistants (Claude) working in this codebase.

---

## Project Overview

**LuxeTime** is a small, focused e-commerce front-end that showcases three premium watches for sale:

| SKU | Product | Price |
|-----|---------|-------|
| LTBZ-001 | Bronze Watch | $149.99 |
| LTSL-002 | Silver Watch | $249.99 |
| LTGD-003 | Gold Watch | $449.99 |

Built with **Next.js 14 (App Router)**, **Material UI v5**, and **TypeScript**. Deployed on **Vercel**.

---

## Tech Stack

- **Framework:** Next.js 14 with App Router (`/src/app/`)
- **Language:** TypeScript 5 — strict mode enabled
- **UI Library:** Material UI (MUI) v5 with a custom theme
- **State:** React Context + `useReducer` for cart state (no Redux/Zustand)
- **Styling:** MUI `sx` prop and `theme` tokens — avoid plain CSS files unless necessary
- **Images:** Always use `next/image` for product images
- **Deployment:** Vercel — `next build` is the build command

---

## Project Structure

```
luxetime/
├── public/
│   └── images/               # Product images (bronze.jpg, silver.jpg, gold.jpg)
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── layout.tsx        # Root layout with ThemeProvider + CartProvider
│   │   ├── page.tsx          # / — Home page (hero + product grid)
│   │   ├── watch/
│   │   │   └── [id]/
│   │   │       └── page.tsx  # /watch/:id — Product detail page
│   │   ├── cart/
│   │   │   └── page.tsx      # /cart — Shopping cart
│   │   └── checkout/
│   │       └── confirm/
│   │           └── page.tsx  # /checkout/confirm — Order confirmation (mock)
│   ├── components/
│   │   ├── layout/           # Navbar, Footer, Layout
│   │   ├── product/          # ProductCard, ProductGrid, ProductDetail, HeroBanner
│   │   ├── cart/             # CartDrawer, CartItem, CartSummary
│   │   └── shared/           # WatchBadge, PriceTag, AddToCartButton
│   ├── context/
│   │   └── CartContext.tsx   # Cart state, CartProvider, useCart hook
│   ├── data/
│   │   └── products.ts       # Static product data — source of truth
│   ├── theme/
│   │   └── index.ts          # MUI theme configuration
│   └── types/
│       └── index.ts          # Shared TypeScript interfaces
├── vercel.json
├── next.config.js
└── package.json
```

---

## Key Conventions

### Components
- One component per file, named with PascalCase matching the filename
- All components are functional — no class components
- Use MUI components as the base; avoid raw HTML elements where an MUI equivalent exists
- Co-locate styles using the `sx` prop; extract to `styled()` only if reused

### TypeScript
- Strict mode is on — no `any` types
- All props must have explicit interfaces defined in the component file or imported from `src/types/`
- Use `Product` and `CartItem` from `src/types/index.ts` — do not redefine them

### Data
- Product data lives exclusively in `src/data/products.ts`
- Do not hardcode product names, prices, or descriptions in components — always import from `products.ts`
- The `accentColor` field on each product drives the card accent strip and badge colour

### Cart State
- Access the cart only via the `useCart()` hook from `src/context/CartContext.tsx`
- Valid dispatch actions: `ADD_ITEM`, `REMOVE_ITEM`, `UPDATE_QUANTITY`, `CLEAR_CART`
- Never mutate cart state directly

### Routing
- Use Next.js `<Link>` for all internal navigation — never `<a>` tags
- Dynamic product routes use the product `id` field as the URL slug (e.g. `/watch/bronze-watch`)

---

## Design System

### Theme Tokens (defined in `src/theme/index.ts`)

| Token | Value | Usage |
|-------|-------|-------|
| `primary.main` | `#1A1A2E` | Navbar, headings, primary buttons |
| `secondary.main` | `#E94560` | Accent CTAs, highlights |
| `background.default` | `#F5F5F5` | Page background |
| Bronze accent | `#CD7F32` | Bronze watch card and badge |
| Silver accent | `#A8A9AD` | Silver watch card and badge |
| Gold accent | `#FFD700` | Gold watch card and badge |
| Font family | Inter (Google Fonts) | All UI text |

### Breakpoints
- `xs` (0–600px): single-column stacked layout
- `sm` (600–900px): 2-column product grid
- `md+` (900px+): 3-column product grid, side-by-side product detail

Always design mobile-first. Test layouts at all three breakpoints.

---

## Product Data Shape

```ts
// src/types/index.ts
interface Product {
  id: string;           // URL slug (e.g. "bronze-watch")
  name: string;
  price: number;        // USD
  tagline: string;      // One-line marketing copy
  description: string;  // 2–3 sentence description
  features: string[];   // Up to 5 bullet features
  imageSrc: string;     // Path relative to /public
  accentColor: string;  // Hex colour (e.g. "#CD7F32")
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageSrc: string;
}
```

---

## Common Tasks

### Adding or editing product data
Edit `src/data/products.ts` only. Do not touch component files for content changes.

### Changing the colour theme
Edit `src/theme/index.ts`. MUI's `ThemeProvider` in `src/app/layout.tsx` propagates changes automatically.

### Adding a new page
Create a new folder under `src/app/` with a `page.tsx` file following the App Router convention. Wrap content in the shared `Layout` component to get Navbar and Footer.

### Modifying cart behaviour
Edit the reducer in `src/context/CartContext.tsx`. Add new action types to the `CartAction` union type in `src/types/index.ts`.

---

## Vercel Deployment

- **Production branch:** `main` — every push auto-deploys
- **Preview URLs:** created automatically for every pull request
- **Build command:** `next build`
- **Output directory:** `.next`
- **Environment variables:** none required for v1

To deploy manually: push to `main` or trigger a deployment from the Vercel dashboard.

---

## Out of Scope (v1)

Do not implement the following in v1 — they are deferred to future versions:

- Payment processing (no Stripe or other payment gateway)
- User authentication or accounts
- Backend API or database
- CMS integration
- Internationalisation (i18n)
- Order history or email confirmations

If asked to add any of the above, flag it as a v2 feature.

---

## Non-Functional Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance (mobile) | ≥ 90 |
| Lighthouse Performance (desktop) | ≥ 95 |
| Lighthouse Accessibility | ≥ 90 |
| Initial JS bundle (gzipped) | < 150 kB |
| Image format | WebP via `next/image` |

Run `npx lighthouse` or check the Vercel deployment insights to verify these after any significant change.

---

## Do's and Don'ts

**Do:**
- Use `next/image` for all product images
- Use `next/link` for all internal links
- Pull theme colours from the MUI theme — never hardcode hex values in components
- Keep components small and single-purpose
- Write TypeScript interfaces before implementing a new feature

**Don't:**
- Don't use `any` in TypeScript
- Don't hardcode product data outside of `src/data/products.ts`
- Don't use plain `<a>` tags for navigation
- Don't install new state management libraries without discussion (Context is sufficient for v1)
- Don't add payment or auth logic in v1
