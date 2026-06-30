'use client';
import { Shield, Heart, Sparkles, Leaf } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const values = [
  {
    icon: Shield,
    title: 'Purity',
    description:
      'No adulterants, no fillers — only 100% pure spices as nature intended.',
  },
  {
    icon: Heart,
    title: 'Heritage',
    description:
      'Rooted in 75+ years of tradition, passed down through generations.',
  },
  {
    icon: Sparkles,
    title: 'Quality',
    description:
      'Every batch is lab-tested for potency, aroma, and freshness.',
  },
  {
    icon: Leaf,
    title: 'Innovation',
    description:
      'Modern processing meets ancient wisdom for consistent excellence.',
  },
];

export function ValuePillars() {
  return (
    <section className="min-h-screen py-20 sm:py-28 bg-brand-ivory flex items-center">
      <div className="w-full max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp" className="text-center mb-16">
          <span className="text-brand-saffron font-mono text-sm uppercase tracking-[0.2em]">
            Our Values
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-charcoal mt-3">
            What Drives Us
          </h2>
        </AnimatedSection>

        <AnimatedSection variant="stagger" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="text-center group h-full flex flex-col"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-brand-saffron/5 flex items-center justify-center mb-6 group-hover:bg-brand-saffron/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shrink-0">
                  <Icon className="w-9 h-9 text-brand-saffron" />
                </div>
                <h3 className="text-xl font-display font-semibold text-brand-charcoal mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-brand-charcoal/60 leading-relaxed max-w-xs mx-auto flex-1">
                  {value.description}
                </p>
              </div>
            );
          })}
        </AnimatedSection>
      </div>
    </section>
  );
}
