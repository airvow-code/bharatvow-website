# Module Configuration Architecture

Phase 1 establishes a **single source of truth** for BharatVow Digital Tools on the website. UI and marketing copy are unchanged; only data plumbing was refactored.

## Source of truth

```
src/config/modules.config.js   ← EDIT THIS when syncing with the mobile app
```

Each entry in `MODULE_REGISTRY` describes one dashboard tool or website sub-page. Fields include:

| Field | Purpose |
|-------|---------|
| `key` | Mobile `MY_SERVICES` key (`null` for sub-pages) |
| `slug` | URL segment under `/digital-life/:slug` |
| `displayName` | Public module name |
| `shortName` | Compact label |
| `iconKey` | Lucide icon key → `moduleIcons.js` |
| `order` | Dashboard tile order (1-based) |
| `onDashboard` | On main dashboard grid |
| `alwaysFree` | Free without subscription |
| `enabled` | Active on website |
| `screenshotId` | Canonical screenshot manifest ID |
| `dashboardLabel` / `dashboardSubLabel1/2` | App tile text |
| `category` | Legacy group id (`MODULE_GROUP_DEFINITIONS`) |
| `lifeArea` | Life area slug |
| `route` | Full tool path |
| `seoKey` | Stable SEO registry key |
| `tagline`, `purpose`, `problem` | Hub / module metadata |

## Layer diagram

```
Mobile App (MY_SERVICES)
        │
        ▼ (manual sync — Phase 2)
modules.config.js  ─────────────────────────────┐
        │                                       │
        ├── moduleSelectors.js (queries)        │
        ├── moduleCounts.js (computed counts)   │
        ├── lifeAreas.config.js (groupings)     │
        ├── screenshotCatalog.js (build IDs)    │
        ├── moduleRoutes.js (route helpers)     │
        └── mainDashboard.js (compat exports)   │
                │                               │
                ▼                               ▼
        data/modules.js (UI shape)     scripts/optimize-images.mjs
                │                               │
                ▼                               ▼
        React components                 generated/screenshots.js
```

## Computed counts

Never hardcode `12`, `14`, `10` in new code. Use:

```js
import { MODULE_COUNTS } from '@/config/moduleCounts';

MODULE_COUNTS.dashboard  // dashboard tiles
MODULE_COUNTS.premium    // subscription tools
MODULE_COUNTS.free       // always-free tools
MODULE_COUNTS.total      // enabled registry entries
```

## How to add a new module (Phase 2+)

1. Add a row to `MODULE_REGISTRY` in `modules.config.js` with correct `order`, `key`, slugs, and `screenshotId`.
2. Add `iconKey` to `moduleIcons.js` if new.
3. Add screenshot file patterns to `screenshotCatalog.js` if non-standard filenames.
4. Drop `.webp` into `assets/screenshots/`.
5. Run `npm run optimize:images`.
6. Author `src/data/digitalToolPages/{slug}.js` and register in `index.js`.
7. Regenerate sitemap: `npm run generate:sitemap`.

Counts, dashboard order, sitemap tool URLs, pricing tool lists, and screenshot catalog IDs update automatically.

## Screenshots

```
assets/screenshots/{files}.webp
        ↓  npm run optimize:images
        ↓  buildScreenshotCatalog() reads screenshotIds from MODULE_REGISTRY
public/images/screenshots/{id}-{width}.webp
        ↓
src/generated/screenshots.js
        ↓
getScreenshot(module.screenshotId) in UI
```

System screenshots (`bharatvow-splash`, `main-dashboard`) are defined in `screenshotCatalog.js` and are not module registry entries.

## Routes

| File | Role |
|------|------|
| `moduleRoutes.js` | `getModuleRoute(slug)`, `ROUTE_MODULE_SLUGS`, `DASHBOARD_MODULE_ROUTES` |
| `paths.js` | Site paths + `DIGITAL_TOOL_SLUGS` from `mainDashboard.js` |
| `router/routes.jsx` | Unchanged in Phase 1 — explicit routes still work |

Phase 2 can wire `routes.jsx` to `getDynamicRouteSlugs()` without changing URLs.

## Backwards compatibility

These existing imports continue to work with identical shapes:

- `@/config/mainDashboard` → `MAIN_DASHBOARD_TOOLS`, `MAIN_DASHBOARD_SLUGS`, …
- `@/data/modules` → `getModule()`, `getDashboardModules()`, `ALL_MODULES`
- `@/config/paths` → `DIGITAL_TOOL_SLUGS`, `LIFE_AREA_SLUGS`

## What Phase 1 did NOT change

- Homepage sections and copy (`src/data/home.js`, `ModulesStrip`, etc.)
- Tool page content (`src/data/digitalToolPages/*`)
- Pricing / FAQ / SEO / legal marketing strings
- Screenshot image files or regenerated manifest
- Public `sitemap.xml`

## Phase 2 preview

- Update `MODULE_REGISTRY` to match live app (14 tools, renames, new modules)
- Wire homepage life areas to `lifeAreas.config.js`
- Replace hardcoded "twelve / ten" copy with `MODULE_COUNTS`
- Add legacy redirects for slug renames
- Regenerate screenshots and sitemap
