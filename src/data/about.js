import { MAIN_DASHBOARD_TOOLS } from '@/config/mainDashboard';
import { PATHS } from '@/config/paths';
import { SITE } from '@/utils/constants';
import { MARKETING_COUNT_COPY } from '@/data/homepageCopy';

/** Digital Life tools — dashboard order, factual one-line descriptions only */
const ECOSYSTEM_TOOLS = MAIN_DASHBOARD_TOOLS.map(({ slug, label, sublabel1, sublabel2 }) => ({
  slug,
  label,
  description: `${sublabel1} ${sublabel2}`.trim(),
}));

export const ABOUT_PAGE = {
  path: PATHS.about,
  title: 'About BharatVow',
  headline: 'About BharatVow',
  lead: 'Organize Your Digital Life with Confidence.',
  heroSupportLine:
    'BharatVow is developed by Atulit Baldhama Digital Solutions Pvt. Ltd., a Jaipur-based technology company dedicated to building innovative mobile applications, software solutions and digital platforms that simplify everyday life.',
  description:
    'Learn about BharatVow — a Personal Digital Life Platform by Atulit Baldhama Digital Solutions. Organize budgets, home records, vehicles, events, and everyday information in one Android app.',
  keywords:
    'About BharatVow, Personal Digital Life Platform, Atulit Baldhama Digital Solutions, personal organization app India, Jaipur mobile app',
  seo: {
    ogTitle: 'About BharatVow — Personal Digital Life Platform',
    ogDescription:
      'What BharatVow is, who builds it, and how it helps you organize everyday digital life — honest, transparent information for users and reviewers.',
  },

  whatIs: {
    heading: 'What is BharatVow?',
    paragraphs: [
      'BharatVow is a Personal Digital Life Platform — an Android application that helps you keep everyday information in one place instead of scattered across notebooks, chats, screenshots, and separate apps.',
      'Use it to manage personal records such as lend-and-borrow notes, household budgets, daily expenses, home bills and assets, vehicle documents, events, trips, grocery lists, saved links, important dates, saved places, and other information you refer to regularly.',
      'BharatVow is built for personal organization and record keeping. It is not a bank, wallet, payment service, money transfer service, lending platform, investment platform, or navigation app. Each Digital Tool focuses on a specific part of everyday life — connected inside one application.',
    ],
  },

  whyExists: {
    heading: 'Why BharatVow Exists',
    paragraphs: [
      'Most people manage daily life across many places — a notebook for one thing, a chat for another, photos in the gallery, and a different app for each task. Important details get lost, repeated, or hard to find when you need them.',
      'BharatVow exists to reduce that friction. It gives everyday information a consistent home on your phone — organized by purpose, searchable when you need it, and designed to be straightforward to use.',
      'The goal is practical: less time searching, less stress remembering, and more clarity about the information you already collect every day.',
    ],
  },

  vision: {
    heading: 'Our Vision',
    body: 'Become India\'s most trusted Personal Digital Life Platform — so personal records, household information, and daily planning feel manageable rather than overwhelming.',
  },

  mission: {
    heading: 'Our Mission',
    paragraphs: [
      'Help every person organize their digital life in one secure place — with clear tools, honest descriptions, and respect for user privacy.',
      'Ship features that work as described. Keep the app simple enough to use without a manual. Listen to real workflows from individuals and professionals who use BharatVow every day.',
      'Improve continuously based on user feedback — without overpromising or adding complexity for its own sake.',
    ],
  },

  ecosystem: {
    heading: 'Digital Life Ecosystem',
    intro: MARKETING_COUNT_COPY.ecosystemIntro,
    tools: ECOSYSTEM_TOOLS,
    ctaLabel: 'Explore Digital Life',
    ctaPath: PATHS.digitalLife,
  },

  company: {
    heading: 'About the Company',
    name: SITE.company,
    addressLines: [
      '507, 5th Floor,',
      'Gordhansky Tower,',
      'Jhotwara,',
      'Jaipur,',
      'Rajasthan – 302012',
      'India',
    ],
    description:
      'Atulit Baldhama Digital Solutions Pvt. Ltd. is a Jaipur-based technology company specializing in mobile application development, software development, and modern digital solutions. The company is the creator and developer of BharatVow.',
    registration: `CIN: ${SITE.cin} · GSTIN: ${SITE.gstin}`,
  },

  trust: {
    heading: 'Trust & Transparency',
    paragraphs: [
      'We take user privacy seriously. How BharatVow handles information is described clearly in our Privacy Policy — including what is stored on your device, when internet access is needed, and how optional cloud features work.',
    ],
    points: [
      'Core module data is stored on your device for everyday use. You can work with your records locally without needing constant internet access.',
      'Optional cloud backup is available for applicable premium modules when you choose to use it — useful when changing phones or keeping a backup copy linked to your account. Link Vault and Status Viewer are not included in master cloud backup scope.',
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
    heading: 'Contact',
    intro: 'For app support, feedback, or general enquiries, reach us through the channels below or visit our Contact page.',
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
      `Download BharatVow on Google Play — start with Link Vault and Status Viewer free, then explore ${MARKETING_COUNT_COPY.premiumToolsPhrase} with a 7-day free trial before subscribing.`,
    primaryLabel: 'Download BharatVow',
    secondaryLabel: 'Explore Digital Life',
    secondaryPath: PATHS.digitalLife,
  },
};
