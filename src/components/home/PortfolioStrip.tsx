"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";

const portfolioImages = [
  { url: "https://images.unsplash.com/photo-1549557008-8e6f1f506e97?w=800&q=85", alt: "Editorial Makeup Look", category: "Makeup" },
  { url: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&q=85", alt: "Bridal Hair Styling", category: "Hair" },
  { url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=85", alt: "Luminous Skin Treatment", category: "Skin" },
  { url: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=85", alt: "Signature Nail Art", category: "Nails" },
  { url: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&q=85", alt: "Voluminous Blowout", category: "Hair" },
  { url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=85", alt: "Walima Bridal Portrait", category: "Bridal" },
  { url: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=85", alt: "Glass Skin Finish", category: "Skin" },
  { url: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=800&q=85", alt: "Laser Studio Detail", category: "Laser" },
];

export function PortfolioStrip() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Custom horizontal scroll wheel listener
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      // If user scrolls vertically with mouse wheel, translate to horizontal scroll
      if (e.deltaY !== 0) {
        e.preventDefault();
        el.scrollLeft += e.deltaY * 2;
      }
    };

    const handleScroll = () => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      const progress = maxScroll > 0 ? el.scrollLeft / maxScroll : 0;
      setScrollProgress(progress);
    };

    // Passive false is needed to allow e.preventDefault()
    el.addEventListener("wheel", handleWheel, { passive: false });
    el.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      el.removeEventListener("wheel", handleWheel);
      el.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="w-full py-24 bg-[#FAF8F2] overflow-hidden flex flex-col">
      {/* Section Header */}
      <div className="w-full px-8 md:px-[60px] lg:px-[120px] mb-12 cursor-default">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="block font-body text-[9px] tracking-[0.4em] text-stone uppercase mb-4"
        >
          Our Portfolio
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl md:text-5xl lg:text-[64px] font-light leading-none text-obsidian"
        >
          Real Transformations
        </motion.h2>
      </div>

      {/* Horizontal Strip */}
      <div 
        ref={scrollRef}
        className="w-full h-[400px] md:h-[450px] flex gap-3 md:gap-4 px-6 md:px-[60px] lg:px-[120px] overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar"
      >
        {portfolioImages.map((image, i) => {
          // Alternate widths for editorial pacing
          const isWide = i % 2 === 1; 

          return (
            <div 
              key={i}
              className={`relative h-[350px] md:h-[400px] shrink-0 snap-start overflow-hidden rounded-[14px] group cursor-grab active:cursor-grabbing ${
                isWide ? "w-[280px] md:w-[340px]" : "w-[220px] md:w-[280px]"
              }`}
            >
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              />
              
              {/* Dark overlay fade in from bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Category badge */}
              <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out flex flex-col gap-1">
                <span className="font-body text-[9px] tracking-[0.2em] text-champagne uppercase">
                  {image.category}
                </span>
                <span className="font-display text-lg text-cream italic">
                  {image.alt}
                </span>
              </div>
            </div>
          );
        })}

        {/* Padding box to ensure the last item can snap to the center/left properly */}
        <div className="w-[10vw] shrink-0 pointer-events-none" />
      </div>

      {/* Progress Bar & Caption */}
      <div className="w-full px-[10vw] md:px-[60px] lg:px-[120px] flex flex-col items-center mt-6 gap-4">
        <div className="w-full max-w-[400px] h-[2px] bg-obsidian/10 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-obsidian rounded-full w-full origin-left"
            style={{ scaleX: scrollProgress }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </div>
        <span className="font-body text-[9px] tracking-[0.2em] text-stone uppercase">
          ← scroll to explore →
        </span>
      </div>
    </section>
  );
}
