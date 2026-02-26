'use server';

import { createClient } from '@/lib/supabase/server';

interface BookingPayload {
  clientName: string;
  phone: string;
  email?: string;
  category: string;
  service: string;
  date: string;
  time: string;
  notes?: string;
}

export async function submitBooking(payload: BookingPayload) {
  // ── Validation ──
  if (!payload.clientName || payload.clientName.trim().length < 2) {
    return { success: false, error: 'Please provide a valid name.' };
  }
  if (!payload.phone || payload.phone.trim().length < 7) {
    return { success: false, error: 'Please provide a valid phone number.' };
  }
  if (!payload.category || !payload.service) {
    return { success: false, error: 'Please select a service.' };
  }
  if (!payload.date || !payload.time) {
    return { success: false, error: 'Please select a date and time.' };
  }

  try {
    const supabase = await createClient();

    const { error } = await supabase.from('bookings').insert({
      client_name: payload.clientName.trim(),
      phone_number: payload.phone.trim(),
      email: payload.email?.trim() || null,
      service_category: payload.category,
      specific_service: payload.service,
      appointment_date: payload.date,
      appointment_time: payload.time,
      status: 'pending',
      special_notes: payload.notes?.trim() || null,
    });

    if (error) {
      console.error('Supabase booking insert error:', error);
      return { success: false, error: 'Something went wrong. Please try again.' };
    }

    return { success: true };
  } catch (err) {
    console.error('Booking server action error:', err);
    return { success: false, error: 'Server error. Please try again later.' };
  }
}
