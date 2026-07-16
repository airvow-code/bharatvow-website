import {
  Shield,
  FileText,
  AlertCircle,
  Building2,
  Receipt,
  Scale,
  Trash2,
  Users,
  CreditCard,
  RefreshCw,
} from 'lucide-react';
import { LEGAL_PATHS, PATHS } from '@/config/paths';
import { LEGAL_PAGES, LEGAL_PAGE_LIST } from '@/data/legal';
import { API_LEGAL_DOCUMENTS, API_LEGAL_DOCUMENT_LIST } from '@/data/legalRegistry';

export const LEGAL_HUB = {
  path: LEGAL_PATHS.hub,
  title: 'Legal Center',
  headline: 'Legal Center',
  intro:
    'Transparent policies and compliance documents for BharatVow — a Personal Digital Life Platform.',
  description:
    'BharatVow Legal Center — privacy policy, terms, refund policy, grievance redressal, and account deletion information.',
  keywords:
    'BharatVow legal, privacy policy, terms and conditions, refund policy, grievance officer, delete account',
  seo: {
    ogTitle: 'Legal Center | BharatVow',
    ogDescription:
      'Official legal and compliance documents for BharatVow by Atulit Baldhama Digital Solutions Pvt. Ltd.',
  },
};

function hubDescription(id) {
  return API_LEGAL_DOCUMENTS[id]?.description || LEGAL_PAGES[id]?.description || '';
}

export const LEGAL_HUB_CARDS = [
  {
    id: 'privacy-policy',
    path: LEGAL_PATHS.privacyPolicy,
    icon: Shield,
    title: 'Privacy Policy',
    description: hubDescription('privacy-policy'),
  },
  {
    id: 'terms',
    path: LEGAL_PATHS.terms,
    icon: FileText,
    title: 'Terms & Conditions',
    description: hubDescription('terms'),
  },
  {
    id: 'disclaimer',
    path: LEGAL_PATHS.disclaimer,
    icon: AlertCircle,
    title: 'Disclaimer',
    description: hubDescription('disclaimer'),
  },
  {
    id: 'legal-information',
    path: LEGAL_PATHS.legalInformation,
    icon: Building2,
    title: 'Legal Information',
    description: hubDescription('legal-information'),
  },
  {
    id: 'refund-policy',
    path: LEGAL_PATHS.refundPolicy,
    icon: Receipt,
    title: 'Cancellation & Refund Policy',
    description: hubDescription('refund-policy'),
  },
  {
    id: 'subscription-policy',
    path: LEGAL_PATHS.subscriptionPolicy,
    icon: RefreshCw,
    title: 'Subscription Policy',
    description: hubDescription('subscription-policy'),
  },
  {
    id: 'pricing-policy',
    path: LEGAL_PATHS.pricingPolicy,
    icon: CreditCard,
    title: 'Pricing Policy',
    description: hubDescription('pricing-policy'),
  },
  {
    id: 'grievance-redressal',
    path: LEGAL_PATHS.grievanceRedressal,
    icon: Scale,
    title: 'Grievance Redressal',
    description: hubDescription('grievance-redressal'),
  },
  {
    id: 'delete-account',
    path: LEGAL_PATHS.deleteAccount,
    icon: Trash2,
    title: 'Delete Account',
    description: 'How to permanently delete your BharatVow account and associated personal data.',
  },
  {
    id: 'distributor-agreement',
    path: LEGAL_PATHS.distributorAgreement,
    icon: Users,
    title: 'Distributor Agreement',
    description: hubDescription('distributor-agreement'),
  },
];

/** @deprecated use LEGAL_HUB_CARDS */
export const LEGAL_HUB_LINKS = LEGAL_HUB_CARDS.map(({ id, title, description, path }) => ({
  slug: id,
  title,
  description,
  path,
}));

export const LEGAL_FOOTER_LINKS = [
  { label: 'Privacy Policy', path: LEGAL_PATHS.privacyPolicy },
  { label: 'Terms', path: LEGAL_PATHS.terms },
  { label: 'Disclaimer', path: LEGAL_PATHS.disclaimer },
  { label: 'Grievance', path: LEGAL_PATHS.grievanceRedressal },
  { label: 'Refund', path: LEGAL_PATHS.refundPolicy },
  { label: 'Subscription', path: LEGAL_PATHS.subscriptionPolicy },
  { label: 'Pricing Policy', path: LEGAL_PATHS.pricingPolicy },
  { label: 'Delete Account', path: LEGAL_PATHS.deleteAccount },
  { label: 'Contact', path: PATHS.contact },
  { label: 'Legal Center', path: LEGAL_PATHS.hub },
];

const RELATED_BY_ID = {
  'privacy-policy': ['terms', 'disclaimer', 'delete-account', 'grievance-redressal'],
  terms: ['privacy-policy', 'disclaimer', 'refund-policy', 'subscription-policy'],
  disclaimer: ['terms', 'privacy-policy', 'legal-information'],
  'legal-information': ['privacy-policy', 'terms', 'grievance-redressal'],
  'refund-policy': ['terms', 'subscription-policy', 'pricing-policy'],
  'subscription-policy': ['pricing-policy', 'refund-policy', 'terms'],
  'pricing-policy': ['subscription-policy', 'refund-policy', 'terms'],
  'grievance-redressal': ['privacy-policy', 'refund-policy', 'legal-information'],
  'delete-account': ['privacy-policy', 'terms', 'refund-policy'],
  'distributor-agreement': ['terms', 'privacy-policy', 'refund-policy'],
};

function resolveRelatedMeta(id) {
  const api = API_LEGAL_DOCUMENTS[id];
  if (api) return { title: api.title, path: api.path };
  const page = LEGAL_PAGE_LIST.find((p) => p.id === id);
  if (page) return { title: page.title, path: page.path };
  return null;
}

export function getLegalRelatedDocs(pageId) {
  const ids = RELATED_BY_ID[pageId] ?? [];
  return ids.map(resolveRelatedMeta).filter(Boolean);
}

/** @deprecated use getLegalPageByPath */
export function getLegalPage(slug) {
  return LEGAL_PAGES[slug] ?? null;
}

export { LEGAL_PAGES, API_LEGAL_DOCUMENT_LIST };
