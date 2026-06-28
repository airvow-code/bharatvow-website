# contexts

React Context providers for cross-page client state.

`AppContext` — site config (Play Store URL, support email, phone, address).

Keep contexts thin; prefer static config in `utils/constants.js` when state does not need to change at runtime.
