'use client';
import Link from 'next/link';
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, Send } from 'lucide-react';
import { SITE_NAME, CONTACT, SOCIAL, NAV_LINKS } from '@/lib/constants';

const socialLinks = [
  { href: SOCIAL.instagram, icon: Instagram, label: 'Instagram' },
  { href: SOCIAL.facebook, icon: Facebook, label: 'Facebook' },
  { href: SOCIAL.youtube, icon: Youtube, label: 'YouTube' },
  { href: SOCIAL.whatsapp, icon: Send, label: 'WhatsApp' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-brand-saffron via-brand-saffron to-brand-crimson text-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              {SITE_NAME}
            </h3>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Premium Indian spices & masala blends. Artisanal quality rooted in royal heritage since 1950.
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-body font-semibold text-sm uppercase tracking-widest mb-4 text-white/80">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body font-semibold text-sm uppercase tracking-widest mb-4 text-white/80">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-white/60" />
                <span>{CONTACT.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0 text-white/60" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white transition-colors">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 text-white/60" />
                <a href={`tel:${CONTACT.phone}`} className="hover:text-white transition-colors">
                  {CONTACT.phone}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-body font-semibold text-sm uppercase tracking-widest mb-4 text-white/80">
              Stay Connected
            </h4>
            <p className="text-white/70 text-sm mb-4">
              Subscribe for recipes, offers, and spice stories.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-2"
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/60 transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-white text-brand-saffron text-sm font-medium rounded-lg hover:bg-white/90 transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>&copy; {year} {SITE_NAME}. All rights reserved.</p>
          <p>Crafted with care in India</p>
        </div>
      </div>
    </footer>
  );
}
