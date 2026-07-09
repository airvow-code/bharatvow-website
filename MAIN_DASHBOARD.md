# Main Dashboard — Website Structure Reference

The BharatVow **mobile app Main Dashboard** is the official navigation reference for all Digital Tool pages on the website.

> **Phase 1+:** Dashboard data is defined in `src/config/modules.config.js` and re-exported through `mainDashboard.js`. Edit `MODULE_REGISTRY` when syncing with the app — see [`src/config/MODULES_ARCHITECTURE.md`](src/config/MODULES_ARCHITECTURE.md).

## Mobile source

```
src/screens/Dashboard/DashboardScreen.js → MY_SERVICES
```

## Website mirror

```
website/src/config/modules.config.js   ← single source of truth
website/src/config/mainDashboard.js    ← backwards-compatible exports
```

| Export | Purpose |
|--------|---------|
| `MAIN_DASHBOARD_TOOLS` | Full registry: app key, slug, label, sublabels, free flag |
| `MAIN_DASHBOARD_SLUGS` | Ordered slugs for dashboard tiles |
| `ALL_DIGITAL_TOOL_PAGE_SLUGS` | Dashboard tools + sub-pages (e.g. Home Assets) |
| `DIGITAL_TOOL_PAGE_AUTHORING_ORDER` | Order to build new tool pages |

## Rules

1. **Same order** — Digital Life hub, homepage lists, sitemap, and related tools use `MAIN_DASHBOARD_SLUGS`.
2. **Same names** — Use `label` from `MAIN_DASHBOARD_TOOLS` (matches app tile text).
3. **No category reordering** — Do not group or sort tools by life area on public lists.
4. **Template** — Every new tool page uses the 11-section blueprint in `src/data/digitalToolPages/`.
5. **Sync on app change** — When `MY_SERVICES` order or labels change, update `modules.config.js` first.

## Current order (14 dashboard tools)

| # | App key | Website slug | Label |
|---|---------|--------------|-------|
| 1 | KHATA | smart-khata | Smart Khata |
| 2 | GOODBUDGET | budget-pocket | Budget Pocket |
| 3 | EXPENSES | expenses-diary | Expenses Diary |
| 4 | EVENTS | event-book | Event Book |
| 5 | TRIPS | trip-ledger | Trip Ledger |
| 6 | VEHICLE | vehicle-vault | Vehicle Vault |
| 7 | HOME_VAULT | home-vault | Home Vault |
| 8 | BIRTHDAY | birthdays-anniversaries | Birthdays & Anniversaries |
| 9 | SMART_REMINDERS | smart-reminders | Smart Reminders |
| 10 | WISH_STUDIO | festival-studio | Festival Studio |
| 11 | LISTONIC | grocery-bag | Grocery Bag |
| 12 | LINK_VAULT | link-vault | Link Vault |
| 13 | STATUS_SAVER | status-viewer | Status Viewer |
| 14 | placeScreen | place-store | Place Store |

**Sub-page (not on dashboard):** Home Assets → `/digital-life/home-assets`

**Counts:** 14 dashboard · 12 premium · 2 free (Link Vault, Status Viewer)

**Legacy:** The previous birthdays tool slug redirects to `/digital-life/birthdays-anniversaries`.

## Surfaces using Main Dashboard order

- `/digital-life` hub (`DigitalToolsHub.jsx` → `getDashboardModules()`)
- Homepage Modules strip (`ModulesStrip.jsx`)
- Product Showcase (`getProductShowcaseTools()`)
- Sitemap tool URLs (`paths.js` → `DIGITAL_TOOL_SLUGS`)
- Default related tools (`digitalToolPage.js`)
