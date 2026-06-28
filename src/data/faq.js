import {
  HelpCircle,
  Users,
  Rocket,
  CreditCard,
  Shield,
  Cloud,
  Layers,
  Wrench,
  UserCog,
  Scale,
  WifiOff,
  NotebookPen,
  Wallet,
  HandCoins,
  CalendarCheck,
  Luggage,
  Car,
  Home,
  BellRing,
  ShoppingBag,
  BookOpen,
  ScanLine,
  MapPinCheck,
  Mail,
  Bug,
  Lightbulb,
  Trash2,
  FileText,
} from 'lucide-react';
import { MAIN_DASHBOARD_TOOLS } from '@/config/mainDashboard';
import { PATHS } from '@/config/paths';

export const FAQ_PATH = '/faq';
export const HOME_FAQ_ANCHOR = 'questions';

export const FAQ_CATEGORY_DEFS = [
  {
    id: 'general',
    label: 'General',
    icon: HelpCircle,
    description: 'What BharatVow is and who it is for',
  },
  {
    id: 'getting-started',
    label: 'Getting Started',
    icon: Rocket,
    description: 'Download, trial, and first steps',
  },
  {
    id: 'subscription',
    label: 'Subscription & Pricing',
    icon: CreditCard,
    description: 'Plans, GST, and billing',
  },
  {
    id: 'privacy-security',
    label: 'Privacy & Security',
    icon: Shield,
    description: 'How your information is handled',
  },
  {
    id: 'data-backup',
    label: 'Data & Backup',
    icon: Cloud,
    description: 'Backup, restore, and new phones',
  },
  {
    id: 'digital-tools',
    label: 'Digital Tools',
    icon: Layers,
    description: 'What each tool does today',
  },
  {
    id: 'technical-support',
    label: 'Technical Support',
    icon: Wrench,
    description: 'Help, bugs, and feedback',
  },
  {
    id: 'account',
    label: 'Account Management',
    icon: UserCog,
    description: 'Profile, subscription, and deletion',
  },
  {
    id: 'legal',
    label: 'Legal & Policies',
    icon: Scale,
    description: 'Policies and official documents',
  },
];

export const FAQ_CATEGORIES = [
  { id: 'all', label: 'All' },
  ...FAQ_CATEGORY_DEFS.map(({ id, label }) => ({ id, label })),
];

const TOOL_NAMES = MAIN_DASHBOARD_TOOLS.map((tool) => tool.label).join(', ');

export const FAQ_PAGE = {
  path: FAQ_PATH,
  title: 'FAQ',
  headline: 'Frequently Asked Questions',
  intro: 'Find answers about BharatVow, subscriptions, Digital Tools and your account.',
  description:
    'BharatVow FAQ — answers about subscriptions, Digital Tools, privacy, backup, and account management. Based on implemented features only.',
  keywords:
    'BharatVow FAQ, BharatVow help, digital life organizer questions, BharatVow subscription, BharatVow backup, BharatVow privacy',
  seo: {
    ogTitle: 'Frequently Asked Questions | BharatVow',
    ogDescription:
      'Clear answers about BharatVow — 7-day trial, subscription plans, Digital Tools, privacy, backup, and account help.',
  },
  searchPlaceholder: 'Search questions…',
  emptySearch: 'No questions match your search. Try different words or contact support.',
  contact: {
    title: 'Still have questions?',
    description: 'Contact our support team.',
    cta: 'Contact Support',
    href: PATHS.contact,
  },
  relatedLinks: [
    { label: 'Contact Support', path: PATHS.contact },
    { label: 'Pricing', path: PATHS.pricing },
    { label: 'Digital Life', path: PATHS.digitalLife },
  ],
};

export const HOME_FAQ_PREVIEW = {
  eyebrow: 'Quick answers',
  title: 'Questions before you install?',
  intro:
    'A few honest answers about BharatVow. Visit the full FAQ page for search, categories, and every common question.',
  footer: {
    title: 'Looking for more answers?',
    cta: 'View All FAQs',
    href: FAQ_PATH,
  },
};

export const FAQ_PREVIEW_IDS = [
  'what-is-bharatvow',
  'free-trial',
  'offline',
  'data-secure',
  'daily-expenses',
  'cloud-backup',
];

