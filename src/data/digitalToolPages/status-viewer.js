import {
  Image,
  Film,
  Download,
  Share2,
  Maximize2,
  LayoutGrid,
  Zap,
} from 'lucide-react';

/**
 * Status Viewer — Digital Tool page content (Step 28).
 * Template format — @see DigitalToolPageTemplate.jsx
 */
const statusViewerPage = {
  slug: 'status-viewer',

  valueProposition:
    'View, save, and share status photos and videos already on your device — before recent status media disappears from temporary storage.',

  whyExists: {
    headline: 'Why Status Viewer?',
    eyebrow: 'Why Status Viewer?',
    everydayProblem:
      'A photo from a friend\'s status update was gone the next day. A useful video clip disappeared after twenty-four hours. You wanted to save a memorable image or share it with family, but it was no longer easy to find among folders and gallery rolls on your phone.',
    whyFamiliesNeedIt:
      'Status Viewer helps you browse status media that is already available on your Android device — preview photos and videos, save what matters to your gallery, and share when needed — as a simple utility inside BharatVow, not a messaging app.',
  },

  whoShouldUse: {
    headline: 'Who Is It For?',
    audiences: [
      {
        title: 'Individuals',
        description: 'Save photos and videos from status updates you have already viewed — keep clips worth remembering.',
      },
      {
        title: 'Students',
        description: 'Keep useful status clips — study tips, event invites, or shared notes — before they roll off recent storage.',
      },
      {
        title: 'Professionals',
        description: 'Save and re-share work-related status media you have legitimately viewed on your own device.',
      },
      {
        title: 'Families',
        description: 'Save family photos and videos from status updates to share with relatives who missed them.',
      },
    ],
    situations: [],
  },

  realBenefits: [
    {
      title: 'Save Before It Disappears',
      description:
        'Status media often clears from recent storage quickly — save photos and videos to your gallery while you still have access on your device.',
    },
    {
      title: 'Quick Access',
      description:
        'Open Status Viewer in BharatVow — browse recent status photos and videos in one organised grid instead of hunting through folders.',
    },
    {
      title: 'Easy Sharing',
      description:
        'Share saved media through your phone\'s share options — send a clip to family or friends when they need it.',
    },
    {
      title: 'Organized Status Gallery',
      description:
        'Separate tabs for images and videos — preview, scroll, and pick the clip you want without mixed clutter.',
    },
    {
      title: 'Simple & Fast',
      description:
        'Grant folder access once, refresh when needed — view, save, or share in a few taps as part of your daily BharatVow routine.',
    },
  ],

  features: [
    {
      icon: LayoutGrid,
      title: 'View Status Media',
      description:
        'Browse status photos and videos already stored in the folder you allow on your Android device — images and videos in separate tabs.',
    },
    {
      icon: Download,
      title: 'Save Photos',
      description:
        'Save status images to your device gallery — keep memorable photos beyond their short-lived recent storage window.',
    },
    {
      icon: Film,
      title: 'Save Videos',
      description:
        'Save status video clips to your gallery — preview first, then download the ones you want to keep.',
    },
    {
      icon: Share2,
      title: 'Share Media',
      description:
        'Share a photo or video through your phone\'s standard share sheet — send to contacts or apps when someone needs the clip.',
    },
    {
      icon: Maximize2,
      title: 'Image & Video Preview',
      description:
        'Full-screen preview with swipe between clips — watch videos and view photos before you save or share.',
    },
    {
      icon: Image,
      title: 'Organized Gallery',
      description:
        'Grid layout with image and video counts — find recently available status media in a clear, scrollable view.',
    },
    {
      icon: Zap,
      title: 'Quick Access',
      description:
        'Open from the BharatVow dashboard — refresh the grid to load newly available status media on your device.',
    },
  ],

  howItWorks: [
    {
      title: 'View Available Status',
      description: 'Grant access to the status media folder on your Android device — Status Viewer loads photos and videos you can browse.',
    },
    {
      title: 'Preview Media',
      description: 'Tap any clip for full-screen preview — swipe between images and videos before deciding what to keep.',
    },
    {
      title: 'Save to Device',
      description: 'Save selected photos or videos to your gallery — they stay on your phone after recent status storage clears.',
    },
    {
      title: 'Share When Needed',
      description: 'Use share to send a saved clip to family or friends — through your device\'s normal sharing options.',
    },
    {
      title: 'Access Anytime',
      description: 'Return to Status Viewer in BharatVow — refresh to see newly available media and manage what you have saved.',
    },
  ],

  realLifeExamples: [
    {
      title: 'Save memorable photos',
      story:
        'A cousin posts a family gathering photo in a status update. Before it disappears from recent storage, she saves it to her gallery through Status Viewer — shared with relatives the same evening.',
    },
    {
      title: 'Save useful videos',
      story:
        'A short recipe video appears in a contact\'s status. He previews it in Status Viewer, saves to gallery, and watches again while cooking — no need to ask for a re-send.',
    },
    {
      title: 'Keep inspirational status content',
      story:
        'A motivational quote image in a status update — saved to gallery for a personal wallpapers folder before the twenty-four-hour window passes.',
    },
    {
      title: 'Re-share saved media',
      story:
        'An event invitation clip saved from status media — shared with a sibling who missed the original update, using the phone\'s share options from Status Viewer.',
    },
  ],

  screenshots: [
    {
      id: 'status-viewer',
      label: 'Status Viewer gallery',
      caption:
        'Browse status photos and videos on your device — preview, save, and share from one simple utility in BharatVow.',
    },
  ],

  connectedTools: [
    {
      slug: 'link-vault',
      integration:
        'Status Viewer handles photos and videos from status updates. Link Vault saves URLs and web resources — use both when a clip is worth keeping and a related link is worth saving too.',
    },
    {
      slug: 'place-store',
      integration:
        'Save a place-related status clip in Status Viewer, then add the location in Place Store with map pin and notes — media and place records together in BharatVow.',
    },
  ],

  faq: [
    {
      q: 'Is Status Viewer a messaging app?',
      a: 'No. Status Viewer is a utility inside BharatVow. It helps you view, save, and share status media already on your device. It does not send messages, read chats, or handle payments.',
    },
    {
      q: 'Is Status Viewer free?',
      a: 'Yes. Status Viewer is free on Android — no subscription required.',
    },
    {
      q: 'Is Status Viewer available on iPhone?',
      a: 'No. Status Viewer is currently available on Android only.',
    },
    {
      q: 'Does Status Viewer access private or encrypted content?',
      a: 'No. Status Viewer only shows media from the folder you explicitly allow on your device — typically recent status cache you have already viewed. It does not bypass encryption or access content you have not opened.',
    },
    {
      q: 'How do I use Status Viewer?',
      a: 'On Android, grant folder access when prompted, then browse the grid. Preview clips, save to gallery, or share through your phone\'s standard share options.',
    },
    {
      q: 'Is Status Viewer affiliated with any messaging platform?',
      a: 'No. Status Viewer is a BharatVow utility tool. It is not official, endorsed by, or partnered with any third-party messaging or social platform.',
    },
  ],

  relatedArticles: [
    {
      slug: 'tips-organizing-saved-media',
      title: 'Tips for Organizing Saved Media',
      description: 'Simple habits for keeping photos and videos from status updates easy to find — coming soon on the BharatVow blog.',
    },
    {
      slug: 'managing-photo-video-collections',
      title: 'Managing Photo & Video Collections',
      description: 'How to save, label, and share clips without cluttering your gallery — coming soon.',
    },
    {
      slug: 'digital-media-organization',
      title: 'Digital Media Organization',
      description: 'Fitting status media, links, and everyday files into one digital life routine — coming soon.',
    },
  ],

  seo: {
    title: 'Status Viewer | BharatVow Digital Life',
    metaDescription:
      'Status Viewer in BharatVow — view, save, and share status photos and videos already on your Android device. Free utility — not a messaging app.',
    keywords:
      'Status Viewer, BharatVow, save status media Android, status photo saver, digital life organizer, free utility app India',
    ogTitle: 'Status Viewer — Save Status Media on Your Device | BharatVow',
    ogDescription:
      'View, preview, save, and share status photos and videos in BharatVow. Free on Android — your complete digital life organizer.',
  },

  finalCta: {
    title: 'Keep the status clips worth saving',
    description:
      'Download BharatVow on Android — Status Viewer is free without a subscription. Explore other Digital Tools with a 7-day free trial.',
    secondaryLabel: 'Explore Place Store',
    secondaryTo: '/digital-life/place-store',
  },

  sectionTitles: {
    useCases: 'Everyday Use Cases',
    worksWith: 'Works With',
    realBenefits: 'Real Benefits',
    relatedArticles: 'Related Articles',
  },
};

export default statusViewerPage;
