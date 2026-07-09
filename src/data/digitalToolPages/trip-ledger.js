import {
  Plane,
  Receipt,
  ListOrdered,
  ClipboardList,
  LayoutDashboard,
  FileSpreadsheet,
  CloudUpload,
} from 'lucide-react';

/**
 * Trip Ledger — Digital Tool page content (Step 22).
 * Template format — @see DigitalToolPageTemplate.jsx
 */
const tripLedgerPage = {
  slug: 'trip-ledger',

  valueProposition:
    'Organise every trip in one register — details, daily moments, shared expenses, and complete travel history when you return home.',

  whyExists: {
    headline: 'Why Trip Ledger?',
    eyebrow: 'Why Trip Ledger?',
    everydayProblem:
      'Hotel booking sits in email. Petrol slips go in a pocket. Three friends each covered dinner costs but no one wrote it down. After a family vacation or office tour, expenses are forgotten, booking details are lost, and splitting costs turns into awkward group chats with no clear record.',
    whyFamiliesNeedIt:
      'Trip Ledger keeps the full travel story together — trip information, notes, photos and places on a timeline, shared expenses with fair splits, and summaries you can review later. It is for organising travel, not just logging one expense at a time.',
  },

  whoShouldUse: {
    headline: 'Who Is It For?',
    audiences: [
      {
        title: 'Individuals',
        description: 'Track solo trips, pilgrimages, and personal tours with expenses and memories in one place.',
      },
      {
        title: 'Families',
        description: 'Plan family holidays together — shared costs, trip details, and history everyone can refer to later.',
      },
      {
        title: 'Business Travelers',
        description: 'Keep work trip records, daily spending, and summaries organised for personal review after you return.',
      },
      {
        title: 'Friends',
        description: 'Split group trip costs fairly — know who covered costs and who owes without messy calculations in chat.',
      },
      {
        title: 'Couples',
        description: 'Manage weekend getaways and road trips with shared expenses and trip notes in one register.',
      },
    ],
    situations: [],
  },

  realBenefits: [
    {
      title: 'Keep Every Trip Organized',
      description:
        'Trip name, dates, route, category, and participants stay in one profile — not scattered across messages and paper.',
    },
    {
      title: 'Record Travel Expenses',
      description:
        'Log shared costs as they happen with splits among members — see balances without manual calculation.',
    },
    {
      title: 'Maintain Complete Trip History',
      description:
        'Past trips remain in Trip Ledger with photos, places, expenses, and notes — ready when you want to look back.',
    },
    {
      title: 'Review Spending Anytime',
      description:
        'Trip summary shows total spend, member count, and expense entries — clear numbers before and after you travel.',
    },
    {
      title: 'Plan Better Future Trips',
      description:
        'Learn from past trip costs and records — use history to budget smarter for the next holiday or tour.',
    },
  ],

  features: [
    {
      icon: Plane,
      title: 'Trip Creation',
      description:
        'Create trips with title, dates, route, category, and cover image — start with the basics before you leave.',
    },
    {
      icon: Receipt,
      title: 'Expense Recording',
      description:
        'Add trip expenses with amount, date, and notes — assign paid-by records and splits among trip participants.',
    },
    {
      icon: ListOrdered,
      title: 'Travel Timeline',
      description:
        'View photos and places on a day-by-day timeline — follow the journey as it happened during the trip.',
    },
    {
      icon: ClipboardList,
      title: 'Notes',
      description:
        'Add trip descriptions and moment notes — capture booking details, reminders, and travel information in writing.',
    },
    {
      icon: LayoutDashboard,
      title: 'Travel Summary',
      description:
        'See total trip spend, member count, and expense count on the trip dashboard — a quick overview at a glance.',
    },
    {
      icon: FileSpreadsheet,
      title: 'Reports',
      description:
        'Export trip data to Excel and review balance summaries — useful records for group trips and personal review.',
    },
    {
      icon: CloudUpload,
      title: 'Backup & Restore',
      description:
        'Optional cloud backup when you enable it, or export to Excel — restore when you change phones so travel history stays safe.',
    },
  ],

  howItWorks: [
    {
      title: 'Create Trip',
      description: 'Start a new trip with name, dates, and category — add route details and a cover image if you like.',
    },
    {
      title: 'Add Trip Details',
      description: 'Invite participants, write notes, and save important travel information before and during the journey.',
    },
    {
      title: 'Record Expenses',
      description: 'Log shared costs as they happen — record who covered costs and how the amount splits among the group.',
    },
    {
      title: 'Track Daily Activities',
      description: 'Add photos and places to the travel timeline — follow each day of the trip in order.',
    },
    {
      title: 'Review Trip Summary',
      description: 'Open the dashboard for total spend, balances, and balance summary — see who owes whom before you forget.',
    },
    {
      title: 'Keep Complete Travel History',
      description: 'Completed trips stay in Trip Ledger — expenses, moments, and notes available whenever you need them.',
    },
  ],

  realLifeExamples: [
    {
      title: 'Family holiday',
      story:
        'The Patels take a week in Kerala. Hotel, cab, and meal costs go into Trip Ledger as the family travels. Back home, the summary shows what the trip cost — no hunting through pockets and messages.',
    },
    {
      title: 'Business tour',
      story:
        'Neha logs client meetings, daily meals, and hotel stays on a work trip. Notes hold booking references. Her personal travel record is ready before accounts ask for details.',
    },
    {
      title: 'Pilgrimage',
      story:
        'A group of twelve travels to Varanasi. Shared prasad, lodging, and transport expenses are recorded daily. The timeline keeps photos from each stop along the way.',
    },
    {
      title: 'Road trip',
      story:
        'Four friends drive to Rajasthan. Petrol, dhaba meals, and hotel rooms are split fairly. Balance summary shows exactly who owes whom — argument over in minutes.',
    },
    {
      title: 'Weekend getaway',
      story:
        'A couple plans a two-day hill station break. Trip notes hold homestay contact details. A handful of expenses logged over the weekend give a clear mini-trip summary.',
    },
    {
      title: 'Group tour',
      story:
        'College friends reunite for Goa. Everyone joins the same trip register. Expenses added from different phones stay in one shared ledger for the group.',
    },
  ],

  screenshots: [
    {
      id: 'trip-ledger',
      label: 'Trip dashboard',
      caption:
        'Trip overview with expenses, participants, and travel timeline — full trip organisation in one place.',
    },
  ],

  connectedTools: [
    {
      slug: 'expenses-diary',
      integration:
        'Trip Ledger handles shared group trip costs. Expenses Diary keeps your personal daily spending at home — use both when travel kharcha and household kharcha need separate records.',
    },
    {
      slug: 'budget-pocket',
      integration:
        'Plan a travel envelope in Budget Pocket before you leave. Trip balance summary can sync summary spending back — plan first, record trip details in Trip Ledger.',
    },
    {
      slug: 'vehicle-vault',
      integration:
        'Road trips often pair Trip Ledger for shared group costs with Vehicle Vault for fuel logs and mileage on your own vehicle — travel records where each belongs.',
    },
    {
      slug: 'birthdays-anniversaries',
      integration:
        'Trip dates live in Trip Ledger. Birthdays & Anniversaries helps you remember departure dates, bookings, and travel milestones before the journey starts.',
    },
  ],

  faq: [
    {
      q: 'Is Trip Ledger only an expense tracker?',
      a: 'No. Trip Ledger covers the full trip — creation, details, timeline, notes, shared expenses, summaries, and history — not just individual expense entries.',
    },
    {
      q: 'How is Trip Ledger different from Expenses Diary?',
      a: 'Expenses Diary is for personal daily income and spending at home. Trip Ledger is for organising trips — shared costs, participants, splits, and travel records for a specific journey.',
    },
    {
      q: 'Can Trip Ledger split costs among friends?',
      a: 'Yes. Add participants, record who covered costs, and assign splits. Balance summary and balance views show who owes whom after the trip.',
    },
    {
      q: 'Can I join a trip someone else started?',
      a: 'Yes. Trip Ledger supports joining shared trips so group members can add expenses to the same register.',
    },
    {
      q: 'Does Trip Ledger connect to Budget Pocket?',
      a: 'When you complete the trip balance summary, summary amounts can sync to Budget Pocket so travel spending reflects in your household budget records.',
    },
    {
      q: 'Is Trip Ledger a booking app that moves funds?',
      a: 'No. Trip Ledger is for planning records and expense organisation. It does not book tickets, and BharatVow does not process transactions or move funds.',
    },
  ],

  seo: {
    title: 'Trip Ledger | BharatVow Digital Life',
    metaDescription:
      'Trip Ledger in BharatVow — organise trips with expenses, timeline, notes, and travel history. Group splits and summaries — BharatVow does not process transactions or move funds, and it does not book travel.',
    keywords:
      'Trip Ledger, BharatVow, group trip expense records India, travel organizer app, trip planning, shared travel costs, personal digital life platform',
    ogTitle: 'Trip Ledger — Organise Every Trip in One Place | BharatVow',
    ogDescription:
      'Plan trips, record shared expenses, track daily moments, and keep complete travel history in BharatVow. Part of the BharatVow Personal Digital Life Platform.',
  },

  finalCta: {
    title: 'Travel with clearer records and less confusion',
    description:
      'Download BharatVow and explore all Digital Tools with a 7-day free trial. See Pricing for Monthly and Yearly plans.',
    secondaryLabel: 'Explore Vehicle Vault',
    secondaryTo: '/digital-life/vehicle-vault',
  },

  sectionTitles: {
    useCases: 'Everyday Use Cases',
    worksWith: 'Works With',
    realBenefits: 'Real Benefits',
  },
};

export default tripLedgerPage;
