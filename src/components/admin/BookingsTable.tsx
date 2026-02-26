'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { createClient } from '@/lib/supabase/client';
import {
  updateBookingStatus,
  deleteBooking,
} from '@/app/actions/admin';
import { DeleteModal } from './DeleteModal';
import {
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  CircleCheck,
  Trash2,
  Phone,
  MessageCircle,
  ArrowUpDown,
  Calendar,
} from 'lucide-react';

interface Booking {
  id: string;
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message: string | null;
  status: string;
  created_at: string;
}

const statusColors: Record<string, string> = {
  pending: 'bg-amber-500/15 text-amber-400 border-amber-500/20',
  confirmed: 'bg-blue-500/15 text-blue-400 border-blue-500/20',
  completed: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/20',
  cancelled: 'bg-red-500/15 text-red-400 border-red-500/20',
};

const ITEMS_PER_PAGE = 10;

export function BookingsTable() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('');
  const [sortBy, setSortBy] = useState<'date-desc' | 'date-asc' | 'name'>('date-desc');
  const [page, setPage] = useState(1);
  const [deleteTarget, setDeleteTarget] = useState<Booking | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const supabase = createClient();

  // ── Fetch bookings ──
  const fetchBookings = useCallback(async () => {
    const { data, error } = await supabase
      .from('bookings')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setBookings(data);
    }
    setLoading(false);
  }, [supabase]);

  useEffect(() => {
    fetchBookings();

    // Realtime subscription
    const channel = supabase
      .channel('bookings-realtime')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'bookings' },
        () => {
          fetchBookings();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [fetchBookings, supabase]);

  // ── Filtered + sorted ──
  const filtered = useMemo(() => {
    let result = bookings;

    // Search
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (b) =>
          b.name?.toLowerCase().includes(q) ||
          b.phone?.includes(q)
      );
    }

    // Status filter
    if (statusFilter !== 'all') {
      result = result.filter((b) => b.status === statusFilter);
    }

    // Date filter
    if (dateFilter) {
      result = result.filter((b) => b.date === dateFilter);
    }

    // Sort
    result = [...result].sort((a, b) => {
      if (sortBy === 'date-desc') return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      if (sortBy === 'date-asc') return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
      return (a.name || '').localeCompare(b.name || '');
    });

    return result;
  }, [bookings, search, statusFilter, dateFilter, sortBy]);

  // ── Pagination ──
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  // Reset page when filters change
  useEffect(() => {
    setPage(1);
  }, [search, statusFilter, dateFilter]);

  // ── Actions ──
  const handleStatusChange = async (id: string, status: string) => {
    await updateBookingStatus(id, status);
    fetchBookings();
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    setDeleteLoading(true);
    await deleteBooking(deleteTarget.id);
    setDeleteTarget(null);
    setDeleteLoading(false);
    fetchBookings();
  };

  const whatsappNumber = (phone: string) => {
    const cleaned = phone.replace(/[^0-9]/g, '');
    return cleaned.startsWith('0') ? '92' + cleaned.slice(1) : cleaned;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div id="bookings">
      {/* Header + Filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <h3 className="font-playfair text-2xl font-bold text-darkbg">
          Bookings
        </h3>
        <div className="flex flex-wrap items-center gap-3">
          {/* Search */}
          <div className="relative">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-darkbg/30"
            />
            <input
              type="text"
              placeholder="Search name or phone..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-cream border border-gold/15 rounded-lg pl-9 pr-4 py-2 text-darkbg font-inter text-sm placeholder:text-darkbg/20 focus:outline-none focus:border-gold/40 w-full md:w-56 transition-colors"
            />
          </div>

          {/* Status Filter */}
          <div className="relative">
            <Filter
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-darkbg/30 pointer-events-none"
            />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-cream border border-gold/15 rounded-lg pl-9 pr-8 py-2 text-darkbg font-inter text-sm focus:outline-none focus:border-gold/40 appearance-none cursor-pointer transition-colors"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>

          {/* Date Filter */}
          <div className="relative">
            <Calendar
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-darkbg/30 pointer-events-none"
            />
            <input
              type="date"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="bg-cream border border-gold/15 rounded-lg pl-9 pr-3 py-2 text-darkbg font-inter text-sm focus:outline-none focus:border-gold/40 transition-colors"
            />
          </div>

          {/* Sort */}
          <button
            onClick={() =>
              setSortBy((prev) =>
                prev === 'date-desc'
                  ? 'date-asc'
                  : prev === 'date-asc'
                  ? 'name'
                  : 'date-desc'
              )
            }
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-gold/15 text-darkbg/50 font-inter text-sm hover:text-gold hover:border-gold/30 transition-colors"
          >
            <ArrowUpDown size={14} />
            {sortBy === 'date-desc'
              ? 'Newest'
              : sortBy === 'date-asc'
              ? 'Oldest'
              : 'A-Z'}
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-gold/10 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="border-b border-gold/10">
                <th className="px-4 py-3 text-left font-inter text-xs text-darkbg/40 uppercase tracking-wider">
                  #
                </th>
                <th className="px-4 py-3 text-left font-inter text-xs text-darkbg/40 uppercase tracking-wider">
                  Client
                </th>
                <th className="px-4 py-3 text-left font-inter text-xs text-darkbg/40 uppercase tracking-wider">
                  Phone
                </th>
                <th className="px-4 py-3 text-left font-inter text-xs text-darkbg/40 uppercase tracking-wider">
                  Service
                </th>
                <th className="px-4 py-3 text-left font-inter text-xs text-darkbg/40 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-4 py-3 text-left font-inter text-xs text-darkbg/40 uppercase tracking-wider">
                  Time
                </th>
                <th className="px-4 py-3 text-left font-inter text-xs text-darkbg/40 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-3 text-left font-inter text-xs text-darkbg/40 uppercase tracking-wider">
                  Notes
                </th>
                <th className="px-4 py-3 text-left font-inter text-xs text-darkbg/40 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {paginated.length === 0 ? (
                <tr>
                  <td
                    colSpan={9}
                    className="px-4 py-16 text-center font-inter text-darkbg/30 text-sm"
                  >
                    No bookings found.
                  </td>
                </tr>
              ) : (
                paginated.map((booking, i) => (
                  <tr
                    key={booking.id}
                    className="border-b border-gold/5 hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="px-4 py-3 font-inter text-sm text-darkbg/30">
                      {(page - 1) * ITEMS_PER_PAGE + i + 1}
                    </td>
                    <td className="px-4 py-3 font-inter text-sm text-darkbg font-medium">
                      {booking.name || '—'}
                    </td>
                    <td className="px-4 py-3 font-inter text-sm text-darkbg/70">
                      {booking.phone || '—'}
                    </td>
                    <td className="px-4 py-3 font-inter text-sm text-darkbg/70 max-w-[150px] truncate">
                      {booking.service || '—'}
                    </td>
                    <td className="px-4 py-3 font-inter text-sm text-darkbg/70">
                      {booking.date || '—'}
                    </td>
                    <td className="px-4 py-3 font-inter text-sm text-darkbg/70">
                      {booking.time || '—'}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-block px-2.5 py-1 rounded-full text-xs font-inter font-medium border ${
                          statusColors[booking.status] || statusColors.pending
                        }`}
                      >
                        {booking.status || 'pending'}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-inter text-xs text-darkbg/40 max-w-[120px] truncate">
                      {booking.message || '—'}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1.5">
                        {booking.status !== 'confirmed' && (
                          <button
                            onClick={() =>
                              handleStatusChange(booking.id, 'confirmed')
                            }
                            title="Mark Confirmed"
                            className="p-1.5 rounded-md text-blue-400/60 hover:text-blue-400 hover:bg-blue-500/10 transition-colors"
                          >
                            <CheckCircle2 size={16} />
                          </button>
                        )}
                        {booking.status !== 'completed' && (
                          <button
                            onClick={() =>
                              handleStatusChange(booking.id, 'completed')
                            }
                            title="Mark Completed"
                            className="p-1.5 rounded-md text-emerald-400/60 hover:text-emerald-400 hover:bg-emerald-500/10 transition-colors"
                          >
                            <CircleCheck size={16} />
                          </button>
                        )}
                        {booking.phone && (
                          <>
                            <a
                              href={`tel:${booking.phone}`}
                              title="Call"
                              className="p-1.5 rounded-md text-darkbg/30 hover:text-gold hover:bg-gold/10 transition-colors"
                            >
                              <Phone size={16} />
                            </a>
                            <a
                              href={`https://wa.me/${whatsappNumber(booking.phone)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="WhatsApp"
                              className="p-1.5 rounded-md text-darkbg/30 hover:text-green-400 hover:bg-green-500/10 transition-colors"
                            >
                              <MessageCircle size={16} />
                            </a>
                          </>
                        )}
                        <button
                          onClick={() => setDeleteTarget(booking)}
                          title="Delete"
                          className="p-1.5 rounded-md text-darkbg/30 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between px-4 py-3 border-t border-gold/10">
            <p className="font-inter text-xs text-darkbg/30">
              Showing {(page - 1) * ITEMS_PER_PAGE + 1}–
              {Math.min(page * ITEMS_PER_PAGE, filtered.length)} of{' '}
              {filtered.length}
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="p-1.5 rounded-md text-darkbg/40 hover:text-gold disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <span className="font-inter text-xs text-darkbg/50">
                {page} / {totalPages}
              </span>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="p-1.5 rounded-md text-darkbg/40 hover:text-gold disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      <DeleteModal
        isOpen={!!deleteTarget}
        title="Delete Booking"
        message={`Are you sure you want to delete the booking for "${deleteTarget?.name}"? This action cannot be undone.`}
        onConfirm={handleDelete}
        onCancel={() => setDeleteTarget(null)}
        loading={deleteLoading}
      />
    </div>
  );
}