/** Verified FAQ items — answers reflect implemented functionality only */
export const FAQ_ITEMS = [
  // ── General ──
  {
    id: 'what-is-bharatvow',
    category: 'general',
    icon: HelpCircle,
    question: 'What is BharatVow?',
    shortAnswer:
      'Your complete digital life organizer — budgets, home, vehicles, events, and everyday records in one Android app.',
    answer:
      'BharatVow is your complete digital life organizer — one Android application to organize budgets, daily expenses, home maintenance, vehicles, events, grocery, travel, links, saved places, and everyday records in a single app. It is for personal organization — not a bank, payment service, or navigation app.',
    keywords: ['platform', 'app', 'digital life', 'organize'],
  },
  {
    id: 'who-is-it-for',
    category: 'general',
    icon: Users,
    question: 'Who is BharatVow designed for?',
    shortAnswer:
      'Individuals, families, students, and professionals who want everyday life organized in one place.',
    answer:
      'BharatVow is designed for individuals, couples, families, students, professionals, and self-employed users who want everyday digital life organized instead of scattered notes, chats, screenshots, and separate apps.',
    keywords: ['individual', 'student', 'professional', 'family'],
  },
  {
    id: 'what-is-digital-life',
    category: 'general',
    icon: Layers,
    question: 'What is Digital Life?',
    shortAnswer:
      'The connected set of Digital Tools inside BharatVow — budgets, home, vehicles, events, and daily records.',
    answer:
      'Digital Life is BharatVow\u2019s connected ecosystem of Digital Tools on the main dashboard. Each tool handles a specific part of everyday life — such as budgets, home records, vehicles, or grocery lists — while staying inside one application.',
    keywords: ['digital life', 'ecosystem', 'tools', 'dashboard'],
  },
  {
    id: 'which-tools-included',
    category: 'general',
    icon: Layers,
    question: 'What Digital Tools are included?',
    shortAnswer: `Twelve tools: ${TOOL_NAMES}.`,
    answer: `BharatVow includes twelve Digital Tools on the main dashboard: ${TOOL_NAMES}. Each tool is designed for a specific everyday workflow. Visit the Digital Life page on this website for a brief overview of each tool.`,
    keywords: ['tools', 'modules', 'dashboard', 'included'],
  },

  // ── Getting Started ──
  {
    id: 'how-to-start',
    category: 'getting-started',
    icon: Rocket,
    question: 'How do I start using BharatVow?',
    shortAnswer:
      'Download from Google Play, sign in with OTP, and open any Digital Tool from the dashboard.',
    answer:
      'Download BharatVow from Google Play, sign in with your mobile number using OTP, and set up your PIN. Open any Digital Tool from the main dashboard to start organizing your records. A 7-day free trial lets you explore all Digital Tools before choosing a subscription.',
    keywords: ['start', 'download', 'install', 'otp', 'begin'],
  },
  {
    id: 'free-trial',
    category: 'getting-started',
    icon: Rocket,
    question: 'Is there a free trial?',
    shortAnswer: 'Yes — a 7-day free trial to explore all Digital Tools.',
    answer:
      'Yes. BharatVow includes a 7-day free trial so you can explore all Digital Tools before choosing a subscription. Link Vault and Status Viewer remain available without a subscription after the trial ends.',
    keywords: ['free', 'trial', '7 day', 'premium'],
  },
  {
    id: 'after-trial',
    category: 'getting-started',
    icon: Rocket,
    question: 'What happens after the trial ends?',
    shortAnswer:
      'Premium tools need an active subscription. Link Vault and Status Viewer stay available without one.',
    answer:
      'When your 7-day trial ends, Digital Tools that require a subscription will need an active Monthly or Yearly plan to continue using. Your existing records remain on your device. Link Vault and Status Viewer continue to work without a subscription.',
    keywords: ['trial', 'ends', 'subscribe', 'after'],
  },

  // ── Subscription & Pricing ──
  {
    id: 'available-plans',
    category: 'subscription',
    icon: CreditCard,
    question: 'What plans are available?',
    shortAnswer: 'Monthly ₹300 or Yearly ₹2,000 — both include all Digital Tools.',
    answer:
      'BharatVow offers a Monthly plan at ₹300 per month and a Yearly plan at ₹2,000 per year. Both plans include access to all Digital Tools on the dashboard. Start with the 7-day free trial before subscribing. See the Pricing page for full details.',
    keywords: ['plans', 'monthly', 'yearly', 'price', '300', '2000'],
  },
  {
    id: 'gst-included',
    category: 'subscription',
    icon: CreditCard,
    question: 'Is GST included?',
    shortAnswer: 'No — GST and applicable taxes are added at checkout as shown in the app.',
    answer:
      'Prices shown for Monthly and Yearly plans are before GST. GST and other applicable taxes are added at checkout. The final amount is displayed in the app before you confirm your subscription.',
    keywords: ['gst', 'tax', 'price', 'included'],
  },
  {
    id: 'change-subscription',
    category: 'subscription',
    icon: CreditCard,
    question: 'Can I change my subscription?',
    shortAnswer:
      'Yes — switch between Monthly and Yearly through subscription settings when available.',
    answer:
      'Yes. You can move between the Monthly and Yearly plan through BharatVow subscription settings when plan changes are available. Contact support if you need help switching plans.',
    keywords: ['change', 'switch', 'plan', 'upgrade'],
  },
  {
    id: 'cancel-subscription',
    category: 'subscription',
    icon: CreditCard,
    question: 'How do I cancel?',
    shortAnswer:
      'Cancel through Google Play subscription settings — billing stops at the end of the current period.',
    answer:
      'You can cancel through your Google Play subscription settings. Cancellation stops future billing at the end of the current billing period. See our Cancellation & Refund Policy for refund terms.',
    keywords: ['cancel', 'unsubscribe', 'stop', 'billing'],
  },

  // ── Privacy & Security ──
  {
    id: 'data-secure',
    category: 'privacy-security',
    icon: Shield,
    question: 'Is my information secure?',
    shortAnswer:
      'Records stay on your phone first, protected by OTP and PIN login.',
    answer:
      'Your module records are stored on your device for everyday use. Account access is protected by OTP verification and a PIN. Optional encrypted cloud backup is available for applicable modules when you choose to use it. BharatVow is for personal organization — not professional financial, legal, or medical advice.',
    keywords: ['secure', 'pin', 'otp', 'encrypted', 'privacy'],
  },
  {
    id: 'privacy-policy',
    category: 'privacy-security',
    icon: Shield,
    question: 'Where can I read the Privacy Policy?',
    shortAnswer: 'On our website under Legal — Privacy Policy.',
    answer: 'Our Privacy Policy explains how BharatVow collects, uses, stores, and protects your information.',
    links: [{ label: 'Privacy Policy', path: '/privacy-policy' }],
    keywords: ['privacy', 'policy', 'legal'],
  },
  {
    id: 'share-data',
    category: 'privacy-security',
    icon: Shield,
    question: 'Does BharatVow share my personal information?',
    shortAnswer:
      'BharatVow does not sell your personal information. Sharing is limited to what the Privacy Policy describes.',
    answer:
      'BharatVow does not sell your personal information. Any sharing is limited to what is described in our Privacy Policy — such as service providers needed to operate the app, or when required by law. Read the Privacy Policy for full details.',
    links: [{ label: 'Privacy Policy', path: '/privacy-policy' }],
    keywords: ['share', 'sell', 'data', 'third party'],
  },

  // ── Data & Backup ──
  {
    id: 'cloud-backup',
    category: 'data-backup',
    icon: Cloud,
    question: 'Is my data backed up?',
    shortAnswer:
      'Optional cloud backup is available for applicable modules when you enable it.',
    answer:
      'BharatVow stores your everyday records on your device first. Optional cloud backup is available for applicable modules when you choose to use it — useful when changing phones or keeping a backup copy linked to your account. Individual tools may also offer export or module-specific backup screens inside the app.',
    keywords: ['backup', 'cloud', 'sync'],
  },
  {
    id: 'restore-data',
    category: 'data-backup',
    icon: Cloud,
    question: 'Can I restore my information?',
    shortAnswer:
      'Yes — restore from optional cloud backup or module backup screens where supported.',
    answer:
      'Yes. Where cloud backup is enabled for a module, you can restore your records when signing in on a new phone. Some Digital Tools also include their own backup and restore screens inside the app. Export options such as Excel are available in certain tools for your own personal copy.',
    keywords: ['restore', 'backup', 'recover'],
  },
  {
    id: 'change-phone',
    category: 'data-backup',
    icon: Cloud,
    question: 'What happens if I change my phone?',
    shortAnswer:
      'Sign in on your new phone and restore from cloud backup where you enabled it.',
    answer:
      'Sign in with the same mobile number on your new phone. If you enabled optional cloud backup for applicable modules, you can restore your records after login. Run a backup or export from your old phone first if you need a personal copy before switching devices.',
    keywords: ['new phone', 'change', 'device', 'migrate'],
  },
  {
    id: 'offline',
    category: 'data-backup',
    icon: WifiOff,
    question: 'Does BharatVow work offline?',
    shortAnswer:
      'Yes for everyday records on your phone. Internet is needed for login, subscriptions, and backup.',
    answer:
      'Yes. Your records stay on your device for everyday viewing and editing without constant internet access. You need internet for OTP login, subscription management, and optional cloud backup.',
    keywords: ['offline', 'internet', 'device', 'local'],
  },

  // ── Digital Tools ──
  {
    id: 'tool-smart-khata',
    category: 'digital-tools',
    icon: HandCoins,
    question: 'What is Smart Khata?',
    shortAnswer:
      'Personal lend-and-borrow records with a running balance per person — not a payment app.',
    answer:
      'Smart Khata tracks personal lending and borrowing with other people — dated entries and a clear running balance per person. It is for your own records — not a payment or money-transfer service.',
    keywords: ['smart khata', 'khata', 'lending', 'borrowing', 'udhaar'],
  },
  {
    id: 'tool-budget-pocket',
    category: 'digital-tools',
    icon: Wallet,
    question: 'What is Budget Pocket?',
    shortAnswer: 'Plan and control household budget by category before the month runs out.',
    answer:
      'Budget Pocket helps you set household budget limits by category and track spending against those limits through the month. It is for personal budget planning — not a bank account or payment service.',
    keywords: ['budget pocket', 'budget', 'category', 'spending'],
  },
  {
    id: 'tool-expenses-diary',
    category: 'digital-tools',
    icon: NotebookPen,
    question: 'What is Expenses Diary?',
    shortAnswer: 'Manage daily expense and income records in one diary.',
    answer:
      'Expenses Diary is your daily register for expenses and income — so you can see where household money went. It tracks your own spending records — not lending with others (that is Smart Khata).',
    keywords: ['expenses diary', 'expense', 'income', 'daily'],
  },
  {
    id: 'tool-event-book',
    category: 'digital-tools',
    icon: CalendarCheck,
    question: 'What is Event Book?',
    shortAnswer: 'Plan and manage events, guests, gifts, and costs in one register.',
    answer:
      'Event Book helps you plan celebrations and events — guest lists, gifts, items, and cost records in one place instead of scattered chats and notebooks.',
    keywords: ['event book', 'event', 'guest', 'wedding'],
  },
  {
    id: 'tool-trip-ledger',
    category: 'digital-tools',
    icon: Luggage,
    question: 'What is Trip Ledger?',
    shortAnswer: 'Split group trip expenses and settle who owes whom.',
    answer:
      'Trip Ledger records shared trip costs — who paid what and how expenses are split — so group travel settlements are clear and fair.',
    keywords: ['trip ledger', 'trip', 'travel', 'split', 'expense'],
  },
  {
    id: 'tool-vehicle-vault',
    category: 'digital-tools',
    icon: Car,
    question: 'What is Vehicle Vault?',
    shortAnswer: 'Track vehicle documents, renewals, fuel, and service records.',
    answer:
      'Vehicle Vault stores RC, insurance, and service details for one or more vehicles — plus fuel entries, service history, and renewal reminders so vehicle paperwork stays organized on your phone.',
    keywords: ['vehicle vault', 'vehicle', 'car', 'insurance', 'service'],
  },
  {
    id: 'tool-home-vault',
    category: 'digital-tools',
    icon: Home,
    question: 'What is Home Vault?',
    shortAnswer: 'Manage home assets, bills, due services, and household knowledge.',
    answer:
      'Home Vault organizes household information — appliances and assets, bills, service contacts, due maintenance, and related home records in connected modules inside one vault.',
    keywords: ['home vault', 'home', 'bills', 'appliance', 'assets'],
  },
  {
    id: 'tool-days-reminder',
    category: 'digital-tools',
    icon: BellRing,
    question: 'What is Days Reminder?',
    shortAnswer: 'Remember birthdays, anniversaries, and custom important dates.',
    answer:
      'Days Reminder shows today\u2019s birthdays, anniversaries, and custom dates on your dashboard — plus due dates from Home Vault and Vehicle Vault where you set them. Reminders appear inside the app based on your settings.',
    keywords: ['days reminder', 'birthday', 'anniversary', 'reminder'],
  },
  {
    id: 'tool-grocery-bag',
    category: 'digital-tools',
    icon: ShoppingBag,
    question: 'What is Grocery Bag?',
    shortAnswer: 'Create grocery lists and check items off while you shop.',
    answer:
      'Grocery Bag lets you build market lists, check items while you shop, and keep weekly grocery runs organized on your phone. Lists can be shared as text where the app supports it.',
    keywords: ['grocery bag', 'grocery', 'list', 'shopping'],
  },
  {
    id: 'tool-link-vault',
    category: 'digital-tools',
    icon: BookOpen,
    question: 'What is Link Vault?',
    shortAnswer: 'Save and organize important links in collections — free without a subscription.',
    answer:
      'Link Vault saves links you want to keep — grouped in collections with search — before they get lost in chats. Link Vault is available without a subscription.',
    keywords: ['link vault', 'links', 'bookmarks', 'free'],
  },
  {
    id: 'tool-status-viewer',
    category: 'digital-tools',
    icon: ScanLine,
    question: 'What is Status Viewer?',
    shortAnswer:
      'View and save status media already on your device — Android only, free without a subscription.',
    answer:
      'Status Viewer lets you view and save status media that is already available in a folder you grant on your Android device. It is not a messaging app. Status Viewer is available on Android without a subscription.',
    keywords: ['status viewer', 'status', 'android', 'media', 'free'],
  },
  {
    id: 'tool-place-store',
    category: 'digital-tools',
    icon: MapPinCheck,
    question: 'What is Place Store?',
    shortAnswer:
      'Save places you visit often with map pin, category, and notes — not a navigation app.',
    answer:
      'Place Store is a location organizer — save home, office, favourites, and service centres with a map pin, category, and notes. Opening a saved place uses your device\u2019s maps app for directions. It is not a navigation or maps replacement.',
    keywords: ['place store', 'places', 'location', 'map'],
  },
  {
    id: 'khata-vs-expenses',
    category: 'digital-tools',
    icon: HandCoins,
    question: 'Is Smart Khata the same as Expenses Diary?',
    shortAnswer:
      'No — Khata is for lending and borrowing; Expenses Diary is for your own spending.',
    answer:
      'No. Smart Khata tracks lending and borrowing with other people — who owes what. Expenses Diary tracks your own daily spending and income records.',
    keywords: ['khata', 'expenses', 'difference'],
  },

  // ── Technical Support ──
  {
    id: 'contact-support',
    category: 'technical-support',
    icon: Mail,
    question: 'How do I contact support?',
    shortAnswer: 'Email support@bharatvow.com or use the Contact page on this website.',
    answer:
      'Email support@bharatvow.com or visit our Contact page for app help, feedback, and account requests. Include your registered mobile number (never OTP or PIN), app version, and a short description of the issue.',
    links: [{ label: 'Contact page', path: PATHS.contact }],
    keywords: ['contact', 'support', 'help', 'email'],
  },
  {
    id: 'report-bug',
    category: 'technical-support',
    icon: Bug,
    question: 'How do I report a bug?',
    shortAnswer: 'Email support with steps to reproduce, your device model, and app version.',
    answer:
      'Email support@bharatvow.com with the subject describing the issue. Include what you were doing, steps to reproduce the problem, your device model, Android version, and BharatVow app version. Screenshots help if the issue is visual.',
    keywords: ['bug', 'report', 'error', 'issue'],
  },
  {
    id: 'request-feature',
    category: 'technical-support',
    icon: Lightbulb,
    question: 'How do I request a feature?',
    shortAnswer: 'Email support@bharatvow.com — we prioritise real everyday workflows.',
    answer:
      'Email support@bharatvow.com with subject line \u201cFeedback \u2014 [Topic]\u201d and describe the everyday workflow you are trying to solve. We review feedback based on real use — we cannot promise that every suggestion will be added.',
    keywords: ['feature', 'request', 'feedback', 'suggestion'],
  },

  // ── Account Management ──
  {
    id: 'delete-account',
    category: 'account',
    icon: Trash2,
    question: 'How do I delete my account?',
    shortAnswer:
      'Use the in-app delete flow or follow steps on our Delete Account page.',
    answer:
      'Use the in-app account deletion flow in Profile or Settings, or follow the email instructions on our Delete Account page. Deletion is permanent. Run a backup or export first if you need to keep your records.',
    links: [{ label: 'Delete Account page', path: PATHS.deleteAccount }],
    keywords: ['delete', 'account', 'remove'],
  },
  {
    id: 'update-profile',
    category: 'account',
    icon: UserCog,
    question: 'How do I update my profile?',
    shortAnswer: 'Open Profile or Settings in the app to update your details.',
    answer:
      'Open Profile or Settings inside BharatVow to view and update your account details. Some fields such as your registered mobile number may require verification to change.',
    keywords: ['profile', 'update', 'settings', 'account'],
  },
  {
    id: 'manage-subscription',
    category: 'account',
    icon: CreditCard,
    question: 'Where can I manage my subscription?',
    shortAnswer:
      'In BharatVow subscription settings and Google Play subscription management.',
    answer:
      'Open subscription settings inside BharatVow to view your plan and trial status. You can also manage billing and cancellation through Google Play subscription settings on your device.',
    keywords: ['subscription', 'manage', 'billing', 'plan'],
  },

  // ── Legal & Policies ──
  {
    id: 'legal-privacy',
    category: 'legal',
    icon: FileText,
    question: 'Privacy Policy',
    shortAnswer: 'How BharatVow handles your information.',
    answer: 'Read how BharatVow collects, uses, stores, and protects your information.',
    links: [{ label: 'Privacy Policy', path: '/privacy-policy' }],
    keywords: ['privacy', 'legal'],
  },
  {
    id: 'legal-terms',
    category: 'legal',
    icon: FileText,
    question: 'Terms & Conditions',
    shortAnswer: 'Terms governing use of BharatVow.',
    answer: 'Terms governing use of the BharatVow mobile application and website.',
    links: [{ label: 'Terms & Conditions', path: '/terms' }],
    keywords: ['terms', 'legal'],
  },
  {
    id: 'legal-refund',
    category: 'legal',
    icon: FileText,
    question: 'Cancellation & Refund',
    shortAnswer: 'Refund terms for subscriptions and in-app purchases.',
    answer: 'Cancellation and refund terms for BharatVow subscriptions and in-app purchases.',
    links: [{ label: 'Cancellation & Refund Policy', path: '/refund-policy' }],
    keywords: ['refund', 'cancel', 'legal'],
  },
  {
    id: 'legal-disclaimer',
    category: 'legal',
    icon: FileText,
    question: 'Disclaimer',
    shortAnswer: 'BharatVow is for personal organisation — not professional advice.',
    answer: 'BharatVow is for personal organisation. It does not provide professional financial, legal, or medical advice.',
    links: [{ label: 'Disclaimer', path: '/disclaimer' }],
    keywords: ['disclaimer', 'legal'],
  },
  {
    id: 'legal-grievance',
    category: 'legal',
    icon: FileText,
    question: 'Grievance Redressal',
    shortAnswer: 'Complaint mechanism under applicable Indian law.',
    answer: 'How to raise a complaint about BharatVow under applicable Indian law.',
    links: [{ label: 'Grievance Redressal', path: '/grievance-redressal' }],
    keywords: ['grievance', 'complaint', 'legal'],
  },
  {
    id: 'legal-delete-account',
    category: 'legal',
    icon: FileText,
    question: 'Delete Account',
    shortAnswer: 'How to permanently delete your account and associated data.',
    answer: 'Steps to permanently delete your BharatVow account and associated personal data.',
    links: [{ label: 'Delete Account', path: PATHS.deleteAccount }],
    keywords: ['delete', 'account', 'legal'],
  },
];

