import { PATHS } from '@/config/paths';
import { SITE } from '@/utils/constants';

export const DELETE_ACCOUNT = {
  title: 'Delete Account',
  description: 'How to permanently delete your BharatVow account and associated personal data.',
  path: '/delete-account',
  lead: 'Permanent and irreversible. Cancel subscriptions before you delete.',
  warning: {
    title: 'Before you delete',
    items: [
      'Deletion is irreversible',
      'All locally stored module data on device will be lost',
      'Cloud backup copies linked to your account will be removed',
      'In-app balance handling per refund policy — request withdrawal/refund first if applicable',
      'Active subscriptions — cancel first to avoid future charges',
    ],
    recommendation: 'Run Master Backup export/backup if you need records before deletion.',
  },
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
    { label: 'Acknowledgement', value: 'Within 48 business hours' },
    { label: 'Completion target', value: 'Within 30 days (often sooner), except data we must retain for legal/tax/transaction audit' },
  ],
  retained: [
    'Billing records required by law (subscriptions, in-app balance, tax)',
    'Anonymised analytics',
    'Grievance correspondence records',
  ],
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
      'Response time may vary depending on the nature of your request — account issues, technical problems, and subscription questions may need different review steps.',
      'When contacting us, include your registered mobile number (never OTP or PIN), BharatVow app version, device model, and a short description of the issue.',
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
};
