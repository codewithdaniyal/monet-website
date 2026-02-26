"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Users, CalendarDays, Award } from "lucide-react";

const badges = [
  { icon: Star, title: "4.9", description: "Google Rating" },
  { icon: Users, title: "7.5K+", description: "Instagram Followers" },
  { icon: CalendarDays, title: "5+", description: "Years Excellence" },
  { icon: Award, title: "Verified", description: "Beauty Experts" },
];

export function TrustBadges() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-16 overflow-hidden bg-cream" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-2xl border border-parchment bg-cream-light p-6 md:p-8 text-center hover:bg-cream-dark/40 transition-all duration-500"
              >
                <div className="relative z-10">
                  <div className="inline-flex mb-4 p-3 rounded-xl bg-champagne/10 text-champagne group-hover:bg-champagne/20 group-hover:scale-110 transition-all duration-300">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl font-light italic text-champagne mb-1.5">
                    {badge.title}
                  </h3>
                  <p className="font-body text-[10px] md:text-[11px] text-stone tracking-[0.15em] uppercase">
                    {badge.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
