import type { Metadata } from 'next';
import MultiStepBooking from '@/components/booking/MultiStepBooking';

const BASE_URL = 'https://beautylounge.pk';

export const metadata: Metadata = {
  title: 'Book an Appointment | Monét Beauty Lounge Lahore',
  description:
    'Schedule your premium beauty experience at Monét Beauty Lounge. Bridal, hair, skin, body, nails, and laser treatments available.',
  alternates: { canonical: `${BASE_URL}/booking` },
  openGraph: {
    title: 'Book Your Appointment | Monét Beauty Lounge',
    description:
      'Reserve your slot for an unforgettable beauty experience at Gulberg III, Lahore.',
    url: `${BASE_URL}/booking`,
    siteName: 'Monét Beauty Lounge',
  },
};

export default function BookingPage() {
  return <MultiStepBooking />;
}
