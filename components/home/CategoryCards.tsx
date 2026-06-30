'use client';
import { motion } from 'framer-motion';
import { Sprout, Flame, Wheat, Gift, Package } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/Button';
import { CATEGORIES } from '@/lib/constants';

const iconMap: Record<string, React.ElementType> = {
  Sprout,
  Flame,
  Wheat,
  Gift,
  Package,
};

const categoryDescriptions: Record<string, string> = {
  'whole-spices': 'Pure, sun-dried spices straight from the farms',
  'masala-blends': 'Signature blends crafted by master grinders',
  'seeds': 'Premium seeds for tempering and cooking',
  'special-packs': 'Curated speciality blends & marinades',
  'combo-packs': 'Value-packed gift hampers & collections',
};

const gradients: Record<string, string> = {
  'whole-spices': 'from-brand-saffron/10 to-brand-gold/10',
  'masala-blends': 'from-brand-crimson/10 to-brand-saffron/10',
  'seeds': 'from-brand-gold/10 to-brand-ivory/20',
  'special-packs': 'from-brand-saffron/10 to-brand-ivory/20',
  'combo-packs': 'from-brand-crimson/10 to-brand-gold/10',
};

export function CategoryCards() {
  return (
    <section className="min-h-screen py-16 sm:py-20 bg-brand-ivory flex items-center">
      <div className="w-full max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp" className="text-center mb-12">
          <span className="text-brand-saffron font-mono text-sm uppercase tracking-[0.2em]">
            Our Range
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-charcoal mt-3">
            Explore Our Collections
          </h2>
        </AnimatedSection>

        <AnimatedSection variant="stagger" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-6 gap-y-8 sm:gap-8">
          {CATEGORIES.map((cat) => {
            const Icon = iconMap[cat.icon] || Package;
            return (
              <motion.a
                key={cat.id}
                href={`/products?category=${cat.id}`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className={`group h-full rounded-2xl bg-gradient-to-br ${gradients[cat.id]} bg-brand-warm-white p-6 sm:p-8 border border-brand-gold/10 hover:border-brand-saffron/30 transition-all duration-500 flex flex-col`}
                whileHover={{ y: -6 }}
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-brand-saffron/10 flex items-center justify-center mb-4 group-hover:bg-brand-saffron/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-brand-saffron" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-brand-charcoal mb-2">
                    {cat.label}
                  </h3>
                  <p className="text-sm text-brand-charcoal/60 leading-relaxed flex-1">
                    {categoryDescriptions[cat.id]}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </AnimatedSection>

        <AnimatedSection variant="fadeUp" className="text-center mt-10">
          <Button variant="outline" size="md">
            View All Products
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
