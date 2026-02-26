import type { Metadata } from 'next';
import ContactContent from '@/components/contact/ContactContent';

const BASE_URL = 'https://beautylounge.pk';

export const metadata: Metadata = {
  title: 'Contact Us | Monét Beauty Lounge Lahore',
  description:
    'Get in touch with Monét Beauty Lounge for bookings, inquiries, and bridal consultations. Located at Gulberg III, Lahore.',
  alternates: { canonical: `${BASE_URL}/contact` },
  openGraph: {
    title: 'Contact | Monét Beauty Lounge',
    description: 'Reach out for appointments, inquiries, or just to say hello.',
    url: `${BASE_URL}/contact`,
    siteName: 'Monét Beauty Lounge',
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
