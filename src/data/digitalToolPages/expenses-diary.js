import {
  NotebookPen,
  LayoutGrid,
  Search,
  CalendarRange,
  BarChart3,
  CloudUpload,
} from 'lucide-react';

/**
 * Expenses Diary — Digital Tool page content (Step 20).
 * Template format — @see DigitalToolPageTemplate.jsx
 */
const expensesDiaryPage = {
  slug: 'expenses-diary',

  valueProposition:
    'Log daily expenses and income in one diary — so you always know where your spending went this month.',

  whyExists: {
    headline: 'Why Expenses Diary?',
    eyebrow: 'Why Expenses Diary?',
    everydayProblem:
      'A chai here, auto fare there, cash to the kirana walla — by evening you forget half of it. Month-end arrives and the salary is gone, but you cannot explain where. Paper notes get lost. Account transfer alerts show big amounts, not the small daily kharcha that actually adds up.',
    whyFamiliesNeedIt:
      'Expenses Diary is for recording and reviewing everyday spending — BharatVow does not process transactions or move funds. Add entries with categories, search your history, and see monthly totals so daily spending awareness becomes a habit, not a guess.',
  },

  whoShouldUse: {
    headline: '',
    audiences: [],
    situations: [],
  },

  features: [
    {
      icon: NotebookPen,
      title: 'Daily Expense Entries',
      description:
        'Quickly log expenses and income as they happen — amount, date, category, and an optional note for context.',
    },
    {
      icon: LayoutGrid,
      title: 'Categories',
      description:
        'Organise entries by category — grocery, transport, bills, dining, and more — so spending is grouped meaningfully.',
    },
    {
      icon: Search,
      title: 'Search & Filters',
      description:
        'Find past entries by keyword, filter by type or date range, and review exactly what you need without scrolling endlessly.',
    },
    {
      icon: CalendarRange,
      title: 'Monthly Overview',
      description:
        'See income and expenses grouped by month — understand totals at a glance before the month closes.',
    },
    {
      icon: BarChart3,
      title: 'Reports',
      description:
        'Generate entry reports from your filtered entries — useful for personal review and record keeping.',
    },
    {
      icon: CloudUpload,
      title: 'Backup & Restore',
      description:
        'Optional cloud backup when you enable it, or export to Excel — restore when you change phones so years of entries stay safe.',
    },
  ],

  howItWorks: [
    {
      title: 'Add Expense',
      description: 'Open Expenses Diary and record a spend — enter the amount, pick the date, and add a note if helpful.',
    },
    {
      title: 'Choose Category',
      description: 'Assign a category so the entry lands in the right group — grocery, fuel, office, festival, and more.',
    },
    {
      title: 'Save Entry',
      description: 'Save to your diary on your phone. Entries stay available offline for everyday use.',
    },
    {
      title: 'View Monthly Summary',
      description: 'Switch to the month view to see totals — how much went out, what came in, and the balance of the period.',
    },
    {
      title: 'Understand Spending Habits',
      description: 'Use search, filters, and reports to spot patterns — where spending goes most often and what to plan for next month.',
    },
  ],

  realLifeExamples: [
    {
      title: 'Household expenses',
      story:
        'Sunita logs grocery, milk, and vegetable runs the same day they happen. At month-end she opens the summary and sees household kharcha clearly — no reconstructing from memory.',
    },
    {
      title: 'Office expenses',
      story:
        'Vikram tracks client lunch and travel reimbursements in separate categories. When accounts ask for a breakdown, he filters the month and shares a report from his own records.',
    },
    {
      title: 'Personal spending',
      story:
        'Ananya caps impulse buys by logging every purchase the same evening. Seeing the week add up on screen is enough to pause before the next online order.',
    },
    {
      title: 'Festival expenses',
      story:
        'During Diwali, the Sharma family uses a festival category for sweets, lights, and gifts. One diary shows celebration spending without mixing it into regular grocery entries.',
    },
    {
      title: 'Travel expenses',
      story:
        'On a work trip, Rahul logs daily meals and cab fares in Expenses Diary. Back home, Trip Ledger handles group splits — his personal trip kharcha stays in the diary.',
    },
  ],

  screenshots: [
    {
      id: 'expenses-diary',
      label: 'Daily expense diary',
      caption:
        'Income and expense entries grouped by date — categories and amounts in one clear view.',
    },
  ],

  connectedTools: [
    {
      slug: 'budget-pocket',
      integration:
        'Budget Pocket sets category limits for the month. Expenses Diary logs what you actually spent — compare plan vs reality side by side in BharatVow.',
    },
    {
      slug: 'smart-khata',
      integration:
        'Smart Khata tracks lend-and-borrow with people. Expenses Diary tracks your own daily spending — both keep different spending records organised.',
    },
    {
      slug: 'trip-ledger',
      integration:
        'Use Trip Ledger for shared group trip costs. Expenses Diary keeps your personal daily spending separate — plan the trip, log your own kharcha here.',
    },
    {
      slug: 'home-vault',
      integration:
        'When home bills are recorded in Home Vault, you can sync selected bill entries into Expenses Diary — one monthly view for household spending.',
    },
  ],

  faq: [
    {
      q: 'Does Expenses Diary process transactions or move funds?',
      a: 'No. Expenses Diary is for recording and reviewing expenses and income. BharatVow does not process transactions or move funds.',
    },
    {
      q: 'How is Expenses Diary different from Budget Pocket?',
      a: 'Budget Pocket sets planned limits by category. Expenses Diary is your daily log of what you actually spent and earned. Many people use both together.',
    },
    {
      q: 'Can I log both expenses and income?',
      a: 'Yes. Add expense entries for spending and income entries when salary or other income arrives — both appear in your monthly summary.',
    },
    {
      q: 'Can I search old entries?',
      a: 'Yes. Search by keyword and filter by type or date range to find specific entries in your history.',
    },
    {
      q: 'Does Expenses Diary work offline?',
      a: 'Yes. Entries are stored on your device. Optional cloud backup and Excel export help when you change phones.',
    },
    {
      q: 'Can home bills from Home Vault appear here?',
      a: 'Yes. When configured, bill entries from Home Vault can sync into Expenses Diary so household bills sit alongside daily spending.',
    },
  ],

  seo: {
    title: 'Expenses Diary | BharatVow Digital Life',
    metaDescription:
      'Expenses Diary in BharatVow — log daily expenses and income, organise by category, and review monthly spending. Record keeping — BharatVow does not process transactions or move funds.',
    keywords:
      'Expenses Diary, BharatVow, daily expense tracker India, household expense log, personal spending diary, Personal Digital Life Platform',
    ogTitle: 'Expenses Diary — Track Daily Spending | BharatVow',
    ogDescription:
      'Record everyday expenses, search your history, and see monthly totals in BharatVow. Simple expense diary — BharatVow does not process transactions or move funds.',
  },

  finalCta: {
    title: 'See where your spending goes each day',
    description:
      'Download BharatVow and explore all Digital Tools with a 7-day free trial. See Pricing for Monthly and Yearly plans.',
    secondaryLabel: 'Explore Event Book',
    secondaryTo: '/digital-life/event-book',
  },

  sectionTitles: {
    useCases: 'Everyday Use Cases',
    worksWith: 'Works With',
  },
};

export default expensesDiaryPage;
