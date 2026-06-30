'use client';
import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { PageHero } from '@/components/ui/PageHero';
import { FilterBar } from '@/components/products/FilterBar';
import { ProductGrid } from '@/components/products/ProductGrid';
import { useProductFilter } from '@/hooks/useProductFilter';

export function ProductsPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryFromUrl = searchParams.get('category') || 'all';

  const { activeCategory, setActiveCategory, filteredProducts } = useProductFilter();

  useEffect(() => {
    setActiveCategory(categoryFromUrl);
  }, [categoryFromUrl, setActiveCategory]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    if (category === 'all') {
      router.replace('/products');
    } else {
      router.replace(`/products?category=${category}`);
    }
  };

  return (
    <>
      <PageHero
        label="Our Range"
        title="Premium Spices &"
        highlight="Masala Blends"
        description="Explore our complete collection of handpicked spices, signature blends, and curated gift boxes."
      />

      <FilterBar
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      <section className="min-h-screen py-12 sm:py-16 bg-brand-ivory flex items-center">
        <div className="w-full max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <ProductGrid products={filteredProducts} />
        </div>
      </section>
    </>
  );
}
