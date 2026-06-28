# Digital Tool page template

**Content strategy:** [CONTENT_STRATEGY.md](../../../../CONTENT_STRATEGY.md) — Step 17 defines **11 sections**.

These components implement the **previous 10-section layout**. They will be updated when individual tool pages are authored and `USE_DIGITAL_TOOL_TEMPLATE` is enabled.

| Step 17 section | Current component (legacy) |
|-----------------|----------------------------|
| 1 Hero | `DigitalToolHero` |
| 2 Everyday Problem | `DigitalToolWhyExists` *(partial)* |
| 3 Why BharatVow Better | — *(not built)* |
| 4 Key Benefits | — *(not built)* |
| 5 Main Features | `DigitalToolFeatures` |
| 6 Screenshots | `DigitalToolScreenshots` |
| 7 How It Works | `DigitalToolHowItWorks` |
| 8 Use Cases | `DigitalToolRealLifeExamples` |
| 9 Works With | `DigitalToolConnected` |
| 10 FAQs | `DigitalToolFaq` |
| 11 Download CTA | `DigitalToolFinalCta` |

Shell: `src/layouts/DigitalToolPageShell.jsx`  
SEO: `src/seo/digitalToolSeo.js`  
Blueprint: `createDigitalToolBlueprint(slug)` — 11-section author template

Not wired to live routes — `USE_DIGITAL_TOOL_TEMPLATE` remains `false`.
