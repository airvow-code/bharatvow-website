# BharatVow Website — React Project Architecture

**Version:** 1.0  
**Status:** Awaiting approval — **no pages implemented yet**  
**Stack:** React 18 · Vite 5 · React Router 6  
**Design system:** [`docs/branding/Website_Design_System.md`](../docs/branding/Website_Design_System.md)  
**Content source:** [`docs/website/`](../docs/website/)

---

## Overview

The BharatVow marketing site is an **independent** React SPA inside `/website/`. It does not import from the Expo app (`/src`, `/android`, root `/assets` at runtime). Official logos and screenshots are copied into `website/assets/`.

This document defines folder responsibilities, import rules, and the route map. Implementation of pages and UI components begins **after approval**.

```
website/
├── ARCHITECTURE.md          ← this file
├── assets/                  ← static marketing files (not processed as JS modules)
├── public/                  ← verbatim static files (favicon, robots.txt)
├── index.html               ← HTML shell, font preconnect
├── package.json
├── vite.config.js           ← @ alias → src/
└── src/
    ├── main.jsx             ← React entry
    ├── App.jsx              ← RouterProvider root
    ├── assets/              ← Vite-importable assets (SVG, small icons)
    ├── blog/                ← blog post modules (P2)
    ├── components/          ← reusable UI (design system + sections)
    ├── contexts/            ← React context providers
    ├── hooks/               ← custom hooks
    ├── layouts/             ← page shells (nav + footer wrappers)
    ├── pages/               ← one file per route (lazy-loaded)
    ├── router/              ← route definitions + createBrowserRouter
    ├── seo/                 ← document head / meta helpers
    ├── styles/              ← global CSS + design tokens
    └── utils/               ← pure helpers, constants, formatters
```

---

## Folder purposes

### `website/` (project root)

| Item | Purpose |
|------|---------|
| `package.json` | Website-only dependencies — separate from Expo root |
| `vite.config.js` | Dev server, build, `@/` path alias |
| `index.html` | Single HTML entry; loads fonts and `/src/main.jsx` |
| `ARCHITECTURE.md` | Structural contract for all contributors |

---

### `website/assets/` (root — static marketing assets)

**Purpose:** Large, website-only files served or referenced by URL — **not** bundled through `import` unless copied into `src/assets/`.

| Subfolder | Contents |
|-----------|----------|
| `logos/` | Official BharatVow logos (copied from mobile branding pack) |
| `hero/` | Splash / marketing hero imagery |
| `icons/` | App icon, store badges |
| `screenshots/` | Anonymised app screenshots S1–S14 in device frames |
| `illustrations/` | Optional editorial illustrations |

**Rule:** Never redraw logos. Never import React Native `/assets` at build time.

---

### `website/public/`

**Purpose:** Files copied as-is to `dist/` root (`/favicon.png`, `robots.txt`, `sitemap.xml`, OG images).

Use for files that must keep a **fixed URL** without a JS import hash.

---

### `src/main.jsx`

**Purpose:** Application bootstrap — mounts React, imports global CSS, wraps `App` in `StrictMode`.

---

### `src/App.jsx`

**Purpose:** Top-level app shell — currently only `RouterProvider`. Future: wrap with context providers from `contexts/`.

---

### `src/assets/`

**Purpose:** Assets **imported from JavaScript/JSX** so Vite can hash, optimise, and tree-shake them.

| Use | Example |
|-----|---------|
| Inline SVG React components | Lucide re-exports, custom icons |
| Small images in components | Badge PNGs referenced in JSX |
| Fonts (if self-hosted later) | `.woff2` files |

**Do not put** full screenshot libraries here — use `website/assets/screenshots/` and reference via URL or dynamic import when needed.

---

### `src/pages/`

**Purpose:** **Route-level views** — one primary module per URL. Each page composes `layouts/`, `components/sections/`, and content from `utils/` or future `data/`.

**Conventions:**

- File name = PascalCase matching route (`Home.jsx`, `SolutionDetail.jsx`)
- Pages are **lazy-loaded** from `router/`
- Pages own **no global state** — fetch via hooks/context
- Page-specific CSS co-located as `PageName.css` only when section components cannot absorb styles

