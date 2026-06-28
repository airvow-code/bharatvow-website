# router

Centralised React Router configuration.

| File | Purpose |
|------|---------|
| `routes.js` | Route tree — paths, lazy page imports, layout |
| `index.jsx` | Exports `router` from `createBrowserRouter()` |

Pages are lazy-loaded. Legal uses `/legal/:doc` with slug validation in the page module.
