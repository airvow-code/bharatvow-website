# BharatVow Digital Tool Page Framework

> **Superseded by Step 17.** The master guide is **[CONTENT_STRATEGY.md](../../../CONTENT_STRATEGY.md)** at the website root.

This file is kept for historical reference. Do not author new pages from the old 10-section structure below.

---

## What changed (Step 17)

| Old (10 sections) | New (11 sections) |
|-------------------|-------------------|
| Why This Tool Exists | **Everyday Problem** |
| Who Should Use It | **Why BharatVow Solves It Better** |
| Key Features | Split into **Key Benefits** + **Main Features** |
| Real-Life Examples | **Everyday Use Cases** (moved after How It Works) |
| Screenshots (§7) | **Real App Screenshots** (§6, after features) |
| Connected With Other Digital Tools | **Works With** |
| Final CTA | **Download CTA** |

## Current source of truth

- **Strategy:** `website/CONTENT_STRATEGY.md`
- **Registry:** `framework.js`, `guidelines.js`, `schema.js`, `blueprint.js`
- **Template components:** Not yet updated to 11 sections — `USE_DIGITAL_TOOL_TEMPLATE` remains `false`

## Authoring

```js
import { createDigitalToolBlueprint } from './blueprint';
import { validateDigitalToolPageContent } from './schema';

const draft = createDigitalToolBlueprint('smart-khata');
validateDigitalToolPageContent(draft);
```

See the authoring checklist in `CONTENT_STRATEGY.md` §11.
