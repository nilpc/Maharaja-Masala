'use client';
import { motion } from 'framer-motion';
import { Sprout, Flame, Wheat, Gift, Package } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/Button';
import { CATEGORIES } from '@/lib/constants';
import Link from 'next/link';

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
  'whole-spices': 'from-amber-600/15 to-yellow-500/10',
  'masala-blends': 'from-brand-saffron/20 to-brand-crimson/15',
  'seeds': 'from-amber-700/15 to-orange-500/10',
  'special-packs': 'from-purple-700/15 to-brand-saffron/10',
  'combo-packs': 'from-brand-crimson/20 to-brand-gold/15',
};

export function CategoryCards() {
  return (
    <section className="py-16 sm:py-20 bg-brand-ivory">
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
                className={`group h-full rounded-2xl bg-gradient-to-br ${gradients[cat.id]} bg-brand-warm-white p-6 sm:p-8 border border-brand-gold/10 hover:border-brand-saffron/30 hover:shadow-xl hover:shadow-brand-saffron/5 transition-all duration-500 flex flex-col`}
                whileHover={{ y: -8 }}
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-saffron/10 to-brand-gold/10 flex items-center justify-center mb-4 group-hover:from-brand-saffron/20 group-hover:to-brand-gold/20 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6 text-brand-saffron group-hover:text-brand-gold transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-brand-charcoal mb-2">
                    {cat.label}
                  </h3>
                  <p className="text-sm text-brand-charcoal/70 leading-relaxed flex-1">
                    {categoryDescriptions[cat.id]}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </AnimatedSection>

        <AnimatedSection variant="fadeUp" className="text-center mt-10">
          <Link href="/products">
            <Button variant="outline" size="default">
              View All Products
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
