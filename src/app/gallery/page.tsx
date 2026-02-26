import type { Metadata } from 'next';
import GalleryContent from '@/components/gallery/GalleryContent';

const BASE_URL = 'https://beautylounge.pk';

export const metadata: Metadata = {
  title: 'Gallery | Monét Beauty Lounge Lahore',
  description:
    'Browse our portfolio of bridal, hair, skin, nails, makeup, and spa transformations at Monét Beauty Lounge Gulberg III.',
  alternates: { canonical: `${BASE_URL}/gallery` },
  openGraph: {
    title: 'Portfolio Gallery | Monét Beauty Lounge',
    description: 'A curated showcase of beauty transformations from Lahore\'s finest salon.',
    url: `${BASE_URL}/gallery`,
    siteName: 'Monét Beauty Lounge',
  },
};

export default function GalleryPage() {
  return <GalleryContent />;
}
