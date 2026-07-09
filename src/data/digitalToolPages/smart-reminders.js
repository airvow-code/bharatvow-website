import { AlarmClock, Bell, Calendar, ListChecks, CloudUpload } from 'lucide-react';

const smartRemindersPage = {
  slug: 'smart-reminders',

  valueProposition:
    'General-purpose priority reminders with daily, weekly, monthly, and routine schedules — notified on your phone when it matters.',

  whyExists: {
    headline: 'Why Smart Reminders?',
    eyebrow: 'Why Smart Reminders?',
    everydayProblem:
      'Medicine at 8 AM, school pickup on weekdays, bill payment every month — each reminder lives in a different place. Phone alarms mix with personal tasks. Important routines slip when life gets busy.',
    whyFamiliesNeedIt:
      'Smart Reminders keeps everyday tasks in one BharatVow register — one-time, recurring, and multi-slot routine reminders with priority — so you set it once and get notified on your phone.',
  },

  whoShouldUse: {
    headline: 'Who Is It For?',
    audiences: [
      {
        title: 'Individuals',
        description: 'Track personal tasks, medicine times, and recurring chores with phone notifications.',
      },
      {
        title: 'Families',
        description: 'Set household routines — school runs, bill dates, and weekly tasks in one place.',
      },
      {
        title: 'Professionals',
        description: 'Keep work-adjacent personal reminders separate from office calendar clutter.',
      },
    ],
    situations: [],
  },

  realBenefits: [
    {
      title: 'Priority When It Matters',
      description: 'Mark what is urgent — Today and Upcoming views show what needs attention first.',
    },
    {
      title: 'Flexible Schedules',
      description: 'One-time, daily, weekly, monthly, interval, and routine multi-slot reminders.',
    },
    {
      title: 'Phone Notifications',
      description: 'Local OS notifications fire at the time you set — no promotional push spam.',
    },
    {
      title: 'Archive Completed',
      description: 'Active and archived lists keep finished reminders out of your daily view.',
    },
  ],

  features: [
    {
      icon: AlarmClock,
      title: 'Reminder types',
      description: 'One Time, Daily, Weekly, Monthly, Interval, and Routine (multi-slot daily) schedules.',
    },
    {
      icon: ListChecks,
      title: 'Today & Upcoming',
      description: 'Dashboard shows what is due today and what is coming next — filter by type.',
    },
    {
      icon: Bell,
      title: 'OS notifications',
      description: 'One notification per active schedule — auto-advances after each fire.',
    },
    {
      icon: Calendar,
      title: 'End dates',
      description: 'Set when a recurring reminder should stop — completed items move to archive.',
    },
    {
      icon: CloudUpload,
      title: 'Optional backup',
      description: 'Encrypted cloud backup when enabled — schedules restore on a new phone.',
    },
  ],

  screenshots: [
    {
      id: 'smart-reminders',
      label: 'Smart Reminders dashboard',
      caption: 'Today and Upcoming reminders with type filters and priority at a glance.',
    },
  ],

  howItWorks: [
    {
      title: 'Add a reminder',
      description: 'Choose type, set time, priority, and optional end date.',
    },
    {
      title: 'Get notified',
      description: 'Your phone alerts you at the scheduled time — tap to open BharatVow.',
    },
    {
      title: 'Advance or archive',
      description: 'Recurring reminders auto-advance; completed ones move to archive.',
    },
  ],

  useCases: [
    {
      title: 'Morning medicine',
      story: 'A daily 8 AM routine reminder with two slots — breakfast and evening doses — never mixed with birthday alerts.',
    },
    {
      title: 'Monthly bill',
      story: 'Rent due on the 5th each month — one monthly reminder, archived after payment is logged.',
    },
  ],

  worksWith: [
    {
      slug: 'birthdays-anniversaries',
      integration:
        'Birthdays & Anniversaries handles people and special dates — Smart Reminders handles everyday tasks and routines.',
    },
    {
      slug: 'event-book',
      integration: 'Event planning dates live in Event Book — Smart Reminders flags tasks before the celebration.',
    },
    {
      slug: 'home-vault',
      integration: 'Home maintenance due dates in Home Vault pair with reminders you set for follow-up.',
    },
  ],

  faq: [
    {
      q: 'How is Smart Reminders different from Birthdays & Anniversaries?',
      a: 'Birthdays & Anniversaries is for people, birthdays, anniversaries, and wishes. Smart Reminders is for general tasks, routines, and priority alerts.',
    },
    {
      q: 'Does Smart Reminders send push notifications?',
      a: 'Yes — local OS notifications for active schedules you set. BharatVow does not send promotional push through FCM.',
    },
    {
      q: 'Can I back up my reminders?',
      a: 'Yes. Optional encrypted cloud backup is available when you enable it — useful when changing phones.',
    },
  ],

  finalCta: {
    title: 'Set reminders that actually fire',
    description: 'Download BharatVow and explore all Digital Tools with a 7-day free trial.',
    secondaryLabel: 'Explore Festival Studio',
    secondaryTo: '/digital-life/festival-studio',
  },
};

export default smartRemindersPage;
