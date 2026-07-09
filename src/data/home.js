import {
  Receipt,
  PieChart,
  Home,
  Users,
  Car,
  ShoppingCart,
  Plane,
  Link2,
  ShieldCheck,
  LayoutGrid,
  Sparkles,
  FileSearch,
  PartyPopper,
} from 'lucide-react';
import {
  LIFE_AREA_MODULE_SLUGS,
  HOME_VAULT_SUB_MODULE_LABELS,
  resolveModuleDisplayNames,
  getLifeAreaToolLabel,
} from '@/config/lifeAreas.config';
import { HOMEPAGE_MODULE_COPY } from '@/data/homepageCopy';

/** Hero trust badges — used only in HeroSection */
export const HERO_TRUST_BADGES = [
  { label: 'Built for Everyday Life', icon: 'users' },
  { label: 'Local-first records', icon: 'wifi-off' },
  { label: 'Privacy-first', icon: 'shield' },
  { label: 'Optional Backup', icon: 'cloud' },
  { label: 'Free to Start', icon: 'sparkles' },
];

/** Hero phone carousel — see src/data/screenshots.js + generated manifest */

/** Trust & value strip — used only in TrustBar below the hero */
export const TRUST_PILLARS = [
  {
    icon: Users,
    title: 'Built for Everyday Life',
    description: 'Helping you organize everyday digital life in one organized place.',
  },
  {
    icon: ShieldCheck,
    title: 'Privacy-first design',
    description:
      'Records stay on your device for everyday use, with optional encrypted cloud backup when you choose it.',
  },
  {
    icon: LayoutGrid,
    title: 'Smart Daily Management',
    description:
      'Track budgets, home upkeep, vehicles, reminders, groceries and more from one app.',
  },
  {
    icon: Sparkles,
    title: 'Free to Start',
    description: 'Start free and unlock premium tools only when you need them.',
  },
];

/** Relatable family moments — used only in FamiliarMoments section */
export const FAMILIAR_MOMENTS = [
  {
    icon: Receipt,
    title: 'Month-end already?',
    story: 'Salary arrived on Monday — and by Friday everyone is asking where it went.',
    tone: 'money',
  },
  {
    icon: Home,
    title: 'Service due… again?',
    story: 'The geyser, the AC, the water purifier — you remember only when something stops working.',
    tone: 'home',
  },
  {
    icon: Users,
    title: 'Whose birthday was today?',
    story: 'You saved the date in your head, then life got busy and the wish never went out.',
    tone: 'family',
  },
  {
    icon: PartyPopper,
    title: 'Festival wish ready?',
    story: 'Diwali morning — you meant to send cards to family, but the right greeting and contact list were not ready in time.',
    tone: 'family',
  },
  {
    icon: FileSearch,
    title: 'Where did we keep that paper?',
    story: 'School forms, rent receipts, ID copies — each in a different drawer or phone gallery.',
    tone: 'home',
  },
  {
    icon: Car,
    title: 'Insurance renew kab tha?',
    story: 'The date was somewhere on a message or a diary page you cannot find right now.',
    tone: 'vehicle',
  },
  {
    icon: ShoppingCart,
    title: 'List banayi thi, mil nahi rahi',
    story: 'Groceries discussed at breakfast, written in a chat, and half the items still missed at the store.',
    tone: 'grocery',
  },
];

export const FAMILIAR_MOMENTS_INTRO =
  'Not big crises — just small, repeating moments in everyday life. BharatVow was built to make these situations easier to handle, without adding more stress to your day.';

export const FAMILIAR_MOMENTS_CLOSING =
  'Thankfully, these daily problems don\u2019t have to stay complicated.';

export const LIFE_AREAS_INTRO =
  'BharatVow is one connected platform for the different parts of your digital life — budget and accounts, home, vehicles, celebrations, reminders, festivals, grocery, travel, and daily tools. Each area has dedicated Digital Tools that work together in the same app.';

export const LIFE_AREAS_CLOSING =
  'Every tool connects to simplify your complete digital life.';

