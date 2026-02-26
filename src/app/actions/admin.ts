'use server';

import { createClient } from '@/lib/supabase/server';

// ── Verify admin is authenticated ──
async function requireAuth() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error('Unauthorized');
  return supabase;
}

// ── Update Booking Status ──
export async function updateBookingStatus(id: string, status: string) {
  const supabase = await requireAuth();

  const { error } = await supabase
    .from('bookings')
    .update({ status })
    .eq('id', id);

  if (error) {
    console.error('Update booking error:', error);
    return { success: false, message: 'Failed to update booking status.' };
  }

  return { success: true, message: `Booking marked as ${status}.` };
}

// ── Delete Booking ──
export async function deleteBooking(id: string) {
  const supabase = await requireAuth();

  const { error } = await supabase.from('bookings').delete().eq('id', id);

  if (error) {
    console.error('Delete booking error:', error);
    return { success: false, message: 'Failed to delete booking.' };
  }

  return { success: true, message: 'Booking deleted successfully.' };
}

// ── Delete Contact Message ──
export async function deleteMessage(id: string) {
  const supabase = await requireAuth();

  const { error } = await supabase
    .from('contact_messages')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Delete message error:', error);
    return { success: false, message: 'Failed to delete message.' };
  }

  return { success: true, message: 'Message deleted successfully.' };
}
