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

      <section className="relative py-12 sm:py-16 bg-gradient-to-b from-brand-warm-white via-brand-ivory to-brand-ivory">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/3 -left-20 w-72 h-72 rounded-full bg-brand-saffron/3 blur-3xl" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-brand-gold/4 blur-3xl" />
        </div>
        <div className="relative w-full max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <ProductGrid products={filteredProducts} />
        </div>
      </section>
    </>
  );
}
