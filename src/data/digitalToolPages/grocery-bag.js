import {
  ShoppingCart,
  LayoutGrid,
  Package,
  CheckSquare,
  IndianRupee,
  History,
  CloudUpload,
} from 'lucide-react';

/**
 * Grocery Bag — Digital Tool page content (Step 26).
 * Template format — @see DigitalToolPageTemplate.jsx
 */
const groceryBagPage = {
  slug: 'grocery-bag',

  valueProposition:
    'Plan grocery shopping from list to shopping completion — quantities, prices, shared lists, and shopping history in one grocery planning organizer.',

  whyExists: {
    headline: 'Why Grocery Bag?',
    eyebrow: 'Why Grocery Bag?',
    everydayProblem:
      'The list stayed on the kitchen counter. At the kirana you bought atta twice and forgot dal. No one remembered what rice cost last month. Festival shopping turned into three trips because items were not planned together. Grocery bills pile up with no clear record of what the household actually spent.',
    whyFamiliesNeedIt:
      'Grocery Bag helps you plan before you leave home — build lists with categories and quantities, share with family, check items off as you shop, record prices, and review past lists — so grocery runs are organised instead of rushed and repetitive.',
  },

  whoShouldUse: {
    headline: 'Who Is It For?',
    audiences: [
      {
        title: 'Individuals',
        description: 'Plan weekly market runs with a list on your phone — check items off and track what you spent.',
      },
      {
        title: 'Couples',
        description: 'One person builds the list at home, the other shops with the shared list — no duplicate buys.',
      },
      {
        title: 'Families',
        description: 'Manage household grocery planning — multiple lists, categories, and shopping history for the home.',
      },
      {
        title: 'Homemakers',
        description: 'Organise ration, kitchen restocking, and festival shopping with quantities and prices in one place.',
      },
      {
        title: 'Students',
        description: 'Simple shared lists for hostel or flat grocery runs — check off items and stay within budget.',
      },
    ],
    situations: [],
  },

  realBenefits: [
    {
      title: 'Never Forget Grocery Items',
      description:
        'Build your list before leaving home — check each item off at the store so nothing is missed on the trip.',
    },
    {
      title: 'Better Shopping Planning',
      description:
        'Plan quantities and categories upfront — one organised trip instead of return visits for forgotten items.',
    },
    {
      title: 'Track Grocery Expenses',
      description:
        'Record price per item and see list totals — know what a shopping round cost before you reach home.',
    },
    {
      title: 'Compare Previous Prices',
      description:
        'Review past lists with recorded prices — compare what atta, oil, or dal cost on earlier shopping rounds.',
    },
    {
      title: 'Reduce Wastage',
      description:
        'Plan quantities before buying — avoid duplicate purchases and overbuying items already at home.',
    },
    {
      title: 'Save Time During Shopping',
      description:
        'Walk the market with a ready list — share it with family and check items off without rewriting on paper.',
    },
  ],

  features: [
    {
      icon: ShoppingCart,
      title: 'Grocery Lists',
      description:
        'Create multiple shopping lists — weekly ration, festival stock, or one-off market runs — each with its own items.',
    },
    {
      icon: LayoutGrid,
      title: 'Item Categories',
      description:
        'Add items from product categories in the catalog — dal, rice, vegetables, dairy, and more for faster list building.',
    },
    {
      icon: Package,
      title: 'Quantity Planning',
      description:
        'Set quantity and unit per item — kilograms, litres, or pieces — so you buy the right amount at the store.',
    },
    {
      icon: CheckSquare,
      title: 'Shopping Status',
      description:
        'Check off items as you buy them — see what is pending and what is already in the bag during shopping.',
    },
    {
      icon: IndianRupee,
      title: 'Price Recording',
      description:
        'Enter price per item on the list — line totals and list summary update as you record what you spent.',
    },
    {
      icon: History,
      title: 'Purchase History',
      description:
        'Past shopping lists stay saved with dates — search and review previous trips to see what you bought and spent.',
    },
    {
      icon: CloudUpload,
      title: 'Backup & Restore',
      description:
        'Back up lists to the cloud or export to Excel — restore when you change phones so shopping history stays safe.',
    },
  ],

  howItWorks: [
    {
      title: 'Create Grocery List',
      description: 'Start a new list for this week, festival stock, or a quick kirana run — name it and begin adding items.',
    },
    {
      title: 'Add Items & Quantities',
      description: 'Pick from the product catalog or type custom items — set quantity, unit, and optional notes per entry.',
    },
    {
      title: 'Share with Family',
      description: 'Share the list as text through WhatsApp or messages — someone else can shop with the same plan.',
    },
    {
      title: 'Record Purchased Items',
      description: 'Check off each item as you buy it — the list shows what is done and what still needs to be picked up.',
    },
    {
      title: 'Track Prices',
      description: 'Enter price per item while shopping — see line totals and overall list spend on screen.',
    },
    {
      title: 'Review Shopping History',
      description: 'Completed lists remain in Grocery Bag — open past trips to compare items, quantities, and prices.',
    },
  ],

  realLifeExamples: [
    {
      title: 'Monthly grocery planning',
      story:
        'At the start of the month, Sunita builds a ration list — atta, dal, oil, and masala with quantities. One kirana trip, every item checked off, total spend recorded on the list.',
    },
    {
      title: 'Weekly shopping',
      story:
        'Every Sunday Raj shares the vegetable and milk list with his wife on WhatsApp. She shops from the shared list — no second trip for forgotten items.',
    },
    {
      title: 'Festival shopping',
      story:
        'Diwali prep needs sweets, dry fruits, and diyas on one list. Categories help build fast — prices logged so festival grocery spend is clear afterward.',
    },
    {
      title: 'Kitchen restocking',
      story:
        'Running low on spices and staples — a quick list from the catalog, quantities set, checked off in one market round after work.',
    },
    {
      title: 'Household essentials',
      story:
        'Soap, detergent, and cleaning supplies on a separate list from food — household essentials tracked without mixing into the weekly ration list.',
    },
    {
      title: 'Family shopping',
      story:
        'Mom creates the list at home. Dad duplicates it for next week\'s run. Checked items and recorded prices show what the family bought last time.',
    },
  ],

  screenshots: [
    {
      id: 'grocery-bag',
      label: 'Grocery lists dashboard',
      caption:
        'Shopping lists with items, check-off status, and totals — plan and track grocery runs in one place.',
    },
  ],

  connectedTools: [
    {
      slug: 'budget-pocket',
      integration:
        'Grocery Bag records what you spent on each list. Budget Pocket sets your monthly grocery envelope — use both to plan limits and track actual shopping totals.',
    },
    {
      slug: 'expenses-diary',
      integration:
        'List totals in Grocery Bag show per-trip grocery spend. Expenses Diary logs broader daily household kharcha — use both for shopping details and monthly expense records.',
    },
    {
      slug: 'event-book',
      integration:
        'Event Book shopping lists cover function supplies. Grocery Bag handles regular household market runs — use both when celebration prep and weekly grocery happen together.',
    },
  ],

  faq: [
    {
      q: 'Is Grocery Bag only a shopping checklist?',
      a: 'No. Grocery Bag covers list planning, categories, quantities, check-off while shopping, price recording, list sharing, and shopping history — not just tick boxes on a simple list.',
    },
    {
      q: 'Can I share a grocery list with my family?',
      a: 'Yes. Share a list as text through your phone\'s share options — family members can shop from the same item list.',
    },
    {
      q: 'Can Grocery Bag scan grocery bills?',
      a: 'No. Grocery Bag does not scan bills. You record item prices manually on the list while shopping or after you return.',
    },
    {
      q: 'Can I compare prices from past shopping trips?',
      a: 'Yes. Past lists keep item names and recorded prices — open previous lists to see what you recorded on earlier trips.',
    },
    {
      q: 'Can I back up my grocery lists?',
      a: 'Yes. Cloud backup and Excel export help you keep lists safe when you change phones.',
    },
    {
      q: 'Is Grocery Bag a delivery app that moves funds?',
      a: 'No. Grocery Bag is for planning and recording shopping. BharatVow does not process transactions or move funds, and it does not book delivery.',
    },
  ],

  relatedArticles: [
    {
      slug: 'monthly-grocery-planning-guide',
      title: 'Monthly Grocery Planning Guide',
      description: 'How to plan a month of household grocery in one organised routine — coming soon on the BharatVow blog.',
    },
    {
      slug: 'smart-grocery-shopping-tips',
      title: 'Smart Grocery Shopping Tips',
      description: 'Practical habits for fewer trips, less waste, and clearer spending at the kirana — coming soon.',
    },
    {
      slug: 'kitchen-inventory-management',
      title: 'Kitchen Inventory Management',
      description: 'Keeping staples, quantities, and restock timing under control at home — coming soon.',
    },
  ],

  seo: {
    title: 'Grocery Bag | BharatVow Digital Life',
    metaDescription:
      'Grocery Bag in BharatVow — plan grocery lists, track quantities and prices, share with family, and review shopping history. Grocery planning — not delivery; BharatVow does not process transactions or move funds.',
    keywords:
      'Grocery Bag, BharatVow, grocery list app India, shopping planner, household grocery organizer, kirana list app, digital life organizer',
    ogTitle: 'Grocery Bag — Complete Grocery Planning Organizer | BharatVow',
    ogDescription:
      'Plan lists, record prices, share with family, and review shopping history in BharatVow. Your complete digital life organizer.',
  },

  finalCta: {
    title: 'Shop smarter with a plan in your pocket',
    description:
      'Download BharatVow and explore all Digital Tools with a 7-day free trial. See Pricing for Monthly and Yearly plans.',
    secondaryLabel: 'Explore Link Vault',
    secondaryTo: '/digital-life/link-vault',
  },

  sectionTitles: {
    useCases: 'Everyday Use Cases',
    worksWith: 'Works With',
    realBenefits: 'Real Benefits',
    relatedArticles: 'Related Articles',
  },
};

export default groceryBagPage;
