import {
  Home,
  Car,
  BookOpen,
  PieChart,
  NotebookPen,
  CalendarCheck,
  Luggage,
  BellRing,
  ShoppingBag,
  HandCoins,
  MapPinCheck,
  ScanLine,
} from 'lucide-react';
import { MAIN_DASHBOARD_SLUGS } from '@/config/mainDashboard';

/** Main Dashboard order — re-exported from config/mainDashboard.js (mirrors mobile MY_SERVICES) */
export const DASHBOARD_TOOL_SLUGS = MAIN_DASHBOARD_SLUGS;

const MODULE_DEFS = [
  {
    slug: 'smart-khata',
    name: 'Smart Khata',
    tagline: 'Lend-and-borrow records with a clear running balance',
    purpose: 'Track lend-and-borrow entries with a clear running balance per person.',
    problem: 'Kitna udhaar baaki hai — yaad hi nahi.',
    lifeArea: 'money',
    icon: HandCoins,
    screenshotId: 'smart-khata',
  },
  {
    slug: 'budget-pocket',
    name: 'Budget Pocket',
    tagline: 'Household budget limits by category before the month runs out',
    purpose: 'Plan and control household budget by category before the month slips away.',
    problem: 'Mahine ka budget pehle hi khatam ho jata hai.',
    lifeArea: 'money',
    icon: PieChart,
    screenshotId: 'budget-pocket',
  },
  {
    slug: 'expenses-diary',
    name: 'Expenses Diary',
    tagline: 'Daily expense diary — see where household spending actually went',
    purpose: 'Manage daily expense records so you know where spending actually went.',
    problem: 'Cash kharcha dikhta hi nahi.',
    lifeArea: 'money',
    icon: NotebookPen,
    screenshotId: 'expenses-diary',
  },
  {
    slug: 'event-book',
    name: 'Event Book',
    tagline: 'Wedding guests, gifts, and costs in one register',
    purpose: 'Plan and manage events, guests, gifts, and costs in one register.',
    problem: 'Shaadi ki list teen WhatsApp groups me hai.',
    lifeArea: 'family',
    icon: CalendarCheck,
    screenshotId: 'event-book',
  },
  {
    slug: 'trip-ledger',
    name: 'Trip Ledger',
    tagline: 'Shared trip costs recorded fairly — settled in minutes',
    purpose: 'Split group trip expense records fairly and review balance summaries quickly.',
    problem: 'Trip khatam — kaun kitna dega?',
    lifeArea: 'travel',
    icon: Luggage,
    screenshotId: 'trip-ledger',
  },
  {
    slug: 'vehicle-vault',
    name: 'Vehicle Vault',
    tagline: 'RC, insurance, and service history on your phone',
    purpose: 'Track all vehicle documents, renewals, fuel, and service records.',
    problem: 'RC ghar pe tha jab zarurat padi.',
    lifeArea: 'vehicle',
    icon: Car,
    screenshotId: 'vehicle-vault',
  },
  {
    slug: 'home-vault',
    name: 'Home Vault',
    tagline: 'Bills, maintenance, and household knowledge in one place',
    purpose: 'Manage home assets, bills, due services, and household knowledge in one vault.',
    problem: 'Ghar sambhalna — yaad rakhna impossible lagta hai.',
    lifeArea: 'home',
    icon: Home,
    screenshotId: 'home-vault',
  },
  {
    slug: 'home-assets',
    name: 'Home Assets',
    tagline: 'Appliance and furniture records with warranty dates',
    purpose: 'Register appliances and furniture with warranty dates — part of Home Vault.',
    problem: 'Warranty kab khatam hogi — pata hi nahi.',
    lifeArea: 'home',
    icon: Home,
    screenshotId: 'home-vault',
    parentSlug: 'home-vault',
  },
  {
    slug: 'days-reminder',
    name: 'Days Reminder',
    tagline: "Today's birthdays and anniversaries every morning",
    purpose: 'Remember important birthdays, anniversaries, and custom dates each morning.',
    problem: 'Birthday wish karna bhool gaya — phir awkward.',
    lifeArea: 'family',
    icon: BellRing,
    screenshotId: 'days-reminder',
  },
  {
    slug: 'grocery-bag',
    name: 'Grocery Bag',
    tagline: 'Market list on your phone — check off as you shop',
    purpose: 'Create smart grocery lists and check items off at the market.',
    problem: 'List ghar pe reh gayi.',
    lifeArea: 'grocery',
    icon: ShoppingBag,
    screenshotId: 'grocery-bag',
  },
  {
    slug: 'link-vault',
    name: 'Link Vault',
    tagline: 'Save links before WhatsApp scrolls them away',
    purpose: 'Save and organize important links in collections — free without a subscription.',
    problem: 'Woh link WhatsApp me kho gayi.',
    lifeArea: 'daily-life',
    icon: BookOpen,
    free: true,
    screenshotId: 'link-vault',
  },
  {
    slug: 'status-viewer',
    name: 'Status Viewer',
    tagline: 'View, save, and share status media already on your device',
    purpose:
      'Conveniently view, save, and share status media that is already available on your device.',
    problem: 'Status clips disappear before you can save or share them.',
    lifeArea: 'daily-life',
    icon: ScanLine,
    free: true,
    screenshotId: 'status-viewer',
  },
  {
    slug: 'place-store',
    name: 'Place Store',
    tagline: 'Save places you visit often with notes',
    purpose: 'Save places you frequently visit with notes for your next trip.',
    problem: 'Woh dhaba next trip pe yaad nahi aaya.',
    lifeArea: 'travel',
    icon: MapPinCheck,
    screenshotId: 'place-store',
  },
];

