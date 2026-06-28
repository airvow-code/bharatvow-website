# Main Dashboard — Website Structure Reference

The BharatVow **mobile app Main Dashboard** is the official navigation reference for all Digital Tool pages on the website.

## Mobile source

```
src/screens/Dashboard/DashboardScreen.js → MY_SERVICES
```

## Website mirror

```
website/src/config/mainDashboard.js
```

| Export | Purpose |
|--------|---------|
| `MAIN_DASHBOARD_TOOLS` | Full registry: app key, slug, label, sublabels, free flag |
| `MAIN_DASHBOARD_SLUGS` | Ordered slugs for the 12 dashboard tiles |
| `ALL_DIGITAL_TOOL_PAGE_SLUGS` | Dashboard tools + sub-pages (e.g. Home Assets) |
| `DIGITAL_TOOL_PAGE_AUTHORING_ORDER` | Order to build new tool pages |

## Rules

1. **Same order** — Digital Life hub, homepage lists, sitemap, and related tools use `MAIN_DASHBOARD_SLUGS`.
2. **Same names** — Use `label` from `MAIN_DASHBOARD_TOOLS` (matches app tile text).
3. **No category reordering** — Do not group or sort tools by life area on public lists.
4. **Template** — Every new tool page uses the 11-section blueprint in `src/data/digitalToolPages/`.
5. **Sync on app change** — When `MY_SERVICES` order or labels change, update `mainDashboard.js` first.

## Current order (12 tools)

| # | App key | Website slug | Label |
|---|---------|--------------|-------|
| 1 | KHATA | smart-khata | Smart Khata |
| 2 | GOODBUDGET | budget-pocket | Budget Pocket |
| 3 | EXPENSES | expenses-diary | Expenses Diary |
| 4 | EVENTS | event-book | Event Book |
| 5 | TRIPS | trip-ledger | Trip Ledger |
| 6 | VEHICLE | vehicle-vault | Vehicle Vault |
| 7 | HOME_VAULT | home-vault | Home Vault |
| 8 | BIRTHDAY | days-reminder | Days Reminder |
| 9 | LISTONIC | grocery-bag | Grocery Bag |
| 10 | LINK_VAULT | link-vault | Link Vault |
| 11 | STATUS_SAVER | status-viewer | Status Viewer |
| 12 | placeScreen | place-store | Place Store |

**Sub-page (not on dashboard):** Home Assets → `/digital-life/home-assets`

## Surfaces using Main Dashboard order

- `/digital-life` hub (`DigitalToolsHub.jsx` → `getDashboardModules()`)
- Homepage Modules strip (`ModulesStrip.jsx`)
- Product Showcase (`getProductShowcaseTools()`)
- Sitemap tool URLs (`paths.js` → `DIGITAL_TOOL_SLUGS`)
- Default related tools (`digitalToolPage.js`)
