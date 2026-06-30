export type ProductCategory =
  | 'whole-spices'
  | 'masala-blends'
  | 'seeds'
  | 'special-packs'
  | 'combo-packs';

export interface ProductVariant {
  weight: string;
  sku: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  tagline: string;
  description: string;
  variants: ProductVariant[];
  ingredients?: string[];
  usage?: string;
  image: string;
  gallery?: string[];
  isFeatured?: boolean;
  badge?: 'new' | 'bestseller' | 'limited';
}
