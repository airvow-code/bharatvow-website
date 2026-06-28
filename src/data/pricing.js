import { MAIN_DASHBOARD_TOOLS } from '@/config/mainDashboard';
import { PATHS } from '@/config/paths';

/** All Digital Tools included in subscription — Main Dashboard order */
export const PRICING_INCLUDED_TOOLS = MAIN_DASHBOARD_TOOLS.map(({ label }) => label);

export const PRICING_PAGE = {
  path: PATHS.pricing,
  title: 'Pricing',
  headline: 'Simple & Transparent Pricing',
  intro: 'Choose the plan that fits your digital life.',
  description:
    'BharatVow subscription plans — ₹300/month or ₹2,000/year. Start with a 7-day free trial. Access all Digital Tools in one organized app.',
  keywords:
    'BharatVow pricing, BharatVow subscription, digital life organizer India, BharatVow free trial, BharatVow monthly yearly plan',
  seo: {
    ogTitle: 'Simple & Transparent Pricing | BharatVow',
    ogDescription:
      'Start with a 7-day free trial. Monthly ₹300 or yearly ₹2,000 — access BharatVow\'s complete Digital Life ecosystem. GST extra where applicable.',
  },

  trial: {
    heading: '7-Day Free Trial',
    body: 'Start using BharatVow with a 7-day free trial.',
    detail: 'Explore all premium Digital Tools before choosing a subscription.',
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
      'Save more with an annual subscription and enjoy uninterrupted access to BharatVow.',
    highlighted: true,
  },
];

export const PRICING_BENEFITS = [
  {
    title: 'Access All Digital Tools',
    description:
      'One subscription unlocks every Digital Tool on the BharatVow dashboard — budgets, home, vehicles, events, and everyday records.',
  },
  {
    title: 'Secure Backup',
    description:
      'Optional cloud backup is available for applicable modules — restore your records when you change phones.',
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
    a: 'When your free trial ends, premium Digital Tools require an active subscription to continue using. You can choose the Monthly or Yearly plan in the app. Your existing records remain on your device.',
  },
  {
    q: 'Can I switch plans later?',
    a: 'Yes. You can move between the Monthly and Yearly plan through BharatVow subscription settings when plan changes are available. Contact support if you need help switching.',
  },
  {
    q: 'Is GST included?',
    a: 'Prices shown are before GST. GST and other applicable taxes are added at checkout as shown in the app before you confirm your subscription.',
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
