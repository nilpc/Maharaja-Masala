'use client';
import { useCounterAnimation } from '@/hooks/useCounterAnimation';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { STATS } from '@/lib/constants';

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCounterAnimation({ end: value });

  return (
    <div ref={ref} className="text-center group">
      <div className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-1 bg-gradient-to-r from-brand-saffron via-brand-crimson to-brand-gold bg-clip-text text-transparent">
        {count.toLocaleString()}
        <span className="bg-gradient-to-r from-brand-saffron to-brand-gold bg-clip-text text-transparent">{suffix}</span>
      </div>
      <p className="text-brand-charcoal/70 text-sm sm:text-base font-body font-medium group-hover:text-brand-charcoal transition-colors">
        {label}
      </p>
    </div>
  );
}

export function StatsBar() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-brand-warm-white to-brand-ivory border-y border-brand-gold/10">
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
