'use client';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';
import { CONTACT } from '@/lib/constants';

const cards = [
  {
    icon: MapPin,
    label: 'Office Address',
    value: CONTACT.address,
    href: null,
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: CONTACT.phone,
    href: `tel:${CONTACT.phone}`,
  },
];

export function InfoCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-stretch">
      {cards.map((card, i) => {
        const Icon = card.icon;
        const Component = card.href ? motion.a : motion.div;

        return (
          <Component
            key={card.label}
            {...(card.href ? { href: card.href } : {})}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="p-6 rounded-2xl bg-brand-warm-white border border-brand-gold/10 hover:border-brand-saffron/30 transition-all duration-300 h-full flex flex-col"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-saffron/5 flex items-center justify-center mb-4 group-hover:bg-brand-saffron/10 transition-colors shrink-0">
              <Icon className="w-6 h-6 text-brand-saffron" />
            </div>
            <h3 className="text-sm font-body font-semibold text-brand-charcoal mb-1">
              {card.label}
            </h3>
            <p className="text-sm text-brand-charcoal/60 leading-relaxed flex-1">
              {card.value}
            </p>
          </Component>
        );
      })}
    </div>
  );
}
