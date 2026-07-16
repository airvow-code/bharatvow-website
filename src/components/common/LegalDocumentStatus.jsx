import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';
import { LEGAL_PATHS } from '@/config/paths';

/**
 * @param {'not_found'|'network'|'timeout'|'config'} kind
 * @param {string} [message]
 * @param {() => void} [onRetry]
 */
export default function LegalDocumentStatus({ kind, message, onRetry }) {
  if (kind === 'not_found') {
    return (
      <div className="rounded-2xl border border-border bg-canvas/80 px-6 py-10 md:px-8">
        <h2 className="font-display text-xl font-bold text-heading">Document not available.</h2>
        <p className="mt-3 text-base leading-relaxed text-muted">
          This legal document is not currently published. Please visit the Legal Center for other
          documents.
        </p>
        <Button to={LEGAL_PATHS.hub} variant="outline" size="sm" className="mt-6">
          Back to Legal Center
        </Button>
      </div>
    );
  }

  if (kind === 'config') {
    return (
      <div className="rounded-2xl border border-border bg-canvas/80 px-6 py-10 md:px-8">
        <h2 className="font-display text-xl font-bold text-heading">Configuration required</h2>
        <p className="mt-3 text-base leading-relaxed text-muted">
          {message ||
            'Legal API base URL is not configured. Set VITE_LEGAL_API_BASE_URL in your environment, then restart the Vite dev server.'}
        </p>
        <p className="mt-2 font-mono text-sm text-body">VITE_LEGAL_API_BASE_URL=https://your-api-host</p>
      </div>
    );
  }

  // network + timeout share retry UI
  return (
    <div className="rounded-2xl border border-border bg-canvas/80 px-6 py-10 md:px-8">
      <h2 className="font-display text-xl font-bold text-heading">Unable to load the document.</h2>
      <p className="mt-3 text-base leading-relaxed text-muted">
        {kind === 'timeout'
          ? 'The request timed out. Please try again.'
          : 'A network or server error occurred. Please try again.'}
      </p>
      {typeof onRetry === 'function' && (
        <Button type="button" variant="outline" size="sm" className="mt-6" onClick={onRetry}>
          Retry
        </Button>
      )}
      <p className="mt-4 text-sm text-muted">
        Or return to the{' '}
        <Link to={LEGAL_PATHS.hub} className="font-medium text-primary-light hover:text-primary">
          Legal Center
        </Link>
        .
      </p>
    </div>
  );
}
