'use client';
import { useState, useMemo } from 'react';
import { products } from '@/data/products';
import type { ProductCategory } from '@/types';

export function useProductFilter() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return {
    activeCategory,
    setActiveCategory,
    filteredProducts,
  };
}
