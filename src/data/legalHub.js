import {
  Shield,
  FileText,
  AlertCircle,
  Building2,
  Receipt,
  Scale,
  Trash2,
  Users,
} from 'lucide-react';
import { LEGAL_PATHS, PATHS } from '@/config/paths';
import { LEGAL_PAGES, LEGAL_PAGE_LIST } from '@/data/legal';

export const LEGAL_HUB = {
  path: LEGAL_PATHS.hub,
  title: 'Legal Center',
  headline: 'Legal Center',
  intro:
    'Transparent policies and compliance documents for BharatVow — an Indian family digital life management platform.',
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

export const LEGAL_HUB_CARDS = [
  {
    id: 'privacy-policy',
    path: LEGAL_PATHS.privacyPolicy,
    icon: Shield,
    title: 'Privacy Policy',
    description: LEGAL_PAGES['privacy-policy'].description,
  },
  {
    id: 'terms',
    path: LEGAL_PATHS.terms,
    icon: FileText,
    title: 'Terms & Conditions',
    description: LEGAL_PAGES.terms.description,
  },
  {
    id: 'disclaimer',
    path: LEGAL_PATHS.disclaimer,
    icon: AlertCircle,
    title: 'Disclaimer',
    description: LEGAL_PAGES.disclaimer.description,
  },
  {
    id: 'legal-information',
    path: LEGAL_PATHS.legalInformation,
    icon: Building2,
    title: 'Legal Information',
    description: LEGAL_PAGES['legal-information'].description,
  },
  {
    id: 'refund-policy',
    path: LEGAL_PATHS.refundPolicy,
    icon: Receipt,
    title: 'Cancellation & Refund Policy',
    description: LEGAL_PAGES['refund-policy'].description,
  },
  {
    id: 'grievance-redressal',
    path: LEGAL_PATHS.grievanceRedressal,
    icon: Scale,
    title: 'Grievance Redressal',
    description: LEGAL_PAGES['grievance-redressal'].description,
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
    description: LEGAL_PAGES['distributor-agreement'].description,
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
  { label: 'Refund', path: LEGAL_PATHS.refundPolicy },
  { label: 'Delete Account', path: LEGAL_PATHS.deleteAccount },
  { label: 'Contact', path: PATHS.contact },
  { label: 'Legal Center', path: LEGAL_PATHS.hub },
];

const RELATED_BY_ID = {
  'privacy-policy': ['terms', 'disclaimer', 'delete-account', 'grievance-redressal'],
  terms: ['privacy-policy', 'disclaimer', 'refund-policy', 'distributor-agreement'],
  disclaimer: ['terms', 'privacy-policy', 'legal-information'],
  'legal-information': ['privacy-policy', 'terms', 'grievance-redressal'],
  'refund-policy': ['terms', 'privacy-policy', 'grievance-redressal'],
  'grievance-redressal': ['privacy-policy', 'refund-policy', 'legal-information'],
  'delete-account': ['privacy-policy', 'terms', 'refund-policy'],
  'distributor-agreement': ['terms', 'privacy-policy', 'refund-policy'],
};

export function getLegalRelatedDocs(pageId) {
  const ids = RELATED_BY_ID[pageId] ?? [];
  return ids
    .map((id) => LEGAL_PAGE_LIST.find((page) => page.id === id))
    .filter(Boolean)
    .map(({ title, path }) => ({ title, path }));
}

/** @deprecated use getLegalPageByPath */
export function getLegalPage(slug) {
  return LEGAL_PAGES[slug] ?? null;
}

export { LEGAL_PAGES };
