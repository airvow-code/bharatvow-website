import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import { cn } from '@/utils/cn';

/**
 * Shared section wrapper for Digital Tool pages — consistent spacing and typography.
 */
export default function DigitalToolSection({
  id,
  tone = 'default',
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  children,
}) {
  return (
    <Section id={id} tone={tone} className={className} labelledBy={title ? `${id}-heading` : undefined}>
      {(eyebrow || title || description) && (
        <SectionHeading
          id={`${id}-heading`}
          eyebrow={eyebrow}
          title={title}
          description={description}
          align={align}
          className={cn(align === 'left' && 'mb-10 md:mb-12')}
        />
      )}
      {children}
    </Section>
  );
}
