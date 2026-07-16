import { LEGAL_PATHS } from '@/config/paths';

/**
 * Thin registry for API-backed legal documents (no body content).
 * Backend Legal Content Service is the only source of truth for bodies.
 */
export const API_LEGAL_DOCUMENTS = {
  'privacy-policy': {
    documentId: 'privacy-policy',
    title: 'Privacy Policy',
    path: LEGAL_PATHS.privacyPolicy,
    description:
      'How BharatVow collects, uses, stores, and protects your information.',
    lead: 'Atulit Baldhama Digital Solutions Pvt. Ltd. · BharatVow',
    keywords: 'BharatVow privacy policy, data protection India, personal data BharatVow',
    seo: {
      ogTitle: 'Privacy Policy | BharatVow',
      ogDescription:
        'How BharatVow handles your personal information — permissions, data use, storage, and your rights.',
    },
  },
  terms: {
    documentId: 'terms',
    title: 'Terms & Conditions',
    path: LEGAL_PATHS.terms,
    description: 'Terms governing use of BharatVow and Subscription Services.',
    lead: 'Atulit Baldhama Digital Solutions Pvt. Ltd. · BharatVow',
    keywords: 'BharatVow terms, terms and conditions',
    seo: {
      ogTitle: 'Terms & Conditions | BharatVow',
      ogDescription: 'Terms governing use of BharatVow — account, subscriptions, and acceptable use.',
    },
  },
  disclaimer: {
    documentId: 'disclaimer',
    title: 'Disclaimer',
    path: LEGAL_PATHS.disclaimer,
    description: 'Risk and product-nature statements for BharatVow.',
    lead: 'Atulit Baldhama Digital Solutions Pvt. Ltd. · BharatVow',
    keywords: 'BharatVow disclaimer',
    seo: {
      ogTitle: 'Disclaimer | BharatVow',
      ogDescription: 'Important disclaimers about BharatVow as a Personal Digital Life Platform.',
    },
  },
  'legal-information': {
    documentId: 'legal-information',
    title: 'Legal Information',
    path: LEGAL_PATHS.legalInformation,
    description: 'Company and product legal information for BharatVow.',
    lead: 'Atulit Baldhama Digital Solutions Pvt. Ltd. · BharatVow',
    keywords: 'BharatVow legal information, company details',
    seo: {
      ogTitle: 'Legal Information | BharatVow',
      ogDescription: 'Company details and legal information for BharatVow.',
    },
  },
  'refund-policy': {
    documentId: 'refund-policy',
    title: 'Cancellation & Refund Policy',
    path: LEGAL_PATHS.refundPolicy,
    description: 'Cancellation and refund terms for BharatVow Subscription Services.',
    lead: 'Atulit Baldhama Digital Solutions Pvt. Ltd. · BharatVow',
    keywords: 'BharatVow refund policy, cancellation',
    seo: {
      ogTitle: 'Cancellation & Refund Policy | BharatVow',
      ogDescription: 'Cancellation and refund terms for BharatVow subscriptions.',
    },
  },
  'subscription-policy': {
    documentId: 'subscription-policy',
    title: 'Subscription Policy',
    path: LEGAL_PATHS.subscriptionPolicy,
    description: 'Lifecycle rules for BharatVow Subscription Services under Manual Renewal.',
    lead: 'Atulit Baldhama Digital Solutions Pvt. Ltd. · BharatVow',
    keywords: 'BharatVow subscription policy, Manual Renewal',
    seo: {
      ogTitle: 'Subscription Policy | BharatVow',
      ogDescription: 'How BharatVow subscriptions work — trial, plans, expiry, and Manual Renewal.',
    },
  },
  'pricing-policy': {
    documentId: 'pricing-policy',
    title: 'Pricing Policy',
    path: LEGAL_PATHS.pricingPolicy,
    description: 'Pricing and display rules for BharatVow Subscription Services.',
    lead: 'Atulit Baldhama Digital Solutions Pvt. Ltd. · BharatVow',
    keywords: 'BharatVow pricing policy',
    seo: {
      ogTitle: 'Pricing Policy | BharatVow',
      ogDescription: 'How BharatVow presents subscription pricing and related charges.',
    },
  },
  'grievance-redressal': {
    documentId: 'grievance-redressal',
    title: 'Grievance Redressal',
    path: LEGAL_PATHS.grievanceRedressal,
    description: 'How to raise concerns about BharatVow under applicable Indian law.',
    lead: 'A clear process to report concerns about BharatVow.',
    keywords: 'BharatVow grievance officer, complaint redressal India',
    seo: {
      ogTitle: 'Grievance Redressal | BharatVow',
      ogDescription: 'How to file a grievance about BharatVow — contact details and support process.',
    },
  },
};

export const API_LEGAL_DOCUMENT_LIST = Object.values(API_LEGAL_DOCUMENTS);

export function getApiLegalByPath(path) {
  return API_LEGAL_DOCUMENT_LIST.find((doc) => doc.path === path) ?? null;
}

export function getApiLegalById(documentId) {
  return API_LEGAL_DOCUMENTS[documentId] ?? null;
}

export function isApiLegalPath(path) {
  return Boolean(getApiLegalByPath(path));
}
