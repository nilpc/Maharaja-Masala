'use client';
import { Eye } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import type { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export function ProductCard({ product, onSelect }: ProductCardProps) {
  return (
    <div className="group relative h-full bg-brand-warm-white rounded-2xl overflow-hidden border border-brand-gold/10 hover:border-brand-saffron/30 hover:-translate-y-1 transition-all duration-500 flex flex-col">
      <div className="aspect-[4/3] bg-gradient-to-br from-brand-saffron/5 to-brand-gold/5 flex items-center justify-center p-6 shrink-0">
        <div className="w-full h-full bg-gradient-to-br from-brand-saffron/20 to-brand-gold/20 rounded-xl flex items-center justify-center">
          <span className="text-4xl sm:text-5xl font-display font-bold text-brand-saffron/20">
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
        <p className="text-sm text-brand-charcoal/60 mb-1 line-clamp-1">
          {product.tagline}
        </p>
        <p className="text-xs text-brand-charcoal/40 font-mono mb-4">
          {product.variants.map((v) => v.weight).join(' | ')}
        </p>
        <Button
          variant="ghost"
          size="sm"
          className="w-full gap-2 mt-auto"
          onClick={() => onSelect(product)}
        >
          <Eye className="w-4 h-4" />
          Quick View
        </Button>
      </div>
    </div>
  );
}
