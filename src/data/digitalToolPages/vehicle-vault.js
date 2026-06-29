import {
  Car,
  Fuel,
  Gauge,
  Wrench,
  BellRing,
  Shield,
  Wind,
  FileText,
  FolderOpen,
  Camera,
  Receipt,
  Store,
  ClipboardList,
  CloudUpload,
} from 'lucide-react';

/**
 * Vehicle Vault — Digital Tool page content (Step 23).
 * Template format — @see DigitalToolPageTemplate.jsx
 */
const vehicleVaultPage = {
  slug: 'vehicle-vault',

  valueProposition:
    'Your complete digital record book for every vehicle — documents, fuel, service, expenses, and history in one secure vault on your phone.',

  whyExists: {
    headline: 'Why Vehicle Vault?',
    eyebrow: 'Why Vehicle Vault?',
    everydayProblem:
      'Insurance renewal slips your mind until a fine arrives. PUC expiry catches you at a checkpoint. RC and policy papers sit at home when you need them on the road. Fuel slips pile up with no clear monthly total. Service bills disappear and you forget when the last oil change happened.',
    whyFamiliesNeedIt:
      'Vehicle Vault keeps every vehicle detail in one place — registration documents, insurance and PUC records, fuel logs, mileage, service history, expenses, and photos — so you never scramble for papers or lose track of what your vehicle actually costs to run.',
  },

  whoShouldUse: {
    headline: 'Who Is It For?',
    audiences: [
      {
        title: 'Individuals',
        description: 'Manage your bike or car — documents, fuel, and service records without a messy folder at home.',
      },
      {
        title: 'Families',
        description: 'Track multiple family vehicles — each with its own documents, expenses, and maintenance history.',
      },
      {
        title: 'Vehicle Owners',
        description: 'Anyone who drives and wants RC, insurance, PUC, and running costs organised on their phone.',
      },
      {
        title: 'Professionals',
        description: 'Keep work vehicle records, trip mileage, and expense history ready for personal review.',
      },
      {
        title: 'Small Business Owners',
        description: 'Manage commercial vehicles with fuel logs, service contacts, and expense summaries in one register.',
      },
    ],
    situations: [],
  },

  realBenefits: [
    {
      title: 'Track Renewals on Time',
      description:
        'Insurance and PUC expiry dates stay visible on your vehicle dashboard — with in-app reminders when renewal is due or overdue.',
    },
    {
      title: 'Complete Vehicle Records',
      description:
        'RC, insurance, PUC certificates, and Fastag details stored with documents — not scattered in drawers and WhatsApp.',
    },
    {
      title: 'Better Maintenance History',
      description:
        'Every service visit logged with date, cost, and service centre — know exactly when and where work was done.',
    },
    {
      title: 'Track Fuel Usage',
      description:
        'Log each fill-up with amount and odometer reading — see average mileage and monthly fuel spend at a glance.',
    },
    {
      title: 'Organize Documents',
      description:
        'Upload and save important vehicle documents on your phone — ready at a traffic check or renewal appointment.',
    },
    {
      title: 'Manage Multiple Vehicles',
      description:
        'Switch between bike, car, and commercial vehicles — each with its own complete record in one vault.',
    },
  ],

  features: [
    {
      icon: Car,
      title: 'Vehicle Information',
      description:
        'Add each vehicle with number, company, model, fuel type, and odometer — your digital garage starts here.',
    },
    {
      icon: Fuel,
      title: 'Fuel Log',
      description:
        'Record every fuel fill-up with date, amount, quantity, and odometer — build a clear fuel spending history.',
    },
    {
      icon: Gauge,
      title: 'Mileage Tracking',
      description:
        'Track odometer readings and average mileage from fuel entries — see how efficiently your vehicle runs.',
    },
    {
      icon: Wrench,
      title: 'Service History',
      description:
        'Log service visits with type, cost, date, and service centre — full maintenance history per vehicle.',
    },
    {
      icon: BellRing,
      title: 'Renewal Reminders',
      description:
        'See insurance and PUC expiry dates on the dashboard — in-app reminders when renewal is approaching or overdue.',
    },
    {
      icon: Shield,
      title: 'Insurance Records',
      description:
        'Save policy company, number, dates, and premium — attach insurance documents for quick reference.',
    },
    {
      icon: Wind,
      title: 'PUC Records',
      description:
        'Track pollution certificate issue date, validity, and amount — upload the PUC document to your vault.',
    },
    {
      icon: FileText,
      title: 'RC Details',
      description:
        'Store RC book information — owner name, registration date, RC number, and uploaded RC document.',
    },
    {
      icon: FolderOpen,
      title: 'Important Documents',
      description:
        'Keep RC, insurance certificate, PUC, and Fastag records in one documents section per vehicle.',
    },
    {
      icon: Camera,
      title: 'Vehicle Photos',
      description:
        'Save photos of your vehicle — useful for insurance claims, resale records, or personal reference.',
    },
    {
      icon: Receipt,
      title: 'Expense History',
      description:
        'Review fuel, service, and accessory spending — monthly and lifetime expense summaries on the dashboard.',
    },
    {
      icon: Store,
      title: 'Service Providers',
      description:
        'Save trusted service centres with name, address, and contact — pick them quickly when logging service.',
    },
    {
      icon: ClipboardList,
      title: 'Notes',
      description:
        'Add notes on vehicles, documents, and service entries — capture details that do not fit a standard field.',
    },
    {
      icon: CloudUpload,
      title: 'Backup & Restore',
      description:
        'Optional cloud backup when you enable it, or export to Excel — restore when you change phones so records stay safe.',
    },
  ],

  howItWorks: [
    {
      title: 'Add Vehicle',
      description: 'Register your bike, car, or commercial vehicle — enter number, make, model, and fuel type.',
    },
    {
      title: 'Save Documents',
      description: 'Upload RC, insurance, PUC, and Fastag details — important papers ready on your phone.',
    },
    {
      title: 'Record Fuel',
      description: 'Log each fill-up with amount and odometer reading — fuel history builds automatically.',
    },
    {
      title: 'Track Mileage',
      description: 'Watch average mileage and latest odometer reading update as fuel and service entries are added.',
    },
    {
      title: 'Log Service',
      description: 'Record each service visit with cost, date, and service centre — maintenance history stays complete.',
    },
    {
      title: 'Receive Reminder',
      description: 'Check renewal reminders for insurance and PUC expiry on the vehicle dashboard before dates pass.',
    },
    {
      title: 'Maintain Complete Vehicle History',
      description: 'Fuel, service, expenses, documents, and photos stay in Vehicle Vault — your long-term vehicle record book.',
    },
  ],

  realLifeExamples: [
    {
      title: 'Personal bike',
      story:
        'Ravi rides a daily commuter bike. Fuel logs show monthly petrol spend. PUC expiry appears on the dashboard two weeks before renewal — no last-minute rush.',
    },
    {
      title: 'Family car',
      story:
        'The Sharma family keeps their sedan in Vehicle Vault — insurance PDF, last service bill, and fuel history in one place. At a traffic check, RC opens from the phone in seconds.',
    },
    {
      title: 'Commercial vehicle',
      story:
        'A small delivery business tracks one tempo in Vehicle Vault — fuel costs, service visits, and expense summaries help review running costs each month.',
    },
    {
      title: 'Multiple vehicles',
      story:
        'Amit manages a bike and a car. He switches between vehicles in the app — each with separate documents, fuel logs, and service history.',
    },
    {
      title: 'Office vehicle',
      story:
        'Neha uses a company-assigned car for client visits. Trip mileage and fuel entries stay in her personal Vehicle Vault record for her own reference.',
    },
  ],

  screenshots: [
    {
      id: 'vehicle-vault',
      label: 'Vehicle dashboard',
      caption:
        'Vehicle overview with odometer, insurance and PUC expiry, fuel stats, and quick actions — your digital garage at a glance.',
    },
  ],

  connectedTools: [
    {
      slug: 'expenses-diary',
      integration:
        'Vehicle Vault tracks fuel, service, and vehicle-specific costs. Expenses Diary logs broader daily household spending — use both when vehicle kharcha and home kharcha need separate records.',
    },
    {
      slug: 'budget-pocket',
      integration:
        'Fuel and vehicle expenses affect your monthly plan. Budget Pocket sets category limits — Vehicle Vault shows what your vehicles actually cost to run.',
    },
    {
      slug: 'trip-ledger',
      integration:
        'Road trips often pair Trip Ledger for shared group travel costs with Vehicle Vault for fuel logs and mileage on your own vehicle.',
    },
    {
      slug: 'days-reminder',
      integration:
        'Insurance and PUC expiry dates live in Vehicle Vault. Days Reminder helps you remember renewal dates and other vehicle milestones before they arrive.',
    },
  ],

  faq: [
    {
      q: 'Is Vehicle Vault only a fuel log?',
      a: 'No. Vehicle Vault is a complete vehicle record book — documents, insurance, PUC, fuel, mileage, service history, expenses, photos, and backup — not just fuel entries.',
    },
    {
      q: 'Can I manage more than one vehicle?',
      a: 'Yes. Add multiple vehicles — bike, car, or commercial — and switch between them. Each keeps its own documents and history.',
    },
    {
      q: 'Can I store RC and insurance documents?',
      a: 'Yes. Upload RC book, insurance certificate, PUC, and Fastag documents in the documents section for each vehicle.',
    },
    {
      q: 'Does Vehicle Vault remind me about insurance renewal?',
      a: 'Yes. Insurance and PUC expiry dates appear on the vehicle dashboard with in-app reminders when renewal is due or overdue.',
    },
    {
      q: 'Can I back up my vehicle records?',
      a: 'Yes. Optional cloud backup is available for this module when you enable it — useful when you change phones. Link Vault and Status Viewer are not included in master cloud backup scope. Excel export is also available where noted in the app.',
    },
    {
      q: 'Does Vehicle Vault process transactions or sell insurance?',
      a: 'No. Vehicle Vault is for record keeping and organisation. BharatVow does not process transactions or move funds, and it does not sell insurance.',
    },
  ],

  relatedArticles: [
    {
      slug: 'vehicle-maintenance-checklist',
      title: 'Vehicle Maintenance Checklist',
      description: 'A practical checklist for keeping your car or bike serviced on time — coming soon on the BharatVow blog.',
    },
    {
      slug: 'how-to-track-fuel-expenses',
      title: 'How to Track Fuel Expenses',
      description: 'Simple habits for logging fuel and understanding what your vehicle costs each month — coming soon.',
    },
    {
      slug: 'important-vehicle-documents',
      title: 'Important Vehicle Documents',
      description: 'Which papers every vehicle owner should keep handy — RC, insurance, PUC, and more — coming soon.',
    },
  ],

  seo: {
    title: 'Vehicle Vault | BharatVow Digital Life',
    metaDescription:
      'Vehicle Vault in BharatVow — RC, insurance, PUC, fuel logs, service history, and vehicle expenses in one digital garage. BharatVow does not process transactions or move funds, and it does not sell insurance.',
    keywords:
      'Vehicle Vault, BharatVow, vehicle document app India, RC insurance tracker, fuel log app, car maintenance records, Personal Digital Life Platform',
    ogTitle: 'Vehicle Vault — Your Complete Digital Garage | BharatVow',
    ogDescription:
      'Manage RC, insurance, PUC, fuel, service, and vehicle history in BharatVow. Complete vehicle records — part of the BharatVow Personal Digital Life Platform.',
  },

  finalCta: {
    title: 'Keep every vehicle record where you can reach it',
    description:
      'Download BharatVow and explore all Digital Tools with a 7-day free trial. See Pricing for Monthly and Yearly plans.',
    secondaryLabel: 'Explore Home Vault',
    secondaryTo: '/digital-life/home-vault',
  },

  sectionTitles: {
    features: 'Everything Inside Vehicle Vault',
    featuresEyebrow: 'Complete toolkit',
    useCases: 'Everyday Use Cases',
    worksWith: 'Works With',
    realBenefits: 'Real Benefits',
    relatedArticles: 'Related Articles',
  },
};

export default vehicleVaultPage;
