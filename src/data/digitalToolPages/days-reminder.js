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
 * Days Reminder — Digital Tool page content (Step 25).
 * Template format — @see DigitalToolPageTemplate.jsx
 */
const daysReminderPage = {
  slug: 'days-reminder',

  valueProposition:
    'Remember birthdays, anniversaries, renewals, appointments, and every important date — your personal reminder companion across daily life.',

  whyExists: {
    headline: 'Why Days Reminder?',
    eyebrow: 'Why Days Reminder?',
    everydayProblem:
      'A cousin\'s birthday passes before you send a wish. Your parents\' anniversary slips your mind until the day is over. Insurance renewal, a doctor visit, or a bill due date — all remembered differently in head, calendar, and messages. Important days scatter across memory and missed reminders become awkward moments or missed deadlines.',
    whyFamiliesNeedIt:
      'Days Reminder keeps important dates in one organised register — birthdays, anniversaries, and custom reminders with notes, tags, and a calendar view — so you check what matters today and what is coming next without relying on memory alone.',
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
        'Less mental load trying to remember every date — open Days Reminder and see what is today or coming soon.',
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
        'Track wedding and relationship anniversaries separately — never miss a year of celebration again.',
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
        'Back up reminders to the cloud or export to Excel — restore when you change phones so years of dates stay safe.',
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
      title: 'Never Miss Important Days',
      description: 'Check Today and Upcoming on the dashboard — send wishes, make calls, or act on renewals on time.',
    },
  ],

  realLifeExamples: [
    {
      title: 'Birthday',
      story:
        'Priya registers forty family birthdays with photos and WhatsApp numbers. Each morning she opens Today — three wishes sent before breakfast, no awkward belated messages.',
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
        'Electricity bill due on the tenth — saved as a custom reminder. On the ninth, it shows in Upcoming so payment is not delayed.',
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
      id: 'days-reminder',
      label: 'Days Reminder dashboard',
      caption:
        'Today and upcoming reminders with birthdays, anniversaries, and custom dates — sorted and ready each morning.',
    },
  ],

  connectedTools: [
    {
      slug: 'home-vault',
      integration:
        'Home Vault tracks bill due dates and service schedules for your home. Days Reminder keeps personal and family dates — use both for household and life reminders.',
    },
    {
      slug: 'vehicle-vault',
      integration:
        'Vehicle Vault shows insurance and PUC expiry on the vehicle dashboard. Days Reminder helps you remember renewal dates and other vehicle milestones in your personal calendar.',
    },
    {
      slug: 'event-book',
      integration:
        'Event Book plans celebrations with dates and guests. Days Reminder remembers the birthdays and anniversaries that start the planning.',
    },
    {
      slug: 'trip-ledger',
      integration:
        'Trip Ledger organises travel dates and group trips. Days Reminder flags departure dates and personal travel milestones before you leave.',
    },
  ],

  faq: [
    {
      q: 'Is Days Reminder only for birthdays?',
      a: 'No. Days Reminder covers birthdays, anniversaries, and custom reminders — insurance renewals, bill dates, appointments, and any important day you choose to save.',
    },
    {
      q: 'Can I add reminders that are not birthdays or anniversaries?',
      a: 'Yes. Use Custom Day for any date — renewals, medicine schedules, bill due dates, appointments, and personal events.',
    },
    {
      q: 'Does Days Reminder send push notifications?',
      a: 'Days Reminder highlights today and upcoming dates on your dashboard and calendar. Open the app to check what is due — reminder timing preferences are saved per entry.',
    },
    {
      q: 'Can I organise reminders by family, friends, or colleagues?',
      a: 'Yes. Add relation tags and custom tags — filter the dashboard by Today, Birthday, Anniversary, or your own tag groups.',
    },
    {
      q: 'Can I back up my reminders?',
      a: 'Yes. Cloud backup and Excel export help you keep reminder data safe when you change phones.',
    },
    {
      q: 'Is Days Reminder a calendar or scheduling app?',
      a: 'No. Days Reminder is for remembering important personal dates and life events — not full daily scheduling, meetings, or task management.',
    },
  ],

  relatedArticles: [
    {
      slug: 'never-miss-important-dates',
      title: 'Never Miss Important Dates',
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
    title: 'Days Reminder | BharatVow Digital Life',
    metaDescription:
      'Days Reminder in BharatVow — birthdays, anniversaries, renewals, and custom date reminders in one register. Your personal reminder companion — not a calendar app.',
    keywords:
      'Days Reminder, BharatVow, birthday reminder app India, anniversary tracker, important dates organizer, personal reminder app, digital life organizer',
    ogTitle: 'Days Reminder — Never Miss Important Days | BharatVow',
    ogDescription:
      'Remember birthdays, anniversaries, renewals, and custom dates in BharatVow. Complete personal reminder companion — your complete digital life organizer.',
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

export default daysReminderPage;