/** @deprecated use ALL_MODULES — kept for homepage imports */
export const HOME_MODULES = MODULE_DEFS.filter(
  (m) => !['status-viewer', 'place-store'].includes(m.slug),
);

export const ALL_MODULES = MODULE_DEFS;

export const MODULE_SLUGS = MODULE_DEFS.map((m) => m.slug);

export function getModule(slug) {
  return ALL_MODULES.find((m) => m.slug === slug) ?? null;
}

/** Digital Tools in Main Dashboard order (excludes Home Assets sub-page). */
export function getDashboardModules() {
  return DASHBOARD_TOOL_SLUGS.map((slug) => getModule(slug)).filter(Boolean);
}

/** @deprecated Do not use category grouping — Main Dashboard order is canonical. */
export const MODULE_GROUPS = [
  {
    title: 'Budget & daily expenses',
    description: 'Khata, household budget, and expense diary',
    slugs: ['smart-khata', 'budget-pocket', 'expenses-diary'],
  },
  {
    title: 'Home & celebrations',
    description: 'Ghar, events, and reminders',
    slugs: ['home-vault', 'home-assets', 'event-book', 'days-reminder'],
  },
  {
    title: 'Travel & vehicles',
    description: 'Trips, papers, and saved places',
    slugs: ['vehicle-vault', 'trip-ledger', 'place-store'],
  },
  {
    title: 'Daily life',
    description: 'Lists, links, and free tools',
    slugs: ['grocery-bag', 'link-vault', 'status-viewer'],
  },
];

export const DIGITAL_LIFE_PAGE = {
  path: '/digital-life',
  title: 'Digital Life',
  headline: 'Twelve connected tools. One digital life ecosystem.',
  description:
    'Every BharatVow tool simplifies a real part of everyday life — budgets, home, vehicles, events, grocery, travel, links, and daily records — all connected inside one app.',
  keywords:
    'BharatVow Digital Life, digital life organizer, Smart Khata, Home Vault, personal organization India',
  intro:
    'These are not isolated apps. Each tool connects inside BharatVow — so your budgets, home records, vehicles, and daily life stay organized in one place. Start free with Link Vault and Status Viewer. Try all Digital Tools with a 7-day free trial.',
};

/** @deprecated use DIGITAL_LIFE_PAGE */
export const MODULES_PAGE = DIGITAL_LIFE_PAGE;

export function modulesForGroup(slugs) {
  return slugs.map((slug) => getModule(slug)).filter(Boolean);
}
