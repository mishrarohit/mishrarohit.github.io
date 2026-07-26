export const profile = {
  name: 'Rohit Mishra',
  role: 'VP Product at Shopify',
  headline: 'I build payments, cross-border commerce, and merchant infrastructure for millions of businesses.',
  location: 'Toronto, Canada',
  email: 'mailto:rohit@rohitmishra.me',
  socials: [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/arohitmishra' },
    { label: 'X / Twitter', href: 'https://twitter.com/amishrarohit' },
    { label: 'Email', href: 'mailto:rohit@rohitmishra.me' }
  ]
} as const;

export const workThemes = [
  {
    title: 'Payments infrastructure',
    kicker: 'Money movement',
    description:
      'Leading product teams building reliable payment experiences, risk systems, and financial infrastructure for Shopify merchants.',
    href: 'https://www.shopify.com/payments'
  },
  {
    title: 'Cross-border commerce',
    kicker: 'Global selling',
    description:
      'Helping merchants sell internationally with localized pricing, duties, taxes, currency, compliance, and shipping experiences.',
    href: 'https://www.shopify.com/international'
  },
  {
    title: 'Accelerated checkout',
    kicker: 'Conversion',
    description:
      'Working on checkout and buyer experiences that make commerce faster, more trusted, and easier to complete.',
    href: 'https://www.shopify.com/shop-pay'
  },
  {
    title: 'Agentic commerce',
    kicker: 'AI interfaces',
    description:
      'Exploring how commerce changes when product discovery and checkout happen inside AI conversations.',
    href: 'https://www.youtube.com/watch?v=_Gi3to6aUCQ&t=1539s'
  }
] as const;

export const talks = [
  {
    title: 'Agentic Commerce',
    event: 'Stripe Tour New York',
    year: '2025',
    description: 'How AI agents are reshaping commerce and what it means for payments infrastructure.',
    href: 'https://www.youtube.com/watch?v=_Gi3to6aUCQ&t=1539s'
  },
  {
    title: 'Fast, Cheap, Global: Local Payment Methods',
    event: 'Stripe Sessions',
    year: '2025',
    description: 'Building payment infrastructure that adapts to local preferences across global markets.',
    href: 'https://stripe.com/en-ca/sessions/2025/fast-cheap-global'
  },
  {
    title: 'Building for a Global Audience',
    event: 'Shopify Unite',
    year: '2019',
    description: 'Lessons from building international commerce tools for millions of merchants.',
    href: 'https://www.youtube.com/watch?v=L1S-MI7Jmvs&t=52s'
  }
] as const;

export const principles = [
  'Infrastructure should disappear into great merchant and buyer experiences.',
  'Global commerce works when local nuance is handled by the platform.',
  'The best product teams convert ambiguity into shipped leverage.'
] as const;

export const timeline = [
  {
    period: '2025 — present',
    title: 'VP Product, Payments & Cross-border',
    company: 'Shopify',
    description: 'Leading product across payments, risk, money movement, and cross-border commerce.'
  },
  {
    period: '2017 — 2025',
    title: 'Product leadership',
    company: 'Shopify',
    description: 'Worked across international expansion, Shopify Markets, Shopify Tax, Shop Promise, and payments.'
  },
  {
    period: 'Before Shopify',
    title: 'Founder, PM, and engineer',
    company: 'Allotrop, Snapdeal, MartMobi',
    description: 'Built products from the ground up across marketplaces, mobile commerce, and startups.'
  }
] as const;
