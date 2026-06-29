import {
  BookUser,
  ArrowLeftRight,
  History,
  Search,
  Share2,
  FileSpreadsheet,
  CloudUpload,
} from 'lucide-react';

/**
 * Smart Khata — Digital Tool page content (Step 18).
 * Template format — @see DigitalToolPageTemplate.jsx
 */
const smartKhataPage = {
  slug: 'smart-khata',

  valueProposition:
    'Keep personal lend-and-borrow records clear — one account per person, with a running balance you maintain from your own entries.',

  whyExists: {
    headline: 'Why Smart Khata?',
    eyebrow: 'Why Smart Khata?',
    everydayProblem:
      'You borrow from a friend before a trip. You lend to a relative until salary day. Your regular kirana tab builds up quietly. Then someone asks — kitna baaki hai? — and the answer lives in a torn notebook, a old WhatsApp chat, or nowhere at all.',
    whyFamiliesNeedIt:
      'Smart Khata is for personal account records — BharatVow does not process transactions or move funds. Add dated lend and borrow entries, see the balance per person, and look back at history whenever you need clarity.',
  },

  whoShouldUse: {
    headline: '',
    audiences: [],
    situations: [],
  },

  features: [
    {
      icon: BookUser,
      title: 'Personal Account Records',
      description:
        'Create a separate record for each person — friend, relative, or regular shop contact — with their running balance in one view.',
    },
    {
      icon: ArrowLeftRight,
      title: 'Lend & Borrow Entries',
      description:
        'Log each lend or borrow with a date and note. Every entry updates the balance so nothing relies on memory alone.',
    },
    {
      icon: History,
      title: 'Entry History',
      description:
        'Scroll through dated entries for any account — see what was added, when, and how the balance changed over time.',
    },
    {
      icon: Search,
      title: 'Search Records',
      description:
        'Find accounts or entries quickly when you have many contacts or a long history to look through.',
    },
    {
      icon: Share2,
      title: 'Share Records',
      description:
        'Share account summaries or entry history when both sides need the same picture — without rewriting the khata by hand.',
    },
    {
      icon: FileSpreadsheet,
      title: 'Export Records',
      description:
        'Export your khata to Excel for your own backup or personal records — a copy you control outside the app.',
    },
    {
      icon: CloudUpload,
      title: 'Backup & Restore',
      description:
        'Optional cloud backup when you enable it and restore when you change phones — your personal records stay with you.',
    },
  ],

  howItWorks: [
    {
      title: 'Create Account',
      description: 'Add a person or contact — friend, family member, or local shop — as a personal account in Smart Khata.',
    },
    {
      title: 'Add Entry',
      description: 'Record a lend or borrow with the amount, date, and an optional note. The balance updates automatically.',
    },
    {
      title: 'Track Balance',
      description: 'Open any account to see how much is owed either way — no mental maths at month-end.',
    },
    {
      title: 'View History',
      description: 'Review every past entry when someone asks for details or when you want to double-check a record.',
    },
    {
      title: 'Share When Needed',
      description: 'Send a summary or export a copy when the other person should see the same record.',
    },
  ],

  realLifeExamples: [
    {
      title: 'Borrowing from a friend',
      story:
        'Ravi borrowed ₹2,000 before a wedding trip. Each partial return goes in as an entry — when his friend asks how much is left, Ravi opens the account and reads the balance. No awkward guessing.',
    },
    {
      title: 'Family lend-and-borrow',
      story:
        'Priya lent her brother an amount for exam fees. Smart Khata keeps one clear account between them — dated entries, no mix-up with grocery or rent notes on paper.',
    },
    {
      title: 'Local shop account',
      story:
        'Geeta runs a small kirana. Regular customers have their own accounts. Month-end balance is on one screen — she exports to Excel for her own filing, not for any fund transfer or billing.',
    },
    {
      title: 'Small daily balance summaries',
      story:
        'Flatmates split chai and snacks through the week. One person logs small lends and borrows. Before anyone moves out, the running total closes out the last rupees fairly.',
    },
  ],

  screenshots: [
    {
      id: 'smart-khata',
      label: 'Account list & balances',
      caption:
        'Each contact has a running balance — open any account to add entries or review history.',
    },
  ],

  connectedTools: [
    {
      slug: 'expenses-diary',
      integration:
        'Khata tracks what others owe you or you owe them. Expenses Diary tracks your own daily spending — use both when household spending flows in different directions.',
    },
    {
      slug: 'budget-pocket',
      integration:
        'When lend-and-borrow records affect your monthly plan, Budget Pocket helps you see what is left in your household categories alongside Smart Khata.',
    },
    {
      slug: 'days-reminder',
      integration:
        'Follow up on accounts around important dates — Days Reminder helps you remember birthdays and anniversaries when a gentle nudge matters.',
    },
  ],

  faq: [
    {
      q: 'Does Smart Khata process transactions or move funds?',
      a: 'No. Smart Khata is for personal lend-and-borrow record keeping only. BharatVow does not process transactions or move funds.',
    },
    {
      q: 'How is Smart Khata different from Expenses Diary?',
      a: 'Smart Khata tracks accounts with other people — who owes whom. Expenses Diary logs your own daily income and spending.',
    },
    {
      q: 'Can I use Smart Khata offline?',
      a: 'Yes. Entries are stored on your device for everyday use. Optional cloud backup helps when you change phones.',
    },
    {
      q: 'Can I export my khata records?',
      a: 'Yes. You can export accounts to Excel for your own personal backup or records.',
    },
    {
      q: 'Can I share an account with someone else?',
      a: 'Yes. You can share summaries and sync shared khata entries so both sides see the same record history.',
    },
    {
      q: 'Does Smart Khata work for shop or customer accounts?',
      a: 'Yes. Many people use one account per customer or contact — useful for kirana tabs and regular personal lend-and-borrow, not formal business accounting.',
    },
  ],

  seo: {
    title: 'Smart Khata | BharatVow Digital Life',
    metaDescription:
      'Smart Khata keeps personal lend-and-borrow records in BharatVow — dated entries, running balance per person, search, share, export, and backup. BharatVow does not process transactions or move funds.',
    keywords:
      'Smart Khata, BharatVow, personal khata app, lend borrow records, udhaar record keeping, Personal Digital Life Platform India',
    ogTitle: 'Smart Khata — Personal Lend & Borrow Records | BharatVow',
    ogDescription:
      'Record personal accounts, track balances, and keep lend-and-borrow history clear in BharatVow. Simple record keeping — BharatVow does not process transactions or move funds.',
  },

  finalCta: {
    title: 'Start keeping clear personal records',
    description:
      'Download BharatVow and explore all Digital Tools with a 7-day free trial. See Pricing for Monthly and Yearly plans.',
    secondaryLabel: 'Explore Budget Pocket',
    secondaryTo: '/digital-life/budget-pocket',
  },

  sectionTitles: {
    useCases: 'Everyday Use Cases',
    worksWith: 'Works With',
  },
};

export default smartKhataPage;
