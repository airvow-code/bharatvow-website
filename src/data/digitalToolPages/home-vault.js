import {
  Home,
  Receipt,
  CalendarClock,
  Wrench,
  Cable,
  MapPin,
  History,
  BarChart3,
  CloudUpload,
} from 'lucide-react';

/**
 * Home Vault — Digital Tool page content (Step 24).
 * Template format — @see DigitalToolPageTemplate.jsx
 */
const homeVaultPage = {
  slug: 'home-vault',

  featuresVariant: 'ecosystem',

  valueProposition:
    'Your complete home organization ecosystem — assets, bills, warranties, services, providers, and stored items in one secure vault.',

  whyExists: {
    headline: 'Why Home Vault?',
    eyebrow: 'Why Home Vault?',
    everydayProblem:
      'The AC warranty card is somewhere in a drawer. Last year\'s fridge bill cannot be found. You forgot when the geyser was last serviced. Festival decorations are stored but no one remembers which cupboard. The electrician\'s number is buried in an old chat. Household information lives in notebooks, messages, and memory — until something breaks and nobody can find the details.',
    whyFamiliesNeedIt:
      'Home Vault brings your home\'s digital records together — appliances and furniture, bills, due services, service providers, connection references, and item locations — so everyday home management stays organised instead of scattered.',
  },

  whoShouldUse: {
    headline: 'Who Is It For?',
    audiences: [
      {
        title: 'Individuals',
        description: 'Track your appliances, bills, and home records — even in a small flat or rented room.',
      },
      {
        title: 'Couples',
        description: 'Share home organisation duties — both know where bills, warranties, and service contacts live.',
      },
      {
        title: 'Families',
        description: 'Manage a full household — multiple appliances, providers, and stored items in one family vault.',
      },
      {
        title: 'Home Owners',
        description: 'Keep purchase records, warranties, and maintenance history for everything you own at home.',
      },
      {
        title: 'Tenants',
        description: 'Organise rental bills, connection references, and personal belongings without losing track when you move.',
      },
    ],
    situations: [],
  },

  realBenefits: [
    {
      title: 'Never Lose Important Bills',
      description:
        'Save home bills and purchase invoices in Bills & Price Book — find them when warranty or service questions come up.',
    },
    {
      title: 'Keep Every Asset Organized',
      description:
        'Register appliances and furniture with purchase date, warranty, and service schedule — one register for your home.',
    },
    {
      title: 'Track Warranty Periods',
      description:
        'Warranty expiry appears on the Home Vault dashboard — know which appliances need attention before coverage ends.',
    },
    {
      title: 'Never Miss Services',
      description:
        'Due Services tracks upcoming and overdue maintenance — AC servicing, chimney cleaning, and more on your radar.',
    },
    {
      title: 'Store Everything Securely',
      description:
        'Bills, asset details, provider contacts, and connection numbers stay on your phone with optional cloud backup.',
    },
    {
      title: 'Easily Find Stored Items',
      description:
        'Find My Stuff remembers where documents, keys, festival items, and valuables are kept at home.',
    },
  ],

  features: [
    {
      icon: Home,
      title: 'Home Assets',
      description:
        'Register appliances, furniture, and electronics with purchase details, warranty dates, and service frequency.',
      problemSolved:
        'No more guessing when you bought the washing machine or whether the warranty is still valid.',
      screenshotId: 'home-vault',
    },
    {
      icon: Receipt,
      title: 'Bills & Price Book',
      description:
        'Record home bills and purchase invoices — electricity, water, appliance costs, and price references in one register.',
      problemSolved:
        'Bills no longer disappear in drawers — amounts and dates stay searchable when you need them.',
    },
    {
      icon: CalendarClock,
      title: 'Due Services',
      description:
        'Schedule maintenance from your assets — track due dates, overdue services, and completion in one flow.',
      problemSolved:
        'Forgotten AC servicing and missed maintenance become visible before they become expensive problems.',
    },
    {
      icon: Wrench,
      title: 'Service Providers',
      description:
        'Save trusted electricians, plumbers, and technicians with contact details — call or message when needed.',
      problemSolved:
        'The right repair contact is ready on your phone instead of buried in old messages.',
    },
    {
      icon: Cable,
      title: 'Connections',
      description:
        'Store utility account numbers — electricity, water, gas, broadband, DTH, and society references in one place.',
      problemSolved:
        'Consumer numbers and connection details are findable when recording bills or raising complaints.',
    },
    {
      icon: MapPin,
      title: 'Find My Stuff',
      description:
        'Record where important items are stored — documents, jewelry, keys, festival items, and more.',
      problemSolved:
        'Stop searching every cupboard — know exactly where the passport or Diwali lights are kept.',
    },
    {
      icon: History,
      title: 'Service History',
      description:
        'Log completed maintenance with date, cost, provider, and notes — a full repair record per asset.',
      problemSolved:
        'Past service visits stay on record — useful when something fails again or you sell an appliance.',
    },
    {
      icon: BarChart3,
      title: 'Reports',
      description:
        'Review warranty status, bill summaries, and service records — household insights from your Home Vault data.',
      problemSolved:
        'Month-end review of home spending and maintenance without rebuilding numbers from memory.',
    },
    {
      icon: CloudUpload,
      title: 'Backup & Restore',
      description:
        'Back up Home Vault data to the cloud — restore when you change phones so years of home records stay safe.',
      problemSolved:
        'Household records survive a phone change — not lost when you upgrade or replace your device.',
    },
  ],

  howItWorks: [
    {
      title: 'Purchase Item',
      description: 'Buy a new appliance or furniture — note the purchase date and keep the bill handy.',
    },
    {
      title: 'Save Bill',
      description: 'Add the invoice to Bills & Price Book — amount, date, and category recorded for later reference.',
    },
    {
      title: 'Add Home Asset',
      description: 'Register the item in Home Assets with warranty period and service frequency if applicable.',
    },
    {
      title: 'Warranty Stored',
      description: 'Warranty dates appear on your dashboard — expiry visible before coverage runs out.',
    },
    {
      title: 'Due Service Reminder',
      description: 'Scheduled maintenance shows in Due Services — upcoming and overdue services stay on your radar.',
    },
    {
      title: 'Service Provider',
      description: 'Save the technician or service centre contact — ready when Due Services says it is time.',
    },
    {
      title: 'Complete Service History',
      description: 'Mark service done and log the visit — cost, date, and provider added to Service History.',
    },
    {
      title: 'Stay Organized',
      description: 'Search across assets, bills, providers, and stored items — your home ecosystem in one vault.',
    },
  ],

  realLifeExamples: [
    {
      title: 'Air conditioner',
      story:
        'The Sharma family registers their split AC with warranty and six-month service frequency. Due Services shows servicing due next week — technician contact saved in Service Providers.',
    },
    {
      title: 'Refrigerator',
      story:
        'Purchase bill saved in Bills & Price Book. When the compressor fails in year three, warranty status and original invoice are on the phone in minutes.',
    },
    {
      title: 'Washing machine',
      story:
        'Service History shows two past repairs with costs. The family compares before calling the same provider again — no guessing what was fixed last time.',
    },
    {
      title: 'Television',
      story:
        'New TV added as a Home Asset with purchase date. Extended warranty expiry appears on the dashboard two months before it ends.',
    },
    {
      title: 'Furniture',
      story:
        'Dining table registered with purchase amount and store name. Bill photo reference kept in Bills & Price Book for future claims.',
    },
    {
      title: 'Important documents',
      story:
        'Passports and property papers logged in Find My Stuff — stored in the bedroom almirah, top shelf. No panic search before a trip.',
    },
    {
      title: 'Kitchen appliances',
      story:
        'Mixer, microwave, and chimney each have asset entries. Chimney cleaning due date tracked — overdue alert prompts a call to the saved provider.',
    },
    {
      title: 'Electronics',
      story:
        'Laptop and router in Home Assets. Broadband consumer number in Connections — ready when the bill record utility asks for the account ID.',
    },
  ],

  screenshots: [
    {
      id: 'home-vault',
      label: 'Home Vault dashboard',
      caption:
        'Home Vault hub with quick status, search, and access to assets, bills, due services, providers, connections, and Find My Stuff.',
    },
  ],

  connectedTools: [
    {
      slug: 'expenses-diary',
      integration:
        'When you record a bill or completed service in Home Vault, spending can flow into Expenses Diary — home maintenance costs sit alongside daily household kharcha.',
    },
    {
      slug: 'budget-pocket',
      integration:
        'Home bills and service costs affect your monthly plan. Budget Pocket sets category limits — Home Vault tracks what your home actually costs to run.',
    },
    {
      slug: 'days-reminder',
      integration:
        'Due dates and bill reminders live in Home Vault. Days Reminder helps you remember warranty expiry, service dates, and other home milestones.',
    },
    {
      slug: 'link-vault',
      integration:
        'Save appliance manual links, warranty portal URLs, and store websites in Link Vault — Home Vault holds the asset and bill records they relate to.',
    },
  ],

  faq: [
    {
      q: 'Is Home Vault only for storing household information?',
      a: 'No. Home Vault is a connected ecosystem — assets, bills, due services, providers, connections, item locations, service history, and reports work together, not as isolated lists.',
    },
    {
      q: 'Can Home Vault track appliance warranties?',
      a: 'Yes. Add assets with warranty dates — expiring warranties appear on the Home Vault dashboard for quick review.',
    },
    {
      q: 'Does Home Vault connect to Expenses Diary?',
      a: 'Yes. When you save certain bills or completed services, Home Vault can create expense entries in Expenses Diary so home costs appear in your daily spending records.',
    },
    {
      q: 'Can I find where items are stored at home?',
      a: 'Yes. Find My Stuff lets you record item names and storage locations — documents, keys, festival items, and more.',
    },
    {
      q: 'Can I back up my Home Vault data?',
      a: 'Yes. Cloud backup helps you restore home records when you change phones.',
    },
    {
      q: 'Does Home Vault process bill records or move funds?',
      a: 'No. Home Vault is for organising home records and maintenance. BharatVow does not process transactions or move funds on your behalf.',
    },
  ],

  relatedArticles: [
    {
      slug: 'home-inventory-checklist',
      title: 'Home Inventory Checklist',
      description: 'A practical list of what to register when organising your household — coming soon on the BharatVow blog.',
    },
    {
      slug: 'appliance-warranty-guide',
      title: 'Appliance Warranty Guide',
      description: 'How to track warranties and know when coverage is about to expire — coming soon.',
    },
    {
      slug: 'home-maintenance-tips',
      title: 'Home Maintenance Tips',
      description: 'Simple habits for keeping appliances and home systems serviced on time — coming soon.',
    },
    {
      slug: 'organizing-household-records',
      title: 'Organizing Household Records',
      description: 'Where to start when moving bills, contacts, and asset details off paper — coming soon.',
    },
  ],

  seo: {
    title: 'Home Vault | BharatVow Digital Life',
    metaDescription:
      'Home Vault in BharatVow — organise home assets, bills, warranties, due services, providers, and stored items in one ecosystem. BharatVow does not process transactions or move funds.',
    keywords:
      'Home Vault, BharatVow, home inventory app India, appliance warranty tracker, household organizer, home maintenance records, digital life organizer',
    ogTitle: 'Home Vault — Your Complete Home Organization Ecosystem | BharatVow',
    ogDescription:
      'Manage assets, bills, services, providers, and Find My Stuff in BharatVow. Complete home organisation — your complete digital life organizer.',
  },

  finalCta: {
    title: 'Organise your home with less stress and fewer lost details',
    description:
      'Download BharatVow and explore all Digital Tools with a 7-day free trial. See Pricing for Monthly and Yearly plans.',
    secondaryLabel: 'Explore Days Reminder',
    secondaryTo: '/digital-life/days-reminder',
  },

  sectionTitles: {
    features: 'Everything Inside Home Vault',
    featuresEyebrow: 'Home ecosystem',
    featuresDescription:
      'Eight connected areas plus backup — each solves a specific household organisation problem.',
    howItWorks: 'Connected Home Workflow',
    howItWorksEyebrow: 'How it connects',
    howItWorksDescription:
      'From purchase to service history — see how Home Vault features work together in everyday home life.',
    useCases: 'Everyday Use Cases',
    worksWith: 'Works With',
    realBenefits: 'Real Benefits',
    relatedArticles: 'Related Articles',
  },
};

export default homeVaultPage;
