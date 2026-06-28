/**
 * Digital Tool page architecture configuration.
 * @see CONTENT_STRATEGY.md — Step 17 master content strategy
 * @see src/config/mainDashboard.js — tool order (mirrors mobile MY_SERVICES)
 * @see src/data/digitalToolPages/framework.js
 */
export const USE_DIGITAL_TOOL_TEMPLATE = false;

/** Canonical 11-section sequence — matches framework.js (Step 17) */
export const DIGITAL_TOOL_PAGE_SECTIONS = [
  'hero',
  'everydayProblem',
  'whyBharatVowBetter',
  'keyBenefits',
  'mainFeatures',
  'screenshots',
  'howItWorks',
  'useCases',
  'worksWith',
  'faq',
  'downloadCta',
];

/** Default connected-tool count when content.worksWith is omitted */
export const DEFAULT_RELATED_TOOL_COUNT = 3;
