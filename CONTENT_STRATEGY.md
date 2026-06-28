# BharatVow Website Content Strategy

**Step 17 — Master content architecture**

This document is the single source of truth for writing every BharatVow website page.  
Do not publish new pages until content follows this strategy.

**Brand anchor:** BharatVow — *Your Complete Digital Life Organizer*

---

## 1. The story every page must tell

Instead of multiple disconnected apps, BharatVow helps people organize their complete digital life in one secure place.

Every page — homepage, Digital Life hub, tool detail, Pricing, FAQ — should support that story without feature dumping.

### Three questions (required on every Digital Tool page)

| # | Question | Reader need |
|---|----------|-------------|
| 1 | **What is this tool?** | Name it clearly in the Hero — one sentence value, not a feature list |
| 2 | **Why should I use it?** | Everyday problem + why BharatVow handles it better |
| 3 | **How does it make my digital life easier?** | Benefits, workflow, use cases, and proof (screenshots) |

If a section does not help answer one of these three questions, cut it or rewrite it.

---

## 1a. Main Dashboard — official structure reference

The **BharatVow mobile app Main Dashboard** (`MY_SERVICES` in `DashboardScreen.js`) is the single source of truth for Digital Tool order, naming, and hub structure on the website.

**Website mirror:** `src/config/mainDashboard.js` · **Guide:** `MAIN_DASHBOARD.md`

| Rule | Detail |
|------|--------|
| Order | Never reorder tools by category, life area, or assumption |
| Naming | Use exact app labels from `MAIN_DASHBOARD_TOOLS[].label` |
| Hub | `/digital-life` lists tools in Main Dashboard order |
| Sub-pages | Home Assets follows Home Vault — not on dashboard grid |
| New pages | Author in `DIGITAL_TOOL_PAGE_AUTHORING_ORDER`; use 11-section template |
| App changes | When `MY_SERVICES` changes, sync `mainDashboard.js` first |

---

## 2. Content flow: Explain → Demonstrate → Promote

Every Digital Tool page follows this rhythm:

| Phase | Sections | Goal |
|-------|----------|------|
| **Explain** | Hero, Everyday Problem, Why BharatVow Solves It Better | Help the reader recognize their situation |
| **Demonstrate** | Key Benefits, Main Features, Screenshots, How It Works, Use Cases | Show real value with proof |
| **Promote** | Works With, FAQs, Download CTA | Remove doubt, connect the ecosystem, invite action |

**Rules**
- Never open with a feature list
- Never promote before the problem is clear
- Never list a feature without answering *"So what?"*

---

## 3. Digital Tool page hierarchy (11 sections)

Author in this exact order:

| # | Section | Answers | Content focus |
|---|---------|---------|---------------|
| 1 | **Hero** | What is this tool? | Tool name (H1), one-line value, hero screenshot, Download CTA |
| 2 | **Everyday Problem** | Why should I use it? | Relatable situation — short, concrete, no jargon |
| 3 | **Why BharatVow Solves It Better** | Why should I use it? | What makes BharatVow's approach calmer, clearer, or more connected |
| 4 | **Key Benefits** | How does it make life easier? | 3–5 outcome-led bullets/cards — results, not buttons |
| 5 | **Main Features** | How does it make life easier? | Each feature: name + *why it exists / who needs it / problem it solves* |
| 6 | **Real App Screenshots** | Demonstrate | 2–4 real screens that match the section above — never decorative |
| 7 | **How It Works** | How does it make life easier? | 3–5 verb-led steps — open app → done |
| 8 | **Everyday Use Cases** | How does it make life easier? | 2–3 short named scenarios with outcomes |
| 9 | **Works With** | Connect ecosystem | 2–4 related Digital Tools + one line on how they link |
| 10 | **FAQs** | Remove doubt | 3–6 tool-specific Q&A |
| 11 | **Download CTA** | Promote | Download BharatVow + explore related tool or Digital Tools hub |

