'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export function MapEmbed() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia('(max-width: 768px)').matches);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: isMobile ? 0.3 : 0.5 }}
      className="rounded-2xl overflow-hidden border border-brand-gold/10 h-[300px] sm:h-[400px] relative"
    >
      <div className="absolute inset-0 bg-brand-ivory flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-12 h-12 text-brand-saffron/30 mx-auto mb-3" />
          <p className="text-brand-charcoal/60 text-sm font-mono">
            Map will be displayed here
          </p>
          <p className="text-brand-charcoal/50 text-xs mt-1">
            Jaipur, Rajasthan, India
          </p>
        </div>
      </div>
    </motion.div>
  );
}
