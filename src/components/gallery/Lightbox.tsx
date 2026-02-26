"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { GalleryImage } from "@/lib/gallery-data";

const C = {
  cream: "#F4F0E6", creamDark: "#EAE4D6", creamLight: "#FAF8F2",
  obsidian: "#1A1A1A", obsidian2: "#2C2C2C",
  champagne: "#C5B396", stone: "#8A8070", whisper: "#B8AF9E", parchment: "#EAE4D6", white: "#FFFFFF",
};
const FONT_BODY = "var(--font-body)";

interface LightboxProps {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
}

export default function Lightbox({ images, index, onClose }: LightboxProps) {
  const [current, setCurrent] = useState(index);
  const [direction, setDirection] = useState(0);

  const total = images.length;

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + total) % total);
  }, [total]);

  /* Keyboard */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, goNext, goPrev]);

  /* Touch swipe */
  const [touchStart, setTouchStart] = useState(0);
  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 60) {
      if (diff > 0) goNext();
      else goPrev();
    }
  };

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0, scale: 0.95 }),
  };

  const img = images[current];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: "fixed", inset: 0, zIndex: 1000, background: "rgba(26,26,26,0.97)",
        backdropFilter: "blur(12px)", display: "flex", alignItems: "center", justifyContent: "center"
      }}
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Close */}
      <button
        onClick={onClose}
        style={{
          position: "absolute", top: 24, right: 24, display: "flex", alignItems: "center", gap: 8,
          zIndex: 10, background: "none", border: "none", cursor: "pointer", padding: 8
        }}
      >
        <span style={{ fontFamily: FONT_BODY, fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: C.cream }}>ESC</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke={C.cream} strokeWidth="1.5" strokeLinecap="round">
          <path d="M5 5l10 10M15 5L5 15" />
        </svg>
      </button>

      {/* Prev Arrow */}
      <button
        onClick={(e) => { e.stopPropagation(); goPrev(); }}
        style={{
          position: "absolute", left: "clamp(1rem, 4vw, 2rem)", top: "50%", transform: "translateY(-50%)",
          width: 44, height: 44, borderRadius: "50%", background: "rgba(244,240,230,0.1)",
          display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
          border: "none", zIndex: 10, transition: "background 0.3s ease"
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = "rgba(197, 179, 150, 0.3)"}
        onMouseLeave={(e) => e.currentTarget.style.background = "rgba(244,240,230,0.1)"}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke={C.cream} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 4L6 9l5 5" />
        </svg>
      </button>

      {/* Next Arrow */}
      <button
        onClick={(e) => { e.stopPropagation(); goNext(); }}
        style={{
          position: "absolute", right: "clamp(1rem, 4vw, 2rem)", top: "50%", transform: "translateY(-50%)",
          width: 44, height: 44, borderRadius: "50%", background: "rgba(244,240,230,0.1)",
          display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
          border: "none", zIndex: 10, transition: "background 0.3s ease"
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = "rgba(197, 179, 150, 0.3)"}
        onMouseLeave={(e) => e.currentTarget.style.background = "rgba(244,240,230,0.1)"}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke={C.cream} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 4l5 5-5 5" />
        </svg>
      </button>

      {/* Image */}
      <div style={{ position: "relative", maxWidth: "85vw", maxHeight: "88vh" }} onClick={(e) => e.stopPropagation()}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={img.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={900}
              height={700}
              style={{ borderRadius: 8, objectFit: "contain", maxHeight: "88vh", width: "auto" }}
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Counter */}
      <div style={{ position: "absolute", bottom: 24, left: "50%", transform: "translateX(-50%)" }}>
        <span style={{ fontFamily: FONT_BODY, fontSize: 11, color: C.cream, letterSpacing: "0.1em" }}>
          {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>
    </motion.div>
  );
}