export function getFaqPreviewItems() {
  return FAQ_PREVIEW_IDS.map((id) => FAQ_ITEMS.find((item) => item.id === id)).filter(Boolean);
}

export function getFaqCategoryDef(categoryId) {
  return FAQ_CATEGORY_DEFS.find((cat) => cat.id === categoryId) ?? null;
}

export function filterFaqItems(items, { query = '', category = 'all' }) {
  const q = query.trim().toLowerCase();

  return items.filter((item) => {
    const matchesCategory = category === 'all' || item.category === category;
    if (!matchesCategory) return false;
    if (!q) return true;

    return (
      item.question.toLowerCase().includes(q)
      || item.answer.toLowerCase().includes(q)
      || item.shortAnswer?.toLowerCase().includes(q)
      || item.keywords?.some((k) => k.toLowerCase().includes(q))
    );
  });
}

export function groupFaqItemsByCategory(items) {
  return FAQ_CATEGORY_DEFS.map((cat) => ({
    ...cat,
    items: items.filter((item) => item.category === cat.id),
  })).filter((group) => group.items.length > 0);
}

/** Plain-text answers for JSON-LD */
export function faqItemsForSchema(items) {
  return items.map(({ question, answer, links }) => ({
    question,
    answer: links?.length
      ? `${answer} ${links.map((l) => l.label).join(', ')}.`
      : answer,
  }));
}