**Machine-readable registry:** `src/data/digitalToolPages/framework.js`  
**Empty author template:** `createDigitalToolBlueprint(slug)` in `blueprint.js`

### Template component mapping (when pages are built)

| Section | Planned component |
|---------|-------------------|
| 1 Hero | `DigitalToolHero` |
| 2 Everyday Problem | `DigitalToolEverydayProblem` *(or split from `DigitalToolWhyExists`)* |
| 3 Why BharatVow Better | `DigitalToolWhyBetter` |
| 4 Key Benefits | `DigitalToolKeyBenefits` |
| 5 Main Features | `DigitalToolFeatures` |
| 6 Screenshots | `DigitalToolScreenshots` |
| 7 How It Works | `DigitalToolHowItWorks` |
| 8 Use Cases | `DigitalToolRealLifeExamples` |
| 9 Works With | `DigitalToolConnected` |
| 10 FAQs | `DigitalToolFaq` |
| 11 Download CTA | `DigitalToolFinalCta` |

---

## 4. Writing style

| Rule | Standard |
|------|----------|
| **Voice** | Personal, helpful, practical, trustworthy — not corporate |
| **Sentences** | Short. One idea per sentence where possible |
| **Paragraphs** | Max 2–3 sentences in body copy; prefer cards and lists |
| **Technical language** | Avoid unless the reader needs it (e.g. OTP, Excel export) |
| **Marketing hype** | Avoid "revolutionary", "best-in-class", "super app" |
| **Audience** | Individuals, couples, families, students, professionals — family is one use case |
| **Hindi phrases** | Sparingly, always with plain English context |

### Hero copy
- **H1:** Official tool name only
- **Lead:** One sentence — answers *What is this tool?*
- Max ~120 characters

### Section intros
- Optional 1–2 sentences under H2
- Skip if cards carry the message alone

---

## 5. Feature presentation — the "So what?" test

Never list a feature as a label alone. Every feature entry must include:

| Field | Purpose |
|-------|---------|
| **Title** | Plain name (e.g. "Running balance") |
| **Why it exists** | What job it does in the app |
| **Who needs it** | Shopkeeper, commuter, student, etc. |
| **Problem it solves** | What pain goes away |
| **So what** | One-line outcome for the reader |

**Bad:** `Excel export`  
**Good:** *Export party statements to Excel — so month-end records are ready without rewriting the khata.*

Key Benefits (§4) = outcomes. Main Features (§5) = capabilities with context. Do not duplicate the same copy in both sections.

---

## 6. Screenshots

| Rule | Detail |
|------|--------|
| **Source** | Real BharatVow app screens only (`generated/screenshots` manifest) |
| **Purpose** | Every screenshot supports the section it sits in |
| **Hero** | Primary tool dashboard or main entry screen |
| **Gallery** | 2–4 labelled screens tied to benefits/features just explained |
| **Alt text** | `{Tool name} — {screen label} in BharatVow app` |
| **Never** | Placeholder mockups, stock photos, or decorative UI on published pages |

Place screenshots **after** benefits and features (§6) so the reader understands what they are looking at.

---

## 7. Internal linking

Every Digital Tool page must link naturally to:

| Target | Where | Label examples |
|--------|-------|----------------|
| **Related Digital Tools** | §9 Works With | "Learn more" on each connected tool card |
| **FAQ** | §10 footer line | "More answers on our FAQ page" |
| **Pricing** | §10 or §11 when trial/subscription relevant | "See pricing" |
| **Download** | §1 Hero + §11 CTA | "Download BharatVow" |
| **Digital Tools hub** | §11 secondary CTA | "Explore Your Digital Life" |

**Avoid orphan pages** — every tool page receives links from hub, related tools, and Life Areas where relevant.

Global paths: `src/config/paths.js`

---

## 8. Consistency standards

These match the existing design system — do not invent new UI.

### Heading hierarchy

