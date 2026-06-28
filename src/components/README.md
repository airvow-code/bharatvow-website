# components

Reusable UI below the page level.

| Subfolder | Purpose |
|-----------|---------|
| `ui/` | Design system atoms — Button, Card, Badge, Input, Accordion |
| `layout/` | Header, Footer, Nav, MegaMenu, MobileDrawer, StickyDownloadBar |
| `sections/` | Page blocks — Hero, LifeAreasBento, PricingTable, FAQList |
| `common/` | DeviceMockup, LazyBoundary, TrustChip, SEOImage |

Import direction: `pages` → `sections` → `layout` / `ui`. Never import pages from components.
