'use client';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Send, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  subject: z.enum(['general', 'bulk-order', 'retailer', 'feedback']),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof schema>;

const subjects = [
  { value: 'general', label: 'General Enquiry' },
  { value: 'bulk-order', label: 'Bulk Order' },
  { value: 'retailer', label: 'Retailer Enquiry' },
  { value: 'feedback', label: 'Feedback' },
] as const;

export function ContactForm() {
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia('(max-width: 768px)').matches);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setSubmitError(null);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      reset();
    } catch {
      setSubmitError('Something went wrong. Please try again.');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: isMobile ? 0.3 : 0.5 }}
    >
      {isSubmitSuccessful ? (
        <div className="text-center py-12" role="status" aria-live="polite">
          <div className="w-16 h-16 mx-auto rounded-full bg-brand-saffron/10 flex items-center justify-center mb-4">
            <Send className="w-8 h-8 text-brand-saffron" />
          </div>
          <h3 className="text-xl font-display font-semibold text-brand-charcoal mb-2">
            Thank You!
          </h3>
          <p className="text-brand-charcoal/70 text-sm">
            We will get back to you within 24 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
          {submitError && (
            <div role="alert" className="flex items-center gap-2 p-3 rounded-xl bg-destructive/10 text-destructive text-sm">
              <AlertCircle className="w-4 h-4 shrink-0" />
              {submitError}
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FieldWrapper label="Full Name" error={errors.name?.message} htmlFor="name">
              <input
                {...register('name')}
                id="name"
                placeholder="Your name"
                className="w-full px-4 py-3.5 bg-brand-warm-white border border-brand-gold/20 rounded-xl text-sm text-brand-charcoal placeholder:text-brand-charcoal/30 focus:outline-none focus:border-brand-saffron focus:ring-2 focus:ring-brand-saffron/10 transition-all"
              />
            </FieldWrapper>

            <FieldWrapper label="Email Address" error={errors.email?.message} htmlFor="email">
              <input
                {...register('email')}
                id="email"
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3.5 bg-brand-warm-white border border-brand-gold/20 rounded-xl text-sm text-brand-charcoal placeholder:text-brand-charcoal/30 focus:outline-none focus:border-brand-saffron focus:ring-2 focus:ring-brand-saffron/10 transition-all"
              />
            </FieldWrapper>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FieldWrapper label="Phone Number" error={errors.phone?.message} htmlFor="phone">
              <input
                {...register('phone')}
                id="phone"
                type="tel"
                placeholder="+91 98765 43210"
                className="w-full px-4 py-3.5 bg-brand-warm-white border border-brand-gold/20 rounded-xl text-sm text-brand-charcoal placeholder:text-brand-charcoal/30 focus:outline-none focus:border-brand-saffron focus:ring-2 focus:ring-brand-saffron/10 transition-all"
              />
            </FieldWrapper>

            <FieldWrapper label="Subject" error={errors.subject?.message} htmlFor="subject">
              <select
                {...register('subject')}
                id="subject"
                className="w-full px-4 py-3.5 bg-brand-warm-white border border-brand-gold/20 rounded-xl text-sm text-brand-charcoal focus:outline-none focus:border-brand-saffron focus:ring-2 focus:ring-brand-saffron/10 transition-all"
              >
                <option value="">Select a subject</option>
                {subjects.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
            </FieldWrapper>
          </div>

          <FieldWrapper label="Message" error={errors.message?.message} htmlFor="message">
            <textarea
              {...register('message')}
              id="message"
              rows={5}
              placeholder="Tell us how we can help..."
              className="w-full px-4 py-3.5 bg-brand-warm-white border border-brand-gold/20 rounded-xl text-sm text-brand-charcoal placeholder:text-brand-charcoal/30 focus:outline-none focus:border-brand-saffron focus:ring-2 focus:ring-brand-saffron/10 transition-all resize-y"
            />
          </FieldWrapper>

          <Button
            type="submit"
            variant="default"
            size="lg"
            className="w-full gap-2"
            disabled={isSubmitting}
          >
            <Send className="w-4 h-4" />
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      )}
    </motion.div>
  );
}

function FieldWrapper({
  label,
  error,
  htmlFor,
  children,
}: {
  label: string;
  error?: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  const errorId = `${htmlFor}-error`;
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-body font-medium text-brand-charcoal/70 mb-1.5">
        {label}
      </label>
      {children}
      {error && (
        <p id={errorId} role="alert" className="mt-1 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
