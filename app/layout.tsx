import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — The Royal Taste of India`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: `${SITE_NAME} — The Royal Taste of India`,
    description: SITE_DESCRIPTION,
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-brand-ivory text-brand-charcoal font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
