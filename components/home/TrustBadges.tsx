'use client';
import { Shield, PackageCheck, FlaskConical, Wheat } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { TRUST_BADGES } from '@/lib/constants';

const iconMap: Record<string, React.ElementType> = {
  Shield,
  PackageCheck,
  FlaskConical,
  Wheat,
};

export function TrustBadges() {
  return (
    <section className="min-h-screen py-16 sm:py-20 bg-brand-warm-white border-y border-brand-gold/10 flex items-center">
      <div className="w-full max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp" className="text-center mb-12">
          <span className="text-brand-saffron font-mono text-sm uppercase tracking-[0.2em]">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-charcoal mt-3">
            Quality You Can Trust
          </h2>
        </AnimatedSection>

        <AnimatedSection variant="stagger" className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {TRUST_BADGES.map((badge) => {
            const Icon = iconMap[badge.icon] || Shield;
            return (
              <div
                key={badge.label}
                className="text-center group h-full flex flex-col"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-brand-saffron/5 flex items-center justify-center mb-4 group-hover:bg-brand-saffron/10 group-hover:scale-110 transition-all duration-300 shrink-0">
                  <Icon className="w-8 h-8 text-brand-saffron" />
                </div>
                <p className="text-sm font-body font-semibold text-brand-charcoal flex-1 flex items-center justify-center">
                  {badge.label}
                </p>
              </div>
            );
          })}
        </AnimatedSection>
      </div>
    </section>
  );
}
