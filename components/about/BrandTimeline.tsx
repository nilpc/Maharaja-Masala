'use client';
import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const timeline = [
  {
    year: '1950',
    title: 'The Beginning',
    description:
      'Our founder, Shyam Lal Sharma, started a small spice shop in the heart of Jaipur with a vision to bring pure, unadulterated spices to every home.',
  },
  {
    year: '1975',
    title: 'Expansion Across Rajasthan',
    description:
      'Maharaja Masala became the preferred spice supplier for over 200 restaurants and hotels across Rajasthan, known for our consistent quality.',
  },
  {
    year: '1995',
    title: 'Modern Grinding Facility',
    description:
      'We opened our state-of-the-art grinding facility, combining traditional stone-grinding wisdom with modern hygiene standards.',
  },
  {
    year: '2010',
    title: 'National Presence',
    description:
      'Our products reached stores across 15 Indian states, becoming a trusted name for masala blends and whole spices nationwide.',
  },
  {
    year: '2024',
    title: 'Global Reach',
    description:
      'Today, Maharaja Masala exports to 12 countries, bringing the royal taste of India to the world while staying true to our roots.',
  },
];

export function BrandTimeline() {
  return (
    <section className="min-h-screen py-20 sm:py-28 bg-brand-warm-white flex items-center">
      <div className="w-full max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp" className="text-center mb-16">
          <span className="text-brand-saffron font-mono text-sm uppercase tracking-[0.2em]">
            Milestones
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-charcoal mt-3">
            Our Journey
          </h2>
        </AnimatedSection>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-saffron via-brand-gold to-brand-saffron/20 -translate-x-1/2" />

          {timeline.map((item, i) => (
            <AnimatedSection key={item.year} variant="fadeUp" delay={i * 0.1}>
              <motion.div
                className={`relative flex items-start gap-6 sm:gap-12 mb-12 sm:mb-16 ${
                  i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                <div className="hidden sm:block flex-1" />
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-saffron border-4 border-brand-warm-white z-10" />
                <div className={`flex-1 pl-10 sm:pl-0 ${i % 2 === 0 ? 'sm:text-right' : 'sm:text-left'}`}>
                  <span className="font-display font-bold text-2xl text-brand-saffron">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-display font-semibold text-brand-charcoal mt-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-brand-charcoal/60 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
