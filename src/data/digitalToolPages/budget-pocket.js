import {
  Wallet,
  LayoutGrid,
  PieChart,
  Gauge,
  CalendarRange,
  BarChart3,
  CloudUpload,
} from 'lucide-react';

/**
 * Budget Pocket — Digital Tool page content (Step 19).
 * Template format — @see DigitalToolPageTemplate.jsx
 */
const budgetPocketPage = {
  slug: 'budget-pocket',

  valueProposition:
    'Plan household spending by category and see how much budget remains — before the month quietly slips away.',

  whyExists: {
    headline: 'Why Budget Pocket?',
    eyebrow: 'Why Budget Pocket?',
    everydayProblem:
      'Salary arrives and you mean to plan — grocery, fuel, school fees, a little for outings. By mid-month, small spends add up and you are not sure what is left. Without a simple plan, overspending feels sudden even when it was building all along.',
    whyFamiliesNeedIt:
      'Budget Pocket helps you set category limits, record spending against them, and see remaining budget at a glance. It is planning and tracking — not payments, not a wallet, and not banking. You stay in control of where you intended to spend.',
  },

  whoShouldUse: {
    headline: '',
    audiences: [],
    situations: [],
  },

  features: [
    {
      icon: Wallet,
      title: 'Budget Creation',
      description:
        'Set up budget envelopes for the month — name each one, choose a period, and decide how much you plan to allocate.',
    },
    {
      icon: LayoutGrid,
      title: 'Budget Categories',
      description:
        'Organise envelopes by category — grocery, fuel, education, festivals, and more — so your plan matches real life.',
    },
    {
      icon: PieChart,
      title: 'Spending Overview',
      description:
        'See how much has been spent in each envelope compared to what you planned — one dashboard for the whole month.',
    },
    {
      icon: Gauge,
      title: 'Remaining Budget',
      description:
        'Each envelope shows what is left — or if you have gone over — so you can adjust before the month ends.',
    },
    {
      icon: CalendarRange,
      title: 'Monthly Tracking',
      description:
        'Track budgets by monthly period — start fresh each cycle while keeping your category structure in place.',
    },
    {
      icon: BarChart3,
      title: 'Reports',
      description:
        'Review spending patterns with built-in reports — understand where your planned budget actually went.',
    },
    {
      icon: CloudUpload,
      title: 'Backup & Restore',
      description:
        'Back up your budget data to the cloud and restore when you change phones — your plans stay with you.',
    },
  ],

  howItWorks: [
    {
      title: 'Create Budget',
      description: 'Start a monthly budget and set the overall plan for how you want to allocate household money.',
    },
    {
      title: 'Assign Categories',
      description: 'Add envelopes for grocery, transport, bills, and other categories — each with its own limit.',
    },
    {
      title: 'Record Expenses',
      description: 'Log spending against the right envelope as purchases happen — the balance updates automatically.',
    },
    {
      title: 'Monitor Remaining Budget',
      description: 'Open the dashboard anytime to see how much is left in each category before you spend again.',
    },
    {
      title: 'Review Monthly Summary',
      description: 'Use reports at month-end to see plan vs actual — then adjust next month with clearer numbers.',
    },
  ],

  realLifeExamples: [
    {
      title: 'Monthly household planning',
      story:
        'The Patels set envelopes for rent, grocery, and school fees at the start of each month. When grocery is nearly full, they know to cook more at home this week — no surprise at month-end.',
    },
    {
      title: 'Student monthly budget',
      story:
        'Arjun allocates a fixed amount for food, travel, and stationery. He logs small canteen spends in the food envelope and checks what is left before a weekend outing.',
    },
    {
      title: 'Personal spending control',
      story:
        'Neha caps dining out and online shopping in separate envelopes. When one bar turns red, she pauses — the reminder is visual, not a lecture from anyone else.',
    },
    {
      title: 'Festival planning',
      story:
        'Before Diwali, Meera creates a festival envelope for sweets, gifts, and decorations. She tracks each purchase against the limit so celebration spending stays within plan.',
    },
    {
      title: 'Vacation budgeting',
      story:
        'Before a family trip, Rohan sets a travel envelope for tickets, stay, and food on the road. Daily spends go in as they travel — he always knows how much trip budget remains.',
    },
  ],

  screenshots: [
    {
      id: 'budget-pocket',
      label: 'Category envelopes & balances',
      caption:
        'Each envelope shows planned budget, spending, and what remains — all on one dashboard.',
    },
  ],

  connectedTools: [
    {
      slug: 'expenses-diary',
      integration:
        'Budget Pocket sets your plan by category. Expenses Diary logs daily income and spending — use both to compare what you planned with what actually happened.',
    },
    {
      slug: 'smart-khata',
      integration:
        'Smart Khata tracks lend-and-borrow with people. Budget Pocket tracks your planned household categories — together they cover different parts of everyday money records.',
    },
    {
      slug: 'trip-ledger',
      integration:
        'Plan a trip envelope in Budget Pocket, then use Trip Ledger to split group travel costs fairly when you are back — plan first, settle details later.',
    },
  ],

  faq: [
    {
      q: 'Is Budget Pocket a payment app or wallet?',
      a: 'No. Budget Pocket is for planning and tracking budgets only. It does not move money, link to banks, or process payments.',
    },
    {
      q: 'How is Budget Pocket different from Expenses Diary?',
      a: 'Budget Pocket sets limits by category and shows what is left. Expenses Diary is a daily log of income and expenses. Many people use both — plan in Budget Pocket, log details in Expenses Diary.',
    },
    {
      q: 'Can I set different categories for different needs?',
      a: 'Yes. Create separate envelopes for grocery, fuel, education, festivals, and any category that matters to your household.',
    },
    {
      q: 'Does Budget Pocket show when I overspend?',
      a: 'Yes. When spending in an envelope exceeds its planned amount, the dashboard shows you are over budget in that category.',
    },
    {
      q: 'Can I use Budget Pocket offline?',
      a: 'Yes. Budget data is stored on your device for everyday use. Optional cloud backup helps when you change phones.',
    },
    {
      q: 'Are there reports for monthly review?',
      a: 'Yes. Built-in reports help you review spending against your plan at the end of the month.',
    },
  ],

  seo: {
    title: 'Budget Pocket | BharatVow Digital Life',
    metaDescription:
      'Budget Pocket in BharatVow — plan household budgets by category, track spending, and see remaining budget. Simple budgeting, not payments or banking.',
    keywords:
      'Budget Pocket, BharatVow, household budget app India, monthly budget planner, personal budget tracking, digital life organizer',
    ogTitle: 'Budget Pocket — Plan & Track Your Budget | BharatVow',
    ogDescription:
      'Set category budgets, record expenses, and see what remains each month in BharatVow. Practical planning — not a wallet or payment app.',
  },

  finalCta: {
    title: 'Plan your month with clearer numbers',
    description:
      'Download BharatVow and explore all Digital Tools with a 7-day free trial. See Pricing for Monthly and Yearly plans.',
    secondaryLabel: 'Explore Expenses Diary',
    secondaryTo: '/digital-life/expenses-diary',
  },

  sectionTitles: {
    useCases: 'Everyday Use Cases',
    worksWith: 'Works With',
  },
};

export default budgetPocketPage;
