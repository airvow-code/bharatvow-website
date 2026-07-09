# Config

Site-wide configuration that is not page content.

## Module system (Phase 1)

| File | Role |
|------|------|
| **`modules.config.js`** | **Single source of truth** — all dashboard tools & sub-pages |
| `moduleSelectors.js` | Query helpers (dashboard order, premium/free, slugs) |
| `moduleCounts.js` | Computed `MODULE_COUNTS` — never hardcode tool numbers |
| `moduleIcons.js` | Lucide icon key → component map |
| `lifeAreas.config.js` | Life area slugs, module groups, homepage slug lists (Phase 2) |
| `moduleRoutes.js` | Route paths derived from registry |
| `screenshotCatalog.js` | Screenshot IDs + file patterns for build script |
| `mainDashboard.js` | Backwards-compatible exports (`MAIN_DASHBOARD_TOOLS`, …) |
| `modules.js` | Public barrel re-exports |

Full architecture: [`MODULES_ARCHITECTURE.md`](./MODULES_ARCHITECTURE.md)

## Other config

- `paths.js` — canonical URL paths, slug lists, legacy redirect map
- `digitalTools.js` — Digital Tool page template sections
- `homeSections.js` — homepage lazy-section toggles

Import path helpers from `@/utils/routes` in components; import raw `PATHS` when defining routes or SEO.
