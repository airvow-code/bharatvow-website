# Pages

Route-backed page components organised by domain.

| Folder | Routes | Purpose |
|--------|--------|---------|
| `Home.jsx` | `/` | Homepage (intro only — do not move) |
| `marketing/` | `/about`, `/pricing`, `/download` | Company marketing |
| `digital-tools/` | `/digital-life`, `/digital-life/:slug` | Digital Life hub + tool detail |
| `support/` | `/faq`, `/contact`, `/support/delete-account` | Help & account |
| `legal/` | `/legal`, `/legal/:doc` | Policies & agreements |
| `blog/` | `/blog` | Blog hub (articles TBD) |
| `NotFound.jsx` | `*` | 404 |

Legacy redirects: `/life-areas`, `/digital-tools`, `/modules` → `/digital-life`

Path constants: `src/config/paths.js`  
Route tree: `src/router/routes.jsx`  
Page shell: `src/layouts/PageLayout.jsx` (Header/Footer via `MainLayout`)  
Digital Tool template: `src/components/templates/digital-tool/` + `src/layouts/DigitalToolPageShell.jsx`
