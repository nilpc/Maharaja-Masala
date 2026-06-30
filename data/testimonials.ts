export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Priya Sharma',
    role: 'Home Chef, Mumbai',
    avatar: '/images/testimonials/person1.jpg',
    quote:
      'Maharaja Masala has completely transformed my cooking. The garam masala is unlike anything I have found in stores — the aroma alone tells you it is special.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Rajesh Mehta',
    role: 'Restaurant Owner, Jaipur',
    avatar: '/images/testimonials/person2.jpg',
    quote:
      'We source all our spices from Maharaja Masala for our restaurant. Consistent quality, exceptional freshness, and our customers can taste the difference.',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Ananya Gupta',
    role: 'Food Blogger, Delhi',
    avatar: '/images/testimonials/person3.jpg',
    quote:
      'Finally, a spice brand that cares about purity as much as flavor. No fillers, no artificial colors — just pure, handpicked spices. Highly recommend!',
    rating: 5,
  },
];
