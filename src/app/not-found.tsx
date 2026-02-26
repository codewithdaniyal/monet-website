import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4">
      {/* Subtle pattern */}
      <div
        className="fixed inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(201,169,110,0.8) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative text-center max-w-md">
        <h1 className="font-playfair text-8xl md:text-9xl font-bold text-gold/20 mb-2">
          404
        </h1>
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-darkbg mb-4 -mt-4">
          Page Not Found
        </h2>
        <div className="w-16 h-0.5 bg-gold mx-auto mb-6 rounded-full" />
        <p className="font-inter text-darkbg/50 text-sm md:text-base mb-10 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let us guide you back.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 px-6 py-3 bg-gold text-cream rounded-lg font-inter font-medium text-sm hover:bg-[#b0935c] transition-all duration-300 shadow-[0_0_15px_rgba(201,169,110,0.2)]"
          >
            <Home size={16} />
            Back to Home
          </Link>
          <Link
            href="/services"
            className="flex items-center gap-2 px-6 py-3 border border-gold/20 text-darkbg/70 rounded-lg font-inter font-medium text-sm hover:text-gold hover:border-gold/40 transition-all duration-300"
          >
            <ArrowLeft size={16} />
            View Services
          </Link>
        </div>
      </div>
    </div>
  );
}
