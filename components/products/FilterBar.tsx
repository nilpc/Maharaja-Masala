'use client';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { categories } from '@/data/products';

interface FilterBarProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function FilterBar({ activeCategory, onCategoryChange }: FilterBarProps) {
  return (
    <div className="sticky top-20 z-20 bg-brand-warm-white/95 backdrop-blur-md border-b border-brand-gold/10">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              whileTap={{ scale: 0.95 }}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-body font-medium whitespace-nowrap transition-all duration-300',
                activeCategory === cat.id
                  ? 'bg-brand-saffron text-white shadow-md shadow-brand-saffron/20'
                  : 'bg-brand-ivory text-brand-charcoal/60 hover:bg-brand-charcoal/5 border border-brand-gold/10'
              )}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
