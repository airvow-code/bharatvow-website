/**
 * Content guidelines — Step 17 BharatVow Website Content Strategy.
 * @see ../../../CONTENT_STRATEGY.md
 */

export const CONTENT_GUIDELINES = {
  /** Explain → Demonstrate → Promote */
  flow: {
    explain: 'Hero, Everyday Problem, Why BharatVow Solves It Better',
    demonstrate: 'Key Benefits, Main Features, Screenshots, How It Works, Use Cases',
    promote: 'Works With, FAQs, Download CTA',
    rule: 'Never promote before the problem is clear. Never list features before explaining value.',
  },

  readerQuestions: [
    'What is this tool?',
    'Why should I use it?',
    'How does it make my digital life easier?',
  ],

  tone: {
    voice: 'Personal, helpful, practical, trustworthy — never salesy or corporate',
    audience: 'Individuals, couples, families, students, professionals — everyday digital life in India',
    avoid: [
      'Feature dumping in the Hero or first scroll',
      'Long paragraphs (max 2–3 sentences in body copy)',
      'Technical jargon without plain explanation',
      'Transaction, banking, wallet, or money-transfer language unless truly applicable',
      'Buzzwords: revolutionary, best-in-class, super app, synergy',
      'Unshipped features (iOS Status Viewer, AI, push notifications)',
    ],
    prefer: [
      'Short sentences, one idea each',
      'Problem → why BharatVow → benefit → feature → proof',
      'Active voice',
      'Concrete everyday nouns (kirana, RC, grocery list, shaadi)',
    ],
  },

  featurePresentation: {
    rule: 'Every feature must pass the "So what?" test',
    required: ['title', 'whyItExists', 'whoNeedsIt', 'problemItSolves', 'soWhat'],
    badExample: 'Excel export',
    goodExample:
      'Export party statements to Excel — so month-end records are ready without rewriting the khata.',
    splitRule: 'Key Benefits = outcomes. Main Features = capabilities with context. Do not duplicate.',
  },

  headings: {
    h1: 'Tool name only — once, in Hero',
    h2: 'One per section §2–§10',
    h3: 'Card and step titles — 2–6 words, benefit-led',
    eyebrow: 'Uppercase label above H2',
    noH4: true,
  },

  paragraphs: {
    heroLead: '1 sentence, max ~120 characters',
    sectionIntro: '0–2 sentences under H2 — skip if cards are self-explanatory',
    problemBlock: '2–4 sentences max',
    benefitCard: '1 sentence outcome',
    featureCard: '1–2 sentences including so-what',
    useCaseStory: '2–4 sentences with named scenario and outcome',
    faqAnswer: '1–3 sentences — direct answer first',
  },

  lists: {
    keyBenefits: '3–5 outcome cards',
    mainFeatures: '4–6 features with full so-what context',
    steps: '3–5 verb-led steps',
    useCases: '2–3 scenarios',
    faq: '3–6 tool-specific pairs',
    worksWith: '2–4 connected tools with integration line',
    screenshots: '2–4 real screens placed after benefits/features',
  },

  screenshots: {
    source: 'Real BharatVow app screens from generated/screenshots manifest only',
    rule: 'Every screenshot must support the surrounding content — never decorative',
    placement: 'Section §6 — after Key Benefits and Main Features',
    hero: 'Primary tool screen in phone mockup',
    alt: '{Tool name} — {screen label} in BharatVow app',
    noPlaceholder: true,
  },

  internalLinking: {
    required: [
      { to: 'related Digital Tools', via: 'worksWith section cards' },
      { to: '/faq', via: 'FAQ section footer' },
      { to: '/pricing', via: 'FAQ or Download CTA when trial/subscription relevant' },
      { to: '/download', via: 'Hero and Download CTA primary button' },
      { to: '/digital-life', via: 'Download CTA secondary button' },
    ],
    rule: 'No orphan tool pages — hub and related tools must link back',
  },

  cta: {
    primary: { label: 'Download BharatVow', placement: 'Hero, Download CTA' },
    secondary: { label: 'Explore Your Digital Life', placement: 'Hero, Download CTA' },
    tertiary: { label: 'Learn more', placement: 'Works With cards' },
    freeTool: '{toolName} is free forever — no subscription required.',
    premiumTool: 'Explore all Digital Tools with a 7-day free trial. See Pricing for Monthly and Yearly plans.',
  },

  icons: {
    library: 'lucide-react — match Main Dashboard icons',
    size: { hero: 28, feature: 22, card: 20 },
    container: 'rounded-xl bg-primary-soft text-primary',
    strokeWidth: 1.75,
  },

  cards: {
    component: 'SurfaceCard',
    hover: 'lift on benefit, feature, and connected-tool grids',
    padding: 'p-5 md:p-6',
    rule: 'One clear idea per card',
  },

  typography: {
    section: 'Section with py-section-y md:py-section-y-lg',
    h2: 'SectionHeading — font-display text-2xl md:text-[2rem]',
    body: 'text-muted leading-relaxed',
  },

  writingConsistency: {
    productName: 'BharatVow',
    tagline: 'Your Complete Digital Life Organizer',
    digitalTools: 'Digital Tools — capitalised',
    toolName: 'Official names only (Smart Khata, not Khata Module)',
  },
};

/** Section background tone alternation — existing design system */
export const SECTION_TONES = {
  hero: 'gradient header',
  'everyday-problem': 'default (canvas)',
  'why-better': 'surface',
  'key-benefits': 'surface',
  'main-features': 'default',
  screenshots: 'inset',
  'how-it-works': 'default',
  'use-cases': 'default',
  'works-with': 'surface',
  faq: 'default',
  'download-cta': 'PageCtaBand gradient card',
};
