'use client';
import { motion } from 'framer-motion';
import { PageHero } from '@/components/ui/PageHero';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ContactForm } from '@/components/contact/ContactForm';
import { InfoCards } from '@/components/contact/InfoCards';
import { MapEmbed } from '@/components/contact/MapEmbed';
import { Instagram, Facebook, Youtube, Send } from 'lucide-react';
import { SOCIAL } from '@/lib/constants';

const socialLinks = [
  { href: SOCIAL.instagram, icon: Instagram, label: 'Instagram' },
  { href: SOCIAL.facebook, icon: Facebook, label: 'Facebook' },
  { href: SOCIAL.youtube, icon: Youtube, label: 'YouTube' },
  { href: SOCIAL.whatsapp, icon: Send, label: 'WhatsApp' },
];

export function ContactPageClient() {
  return (
    <>
      <PageHero
        label="Get in Touch"
        title="Let&apos;s Start a"
        highlight="Conversation"
        description="Whether you are a retailer, wholesaler, or home chef — we would love to hear from you."
      />

      <section className="py-16 sm:py-20 bg-brand-ivory">
        <div className="w-full max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <AnimatedSection variant="fadeUp">
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-brand-charcoal mb-2">
                  Send Us a Message
                </h2>
                <p className="text-brand-charcoal/70 text-sm mb-8">
                  We typically respond within 24 hours.
                </p>
              </AnimatedSection>
              <ContactForm />
            </div>
            <div className="space-y-8">
              <div>
                <AnimatedSection variant="fadeUp">
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-brand-charcoal mb-6">
                    Contact Information
                  </h2>
                </AnimatedSection>
                <InfoCards />
              </div>

              <div>
                <AnimatedSection variant="fadeUp">
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-brand-charcoal mb-6">
                    Our Location
                  </h2>
                </AnimatedSection>
                <MapEmbed />
              </div>

              <div>
                <AnimatedSection variant="fadeUp">
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-brand-charcoal mb-6">
                    Follow Us
                  </h2>
                </AnimatedSection>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileFocus={{ scale: 1.1 }}
                      className="w-14 h-14 rounded-xl bg-brand-warm-white border border-brand-gold/10 flex items-center justify-center hover:border-brand-saffron/30 hover:bg-brand-saffron/5 focus:border-brand-saffron/30 focus:bg-brand-saffron/5 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6 text-brand-charcoal/60" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
