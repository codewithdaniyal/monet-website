'use client';

import React, { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Mail, Lock, Eye, EyeOff, ArrowLeft, Loader2 } from 'lucide-react';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    setLoading(true);

    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      setError('Invalid credentials. Please try again.');
      setLoading(false);
      return;
    }

    router.push('/admin');
  };

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4">
      {/* Subtle background pattern */}
      <div
        className="fixed inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(201,169,110,0.8) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative w-full max-w-md">
        {/* Login Card */}
        <div className="bg-white border border-gold/10 rounded-2xl shadow-2xl shadow-black/50 p-8 md:p-10">
          {/* Brand Header */}
          <div className="text-center mb-10">
            <h1 className="font-playfair text-3xl md:text-4xl font-bold text-darkbg mb-2">
              Monét
            </h1>
            <div className="w-12 h-0.5 bg-gold mx-auto mb-3 rounded-full" />
            <p className="font-inter text-sm text-darkbg/50 tracking-widest uppercase">
              Admin Panel
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-3.5 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm font-inter text-center">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block font-inter text-xs text-darkbg/40 uppercase tracking-wider mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-darkbg/30"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@beautylounge.pk"
                  required
                  className="w-full bg-cream border border-gold/15 rounded-lg pl-12 pr-4 py-3.5 text-darkbg font-inter text-sm placeholder:text-darkbg/20 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all duration-300"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block font-inter text-xs text-darkbg/40 uppercase tracking-wider mb-2">
                Password
              </label>
              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-darkbg/30"
                />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full bg-cream border border-gold/15 rounded-lg pl-12 pr-12 py-3.5 text-darkbg font-inter text-sm placeholder:text-darkbg/20 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all duration-300"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-darkbg/30 hover:text-gold transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gold text-cream py-3.5 rounded-lg font-inter font-semibold text-sm hover:bg-[#b0935c] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(201,169,110,0.2)] hover:shadow-[0_0_30px_rgba(201,169,110,0.4)]"
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Signing In...
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>
        </div>

        {/* Back to website link */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-darkbg/40 hover:text-gold font-inter text-sm transition-colors duration-300"
          >
            <ArrowLeft size={16} />
            Back to Website
          </Link>
        </div>
      </div>
    </div>
  );
}
