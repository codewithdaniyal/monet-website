"use client";

import React from "react";
import { motion } from "framer-motion";

const C = {
  cream: "#F4F0E6", creamDark: "#EAE4D6", creamLight: "#FAF8F2",
  obsidian: "#1A1A1A", obsidian2: "#2C2C2C",
  champagne: "#C5B396", stone: "#8A8070", whisper: "#B8AF9E", parchment: "#EAE4D6", white: "#FFFFFF",
};
const FONT_DISPLAY = "var(--font-display)";
const FONT_BODY = "var(--font-body)";

export function ServicesHero() {
  return (
    <section style={{
      position: "relative", width: "100%", height: "55vh", minHeight: 400,
      background: C.cream, display: "flex", alignItems: "center", overflow: "hidden"
    }}>
      {/* Container */}
      <div style={{
        width: "100%", maxWidth: 1280, margin: "0 auto", padding: "0 clamp(1.5rem, 5vw, 3rem)",
        display: "flex", position: "relative", zIndex: 10
      }}>
        {/* Left 55% Content */}
        <div style={{ width: "100%", maxWidth: "55%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span style={{
              fontFamily: FONT_BODY, fontSize: 10, color: C.stone, letterSpacing: "0.1em",
              marginBottom: 24, display: "block", textTransform: "uppercase"
            }}>
              Home / Services
            </span>
            <h1 style={{
              fontFamily: FONT_DISPLAY, fontSize: "clamp(60px, 8vw, 88px)", fontWeight: 300,
              fontStyle: "italic", color: C.obsidian, lineHeight: 1, marginBottom: 24
            }}>
              Our Services
            </h1>
            <p style={{
              fontFamily: FONT_BODY, fontSize: 14, fontWeight: 300, color: C.stone,
              lineHeight: 1.6, maxWidth: 360, marginBottom: 32
            }}>
              Experience the pinnacle of luxury beauty. Tailored treatments crafted by our renowned specialists.
            </p>
            <div style={{
              display: "inline-block", border: `1px solid rgba(197, 179, 150, 0.3)`,
              borderRadius: 9999, padding: "8px 20px"
            }}>
              <span style={{
                fontFamily: FONT_BODY, fontSize: 10, letterSpacing: "0.2em",
                color: C.champagne, textTransform: "uppercase"
              }}>
                18 Services across 6 categories
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Decorative Botanical SVG */}
      <motion.div
        style={{
          position: "absolute", right: "5%", top: "50%",
          pointerEvents: "none", opacity: 0.15, transform: "translateY(-50%)"
        }}
        animate={{ rotate: [0, 360], y: ["-50%", "-55%", "-50%", "-45%", "-50%"] }}
        transition={{
          rotate: { repeat: Infinity, duration: 60, ease: "linear" },
          y: { repeat: Infinity, duration: 10, ease: "easeInOut" },
        }}
      >
        <Botanical size={280} color={C.obsidian} />
      </motion.div>
    </section>
  );
}

function Botanical({ size = 48, opacity = 1, color = "#1A1A1A" }: { size?: number; opacity?: number; color?: string; }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={{ opacity, display: "block" }}>
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
        <g key={a} transform={`rotate(${a} 24 24)`}>
          <path d="M24 5 C26.5 13 27 18 24 24 C21 18 21.5 13 24 5 Z" stroke={color} strokeWidth="0.8" fill="none" strokeLinecap="round" />
          <path d="M24 5 C27.5 11 28.5 17 24 24 C19.5 17 20.5 11 24 5 Z" stroke={color} strokeWidth="0.4" fill="none" strokeLinecap="round" opacity="0.45" />
        </g>
      ))}
      <circle cx="24" cy="24" r="1.5" fill={color} opacity="0.4" />
    </svg>
  );
}