| Level | Use | Count per tool page |
|-------|-----|---------------------|
| **Eyebrow** | Uppercase label above H2 | One per section §2–§10 |
| **H1** | Tool name | 1 (Hero only) |
| **H2** | Section title | One per section §2–§10 |
| **H3** | Card title, step title, use case title | As needed |
| **H4** | Do not use | — |

### Cards
- Component: `SurfaceCard`
- Padding: `p-5 md:p-6`
- Hover: `lift` on benefit, feature, and connected-tool grids
- One clear idea per card

### CTAs

| Type | Label | Placement |
|------|-------|-----------|
| Primary | Download BharatVow | Hero, §11 |
| Secondary | Explore Your Digital Life | Hero, §11 |
| Tertiary | Learn more | Connected tool cards |

Premium tools: *Start with Link Vault free. Try {Tool} for 3 days.*  
Free tools: *{Tool} is free forever — no subscription required.*

### Icons
- Library: `lucide-react`, match Main Dashboard icons
- Sizes: 28px hero, 22px features, 20px cards
- Container: `rounded-xl bg-primary-soft text-primary`

### Spacing & typography
- Section rhythm: `Section` with `py-section-y md:py-section-y-lg`
- Section headings: `SectionHeading` — H2 at `text-2xl md:text-[2rem]`
- Body: `text-muted`, `leading-relaxed`
- Tone alternation: see `SECTION_TONES` in `guidelines.js`

---

## 9. Site-wide page roles (non-tool pages)

| Page | Story job | Must communicate |
|------|-----------|------------------|
| **Homepage** | Introduce the ecosystem | One platform for complete digital life — not feature dump |
| **Digital Tools hub** | Map the ecosystem | Connected tools, dashboard order, explore CTA |
| **Life Areas** | Organize by life context | Seven areas → Digital Tools |
| **Pricing** | Remove cost friction | Free start, trial, pay only for what you use |
| **FAQ** | Trust & clarity | Honest answers, link to tools and download |
| **About** | Credibility | Jaipur-built, mission, people-first |
| **Download** | Convert | Single clear download path |

---

## 10. SEO (per tool page)

See `src/seo/digitalToolSeo.js`.

- **Title:** `{ToolName} | BharatVow Digital Tools`
- **Description:** 140–160 chars; lead with value, not features
- **Keywords:** Tool name + digital life organizer + relevant life area
- **Structured data:** WebPage + FAQPage when FAQ present

Avoid "family app" as primary keyword.

---

## 11. Authoring checklist

Before registering a tool page in `digitalToolPages/index.js`:

- [ ] All 11 sections filled in `createDigitalToolBlueprint(slug)`
- [ ] Three reader questions answered clearly
- [ ] Explain → Demonstrate → Promote order respected
- [ ] Every feature passes the "So what?" test
- [ ] Screenshots are real and match adjacent copy
- [ ] Internal links: related tools, FAQ, pricing (if relevant), download
- [ ] `validateDigitalToolPageContent(content)` passes
- [ ] SEO title and description reviewed
- [ ] No placeholder copy, no unshipped features

**Do not wire to routes until content is approved.**

---

## 12. File map

```
website/CONTENT_STRATEGY.md          ← master content strategy
src/config/mainDashboard.js          ← Main Dashboard order (mirrors mobile MY_SERVICES)
src/config/paths.js                  ← routes + DIGITAL_TOOL_SLUGS
  framework.js                       ← 11-section registry + journey
  guidelines.js                      ← tone, CTAs, visual rules
  schema.js                          ← content types + validation
  blueprint.js                       ← empty 11-section author template
  index.js                           ← production registry (empty until authored)
src/seo/digitalToolSeo.js            ← per-tool SEO helpers
src/components/templates/digital-tool/ ← section components (implement later)
```

---

## 13. Tools in scope (Main Dashboard order)

Author pages in this order — see `src/config/mainDashboard.js`:

Smart Khata · Budget Pocket · Expenses Diary · Event Book · Trip Ledger · Vehicle Vault · Home Vault · Days Reminder · Grocery Bag · Link Vault · Status Viewer · Place Store · Home Assets (sub-page)