/** Life areas hub — used only in LifeAreasBento section */
export const LIFE_AREAS_HOME = [
  {
    slug: 'money',
    title: 'Manage Your Budget',
    description: 'Salary, udhaar, and daily expenses — organised without juggling notebooks or chats.',
    icon: PieChart,
    chip: 'money',
    toolLabel: getLifeAreaToolLabel('money'),
    tools: resolveModuleDisplayNames(LIFE_AREA_MODULE_SLUGS.money),
  },
  {
    slug: 'home',
    title: 'Manage Your Home',
    description: 'Bills, maintenance, and where things are kept — ready when the house needs you.',
    icon: Home,
    chip: 'home',
    toolLabel: getLifeAreaToolLabel('home'),
    tools: [...HOME_VAULT_SUB_MODULE_LABELS],
  },
  {
    slug: 'family',
    title: 'Celebrations & Reminders',
    description: 'Weddings, gifts, festival greetings, and important dates — cared for without scattered messages.',
    icon: Users,
    chip: 'family',
    toolLabel: getLifeAreaToolLabel('family'),
    tools: resolveModuleDisplayNames(LIFE_AREA_MODULE_SLUGS.family),
  },
  {
    slug: 'vehicle',
    title: 'Manage Your Vehicles',
    description: 'RC, insurance, and service history — on your phone when it matters.',
    icon: Car,
    chip: 'vehicle',
    toolLabel: getLifeAreaToolLabel('vehicle'),
    tools: resolveModuleDisplayNames(LIFE_AREA_MODULE_SLUGS.vehicle),
  },
  {
    slug: 'grocery',
    title: 'Manage Your Grocery',
    description: 'One shopping list that travels with you to the market.',
    icon: ShoppingCart,
    chip: 'grocery',
    toolLabel: getLifeAreaToolLabel('grocery'),
    tools: resolveModuleDisplayNames(LIFE_AREA_MODULE_SLUGS.grocery),
  },
  {
    slug: 'travel',
    title: 'Manage Your Travel',
    description: 'Fair trip splits and saved places — memories without maths homework.',
    icon: Plane,
    chip: 'travel',
    toolLabel: getLifeAreaToolLabel('travel'),
    tools: resolveModuleDisplayNames(LIFE_AREA_MODULE_SLUGS.travel),
  },
  {
    slug: 'daily-life',
    title: 'Manage Your Daily Life',
    description: 'Links, WhatsApp status, and everyday capture — free tools that stay with your account.',
    icon: Link2,
    chip: 'daily',
    toolLabel: getLifeAreaToolLabel('daily-life'),
    tools: resolveModuleDisplayNames(LIFE_AREA_MODULE_SLUGS['daily-life']),
  },
];

/** Product proof carousel — see src/data/screenshots.js + generated manifest */

export const TESTIMONIALS_DISCLAIMER =
  'Illustrative examples based on typical BharatVow use cases — not verified individual reviews.';

export const TESTIMONIALS = [
  {
    quote:
      'Pehle diary aur notes me sab mix ho jata tha. Ab khata, kharcha aur gaadi ke papers ek jagah.',
    name: 'Rajesh K.',
    location: 'Pune',
    role: 'Shop owner',
  },
  {
    quote: 'Shaadi ki guest list aur gifts — ab Event Book me, WhatsApp me nahi.',
    name: 'Sunita M.',
    location: 'Jaipur',
    role: 'Homemaker',
  },
];

export const MORNING_STORY = {
  title: 'A morning with BharatVow',
  body: 'Before the day gets busy: festival greetings ready in Festival Studio, today\u2019s birthdays flagged in Birthdays & Anniversaries, Smart Reminders showing what is due, yesterday\u2019s expenses logged, and AC service flagged in Home Vault. No five apps. No hunting through WhatsApp.',
};

export const HERO = {
  eyebrow: 'Personal Digital Life Platform',
  title: 'Organize your personal digital life in one place',
  description:
    'You already manage many parts of your life every day — budgets, home, vehicles, events, celebrations, reminders, festivals, grocery, and everyday records. BharatVow helps you organize personal records, expenses, reminders, documents, and daily tools in one privacy-first, easy-to-use platform.',
  topics: [
    'Home',
    'Budget',
    'Expenses',
    'Vehicles',
    'Events',
    'Festivals',
    'Grocery',
    'Trips',
    'Links',
    'Reminders',
    'Records',
  ],
  ctaSecondary: 'Explore Your Digital Life',
};

export const DOWNLOAD = {
  title: 'Start organizing your digital life today.',
  description: HOMEPAGE_MODULE_COPY.downloadBandDescription,
};
