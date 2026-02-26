import type { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { MarqueeStrip } from '@/components/home/MarqueeStrip';
import { ServicesBento } from '@/components/home/ServicesBento';
import { BridalHighlight } from '@/components/home/BridalHighlight';
import { StatsSection } from '@/components/home/StatsSection';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import Testimonials from '@/components/home/Testimonials';
import FinalCTA from '@/components/home/FinalCTA';

const BASE_URL = 'https://beautylounge.pk';

export const metadata: Metadata = {
  title: 'Monét Beauty Lounge Lahore | Hair, Makeup, Skin & Nails',
  description:
    'Monét Beauty Lounge — Gulberg III, Lahore. Expert hair styling, bridal & party makeup, skin treatments, nail art, henna, and dental aesthetics.',
  alternates: { canonical: BASE_URL },
  openGraph: {
    title: 'Monét Beauty Lounge Lahore',
    description:
      'Premium hair, makeup, skin, nails & dental services in Lahore. Book your transformation today.',
    url: BASE_URL,
    siteName: 'Monét Beauty Lounge',
    locale: 'en_PK',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2074&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Monét Beauty Lounge Lahore',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Monét Beauty Lounge Lahore',
    description: 'Premium hair, makeup, skin, nails & dental in Lahore.',
  },
  keywords: [
    'beauty salon lahore',
    'bridal makeup lahore',
    'skin treatments lahore',
    'teeth whitening lahore',
    'laser hair removal lahore',
    'beauty lounge',
  ],
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <MarqueeStrip />
      <ServicesBento />
      <BridalHighlight />
      <StatsSection />
      <WhyChooseUs />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
