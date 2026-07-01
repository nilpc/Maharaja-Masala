'use client';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Eye, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import type { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

const categoryAccents: Record<string, { from: string; to: string; dot: string; seal: string }> = {
  'whole-spices': {
    from: 'from-amber-700/20',
    to: 'to-yellow-600/10',
    dot: 'bg-amber-600/20',
    seal: 'from-amber-700 to-yellow-600',
  },
  'masala-blends': {
    from: 'from-brand-saffron/25',
    to: 'to-brand-gold/15',
    dot: 'bg-brand-saffron/20',
    seal: 'from-brand-saffron to-brand-crimson',
  },
  'seeds': {
    from: 'from-amber-800/20',
    to: 'to-orange-600/10',
    dot: 'bg-amber-700/20',
    seal: 'from-amber-800 to-orange-700',
  },
  'special-packs': {
    from: 'from-purple-800/20',
    to: 'to-brand-saffron/10',
    dot: 'bg-purple-700/20',
    seal: 'from-purple-800 to-brand-crimson',
  },
  'combo-packs': {
    from: 'from-brand-crimson/25',
    to: 'to-brand-gold/15',
    dot: 'bg-brand-crimson/20',
    seal: 'from-brand-crimson to-brand-saffron',
  },
};

export function ProductCard({ product, onSelect }: ProductCardProps) {
  const accent = categoryAccents[product.category] || categoryAccents['masala-blends'];
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group relative"
    >
      <div
        className="relative h-full rounded-2xl overflow-hidden bg-gradient-to-b from-brand-ivory to-white border border-brand-gold/15 hover:border-brand-gold/40 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-brand-saffron/5"
        onClick={() => onSelect(product)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onSelect(product); }}
        aria-label={`View details for ${product.name}`}
      >
        <div className={`relative h-44 sm:h-48 overflow-hidden bg-gradient-to-br ${accent.from} ${accent.to}`}>
          <div className="absolute inset-0 opacity-[0.06]" style={{
            backgroundImage: `radial-gradient(circle at 30% 40%, #C9A84C 0.5px, transparent 0.5px),
                              radial-gradient(circle at 70% 60%, #CC0000 0.4px, transparent 0.4px),
                              radial-gradient(circle at 50% 80%, #C9A84C 0.3px, transparent 0.3px)`,
            backgroundSize: '24px 24px, 18px 18px, 14px 14px',
          }} />

          <div className="absolute inset-0 bg-gradient-to-t from-brand-ivory/60 via-transparent to-transparent" />

          <div className="absolute top-3 left-3 z-10">
            {product.badge && (
              <Badge variant={product.badge}>
                {product.badge}
              </Badge>
            )}
          </div>

          <motion.div
            className={`absolute top-3 right-3 w-14 h-14 rounded-full bg-gradient-to-br ${accent.seal} shadow-lg flex items-center justify-center`}
            whileHover={{ rotate: 15, scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <span className="text-xl font-display font-bold text-white/90">
              {product.name.charAt(0)}
            </span>
          </motion.div>

          <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-white/40 blur-2xl" />

          <motion.div
            className="absolute bottom-3 left-4 right-4 flex flex-wrap gap-1.5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            {product.variants.slice(0, 2).map((v) => (
              <span
                key={v.sku}
                className="px-2 py-0.5 rounded-md bg-white/70 backdrop-blur-sm text-[11px] sm:text-xs font-mono text-brand-charcoal/60 border border-white/40"
              >
                {v.weight}
              </span>
            ))}
            {product.variants.length > 2 && (
              <span className="px-2 py-0.5 rounded-md bg-white/70 backdrop-blur-sm text-[11px] sm:text-xs font-mono text-brand-charcoal/40">
                +{product.variants.length - 2}
              </span>
            )}
          </motion.div>
        </div>

        <div className="p-4 pt-5">
          <h3 className="text-base font-display font-bold text-brand-charcoal mb-1 leading-tight">
            {product.name}
          </h3>
          <p className="text-xs text-brand-charcoal/60 leading-relaxed line-clamp-2 mb-3">
            {product.tagline}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-brand-gold/70 font-semibold">
              {product.category.replace('-', ' ')}
            </span>
            <motion.span
              className="inline-flex items-center gap-1 text-xs font-medium text-brand-saffron"
              whileHover={{ x: 3 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              Quick View
              <ChevronRight className="w-3 h-3" />
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
