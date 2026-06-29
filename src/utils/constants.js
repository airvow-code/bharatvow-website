import { PATHS } from '@/config/paths';
import { digitalLifePath, legalPath } from '@/utils/routes';

/** Footer link columns — all routes must exist */
export const FOOTER_COLUMNS = [
  {
    title: 'Product',
    links: [
      { label: 'Digital Life', to: digitalLifePath() },
      { label: 'Pricing', to: PATHS.pricing },
      { label: 'FAQ', to: PATHS.faq },
      { label: 'Download', to: PATHS.download },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: PATHS.about },
      { label: 'Blog', to: PATHS.blog },
      { label: 'Contact', to: PATHS.contact },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Legal Center', to: legalPath() },
      { label: 'Legal Information', to: legalPath('legal-information') },
      { label: 'Privacy Policy', to: legalPath('privacy') },
      { label: 'Terms & Conditions', to: legalPath('terms') },
      { label: 'Disclaimer', to: legalPath('disclaimer') },
      { label: 'Grievance Redressal', to: legalPath('grievance') },
      { label: 'Cancellation & Refund', to: legalPath('refund') },
      { label: 'Distributor Agreement', to: legalPath('distributor-agreement') },
      { label: 'Delete Account', to: PATHS.deleteAccount },
    ],
  },
];

export const SITE_CONFIG = {
  name: 'BharatVow',
  tagline: 'Indian Family Digital Life Management Platform',
  url: 'https://bharatvow.com',
  email: 'support@bharatvow.com',
  phone: '+91 9509945745',
  company: 'Atulit Baldhama Digital Solutions Pvt. Ltd.',
  address: '507, 5th Floor, Gordhansky Tower, Jhotwara, Jaipur, Rajasthan – 302012',
  cin: 'U51909RJ2019PTC066479',
  gstin: '08AASCA7856P1ZJ',
  playStoreUrl: '#', // Replace with live Play Store URL before launch
};

/** Footer legal & compliance block — Play Store safe positioning */
export const FOOTER_COMPLIANCE = {
  copyrightSuffix: 'All rights reserved.',
  countryOfOrigin: 'Made in India 🇮🇳',
  productOf: `${SITE_CONFIG.name} is a product of ${SITE_CONFIG.company}`,
  paymentNotice:
    'BharatVow is a family digital life management platform for personal record keeping. App subscriptions are billed through Google Play. BharatVow does not provide banking, wallet, payment, money transfer, lending, investment, or insurance services.',
  serviceDisclaimer:
    'BharatVow helps you organize household activities, expenses, reminders, documents, and daily records. No physical goods are sold or delivered.',
};

/** @deprecated use SITE_CONFIG — kept for existing imports */
export const SITE = SITE_CONFIG;

/** @deprecated use HEADER_NAV in headerNav.js */
export const NAV_LINKS = [];
