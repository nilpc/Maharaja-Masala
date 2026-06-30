'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { testimonials } from '@/data/testimonials';

export function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[active];

  return (
    <section className="min-h-screen py-16 sm:py-20 bg-brand-ivory flex items-center">
      <div className="w-full max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp" className="text-center mb-12">
          <span className="text-brand-saffron font-mono text-sm uppercase tracking-[0.2em]">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-charcoal mt-3">
            What Our Customers Say
          </h2>
        </AnimatedSection>

        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <Quote className="w-10 h-10 text-brand-saffron/30 mx-auto mb-6" />
              <p className="text-lg sm:text-xl text-brand-charcoal/80 leading-relaxed font-body italic mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-brand-saffron/20 to-brand-gold/20 flex items-center justify-center mb-2">
                <span className="text-sm font-display font-bold text-brand-saffron">
                  {t.name.charAt(0)}
                </span>
              </div>
              <p className="font-display font-semibold text-brand-charcoal">{t.name}</p>
              <p className="text-sm text-brand-charcoal/50">{t.role}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === active
                    ? 'bg-brand-saffron w-8'
                    : 'bg-brand-charcoal/20 hover:bg-brand-charcoal/30'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
