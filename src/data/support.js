import { PATHS } from '@/config/paths';
import { SITE } from '@/utils/constants';

export const DELETE_ACCOUNT = {
  title: 'Delete Account',
  description:
    'How to permanently delete your BharatVow account and associated personal data. This page satisfies Google Play account deletion disclosure requirements.',
  path: '/delete-account',
  lead: 'Permanent and irreversible. Cancel active Google Play subscriptions before you delete.',
  warning: {
    title: 'Before you delete',
    items: [
      'Deletion is irreversible',
      'All locally stored module data on device will be lost',
      'Cloud backup copies linked to your account will be removed',
      'In-app balance handling per Cancellation & Refund Policy — submit a balance review request first if applicable',
      'Active subscriptions — cancel first through Google Play Store → Payments & subscriptions → Subscriptions → BharatVow to avoid future charges',
    ],
    recommendation: 'Run Master Backup export/backup if you need records before deletion.',
  },
  googlePlayCancel: [
    'Open Google Play Store on your Android device',
    'Go to Payments & subscriptions → Subscriptions',
    'Select BharatVow and cancel the subscription before deleting your account',
  ],
  inAppSteps: [
    'Open BharatVow',
    'Go to Profile / Settings',
    'Select Delete Account (or Help → Delete Account)',
    'Confirm with OTP verification',
    'Follow on-screen confirmation steps',
  ],
  emailRequest: {
    subject: 'Delete Account Request',
    include: [
      'Registered mobile number',
      'Full name on account',
      'Reason (optional)',
      'Statement: "I confirm permanent deletion of my BharatVow account"',
    ],
    note: 'We verify identity via OTP to registered number before processing.',
  },
  timeline: [
    { label: 'Acknowledgement', value: 'Within 48 business hours of a verified request' },
    {
      label: 'Completion target',
      value:
        'Within 30 days of verification (often sooner), except billing, tax, fraud-prevention, or grievance records we must retain by law',
    },
  ],
  retained: [
    'Billing and subscription records required by law (Google Play references, in-app balance, tax)',
    'Anonymised analytics that no longer reasonably identifies you',
    'Grievance and support correspondence records required for legal compliance',
  ],
  afterDeletion: [
    'Your BharatVow account profile linked to your registered mobile number is removed',
    'Optional cloud backup copies linked to your account are deleted from our backup storage where applicable',
    'Locally stored module data on your device is removed when you uninstall or reset the app after deletion',
    'Link Vault and Status Viewer records remain on your device until you uninstall the app — they are not included in master cloud backup scope',
  ],
  cloudBackup: {
    title: 'Cloud backup deletion',
    paragraphs: [
      'When your account deletion is verified and processed, optional master cloud backup copies linked to your BharatVow account are removed from our backup storage where applicable.',
      'Deletion does not automatically remove records stored only on your device. Uninstall BharatVow or clear app data after deletion if you want local copies removed from your phone.',
      'If you need records before deletion, use Master Backup export in the app while your account is still active.',
    ],
  },
  supportContact: {
    email: SITE.email,
    note: 'For help with account deletion or data questions, email support during business hours (Monday – Saturday, 10:00 AM – 6:00 PM IST).',
  },
};

