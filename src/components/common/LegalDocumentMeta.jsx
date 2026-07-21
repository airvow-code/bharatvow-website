import { cn } from '@/utils/cn';

export function formatLegalDate(value) {
  if (!value) return null;
  if (/^\d{4}-\d{2}-\d{2}/.test(String(value))) {
    const d = new Date(`${String(value).slice(0, 10)}T00:00:00Z`);
    if (!Number.isNaN(d.getTime())) {
      return d.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC',
      });
    }
  }
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return String(value);
  return d.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

function buildFooterLine({ version, effectiveDate, lastUpdated }) {
  const parts = [];
  if (version) parts.push(`Version ${version}`);
  if (effectiveDate) parts.push(`Effective ${effectiveDate}`);
  if (lastUpdated) parts.push(`Last Updated ${lastUpdated}`);
  return parts.join(' · ');
}

/**
 * Public legal document metadata — Version, Effective, Last Updated only.
 * @param {'header'|'footer'} variant
 */
export default function LegalDocumentMeta({
  variant = 'header',
  version = null,
  effectiveDate = null,
  lastUpdated = null,
  className,
}) {
  if (!version && !effectiveDate && !lastUpdated) return null;

  if (variant === 'footer') {
    return (
      <p className={cn('text-xs leading-relaxed text-muted', className)}>
        {buildFooterLine({ version, effectiveDate, lastUpdated })}
      </p>
    );
  }

  return (
    <div className={cn('space-y-0.5 text-sm text-muted', className)}>
      {version && <p>Version: {version}</p>}
      {effectiveDate && <p>Effective: {effectiveDate}</p>}
      {lastUpdated && <p>Last Updated: {lastUpdated}</p>}
    </div>
  );
}
