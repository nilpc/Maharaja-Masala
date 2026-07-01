'use client';
import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/Button';

export function HeritageBanner() {
  return (
    <section className="relative min-h-screen py-24 sm:py-32 overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-saffron via-brand-crimson to-brand-saffron/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_white_0%,_transparent_60%)] opacity-[0.06]" />

      <div className="relative z-10 w-full max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection variant="fadeLeft">
            <span className="text-brand-gold font-mono text-sm uppercase tracking-[0.2em]">
              Our Heritage
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mt-4 leading-tight">
              From Farm to Your <br />
              <span className="text-brand-gold">Kitchen</span>
            </h2>
            <div className="w-16 h-1 bg-brand-gold mt-6 mb-6" />
            <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-lg">
              Every spice we sell is carefully sourced from the finest growing regions of India.
              Sun-dried, stone-ground, and hand-packed — we preserve the purity and potency
              that defines authentic Indian cooking.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'Directly sourced from farmers',
                'Traditional stone-grinding methods',
                'No preservatives or additives',
                'Lab-tested for purity & potency',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/80 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button variant="default" size="lg" className="bg-white text-brand-crimson hover:bg-white/90 shadow-lg shadow-black/10">
                Learn Our Story
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="fadeRight" className="lg:block">
            <div className="lg:hidden flex items-center justify-start gap-4 mt-6">
              <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                <span className="text-xl font-display font-bold text-white/30">MM</span>
              </div>
              <div>
                <p className="text-white/60 text-xs font-mono uppercase tracking-[0.25em]">Since 1950</p>
                <p className="text-white/40 text-[11px] font-mono mt-0.5">Jaipur, Rajasthan</p>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="aspect-square rounded-2xl bg-white/10 border border-white/20 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center p-12">
                  <div className="text-center">
                    <div className="text-8xl font-display font-bold text-white/20 leading-none">
                      MM
                    </div>
                    <div className="mt-4 text-brand-gold/40 font-mono text-sm uppercase tracking-[0.3em]">
                      Since 1950
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-brand-gold/10 blur-xl" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
