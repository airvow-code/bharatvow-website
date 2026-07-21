import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { cn } from '@/utils/cn';
import { slugifyLegalHeading, ExternalLink } from '@/components/common/LegalProse';

/**
 * Presentation-only: omit the Document Metadata section from public pages.
 * Does not alter API payloads or stored legal documents.
 */
export function stripDocumentMetadataSection(markdown = '') {
  const lines = String(markdown).split('\n');
  const out = [];
  let skipping = false;

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];

    if (/^#{1,3}\s+Document Metadata\s*$/i.test(line)) {
      skipping = true;
      while (out.length && /^\s*$/.test(out[out.length - 1])) out.pop();
      if (out.length && /^---\s*$/.test(out[out.length - 1])) out.pop();
      while (out.length && /^\s*$/.test(out[out.length - 1])) out.pop();
      continue;
    }

    if (skipping) {
      if (/^#{1,3}\s+/.test(line) && !/^#{1,3}\s+Document Metadata\s*$/i.test(line)) {
        skipping = false;
      } else {
        continue;
      }
    }

    out.push(line);
  }

  return out.join('\n').replace(/^\n+/, '').replace(/\n{3,}/g, '\n\n');
}

function MarkdownH2({ children, ...props }) {
  const text = String(children);
  const id = slugifyLegalHeading(text);
  return (
    <h2
      id={id}
      className="scroll-mt-24 font-display text-xl font-bold text-heading md:text-[1.25rem]"
      {...props}
    >
      {children}
    </h2>
  );
}

function MarkdownH3({ children, ...props }) {
  const text = String(children);
  const id = slugifyLegalHeading(text);
  return (
    <h3 id={id} className="mt-6 scroll-mt-24 font-display text-lg font-semibold text-heading" {...props}>
      {children}
    </h3>
  );
}

function MarkdownLink({ href = '', children }) {
  if (href.startsWith('/') && !href.startsWith('//')) {
    return (
      <Link
        to={href}
        className="break-anywhere font-medium text-primary-light underline-offset-2 hover:text-primary hover:underline"
      >
        {children}
      </Link>
    );
  }
  return <ExternalLink href={href}>{children}</ExternalLink>;
}

/**
 * Renders API Markdown using existing legal prose visual tokens.
 */
export default function LegalMarkdown({ content, className }) {
  if (!content) return null;

  const displayContent = stripDocumentMetadataSection(content);

  return (
    <article
      className={cn(
        'prose-legal min-w-0 space-y-4 text-base leading-[1.75] text-body',
        '[&_h1]:font-display [&_h1]:text-2xl [&_h1]:font-bold [&_h1]:text-heading',
        '[&_h2]:mt-10 [&_h2]:border-b [&_h2]:border-border [&_h2]:pb-3',
        '[&_h3]:mt-6',
        '[&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5',
        '[&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-5',
        '[&_hr]:my-8 [&_hr]:border-border',
        '[&_table]:mt-4 [&_table]:w-full [&_table]:border-collapse [&_table]:text-sm',
        '[&_th]:border [&_th]:border-border [&_th]:bg-surface [&_th]:px-3 [&_th]:py-2 [&_th]:text-left',
        '[&_td]:border [&_td]:border-border [&_td]:px-3 [&_td]:py-2',
        '[&_strong]:font-semibold [&_strong]:text-heading',
        className,
      )}
    >
      <ReactMarkdown
        components={{
          h2: MarkdownH2,
          h3: MarkdownH3,
          a: MarkdownLink,
          p: ({ children }) => <p className="mt-4 text-base leading-[1.75] text-body">{children}</p>,
        }}
      >
        {displayContent}
      </ReactMarkdown>
    </article>
  );
}

/** Build TOC entries from markdown ## / ### headings */
export function buildMarkdownToc(markdown = '') {
  const items = [];
  const lines = stripDocumentMetadataSection(markdown).split('\n');
  for (const line of lines) {
    const h2 = line.match(/^##\s+(.+?)\s*$/);
    if (h2) {
      const label = h2[1].replace(/#+$/, '').trim();
      if (label) {
        items.push({ id: slugifyLegalHeading(label), label, indent: false });
      }
      continue;
    }
    const h3 = line.match(/^###\s+(.+?)\s*$/);
    if (h3) {
      const label = h3[1].replace(/#+$/, '').trim();
      if (label) {
        items.push({ id: slugifyLegalHeading(label), label, indent: true });
      }
    }
  }
  return items;
}
