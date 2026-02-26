'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Scissors, Sparkles, Droplet, Paintbrush, Flower2, Smile, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    id: 'hair',
    title: 'Hair Services',
    description: 'Precision cuts, coloring, keratin, party hair-dos & Hair PRP by expert stylists.',
    icon: Scissors,
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2074&auto=format&fit=crop',
  },
  {
    id: 'makeup',
    title: 'Bridal & Party Makeup',
    description: 'Flawless bridal, engagement, and party makeup for your special occasions.',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1600685890506-593fdf55949b?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'skin',
    title: 'Skin Treatments',
    description: 'HydraFacial, Carbon Peel, anti-aging therapies & medical-grade skin rejuvenation.',
    icon: Droplet,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'nails',
    title: 'Nail Studio',
    description: 'Luxury manicures, pedicures, gel polish & custom nail art in a relaxing setting.',
    icon: Paintbrush,
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'henna',
    title: 'Henna Art',
    description: 'Intricate bridal mehndi and party henna designs with premium organic mehndi.',
    icon: Flower2,
    image: 'https://images.unsplash.com/photo-1629332791370-77208e6cbb67?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'dental',
    title: 'Dental Aesthetics',
    description: 'Professional teeth whitening and polish scaling for a confident smile.',
    icon: Smile,
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop',
  },
];

export function ServicesOverview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative py-24 overflow-hidden" ref={ref}>
      {/* Section header */}
      <div className="container mx-auto px-4 md:px-8 max-w-7xl mb-16">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card mb-6">
            <Sparkles size={12} className="text-gold" />
            <span className="font-inter text-[11px] text-gold/80 tracking-[0.15em] uppercase font-medium">
              Our Expertise
            </span>
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-darkbg mb-4">
            Services We <span className="text-shimmer italic font-light">Offer</span>
          </h2>
          <p className="font-inter text-darkbg/40 text-sm md:text-base max-w-xl">
            Discover our comprehensive range of luxury beauty and dental treatments
          </p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative glass-card rounded-2xl overflow-hidden hover:border-gold/15 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url("${service.image}")` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/20 to-transparent" />

                  {/* Floating icon */}
                  <div className="absolute bottom-4 right-4 w-10 h-10 rounded-xl bg-cream/80 backdrop-blur-sm border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-cream transition-all duration-300 group-hover:scale-110">
                    <Icon size={18} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-bold text-darkbg mb-2 group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-inter text-darkbg/40 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center gap-2 text-gold/70 font-inter text-sm font-medium tracking-wide hover:text-gold group-hover:gap-3 transition-all duration-300"
                  >
                    View Details
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full glass-card text-darkbg/60 hover:text-gold hover:border-gold/20 font-inter font-medium text-sm tracking-wide transition-all duration-300 hover:bg-white/5"
          >
            Explore All Services
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
