import { MAIN_DASHBOARD_TOOLS } from '@/config/mainDashboard';
import { MODULE_COUNTS } from '@/config/moduleCounts';
import { PATHS } from '@/config/paths';
import { SITE } from '@/utils/constants';
import { MARKETING_COUNT_COPY } from '@/data/homepageCopy';

const { dashboard, premium, free } = MODULE_COUNTS;

/** About page tool order — organization-first; budgeting tools last */
const ABOUT_ECOSYSTEM_ORDER = [
  'smart-reminders',
  'home-vault',
  'birthdays-anniversaries',
  'event-book',
  'festival-studio',
  'grocery-bag',
  'link-vault',
  'status-viewer',
  'place-store',
  'vehicle-vault',
  'trip-ledger',
  'smart-khata',
  'budget-pocket',
  'expenses-diary',
];

const ECOSYSTEM_TOOL_MAP = Object.fromEntries(
  MAIN_DASHBOARD_TOOLS.map(({ slug, label, sublabel1, sublabel2 }) => [
    slug,
    {
      slug,
      label,
      description: `${sublabel1} ${sublabel2}`.trim(),
    },
  ]),
);

/** Digital Life tools — About page order; factual one-line descriptions only */
const ECOSYSTEM_TOOLS = ABOUT_ECOSYSTEM_ORDER.map((slug) => ECOSYSTEM_TOOL_MAP[slug]).filter(Boolean);

