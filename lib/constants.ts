export const SITE_NAME = 'Maharaja Masala';
export const SITE_TAGLINE = 'The Royal Taste of India';
export const SITE_DESCRIPTION = 'Premium Indian spices & masala blends — artisanal quality, royal heritage.';
export const SITE_URL = 'https://maharajamasala.com';

export const CONTACT = {
  address: '123 Spice Market, Jaipur, Rajasthan 302001, India',
  email: 'hello@maharajamasala.com',
  phone: '+91 98765 43210',
};

export const SOCIAL = {
  instagram: 'https://instagram.com/maharajamasala',
  facebook: 'https://facebook.com/maharajamasala',
  youtube: 'https://youtube.com/@maharajamasala',
  whatsapp: 'https://wa.me/919876543210',
};

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'Our Story' },
  { href: '/products', label: 'Products' },
  { href: '/contact', label: 'Contact Us' },
] as const;

export const CATEGORIES = [
  { id: 'whole-spices', label: 'Whole Spices', icon: 'Sprout' },
  { id: 'masala-blends', label: 'Masala Blends', icon: 'Flame' },
  { id: 'seeds', label: 'Seeds', icon: 'Wheat' },
  { id: 'special-packs', label: 'Special Packs', icon: 'Gift' },
  { id: 'combo-packs', label: 'Combo Packs', icon: 'Package' },
] as const;

export const STATS = [
  { value: 75, suffix: '+', label: 'Years of Heritage' },
  { value: 150, suffix: '+', label: 'Product SKUs' },
  { value: 200, suffix: '+', label: 'Cities Served' },
  { value: 50000, suffix: '+', label: 'Happy Customers' },
];

export const TRUST_BADGES = [
  { label: 'No Preservatives', icon: 'Shield' },
  { label: 'Hygienic Packing', icon: 'PackageCheck' },
  { label: 'Lab Tested', icon: 'FlaskConical' },
  { label: 'Farm to Pack', icon: 'Wheat' },
];