**Planned pages (not built yet):**

| Path | Page module |
|------|-------------|
| `/` | `Home.jsx` |
| `/why-bharatvow` | `WhyBharatVow.jsx` |
| `/about` | `About.jsx` |
| `/solutions` | `SolutionsHub.jsx` |
| `/solutions/:slug` | `SolutionDetail.jsx` |
| `/pricing` | `Pricing.jsx` |
| `/download` | `Download.jsx` |
| `/support/faq` | `FAQ.jsx` |
| `/support/contact` | `Contact.jsx` |
| `/support/delete-account` | `DeleteAccount.jsx` |
| `/legal/:doc` | `LegalPage.jsx` |
| `/features` | `Features.jsx` (demoted — optional 301 to solutions) |
| `/blog` | `BlogHub.jsx` (P2) |
| `/blog/:slug` | `BlogPost.jsx` (P2) |
| `*` | `NotFound.jsx` |

**Legacy:** Previous v1 pages live in `src/pages/_legacy/` for reference only — do not import in router.

---

### `src/components/`

**Purpose:** Reusable UI **below the page level**. Organised by responsibility:

```
components/
├── ui/           ← Design system primitives (Button, Badge, Card, Input…)
├── layout/       ← Header, Footer, Nav, MegaMenu, MobileDrawer, StickyDownloadBar
├── sections/     ← Page sections (Hero, LifeAreasBento, PricingTable, FAQAccordion…)
└── common/       ← Cross-cutting (SEOImage, DeviceMockup, TrustChip, LazyBoundary)
```

| Subfolder | Purpose |
|-----------|---------|
| `ui/` | Stateless tokens-aligned atoms — map 1:1 to [`Website_Design_System.md`](../docs/branding/Website_Design_System.md) |
| `layout/` | Site chrome shared across all pages via `MainLayout` |
| `sections/` | Large composable blocks used on one or more pages |
| `common/` | Helpers that render UI but are not design-system atoms |

**Rules:**

- `pages/` import from `components/` — never the reverse
- `ui/` must not import from `sections/` or `pages/`
- Co-locate `ComponentName.css` next to component unless styles belong in `styles/`

---

### `src/layouts/`

**Purpose:** **Page shells** that wrap `<Outlet />` from React Router.

| Layout | Use |
|--------|-----|
| `MainLayout.jsx` | Default — Header + main + Footer (+ optional sticky download bar) |
| `LegalLayout.jsx` | (Future) Narrow prose width, simplified nav |
| `MinimalLayout.jsx` | (Future) Download landing, error pages |

Layouts handle **structure only** — not page content. Shared layout CSS in `MainLayout.css` or `styles/layout.css`.

---

### `src/hooks/`

**Purpose:** Reusable **React hooks** — browser APIs, responsive breakpoints, scroll behaviour.

| Planned hook | Purpose |
|--------------|---------|
| `useMediaQuery.js` | Breakpoint matching (`md`, `lg`, …) |
| `useScrollPosition.js` | Nav background on scroll |
| `useReducedMotion.js` | `prefers-reduced-motion` for animations |
| `useStickyCTA.js` | One saffron CTA per viewport rule |

Hooks must be **pure UI behaviour** — no business logic tied to a single page.

---

### `src/contexts/`

**Purpose:** React Context providers for **cross-page client state**.

| Planned context | Purpose |
|-----------------|---------|
| `AppContext` | Site-wide config: Play Store URL, contact info, feature flags |
| `NavContext` | (Future) Mobile drawer open state, mega-menu active section |

Keep contexts thin — prefer URL state and static config in `utils/constants.js` where possible.

---

### `src/utils/`

**Purpose:** **Pure functions and static config** — no JSX, no React imports.

| Module | Purpose |
|--------|---------|
| `constants.js` | URLs, company info, breakpoints, external links |
| `routes.js` | Path helpers (`solutionPath(slug)`) — not React Router config |
| `format.js` | Phone, currency (₹), date formatting |
| `content/` | (Future) Normalised copy from `docs/website/` as JS exports |

**Rule:** If it renders markup, it belongs in `components/`, not `utils/`.

