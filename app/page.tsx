import { HeroSection } from '@/components/home/HeroSection';
import { StatsBar } from '@/components/home/StatsBar';
import { CategoryCards } from '@/components/home/CategoryCards';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { HeritageBanner } from '@/components/home/HeritageBanner';
import { TrustBadges } from '@/components/home/TrustBadges';
import { Testimonials } from '@/components/home/Testimonials';

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
