'use client';

import { useEffect } from 'react';
import { RefreshCcw, Home } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('App error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
          <span className="text-red-400 text-2xl">!</span>
        </div>
        <h2 className="font-playfair text-3xl font-bold text-darkbg mb-4">
          Something Went Wrong
        </h2>
        <div className="w-12 h-0.5 bg-gold mx-auto mb-6 rounded-full" />
        <p className="font-inter text-darkbg/50 text-sm mb-8 leading-relaxed">
          An unexpected error occurred. Please try again or go back to the
          homepage.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={reset}
            className="flex items-center gap-2 px-6 py-3 bg-gold text-cream rounded-lg font-inter font-medium text-sm hover:bg-[#b0935c] transition-all duration-300"
          >
            <RefreshCcw size={16} />
            Try Again
          </button>
          <Link
            href="/"
            className="flex items-center gap-2 px-6 py-3 border border-gold/20 text-darkbg/70 rounded-lg font-inter font-medium text-sm hover:text-gold hover:border-gold/40 transition-all duration-300"
          >
            <Home size={16} />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
