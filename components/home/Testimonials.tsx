'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { testimonials } from '@/data/testimonials';

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    if (paused) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused]);

  const t = testimonials[active];

  return (
    <section className="py-16 sm:py-20 bg-brand-ivory">
      <div className="w-full max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp" className="text-center mb-12">
          <span className="text-brand-saffron font-mono text-sm uppercase tracking-[0.2em]">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-charcoal mt-3">
            What Our Customers Say
          </h2>
        </AnimatedSection>

        <div
          className="max-w-2xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <Quote className="w-10 h-10 text-brand-gold/30 mx-auto mb-6" />
              <div className="relative overflow-hidden px-4">
                <span className="absolute left-1 top-0 text-4xl text-brand-gold/20 font-display leading-none -translate-y-1">&ldquo;</span>
                <p className="text-lg sm:text-xl text-brand-charcoal leading-relaxed font-body italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-brand-saffron to-brand-crimson flex items-center justify-center mb-2 shadow-md shadow-brand-saffron/20">
                <span className="text-sm font-display font-bold text-white">
                  {t.name.charAt(0)}
                </span>
              </div>
              <p className="font-display font-semibold text-brand-charcoal">{t.name}</p>
              <p className="text-sm text-brand-charcoal/70">{t.role}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-0 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="p-3 flex items-center justify-center"
                aria-label={`Go to testimonial ${i + 1}`}
              >
                <span className={`block rounded-full transition-all duration-300 ${
                  i === active
                    ? 'bg-brand-saffron w-8 h-2.5'
                    : 'bg-brand-charcoal/20 hover:bg-brand-charcoal/30 w-2.5 h-2.5'
                }`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
