import { Suspense } from 'react';
import { ProductsPageContent } from './content';

export default function ProductsPage() {
  return (
    <Suspense>
      <ProductsPageContent />
    </Suspense>
  );
}
