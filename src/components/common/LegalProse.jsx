import { Link } from 'react-router-dom';
import { cn } from '@/utils/cn';

export function slugifyLegalHeading(text = '') {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

function Paragraphs({ items }) {
  if (!items?.length) return null;
  return items.map((text) => (
    <p key={text.slice(0, 40)} className="mt-4 text-base leading-[1.75] text-body">
      {text}
    </p>
  ));
}

function BulletList({ items, className }) {
  if (!items?.length) return null;
  return (
    <ul className={cn('mt-4 list-disc space-y-2 pl-5 text-base leading-[1.75] text-body', className)}>
      {items.map((item) => (
        <li key={item.slice(0, 48)}>{item}</li>
      ))}
    </ul>
  );
}

function Subsection({ subsection }) {
  const id = slugifyLegalHeading(subsection.heading);
  return (
    <div className="mt-6" id={id}>
      <h3 className="font-display text-lg font-semibold text-heading">{subsection.heading}</h3>
      <Paragraphs items={subsection.paragraphs} />
      <BulletList items={subsection.list} />
    </div>
  );
}

function Section({ section, id }) {
  return (
    <section id={id} className="border-b border-border py-10 last:border-b-0 scroll-mt-24">
      <h2 className="font-display text-xl font-bold text-heading md:text-[1.25rem]">{section.heading}</h2>
      <Paragraphs items={section.paragraphs} />
      <BulletList items={section.list} />
      {section.afterList?.map((text) => (
        <p key={text.slice(0, 40)} className="mt-4 text-base leading-[1.75] text-body">
          {text}
        </p>
      ))}
      <BulletList items={section.list2} />
      {section.subsections?.map((sub) => (
        <Subsection key={sub.heading} subsection={sub} />
      ))}
    </section>
  );
}

export default function LegalProse({ sections, className }) {
  return (
    <article className={cn('mx-auto max-w-prose px-4 py-12 md:px-6 md:py-16 lg:px-8', className)}>
      {sections.map((section) => (
        <Section
          key={section.heading}
          section={section}
          id={slugifyLegalHeading(section.heading)}
        />
      ))}
    </article>
  );
}

export function ProseBlock({ children, className }) {
  return (
    <div className={cn('mx-auto max-w-prose px-4 py-12 md:px-6 md:py-16 lg:px-8', className)}>
      {children}
    </div>
  );
}

export function ProseSection({ title, children }) {
  return (
    <section className="border-b border-border py-10 last:border-b-0">
      {title && <h2 className="font-display text-xl font-bold text-heading">{title}</h2>}
      <div className="mt-4 space-y-4 text-base leading-[1.75] text-body">{children}</div>
    </section>
  );
}

export function InfoCard({ title, children, variant = 'default' }) {
  return (
    <div
      className={cn(
        'rounded-card border p-6',
        variant === 'warning'
          ? 'border-secondary-border bg-secondary-soft'
          : 'border-border bg-surface shadow-card',
      )}
    >
      {title && <h3 className="font-display text-lg font-semibold text-heading">{title}</h3>}
      <div className={cn(title && 'mt-4')}>{children}</div>
    </div>
  );
}

export function ExternalLink({ href, children }) {
  const external = href?.startsWith('http');
  return (
    <a
      href={href}
      className="font-medium text-primary-light underline-offset-2 hover:text-primary hover:underline break-anywhere"
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  );
}

export function InternalLink({ to, children }) {
  return (
    <Link to={to} className="break-anywhere font-medium text-primary-light underline-offset-2 hover:text-primary hover:underline">
      {children}
    </Link>
  );
}
