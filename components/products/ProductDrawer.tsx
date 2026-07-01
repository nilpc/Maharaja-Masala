'use client';
import { X, Check, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import type { Product } from '@/types';

interface ProductDrawerProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductDrawer({ product, onClose }: ProductDrawerProps) {
  if (!product) return null;

  return (
    <AnimatePresence>
      {product && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-lg bg-brand-warm-white shadow-2xl z-50 overflow-y-auto"
          >
            <div className="p-6 sm:p-8">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-3 rounded-full bg-brand-charcoal/5 hover:bg-brand-charcoal/10 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-brand-saffron/10 via-brand-crimson/5 to-brand-gold/10 flex items-center justify-center mb-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05]" style={{
                  backgroundImage: `radial-gradient(circle at 25% 35%, #C9A84C 0.6px, transparent 0.6px),
                                    radial-gradient(circle at 70% 65%, #CC0000 0.4px, transparent 0.4px)`,
                  backgroundSize: '22px 22px, 16px 16px',
                }} />
                <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-brand-saffron to-brand-crimson shadow-lg shadow-brand-saffron/20 flex items-center justify-center">
                  <span className="text-3xl font-display font-bold text-white/90">
                    {product.name.charAt(0)}
                  </span>
                </div>
              </div>

              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-display font-bold text-brand-charcoal">
                    {product.name}
                  </h2>
                  <p className="text-brand-charcoal/70 text-sm mt-1">
                    {product.tagline}
                  </p>
                </div>
                {product.badge && (
                  <Badge variant={product.badge}>{product.badge}</Badge>
                )}
              </div>

              <p className="text-brand-charcoal/70 text-sm leading-relaxed mb-6">
                {product.description}
              </p>

              <div className="mb-6">
                <h3 className="text-sm font-body font-semibold text-brand-charcoal mb-3 uppercase tracking-wider">
                  Available Weights
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((v) => (
                    <span
                      key={v.sku}
                      className="px-4 py-2 rounded-lg bg-gradient-to-br from-brand-ivory to-white border border-brand-gold/15 text-sm font-mono text-brand-charcoal/70 hover:border-brand-gold/30 transition-colors"
                    >
                      {v.weight}
                    </span>
                  ))}
                </div>
              </div>

              {product.ingredients && (
                <div className="mb-6">
                  <h3 className="text-sm font-body font-semibold text-brand-charcoal mb-3 uppercase tracking-wider">
                    Ingredients
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.ingredients.map((ing) => (
                      <span
                        key={ing}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-olive/5 text-xs text-brand-olive"
                      >
                        <Check className="w-3 h-3" />
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {product.usage && (
                <div className="mb-6 p-4 rounded-xl bg-gradient-to-br from-brand-saffron/5 to-brand-gold/5 border border-brand-gold/15">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-brand-saffron" />
                    <span className="text-sm font-body font-semibold text-brand-charcoal">
                      Usage Tips
                    </span>
                  </div>
                  <p className="text-sm text-brand-charcoal/70">{product.usage}</p>
                </div>
              )}

              <div className="mt-8">
                <Button variant="default" size="lg" className="w-full">
                  Enquire Now
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
