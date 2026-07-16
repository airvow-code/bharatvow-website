import { SITE } from '@/utils/constants';
import { LEGAL_PATHS } from '@/config/paths';

const LAST_UPDATED = '30 June 2026';
const EFFECTIVE_DATE = '30 June 2026';

/** Static legal pages only. The eight API-backed documents are loaded from the Legal Content Service. */
export const LEGAL_PAGES = {
  'distributor-agreement': {
    id: 'distributor-agreement',
    title: 'Distributor Agreement',
    description: 'Terms for the BharatVow distributor and referral program.',
    path: LEGAL_PATHS.distributorAgreement,
    effectiveDate: EFFECTIVE_DATE,
    lastUpdated: LAST_UPDATED,
    lead: 'BharatVow Distributor / Referral Program Agreement',
    keywords: 'BharatVow distributor, referral program terms',
    seo: {
      ogTitle: 'Distributor Agreement | BharatVow',
      ogDescription: 'Terms for BharatVow distributor enrollment, commissions, and conduct.',
    },
    sections: [
      {
        heading: 'Agreement',
        paragraphs: [
          `This Agreement is between ${SITE.company} ("Company") and a registered BharatVow user who enrolls as a Distributor ("You"). By enrolling, you agree to this Agreement together with our Terms & Conditions and Privacy Policy.`,
        ],
      },
      {
        heading: '1. Purpose',
        paragraphs: [
          'The Company operates a referral program that allows Distributors to earn commission when new users register and subscribe using a valid referral code, subject to program rules displayed in-app.',
        ],
      },
      {
        heading: '2. Eligibility',
        list: [
          'Valid BharatVow account in good standing',
          'Indian resident aged 18 or older, or a valid legal business entity',
          'Accurate KYC and payout details when required for commission redemption',
          'The Company may reject or terminate enrollment at its discretion',
        ],
      },
      {
        heading: '3. Referral Code and Conduct',
        paragraphs: ['You may share your unique referral code through personal networks. You must not:'],
        list: [
          'Use spam, misleading advertising, or false claims about BharatVow',
          'Impersonate the Company or create fake accounts',
          'Engage in self-referral fraud or post unapproved coupon codes on third-party sites',
        ],
      },
      {
        heading: '3A. Promotional and Metadata Compliance',
        paragraphs: [
          'When promoting BharatVow, you must describe the app accurately and consistently with our website, Google Play listing, Privacy Policy, Terms, and Disclaimer. Do not state or imply that BharatVow provides banking, wallet, payment transfer, lending, investment, or insurance services.',
          'Do not use Google Play badges, screenshots, or promotional claims in a misleading way. Follow Google Play Developer Program policies and applicable Indian advertising and consumer protection laws.',
        ],
      },
      {
        heading: '4. Commission and Payouts',
        paragraphs: [
          'Commission rates and qualifying events are defined in-app at enrollment and may be updated with notice where required.',
          'Commission is credited after validation. The Company may withhold or reverse commission on fraudulent, refunded, or disputed Google Play billing entries.',
          'Commission payout rules, minimum thresholds, and tax obligations (including TDS or GST where applicable) follow in-app display and Indian law.',
        ],
      },
      {
        heading: '5. Code of Conduct',
        list: [
          'Use official BharatVow branding only',
          'Do not guarantee income or misrepresent app features',
          'Follow applicable advertising and consumer protection laws',
        ],
      },
      {
        heading: '6. Termination',
        paragraphs: [
          'The Company may suspend or terminate distributor enrollment for breach, fraud, or reputational harm. Outstanding validated commission may be paid per in-app rules; fraudulent earnings may be reversed.',
        ],
      },
      {
        heading: '7. Privacy and Referral Data',
        paragraphs: [
          'Referral activity, commission records, and KYC or payout details you provide are processed as described in our Privacy Policy. You must not collect, sell, or misuse personal data of prospects beyond lawful sharing of your referral code and accurate product information.',
        ],
      },
      {
        heading: 'Contact',
        paragraphs: [`Program questions: ${SITE.email} · ${SITE.phone}`],
      },
    ],
  },

  'delete-account': {
    id: 'delete-account',
    title: 'Delete Account',
    description: 'How to permanently delete your BharatVow account and associated personal data.',
    path: LEGAL_PATHS.deleteAccount,
    lastUpdated: LAST_UPDATED,
    lead: 'Permanent and irreversible. Cancel active Google Play subscriptions before you delete. This page describes account and data deletion as required by Google Play policies.',
    keywords: 'BharatVow delete account, remove BharatVow data',
    seo: {
      ogTitle: 'Delete Account | BharatVow',
      ogDescription: 'How to permanently delete your BharatVow account and what happens to your data.',
    },
    sections: [],
  },
};

export const LEGAL_PAGE_LIST = Object.values(LEGAL_PAGES);

export const LEGAL_SLUGS = Object.keys(LEGAL_PAGES);

/** @param {string} path */
export function getLegalPageByPath(path) {
  return LEGAL_PAGE_LIST.find((page) => page.path === path) ?? null;
}

/** Legacy slug under /legal/:doc */
export function getLegalPage(slug) {
  const legacyMap = {
    privacy: 'privacy-policy',
    terms: 'terms',
    disclaimer: 'disclaimer',
    refund: 'refund-policy',
    grievance: 'grievance-redressal',
    'distributor-agreement': 'distributor-agreement',
  };
  const id = legacyMap[slug] ?? slug;
  return LEGAL_PAGES[id] ?? null;
}
