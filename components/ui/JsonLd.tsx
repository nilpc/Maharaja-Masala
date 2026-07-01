import { SITE_NAME, SITE_DESCRIPTION, SITE_URL, CONTACT } from '@/lib/constants';

export function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    foundingDate: '1950',
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT.address,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: CONTACT.phone,
      email: CONTACT.email,
      contactType: 'customer service',
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
