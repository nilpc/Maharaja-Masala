'use client';
import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Search, Droplets, Cog, Package, Truck } from 'lucide-react';

const steps = [
  { icon: Search, title: 'Sourcing', description: 'Handpicked from the finest spice-growing regions of India.' },
  { icon: Droplets, title: 'Cleaning', description: 'Sun-dried and thoroughly cleaned to remove impurities.' },
  { icon: Cog, title: 'Grinding', description: 'Traditional stone-grinding preserves natural oils and aroma.' },
  { icon: Package, title: 'Packing', description: 'Hygienically packed in airtight, food-grade packaging.' },
  { icon: Truck, title: 'Delivery', description: 'Delivered fresh from our facility to your doorstep.' },
];

const stepVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function ProcessSteps() {
  return (
    <section className="min-h-screen py-20 sm:py-28 bg-brand-warm-white flex items-center">
      <div className="w-full max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp" className="text-center mb-16">
          <span className="text-brand-saffron font-mono text-sm uppercase tracking-[0.2em]">
            Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-charcoal mt-3">
            Farm to Pack Journey
          </h2>
        </AnimatedSection>

        <div className="relative">
          <div className="hidden lg:block absolute top-20 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-brand-saffron/30 via-brand-gold/40 to-brand-saffron/30" />

          <AnimatedSection variant="stagger" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-12">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  variants={stepVariants}
                  className="relative text-center group pt-8"
                >
                  <div className="w-14 h-14 mx-auto rounded-full bg-brand-saffron text-white flex items-center justify-center mb-4 text-lg font-display font-bold relative z-10 shadow-lg shadow-brand-saffron/25">
                    {(i + 1).toString().padStart(2, '0')}
                  </div>
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-brand-saffron/5 flex items-center justify-center mb-4 group-hover:bg-brand-saffron/10 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-7 h-7 text-brand-saffron" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-brand-charcoal mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-brand-charcoal/60 leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
