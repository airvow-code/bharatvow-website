import { useState } from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import { CONTACT } from '@/data/support';
import { SITE } from '@/utils/constants';
import { cn } from '@/utils/cn';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputClass = cn(
  'min-h-[44px] w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-heading shadow-sm',
  'placeholder:text-subtle transition-colors duration-200',
  'focus:border-primary-mid focus:outline-none focus:ring-2 focus:ring-primary/15',
);

const inputErrorClass = 'border-red-400 focus:border-red-400 focus:ring-red-200';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const validate = () => {
    const next = {};

    if (!form.name.trim()) next.name = true;
    if (!form.email.trim()) {
      next.email = true;
    } else if (!EMAIL_PATTERN.test(form.email.trim())) {
      next.email = 'invalid';
    }
    if (!form.subject.trim()) next.subject = true;
    if (!form.message.trim()) next.message = true;

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const { [field]: _, ...rest } = current;
      return rest;
    });
    if (status) setStatus(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus(null);

    if (!validate()) {
      setStatus('error');
      return;
    }

    const body = [
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      `Phone: ${form.phone.trim() || 'Not provided'}`,
      '',
      form.message.trim(),
    ].join('\n');

    const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(form.subject.trim())}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setStatus('success');
  };

  const { form: copy } = CONTACT;

  return (
    <div className="rounded-2xl border border-border bg-surface p-6 shadow-card md:p-8">
      <h2 className="font-display text-xl font-bold text-heading">{copy.title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">{copy.description}</p>

      <form className="mt-6 space-y-5" onSubmit={handleSubmit} noValidate>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium text-heading">
              {copy.fields.name.label}
              <span className="text-secondary-dark" aria-hidden>
                {' '}
                *
              </span>
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              aria-required="true"
              value={form.name}
              onChange={handleChange('name')}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'contact-form-error' : undefined}
              className={cn('mt-2', inputClass, errors.name && inputErrorClass)}
            />
          </div>

          <div>
            <label htmlFor="contact-email" className="block text-sm font-medium text-heading">
              {copy.fields.email.label}
              <span className="text-secondary-dark" aria-hidden>
                {' '}
                *
              </span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              aria-required="true"
              value={form.email}
              onChange={handleChange('email')}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'contact-form-error' : undefined}
              className={cn('mt-2', inputClass, errors.email && inputErrorClass)}
            />
          </div>
        </div>

        <div>
          <label htmlFor="contact-phone" className="block text-sm font-medium text-heading">
            {copy.fields.phone.label}
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={handleChange('phone')}
            className={cn('mt-2', inputClass)}
          />
        </div>

        <div>
          <label htmlFor="contact-subject" className="block text-sm font-medium text-heading">
            {copy.fields.subject.label}
            <span className="text-secondary-dark" aria-hidden>
              {' '}
              *
            </span>
          </label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            required
            aria-required="true"
            value={form.subject}
            onChange={handleChange('subject')}
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? 'contact-form-error' : undefined}
            className={cn('mt-2', inputClass, errors.subject && inputErrorClass)}
          />
        </div>

        <div>
          <label htmlFor="contact-message" className="block text-sm font-medium text-heading">
            {copy.fields.message.label}
            <span className="text-secondary-dark" aria-hidden>
              {' '}
              *
            </span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            required
            aria-required="true"
            value={form.message}
            onChange={handleChange('message')}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'contact-form-error' : undefined}
            className={cn('mt-2 resize-y', inputClass, errors.message && inputErrorClass)}
          />
        </div>

        {status === 'error' && (
          <div
            id="contact-form-error"
            role="alert"
            className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
          >
            <AlertCircle size={18} strokeWidth={2} className="mt-0.5 shrink-0" aria-hidden />
            <span>
              {errors.email === 'invalid' ? copy.emailInvalid : copy.error}
            </span>
          </div>
        )}

        {status === 'success' && (
          <div
            role="status"
            className="flex items-start gap-3 rounded-xl border border-accent-green/25 bg-accent-green-soft px-4 py-3 text-sm text-accent-green-dark"
          >
            <CheckCircle2 size={18} strokeWidth={2} className="mt-0.5 shrink-0" aria-hidden />
            <span>{copy.success}</span>
          </div>
        )}

        <Button type="submit" size="lg" className="w-full sm:w-auto">
          {copy.submitLabel}
        </Button>
      </form>
    </div>
  );
}
