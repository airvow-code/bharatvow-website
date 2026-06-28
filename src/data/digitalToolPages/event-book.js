import {
  CalendarHeart,
  Users,
  Send,
  Wallet,
  Receipt,
  Store,
  ShoppingCart,
  ClipboardList,
  ListOrdered,
  CloudUpload,
} from 'lucide-react';

/**
 * Event Book — Digital Tool page content (Step 21).
 * Template format — @see DigitalToolPageTemplate.jsx
 */
const eventBookPage = {
  slug: 'event-book',

  valueProposition:
    'Plan celebrations from start to finish — guests, budget, shopping, vendors, and expenses in one organised event register.',

  whyExists: {
    headline: 'Why Event Book?',
    eyebrow: 'Why Event Book?',
    everydayProblem:
      'A birthday list lives in one notebook. Vendor numbers sit in WhatsApp. Shopping items are on paper. Cousin calls about the guest count while you hunt for the caterer\'s quote. When the function ends, no one remembers what was spent or who gave what gift.',
    whyFamiliesNeedIt:
      'Event Book brings the full event into one place — information, guests, invitations, budget, shopping, vendors, expenses, and notes — so planning feels organised instead of scattered across chats and phone calls.',
  },

  whoShouldUse: {
    headline: 'Who Is It For?',
    audiences: [
      {
        title: 'Individuals',
        description: 'Plan personal celebrations — birthdays, anniversaries, and milestones — without losing details in memory.',
      },
      {
        title: 'Couples',
        description: 'Coordinate guest lists, budgets, and shopping together for functions you host as a pair.',
      },
      {
        title: 'Families',
        description: 'Manage weddings, housewarmings, and family gatherings where many people share planning duties.',
      },
      {
        title: 'Event Organizers',
        description: 'Keep vendor contacts, expenses, and timelines for each function in a structured register.',
      },
      {
        title: 'Community Groups',
        description: 'Organise religious events, society functions, and local gatherings with shared guest and expense records.',
      },
    ],
    situations: [],
  },

  features: [
    {
      icon: CalendarHeart,
      title: 'Event Information',
      description:
        'Store event name, date, venue, category, and expected guests — the basics in one profile before planning begins.',
    },
    {
      icon: Users,
      title: 'Guest Management',
      description:
        'Add guest families with members, contact details, and VIP flags — manage the full list in one register.',
    },
    {
      icon: Send,
      title: 'Invitation Tracking',
      description:
        'Send invitations and track attendance — know who is invited and who has confirmed without separate spreadsheets.',
    },
    {
      icon: Wallet,
      title: 'Budget Planning',
      description:
        'Set an event budget and compare planned amount against spending as costs are recorded through planning.',
    },
    {
      icon: Receipt,
      title: 'Expense Recording',
      description:
        'Log event expenses as they happen — see total spent against your budget on the event dashboard.',
    },
    {
      icon: Store,
      title: 'Vendor Management',
      description:
        'Save caterers, decorators, and other vendors with service type and charges — contacts ready when you need them.',
    },
    {
      icon: ShoppingCart,
      title: 'Shopping Lists',
      description:
        'Organise shopping by collection — track items, quantities, and purchases needed for the function.',
    },
    {
      icon: ClipboardList,
      title: 'Notes',
      description:
        'Add event notes and planning checklists — capture details that do not fit anywhere else on paper.',
    },
    {
      icon: ListOrdered,
      title: 'Event Timeline',
      description:
        'View shopping and preparation items on a timeline — tick off tasks as the event date approaches.',
    },
    {
      icon: CloudUpload,
      title: 'Backup & Restore',
      description:
        'Back up event data to the cloud or export to Excel — restore when you change phones so past events stay safe.',
    },
  ],

  howItWorks: [
    {
      title: 'Create Event',
      description: 'Start with name, date, venue, and category — set your budget and expected guest count upfront.',
    },
    {
      title: 'Add Guests',
      description: 'Build your guest list with families and members. Track invitations and attendance as responses come in.',
    },
    {
      title: 'Plan Budget',
      description: 'Set how much you plan to spend. Use the budget as a guide while vendors and purchases are added.',
    },
    {
      title: 'Manage Shopping',
      description: 'Create shopping collections and items — use the timeline view to prepare before the big day.',
    },
    {
      title: 'Track Expenses',
      description: 'Record costs and vendor charges as they happen. Watch spending against your planned budget.',
    },
    {
      title: 'Complete Event',
      description: 'Mark the event complete when it is done — summaries stay in your history for reference.',
    },
    {
      title: 'Keep Event History',
      description: 'Past events remain in Event Book — guests, gifts, and costs available when you need to look back.',
    },
  ],

  realLifeExamples: [
    {
      title: 'Birthday party',
      story:
        'For her son\'s tenth birthday, Kavita lists thirty families, tracks who confirmed, and logs decoration and cake expenses. One screen shows budget left before the party starts.',
    },
    {
      title: 'Wedding',
      story:
        'The Mehta family runs a three-day wedding in Event Book — separate vendor entries for catering and venue, guest families with member counts, and gift records per guest.',
    },
    {
      title: 'Anniversary',
      story:
        'Raj and Priya plan a silver anniversary dinner. Guest list, menu notes, and florist vendor sit in one event — no searching through last year\'s WhatsApp chats.',
    },
    {
      title: 'Baby shower',
      story:
        'A small function with twenty guests — shopping list for return gifts, checklist for setup tasks, and expenses logged the same evening.',
    },
    {
      title: 'Festival celebration',
      story:
        'Society Navratri organisers track community guests, pandal vendor costs, and shopping for prasad supplies — all under one event register.',
    },
    {
      title: 'Office function',
      story:
        'HR plans a year-end team dinner — vendor quote saved, expected headcount set, and expenses recorded for internal records after the event.',
    },
  ],

  screenshots: [
    {
      id: 'event-book',
      label: 'Event dashboard',
      caption:
        'Event overview with budget, guests, vendors, and spending — full planning in one place.',
    },
  ],

  connectedTools: [
    {
      slug: 'expenses-diary',
      integration:
        'When an event is completed, summary spending can flow into your household expense records — celebration costs sit alongside daily kharcha in BharatVow.',
    },
    {
      slug: 'budget-pocket',
      integration:
        'Event Book tracks per-function budget and spend. Budget Pocket helps with broader monthly household limits — use both when celebrations affect the month\'s plan.',
    },
    {
      slug: 'days-reminder',
      integration:
        'Important celebration dates stay in Event Book. Days Reminder helps you remember birthdays and anniversaries before planning even starts.',
    },
    {
      slug: 'grocery-bag',
      integration:
        'Event Book shopping lists cover function supplies. Grocery Bag handles regular market runs — use both when celebration prep and daily grocery happen in the same week.',
    },
  ],

  faq: [
    {
      q: 'Is Event Book only a guest list?',
      a: 'No. Event Book covers the full event — information, guests, invitations, budget, shopping, vendors, expenses, notes, and history — not just names on a list.',
    },
    {
      q: 'Can Event Book handle large weddings?',
      a: 'Yes. Guest families, vendors, shopping collections, and expenses scale with your function size.',
    },
    {
      q: 'Can I track gifts given and received?',
      a: 'Yes. Record gifts per guest — cash or item — with optional notes for each entry.',
    },
    {
      q: 'Does Event Book connect to Budget Pocket?',
      a: 'When you complete an event, summary spending can sync to Budget Pocket so celebration costs reflect in your household budget records.',
    },
    {
      q: 'Can I back up my events?',
      a: 'Yes. Cloud backup and Excel export help you keep event data safe when you change phones.',
    },
    {
      q: 'Is Event Book a payment or ticketing app?',
      a: 'No. Event Book is for planning and record keeping. It does not process payments, sell tickets, or connect to banks.',
    },
  ],

  seo: {
    title: 'Event Book | BharatVow Digital Life',
    metaDescription:
      'Event Book in BharatVow — plan weddings, birthdays, and functions with guests, budget, vendors, shopping, and expenses in one register. Not payments or banking.',
    keywords:
      'Event Book, BharatVow, wedding planning app India, event guest list, function organizer, celebration planning, digital life organizer',
    ogTitle: 'Event Book — Plan Celebrations in One Place | BharatVow',
    ogDescription:
      'Manage guests, budget, vendors, shopping, and event expenses in BharatVow. Complete event planning — your complete digital life organizer.',
  },

  finalCta: {
    title: 'Plan your next celebration with less chaos',
    description:
      'Download BharatVow and explore all Digital Tools with a 7-day free trial. See Pricing for Monthly and Yearly plans.',
    secondaryLabel: 'Explore Trip Ledger',
    secondaryTo: '/digital-life/trip-ledger',
  },

  sectionTitles: {
    useCases: 'Everyday Use Cases',
    worksWith: 'Works With',
  },
};

export default eventBookPage;
