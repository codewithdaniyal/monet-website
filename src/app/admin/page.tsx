import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { AdminDashboardContent } from '@/components/admin/AdminDashboardContent';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/admin/login');
  }

  // Fetch stats server-side
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

  const [totalRes, todayRes, pendingRes, completedRes] = await Promise.all([
    supabase.from('bookings').select('id', { count: 'exact', head: true }),
    supabase
      .from('bookings')
      .select('id', { count: 'exact', head: true })
      .eq('date', today),
    supabase
      .from('bookings')
      .select('id', { count: 'exact', head: true })
      .eq('status', 'pending'),
    supabase
      .from('bookings')
      .select('id', { count: 'exact', head: true })
      .eq('status', 'completed'),
  ]);

  const stats = {
    total: totalRes.count ?? 0,
    today: todayRes.count ?? 0,
    pending: pendingRes.count ?? 0,
    completed: completedRes.count ?? 0,
  };

  return (
    <AdminLayout>
      <AdminDashboardContent stats={stats} />
    </AdminLayout>
  );
}
