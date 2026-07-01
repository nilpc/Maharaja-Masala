import { Suspense } from 'react';
import type { Metadata } from 'next';
import { ProductsPageContent } from './content';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Products',
  description: `Explore our premium range of spices, masala blends, and gift hampers at ${SITE_NAME}. Whole spices, masala blends, seeds, and speciality packs.`,
};

function ProductsFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-ivory">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-brand-saffron border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-brand-charcoal/50 text-sm font-mono">Loading products...</p>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<ProductsFallback />}>
      <ProductsPageContent />
    </Suspense>
  );
}
