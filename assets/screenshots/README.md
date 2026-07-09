# App screenshots

Add anonymised BharatVow app screenshots here. The build script picks the first matching file per ID from `src/config/screenshotCatalog.js` (driven by `modules.config.js` screenshotIds).

## Real screenshots (preferred)

| Canonical ID | Accepted filenames |
|--------------|-------------------|
| `main-dashboard` | `home-dashboard.webp`, `main-dashboard.png` |
| `birthdays-anniversaries` | `birthday-anniversaries-dashboard.webp`, `birthdays-anniversaries-dashboard.webp` |
| `smart-reminders` | `smart-reminder-dashboard.webp`, `smart-reminders-dashboard.webp` |
| `festival-studio` | `festival-studio-dashboard.webp` |
| `home-vault` | `home-vault-dashboard.webp`, `home-vault.png` |
| `smart-khata` | `smart-khata.webp`, `smart-khata.png` |
| `grocery-bag` | `grocery-bag-dashboard.webp` |
| `place-store` | `place-store-dashboard.webp` |
| `status-viewer` | `status-viewer-dashboard.webp` |
| `link-vault` | `link-vault.webp`, `link-vault.png` |

Raster images (WebP/PNG/JPG) are treated as real captures. SVG files are placeholders until a raster is added.

Run `npm run optimize:images` after adding files.
