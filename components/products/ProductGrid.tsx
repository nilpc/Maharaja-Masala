'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { PackageSearch } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { ProductDrawer } from './ProductDrawer';
import type { Product } from '@/types';

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      {products.length > 0 ? (
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-8 sm:gap-8"
          key={products.map(p => p.id).join(',')}
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={setSelectedProduct}
            />
          ))}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-24"
        >
          <PackageSearch className="w-16 h-16 text-brand-gold/30 mx-auto mb-4" />
          <p className="text-brand-charcoal/50 text-xl font-display">
            No products found in this category.
          </p>
          <p className="text-brand-charcoal/40 text-sm mt-2">
            Try selecting a different category.
          </p>
        </motion.div>
      )}

      <ProductDrawer
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}
