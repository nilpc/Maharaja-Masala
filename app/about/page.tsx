import type { Metadata } from 'next';
import { AboutHero } from '@/components/about/AboutHero';
import { BrandTimeline } from '@/components/about/BrandTimeline';
import { ValuePillars } from '@/components/about/ValuePillars';
import { ProcessSteps } from '@/components/about/ProcessSteps';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Our Story',
  description: `Discover the legacy of ${SITE_NAME} — 75+ years of spice mastery, from the heart of Jaipur to the world.`,
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <BrandTimeline />
      <ValuePillars />
      <ProcessSteps />
    </>
  );
}
