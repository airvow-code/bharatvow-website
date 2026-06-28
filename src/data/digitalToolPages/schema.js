/**
 * Digital Tool page content types — Step 17 (11 sections).
 * @see ../../../CONTENT_STRATEGY.md
 */

/**
 * @typedef {import('lucide-react').LucideIcon} LucideIcon
 */

/**
 * @typedef {Object} DigitalToolScreenshot
 * @property {string} id - Key in generated/screenshots manifest
 * @property {string} label - Short caption in gallery
 * @property {string} [caption] - Optional longer description tied to adjacent copy
 */

/**
 * @typedef {Object} DigitalToolKeyBenefit
 * @property {string} title - Outcome label (H3)
 * @property {string} outcome - One-sentence result for the reader
 */

/**
 * @typedef {Object} DigitalToolMainFeature
 * @property {LucideIcon} icon
 * @property {string} title
 * @property {string} whyItExists
 * @property {string} whoNeedsIt
 * @property {string} problemItSolves
 * @property {string} soWhat - One-line reader outcome
 */

/**
 * @typedef {Object} DigitalToolStep
 * @property {string} title - Verb-led step (H3)
 * @property {string} description
 */

/**
 * @typedef {Object} DigitalToolUseCase
 * @property {string} title - Named scenario (H3)
 * @property {string} story - 2–4 sentences with outcome
 */

/**
 * @typedef {Object} DigitalToolWorksWith
 * @property {string} slug - Related tool slug
 * @property {string} integration - How tools connect inside BharatVow
 */

/**
 * @typedef {Object} DigitalToolFaqItem
 * @property {string} q
 * @property {string} a
 */

/**
 * @typedef {Object} DigitalToolSeo
 * @property {string} [title]
 * @property {string} [metaDescription]
 * @property {string} [keywords]
 * @property {string} [ogTitle]
 * @property {string} [ogDescription]
 */

/**
 * @typedef {Object} DigitalToolPageContent
 * @property {string} slug
 * @property {string} valueProposition - Hero one-line (max ~120 chars)
 * @property {{ headline?: string, problem: string }} everydayProblem
 * @property {{ headline?: string, points: { title: string, description: string }[] }} whyBharatVowBetter
 * @property {DigitalToolKeyBenefit[]} keyBenefits
 * @property {DigitalToolMainFeature[]} mainFeatures
 * @property {DigitalToolScreenshot[]} screenshots
 * @property {DigitalToolStep[]} howItWorks
 * @property {DigitalToolUseCase[]} useCases
 * @property {DigitalToolWorksWith[]} worksWith
 * @property {DigitalToolFaqItem[]} faq
 * @property {DigitalToolSeo} [seo]
 * @property {{ title?: string, description?: string, secondaryLabel?: string, secondaryTo?: string }} [downloadCta]
 */

const REQUIRED_TOP_LEVEL = ['slug', 'valueProposition'];

const REQUIRED_NESTED = [
  ['everydayProblem', 'problem'],
  ['whyBharatVowBetter', 'points'],
];

const REQUIRED_ARRAYS = [
  'keyBenefits',
  'mainFeatures',
  'screenshots',
  'howItWorks',
  'useCases',
  'worksWith',
  'faq',
];

const FEATURE_FIELDS = ['title', 'whyItExists', 'whoNeedsIt', 'problemItSolves', 'soWhat'];

/**
 * Template-format validation (DigitalToolPageTemplate — live tool pages).
 * @param {import('./templateSchema.js').DigitalToolTemplateContent} content
 */
export { validateDigitalToolTemplateContent, isDigitalToolTemplateContent } from './templateSchema.js';

/**
 * Step 17 blueprint-format validation (future 11-section pages).
 * @param {DigitalToolPageContent} content
 */
export function validateDigitalToolPageContent(content) {
  const errors = [];

  if (!content || typeof content !== 'object') {
    return { valid: false, errors: ['Content must be an object'] };
  }

  for (const field of REQUIRED_TOP_LEVEL) {
    if (!content[field]?.trim?.()) {
      errors.push(`Missing required field: ${field}`);
    }
  }

  for (const [parent, field] of REQUIRED_NESTED) {
    const value = content[parent]?.[field];
    if (Array.isArray(value)) {
      if (value.length === 0) errors.push(`${parent}.${field} must be a non-empty array`);
    } else if (!value?.trim?.()) {
      errors.push(`Missing required field: ${parent}.${field}`);
    }
  }

  for (const key of REQUIRED_ARRAYS) {
    if (!Array.isArray(content[key]) || content[key].length === 0) {
      errors.push(`${key} must be a non-empty array`);
    }
  }

  if (Array.isArray(content.mainFeatures)) {
    content.mainFeatures.forEach((feature, index) => {
      for (const field of FEATURE_FIELDS) {
        if (!feature?.[field]?.trim?.()) {
          errors.push(`mainFeatures[${index}].${field} is required (So what? test)`);
        }
      }
    });
  }

  return { valid: errors.length === 0, errors };
}
