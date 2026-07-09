import {
  Gift,
  Heart,
  Calendar,
  Bell,
  RefreshCw,
  ClipboardList,
  CloudUpload,
} from 'lucide-react';

/**
 * Birthdays & Anniversaries — Digital Tool page content.
 * Template format — @see DigitalToolPageTemplate.jsx
 */
const birthdaysAnniversariesPage = {
  slug: 'birthdays-anniversaries',

  valueProposition:
    'Remember birthdays, anniversaries, renewals, appointments, and every important date — your personal reminder companion across daily life.',

  whyExists: {
    headline: 'Why Birthdays & Anniversaries?',
    eyebrow: 'Why Birthdays & Anniversaries?',
    everydayProblem:
      'A cousin\'s birthday passes before you send a wish. Your parents\' anniversary slips your mind until the day is over. Insurance renewal, a doctor visit, or a bill due date — all remembered differently in head, calendar, and messages. Important days scatter across memory and missed reminders become awkward moments or missed deadlines.',
    whyFamiliesNeedIt:
      'Birthdays & Anniversaries keeps important dates in one organised register — birthdays, anniversaries, and custom reminders with notes, tags, and a calendar view — so you check what matters today and what is coming next without relying on memory alone.',
  },

  whoShouldUse: {
    headline: 'Who Is It For?',
    audiences: [
      {
        title: 'Individuals',
        description: 'Track personal birthdays, appointments, and renewal dates — one place for dates that matter to you.',
      },
      {
        title: 'Couples',
        description: 'Remember anniversaries, partner birthdays, and shared milestones without last-minute panic.',
      },
      {
        title: 'Families',
        description: 'Manage dozens of relatives\' birthdays and family dates — filter by today, upcoming, or relation.',
      },
      {
        title: 'Students',
        description: 'Keep exam dates, fee deadlines, and friend birthdays organised alongside a busy schedule.',
      },
      {
        title: 'Professionals',
        description: 'Track client birthdays, work anniversaries, and appointment dates without mixing them with office tasks.',
      },
      {
        title: 'Senior Citizens',
        description: 'A simple register of family birthdays, medical appointments, and renewal dates on your phone.',
      },
    ],
    situations: [],
  },

  realBenefits: [
    {
      title: 'Never Forget Important Days',
      description:
        'Birthdays, anniversaries, and custom dates stay registered — today and upcoming views show what needs attention.',
    },
    {
      title: 'Stay Organized',
      description:
        'Tags, calendar view, and sorted upcoming lists keep dozens of dates manageable instead of overwhelming.',
    },
    {
      title: 'Receive Timely Reminders',
      description:
        'Set reminder timing — one day before, on the day, or one week before — and check the dashboard each morning.',
    },
    {
      title: 'Keep Everything Scheduled',
      description:
        'Renewals, appointments, and personal events sit alongside family birthdays in one reminder register.',
    },
    {
      title: 'Reduce Stress',
      description:
        'Less mental load trying to remember every date — open Birthdays & Anniversaries and see what is today or coming soon.',
    },
    {
      title: 'Build Better Habits',
      description:
        'A quick morning check becomes a habit — wishes sent on time, renewals noted, appointments not forgotten.',
    },
  ],

  features: [
    {
      icon: Gift,
      title: 'Birthday Reminders',
      description:
        'Add birthdays with name, date, photo, and contact — see who celebrates today and who is coming up next.',
    },
    {
      icon: Heart,
      title: 'Anniversary Reminders',
      description:
        'Track wedding and relationship anniversaries separately — keep important celebration dates organised in one register.',
    },
    {
      icon: Calendar,
      title: 'Custom Reminders',
      description:
        'Create reminders for any important date — insurance renewal, bill due, medicine, appointments, or personal events.',
    },
    {
      icon: Bell,
      title: 'Reminder Settings',
      description:
        'Choose when to be reminded — one day before, two days before, on the day, or one week before each entry.',
    },
    {
      icon: RefreshCw,
      title: 'Repeat Reminders',
      description:
        'Birthdays and anniversaries repeat every year automatically — custom dates return on the same day each cycle.',
    },
    {
      icon: ClipboardList,
      title: 'Notes',
      description:
        'Add notes, gift ideas, and personal details per reminder — context ready when the important day arrives.',
    },
    {
      icon: CloudUpload,
      title: 'Backup & Restore',
      description:
        'Optional cloud backup when you enable it, or export to Excel — restore when you change phones so years of dates stay safe.',
    },
  ],

  howItWorks: [
    {
      title: 'Create Reminder',
      description: 'Add a birthday, anniversary, or custom day — enter name, type, and pick the date from the calendar.',
    },
    {
      title: 'Choose Date',
      description: 'Set day and month for repeating dates, or a specific date for one-time custom reminders.',
    },
    {
      title: 'Add Notes',
      description: 'Save contact details, gift ideas, and notes — everything you need when the day comes around.',
    },
    {
      title: 'Set Reminder Timing',
      description: 'Pick how far in advance to flag each entry — one day before, on the day, or one week ahead.',
    },
    {
      title: 'Keep Important Days Visible',
      description: 'Check Today and Upcoming on the dashboard — when you choose to send greetings, you manually start a session and select contacts; otherwise make calls or act on renewals on time.',
    },
  ],

  realLifeExamples: [
    {
      title: 'Birthday',
      story:
        'Priya registers forty family birthdays with photos and WhatsApp numbers. Each morning she opens Today — when she chooses to send greetings, she starts a session and picks contacts one at a time. No awkward belated messages, and nothing sends without her action.',
    },
    {
      title: 'Anniversary',
      story:
        'Raj and Meera\'s tenth anniversary is saved as a reminder. One week before, it appears in Upcoming — dinner booked without a last-minute scramble.',
    },
    {
      title: 'Insurance renewal',
      story:
        'Amit adds car insurance renewal as a custom reminder for March fifteenth each year. Two days before, it surfaces on the dashboard alongside family birthdays.',
    },
    {
      title: 'Vehicle service reminder',
      story:
        'AC servicing every six months is hard to track in memory. A custom reminder on the first of each cycle keeps maintenance on the radar.',
    },
    {
      title: 'Bill due date',
      story:
        'Electricity bill due on the tenth — saved as a custom reminder. On the ninth, it shows in Upcoming so the bill record is not missed.',
    },
    {
      title: 'Medicine reminder',
      story:
        'Monthly prescription refill date saved as a custom day with a note on the pharmacy name — checked off when the dashboard shows it due.',
    },
    {
      title: 'Personal appointment',
      story:
        'Dentist appointment on the twenty-second — custom reminder with notes on clinic address. Appears in Today on the morning of the visit.',
    },
  ],

  screenshots: [
    {
      id: 'birthdays-anniversaries',
      label: 'Birthdays & Anniversaries dashboard',
      caption:
        'Today and upcoming reminders with birthdays, anniversaries, and custom dates — sorted and ready each morning.',
    },
  ],

  connectedTools: [
    {
      slug: 'home-vault',
      integration:
        'Home Vault tracks bill due dates and service schedules for your home. Birthdays & Anniversaries keeps personal and family dates — use both for household and life reminders.',
    },
    {
      slug: 'vehicle-vault',
      integration:
        'Vehicle Vault shows insurance and PUC expiry on the vehicle dashboard. Birthdays & Anniversaries helps you remember renewal dates and other vehicle milestones in your personal calendar.',
    },
    {
      slug: 'event-book',
      integration:
        'Event Book plans celebrations with dates and guests. Birthdays & Anniversaries remembers the birthdays and anniversaries that start the planning.',
    },
    {
      slug: 'festival-studio',
      integration:
        'Festival Studio supplies greeting cards for celebrations — Birthdays & Anniversaries handles personal birthdays and anniversary wishes.',
    },
    {
      slug: 'smart-reminders',
      integration:
        'Smart Reminders handles everyday tasks and routines — Birthdays & Anniversaries focuses on people and special dates.',
    },
    {
      slug: 'trip-ledger',
      integration:
        'Trip Ledger organises travel dates and group trips. Birthdays & Anniversaries flags departure dates and personal travel milestones before you leave.',
    },
  ],

  faq: [
    {
      q: 'Can I send birthday or anniversary greetings from Birthdays & Anniversaries?',
      a: 'If your app version supports it, you can manually start a greeting session and select contacts. Each message is sent individually at your direction — there is no automatic or bulk messaging. Optional Accessibility Service may help complete delivery through your messaging app. See our Privacy Policy section on Accessibility Service.',
    },
    {
      q: 'Is Birthdays & Anniversaries only for birthdays?',
      a: 'No. Birthdays & Anniversaries covers birthdays, anniversaries, and custom reminders — insurance renewals, bill dates, appointments, and any important day you choose to save.',
    },
    {
      q: 'Can I add reminders that are not birthdays or anniversaries?',
      a: 'Yes. Use Custom Day for any date — renewals, medicine schedules, bill due dates, appointments, and personal events.',
    },
    {
      q: 'Does Birthdays & Anniversaries send push notifications?',
      a: 'No promotional push notifications. Birthdays & Anniversaries highlights today and upcoming dates inside the app when you open it. If you choose to send greetings through a supported user-initiated messaging flow, you start each session yourself and select recipients — see our Privacy Policy section on Accessibility Service.',
    },
    {
      q: 'Can I organise reminders by family, friends, or colleagues?',
      a: 'Yes. Add relation tags and custom tags — filter the dashboard by Today, Birthday, Anniversary, or your own tag groups.',
    },
    {
      q: 'Can I back up my reminders?',
      a: 'Yes. Optional cloud backup is available for this module when you enable it — useful when you change phones. Link Vault and Status Viewer are not included in master cloud backup scope. Excel export is also available where noted in the app.',
    },
    {
      q: 'Is Birthdays & Anniversaries a calendar or scheduling app?',
      a: 'No. Birthdays & Anniversaries is for remembering important personal dates and life events — not full daily scheduling, meetings, or task management.',
    },
  ],

  relatedArticles: [
    {
      slug: 'never-miss-important-dates',
      title: 'Organize Important Dates',
      description: 'Simple habits for keeping birthdays, renewals, and appointments on your radar — coming soon on the BharatVow blog.',
    },
    {
      slug: 'reminder-planning-tips',
      title: 'Reminder Planning Tips',
      description: 'How to set up reminders so important days never slip past unnoticed — coming soon.',
    },
    {
      slug: 'organizing-your-daily-schedule',
      title: 'Organizing Your Daily Schedule',
      description: 'Balancing personal dates, family events, and household reminders in one routine — coming soon.',
    },
  ],

  seo: {
    title: 'Birthdays & Anniversaries | BharatVow Digital Life',
    metaDescription:
      'Birthdays & Anniversaries in BharatVow — birthdays, anniversaries, renewals, and custom date reminders in one register. Your personal reminder companion — not a calendar app.',
    keywords:
      'Birthdays & Anniversaries, BharatVow, birthday reminder app India, anniversary tracker, important dates organizer, personal reminder app, Personal Digital Life Platform',
    ogTitle: 'Birthdays & Anniversaries — Important Dates Organized | BharatVow',
    ogDescription:
      'Remember birthdays, anniversaries, renewals, and custom dates in BharatVow. Personal reminder companion — part of the BharatVow Personal Digital Life Platform.',
  },

  finalCta: {
    title: 'Start remembering the days that matter',
    description:
      'Download BharatVow and explore all Digital Tools with a 7-day free trial. See Pricing for Monthly and Yearly plans.',
    secondaryLabel: 'Explore Grocery Bag',
    secondaryTo: '/digital-life/grocery-bag',
  },

  sectionTitles: {
    useCases: 'Everyday Use Cases',
    worksWith: 'Works With',
    realBenefits: 'Real Benefits',
    relatedArticles: 'Related Articles',
  },
};

export default birthdaysAnniversariesPage;
