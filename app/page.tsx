import type { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { StatsBar } from '@/components/home/StatsBar';
import { CategoryCards } from '@/components/home/CategoryCards';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { HeritageBanner } from '@/components/home/HeritageBanner';
import { TrustBadges } from '@/components/home/TrustBadges';
import { Testimonials } from '@/components/home/Testimonials';
import { SITE_NAME, SITE_TAGLINE } from '@/lib/constants';

export const metadata: Metadata = {
  title: `${SITE_NAME} — ${SITE_TAGLINE}`,
  description: 'Premium Indian spices & masala blends since 1950. Handpicked, stone-ground, and lab-tested for purity. Explore our royal collection.',
  openGraph: {
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: 'Premium Indian spices & masala blends since 1950. Handpicked, stone-ground, and lab-tested for purity.',
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <CategoryCards />
      <FeaturedProducts />
      <HeritageBanner />
      <TrustBadges />
      <Testimonials />
    </>
  );
}
