/**
 * Step 17 — Digital Tool page content hierarchy (11 sections).
 *
 * Every page must answer:
 *   1. What is this tool?
 *   2. Why should I use it?
 *   3. How does it make my digital life easier?
 *
 * Flow: Explain → Demonstrate → Promote
 *
 * @see ../../../CONTENT_STRATEGY.md — master website content strategy
 * @see ./guidelines.js — tone, CTAs, consistency
 * @see ./blueprint.js — empty author template
 */

/** Content phases on every Digital Tool page */
export const CONTENT_PHASES = {
  explain: {
    label: 'Explain',
    goal: 'Help the reader recognize their situation',
    sectionIds: ['hero', 'everyday-problem', 'why-better'],
  },
  demonstrate: {
    label: 'Demonstrate',
    goal: 'Show real value with proof',
    sectionIds: ['key-benefits', 'main-features', 'screenshots', 'how-it-works', 'use-cases'],
  },
  promote: {
    label: 'Promote',
    goal: 'Connect the ecosystem and invite action',
    sectionIds: ['works-with', 'faq', 'download-cta'],
  },
};

/** Three questions every Digital Tool page must answer */
export const READER_QUESTIONS = [
  {
    id: 'what',
    question: 'What is this tool?',
    sections: ['hero'],
  },
  {
    id: 'why',
    question: 'Why should I use it?',
    sections: ['everyday-problem', 'why-better'],
  },
  {
    id: 'how',
    question: 'How does it make my digital life easier?',
    sections: ['key-benefits', 'main-features', 'screenshots', 'how-it-works', 'use-cases'],
  },
];

/** Canonical 11-section order — Step 17 content hierarchy */
export const DIGITAL_TOOL_SECTIONS = [
  {
    id: 'hero',
    order: 1,
    phase: 'explain',
    title: 'Hero',
    readerQuestion: 'what',
    eyebrow: 'Digital Tool',
    h2: null,
    h1Field: 'module.name',
    contentKey: 'hero',
    plannedComponent: 'DigitalToolHero',
    purpose: 'Name the tool, one-line value, hero screenshot, Download CTA.',
  },
  {
    id: 'everyday-problem',
    order: 2,
    phase: 'explain',
    title: 'Everyday Problem',
    readerQuestion: 'why',
    eyebrow: 'The problem',
    h2: 'The everyday problem',
    contentKey: 'everydayProblem',
    plannedComponent: 'DigitalToolEverydayProblem',
    purpose: 'Relatable situation the reader recognizes — short, concrete, no jargon.',
  },
  {
    id: 'why-better',
    order: 3,
    phase: 'explain',
    title: 'Why BharatVow Solves It Better',
    readerQuestion: 'why',
    eyebrow: 'Why BharatVow',
    h2: 'Why {toolName} works better in BharatVow',
    contentKey: 'whyBharatVowBetter',
    plannedComponent: 'DigitalToolWhyBetter',
    purpose: 'What makes BharatVow calmer, clearer, or more connected than juggling separate apps.',
  },
  {
    id: 'key-benefits',
    order: 4,
    phase: 'demonstrate',
    title: 'Key Benefits',
    readerQuestion: 'how',
    eyebrow: 'Benefits',
    h2: 'How {toolName} makes daily life easier',
    contentKey: 'keyBenefits',
    plannedComponent: 'DigitalToolKeyBenefits',
    purpose: '3–5 outcome-led benefits — results, not feature labels.',
  },
  {
    id: 'main-features',
    order: 5,
    phase: 'demonstrate',
    title: 'Main Features',
    readerQuestion: 'how',
    eyebrow: 'Features',
    h2: 'What you can do with {toolName}',
    contentKey: 'mainFeatures',
    plannedComponent: 'DigitalToolFeatures',
    purpose: 'Each feature answers: why it exists, who needs it, what problem it solves, so what.',
  },
  {
    id: 'screenshots',
    order: 6,
    phase: 'demonstrate',
    title: 'Real App Screenshots',
    readerQuestion: 'how',
    eyebrow: 'Screenshots',
    h2: 'See {toolName} inside BharatVow',
    contentKey: 'screenshots',
    plannedComponent: 'DigitalToolScreenshots',
    purpose: 'Real app screens tied to benefits/features above — never decorative.',
  },
  {
    id: 'how-it-works',
    order: 7,
    phase: 'demonstrate',
    title: 'How It Works',
    readerQuestion: 'how',
    eyebrow: 'How it works',
    h2: 'How {toolName} works',
    contentKey: 'howItWorks',
    plannedComponent: 'DigitalToolHowItWorks',
    purpose: '3–5 verb-led steps from open app to done.',
  },
  {
    id: 'use-cases',
    order: 8,
    phase: 'demonstrate',
    title: 'Everyday Use Cases',
    readerQuestion: 'how',
    eyebrow: 'Use cases',
    h2: 'Everyday ways people use {toolName}',
    contentKey: 'useCases',
    plannedComponent: 'DigitalToolRealLifeExamples',
    purpose: '2–3 short named scenarios with clear outcomes.',
  },
  {
    id: 'works-with',
    order: 9,
    phase: 'promote',
    title: 'Works With',
    readerQuestion: null,
    eyebrow: 'Works with',
    h2: 'Works with other BharatVow tools',
    contentKey: 'worksWith',
    plannedComponent: 'DigitalToolConnected',
    purpose: '2–4 related Digital Tools with integration copy — link to each.',
  },
  {
    id: 'faq',
    order: 10,
    phase: 'promote',
    title: 'FAQs',
    readerQuestion: null,
    eyebrow: 'FAQ',
    h2: 'Questions about {toolName}',
    contentKey: 'faq',
    plannedComponent: 'DigitalToolFaq',
    purpose: '3–6 tool-specific Q&A; link to site FAQ page.',
  },
  {
    id: 'download-cta',
    order: 11,
    phase: 'promote',
    title: 'Download CTA',
    readerQuestion: null,
    eyebrow: null,
    h2: null,
    contentKey: 'downloadCta',
    plannedComponent: 'DigitalToolFinalCta',
    purpose: 'Download BharatVow; secondary link to related tool or Digital Tools hub.',
  },
];

