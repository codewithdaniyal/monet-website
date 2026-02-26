'use server';

import { createClient } from '@/lib/supabase/server';

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export async function submitContactMessage(payload: ContactPayload) {
  if (!payload.name || payload.name.trim().length < 2) {
    return { success: false, error: 'Please provide your name.' };
  }
  if (!payload.email || !payload.email.includes('@')) {
    return { success: false, error: 'Please provide a valid email.' };
  }
  if (!payload.message || payload.message.trim().length < 5) {
    return { success: false, error: 'Please write a message.' };
  }

  try {
    const supabase = await createClient();

    const { error } = await supabase.from('contact_messages').insert({
      name: payload.name.trim(),
      email: payload.email.trim(),
      phone: payload.phone?.trim() || null,
      subject: payload.subject || 'General Inquiry',
      message: payload.message.trim(),
    });

    if (error) {
      console.error('Supabase contact insert error:', error);
      return { success: false, error: 'Something went wrong. Please try again.' };
    }

    return { success: true };
  } catch (err) {
    console.error('Contact server action error:', err);
    return { success: false, error: 'Server error. Please try again later.' };
  }
}
