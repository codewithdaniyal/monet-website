'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=2071&auto=format&fit=crop',
    alt: 'Bridal Glam — Monét Beauty Lounge',
    className: 'col-span-1 row-span-2 h-full',
  },
  {
    src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop',
    alt: 'Hair Styling — Monét Beauty Lounge',
    className: 'col-span-1 row-span-1 h-64',
  },
  {
    src: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2087&auto=format&fit=crop',
    alt: 'Bridal Makeup — Monét Beauty Lounge',
    className: 'col-span-1 row-span-1 h-64',
  },
  {
    src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1974&auto=format&fit=crop',
    alt: 'Nail Art — Monét Beauty Lounge',
    className: 'col-span-2 md:col-span-1 row-span-1 h-64',
  },
  {
    src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop',
    alt: 'Skincare Facial — Monét Beauty Lounge',
    className: 'col-span-1 row-span-1 h-64',
  },
  {
    src: 'https://images.unsplash.com/photo-1629332791370-77208e6cbb67?q=80&w=2070&auto=format&fit=crop',
    alt: 'Henna Art — Monét Beauty Lounge',
    className: 'col-span-1 row-span-1 h-64',
  },
];

export function GalleryPreview() {
  return (
    <section className="bg-cream py-24 border-t border-gold/10">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="font-inter text-xs text-gold tracking-[0.2em] font-bold uppercase mb-4">
            Our Work
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-darkbg">
            Transformations That Speak
          </h2>
          <div className="w-16 h-1 bg-gold mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 auto-rows-auto mb-16">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden group cursor-pointer shadow-lg ${img.className}`}
            >
              <div className="relative w-full h-full min-h-[12rem]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
              <div className="absolute inset-0 bg-gold/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="font-playfair text-xl font-bold text-cream transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  View More
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center border-2 border-gold text-gold hover:bg-gold hover:text-cream px-8 py-3.5 rounded transition-all duration-300 font-inter font-medium text-sm tracking-wide group"
          >
            <span>View Full Gallery</span>
            <span className="font-sans ml-2 transform group-hover:translate-x-1 transition-transform">
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