/** Required internal links on every Digital Tool page */
export const REQUIRED_INTERNAL_LINKS = [
  { target: 'related-tools', pathPattern: '/digital-life/:slug', section: 'works-with' },
  { target: 'faq', path: '/faq', section: 'faq' },
  { target: 'pricing', path: '/pricing', section: 'faq-or-download-cta', when: 'premium-or-trial' },
  { target: 'download', path: '/download', section: 'hero-and-download-cta' },
  { target: 'digital-life-hub', path: '/digital-life', section: 'download-cta-secondary' },
];

/** Heading hierarchy — matches existing design system */
export const HEADING_HIERARCHY = {
  h1: {
    element: 'h1',
    count: 1,
    location: 'Hero only',
    content: 'Official tool name',
  },
  h2: {
    element: 'h2',
    location: 'One per section §2–§10',
    content: 'Section title from framework or content override',
  },
  h3: {
    element: 'h3',
    location: 'Benefit cards, feature cards, steps, use cases, connected tools',
    content: 'Benefit, feature name, step title, scenario title',
  },
  eyebrow: {
    element: 'p',
    location: 'Above each H2',
    content: 'Uppercase label — SectionHeading eyebrow',
  },
};

/** Reader journey mapped to 11 sections */
export const USER_JOURNEY = [
  'What is this? — Hero names the tool and promise',
  'Do I have this problem? — Everyday Problem',
  'Why BharatVow? — Why BharatVow Solves It Better',
  'What do I gain? — Key Benefits',
  'What can it do? — Main Features (with so-what)',
  'Show me proof — Real App Screenshots',
  'How do I use it? — How It Works',
  'Can I see myself using it? — Everyday Use Cases',
  'Does it connect? — Works With related tools',
  'Any doubts? — FAQs',
  'What next? — Download CTA',
];

/**
 * @param {string} template
 * @param {string} toolName
 */
export function resolveSectionHeading(template, toolName) {
  return template.replace(/\{toolName\}/g, toolName);
}
