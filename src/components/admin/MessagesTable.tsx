'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { createClient } from '@/lib/supabase/client';
import { deleteMessage } from '@/app/actions/admin';
import { DeleteModal } from './DeleteModal';
import { Search, Trash2, Mail } from 'lucide-react';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

export function MessagesTable() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [deleteTarget, setDeleteTarget] = useState<ContactMessage | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const supabase = createClient();

  const fetchMessages = useCallback(async () => {
    const { data, error } = await supabase
      .from('contact_messages')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setMessages(data);
    }
    setLoading(false);
  }, [supabase]);

  useEffect(() => {
    fetchMessages();

    const channel = supabase
      .channel('messages-realtime')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'contact_messages' },
        () => {
          fetchMessages();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [fetchMessages, supabase]);

  const filtered = useMemo(() => {
    if (!search.trim()) return messages;
    const q = search.toLowerCase();
    return messages.filter(
      (m) =>
        m.name?.toLowerCase().includes(q) ||
        m.email?.toLowerCase().includes(q)
    );
  }, [messages, search]);

  const handleDelete = async () => {
    if (!deleteTarget) return;
    setDeleteLoading(true);
    await deleteMessage(deleteTarget.id);
    setDeleteTarget(null);
    setDeleteLoading(false);
    fetchMessages();
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-PK', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div id="messages" className="mt-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <h3 className="font-playfair text-2xl font-bold text-darkbg">
          Contact Messages
        </h3>
        <div className="relative">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-darkbg/30"
          />
          <input
            type="text"
            placeholder="Search name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-cream border border-gold/15 rounded-lg pl-9 pr-4 py-2 text-darkbg font-inter text-sm placeholder:text-darkbg/20 focus:outline-none focus:border-gold/40 w-full md:w-56 transition-colors"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-gold/10 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-gold/10">
                <th className="px-4 py-3 text-left font-inter text-xs text-darkbg/40 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-4 py-3 text-left font-inter text-xs text-darkbg/40 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-4 py-3 text-left font-inter text-xs text-darkbg/40 uppercase tracking-wider">
                  Message
                </th>
                <th className="px-4 py-3 text-left font-inter text-xs text-darkbg/40 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-4 py-3 text-left font-inter text-xs text-darkbg/40 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-4 py-16 text-center font-inter text-darkbg/30 text-sm"
                  >
                    No messages found.
                  </td>
                </tr>
              ) : (
                filtered.map((msg) => (
                  <tr
                    key={msg.id}
                    className="border-b border-gold/5 hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="px-4 py-3 font-inter text-sm text-darkbg font-medium">
                      {msg.name || '—'}
                    </td>
                    <td className="px-4 py-3 font-inter text-sm text-darkbg/70">
                      {msg.email || '—'}
                    </td>
                    <td className="px-4 py-3 font-inter text-xs text-darkbg/50 max-w-[250px]">
                      <p className="line-clamp-2">{msg.message || '—'}</p>
                    </td>
                    <td className="px-4 py-3 font-inter text-xs text-darkbg/40 whitespace-nowrap">
                      {formatDate(msg.created_at)}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1.5">
                        {msg.email && (
                          <a
                            href={`mailto:${msg.email}`}
                            title="Reply via email"
                            className="p-1.5 rounded-md text-darkbg/30 hover:text-gold hover:bg-gold/10 transition-colors"
                          >
                            <Mail size={16} />
                          </a>
                        )}
                        <button
                          onClick={() => setDeleteTarget(msg)}
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
      </div>

      <DeleteModal
        isOpen={!!deleteTarget}
        title="Delete Message"
        message={`Are you sure you want to delete the message from "${deleteTarget?.name}"?`}
        onConfirm={handleDelete}
        onCancel={() => setDeleteTarget(null)}
        loading={deleteLoading}
      />
    </div>
  );
}
