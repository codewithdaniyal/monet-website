"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { galleryImages, GALLERY_CATEGORIES } from "@/lib/gallery-data";
import Lightbox from "./Lightbox";

const C = {
  cream: "#F4F0E6", creamDark: "#EAE4D6", creamLight: "#FAF8F2",
  obsidian: "#1A1A1A", obsidian2: "#2C2C2C",
  champagne: "#C5B396", stone: "#8A8070", whisper: "#B8AF9E", parchment: "#EAE4D6", white: "#FFFFFF",
};
const FONT_DISPLAY = "var(--font-display)";
const FONT_BODY = "var(--font-body)";

export default function GalleryContent() {
  const [activeTab, setActiveTab] = useState("All");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const filtered = galleryImages.filter(
    (img) => activeTab === "All" || img.category === activeTab
  );

  return (
    <>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @media (min-width: 1024px) {
          .gallery-masonry { column-count: 4; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .gallery-masonry { column-count: 3; }
        }
        @media (max-width: 767px) {
          .gallery-masonry { column-count: 2; }
        }
      `}</style>
      
      {/* ── HERO ── */}
      <section style={{
        position: "relative", width: "100%", height: "45vh", minHeight: 340,
        background: C.cream, display: "flex", alignItems: "center", overflow: "hidden"
      }}>
        <div style={{
          width: "100%", maxWidth: 1280, margin: "0 auto", padding: "0 clamp(1.5rem, 5vw, 3rem)",
          display: "flex", alignItems: "center"
        }}>
          {/* Left heading */}
          <motion.div
            style={{ width: "100%", maxWidth: "55%" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span style={{
              fontFamily: FONT_BODY, fontSize: 10, color: C.stone, letterSpacing: "0.1em",
              marginBottom: 16, display: "block", textTransform: "uppercase"
            }}>
              Home / Gallery
            </span>
            <h1 style={{
              fontFamily: FONT_DISPLAY, fontSize: "clamp(48px, 7vw, 72px)", fontWeight: 300,
              fontStyle: "italic", color: C.obsidian, lineHeight: 1, marginBottom: 16
            }}>
              Our Portfolio
            </h1>
            <p style={{
              fontFamily: FONT_BODY, fontSize: 14, fontWeight: 300, color: C.stone, maxWidth: 340
            }}>
              A curated showcase of transformations, artistry, and beauty stories from our studio.
            </p>
          </motion.div>

          {/* Right — Overlapping decorative images */}
          <div className="hidden md:block" style={{ width: "45%", position: "relative", height: 300 }}>
            <motion.div
              style={{
                position: "absolute", top: 0, right: 64, width: 160, height: 200,
                borderRadius: 12, overflow: "hidden", zIndex: 20,
                boxShadow: "0 10px 30px rgba(26,26,26,0.1)"
              }}
              initial={{ opacity: 0, y: 30, rotate: -4 }}
              animate={{ opacity: 1, y: 0, rotate: -4 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image src="https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=75" alt="Bridal" fill style={{ objectFit: "cover" }} />
            </motion.div>
            <motion.div
              style={{
                position: "absolute", top: 32, right: 160, width: 140, height: 180,
                borderRadius: 12, overflow: "hidden", zIndex: 10,
                boxShadow: "0 10px 30px rgba(26,26,26,0.1)"
              }}
              initial={{ opacity: 0, y: 30, rotate: 3 }}
              animate={{ opacity: 1, y: 0, rotate: 3 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Image src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=75" alt="Hair" fill style={{ objectFit: "cover" }} />
            </motion.div>
            <motion.div
              style={{
                position: "absolute", top: 64, right: 16, width: 130, height: 170,
                borderRadius: 12, overflow: "hidden", zIndex: 30,
                boxShadow: "0 10px 30px rgba(26,26,26,0.1)"
              }}
              initial={{ opacity: 0, y: 30, rotate: 6 }}
              animate={{ opacity: 1, y: 0, rotate: 6 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Image src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=75" alt="Skin" fill style={{ objectFit: "cover" }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FILTER BAR ── */}
      <div style={{
        position: "sticky", top: 72, zIndex: 40, background: "rgba(244, 240, 230, 0.95)",
        backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(26,26,26,0.08)",
        height: 52, width: "100%", display: "flex", alignItems: "center", justifyContent: "center",
        overflowX: "auto"
      }} className="hide-scrollbar">
        <nav style={{ display: "flex", alignItems: "center", gap: 32, padding: "0 24px" }}>
          {GALLERY_CATEGORIES.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  position: "relative", fontFamily: FONT_BODY, fontSize: 11, fontWeight: 500,
                  letterSpacing: "0.2em", textTransform: "uppercase",
                  color: isActive ? C.obsidian : C.stone,
                  transition: "color 0.25s ease",
                  background: "none", border: "none", cursor: "pointer", padding: 0
                }}
              >
                {tab}
                {isActive && (
                  <motion.div
                    layoutId="gallery-tab-indicator"
                    style={{
                      position: "absolute", bottom: -19, left: 0, right: 0,
                      height: 2, background: C.champagne
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* ── MASONRY GRID ── */}
      <section style={{ width: "100%", background: C.creamLight, padding: "64px clamp(1.5rem, 5vw, 3rem)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="gallery-masonry" style={{ columnGap: 10 }}>
            <AnimatePresence mode="popLayout">
              {filtered.map((img, idx) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    breakInside: "avoid", marginBottom: 10, position: "relative",
                    cursor: "pointer", borderRadius: 12, overflow: "hidden", display: "inline-block", width: "100%"
                  }}
                  onClick={() => setLightboxIdx(idx)}
                  onMouseEnter={(e) => {
                    const overlay = e.currentTarget.querySelector(".hover-overlay") as HTMLElement;
                    if (overlay) overlay.style.opacity = "1";
                    const image = e.currentTarget.querySelector("img");
                    if (image) image.style.transform = "scale(1.02)";
                  }}
                  onMouseLeave={(e) => {
                    const overlay = e.currentTarget.querySelector(".hover-overlay") as HTMLElement;
                    if (overlay) overlay.style.opacity = "0";
                    const image = e.currentTarget.querySelector("img");
                    if (image) image.style.transform = "scale(1)";
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={500}
                    height={img.aspect === "tall" ? 650 : img.aspect === "wide" ? 350 : 500}
                    style={{ width: "100%", height: "auto", objectFit: "cover", transition: "transform 0.5s ease", display: "block" }}
                  />
                  {/* Hover overlay */}
                  <div className="hover-overlay" style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(26,26,26,0.6), transparent, transparent)",
                    opacity: 0, transition: "opacity 0.4s ease",
                    display: "flex", alignItems: "flex-end", padding: 16, pointerEvents: "none"
                  }}>
                    <span style={{
                      fontFamily: FONT_BODY, fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase",
                      background: "rgba(197, 179, 150, 0.9)", color: C.cream, padding: "4px 12px", borderRadius: 9999,
                      fontWeight: 500
                    }}>
                      {img.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <Lightbox
            images={filtered}
            index={lightboxIdx}
            onClose={() => setLightboxIdx(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
