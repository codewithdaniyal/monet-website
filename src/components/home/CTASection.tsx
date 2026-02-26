'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MessageCircle, ArrowRight } from 'lucide-react';

export function CTASection() {
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '923100099997';
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-32 overflow-hidden noise-overlay" ref={ref}>
      {/* Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1542840410-3092f99611a3?q=80&w=2070&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-cream/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-cream/50" />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 right-1/3 w-64 h-64 rounded-full bg-gold/5 blur-[100px] animate-float" />

      <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="font-inter text-[11px] text-gold/80 tracking-[0.15em] uppercase font-medium">
              Limited Slots Available
            </span>
          </div>

          <h2 className="font-playfair text-4xl md:text-5xl lg:text-7xl font-bold text-darkbg mb-4 leading-[1.1]">
            Ready For Your{' '}
            <span className="text-shimmer italic font-light">
              Transformation?
            </span>
          </h2>
          <p className="font-inter text-darkbg/50 text-base md:text-lg font-light max-w-2xl mx-auto mb-12 leading-relaxed">
            Book your appointment today and experience luxury like never before.
            Let our master artists and clinicians redefine your beauty standards.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4">
            <Link
              href="/booking"
              className="group relative flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-gold to-[#B8944F] text-cream overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,169,110,0.4)] hover:scale-[1.03] font-inter font-semibold text-base"
            >
              <Calendar size={18} className="relative z-10" />
              <span className="relative z-10">Book Appointment</span>
              <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#E8D5A8] to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-4 rounded-full glass-card text-darkbg/70 hover:text-darkbg hover:bg-white/10 transition-all duration-300 font-inter font-medium text-base"
            >
              <MessageCircle size={18} className="text-gold" />
              <span>WhatsApp Now</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
