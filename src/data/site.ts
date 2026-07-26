export const profile = {
  name: 'Rohit Mishra',
  role: 'VP Product at Shopify',
  headline: 'Rohit Mishra',
  location: 'New York, United States',
  email: 'mailto:rohit@rohitmishra.me',
  socials: [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/arohitmishra' },
    { label: 'X / Twitter', href: 'https://twitter.com/amishrarohit' },
    { label: 'Email', href: 'mailto:rohit@rohitmishra.me' }
  ]
} as const;

export const workThemes = [
  {
    title: 'Shopify Payments',
    visual: 'payments',
    tone: 'green',
    description: 'Optimized payment acceptance across all channels',
    href: 'https://www.shopify.com/payments'
  },
  {
    title: 'Shop Pay',
    visual: 'shop-pay',
    tone: 'blue',
    description: 'The best-converting wallet, used by 250M+ shoppers.',
    href: 'https://www.shopify.com/shop-pay'
  },
  {
    title: 'Shopify Markets',
    visual: 'markets',
    tone: 'gold',
    description: 'Simplest way to sell internationally',
    href: 'https://www.shopify.com/international'
  },
  {
    title: 'Shopify Tax',
    visual: 'tax',
    tone: 'rose',
    description: 'Simplified end to end sales tax',
    href: 'https://www.shopify.com/tax'
  }
] as const;

export const talks = [
  {
    title: 'Agentic Commerce',
    event: 'Stripe Tour New York',
    year: '2025',
    visual: 'Agentic',
    tone: 'rose',
    description: 'How AI agents are reshaping commerce and what it means for payments infrastructure.',
    href: 'https://www.youtube.com/watch?v=_Gi3to6aUCQ&t=1539s'
  },
  {
    title: 'Fast, Cheap, Global: Local Payment Methods',
    event: 'Stripe Sessions',
    year: '2025',
    visual: 'LPMs',
    tone: 'green',
    description: 'Building payment infrastructure that adapts to local preferences across global markets.',
    href: 'https://stripe.com/en-ca/sessions/2025/fast-cheap-global'
  },
  {
    title: 'Building for a Global Audience',
    event: 'Shopify Unite',
    year: '2019',
    visual: 'Unite',
    tone: 'gold',
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
