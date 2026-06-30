import { PageHero } from '@/components/ui/PageHero';
import { SITE_NAME } from '@/lib/constants';

export function AboutHero() {
  return (
    <PageHero
      label="Our Story"
      title="A Legacy of"
      highlight="Flavor & Purity"
      description={`For over seven decades, ${SITE_NAME} has been synonymous with uncompromising quality — bringing the true taste of Indian spices to kitchens around the world.`}
    />
  );
}
