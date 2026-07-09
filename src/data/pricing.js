import { MAIN_DASHBOARD_TOOLS } from '@/config/mainDashboard';
import { PATHS } from '@/config/paths';
import { MARKETING_COUNT_COPY } from '@/data/homepageCopy';

/** Premium Digital Tools included in subscription — Main Dashboard order */
export const PRICING_PREMIUM_TOOLS = MAIN_DASHBOARD_TOOLS.filter((tool) => !tool.alwaysFree).map(
  ({ label }) => label,
);

/** Always-free Digital Tools on the dashboard */
export const PRICING_FREE_TOOLS = MAIN_DASHBOARD_TOOLS.filter((tool) => tool.alwaysFree).map(
  ({ label }) => label,
);

/** @deprecated use PRICING_PREMIUM_TOOLS + PRICING_FREE_TOOLS */
export const PRICING_INCLUDED_TOOLS = MAIN_DASHBOARD_TOOLS.map(({ label }) => label);

export const PRICING_INCLUDED_NOTE = MARKETING_COUNT_COPY.subscriptionUnlockNote;

export const PRICING_BALANCE_NOTE =
  'In-app balance from the distributor referral program is separate from Google Play subscription billing. Refund and balance handling follow our Cancellation & Refund Policy.';

export const PRICING_PAGE = {
  path: PATHS.pricing,
  title: 'Pricing',
  headline: 'Simple & Transparent Pricing',
  intro: MARKETING_COUNT_COPY.pricingIntro,
  description: MARKETING_COUNT_COPY.pricingDescription,
  keywords:
    'BharatVow pricing, BharatVow subscription, Personal Digital Life Platform India, BharatVow free trial, BharatVow monthly yearly plan',
  seo: {
    ogTitle: 'Simple & Transparent Pricing | BharatVow',
    ogDescription:
      'Start with a 7-day free trial for premium Digital Tools. Monthly ₹300 or yearly ₹2,000 — Link Vault and Status Viewer stay free. GST extra where applicable.',
  },

  trial: {
    heading: '7-Day Free Trial',
    body: 'Start using BharatVow with a 7-day free trial for premium Digital Tools.',
    detail: MARKETING_COUNT_COPY.trialExploreNote,
  },

  gstNote: 'GST Extra. Taxes will be applied where applicable.',

  cta: {
    title: 'Start Your 7-Day Free Trial',
    primaryLabel: 'Download BharatVow',
  },
};

export const PRICING_PLANS = [
  {
    id: 'monthly',
    name: 'Monthly Plan',
    price: '₹300',
    period: '/ Month',
    description: 'Ideal for users who prefer monthly flexibility.',
    highlighted: false,
  },
  {
    id: 'yearly',
    name: 'Yearly Plan',
    badge: 'Best Value',
    price: '₹2,000',
    period: '/ Year',
    description:
      'Save more with an annual subscription and enjoy uninterrupted access to premium Digital Tools.',
    highlighted: true,
  },
];

export const PRICING_PREMIUM_BENEFIT_TITLE = MARKETING_COUNT_COPY.premiumBenefitTitle;

export const PRICING_BENEFITS = [
  {
    title: PRICING_PREMIUM_BENEFIT_TITLE,
    description:
      'One subscription unlocks every premium Digital Tool on the BharatVow dashboard — budgets, home, vehicles, events, celebrations, Smart Reminders, Festival Studio, and everyday records.',
  },
  {
    title: 'Optional Secure Backup',
    description:
      'Optional cloud backup is available for applicable premium modules when you enable it — restore your records when you change phones. Smart Reminders includes its own backup and restore screen. Link Vault and Status Viewer are not included in master cloud backup scope.',
  },
  {
    title: 'Regular Updates',
    description:
      'BharatVow receives ongoing improvements, fixes, and refinements based on real everyday use.',
  },
  {
    title: 'Organized Digital Life',
    description:
      'Keep everyday information connected inside one app instead of scattered across notebooks, chats, and separate tools.',
  },
];

export const PRICING_FAQ = [
  {
    q: 'What happens after the 7-day trial?',
    a: 'When your free trial ends, premium Digital Tools require an active subscription to continue using. You can choose the Monthly or Yearly plan in the app. Your existing records remain on your device. Link Vault and Status Viewer stay free without a subscription.',
  },
  {
    q: 'Can I switch plans later?',
    a: 'Yes. You can move between the Monthly and Yearly plan through BharatVow subscription settings when plan changes are available. Contact support if you need help switching.',
  },
  {
    q: 'Is GST included?',
    a: 'Prices shown are before GST. GST and other applicable taxes are added on the subscription confirmation screen in the app before you confirm your subscription.',
  },
  {
    q: 'How can I cancel my subscription?',
    a: 'You can cancel through your Google Play subscription settings. Cancellation stops future billing at the end of the current billing period. See our Cancellation & Refund Policy for details.',
  },
  {
    q: 'Where can I read the Refund Policy?',
    a: 'Our Cancellation & Refund Policy explains refund terms for BharatVow subscriptions and in-app purchases.',
    link: { label: 'Cancellation & Refund Policy', path: '/refund-policy' },
  },
];

export const PRICING_LEGAL_LINKS = [
  { label: 'Privacy Policy', path: '/privacy-policy' },
  { label: 'Terms & Conditions', path: '/terms' },
  { label: 'Cancellation & Refund Policy', path: '/refund-policy' },
  { label: 'Contact', path: PATHS.contact },
];
