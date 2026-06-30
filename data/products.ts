import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'turmeric-whole',
    name: 'Whole Turmeric',
    slug: 'whole-turmeric',
    category: 'whole-spices',
    tagline: 'Pure golden rhizomes from the farms of Erode',
    description:
      'Sourced from the finest turmeric-growing regions of India, our whole turmeric rhizomes are sun-dried and hand-sorted for maximum curcumin content. Perfect for grinding fresh at home or using in traditional remedies.',
    variants: [
      { weight: '100g', sku: 'MM-WT-100' },
      { weight: '250g', sku: 'MM-WT-250' },
      { weight: '500g', sku: 'MM-WT-500' },
      { weight: '1kg', sku: 'MM-WT-1K' },
    ],
    ingredients: ['100% Whole Turmeric Rhizomes'],
    usage: 'Grind fresh for curries, golden milk, or traditional remedies.',
    image: '/images/products/turmeric.jpg',
    isFeatured: true,
    badge: 'bestseller',
  },
  {
    id: 'cumin-seeds',
    name: 'Cumin Seeds (Jeera)',
    slug: 'cumin-seeds',
    category: 'seeds',
    tagline: 'Aromatic royal cumin from Rajasthan',
    description:
      'Our premium cumin seeds are sourced from the warm, arid fields of Rajasthan. Each seed is carefully cleaned and graded to deliver the unmistakable aroma and earthy warmth that defines Indian cuisine.',
    variants: [
      { weight: '100g', sku: 'MM-CS-100' },
      { weight: '250g', sku: 'MM-CS-250' },
      { weight: '500g', sku: 'MM-CS-500' },
      { weight: '1kg', sku: 'MM-CS-1K' },
    ],
    ingredients: ['100% Cumin Seeds'],
    usage: 'Temper in hot oil for dals, curries, and rice dishes.',
    image: '/images/products/cumin.jpg',
    isFeatured: true,
  },
  {
    id: 'garam-masala',
    name: 'Garam Masala',
    slug: 'garam-masala',
    category: 'masala-blends',
    tagline: 'The royal blend of 12 hand-roasted spices',
    description:
      'Our signature garam masala is a closely guarded family recipe. Twelve whole spices are individually dry-roasted, ground to perfection, and blended in precise proportions. One whiff transports you to a royal kitchen.',
    variants: [
      { weight: '50g', sku: 'MM-GM-50' },
      { weight: '100g', sku: 'MM-GM-100' },
      { weight: '250g', sku: 'MM-GM-250' },
    ],
    ingredients: [
      'Cinnamon',
      'Cardamom',
      'Cloves',
      'Black Pepper',
      'Cumin',
      'Coriander',
      'Star Anise',
      'Mace',
      'Nutmeg',
      'Bay Leaf',
      'Fennel',
      'Dried Ginger',
    ],
    usage: 'Add at the end of cooking for depth and warmth.',
    image: '/images/products/garam-masala.jpg',
    isFeatured: true,
    badge: 'bestseller',
  },
  {
    id: 'chicken-masala',
    name: 'Chicken Masala',
    slug: 'chicken-masala',
    category: 'masala-blends',
    tagline: 'Restaurant-style curry in every spoonful',
    description:
      'A perfectly balanced blend of aromatic spices crafted specifically for chicken dishes. From butter chicken to chicken curry, this masala delivers authentic flavor with every use.',
    variants: [
      { weight: '50g', sku: 'MM-CM-50' },
      { weight: '100g', sku: 'MM-CM-100' },
      { weight: '250g', sku: 'MM-CM-250' },
    ],
    ingredients: [
      'Coriander',
      'Cumin',
      'Turmeric',
      'Red Chili',
      'Ginger',
      'Garlic',
      'Fenugreek',
      'Black Pepper',
    ],
    usage: 'Marinate chicken or add to gravy for rich flavor.',
    image: '/images/products/chicken-masala.jpg',
    isFeatured: true,
  },
  {
    id: 'cardamom-green',
    name: 'Green Cardamom',
    slug: 'green-cardamom',
    category: 'whole-spices',
    tagline: 'Queen of spices — handpicked from Western Ghats',
    description:
      'Our green cardamom pods are sourced from the pristine hills of Idukki, Kerala. Each pod is handpicked at the peak of ripeness, ensuring intense aromatic oils and a sweet, floral note.',
    variants: [
      { weight: '25g', sku: 'MM-GC-25' },
      { weight: '50g', sku: 'MM-GC-50' },
      { weight: '100g', sku: 'MM-GC-100' },
    ],
    ingredients: ['100% Green Cardamom Pods'],
    usage: 'Crush pods for chai, desserts, or rice biryanis.',
    image: '/images/products/cardamom.jpg',
    badge: 'new',
  },
  {
    id: 'mustard-seeds',
    name: 'Black Mustard Seeds',
    slug: 'black-mustard-seeds',
    category: 'seeds',
    tagline: 'Pungent, bold, essential',
    description:
      'Small but mighty, our black mustard seeds deliver the signature pop and pungency essential to Indian tadka. Sourced from the Gangetic plains for consistent quality.',
    variants: [
      { weight: '100g', sku: 'MM-MS-100' },
      { weight: '250g', sku: 'MM-MS-250' },
      { weight: '500g', sku: 'MM-MS-500' },
    ],
    ingredients: ['100% Black Mustard Seeds'],
    usage: 'Splutter in hot oil for dals, pickles, and curries.',
    image: '/images/products/mustard.jpg',
  },
  {
    id: 'tandoori-masala',
    name: 'Tandoori Masala',
    slug: 'tandoori-masala',
    category: 'special-packs',
    tagline: 'Bring the tandoor to your kitchen',
    description:
      'A vibrant, aromatic blend that gives meats and vegetables that iconic charred, smoky flavor. Our tandoori masala is made with Kashmiri red chilies for natural color and moderate heat.',
    variants: [
      { weight: '50g', sku: 'MM-TM-50' },
      { weight: '100g', sku: 'MM-TM-100' },
      { weight: '250g', sku: 'MM-TM-250' },
    ],
    ingredients: [
      'Kashmiri Red Chili',
      'Cumin',
      'Coriander',
      'Ginger',
      'Garlic',
      'Garam Masala',
      'Lemon Powder',
      'Black Salt',
    ],
    usage: 'Marinate yogurt-coated meat or paneer for 2+ hours.',
    image: '/images/products/tandoori.jpg',
    badge: 'limited',
  },
  {
    id: 'gift-hampers',
    name: 'Royal Gift Hamper',
    slug: 'royal-gift-hamper',
    category: 'combo-packs',
    tagline: 'The perfect gift for food lovers',
    description:
      'Our signature gift hamper includes six essential spices and masalas in an elegant wooden box. Beautifully packaged and perfect for weddings, festivals, or corporate gifting.',
    variants: [
      { weight: '6 x 100g', sku: 'MM-GH-6' },
      { weight: '6 x 250g', sku: 'MM-GH-6L' },
    ],
    ingredients: ['Turmeric', 'Cumin', 'Garam Masala', 'Red Chili Powder', 'Coriander', 'Mustard Seeds'],
    usage: 'A complete spice pantry in one beautiful box.',
    image: '/images/products/hamper.jpg',
    isFeatured: true,
    badge: 'new',
  },
];

export const categories = [
  { id: 'all', label: 'All Products' },
  { id: 'whole-spices', label: 'Whole Spices' },
  { id: 'masala-blends', label: 'Masala Blends' },
  { id: 'seeds', label: 'Seeds' },
  { id: 'special-packs', label: 'Special Packs' },
  { id: 'combo-packs', label: 'Combo Packs' },
] as const;

export function getFilteredProducts(category: string): Product[] {
  if (category === 'all') return products;
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFeatured);
}
