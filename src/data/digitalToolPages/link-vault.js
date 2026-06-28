import {
  Link2,
  LayoutGrid,
  Search,
  Star,
  StickyNote,
  ExternalLink,
  CloudUpload,
} from 'lucide-react';

/**
 * Link Vault — Digital Tool page content (Step 27).
 * Template format — @see DigitalToolPageTemplate.jsx
 */
const linkVaultPage = {
  slug: 'link-vault',

  valueProposition:
    'Save, categorize, and find important links in one place — your personal digital bookmark and link organizer inside BharatVow.',

  whyExists: {
    headline: 'Why Link Vault?',
    eyebrow: 'Why Link Vault?',
    everydayProblem:
      'That government portal link was in a WhatsApp message three months ago. The bank form URL got buried in chat scroll. A useful YouTube tutorial, office portal, and shopping deal — all saved somewhere, none easy to find. Browser bookmarks mix work, personal, and one-time links with no notes and no order.',
    whyFamiliesNeedIt:
      'Link Vault keeps important URLs in BharatVow — saved with categories, collections, tags, and notes — so government portals, educational resources, and everyday links are organised and searchable when you need them, not lost in old messages.',
  },

  whoShouldUse: {
    headline: 'Who Is It For?',
    audiences: [
      {
        title: 'Individuals',
        description: 'Organise portals, forms, and useful websites you return to — without digging through chat history.',
      },
      {
        title: 'Students',
        description: 'Save lecture links, exam portals, and study resources in collections — find them before deadlines.',
      },
      {
        title: 'Professionals',
        description: 'Keep work portals, client links, and reference URLs tagged and searchable on your phone.',
      },
      {
        title: 'Business Owners',
        description: 'Store vendor sites, GST portals, and supplier links with notes — ready when operations need them.',
      },
      {
        title: 'Families',
        description: 'Share-worthy links for school forms, utility sites, and household resources in one family-friendly vault.',
      },
    ],
    situations: [],
  },

  realBenefits: [
    {
      title: 'Never Lose Important Links',
      description:
        'URLs saved in Link Vault stay in your BharatVow register — not buried in WhatsApp scroll or lost when chats are cleared.',
    },
    {
      title: 'Organize Digital Resources',
      description:
        'Categories, collections, and tags group links by purpose — government, education, shopping, or work in separate places.',
    },
    {
      title: 'Faster Access',
      description:
        'Open a saved link in one tap from Link Vault — favourites and filters surface what you use most often.',
    },
    {
      title: 'Easy Search',
      description:
        'Search by title, URL, or tag — find the portal or tutorial you need without scrolling old messages.',
    },
    {
      title: 'Save Time',
      description:
        'Share a link into BharatVow from other apps on Android — save first, organise later, open when needed.',
    },
    {
      title: 'Stay Organized',
      description:
        'Notes, read status, and favourites keep your link library tidy as new URLs are added each week.',
    },
  ],

  features: [
    {
      icon: Link2,
      title: 'Save Links',
      description:
        'Add URLs with title and source — save manually or share from other apps directly into Link Vault on Android.',
    },
    {
      icon: LayoutGrid,
      title: 'Categories',
      description:
        'Assign categories and collections to each link — group government portals, tutorials, and work resources separately.',
    },
    {
      icon: Search,
      title: 'Search',
      description:
        'Search your vault by keyword — title, URL, tags, and notes help you find the right link quickly.',
    },
    {
      icon: Star,
      title: 'Favorites',
      description:
        'Mark important links as favourites — pin what you open often to the top of your organised library.',
    },
    {
      icon: StickyNote,
      title: 'Notes',
      description:
        'Add notes and tags per link — remember why you saved it, login hints, or what the page is for.',
    },
    {
      icon: ExternalLink,
      title: 'Quick Access',
      description:
        'Open links instantly, copy URLs, or share — filter by unread, viewed, or completed status as you work through saved pages.',
    },
    {
      icon: CloudUpload,
      title: 'Backup & Restore',
      description:
        'Export links to CSV or Excel and import again — move your link library when you change phones.',
    },
  ],

  howItWorks: [
    {
      title: 'Save Link',
      description: 'Add a URL manually or share from another app into BharatVow — title and source detected where possible.',
    },
    {
      title: 'Assign Category',
      description: 'Pick a category and collection — group similar links so government, study, and shopping URLs stay separate.',
    },
    {
      title: 'Add Notes',
      description: 'Write notes and tags — capture why the link matters so future-you knows what to do with it.',
    },
    {
      title: 'Search Anytime',
      description: 'Search or filter by collection, status, or favourites — find the link in seconds instead of scrolling chats.',
    },
    {
      title: 'Open Instantly',
      description: 'Tap to open in your browser — copy or share when someone else needs the same resource.',
    },
  ],

  realLifeExamples: [
    {
      title: 'Government portals',
      story:
        'Aadhaar update, passport appointment, and tax filing links sit in one collection. Before each deadline, search finds the right portal without hunting WhatsApp forwards.',
    },
    {
      title: 'Banking & utility websites',
      story:
        'Electricity bill payment, bank login, and FASTag recharge URLs saved with notes on account numbers — open the right site in two taps.',
    },
    {
      title: 'Shopping links',
      story:
        'Festival sale pages and trusted online stores bookmarked in Link Vault — compare later without losing the deal URL in browser clutter.',
    },
    {
      title: 'Educational resources',
      story:
        'A student saves NCERT PDFs, exam forms, and coaching portal links in an Exam collection — tagged and searchable before boards.',
    },
    {
      title: 'YouTube tutorials',
      story:
        'Repair videos, recipe channels, and software tutorials shared into Link Vault — favourites mark the ones worth rewatching.',
    },
    {
      title: 'Office portals',
      story:
        'HR login, project dashboard, and client document links organised by collection — work URLs separate from personal bookmarks.',
    },
    {
      title: 'Social profiles',
      story:
        'Important business Instagram and LinkedIn profile links saved with notes — open the right account when networking, not from memory.',
    },
  ],

  screenshots: [
    {
      id: 'link-vault',
      label: 'Link Vault library',
      caption:
        'Saved links with categories, search, and favourites — important URLs organised inside BharatVow.',
    },
  ],

  connectedTools: [
    {
      slug: 'home-vault',
      integration:
        'Home Vault holds appliance records and bills. Link Vault stores manual links, warranty portals, and store websites related to home purchases — use both for household records and their online resources.',
    },
    {
      slug: 'place-store',
      integration:
        'Place Store saves locations with map pins and notes. Link Vault saves the web pages behind those places — booking sites, maps links, and homestay URLs for trips you plan again.',
    },
    {
      slug: 'event-book',
      integration:
        'Event Book plans functions and shopping lists. Link Vault keeps vendor websites, invitation links, and supplier URLs — online resources beside your event register.',
    },
  ],

  faq: [
    {
      q: 'Is Link Vault a browser bookmark manager?',
      a: 'No. Link Vault is part of BharatVow — a digital life organizer for important links and online resources you use across daily life, not a replacement for your phone\'s browser bookmarks.',
    },
    {
      q: 'Is Link Vault free?',
      a: 'Yes. Link Vault is free without a subscription in BharatVow — no payment required to save and organise links.',
    },
    {
      q: 'Can I save links from WhatsApp or YouTube?',
      a: 'On Android, share a URL from another app into BharatVow to save it in Link Vault. You can also paste URLs manually when adding a link.',
    },
    {
      q: 'Can I export my links?',
      a: 'Yes. Export to CSV or Excel and import again — useful when moving to a new phone or keeping an offline copy of your link library.',
    },
    {
      q: 'Does Link Vault include cloud backup with other BharatVow tools?',
      a: 'Link Vault uses CSV and Excel export/import for backup. It is not included in the encrypted master backup scope used by premium modules.',
    },
    {
      q: 'Does Link Vault open links or process payments?',
      a: 'Link Vault saves and organises URLs. Opening a link takes you to the third-party website — Link Vault does not log in, pay, or handle transactions for you.',
    },
  ],

  relatedArticles: [
    {
      slug: 'organizing-important-websites',
      title: 'Organizing Important Websites',
      description: 'How to group portals, forms, and reference links so nothing gets lost — coming soon on the BharatVow blog.',
    },
    {
      slug: 'digital-bookmark-best-practices',
      title: 'Digital Bookmark Best Practices',
      description: 'Simple habits for saving links with notes, tags, and categories — coming soon.',
    },
    {
      slug: 'managing-online-resources',
      title: 'Managing Online Resources',
      description: 'Keeping education, work, and household URLs organised in everyday digital life — coming soon.',
    },
  ],

  seo: {
    title: 'Link Vault | BharatVow Digital Life',
    metaDescription:
      'Link Vault in BharatVow — save, categorize, and search important links with notes and favourites. Free digital link organizer — not a browser or payment app.',
    keywords:
      'Link Vault, BharatVow, save links app India, digital bookmark organizer, URL manager, link collection app, digital life organizer',
    ogTitle: 'Link Vault — Your Digital Link Organizer | BharatVow',
    ogDescription:
      'Organize government portals, tutorials, and everyday links in BharatVow. Free without a subscription — your complete digital life organizer.',
  },

  finalCta: {
    title: 'Stop losing links in old chats',
    description:
      'Download BharatVow — Link Vault is free without a subscription. Explore other Digital Tools with a 7-day free trial.',
    secondaryLabel: 'Explore Status Viewer',
    secondaryTo: '/digital-life/status-viewer',
  },

  sectionTitles: {
    useCases: 'Everyday Use Cases',
    worksWith: 'Works With',
    realBenefits: 'Real Benefits',
    relatedArticles: 'Related Articles',
  },
};

export default linkVaultPage;
