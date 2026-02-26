import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AboutContent } from '@/components/about/AboutContent';

export const metadata: Metadata = {
  title: 'About Us | Monét Beauty Lounge Lahore',
  description:
    'Learn about Monét Beauty Lounge — Gulberg III, Lahore. Premium hair, makeup, skin, nails & dental aesthetics.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Us | Monét Beauty Lounge Lahore',
    description: 'Monét Beauty Lounge — premium beauty & dental aesthetics in Gulberg III, Lahore.',
    url: '/about',
  },
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      <Navbar />
      <AboutContent />
      <Footer />
    </main>
  );
}
