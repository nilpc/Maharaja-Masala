'use client';
import { motion } from 'framer-motion';

interface PageHeroProps {
  label: string;
  title: string;
  highlight: string;
  description: string;
}

export function PageHero({ label, title, highlight, description }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-white">
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #CC0000 0.5px, transparent 0.5px),
                            radial-gradient(circle at 40% 20%, #CC0000 0.7px, transparent 0.7px),
                            radial-gradient(circle at 60% 80%, #CC0000 0.4px, transparent 0.4px),
                            radial-gradient(circle at 80% 30%, #C9A84C 0.6px, transparent 0.6px),
                            radial-gradient(circle at 10% 70%, #CC0000 0.5px, transparent 0.5px),
                            radial-gradient(circle at 50% 40%, #C9A84C 0.3px, transparent 0.3px),
                            radial-gradient(circle at 70% 60%, #CC0000 0.8px, transparent 0.8px),
                            radial-gradient(circle at 90% 90%, #CC0000 0.4px, transparent 0.4px),
                            radial-gradient(circle at 30% 10%, #C9A84C 0.5px, transparent 0.5px),
                            radial-gradient(circle at 45% 95%, #CC0000 0.6px, transparent 0.6px)`,
          backgroundSize: '200px 200px',
        }} />
      </div>

      <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-brand-saffron font-mono text-sm uppercase tracking-[0.2em] font-semibold">
            {label}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-brand-charcoal mt-4 leading-tight">
            {title} <br />
            <span className="text-brand-saffron">{highlight}</span>
          </h1>
          <p className="text-brand-charcoal/60 text-lg max-w-2xl mx-auto mt-6 font-body leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