export const CONTACT = {
  title: 'Contact BharatVow',
  description:
    'Contact BharatVow support — email, phone, and office address. App help, account questions, and feedback. Jaipur, India.',
  path: PATHS.contact,
  headline: 'Contact BharatVow',
  intro: "We're here to help you organize your digital life with confidence.",
  keywords:
    'BharatVow contact, BharatVow support, customer support Jaipur, BharatVow help email',
  seo: {
    ogTitle: 'Contact BharatVow — Support Center',
    ogDescription:
      'Reach BharatVow support by email or phone. Official company address and business hours for app help and account questions.',
  },

  supportOptions: [
    {
      id: 'general',
      title: 'General Support',
      icon: 'mail',
      email: SITE.email,
      description: 'For general questions, technical assistance and product support.',
    },
    {
      id: 'phone',
      title: 'Phone Support',
      icon: 'phone',
      phone: SITE.phone,
      description: 'Call during business hours for app help and account-related questions.',
    },
    {
      id: 'privacy',
      title: 'Privacy & Data Requests',
      icon: 'mail',
      email: SITE.privacyEmail,
      description:
        'For privacy questions, data access requests, or policy enquiries. Use subject line "Privacy Request".',
    },
    {
      id: 'grievance',
      title: 'Grievance Officer',
      icon: 'mail',
      email: SITE.grievanceEmail,
      description:
        'For billing, privacy, or policy complaints under Indian law. Use subject line "Grievance" and see our Grievance Redressal policy.',
    },
    {
      id: 'address',
      title: 'Business Address',
      icon: 'map',
      company: SITE.company,
      addressLines: [
        '507, 5th Floor',
        'Gordhansky Tower',
        'Jhotwara',
        'Jaipur',
        'Rajasthan – 302012',
        'India',
      ],
      description: 'Registered office of Atulit Baldhama Digital Solutions Pvt. Ltd.',
    },
  ],

  businessHours: {
    title: 'Business Hours',
    days: 'Monday – Saturday',
    time: '10:00 AM – 6:00 PM (IST)',
  },

  responseInfo: {
    title: 'What to expect',
    paragraphs: [
      'Support requests are reviewed during business hours (Monday – Saturday, 10:00 AM – 6:00 PM IST).',
      'We aim to acknowledge grievances within twenty-four (24) hours on business days and respond substantively within fifteen (15) days where applicable under Indian law.',
      'Response time may vary depending on the nature of your request — account issues, technical problems, subscription questions, and refund requests may need different review steps.',
      'When contacting us, include your registered mobile number (never OTP or PIN), BharatVow app version, device model, and a short description of the issue.',
      'BharatVow is a Personal Digital Life Platform — not a bank, wallet, payment transfer, lending, investment, or insurance service. App subscriptions are billed through Google Play.',
      `Privacy enquiries can be sent to ${SITE.privacyEmail} and grievance complaints to ${SITE.grievanceEmail} with a clear subject line. See our Grievance Redressal policy for the full complaint process.`,
    ],
  },

  form: {
    title: 'Send us a message',
    description:
      'Fill in the form below and your email app will open with your message ready to send to our support team.',
    fields: {
      name: { label: 'Full Name', required: true },
      email: { label: 'Email', required: true },
      phone: { label: 'Phone (Optional)', required: false },
      subject: { label: 'Subject', required: true },
      message: { label: 'Message', required: true },
    },
    submitLabel: 'Send Message',
    success:
      'Your email app should open with your message ready to send. If nothing opens, email us directly at support@bharatvow.com.',
    error: 'Please fill in all required fields with valid information.',
    emailInvalid: 'Please enter a valid email address.',
  },

  helpLinks: [
    { label: 'FAQ', path: PATHS.faq },
    { label: 'Pricing', path: PATHS.pricing },
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Terms & Conditions', path: '/terms' },
    { label: 'Delete Account', path: PATHS.deleteAccount },
    { label: 'Grievance Redressal', path: '/grievance-redressal' },
  ],

  company: {
    title: 'Company Information',
    fields: [
      { label: 'Company', value: SITE.company },
      { label: 'Product', value: SITE.name },
      { label: 'Website', value: SITE.url, href: SITE.url },
      { label: 'Support Email', value: SITE.email, href: `mailto:${SITE.email}` },
      { label: 'Privacy Email', value: SITE.privacyEmail, href: `mailto:${SITE.privacyEmail}` },
      { label: 'Grievance Email', value: SITE.grievanceEmail, href: `mailto:${SITE.grievanceEmail}` },
      { label: 'Grievance Officer', value: 'Shailendra Gahlot' },
      { label: 'CIN', value: SITE.cin },
      { label: 'GSTIN', value: SITE.gstin },
    ],
  },

  cta: {
    title: 'Need Help?',
    description: 'Our team is here to assist you.',
    primaryLabel: 'Explore Digital Life',
    primaryPath: PATHS.digitalLife,
    secondaryLabel: 'Download BharatVow',
  },

  /** Grievance officer — referenced in legal docs */
  grievanceOfficer: 'Shailendra Gahlot',
  grievanceOfficerNote:
    'Grievance Officer: Shailendra Gahlot — privacy, billing, and policy complaints. See our Grievance Redressal policy for the full process.',
};
