# Digital Tool pages — content registry

**Master strategy:** [CONTENT_STRATEGY.md](../../../CONTENT_STRATEGY.md)  
**Tool order:** [mainDashboard.js](../../config/mainDashboard.js) — mirrors mobile `MY_SERVICES`

## Quick start

```js
import { createDigitalToolBlueprint } from './blueprint';
import { validateDigitalToolPageContent } from './schema';

const content = createDigitalToolBlueprint('smart-khata');
// Author all 11 sections — see CONTENT_STRATEGY.md
validateDigitalToolPageContent(content);
```

Register in `index.js` when ready. Do not wire to routes until approved.

## 11-section hierarchy

1. Hero → 2. Everyday Problem → 3. Why BharatVow Solves It Better → 4. Key Benefits → 5. Main Features → 6. Real App Screenshots → 7. How It Works → 8. Everyday Use Cases → 9. Works With → 10. FAQs → 11. Download CTA

## Files

| File | Purpose |
|------|---------|
| `CONTENT_STRATEGY.md` (website root) | Master website content strategy |
| `framework.js` | 11-section order, reader questions, internal links |
| `guidelines.js` | Explain → Demonstrate → Promote, tone, CTAs, consistency |
| `schema.js` | Content types + validation (incl. feature "So what?" fields) |
| `blueprint.js` | Empty 11-section author template |
| `FRAMEWORK.md` | Legacy pointer — superseded by CONTENT_STRATEGY.md |
