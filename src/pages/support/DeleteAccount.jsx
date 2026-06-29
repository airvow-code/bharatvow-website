import { AlertTriangle } from 'lucide-react';
import { getLegalPageByPath } from '@/data/legal';
import { DELETE_ACCOUNT } from '@/data/support';
import LegalDocumentLayout from '@/layouts/LegalDocumentLayout';
import Button from '@/components/ui/Button';
import {
  ProseSection,
  InfoCard,
  InternalLink,
} from '@/components/common/LegalProse';
import { SITE } from '@/utils/constants';
import { PATHS } from '@/config/paths';

export default function DeleteAccount() {
  const page = getLegalPageByPath(PATHS.deleteAccount);

  if (!page) {
    return null;
  }

  return (
    <LegalDocumentLayout page={page}>
      <InfoCard title={DELETE_ACCOUNT.warning.title} variant="warning">
        <div className="flex flex-col gap-3 sm:flex-row">
          <AlertTriangle size={22} strokeWidth={2} className="shrink-0 text-secondary-dark" aria-hidden />
          <div>
            <p className="font-medium text-heading">Warning: {DELETE_ACCOUNT.warning.items[0]}</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-body">
              {DELETE_ACCOUNT.warning.items.slice(1).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm font-medium text-heading">
              Recommendation: {DELETE_ACCOUNT.warning.recommendation}
            </p>
          </div>
        </div>
      </InfoCard>

      <ProseSection title="How to delete (in-app)">
        <ol className="list-decimal space-y-2 pl-5">
          {DELETE_ACCOUNT.inAppSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <p className="text-sm text-muted">Menu labels match the current BharatVow app build.</p>
      </ProseSection>

      <ProseSection title="How to delete (email request)">
        <p>If you cannot access the app, email us:</p>
        <p>
          <strong>Email:</strong>{' '}
          <a
            href={`mailto:${SITE.email}?subject=${encodeURIComponent(DELETE_ACCOUNT.emailRequest.subject)}`}
            className="font-medium text-primary-light hover:text-primary"
          >
            {SITE.email}
          </a>
          <br />
          <strong>Subject:</strong> {DELETE_ACCOUNT.emailRequest.subject}
        </p>
        <p className="font-medium text-heading">Include:</p>
        <ul className="list-disc space-y-2 pl-5">
          {DELETE_ACCOUNT.emailRequest.include.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="text-sm text-muted">{DELETE_ACCOUNT.emailRequest.note}</p>
      </ProseSection>

      <ProseSection title="Processing timeline">
        <ul className="space-y-3">
          {DELETE_ACCOUNT.timeline.map(({ label, value }) => (
            <li key={label}>
              <strong className="text-heading">{label}:</strong> {value}
            </li>
          ))}
        </ul>
        <p className="text-sm text-muted">
          Timelines may vary depending on verification requirements and the nature of your request.
        </p>
      </ProseSection>

      <ProseSection title="What data is deleted">
        <p>When your account is deleted:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Your BharatVow account profile linked to your registered mobile number is removed</li>
          <li>Cloud backup copies linked to your account are removed where applicable</li>
          <li>Locally stored module data on your device is removed when you uninstall or reset the app</li>
        </ul>
      </ProseSection>

      <ProseSection title="Data retained for legal purposes">
        <p>We may retain certain records after deletion, including:</p>
        <ul className="list-disc space-y-2 pl-5">
          {DELETE_ACCOUNT.retained.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>Retained data is used only for legal compliance — not for marketing.</p>
      </ProseSection>

      <ProseSection title="Subscriptions">
        <p>
          Cancel Google Play or in-app subscriptions <strong>before</strong> deletion to prevent renewal
          charges.
        </p>
      </ProseSection>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Button to={PATHS.contact} variant="outline">
          Contact support
        </Button>
        <Button to={PATHS.privacyPolicy} variant="ghost">
          Privacy Policy
        </Button>
      </div>

      <p className="mt-8 text-sm text-muted">
        Questions about data handling? See our <InternalLink to={PATHS.privacyPolicy}>Privacy Policy</InternalLink>{' '}
        or <InternalLink to={PATHS.grievanceRedressal}>Grievance Redressal</InternalLink>.
      </p>
    </LegalDocumentLayout>
  );
}
