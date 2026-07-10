# BharatVow Marketing Website

Production **React + Vite** marketing site for [bharatvow.com](https://bharatvow.com).  
Lives in `/website` alongside the Expo mobile app — separate `package.json` and build tooling.

---

## Prerequisites

- **Node.js** 18+ (20 LTS recommended)
- **npm** 9+

---

## Install

```bash
cd website
npm install
```

If `npm install` fails with SSL errors (corporate proxy):

```bash
npm install --strict-ssl=false
```

---

## Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

---

## Production build

```bash
npm run build
```

Output: `website/dist/` (static SPA).

Prebuild automatically:

1. Optimises images → `public/images/` (requires `sharp`)
2. Regenerates `public/sitemap.xml` and `src/generated/screenshots.js`

Preview locally:

```bash
npm run preview
```

---

## Deploy (Vercel)

| Setting | Value |
|---------|--------|
| Root directory | `website` |
| Build command | `npm run build` |
| Output directory | `dist` |

`vercel.json` includes SPA rewrites, cache headers, and security headers.

**Before launch:**

1. Set `playStoreUrl` in `src/utils/constants.js`
2. Connect custom domain `bharatvow.com`

---

## Project structure

```text
website/
├── assets/              # Source logos & app screenshots (build inputs)
├── public/              # favicon, robots.txt, sitemap, optimised images
├── scripts/             # Image optimisation & sitemap generation
├── src/
│   ├── components/    # UI, layout, homepage sections, templates
│   ├── config/          # Routes, dashboard order, paths
│   ├── data/            # Page content (tools, legal, FAQ, pricing)
│   ├── generated/       # Auto-generated screenshot manifest
│   ├── layouts/         # MainLayout, legal & tool page shells
│   ├── pages/           # Route entry components
│   ├── router/          # React Router config, scroll & prefetch
│   ├── seo/             # Meta registry, structured data, sitemap source
│   └── utils/           # Constants, image paths, helpers
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

Architecture details: [`ARCHITECTURE.md`](./ARCHITECTURE.md) · Performance: [`PERFORMANCE.md`](./PERFORMANCE.md)

---

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/digital-life` | Digital Tools hub |
| `/digital-life/:slug` | Digital Tool detail (14 dashboard tools) |
| `/about` | About |
| `/pricing` | Pricing |
| `/download` | Download |
| `/faq` | FAQ |
| `/contact` | Contact |
| `/legal` | Legal Center |
| `/privacy-policy`, `/terms`, etc. | Legal documents |
| `/delete-account` | Delete account |
| `/blog` | Blog (coming soon) |

Legacy URLs (`/modules`, `/legal/privacy`, `/support/contact`, …) redirect to canonical paths.

---

## Tech stack

React 18 · Vite 5 · React Router 6 · Tailwind CSS 3 · Lucide React

---

## Independence from the mobile app

- No imports from repository root `/src`, `/android`, or Expo config
- Official logos copied to `website/assets/` — do not redraw
- Running the website does not affect the mobile app build

---

## Support

support@bharatvow.com · +91 9509945745

git add .
git commit -m "update with new modules"
git tag v1.0.0-baseline
git push origin main
