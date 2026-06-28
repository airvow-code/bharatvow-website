/** Accessible loading placeholder — reserves layout, limits CLS. */
export default function PageSkeleton({ label = 'Loading page' }) {
  return (
    <div
      className="mx-auto max-w-container animate-pulse px-4 py-16 motion-reduce:animate-none"
      role="status"
      aria-live="polite"
      aria-label={label}
    >
      <div className="mx-auto max-w-prose space-y-4">
        <div className="h-4 w-24 rounded bg-border" />
        <div className="h-10 w-3/4 rounded bg-border" />
        <div className="h-4 w-full rounded bg-border" />
        <div className="h-4 w-5/6 rounded bg-border" />
      </div>
    </div>
  );
}
