import { SITE } from '@/utils/constants';
import { PATHS, LEGAL_PATHS, LIFE_AREA_SLUGS, DIGITAL_TOOL_SLUGS, LEGAL_DOC_SLUGS } from '@/config/paths';

/**
 * SEO metadata registry — unique title, description, and keywords per route.
 * Dynamic segments use generators; static paths use keyed entries.
 */
export const ROUTE_META = {
  [PATHS.home]: {
    fullTitle: `${SITE.name} — ${SITE.tagline}`,
    description:
      'An Indian family digital life management platform. Organize household activities, expenses, reminders, groceries, documents, vehicles, trips, events, and personal records in one secure place. Free tools on Google Play.',
    keywords:
      'BharatVow, family digital life management, daily life management India, personal organization app, budget tracking, home organization, Indian productivity app',
    ogType: 'website',
  },
  [PATHS.about]: {
    title: 'About BharatVow',
    description:
      'Learn about BharatVow — a digital life organizer by Atulit Baldhama Digital Solutions. Organize budgets, home records, vehicles, events, and everyday information in one Android app.',
    keywords:
      'About BharatVow, digital life organizer, Atulit Baldhama Digital Solutions, personal organization app India, Jaipur mobile app',
  },
  [PATHS.digitalLife]: {
    title: 'Digital Life',
    description:
      'Explore every BharatVow tool in dashboard order — budgets, home, vehicles, events, grocery, travel, links, and daily records in one ecosystem.',
    keywords: 'BharatVow Digital Life, digital life organizer, Smart Khata, Home Vault, personal productivity India',
  },
  [PATHS.pricing]: {
    title: 'Pricing',
    description:
      'BharatVow subscription plans — ₹300/month or ₹2,000/year. Start with a 7-day free trial. Access all Digital Tools in one organized app.',
    keywords:
      'BharatVow pricing, BharatVow subscription, digital life organizer India, BharatVow free trial, BharatVow monthly yearly plan',
  },
  [PATHS.faq]: {
    title: 'FAQ',
    description:
      'BharatVow FAQ — answers about subscriptions, Digital Tools, privacy, backup, and account management. Based on implemented features only.',
    keywords:
      'BharatVow FAQ, BharatVow help, digital life organizer questions, BharatVow subscription, BharatVow backup, BharatVow privacy',
  },
  [PATHS.contact]: {
    title: 'Contact BharatVow',
    description:
      'Contact BharatVow support — email, phone, and office address. App help, account questions, and feedback. Jaipur, India.',
    keywords:
      'BharatVow contact, BharatVow support, customer support Jaipur, BharatVow help email',
  },
  [PATHS.blog]: {
    title: 'Blog',
    description:
      'Stories, guides, and updates from BharatVow — helping you organize everyday digital life.',
    keywords: 'BharatVow blog, digital life tips India, personal organization',
  },
  [PATHS.download]: {
    title: 'Download',
    description:
      'Download BharatVow on Google Play — start organizing your digital life. Link Vault and Status Viewer are free; explore all Digital Tools with a 7-day free trial.',
    keywords: 'Download BharatVow, BharatVow Google Play, digital life organizer Android',
  },
  [PATHS.legal]: {
    title: 'Legal Center',
    description:
      'BharatVow Legal Center — privacy policy, terms, refund policy, grievance redressal, and account deletion information.',
    keywords: 'BharatVow legal, privacy policy, terms and conditions, refund policy, grievance officer',
  },
  [PATHS.deleteAccount]: {
    title: 'Delete Account',
    description: 'How to permanently delete your BharatVow account and associated personal data.',
    keywords: 'BharatVow delete account, remove BharatVow data',
  },
  [LEGAL_PATHS.privacyPolicy]: {
    title: 'Privacy Policy',
    description: 'How BharatVow collects, uses, stores, and protects your information.',
    keywords: 'BharatVow privacy policy, data protection India',
  },
  [LEGAL_PATHS.terms]: {
    title: 'Terms & Conditions',
    description: 'Terms governing use of the BharatVow mobile application and website.',
    keywords: 'BharatVow terms, terms and conditions',
  },
  [LEGAL_PATHS.refundPolicy]: {
    title: 'Cancellation & Refund Policy',
    description: 'Cancellation and refund terms for BharatVow subscriptions and in-app purchases.',
    keywords: 'BharatVow refund, subscription cancellation',
  },
  [LEGAL_PATHS.disclaimer]: {
    title: 'Disclaimer',
    description: 'BharatVow is a digital life organizer for personal records — not professional advice.',
    keywords: 'BharatVow disclaimer',
  },
  [LEGAL_PATHS.grievanceRedressal]: {
    title: 'Grievance Redressal',
    description: 'Complaint mechanism for BharatVow users under applicable Indian law.',
    keywords: 'BharatVow grievance officer, complaint redressal',
  },
  [LEGAL_PATHS.distributorAgreement]: {
    title: 'Distributor Agreement',
    description: 'Terms for the BharatVow distributor and referral program.',
    keywords: 'BharatVow distributor, referral program terms',
  },
  [LEGAL_PATHS.legalInformation]: {
    title: 'Legal Information',
    description: 'Official company and contact information for BharatVow.',
    keywords: 'BharatVow legal information, Atulit Baldhama Digital Solutions',
  },
};

export function getRouteMeta(path) {
  return ROUTE_META[path] ?? null;
}

export function lifeAreaMeta(area) {
  return {
    title: area.metaTitle,
    description: area.metaDescription,
  };
}

export function digitalToolMeta(name, purpose) {
  return {
    title: `${name} | BharatVow Digital Tools`,
    description: purpose,
  };
}

export { LIFE_AREA_SLUGS, DIGITAL_TOOL_SLUGS, LEGAL_DOC_SLUGS };
