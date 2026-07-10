import { SITE } from '@/utils/constants';
import { LEGAL_PATHS } from '@/config/paths';

const LAST_UPDATED = '30 June 2026';
const EFFECTIVE_DATE = '30 June 2026';

export const LEGAL_PAGES = {
  'privacy-policy': {
    id: 'privacy-policy',
    title: 'Privacy Policy',
    description:
      'How BharatVow collects, uses, stores, and protects your information — including Android permissions, optional Accessibility Service, contacts, cloud backup, and your rights.',
    path: LEGAL_PATHS.privacyPolicy,
    effectiveDate: EFFECTIVE_DATE,
    lastUpdated: LAST_UPDATED,
    lead: `${SITE.company} · BharatVow`,
    keywords: 'BharatVow privacy policy, data protection India, personal data BharatVow',
    seo: {
      ogTitle: 'Privacy Policy | BharatVow',
      ogDescription: 'How BharatVow handles your personal information — permissions, optional Accessibility Service, data use, storage, and your rights.',
    },
    sections: [
      {
        heading: '1. Introduction',
        paragraphs: [
          `${SITE.company} ("Company", "we", "us") operates BharatVow ("App", "Service") — a Personal Digital Life Platform for Android. This Privacy Policy explains how we collect, use, store, and protect your information when you use BharatVow and related pages at ${SITE.url}.`,
          'By using BharatVow, you agree to this Privacy Policy. If you do not agree, please do not use the Service.',
        ],
      },
      {
        heading: '1A. What BharatVow Does Not Provide',
        paragraphs: [
          'BharatVow helps users organize and manage their own personal records. BharatVow does NOT provide:',
        ],
        list: [
          'Banking services',
          'Regulated wallet, payment bank, or licensed e-wallet services',
          'Payment, money transfer, or settlement services',
          'Lending, borrowing facilitation, or credit services',
          'Investment, trading, or insurance services',
          'Financial institution, payment aggregator, or payment bank services',
        ],
        afterList: [
          'BharatVow is not a regulated bank, payment bank, payment aggregator, or licensed e-wallet. Where the app shows in-app balance, purchase wallet, or SP wallet features, those credits are for BharatVow app subscriptions and eligible in-app services only — not a general-purpose stored-value account or bank deposit.',
          'Digital Tools record information you enter. They do not move funds on your behalf. App subscription billing is handled through Google Play only.',
        ],
      },
      {
        heading: '2. Information We Collect',
        subsections: [
          {
            heading: '2.1 Information you provide',
            list: [
              'Mobile phone number (for OTP registration and login)',
              'Name and profile details you choose to add',
              'PIN (stored securely for app access on your device)',
              'Records you enter in Digital Tools — such as khata entries, expenses, home records, vehicle details, events, grocery lists, trips, links, and saved places',
              'Contact details you choose to import, select, or save in supported tools — for example when picking recipients for user-initiated messages or saving contacts linked to your records',
              'Message content you compose when you manually start a supported messaging action within BharatVow.',
              'Photos, documents, audio, or other media you choose to capture or attach to your records',
              'Support and grievance correspondence when you contact us',
            ],
          },
          {
            heading: '2.2 Subscription, billing, and program information',
            list: [
              'Subscription purchase and renewal records',
              'In-app balance credit records where applicable',
              'Google Play subscription billing references',
              'Distributor commission records if you enrol in the referral program',
              'Distributor KYC and payout details you provide for the referral program — such as identity and bank account information required for lawful commission payout, as displayed in-app',
            ],
          },
          {
            heading: '2.3 Automatically collected information',
            list: [
              'Device type, operating system version, and app version',
              'Server-side diagnostic and security log data when you use online features (such as login, backup, or subscription services), where applicable',
              'IP address when connecting to our servers for login, backup, or subscription services',
            ],
          },
          {
            heading: '2.4 Cloud backup data',
            paragraphs: [
              'Cloud backup is optional. You must explicitly enable it for supported premium modules in the app — it is never turned on without your action.',
              'When enabled, module records you choose to back up are transmitted to our servers using encrypted connections (HTTPS/TLS) where implemented, and stored so you can restore records when changing phones.',
              'Master cloud backup stores encrypted module payloads on Google Firebase / Cloud Firestore when you run backup for supported premium modules. Photos attached to backed-up records may be uploaded to Cloudinary so they can be restored from cloud URLs.',
              'Optional Google Drive backup (where available in the app): If you choose to back up to Google Drive, you sign in with your Google account and upload a copy of your local app database to your Google Drive. This is separate from master cloud backup on BharatVow servers and is governed by Google\'s terms.',
              'You can disable cloud backup in app settings where that option is available. Disabling backup stops new backup uploads; existing backup copies remain until you delete them, delete your account, or we remove them under our Delete Account policy.',
              'Master cloud backup applies only to supported premium modules. Link Vault and Status Saver are not included in master cloud backup scope.',
              'Backup copies may include contact names, numbers, or message text you saved inside BharatVow records (for example guest lists or reminder entries) — not your entire device contact list.',
            ],
          },
          {
            heading: '2.4A Firebase / Cloud Firestore',
            paragraphs: [
              'BharatVow uses Google Firebase / Cloud Firestore for specific online features you choose to use, including:',
            ],
            list: [
              'Optional master module cloud backup — encrypted record payloads linked to your registered mobile number',
              'Trip Ledger collaboration — trip codes, participant names, and shared expense sync when you join or create a shared trip',
              'Optional user-initiated record sharing in supported tools — for example when you explicitly choose to upload selected module records to the cloud',
            ],
            afterList: [
              'Firestore data is transmitted over HTTPS/TLS. Master module backup encrypts record payloads on the device before upload where implemented. Other Firestore writes follow the feature you use and may not use the same encryption method.',
            ],
          },
          {
            heading: '2.5 Android permissions — overview',
            paragraphs: [
              'BharatVow requests Android permissions only when a feature you choose to use requires them. Most permissions are optional: if you decline, the related feature may not work until permission is granted in Android settings.',
              'Below we explain why each permission is requested, when it is requested, whether it is optional, and how you can disable it (Android Settings → Apps → BharatVow → Permissions). BharatVow does not use Google Sign-In. Account access uses OTP verification to your registered mobile number and an app PIN.',
            ],
          },
          {
            heading: '2.5A Internet (INTERNET)',
            paragraphs: [
              'Why: To sign in with OTP, verify subscriptions, use optional cloud backup, and contact support when you choose online features.',
              'When: When you use features that need a network connection.',
              'Optional: Core local record-keeping on your device does not require constant internet access, but login, backup, and subscription services do when you use them.',
              'Disable: You can restrict background data in Android settings; online features will not work without network access.',
            ],
          },
          {
            heading: '2.5B Account verification (OTP)',
            paragraphs: [
              'Why: To verify your registered mobile number during registration, login, account security steps, and account deletion confirmation using one-time passwords (OTP).',
              'When: Only when you start sign-in, verification, or account deletion flows that require OTP.',
              'How: An OTP is sent to your mobile number through our authentication services over the internet (see §2.5A). You enter the OTP in the app to complete verification. BharatVow does not use Google Sign-In.',
              'Optional: You cannot use BharatVow without completing OTP verification for your registered mobile number.',
              'Disable: Not applicable for core account access — OTP verification is required to create and use an account.',
            ],
          },
          {
            heading: '2.5C Contacts (READ_CONTACTS)',
            paragraphs: [
              'Why: To let you import contacts or select recipients when you use features that involve people in your records or user-initiated messages.',
              'When: Only when you tap an action that opens contact selection or import — for example choosing guests in Event Book, recipients in Birthdays & Anniversaries or Festival Studio, or contacts in Smart Khata before you manually start a supported sending action.',
              'READ_CONTACTS: Used only to show contacts you choose to pick for import or recipient selection. BharatVow does not read, sync, or automatically upload your complete device contact list to our servers.',
              'BharatVow does not declare WRITE_CONTACTS. The app does not save or modify contacts on your device phonebook.',
              'Optional: Yes. You can enter names and numbers manually instead of importing or selecting device contacts.',
              'Disable: Deny Contacts permission in Android settings, or do not use contact import or selection actions.',
            ],
          },
          {
            heading: '2.5D Camera (CAMERA)',
            paragraphs: [
              'Why: So you can capture bills, receipts, documents, profile images, vehicle papers, or other photos you choose to attach to your personal records.',
              'When: Only when you tap to take a photo inside a supported Digital Tool.',
              'Optional: Yes. You can use existing files from storage instead of the camera where the app allows.',
              'Disable: Deny Camera permission in Android settings, or avoid in-app capture actions.',
            ],
          },
{
  heading: '2.5E Photos, videos, and files (storage and media access)',
  paragraphs: [
    'Depending on your Android version, BharatVow may request only the minimum storage or media access required for the feature you choose to use.',
    'Why: To let you attach, save, or browse photos, videos, or files that you choose — for example status media in Status Saver, photos in Vehicle Vault or Home Vault, or files attached to your personal records.',
    'When: Only when you choose to pick, save, or attach media or files within the app.',
    'Optional: Yes. Media and file access is requested only when required for the feature you use.',
    'Exports (PDF/Excel): Reports are generated in the app\'s private storage and shared using Android\'s standard share options.',
    'Disable: You can deny storage or media access in Android Settings or simply avoid using features that require media selection or file attachments.',
  ],
},
          {
            heading: '2.5G Location (ACCESS_COARSE_LOCATION, ACCESS_FINE_LOCATION)',
            paragraphs: [
              'Why: For location-enabled features such as saving places in Place Store, setting or previewing map pins, and sharing event location details you choose to send in Event Book.',
              'When: Only when you use a feature that needs location — for example adding a place, previewing a saved pin, or attaching location details to an event you are organizing.',
              'Optional: Yes. You can enter or adjust location details manually where the app allows.',
              'Disable: Deny Location permission in Android settings. BharatVow does not provide turn-by-turn navigation and does not continuously track your location in the background for advertising or profiling.',
            ],
          },
          {
            heading: '2.5H Accessibility Service (optional, user-initiated messaging only)',
            paragraphs: [
              'Accessibility Service is optional. It is used only for optional, user-initiated productivity features in BharatVow — a Personal Digital Life Platform — where you explicitly start each messaging session. You remain in control at all times.',
              'Supported messaging features within BharatVow that you manually start may use this optional service, including Smart Khata, Event Book, Festival Studio, and other supported messaging features. The app remains fully functional without enabling Accessibility Service.',
            ],
            list: [
              'Accessibility Service is never used automatically and remains under your control.',
            ],
            afterList: [
              'Manual control: Every messaging session is initiated by you inside the app. You select recipients before sending. You can stop or cancel the process at any time before it completes.',
              'Individual messages: Messages are processed one recipient at a time through the flow you start. BharatVow does not provide an unrestricted bulk-send, “message everyone,” mass-messaging, or spam feature.',
              'No automatic or background sending: Messages are not sent automatically, on a schedule, or in the background without your explicit session start.',
              'When it is requested: Only if you enable Accessibility Service for BharatVow in Android settings and then start a supported sending action inside Smart Khata, Event Book, Birthdays & Anniversaries, or Festival Studio.',
              'Optional: Accessibility Service is not required for general use of BharatVow. You can disable it at any time in Android Settings → Accessibility → BharatVow.',
              'How sending works: You compose or confirm message content in BharatVow. Accessibility Service helps complete delivery through your chosen messaging app after you start the session. BharatVow does not operate as a messaging platform or send messages from its own servers.',
              'Server transmission: Accessibility-related screen interaction stays on your device to complete the session you started. BharatVow does not transmit Accessibility session content to our servers except where optional cloud backup includes module records you saved (such as guest, khata, or reminder entries).',
              'Accessibility Service is NOT used to: monitor your activity outside these sessions or monitor other apps on your device; capture or collect passwords or payment credentials; collect sensitive information unrelated to the session; read unrelated screen content; build user profiles; display advertisements; perform user tracking or behavioural analytics; perform background messaging; send promotional or unsolicited messages; or send mass or spam messages.',
              'Disable: Turn off Accessibility Service for BharatVow in Android settings, or do not enable it. You can also use manual entry and other workflows where available without Accessibility Service.',
            ],
          },
          {
            heading: '2.5L Sharing through your device (non-Accessibility)',
            paragraphs: [
              'Some tools let you share summaries, lists, or media through your device’s standard share sheet (for example sharing a grocery list or a saved status clip).',
              'Why: So you can send content you choose to another app or contact using Android’s normal share options.',
              'When: Only when you tap Share and confirm the destination app or contact.',
              'Optional: Yes. This does not require Accessibility Service.',
              'Disable: Do not use Share actions, or deny permissions required for the content being shared (such as storage/media).',
            ],
          },
          {
            heading: '2.5I Vibrate (VIBRATE)',
            paragraphs: [
              'Why: Short vibration feedback for certain in-app interactions where supported on your device.',
              'When: Only during active use of the app when a supported action triggers haptic feedback.',
              'Optional: Yes. Behaviour may vary by device settings.',
              'Disable: Through your device sound and vibration settings.',
            ],
          },
          {
            heading: '2.5J Reminders and notifications',
            paragraphs: [
              'Smart Reminders can schedule device notifications for individual reminders you create and enable — these are task reminders you set, not promotional broadcasts.',
              'Birthdays & Anniversaries and similar date tools surface today and upcoming dates inside the BharatVow app when you open it.',
              'BharatVow does not send promotional push notifications through Firebase Cloud Messaging or similar services.',
              'User-initiated messages sent through Accessibility Service (section 2.5H) are separate from device notifications — they occur only when you start a session and choose recipients.',
            ],
          },
          {
            heading: '2.5K Permissions and services not used',
            paragraphs: [
              'BharatVow does not use Google Sign-In for account login.',
              'BharatVow does not use Firebase Authentication for OTP or account sign-in — OTP is handled through BharatVow\'s secure backend services.',
              'BharatVow does not use Firebase Cloud Messaging or similar services for promotional push notifications.',
              'BharatVow does not use Firebase Crashlytics or a separate mobile crash-reporting SDK in the current app version.',
              'BharatVow does not continuously track your location in the background for advertising or profiling.',
              'BharatVow does not declare RECORD_AUDIO or access the microphone in the current app version.',
              'BharatVow does not declare READ_MEDIA_AUDIO or browse audio files from device storage.',
              'BharatVow does not declare WRITE_CONTACTS; contact access is read-only for import and selection.',
            ],
          },
          {
            heading: '2.6 Third-party services and SDKs',
            paragraphs: ['We use trusted third-party services to operate BharatVow, including:'],
            list: [
              'Google Play Billing — subscription purchase, renewal, and refund processing through Google Play',
              'BharatVow authentication services — OTP delivery, account sign-in, and session management through our secure backend API (HTTPS/TLS)',
              'Google Firebase / Cloud Firestore — optional module cloud backup, trip collaboration sync, and user-initiated cloud record sharing where enabled',
              'Cloudinary — image hosting when optional cloud backup or export uploads photos from your device',
              'Google Maps Platform — map display, place search, and route or distance features in Place Store and related location tools, subject to Google\'s terms',
              'Google Drive (optional, user-initiated) — if you choose Google Drive backup in the app, your local database copy is uploaded to your Google account under Google\'s terms',
              'Cloud infrastructure providers — account services and server hosting under contract',
            ],
            afterList: [
              'These processors handle data only to provide the Service and under contractual confidentiality and security obligations. SDK and processor data collection is limited to what is needed for the stated purpose.',
              'BharatVow does not use Firebase Authentication for OTP or sign-in. BharatVow does not use Firebase Crashlytics in the current app version. BharatVow does not use Firebase Cloud Messaging for promotional push notifications. BharatVow does not use a separate mobile advertising analytics SDK.',
            ],
          },
          {
            heading: '2.7 International data transfers',
            paragraphs: [
              'If you enable cloud backup or use online account features, your data may be stored on servers located in India or other countries where our infrastructure providers operate. We require appropriate safeguards for cross-border processing where applicable under Indian law.',
            ],
          },
          {
            heading: '2.8 Website cookies and logs',
            paragraphs: [
              `When you visit ${SITE.url}, standard web server and security logs may record technical information such as IP address, browser type, pages viewed, and request timestamps.`,
              'We may use essential cookies or similar technologies needed for site functionality and security. We do not use website advertising cookies or sell website visitor data.',
              'If we introduce optional analytics on the website in future, we will update this Privacy Policy before doing so.',
            ],
          },
        ],
      },
      {
        heading: '3. Why We Collect Information',
        paragraphs: ['We use information to:'],
        list: [
          'Authenticate your account (OTP verification and session management)',
          'Provide Digital Tools and features you request',
          'Let you import or select contacts and send user-initiated messages only when you explicitly start a supported session',
          'Process BharatVow app subscriptions billed through Google Play',
          'Operate the optional distributor referral program',
          'Enable optional cloud backup and restore where available',
          'Respond to support and grievance requests',
          'Comply with applicable Indian law',
          'Improve app stability and security using limited diagnostic data',
        ],
        afterList: ['We do not sell your personal data to third parties for advertising.'],
      },
      {
        heading: '3A. Legal Basis for Processing (India)',
        paragraphs: [
          'Where the Digital Personal Data Protection Act, 2023 applies, we process personal data on one or more of the following bases:',
        ],
        list: [
          'Consent — for example, when you register, grant optional permissions, enable optional cloud backup, enable Accessibility Service, or enrol in optional programs',
          'Performance of a contract — to provide the Service, subscriptions, and support you request',
          'Legal obligation — for billing, tax, fraud prevention, and regulatory compliance',
          'Legitimate uses permitted by law — such as improving app security and stability using limited diagnostic data',
        ],
      },
      {
        heading: '4. How Information Is Used and Stored',
        subsections: [
          {
            heading: '4.1 On your device',
            paragraphs: [
              'Most Digital Tool records are stored locally on your device for everyday use. You can view and edit many records without constant internet access.',
            ],
          },
          {
            heading: '4.2 Cloud storage',
            paragraphs: [
              'Optional cloud backup is available for supported premium modules when you explicitly enable it in the app. You can disable cloud backup where the app provides that setting.',
              'Master module cloud backup stores encrypted record payloads on Google Firebase / Cloud Firestore. Photos linked to backed-up records may be stored on Cloudinary. Data is transmitted using HTTPS/TLS.',
              'Trip collaboration and optional user-initiated cloud sharing use Firestore separately from master backup and follow the feature you choose to use.',
              'Optional Google Drive backup (where available) uploads a copy of your local app database to your Google Drive when you sign in and confirm — separate from master cloud backup on BharatVow servers.',
              'Master cloud backup applies only to supported premium modules. Link Vault and Status Saver are not included in master cloud backup scope.',
              'If you delete your account, optional cloud backup copies linked to your account are removed as described in section 4.4 and on our Delete Account page.',
            ],
          },
          {
            heading: '4.3 Retention',
            paragraphs: [
              'We retain personal data only as long as needed for the purposes below. Retention periods may vary depending on legal requirements and the nature of the data:',
            ],
            list: [
              'Account and profile data — purpose: provide the Service and manage your account; retained while your account is active and for a limited period after deletion where required for billing, tax, fraud prevention, or legal compliance',
              'Subscription and billing records — purpose: payment reconciliation and legal compliance; retained as required by applicable law and Google Play billing records',
              'Support and grievance correspondence — purpose: resolve your request and meet legal obligations; retained as needed, then archived or deleted per our records policy',
              'Optional cloud backup — purpose: restore your module records when you request backup services; retained until you delete backup data, delete your account, or we remove it under our Delete Account policy',
              'Server diagnostic and security logs — purpose: investigate stability, authentication, and security issues for online features; retained for a limited period, then deleted or anonymised where practicable',
            ],
            afterList: [
              `You may request account deletion at ${SITE.url}${LEGAL_PATHS.deleteAccount}. Some records may be retained where the law requires.`,
            ],
          },
          {
            heading: '4.4 Data deletion',
            paragraphs: [
              'You can delete your BharatVow account through the in-app deletion flow (Settings or Help & Support → Delete Account) or by following the verified email process on our Delete Account page.',
              'The in-app flow includes a warning, a summary of what will and will not be deleted, OTP verification to your registered mobile number, and a final confirmation step (type DELETE and the last four digits of your mobile number). Your account is removed only after the server confirms successful deletion.',
              'When deletion is completed, we remove your account profile and delete optional cloud backup copies linked to your account where applicable. Locally stored data on your device is removed when you uninstall or reset the app after deletion.',
              'Contact details or messages stored only on your device remain until you remove them locally or uninstall the app.',
              'Some billing, tax, fraud-prevention, grievance, or legally required records may be retained in limited form after deletion, as described on our Delete Account page.',
            ],
          },
        ],
      },
      {
        heading: '5. Sharing of Information',
        paragraphs: ['We may share information with:'],
        list: [
          'Google Play billing — to process BharatVow app subscriptions you choose in the Play Store',
          'Google Firebase / Cloud Firestore — optional module cloud backup, trip collaboration sync, and user-initiated cloud record sharing where enabled',
          'Cloudinary — image hosting for photos uploaded during optional cloud backup or export',
          'Google Maps Platform — map, place search, and route or distance features',
          'Google Drive — optional user-initiated local database backup to your Google account, where available in the app',
          'Cloud infrastructure providers — to host authentication and account services under contract',
          'Legal authorities — when required by law, court order, or valid government request',
          'Professional advisers — under confidentiality obligations',
        ],
        afterList: [
          'We do not share your module content for advertising resale.',
          'User-initiated messages you send through Smart Khata, Event Book, Birthdays & Anniversaries, or Festival Studio are delivered through your device messaging apps (such as WhatsApp) after you start the session. BharatVow does not receive those message contents on our servers unless you included related records in optional cloud backup.',
        ],
      },
      {
        heading: '5A. Messaging and third-party apps',
        paragraphs: [
          'BharatVow messaging features are limited to user-requested actions you manually start in Smart Khata (payment reminders), Event Book (invitations and location details), Birthdays & Anniversaries (birthday and anniversary greetings), and Festival Studio (festival greetings). These messaging actions are always initiated by the user.',
          'When you use optional Accessibility Service messaging features, delivery happens through messaging apps already on your device. Those apps are governed by their own terms and privacy policies.',
          'BharatVow does not control, store, or monitor messages in those third-party apps except where you saved related information in your BharatVow module records or optional cloud backup.',
        ],
      },
      {
        heading: '6. Security Practices',
        paragraphs: [
          'We implement reasonable technical and organisational measures appropriate to the Service. These include, where applicable:',
        ],
        list: [
          'HTTPS/TLS encryption for data transmitted between the app and our servers',
          'OTP-based authentication through BharatVow backend services and PIN protection for app access',
          'Encrypted master module cloud backup payloads before upload to Firestore, where implemented',
          'Access controls on server systems that store account and backup data',
        ],
        afterList: [
          'No method of transmission or storage is completely secure. You are responsible for keeping your PIN confidential, reviewing permissions you grant, and maintaining backups where needed.',
        ],
      },
      {
        heading: '6A. Accessibility Service transparency',
        paragraphs: [
          'Because Accessibility Service is sensitive, we provide this summary in addition to section 2.5H:',
          'BharatVow uses Accessibility Service only when you enable it and only to assist with supported messaging actions that you manually start within the app.',
          'You select each recipient. Each message is sent individually at your direction. You can stop the process at any time. The service is used only for messaging actions that you manually start and can be stopped or disabled at any time.',
          'Accessibility session content is not transmitted to BharatVow servers except where optional cloud backup includes module records you saved.',
          'We do not use Accessibility Service for surveillance, credential harvesting, unrelated screen reading, monitoring other apps, user tracking, behavioural analytics, advertising, profiling, background messaging, promotional messages, or spam.',
          'You can disable Accessibility Service for BharatVow at any time in Android settings.',
        ],
      },
      {
        heading: '7. Your Controls and Rights',
        paragraphs: [
          'Subject to applicable law (including the Digital Personal Data Protection Act, 2023 where applicable), you may:',
        ],
        list: [
          'Access and correct profile information in the app where available',
          'Request account deletion per our Delete Account policy',
          'Withdraw consent where processing is consent-based (including optional permissions and Accessibility Service)',
          'Revoke Android permissions or disable Accessibility Service in device settings',
          'Lodge a grievance with our Grievance Officer',
        ],
        afterList: [
          `Grievance Officer: Shailendra Gahlot · ${SITE.grievanceEmail} · ${SITE.phone}`,
          `Privacy enquiries: ${SITE.privacyEmail}`,
          `Account deletion: ${SITE.url}${LEGAL_PATHS.deleteAccount}`,
          `Support: ${SITE.email}`,
        ],
      },
      {
        heading: "8. Children's Privacy",
        paragraphs: [
          `BharatVow is intended for users aged 18 and older, or use under supervision of a parent or legal guardian. The Service is not directed at children under 13. If you believe a child under 13 has provided personal data without appropriate consent, contact us at ${SITE.privacyEmail}.`,
        ],
      },
      {
        heading: '9. Third-Party Links',
        paragraphs: [
          'Link Vault stores URLs you save. Opening those links may take you to third-party websites governed by their own policies.',
        ],
      },
      {
        heading: '10. Changes to This Policy',
        paragraphs: [
          `We may update this Privacy Policy. Material changes will be posted at ${LEGAL_PATHS.privacyPolicy} and/or notified in-app where practicable. Continued use after an update constitutes acceptance of the revised policy.`,
        ],
      },
      {
        heading: '11. Contact Us',
        paragraphs: [
          SITE.company,
          '507, 5th Floor, Gordhansky Tower, Jhotwara, Jaipur, Rajasthan – 302012, India',
          `Support: ${SITE.email}`,
          `Privacy enquiries: ${SITE.privacyEmail}`,
          `Phone: ${SITE.phone}`,
          `Website: ${SITE.url}`,
        ],
      },
    ],
  },

  terms: {
    id: 'terms',
    title: 'Terms & Conditions',
    description: 'Terms governing your use of the BharatVow mobile application and website.',
    path: LEGAL_PATHS.terms,
    effectiveDate: EFFECTIVE_DATE,
    lastUpdated: LAST_UPDATED,
    lead: 'By downloading, registering, or using BharatVow, you agree to these Terms, our Privacy Policy, and Disclaimer.',
    keywords: 'BharatVow terms, terms and conditions, BharatVow subscription terms',
    seo: {
      ogTitle: 'Terms & Conditions | BharatVow',
      ogDescription: 'Terms governing use of BharatVow — account, subscriptions, acceptable use, and liability.',
    },
    sections: [
      {
        heading: '1. Agreement',
        paragraphs: [
          `These Terms & Conditions ("Terms") govern your use of BharatVow, operated by ${SITE.company} ("Company", "we"). By downloading, registering, or using BharatVow, you agree to these Terms, our Privacy Policy, and Disclaimer.`,
          'If you do not agree, do not use the Service.',
        ],
      },
      {
        heading: '2. Eligibility',
        list: [
          'Be at least 18 years old, or use under supervision of a parent or guardian',
          'Provide a valid mobile number for registration',
          'Have legal capacity to enter a binding agreement under Indian law',
        ],
      },
      {
        heading: '3. Account Registration',
        list: [
          'Registration requires OTP verification and PIN setup',
          'You are responsible for the accuracy of information you provide and for keeping your PIN confidential',
          'One account per mobile number unless we approve otherwise in writing',
          `Notify us promptly of unauthorised access at ${SITE.email}`,
        ],
      },
      {
        heading: '4. Services Description',
        paragraphs: [
          'BharatVow is a Personal Digital Life Platform providing Digital Tools for everyday records — including budgets, expenses, home information, vehicles, events, grocery lists, travel, links, saved places, and related utilities.',
          'Link Vault and Status Saver (Android) are available without a subscription. Other Digital Tools require an active subscription after the 7-day free trial unless stated otherwise in-app.',
          'Features are described on our website and in the app. We may modify features with reasonable notice where practicable.',
          'BharatVow is for personal organization and record keeping. It is not a bank, wallet, payment service, money transfer service, lending platform, investment platform, or professional advisory service.',
        ],
      },
      {
        heading: '5. Subscriptions and Billing',
        list: [
          'BharatVow offers a 7-day free trial to explore Digital Tools before subscribing',
          'Paid plans include Monthly (₹300/month) and Yearly (₹2,000/year) options as displayed in-app before purchase',
          'Prices shown are before GST and applicable taxes, which are added on the subscription confirmation screen in the app before you confirm purchase',
          'Subscriptions automatically renew at the end of each billing period unless you cancel at least 24 hours before renewal through Google Play subscription settings and/or in-app subscription management',
          'If you do not cancel before your free trial ends, your trial may convert to a paid subscription and Google Play may charge the selected plan price plus applicable taxes using your payment method on file with Google Play',
          'Google Play is the merchant of record for subscription purchases; payment processing and renewal billing are governed by Google Play terms and policies',
          'Refunds are governed by our Cancellation & Refund Policy',
        ],
      },
      {
        heading: '6. In-App Balance (Where Applicable)',
        list: [
          'In-app balance features, where available, are for BharatVow app subscriptions and eligible in-app services — not a bank account or general-purpose stored-value account',
          'Commission balance for distributors is separate from Purchase balance used for subscriptions',
          'In-app balances are not bank deposits; applicable terms displayed in-app apply',
        ],
      },
      {
        heading: '7. Distributor Program',
        paragraphs: [
          'Participation in the BharatVow distributor or referral program is subject to the separate Distributor Agreement and published program rules in-app.',
        ],
      },
      {
        heading: '8. User Responsibilities and Acceptable Use',
        paragraphs: ['You agree not to:'],
        list: [
          'Use BharatVow for unlawful purposes',
          'Upload false, misleading, or harmful content',
          'Attempt to reverse engineer, hack, or disrupt the Service',
          'Share account credentials or OTP/PIN with others',
          'Misuse subscription, billing, or referral program features',
          'Use Accessibility Service or messaging features for spam, bulk unsolicited messaging, or unlawful communication',
        ],
        afterList: [
          'You are solely responsible for records, messages, and information you enter or send through the app, including recipient selection and message content.',
        ],
      },
      {
        heading: '9. Data and Backup',
        list: [
          'Primary data storage is on your device',
          'Optional cloud backup is available for applicable modules when enabled',
          'You are responsible for maintaining backups or exports where needed',
          'We are not liable for data loss due to device loss, uninstall, or failure to backup',
        ],
      },
      {
        heading: '10. Intellectual Property',
        paragraphs: [
          'The BharatVow name, logos, app design, and content are owned by the Company or its licensors. You receive a limited, non-exclusive, revocable licence to use the app for personal, non-commercial purposes.',
        ],
      },
      {
        heading: '11. Disclaimer of Warranties',
        paragraphs: [
          'The Service is provided "as is" and "as available". See our Disclaimer. We do not guarantee uninterrupted or error-free operation.',
        ],
      },
      {
        heading: '12. Limitation of Liability',
        paragraphs: [
          'To the maximum extent permitted by Indian law, the Company shall not be liable for indirect, incidental, special, or consequential damages arising from use of BharatVow. Total liability for a claim is limited to the amount you paid to the Company for the relevant service in the preceding twelve months, where applicable.',
        ],
      },
      {
        heading: '13. Termination',
        paragraphs: [
          `We may suspend or terminate accounts for violation of these Terms. You may delete your account at any time per our Delete Account policy at ${SITE.url}${LEGAL_PATHS.deleteAccount}.`,
          'Upon termination or account deletion, your right to use the Service ends. Handling of your personal data after deletion is described in our Privacy Policy and Delete Account policy, subject to legal retention requirements.',
        ],
      },
      {
        heading: '14. Governing Law and Jurisdiction',
        paragraphs: [
          'These Terms are governed by the laws of India. Courts at Jaipur, Rajasthan shall have exclusive jurisdiction, subject to applicable consumer protection forums.',
        ],
      },
      {
        heading: '15. Contact',
        paragraphs: [
          SITE.company,
          '507, 5th Floor, Gordhansky Tower, Jhotwara, Jaipur, Rajasthan – 302012, India',
          `Email: ${SITE.email} · Phone: ${SITE.phone}`,
          `Website: ${SITE.url}`,
          'Grievance Officer: Shailendra Gahlot',
          `CIN: ${SITE.cin} · GSTIN: ${SITE.gstin}`,
        ],
      },
    ],
  },

  disclaimer: {
    id: 'disclaimer',
    title: 'Disclaimer',
    description: 'BharatVow is a Personal Digital Life Platform for personal records — not professional advice.',
    path: LEGAL_PATHS.disclaimer,
    lastUpdated: LAST_UPDATED,
    lead: 'BharatVow helps you organize everyday information. You remain responsible for your own records.',
    keywords: 'BharatVow disclaimer, personal organization app, not regulated financial services',
    seo: {
      ogTitle: 'Disclaimer | BharatVow',
      ogDescription:
        'BharatVow is a Personal Digital Life Platform — not banking, wallet, payment, lending, investment, or professional advisory services.',
    },
    sections: [
      {
        heading: 'Digital Life Management Platform',
        paragraphs: [
          `BharatVow is a Personal Digital Life Platform for personal digital organization. The app helps you save, organize, and access your personal information — such as personal records, budgets, home details, vehicle documents, events, and daily lists — in one place on your phone.`,
          `${SITE.company} provides BharatVow on an "as is" and "as available" basis for personal organization purposes. BharatVow is distributed on Google Play for Android devices.`,
        ],
      },
      {
        heading: 'Not Regulated Financial Services',
        paragraphs: [
          'BharatVow does not provide banking, regulated wallet, payment bank, licensed e-wallet, payment, money transfer, lending, investment, insurance, or financial institution services. Where the app shows in-app balance or wallet features, those are for BharatVow app subscriptions and eligible in-app services only — not a bank account or general-purpose stored-value service. Users organize and manage their own personal records.',
        ],
      },
      {
        heading: 'Not Professional Advice',
        paragraphs: ['BharatVow does not provide professional legal, tax, medical, or regulated advisory services. In particular:'],
        list: [
          'Smart Khata, Budget Pocket, and Expenses Diary are personal record tools — not substitutes for statutory accounting, tax filing, or licensed professional services',
          'Home Vault and Vehicle Vault help organize personal home and vehicle records — they do not replace original documents or prove legal ownership on their own',
          'Event Book, Birthdays & Anniversaries, and similar tools rely on information you enter',
          'Place Store is a location organizer — not a navigation or maps replacement',
        ],
        afterList: ['Consult qualified professionals for decisions that require expert advice.'],
      },
      {
        heading: 'Status Saver and Media on Your Device',
        paragraphs: [
          'Status Saver helps you browse and save photos or videos already available in storage locations you explicitly allow on your Android device. BharatVow does not bypass encryption, access private messaging accounts, or collect status media without your action in the app.',
          'You are responsible for saving and sharing media lawfully and for respecting the rights of others.',
        ],
      },
      {
        heading: 'Optional Accessibility Service and user-initiated messages',
        paragraphs: [
          'Some Digital Tools offer optional messaging actions that you must manually start. If you enable Accessibility Service for BharatVow, it is used only to help complete those actions after you choose recipients and message content — one recipient at a time, with no unrestricted bulk messaging.',
          'You are responsible for the messages you send, the recipients you select, and compliance with applicable laws and messaging platform rules. BharatVow does not send messages automatically, on a schedule, in the background, or without your explicit session start.',
          'You can disable Accessibility Service for BharatVow at any time in Android settings. See our Privacy Policy section 2.5H for full details.',
        ],
      },
      {
        heading: 'Your Records',
        paragraphs: [
          'Information in BharatVow is entered and maintained by you. We do not verify the accuracy of your entries. You are responsible for the records you keep and any decisions you make based on them.',
        ],
      },
      {
        heading: 'Third-Party Services',
        paragraphs: [
          'Google Play subscription billing, optional in-app balance features, and external links you open are subject to third-party terms and availability. We are not responsible for their acts, omissions, or policy changes.',
        ],
      },
      {
        heading: 'Availability',
        paragraphs: [
          'We do not guarantee uninterrupted access. Maintenance, network issues, device problems, or events outside our control may affect the Service. Offline use depends on data stored on your device.',
        ],
      },
      {
        heading: 'Limitation',
        paragraphs: [
          'To the fullest extent permitted by law, the Company disclaims liability for damages arising from use or inability to use BharatVow, including data loss or indirect damages, subject to applicable consumer protection law.',
        ],
      },
      {
        heading: 'Contact',
        paragraphs: [
          `${SITE.email} · ${SITE.phone}`,
          `${SITE.company}, 507, 5th Floor, Gordhansky Tower, Jhotwara, Jaipur, Rajasthan – 302012, India`,
          `Grievance Officer: Shailendra Gahlot · ${LEGAL_PATHS.grievanceRedressal}`,
        ],
      },
    ],
  },

  'legal-information': {
    id: 'legal-information',
    title: 'Legal Information',
    description: 'Official company and contact information for BharatVow.',
    path: LEGAL_PATHS.legalInformation,
    lastUpdated: LAST_UPDATED,
    lead: 'Registered company details for BharatVow.',
    keywords: 'BharatVow legal information, Atulit Baldhama Digital Solutions, company details Jaipur',
    seo: {
      ogTitle: 'Legal Information | BharatVow',
      ogDescription: 'Official company registration and contact details for BharatVow.',
    },
    sections: [
      {
        heading: 'Company',
        paragraphs: [
          SITE.company,
          'A Jaipur-based technology company and the developer of BharatVow.',
        ],
      },
      {
        heading: 'Registered Office',
        paragraphs: [
          '507, 5th Floor,',
          'Gordhansky Tower,',
          'Jhotwara,',
          'Jaipur,',
          'Rajasthan – 302012',
          'India',
        ],
      },
      {
        heading: 'Company Registration',
        paragraphs: [`CIN: ${SITE.cin}`, `GSTIN: ${SITE.gstin}`],
      },
      {
        heading: 'Android Application',
        paragraphs: [
          'BharatVow for Android is distributed on Google Play.',
          SITE.androidPackageName
            ? `Application ID: ${SITE.androidPackageName}`
            : 'Application ID is shown on the Google Play listing and in-app About section.',
        ],
      },
      {
        heading: 'Product',
        paragraphs: [
          'BharatVow — Personal Digital Life Platform',
          'Android application for organizing everyday digital life records. Distributed on Google Play.',
        ],
      },
      {
        heading: 'Support & privacy contact',
        paragraphs: [
          `General support: ${SITE.email}`,
          `Privacy enquiries: ${SITE.privacyEmail}`,
        ],
      },
      {
        heading: 'Website',
        paragraphs: [SITE.url],
      },
      {
        heading: 'Grievance Officer',
        paragraphs: [
          'Shailendra Gahlot',
          `Email: ${SITE.grievanceEmail}`,
          `Phone: ${SITE.phone}`,
          `See our Grievance Redressal policy for the complaint process.`,
        ],
      },
    ],
  },

  'refund-policy': {
    id: 'refund-policy',
    title: 'Cancellation & Refund Policy',
    description: 'Cancellation and refund terms for BharatVow subscriptions and in-app purchases.',
    path: LEGAL_PATHS.refundPolicy,
    lastUpdated: LAST_UPDATED,
    lead: 'Transparent cancellation and refund terms for BharatVow subscriptions.',
    keywords: 'BharatVow refund, cancel subscription, BharatVow trial refund',
    seo: {
      ogTitle: 'Cancellation & Refund Policy | BharatVow',
      ogDescription: 'How to cancel BharatVow subscriptions, trial terms, GST, and refund eligibility.',
    },
    sections: [
      {
        heading: '1. Overview',
        paragraphs: [
          `This policy explains cancellation and refund terms for BharatVow subscriptions and applicable in-app purchases operated by ${SITE.company}.`,
        ],
      },
      {
        heading: '2. Free Tools',
        paragraphs: [
          'Link Vault and Status Saver are available without a subscription. No subscription charge or refund applies to those tools.',
        ],
      },
      {
        heading: '3. Free Trial',
        paragraphs: [
          'BharatVow includes a 7-day free trial to explore Digital Tools before subscribing.',
          'If you do not wish to continue on a paid plan, cancel before the trial ends through Google Play subscription settings and/or in-app subscription management to avoid charges for the next billing period, as applicable.',
          'Unless you cancel in time, your trial may automatically convert to a paid subscription and Google Play may charge the plan price you selected (plus applicable taxes) at the end of the trial period.',
        ],
      },
      {
        heading: '3A. Subscription Auto-Renewal',
        paragraphs: [
          'Paid subscriptions renew automatically at the end of each billing period (Monthly or Yearly) unless you cancel through Google Play Store → Payments & subscriptions → Subscriptions → BharatVow and/or BharatVow in-app subscription settings before the renewal date.',
          'When a subscription renews, Google Play charges the then-current plan price plus applicable taxes using your selected payment method on file with Google Play.',
        ],
      },
      {
        heading: '4. Subscription Cancellation',
        list: [
          'Paid plans include Monthly (₹300/month) and Yearly (₹2,000/year) options as shown in-app',
          'Cancel renewal via Google Play Store → Subscriptions and/or BharatVow subscription settings in the app',
          'Cancellation stops future billing; access typically continues until the end of the current paid period unless otherwise stated in-app',
          'If you cancel mid-cycle, pro-rata refunds for unused days are generally not provided unless required by law or Google Play policy',
        ],
      },
      {
        heading: '5. GST and Taxes',
        paragraphs: [
          'Prices displayed for subscription plans are before GST. GST and other applicable taxes are added on the subscription confirmation screen in the app before you confirm purchase.',
        ],
      },
      {
        heading: '6. Refund Eligibility',
        paragraphs: ['Refunds may be considered when:'],
        list: [
          'Duplicate charge for the same subscription period (with proof)',
          'Technical failure preventing service delivery after billing (verified by support)',
          'Unauthorised charge reported promptly with supporting evidence',
          'Refund required under Google Play refund policy or applicable consumer law',
        ],
        afterList: ['Refunds are generally not provided for:'],
        list2: [
          'Change of mind after successful activation of a paid period',
          'Failure to use features during a paid period',
          'Device loss or user deletion of data without backup',
          'Trial conversion where trial terms were displayed and accepted in-app',
        ],
      },
      {
        heading: '6A. Failed or Declined Payments',
        paragraphs: [
          'If a Google Play subscription payment fails or is declined, Google Play may retry billing according to its policies. BharatVow does not charge your payment method directly outside Google Play.',
          'If you believe you were charged in error after a failed renewal attempt, contact us at support with your Google Play order ID or contact Google Play support through your order history.',
        ],
      },
      {
        heading: '7. In-App Balance (Where Applicable)',
        list: [
          'In-app balance, where available, is for subscriptions and eligible in-app services',
          'Refund requests for unused credited in-app balance may be reviewed if submitted to support within 7 days of the credit and no services were consumed',
          'Balance already used for subscription or completed services is generally non-refundable',
        ],
      },
      {
        heading: '8. Refund Process',
        list: [
          `Email ${SITE.email} with subject: Refund Request — [Google Play order ID or date]`,
          'Include: registered mobile number, billing date, amount, reason, and relevant screenshots',
          'We review requests during business hours; processing time varies by case and Google Play billing method',
          'Approved refunds are credited through Google Play or to in-app balance where operationally feasible',
        ],
      },
      {
        heading: '9. Google Play Purchases',
        paragraphs: [
          'Google Play is the merchant of record for BharatVow subscription purchases. Payment processing, renewal billing, and many refund requests are handled under Google Play policies and timelines.',
          'You may request a refund through Google Play order history within Google Play\'s applicable refund window, or contact us at support@bharatvow.com with your Google Play order ID. Some refund requests must be raised directly through the Play Store.',
          'To manage or cancel your subscription: open Google Play Store → Payments & subscriptions → Subscriptions → BharatVow.',
        ],
      },
      {
        heading: '10. Contact Support',
        paragraphs: [
          `${SITE.email} · ${SITE.phone}`,
          'Grievance Officer: Shailendra Gahlot (same contact details)',
        ],
      },
    ],
  },

  'grievance-redressal': {
    id: 'grievance-redressal',
    title: 'Grievance Redressal',
    description: 'How to raise concerns about BharatVow under applicable Indian law.',
    path: LEGAL_PATHS.grievanceRedressal,
    lastUpdated: LAST_UPDATED,
    lead: 'A clear process to report concerns about BharatVow.',
    keywords: 'BharatVow grievance officer, complaint redressal India',
    seo: {
      ogTitle: 'Grievance Redressal | BharatVow',
      ogDescription: 'How to file a grievance about BharatVow — contact details and support process.',
    },
    sections: [
      {
        heading: 'Grievance Redressal Mechanism',
        paragraphs: [
          `In accordance with applicable Indian laws including the Information Technology Act, 2000, the IT (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, and the Digital Personal Data Protection Act, 2023 (where applicable), ${SITE.company} provides this grievance redressal mechanism for BharatVow users.`,
        ],
      },
      {
        heading: 'Grievance Officer',
        list: [
          'Name: Shailendra Gahlot',
          'Designation: Grievance Officer',
          `Company: ${SITE.company}`,
          `Email: ${SITE.grievanceEmail}`,
          `Phone: ${SITE.phone}`,
          'Address: 507, 5th Floor, Gordhansky Tower, Jhotwara, Jaipur, Rajasthan – 302012, India',
        ],
      },
      {
        heading: 'What You Can Report',
        list: [
          'Privacy and personal data handling concerns',
          'Account access issues not resolved through regular support',
          'Subscription, Google Play billing, or in-app purchase disputes',
          'Concerns about conduct on the platform',
          'Distributor program disputes',
          'Alleged violation of published BharatVow policies',
        ],
      },
      {
        heading: 'How to File a Grievance',
        list: [
          `Email ${SITE.grievanceEmail} with subject line: Grievance — [Brief topic]`,
          'Include: your full name, registered mobile number, app version, device details, description of the issue, date of incident, and desired resolution',
          'Attach screenshots or Google Play billing references where relevant',
        ],
        afterList: [
          'You may also send a written complaint to the registered office address above, marked Attention: Grievance Officer.',
        ],
      },
      {
        heading: 'Support Process',
        paragraphs: [
          'Grievances are reviewed during business hours (Monday – Saturday, 10:00 AM – 6:00 PM IST).',
          'We aim to acknowledge every grievance within twenty-four (24) hours of receipt on business days.',
          'We aim to resolve or respond substantively within fifteen (15) days of receipt, or inform you of the reason for delay and expected timeline where additional review is required.',
          'Complex cases involving billing verification, account access, or legal review may require additional time — we will keep you informed of status by email to your registered contact details.',
        ],
      },
      {
        heading: 'Escalation',
        paragraphs: ['If you are not satisfied with the outcome, you may:'],
        list: [
          'Reply to the grievance thread requesting escalation to management',
          'Approach the appropriate consumer forum or regulatory authority under applicable Indian law',
        ],
      },
      {
        heading: 'Privacy Complaints',
        paragraphs: [
          'For data protection concerns, you may exercise rights described in our Privacy Policy, including correction and deletion requests at our Delete Account page.',
          `Privacy Policy: ${SITE.url}${LEGAL_PATHS.privacyPolicy} · Delete Account: ${SITE.url}${LEGAL_PATHS.deleteAccount}`,
        ],
      },
    ],
  },

  'distributor-agreement': {
    id: 'distributor-agreement',
    title: 'Distributor Agreement',
    description: 'Terms for the BharatVow distributor and referral program.',
    path: LEGAL_PATHS.distributorAgreement,
    effectiveDate: EFFECTIVE_DATE,
    lastUpdated: LAST_UPDATED,
    lead: 'BharatVow Distributor / Referral Program Agreement',
    keywords: 'BharatVow distributor, referral program terms',
    seo: {
      ogTitle: 'Distributor Agreement | BharatVow',
      ogDescription: 'Terms for BharatVow distributor enrollment, commissions, and conduct.',
    },
    sections: [
      {
        heading: 'Agreement',
        paragraphs: [
          `This Agreement is between ${SITE.company} ("Company") and a registered BharatVow user who enrolls as a Distributor ("You"). By enrolling, you agree to this Agreement together with our Terms & Conditions and Privacy Policy.`,
        ],
      },
      {
        heading: '1. Purpose',
        paragraphs: [
          'The Company operates a referral program that allows Distributors to earn commission when new users register and subscribe using a valid referral code, subject to program rules displayed in-app.',
        ],
      },
      {
        heading: '2. Eligibility',
        list: [
          'Valid BharatVow account in good standing',
          'Indian resident aged 18 or older, or a valid legal business entity',
          'Accurate KYC and payout details when required for commission redemption',
          'The Company may reject or terminate enrollment at its discretion',
        ],
      },
      {
        heading: '3. Referral Code and Conduct',
        paragraphs: ['You may share your unique referral code through personal networks. You must not:'],
        list: [
          'Use spam, misleading advertising, or false claims about BharatVow',
          'Impersonate the Company or create fake accounts',
          'Engage in self-referral fraud or post unapproved coupon codes on third-party sites',
        ],
      },
      {
        heading: '3A. Promotional and Metadata Compliance',
        paragraphs: [
          'When promoting BharatVow, you must describe the app accurately and consistently with our website, Google Play listing, Privacy Policy, Terms, and Disclaimer. Do not state or imply that BharatVow provides banking, wallet, payment transfer, lending, investment, or insurance services.',
          'Do not use Google Play badges, screenshots, or promotional claims in a misleading way. Follow Google Play Developer Program policies and applicable Indian advertising and consumer protection laws.',
        ],
      },
      {
        heading: '4. Commission and Payouts',
        paragraphs: [
          'Commission rates and qualifying events are defined in-app at enrollment and may be updated with notice where required.',
          'Commission is credited after validation. The Company may withhold or reverse commission on fraudulent, refunded, or disputed Google Play billing entries.',
          'Commission payout rules, minimum thresholds, and tax obligations (including TDS or GST where applicable) follow in-app display and Indian law.',
        ],
      },
      {
        heading: '5. Code of Conduct',
        list: [
          'Use official BharatVow branding only',
          'Do not guarantee income or misrepresent app features',
          'Follow applicable advertising and consumer protection laws',
        ],
      },
      {
        heading: '6. Termination',
        paragraphs: [
          'The Company may suspend or terminate distributor enrollment for breach, fraud, or reputational harm. Outstanding validated commission may be paid per in-app rules; fraudulent earnings may be reversed.',
        ],
      },
      {
        heading: '7. Privacy and Referral Data',
        paragraphs: [
          'Referral activity, commission records, and KYC or payout details you provide are processed as described in our Privacy Policy. You must not collect, sell, or misuse personal data of prospects beyond lawful sharing of your referral code and accurate product information.',
        ],
      },
      {
        heading: 'Contact',
        paragraphs: [`Program questions: ${SITE.email} · ${SITE.phone}`],
      },
    ],
  },

  'delete-account': {
    id: 'delete-account',
    title: 'Delete Account',
    description: 'How to permanently delete your BharatVow account and associated personal data.',
    path: LEGAL_PATHS.deleteAccount,
    lastUpdated: LAST_UPDATED,
    lead: 'Permanent and irreversible. Cancel active Google Play subscriptions before you delete. This page describes account and data deletion as required by Google Play policies.',
    keywords: 'BharatVow delete account, remove BharatVow data',
    seo: {
      ogTitle: 'Delete Account | BharatVow',
      ogDescription: 'How to permanently delete your BharatVow account and what happens to your data.',
    },
    sections: [],
  },
};

export const LEGAL_PAGE_LIST = Object.values(LEGAL_PAGES);

export const LEGAL_SLUGS = Object.keys(LEGAL_PAGES);

/** @param {string} path */
export function getLegalPageByPath(path) {
  return LEGAL_PAGE_LIST.find((page) => page.path === path) ?? null;
}

/** Legacy slug under /legal/:doc */
export function getLegalPage(slug) {
  const legacyMap = {
    privacy: 'privacy-policy',
    terms: 'terms',
    disclaimer: 'disclaimer',
    refund: 'refund-policy',
    grievance: 'grievance-redressal',
    'distributor-agreement': 'distributor-agreement',
  };
  const id = legacyMap[slug] ?? slug;
  return LEGAL_PAGES[id] ?? null;
}
