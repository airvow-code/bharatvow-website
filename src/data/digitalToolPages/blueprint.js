/**
 * Step 17 empty content blueprint — fill all 11 sections before registering.
 *
 * @see ../../../CONTENT_STRATEGY.md
 * @param {string} slug - Canonical tool slug (e.g. 'smart-khata')
 * @returns {import('./schema.js').DigitalToolPageContent}
 */
export function createDigitalToolBlueprint(slug) {
  return {
    slug,

    // §1 Hero
    valueProposition: '',

    // §2 Everyday Problem
    everydayProblem: {
      headline: '',
      problem: '',
    },

    // §3 Why BharatVow Solves It Better
    whyBharatVowBetter: {
      headline: '',
      points: [{ title: '', description: '' }],
    },

    // §4 Key Benefits
    keyBenefits: [{ title: '', outcome: '' }],

    // §5 Main Features (each must pass "So what?" test)
    mainFeatures: [
      {
        icon: null,
        title: '',
        whyItExists: '',
        whoNeedsIt: '',
        problemItSolves: '',
        soWhat: '',
      },
    ],

    // §6 Real App Screenshots
    screenshots: [{ id: '', label: '', caption: '' }],

    // §7 How It Works
    howItWorks: [{ title: '', description: '' }],

    // §8 Everyday Use Cases
    useCases: [{ title: '', story: '' }],

    // §9 Works With (Related Digital Tools)
    worksWith: [{ slug: '', integration: '' }],

    // §10 FAQs
    faq: [{ q: '', a: '' }],

    // SEO (optional — defaults at render time)
    seo: {
      title: '',
      metaDescription: '',
      keywords: '',
    },

    // §11 Download CTA (optional — defaults at render time)
    downloadCta: {
      title: '',
      description: '',
      secondaryLabel: '',
      secondaryTo: '',
    },
  };
}

/** Shared blueprint instance for documentation — not tied to any slug route */
export const DIGITAL_TOOL_CONTENT_BLUEPRINT = createDigitalToolBlueprint('_blueprint');
