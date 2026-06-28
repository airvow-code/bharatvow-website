/** Long-form module page content — sourced from docs/website/04_Modules.md */

export const MODULE_PAGES = {
  'smart-khata': {
    headline: 'Smart Khata',
    purpose:
      'Keep lend-and-borrow records clear — every credit and debit dated, with a running balance per person.',
    problemHeadline: 'Kitna udhaar baaki hai — yaad hi nahi.',
    problems: [
      'Paper khata tears and amounts get disputed',
      'Recovery turns awkward without clear records',
      'Shop credit and personal lending mixed in memory',
    ],
    features: [
      'Running balance per person or customer',
      'Dated credit and debit entries',
      'Works offline on your phone',
      'Excel export for your own records',
    ],
    example: {
      title: 'Geeta\u2019s kirana shop',
      story: 'Month-end balance on one screen — no calculator, no argument with regular customers.',
    },
    faq: [
      {
        q: 'Is Smart Khata the same as Expenses Diary?',
        a: 'No. Khata tracks lending and borrowing with others. Expenses Diary tracks your own daily spending.',
      },
      {
        q: 'Does Khata work offline?',
        a: 'Yes. Entries stay on your device for everyday use.',
      },
    ],
  },
  'budget-pocket': {
    headline: 'Budget Pocket',
    purpose:
      'Set household budget limits by category so you see what is left before the month quietly slips away.',
    problemHeadline: 'Mahine ka budget pehle hi khatam ho jata hai.',
    problems: [
      'Grocery and fuel eat the salary before you notice',
      'No clear picture of what is left mid-month',
      'Household spending scattered across memory and chats',
    ],
    features: [
      'Monthly limits by category',
      'See remaining budget before you overspend',
      'Pairs with Expenses Diary for plan vs reality',
      'Simple envelopes for grocery, fuel, and more',
    ],
    example: {
      title: 'Anil\u2019s grocery plan',
      story: 'He allots a monthly grocery limit — checks what is left before ordering online mid-month.',
    },
    faq: [
      {
        q: 'Does Budget Pocket track daily expenses?',
        a: 'Budget Pocket sets limits. Expenses Diary logs what you actually spent — use both together.',
      },
    ],
  },
  'expenses-diary': {
    headline: 'Expenses Diary',
    purpose:
      'Log daily income and expenses so you know where household spending actually went each month.',
    problemHeadline: 'Cash kharcha dikhta hi nahi.',
    problems: [
      'Small daily spends add up invisibly',
      'Home bills live in a different place than daily cash',
      'Month-end surprise when salary disappears',
    ],
    features: [
      'Quick daily income and expense log',
      'Monthly views of household spending',
      'Optional link from Home Vault bills',
      'Excel export for your records',
    ],
    example: {
      title: 'Meera\u2019s electricity bill',
      story: 'She pays via Home Vault and toggles sync — the same bill appears in her monthly expense view.',
    },
    faq: [
      {
        q: 'Can I track daily expenses?',
        a: 'Yes. Expenses Diary is your daily expense and income register inside BharatVow.',
      },
    ],
  },
  'event-book': {
    headline: 'Event Book',
    purpose:
      'Plan weddings, birthdays, and functions with guests, gifts, and costs in one register.',
    problemHeadline: 'Shaadi ki list teen WhatsApp groups me hai.',
    problems: [
      'Guest lists scattered across chats',
      'Gifts given and received forgotten',
      'Vendor and celebration costs hard to track',
    ],
    features: [
      'Guest list with confirmation status',
      'Gift records per guest',
      'Event budget — planned vs actual',
      'One register per celebration',
    ],
    example: {
      title: 'Meena\u2019s daughter\u2019s wedding',
      story: '200+ guests tracked in Event Book instead of three notebooks — gifts and costs in one place.',
    },
    faq: [
      {
        q: 'Can Event Book handle large weddings?',
        a: 'Yes. Guest lists, gifts, and costs scale with your function size.',
      },
    ],
  },
  'trip-ledger': {
    headline: 'Trip Ledger',
    purpose:
      'Record shared trip costs fairly and settle who owes whom in minutes after you return.',
    problemHeadline: 'Trip khatam — kaun kitna dega?',
    problems: [
      'Petrol, hotel, and food — everyone remembers differently',
      'Awkward group chats after holidays',
      'Work trip mileage tracked separately from personal spend',
    ],
    features: [
      'Shared trip expense log',
      'Fair split summary for the group',
      'Mileage records for work trips',
      'Excel export for trip records',
    ],
    example: {
      title: 'Rajasthan road trip',
      story: 'Four cousins return from Goa — settlement in five minutes, friendship intact.',
    },
    faq: [
      {
        q: 'Is Trip Ledger for monthly household spending?',
        a: 'No. Personal monthly spending belongs in Expenses Diary. Trip Ledger is for group trips.',
      },
    ],
  },
  'vehicle-vault': {
    headline: 'Vehicle Vault',
    purpose:
      'Keep RC, insurance, PUC, fuel, and service records ready for every vehicle you own.',
    problemHeadline: 'RC ghar pe tha jab zarurat padi.',
    problems: [
      'Insurance expiry forgotten until the fine arrives',
      'Service history lost between bike and car',
      'Papers at home when you need them on the road',
    ],
    features: [
      'Multiple vehicles supported',
      'RC, insurance, and PUC dates on your phone',
      'Fuel entries and mileage tracking',
      'Service history and running cost overview',
    ],
    example: {
      title: 'Traffic check',
      story: 'Amit opens RC and insurance in seconds — no panic search at home.',
    },
    faq: [
      {
        q: 'Can I manage multiple vehicles?',
        a: 'Yes. Vehicle Vault supports separate records for each car or bike in your household.',
      },
    ],
  },
  'home-vault': {
    headline: 'Home Vault',
    purpose:
      'One vault for household knowledge — assets, due services, bills, providers, and where you stored important items.',
    problemHeadline: 'Ghar sambhalna — yaad rakhna impossible lagta hai.',
    problems: [
      'Consumer numbers lost during a power cut',
      'AC and RO service forgotten until breakdown',
      'Passport and keys — kahan rakha?',
    ],
    features: [
      'Home assets with warranty dates',
      'Find My Stuff — where you kept important items',
      'Service provider contacts',
      'Connection references for bijli, gas, water',
      'Due services and service history',
      'Bills and household reports',
    ],
    example: {
      title: 'Pre-summer check',
      story: 'Two AC units flagged due for service — booked before peak heat, not after breakdown.',
    },
    faq: [
      {
        q: 'Can I store household information?',
        a: 'Yes. Home Vault covers appliances, bills, maintenance, providers, and stored-item notes.',
      },
    ],
  },
  'home-assets': {
    headline: 'Home Assets',
    purpose:
      'Register appliances and furniture with warranty dates — part of Home Vault.',
    problemHeadline: 'Warranty kab khatam hogi — pata hi nahi.',
    problems: [
      'Appliance papers scattered in drawers',
      'Warranty dates forgotten until something breaks',
      'No record of what you own and when you bought it',
    ],
    features: [
      'Appliance and furniture register',
      'Warranty expiry dates',
      'Purchase and model details',
      'Connected to Home Vault due services and reports',
    ],
    example: {
      title: 'Pre-summer check',
      story: 'See which appliances have warranties expiring before service season.',
    },
    faq: [
      {
        q: 'Is Home Assets separate from Home Vault?',
        a: 'Home Assets is inside Home Vault — a dedicated view for appliances and furniture records.',
      },
    ],
  },
  'days-reminder': {
    headline: 'Days Reminder',
    purpose:
      'See today\u2019s birthdays, anniversaries, and custom dates each morning.',
    problemHeadline: 'Birthday wish karna bhool gaya — phir awkward.',
    problems: [
      'Dates in contacts, chats, and memory — still missed',
      'Death anniversaries and milestones forgotten',
      'No calm morning view of who matters today',
    ],
    features: [
      'Today view each morning',
      'Birthdays and anniversaries every year',
      'Custom dates you choose',
      'Works alongside Event Book celebrations',
    ],
    example: {
      title: 'Lakshmi\u2019s week',
      story: 'Three relatives celebrate in one week — all flagged in Today\u2019s list before the morning rush.',
    },
    faq: [
      {
        q: 'Can I manage reminders?',
        a: 'Yes. Days Reminder surfaces birthdays, anniversaries, and custom dates when you open the app.',
      },
    ],
  },
  'grocery-bag': {
    headline: 'Grocery Bag',
    purpose:
      'Build market lists on your phone and check items off as you shop — one trip, no forgotten dal.',
    problemHeadline: 'List ghar pe reh gayi.',
    problems: [
      'Duplicate atta and forgotten dal',
      'Second trip to the kirana',
      'List on paper left at home',
    ],
    features: [
      'Categorised grocery lists',
      'Check off items as you buy',
      'Simple enough for anyone in your household',
      'Excel backup for list records',
    ],
    example: {
      title: 'Sunday bazaar',
      story: 'Kavita builds the list at home and checks every item off at the kirana in one round.',
    },
    faq: [
      {
        q: 'Can I organise grocery lists?',
        a: 'Yes. Grocery Bag is built for weekly market runs with categories and check-off.',
      },
    ],
  },
  'link-vault': {
    headline: 'Link Vault',
    purpose:
      'Save important URLs in collections before WhatsApp scrolls them away — free forever.',
    problemHeadline: 'Woh link WhatsApp me kho gayi.',
    problems: [
      'Recipes, job forms, and school links lost in chat',
      'No organised place for saved URLs',
      'Starting over on a new phone',
    ],
    features: [
      'Save links in named collections',
      'Free forever — no subscription',
      'Find saved links in two taps',
      'Excel export available',
    ],
    example: {
      title: 'Admission season',
      story: 'Every form link in one collection — found in two taps when the deadline arrives.',
    },
    faq: [
      {
        q: 'Is Link Vault really free?',
        a: 'Yes — no subscription required, forever.',
      },
    ],
  },
  'status-viewer': {
    headline: 'Status Viewer',
    purpose:
      'Conveniently view, save, and share status media that is already available on your device — free on Android.',
    problemHeadline: 'Status clips disappear before you can save or share them.',
    problems: [
      'Saved status media scattered across folders and apps',
      'Hard to find a clip again after it expires',
      'No simple place inside your everyday app toolkit',
    ],
    features: [
      'View status media already on your device',
      'Save clips you want to keep',
      'Share saved media when you need to',
      'Free on Android — no subscription required',
    ],
    example: {
      title: 'Daily routine',
      story: 'Open BharatVow, browse status media on your phone, and save the ones worth keeping.',
    },
    faq: [
      {
        q: 'Is Status Viewer on iPhone?',
        a: 'No — Status Viewer is free on Android only.',
      },
      {
        q: 'Does Status Viewer send messages or handle payments?',
        a: 'No. It only helps you view, save, and share status media already stored on your device.',
      },
    ],
  },
  'place-store': {
    headline: 'Place Store',
    purpose:
      'Save places you visit often — homestays, highway stops, and favourite shops with notes.',
    problemHeadline: 'Woh dhaba next trip pe yaad nahi aaya.',
    problems: [
      'Favourite stops forgotten between trips',
      'Addresses buried in old chats',
      'No notes for why a place mattered',
    ],
    features: [
      'Save places with personal notes',
      'Highway stops and homestays for next year',
      'Pairs with Trip Ledger for travel planning',
    ],
    example: {
      title: 'Highway stop',
      story: 'The family saves a dhaba near Jaipur — found instantly on the next road trip.',
    },
    faq: [
      {
        q: 'How is Place Store different from Trip Ledger?',
        a: 'Place Store saves locations with notes. Trip Ledger splits shared trip costs among a group.',
      },
    ],
  },
};

export function getModulePage(slug) {
  return MODULE_PAGES[slug] ?? null;
}

export function getModuleMeta(slug, name) {
  const page = MODULE_PAGES[slug];
  if (!page) return null;
  return {
    title: `${name} | BharatVow Digital Tools`,
    description: page.purpose,
  };
}
