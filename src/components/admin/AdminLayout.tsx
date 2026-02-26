'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import {
  LayoutDashboard,
  CalendarDays,
  MessageSquare,
  LogOut,
  Menu,
  X,
} from 'lucide-react';

const navItems = [
  { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { label: 'Bookings', href: '/admin#bookings', icon: CalendarDays },
  { label: 'Messages', href: '/admin#messages', icon: MessageSquare },
];

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push('/admin/login');
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex">
      {/* ── Desktop Sidebar ── */}
      <aside className="hidden lg:flex flex-col w-64 bg-cream border-r border-gold/10 fixed inset-y-0 left-0 z-40">
        {/* Logo */}
        <div className="p-6 border-b border-gold/10">
          <h1 className="font-playfair text-xl font-bold text-darkbg">
            Beauty Lounge
          </h1>
          <p className="font-inter text-[11px] text-gold tracking-widest uppercase mt-1">
            Admin Panel
          </p>
        </div>

        {/* Nav Items */}
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              item.href === '/admin'
                ? pathname === '/admin'
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg font-inter text-sm transition-all duration-200 ${
                  isActive
                    ? 'bg-gold/15 text-gold font-medium'
                    : 'text-darkbg/50 hover:text-darkbg hover:bg-white/5'
                }`}
              >
                <Icon size={18} strokeWidth={1.5} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-gold/10">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-lg font-inter text-sm text-red-400/70 hover:text-red-400 hover:bg-red-500/5 transition-all duration-200 w-full"
          >
            <LogOut size={18} strokeWidth={1.5} />
            Logout
          </button>
        </div>
      </aside>

      {/* ── Mobile Header ── */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-cream/95 backdrop-blur-md border-b border-gold/10">
        <div className="flex items-center justify-between px-4 py-3">
          <div>
            <h1 className="font-playfair text-lg font-bold text-darkbg">
              Beauty Lounge
            </h1>
            <p className="font-inter text-[10px] text-gold tracking-widest uppercase">
              Admin
            </p>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-darkbg/70 hover:text-gold transition-colors p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="border-t border-gold/10 p-4 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg font-inter text-sm text-darkbg/50 hover:text-darkbg hover:bg-white/5 transition-all"
                >
                  <Icon size={18} strokeWidth={1.5} />
                  {item.label}
                </Link>
              );
            })}
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-4 py-3 rounded-lg font-inter text-sm text-red-400/70 hover:text-red-400 hover:bg-red-500/5 transition-all w-full mt-2"
            >
              <LogOut size={18} strokeWidth={1.5} />
              Logout
            </button>
          </div>
        )}
      </div>

      {/* ── Main Content ── */}
      <main className="flex-1 lg:ml-64 pt-[72px] lg:pt-0">
        {/* Top Header Bar (desktop) */}
        <header className="hidden lg:flex items-center justify-between px-8 py-5 border-b border-gold/10 bg-cream/50 backdrop-blur-sm">
          <div>
            <h2 className="font-playfair text-2xl font-bold text-darkbg">
              Admin Dashboard
            </h2>
            <p className="font-inter text-xs text-darkbg/40 mt-0.5">
              Monét Beauty Lounge — Manage bookings &amp; messages
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 rounded-lg font-inter text-sm text-darkbg/50 hover:text-red-400 hover:bg-red-500/5 border border-gold/10 transition-all duration-200"
          >
            <LogOut size={16} />
            Logout
          </button>
        </header>

        <div className="p-4 md:p-8">{children}</div>
      </main>
    </div>
  );
}
