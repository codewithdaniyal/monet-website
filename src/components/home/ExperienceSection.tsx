"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const HIGHLIGHTS = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#C5B396" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="14" cy="10" r="6" />
        <path d="M4 26c1-6 5-10 10-10s9 4 10 10" />
      </svg>
    ),
    title: "Curated Expertise",
    desc: "Every stylist is hand-selected with 5+ years of editorial and bridal experience, trained in the latest international techniques.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#C5B396" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 3c-4 6-10 10-10 16a10 10 0 0020 0c0-6-6-10-10-16z" />
        <path d="M14 13v6M11 16h6" />
      </svg>
    ),
    title: "Premium Products Only",
    desc: "We exclusively use MAC, Charlotte Tilbury, Olaplex, and Dermalogica — never generic brands, ever.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#C5B396" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="6" width="20" height="16" rx="3" />
        <path d="M4 12h20M10 6v-2M18 6v-2" />
      </svg>
    ),
    title: "Private Suite Access",
    desc: "Bridal clients enjoy exclusive suite access with complimentary herbal tea, a dedicated team, and a tranquil atmosphere.",
  },
];

export function ExperienceSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative w-full bg-cream-light overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        
        {/* LEFT — Editorial Image */}
        <div className="relative h-[400px] lg:h-auto overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2074&auto=format&fit=crop"
            alt="The Monét Beauty Experience — Premium Salon Interior"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-obsidian/10 to-transparent" />
          {/* Bottom label */}
          <div className="absolute bottom-8 left-8 right-8">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display text-[32px] md:text-[42px] italic text-white leading-tight"
            >
              More than a salon —<br />
              <span className="text-champagne-light">an experience.</span>
            </motion.p>
          </div>
        </div>

        {/* RIGHT — Experience Highlights */}
        <div className="flex flex-col justify-center px-8 md:px-12 lg:px-16 py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="font-body text-[10px] tracking-[0.35em] uppercase text-stone block mb-4">
              The Monét Standard
            </span>
            <h2 className="font-display text-[36px] md:text-[48px] font-light italic text-obsidian leading-tight mb-3">
              Why Women <br className="hidden sm:block" />Choose Us
            </h2>
            <div className="w-12 h-[2px] bg-champagne mb-10" />
          </motion.div>

          <div className="space-y-10">
            {HIGHLIGHTS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 24 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="flex items-start gap-5"
              >
                <div className="shrink-0 w-12 h-12 rounded-full bg-cream-dark flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-display text-[20px] italic text-obsidian mb-1">
                    {item.title}
                  </h3>
                  <p className="font-body text-[13px] text-stone leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12"
          >
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 font-body text-[11px] tracking-[0.2em] uppercase text-obsidian group"
            >
              <span className="border-b border-obsidian pb-[2px] group-hover:border-champagne group-hover:text-champagne transition-all duration-300">
                View Our Gallery
              </span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