export const ABOUT_PAGE = {
  path: PATHS.about,
  title: 'About BharatVow',
  headline: 'About BharatVow',
  lead: 'Organize Your Digital Life with Confidence.',
  openingParagraph:
    'BharatVow is the flagship Software as a Service (SaaS) product developed and operated by Atulit Baldhama Digital Solutions Private Limited. It helps individuals organize reminders, personal records, documents, grocery planning, home upkeep, vehicles, celebrations, and everyday productivity tasks in one Android application. Customers subscribe to access premium software features through Monthly or Yearly plans billed through Google Play.',
  description:
    'About BharatVow — flagship SaaS product by Atulit Baldhama Digital Solutions Private Limited. Personal productivity software with Monthly and Yearly premium subscriptions.',
  keywords:
    'About BharatVow, Atulit Baldhama Digital Solutions Private Limited, personal productivity software, SaaS subscription app India, Jaipur software company',
  seo: {
    ogTitle: 'About BharatVow — Personal Productivity Software by Atulit Baldhama Digital Solutions',
    ogDescription:
      'Who builds BharatVow, what the product is, and how premium software subscriptions work — clear information for users and reviewers.',
  },

  developer: {
    title: 'Developed & Operated By',
    company: 'Atulit Baldhama Digital Solutions Private Limited',
    subtitle: 'Registered Indian Software Company',
  },

  businessSnapshot: {
    title: 'At a Glance',
    rows: [
      { label: 'Company', value: 'Atulit Baldhama Digital Solutions Private Limited' },
      { label: 'Product', value: 'BharatVow' },
      { label: 'Business Type', value: 'Software as a Service (SaaS)' },
      { label: 'Core Service', value: 'Personal Productivity & Life Organization Software' },
      { label: 'Revenue Model', value: 'Subscription-Based Premium Software' },
      { label: 'Subscription', value: 'Monthly & Yearly Digital Subscription' },
    ],
  },

  whatIs: {
    heading: 'What is BharatVow?',
    paragraphs: [
      'BharatVow is the flagship SaaS product developed by Atulit Baldhama Digital Solutions Private Limited to help individuals organize daily life using premium software features. It is an Android application that keeps everyday information in one place instead of scattered across notebooks, chats, screenshots, and separate apps.',
      'Use it for personal organization — reminders, documents, grocery planning, personal records, home upkeep, vehicle documents, events, trips, saved links, important dates, saved places, and household budgeting when you need it. Each Digital Tool focuses on a specific part of everyday life, connected inside one application.',
      'BharatVow is built for personal productivity and record keeping. It is not a bank, wallet, payment service, money transfer service, lending platform, investment platform, payment aggregator, or navigation app.',
    ],
  },

  whyExists: {
    heading: 'Why BharatVow Exists',
    paragraphs: [
      'Most people manage daily life across many places — a notebook for one thing, a chat for another, photos in the gallery, and a different app for each task. Important details get lost, repeated, or hard to find when you need them.',
      'BharatVow exists to reduce that friction through subscription-based productivity software. It gives everyday information a consistent home on your phone — organized by purpose, searchable when you need it, and designed to be straightforward to use.',
      'The goal is practical: less time searching, less stress remembering, and more clarity about the information you already collect every day.',
    ],
  },

  vision: {
    heading: 'Our Vision',
    body: 'Become India\'s most trusted personal productivity and life organization software — so personal records, reminders, documents, and daily planning feel manageable rather than overwhelming.',
  },

  mission: {
    heading: 'Our Mission',
    paragraphs: [
      'Help every person organize their digital life in one secure place — with clear software tools, honest descriptions, and respect for user privacy.',
      'Ship premium software features that work as described. Keep the app simple enough to use without a manual. Listen to real workflows from individuals who use BharatVow every day.',
      'Improve continuously based on user feedback — without overpromising or adding complexity for its own sake.',
    ],
  },

  ecosystem: {
    heading: 'Digital Life Ecosystem',
    intro: `BharatVow includes ${dashboard} Digital Tools on the main dashboard — premium software features for personal organization, reminders, documents, grocery planning, personal records, home upkeep, vehicles, celebrations, and everyday productivity. Link Vault and Status Saver are free without a subscription. The other ${premium} premium software features are available with a 7-day free trial before choosing a Monthly (₹300/month) or Yearly (₹2,000/year) subscription billed through Google Play.`,
    tools: ECOSYSTEM_TOOLS,
    ctaLabel: 'Explore Digital Life',
    ctaPath: PATHS.digitalLife,
  },

  company: {
    heading: 'About the Company',
    name: SITE.company,
    businessType: 'Software as a Service (SaaS)',
    coreService: 'Personal Productivity & Life Organization Software',
    addressLines: [
      '507, 5th Floor,',
      'Gordhansky Tower,',
      'Jhotwara,',
      'Jaipur,',
      'Rajasthan – 302012',
      'India',
    ],
    description:
      'Atulit Baldhama Digital Solutions Private Limited is a Jaipur-based software company specializing in mobile application development and subscription-based digital products. The company develops and operates BharatVow as its flagship SaaS product.',
    registration: `CIN: ${SITE.cin} · GSTIN: ${SITE.gstin}`,
  },

  trust: {
    heading: 'Trust & Transparency',
    paragraphs: [
      'We take user privacy seriously. How BharatVow handles information is described clearly in our Privacy Policy — including what is stored on your device, when internet access is needed, and how optional cloud features work.',
      'Customers subscribe to premium software features through Monthly and Yearly subscription plans billed through Google Play.',
    ],
    points: [
      'Core module data is stored on your device for everyday use. You can work with your records locally without needing constant internet access.',
      'Optional cloud backup is available for applicable premium modules when you choose to use it — useful when changing phones or keeping a backup copy linked to your account. Link Vault and Status Saver are not included in master cloud backup scope.',
      'You remain in control of your data. You can export records where the app supports it, manage your account, and request account deletion through the in-app flow or our Delete Account page.',
      'BharatVow is for personal organization — not professional legal, tax, or medical advice. We describe only functionality that exists in the app today.',
      'Subscriptions are billed through Google Play. Cancel renewal anytime through Google Play subscription settings before the next billing period.',
    ],
    privacyPath: '/privacy-policy',
    privacyLabel: 'Read our Privacy Policy',
    legalLinks: [
      { label: 'Terms & Conditions', path: '/terms' },
      { label: 'Delete Account', path: PATHS.deleteAccount },
      { label: 'Grievance Redressal', path: '/grievance-redressal' },
      { label: 'Cancellation & Refund', path: '/refund-policy' },
    ],
  },

  values: {
    heading: 'Our Values',
    items: [
      {
        title: 'Simplicity',
        description: 'Tools should be easy to understand and use in everyday situations.',
      },
      {
        title: 'Privacy',
        description: 'Your information matters. We explain data handling clearly and avoid unnecessary collection.',
      },
      {
        title: 'Trust',
        description: 'We describe BharatVow honestly — what it does, what it does not do, and how features work.',
      },
      {
        title: 'Reliability',
        description: 'Everyday records should be dependable on your phone, with optional backup when you need it.',
      },
      {
        title: 'User First',
        description: 'Product decisions start with real everyday workflows — not feature lists for their own sake.',
      },
      {
        title: 'Continuous Improvement',
        description: 'We refine BharatVow based on feedback while keeping the app focused and practical.',
      },
    ],
  },

  contact: {
    heading: 'Product Support & Business Enquiries',
    intro: 'For app support, product feedback, or business enquiries, reach us through the channels below or visit our Contact page.',
    company: SITE.company,
    email: SITE.email,
    phone: SITE.phone,
    website: SITE.url,
    contactPath: PATHS.contact,
    contactLabel: 'Go to Contact page',
  },

  cta: {
    title: 'Start Organizing Your Digital Life.',
    description:
      `Download BharatVow on Google Play — start with Link Vault and Status Saver free, then explore ${MARKETING_COUNT_COPY.premiumToolsPhrase} with a 7-day free trial before subscribing monthly or yearly.`,
    primaryLabel: 'Download BharatVow',
    secondaryLabel: 'Explore Digital Life',
    secondaryPath: PATHS.digitalLife,
  },
};
