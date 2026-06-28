# Performance & Core Web Vitals

Target: **Lighthouse 95+** (Performance, Accessibility, Best Practices, SEO)

## Implemented

| Area | Implementation |
|------|----------------|
| **Lazy loading** | `OptimizedImage` — `loading="lazy"` below fold; `LazySection` defers homepage section JS until near viewport |
| **Image optimization** | `npm run optimize:images` → WebP in `public/images/` (app mockup ~560px, header logo) |
| **Code splitting** | Route-level `React.lazy` + homepage section dynamic imports + Vite `manualChunks` (react, icons) |
| **LCP** | Preload `/images/app-mockup.webp`, `fetchPriority="high"` on hero mockup & logo |
| **CLS** | Explicit `width`/`height` on images; `minHeight` on `LazySection` placeholders |
| **INP** | Passive scroll listeners; reduced-motion respected; no layout-thrashing animations |
| **Accessibility** | Skip link, `#main-content`, focus-visible rings, aria labels, hero heading id, Escape closes mobile nav |
| **Fonts** | Non-blocking Google Fonts (`media="print"` onload) + preconnect |

## Commands

```bash
npm run optimize:images   # Regenerate public/images/*.webp
npm run build             # optimize + sitemap + vite build
npm run preview           # Test production bundle locally
```

## Lighthouse audit (local)

```bash
npm run build && npm run preview
# Chrome DevTools → Lighthouse → Mobile → Analyze
```

## Before production

1. Replace mockup WebP with real anonymised app screenshots (keep dimensions)
2. Compose 1200×630 OG image
3. Self-host fonts (optional) for zero third-party font latency
4. Add real Play Store URL (removes `#` href penalty in Best Practices)

## File reference

- `src/components/common/OptimizedImage.jsx`
- `src/components/common/LazySection.jsx`
- `src/components/common/SkipLink.jsx`
- `scripts/optimize-images.mjs`
- `vite.config.js` — `manualChunks`
