import {
  MapPin,
  LayoutGrid,
  StickyNote,
  Map,
  Search,
  Star,
  Zap,
  CloudUpload,
} from 'lucide-react';

/**
 * Place Store — Digital Tool page content (Step 29).
 * Final Digital Tool in Main Dashboard order.
 * Template format — @see DigitalToolPageTemplate.jsx
 */
const placeStorePage = {
  slug: 'place-store',

  valueProposition:
    'Save places you visit often — home, office, favourites, and more — with map pin, category, and notes in one secure location organizer.',

  whyExists: {
    headline: 'Why Place Store?',
    eyebrow: 'Why Place Store?',
    everydayProblem:
      'You visited a reliable mechanic once but cannot find the address again. The homestay from last year\'s trip lives in an old chat. Home, office, and school addresses sit in different contacts and messages. Every time you need a location, you search maps from scratch instead of opening a place you already saved.',
    whyFamiliesNeedIt:
      'Place Store keeps meaningful locations in BharatVow — title, map pin, category, notes, and favourites — so home, work, hospitals, service centres, and favourite spots open quickly without repeated searching.',
  },

  whoShouldUse: {
    headline: 'Who Is It For?',
    audiences: [
      {
        title: 'Individuals',
        description: 'Save home, work, and everyday stops — open saved pins instead of searching maps each time.',
      },
      {
        title: 'Families',
        description: 'Keep school, hospital, and relative\'s house locations organised for everyone who shares planning duties.',
      },
      {
        title: 'Students',
        description: 'Store campus, coaching centre, and library locations with notes — find them before the next semester rush.',
      },
      {
        title: 'Professionals',
        description: 'Save client offices, warehouses, and frequent meeting points with categories and quick search.',
      },
      {
        title: 'Travelers',
        description: 'Remember homestays, highway stops, and favourite restaurants from past trips — ready for the next journey.',
      },
    ],
    situations: [],
  },

  realBenefits: [
    {
      title: 'Never Forget Important Places',
      description:
        'Saved places stay in Place Store with address and map pin — not lost in chats or memory after one visit.',
    },
    {
      title: 'Organize Locations',
      description:
        'Categories like Home, Office, School, and Hospital group your places — favourites surface what you open most.',
    },
    {
      title: 'Faster Access',
      description:
        'Tap a saved place to open its location — skip retyping addresses when you need directions in your maps app.',
    },
    {
      title: 'Easy Search',
      description:
        'Search by name, address, or category — find the right place in seconds from a growing personal library.',
    },
    {
      title: 'Save Time',
      description:
        'Stop repeating map searches for the same kirana, clinic, or parking spot — your places are one list away.',
    },
    {
      title: 'Stay Organized',
      description:
        'Notes on each place capture gate numbers, contact names, or why it matters — context stays with the pin.',
    },
  ],

  features: [
    {
      icon: MapPin,
      title: 'Save Places',
      description:
        'Add places with title, address, and map pin — drop a marker or search to capture the exact location you need again.',
    },
    {
      icon: LayoutGrid,
      title: 'Categories',
      description:
        'Assign categories such as Home, Office, School, Hospital, Shop, and Other — filter your library by type.',
    },
    {
      icon: StickyNote,
      title: 'Notes',
      description:
        'Add notes per place — parking instructions, contact person, best entry gate, or why you saved it.',
    },
    {
      icon: Map,
      title: 'Map Preview',
      description:
        'See a map preview when saving and on place cards — confirm the pin before you store the location.',
    },
    {
      icon: Search,
      title: 'Search',
      description:
        'Search saved places by name, address, or category — find the location quickly as your list grows.',
    },
    {
      icon: Star,
      title: 'Favorites',
      description:
        'Mark important places as favourites — filter to the locations you open most often.',
    },
    {
      icon: Zap,
      title: 'Quick Access',
      description:
        'Open a saved place in one tap — launch directions in your preferred maps app when you are ready to go.',
    },
    {
      icon: CloudUpload,
      title: 'Backup & Restore',
      description:
        'Back up places to the cloud — restore when you change phones so your location library stays safe.',
    },
  ],

  howItWorks: [
    {
      title: 'Save Place',
      description: 'Add a new place — search for an address or drop a pin on the map to capture the location.',
    },
    {
      title: 'Add Category',
      description: 'Pick a category such as Home, Office, or Hospital — group similar places for easier browsing.',
    },
    {
      title: 'Add Notes',
      description: 'Write notes and mark favourites — save context that makes each place useful later.',
    },
    {
      title: 'Search Anytime',
      description: 'Search or filter by category and favourites — find the place without scrolling the full list.',
    },
    {
      title: 'Open Location',
      description: 'Tap to open the saved pin in your maps app — get directions when you need them, from a place you trust.',
    },
  ],

  realLifeExamples: [
    {
      title: 'Home',
      story:
        'Raj saves home with the correct gate pin and a note on building entry — shared with family so everyone opens the same location.',
    },
    {
      title: 'Office',
      story:
        'Priya stores her office with category Office and parking notes in the basement level — one tap before every commute.',
    },
    {
      title: 'School',
      story:
        'The Sharma family saves the children\'s school with School category — grandparents find the pickup point without calling for directions.',
    },
    {
      title: 'Hospitals',
      story:
        'A nearby clinic is saved as Hospital with the emergency entrance noted — opened quickly when a family member needs care.',
    },
    {
      title: 'Service centers',
      story:
        'A trusted AC repair shop saved as Shop with technician name in notes — found instantly when summer service is due.',
    },
    {
      title: 'Parking locations',
      story:
        'Mall parking saved as Other with level and pillar number in notes — no circling the lot trying to remember where the car is.',
    },
    {
      title: 'Tourist places',
      story:
        'A hill-station viewpoint from last vacation saved with notes on best time to visit — reopened on the next family trip.',
    },
    {
      title: 'Favourite restaurants',
      story:
        'A highway dhaba marked favourite with Shop category — the family opens the same pin every Rajasthan road trip.',
    },
  ],

  screenshots: [
    {
      id: 'place-store',
      label: 'Place Store dashboard',
      caption:
        'Saved places with search, categories, and map previews — your personal location library in BharatVow.',
    },
  ],

  connectedTools: [
    {
      slug: 'trip-ledger',
      integration:
        'Trip Ledger organises group travel costs and trip records. Place Store saves homestays, stops, and destinations — use both when planning routes and balancing travel expense records.',
    },
    {
      slug: 'vehicle-vault',
      integration:
        'Vehicle Vault tracks your vehicles and road records. Place Store saves frequent stops and destinations — useful when the same routes repeat week after week.',
    },
    {
      slug: 'link-vault',
      integration:
        'Link Vault stores booking URLs and web pages. Place Store holds the map pin and notes — online links and saved locations together in BharatVow.',
    },
  ],

  faq: [
    {
      q: 'Is Place Store a navigation or maps replacement app?',
      a: 'No. Place Store is for saving and organising places you visit often. Opening a saved location may use your device\'s maps app for directions — Place Store does not provide turn-by-turn navigation.',
    },
    {
      q: 'Can I save places with a map pin?',
      a: 'Yes. Drop a pin on the map or search for an address when adding a place — preview the location before you save it.',
    },
    {
      q: 'Can I mark favourite places?',
      a: 'Yes. Mark places as favourites and filter your list to see the locations you use most.',
    },
    {
      q: 'Can I back up my saved places?',
      a: 'Yes. Cloud backup helps you restore your place library when you change phones.',
    },
    {
      q: 'How is Place Store different from Trip Ledger?',
      a: 'Trip Ledger is for organising trips and shared travel expenses among a group. Place Store saves individual locations with notes for places you return to often.',
    },
    {
      q: 'Does Place Store share my locations publicly?',
      a: 'No. Your saved places stay in your BharatVow account on your device — Place Store is for your personal location organisation, not a public directory.',
    },
  ],

  relatedArticles: [
    {
      slug: 'organizing-frequently-visited-places',
      title: 'Organizing Frequently Visited Places',
      description: 'How to build a personal library of home, work, and everyday stops — coming soon on the BharatVow blog.',
    },
    {
      slug: 'digital-location-management',
      title: 'Digital Location Management',
      description: 'Keeping addresses and map pins organised across daily life and travel — coming soon.',
    },
    {
      slug: 'travel-planning-tips',
      title: 'Travel Planning Tips',
      description: 'Saving stops, homestays, and favourites before your next road trip — coming soon.',
    },
  ],

  seo: {
    title: 'Place Store | BharatVow Digital Life',
    metaDescription:
      'Place Store in BharatVow — save places with map pin, categories, notes, and favourites. Smart location organizer — not a navigation or maps replacement app.',
    keywords:
      'Place Store, BharatVow, save places app India, location organizer, favourite places, map pin saver, digital life organizer',
    ogTitle: 'Place Store — Your Smart Location Organizer | BharatVow',
    ogDescription:
      'Save and organise important places with map preview, search, and backup in BharatVow. Your complete digital life organizer.',
  },

  finalCta: {
    title: 'You have seen every Digital Tool — now organise your places',
    description:
      'Download BharatVow and explore all Digital Tools with a 7-day free trial. Explore the full Digital Life hub to see how all twelve tools connect in one ecosystem.',
    secondaryLabel: 'Explore Your Digital Life',
    secondaryTo: '/digital-life',
  },

  sectionTitles: {
    useCases: 'Everyday Use Cases',
    worksWith: 'Works With',
    realBenefits: 'Real Benefits',
    relatedArticles: 'Related Articles',
  },
};

export default placeStorePage;
