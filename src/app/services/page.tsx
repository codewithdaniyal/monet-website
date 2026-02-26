import type { Metadata } from 'next';
import { ServicesHero } from '@/components/services/ServicesHero';
import { ServicesGrid } from '@/components/services/ServicesGrid';

const BASE_URL = 'https://beautylounge.pk';

export const metadata: Metadata = {
  title: 'Our Services | Monét Beauty Lounge Lahore',
  description:
    'Explore our 18 premium services across Bridal, Hair, Skin, Body, Nails, and Laser treatments at Monét Beauty Lounge Gulberg III.',
  alternates: { canonical: `${BASE_URL}/services` },
  openGraph: {
    title: 'Signature Services | Monét Beauty Lounge',
    description:
      'From full bridal packages to expert laser treatments. Discover our award-winning aesthetic services.',
    url: `${BASE_URL}/services`,
    siteName: 'Monét Beauty Lounge',
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
    </>
  );
}
