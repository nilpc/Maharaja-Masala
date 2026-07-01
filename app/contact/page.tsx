import type { Metadata } from 'next';
import { SITE_NAME } from '@/lib/constants';
import { ContactPageClient } from './client';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Get in touch with ${SITE_NAME}. Reach out for bulk orders, retail enquiries, or any questions about our premium spices and masala blends.`,
  openGraph: {
    title: `Contact ${SITE_NAME}`,
    description: `Get in touch with ${SITE_NAME} for bulk orders, retail enquiries, or any questions.`,
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
