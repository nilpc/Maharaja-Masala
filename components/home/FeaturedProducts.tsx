'use client';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { getFeaturedProducts } from '@/data/products';

const featuredProducts = getFeaturedProducts();

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function FeaturedProducts() {
  return (
    <section className="min-h-screen py-16 sm:py-20 bg-brand-warm-white flex items-center">
      <div className="w-full max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp" className="text-center mb-12">
          <span className="text-brand-saffron font-mono text-sm uppercase tracking-[0.2em]">
            Bestsellers
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-charcoal mt-3">
            Featured Products
          </h2>
        </AnimatedSection>

        <AnimatedSection variant="stagger" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8 sm:gap-8">
          {featuredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              className="group relative h-full bg-brand-ivory rounded-2xl overflow-hidden border border-brand-gold/10 hover:border-brand-saffron/30 transition-all duration-500 flex flex-col"
              whileHover={{ y: -6 }}
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-brand-saffron/5 to-brand-gold/5 flex items-center justify-center p-6 shrink-0">
                <div className="w-full h-full bg-gradient-to-br from-brand-saffron/20 to-brand-gold/20 rounded-xl flex items-center justify-center">
                  <span className="text-4xl font-display font-bold text-brand-saffron/30">
                    {product.name.charAt(0)}
                  </span>
                </div>
                {product.badge && (
                  <div className="absolute top-3 left-3">
                    <Badge variant={product.badge}>
                      {product.badge}
                    </Badge>
                  </div>
                )}
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-display font-semibold text-brand-charcoal mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-brand-charcoal/60 mb-1">
                  {product.tagline}
                </p>
                <p className="text-xs text-brand-charcoal/40 font-mono mb-4">
                  {product.variants.map((v) => v.weight).join(' | ')}
                </p>
                <Button variant="ghost" size="sm" className="w-full gap-2 mt-auto">
                  <Eye className="w-4 h-4" />
                  View Details
                </Button>
              </div>
            </motion.div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
