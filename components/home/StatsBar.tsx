'use client';
import { useCounterAnimation } from '@/hooks/useCounterAnimation';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { STATS } from '@/lib/constants';

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCounterAnimation({ end: value });

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-brand-saffron mb-1">
        {count.toLocaleString()}
        <span className="text-brand-saffron">{suffix}</span>
      </div>
      <p className="text-brand-charcoal/60 text-sm sm:text-base font-body font-medium">
        {label}
      </p>
    </div>
  );
}

export function StatsBar() {
  return (
    <section className="min-h-screen py-16 sm:py-20 bg-brand-warm-white border-y border-brand-gold/10 flex items-center">
      <div className="w-full max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="stagger">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {STATS.map((stat) => (
              <StatItem key={stat.label} {...stat} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
