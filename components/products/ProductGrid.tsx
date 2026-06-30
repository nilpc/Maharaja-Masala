'use client';
import { useState } from 'react';
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-8 sm:gap-8" key={products.map(p => p.id).join(',')}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onSelect={setSelectedProduct}
          />
        ))}
      </div>

      {products.length === 0 && (
        <div className="text-center py-20">
          <p className="text-brand-charcoal/40 text-lg font-display">
            No products found in this category.
          </p>
        </div>
      )}

      <ProductDrawer
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}