---

### `src/styles/`

**Purpose:** **Global styles and design tokens** — CSS variables from the design system.

| File | Purpose |
|------|---------|
| `variables.css` | All `--bv-*` tokens (colour, spacing, radius, shadow, type scale) |
| `global.css` | Reset, base typography, container, section rhythm, utilities |
| `typography.css` | (Future) Prose / legal content styles |
| `animations.css` | (Future) Keyframes + reduced-motion overrides |

Component-specific styles stay co-located unless shared across 3+ components.

---

### `src/router/`

**Purpose:** **All routing configuration** — isolated from pages for clarity and testing.

| File | Purpose |
|------|---------|
| `routes.js` | Route tree: paths, lazy imports, layout assignment |
| `index.jsx` | `createBrowserRouter(routes)` export |

**Conventions:**

- Every page `lazy(() => import('@/pages/…'))`
- Wrap lazy routes in shared `LazyBoundary` from `components/common/`
- Legal docs use one dynamic route `/legal/:doc` with slug validation

---

### `src/seo/`

**Purpose:** **Document head management** — title, description, canonical, Open Graph, JSON-LD.

| Module | Purpose |
|--------|---------|
| `SEO.jsx` | Component that sets `<title>` and meta tags (native DOM or future helmet) |
| `defaults.js` | Site-wide title template, default OG image path |
| `structuredData.js` | Organization, SoftwareApplication, FAQ schema builders |

Every page renders `<SEO … />` as the first child with page-specific props.

---

### `src/blog/`

**Purpose:** **Blog content modules** (Phase 2) — one file per post or MDX later.

```
blog/
├── index.js              ← post registry (slug, title, date, excerpt)
├── posts/
│   └── example-post.js   ← { meta, body } or MDX default export
└── README.md
```

Routes `/blog` and `/blog/:slug` lazy-load from here. SEO and sitemap read the registry in `index.js`.

**Content source:** [`docs/website/15_Blogs.md`](../docs/website/15_Blogs.md)

---

## Import alias

```js
import Button from '@/components/ui/Button';
import { SITE_NAME } from '@/utils/constants';
```

Vite resolves `@/` → `website/src/` (see `vite.config.js`).

---

## Data & content strategy

| Source | Destination |
|--------|-------------|
| `docs/website/*.md` | Manual or scripted export → `utils/content/` or page-local imports |
| `docs/branding/Website_Design_System.md` | `styles/variables.css` |
| Life area copy | `utils/content/lifeAreas.js` (future) |
| Legal full text | `utils/content/legal.js` (future) |

Pages should **not** hardcode long prose — pull from content modules.

---

## Build & deploy

```bash
cd website
npm run dev      # http://localhost:5173
npm run build    # output → website/dist/
npm run preview  # serve dist locally
```

Deploy `dist/` as a static SPA with fallback to `index.html`.

---

## Independence from mobile app

| Rule | Reason |
|------|--------|
| Separate `package.json` | Different toolchain (Vite vs Metro) |
| No imports from `/src` (Expo) | Avoid RN dependencies in browser bundle |
| Copy assets to `website/assets/` | Stable website-only paths |
| Do not modify root Expo files | `npx expo run:android` must keep working |

---

## Implementation order (after approval)

1. `styles/variables.css` + `global.css` from design system  
2. `components/ui/*` — Button, Card, Badge, Input  
3. `components/layout/*` — Header, Footer, mobile nav  
4. `layouts/MainLayout.jsx`  
5. `router/routes.js` + lazy pages one P0 route at a time  
6. `seo/SEO.jsx` on each page  
7. Screenshots into `website/assets/screenshots/`  
8. Blog registry (P2)  

---

## Approval checklist

- [ ] Folder structure accepted  
- [ ] Route map matches sitemap (`docs/website-analysis/06_Website_Sitemap.md`)  
- [ ] `components/` subfolder split (ui / layout / sections / common) accepted  
- [ ] Root `assets/` vs `src/assets/` split understood  
- [ ] Legacy v1 code in `_legacy/` may be deleted after redesign  

**Do not implement pages until this architecture is approved.**
