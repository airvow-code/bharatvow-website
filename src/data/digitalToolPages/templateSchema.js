/**
 * Digital Tool template page content — used by DigitalToolPageTemplate.jsx
 * @see ../components/templates/digital-tool/DigitalToolPageTemplate.jsx
 */

/**
 * @typedef {import('lucide-react').LucideIcon} LucideIcon
 */

/**
 * @typedef {Object} DigitalToolTemplateFeature
 * @property {LucideIcon} icon
 * @property {string} title
 * @property {string} [description]
 * @property {string} [problemSolved]
 * @property {string} [screenshotId]
 */

/**
 * @typedef {Object} DigitalToolTemplateContent
 * @property {string} slug
 * @property {string} valueProposition
 * @property {{ headline?: string, eyebrow?: string, everydayProblem: string, whyFamiliesNeedIt: string }} whyExists
 * @property {{ headline?: string, audiences?: { title: string, description: string }[], situations?: { title: string, description: string }[] }} [whoShouldUse]
 * @property {DigitalToolTemplateFeature[]} features
 * @property {{ title: string, description: string }[]} howItWorks
 * @property {{ title: string, story: string }[]} realLifeExamples
 * @property {{ id: string, label: string, caption?: string }[]} screenshots
 * @property {{ slug: string, integration: string }[]} connectedTools
 * @property {{ q: string, a: string }[]} faq
 * @property {import('./schema.js').DigitalToolSeo} [seo]
 * @property {{ title?: string, description?: string, secondaryLabel?: string, secondaryTo?: string }} [finalCta]
 * @property {{ title?: string, description: string }[]} [realBenefits]
 * @property {{ title: string, description?: string, slug: string }[]} [relatedArticles]
 * @property {'default' | 'ecosystem'} [featuresVariant]
 * @property {{ useCases?: string, worksWith?: string, realBenefits?: string, features?: string, featuresEyebrow?: string, featuresDescription?: string, howItWorks?: string, howItWorksEyebrow?: string, howItWorksDescription?: string, relatedArticles?: string }} [sectionTitles]
 */

/** @param {DigitalToolTemplateContent} content */
export function isDigitalToolTemplateContent(content) {
  return Boolean(content?.whyExists?.everydayProblem);
}

/** @param {DigitalToolTemplateContent} content */
export function validateDigitalToolTemplateContent(content) {
  const errors = [];

  if (!content?.slug?.trim()) errors.push('Missing slug');
  if (!content?.valueProposition?.trim()) errors.push('Missing valueProposition');
  if (!content?.whyExists?.everydayProblem?.trim()) errors.push('Missing whyExists.everydayProblem');
  if (!content?.whyExists?.whyFamiliesNeedIt?.trim()) errors.push('Missing whyExists.whyFamiliesNeedIt');

  for (const key of ['features', 'howItWorks', 'realLifeExamples', 'screenshots', 'connectedTools', 'faq']) {
    if (!Array.isArray(content?.[key]) || content[key].length === 0) {
      errors.push(`${key} must be a non-empty array`);
    }
  }

  return { valid: errors.length === 0, errors };
}
