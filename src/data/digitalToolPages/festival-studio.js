import { PartyPopper, Calendar, Image, MessageCircle, Users, CloudUpload } from 'lucide-react';

const festivalStudioPage = {
  slug: 'festival-studio',

  valueProposition:
    'Indian festival greetings, customisable cards, and group WhatsApp sharing — with festival-day reminders built in.',

  whyExists: {
    headline: 'Why Festival Studio?',
    eyebrow: 'Why Festival Studio?',
    everydayProblem:
      'Diwali morning — you meant to send cards to family, but the right image, name placement, and contact list were scattered across chats and galleries. Festival wishes become a last-minute scramble every year.',
    whyFamiliesNeedIt:
      'Festival Studio brings festival calendars, greeting cards, text templates, and group sharing into BharatVow — customise a card, pick contacts, and send wishes without hunting for assets at the last minute.',
  },

  whoShouldUse: {
    headline: 'Who Is It For?',
    audiences: [
      {
        title: 'Families',
        description: 'Send festival greetings to relatives near and far — cards and messages from one app.',
      },
      {
        title: 'Individuals',
        description: 'Browse upcoming festivals and share personalised wishes on WhatsApp.',
      },
      {
        title: 'Community groups',
        description: 'Run sequential group-share campaigns to contact groups with pause and resume.',
      },
    ],
    situations: [],
  },

  realBenefits: [
    {
      title: 'Festival calendar',
      description: 'Browse Indian festivals with regional filters and countdown to the next celebration.',
    },
    {
      title: 'Greeting cards',
      description: 'Pick templates, add your name, font, and colour — preview before sharing.',
    },
    {
      title: 'Group WhatsApp sharing',
      description: 'Send cards and text templates to contact groups — pause, resume, or stop anytime.',
    },
    {
      title: 'Festival-day reminders',
      description: 'Automatic morning and evening notifications on upcoming festival days.',
    },
  ],

  features: [
    {
      icon: PartyPopper,
      title: 'Festival dashboard',
      description: 'Next-festival hero, category grid, and countdown on the Studio home screen.',
    },
    {
      icon: Calendar,
      title: 'Full calendar',
      description: 'Browse festivals by month with state and regional filters.',
    },
    {
      icon: Image,
      title: 'Card editor',
      description: 'Customise greeting images with name, font, size, colour, emoji, and branding toggle.',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp share',
      description: 'Single-contact image share or sequential group campaigns with campaign history.',
    },
    {
      icon: Users,
      title: 'Contact groups',
      description: 'Reuse contact groups from Place Store for festival group-share campaigns.',
    },
    {
      icon: CloudUpload,
      title: 'Campaign backup',
      description: 'Optional backup of campaign history when cloud backup is enabled.',
    },
  ],

  screenshots: [
    {
      id: 'festival-studio',
      label: 'Festival Studio dashboard',
      caption: 'Upcoming festival hero, categories, and quick access to greeting cards.',
    },
  ],

  howItWorks: [
    {
      title: 'Pick a festival',
      description: 'Open the calendar or dashboard — see the next celebration and templates.',
    },
    {
      title: 'Customise your card',
      description: 'Add your name, adjust layout, and preview the greeting image.',
    },
    {
      title: 'Share on WhatsApp',
      description: 'Send to one contact or run a group campaign — you control each step.',
    },
  ],

  useCases: [
    {
      title: 'Diwali family cards',
      story: 'Customise a Diwali greeting with the family name, then share sequentially to a WhatsApp group.',
    },
    {
      title: 'Rakhi morning',
      story: 'Festival-day notification reminds you at 9 AM — open Studio and send before the day gets busy.',
    },
  ],

  worksWith: [
    {
      slug: 'birthdays-anniversaries',
      integration:
        'Festival Studio supplies festival templates — Birthdays & Anniversaries handles personal birthdays and anniversary wishes.',
    },
    {
      slug: 'place-store',
      integration: 'Contact groups created in Place Store power festival group-share campaigns.',
    },
    {
      slug: 'link-vault',
      integration: 'Save festival offer links and form URLs before sharing season greetings.',
    },
  ],

  faq: [
    {
      q: 'Is Festival Studio only for major festivals?',
      a: 'The calendar includes many Indian festivals with regional variants — browse by category and state filter.',
    },
    {
      q: 'Does group share send messages automatically?',
      a: 'You start each campaign and can pause, resume, or stop. Messages go one at a time at your direction through WhatsApp.',
    },
    {
      q: 'Does Festival Studio send notifications?',
      a: 'Yes — local OS reminders on festival days (morning and evening) for upcoming celebrations in your calendar.',
    },
  ],

  finalCta: {
    title: 'Share festival greetings with confidence',
    description: 'Download BharatVow and explore all Digital Tools with a 7-day free trial.',
    secondaryLabel: 'Explore Birthdays & Anniversaries',
    secondaryTo: '/digital-life/birthdays-anniversaries',
  },
};

export default festivalStudioPage;
