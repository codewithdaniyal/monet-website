"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const C = {
  cream: "#F4F0E6", creamDark: "#EAE4D6", creamLight: "#FAF8F2",
  obsidian: "#1A1A1A", obsidian2: "#2C2C2C",
  champagne: "#C5B396", stone: "#8A8070", whisper: "#B8AF9E", parchment: "#EAE4D6", white: "#FFFFFF",
};
const FONT_DISPLAY = "var(--font-display)";
const FONT_BODY = "var(--font-body)";

function Botanical({ size = 48, opacity = 0.18, color = "#1A1A1A", float = false }: { size?: number; opacity?: number; color?: string; float?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none"
      style={{ opacity, flexShrink: 0, display: "block", animation: float ? "float 9s ease-in-out infinite" : "none" }}>
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

export function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  return (
    <section style={{
      width: "100%", minHeight: "100svh", overflow: "hidden", position: "relative",
      background: `radial-gradient(ellipse 85% 80% at 20% 45%, ${C.cream} 0%, #EDE7D6 55%, ${C.creamLight} 100%)`,
      display: "grid", gridTemplateColumns: "1fr", alignItems: "center",
    }} className="lg:!grid-cols-[52%_48%]">
      <style>{`
        @media (min-width: 1024px) {
          .hero-grid { grid-template-columns: 52% 48% !important; }
          .hero-right { display: block !important; }
        }
        @media (max-width: 1023px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-right { display: none !important; }
        }
      `}</style>

      {/* Background botanical watermark */}
      <div style={{ position: "absolute", right: "20%", top: "5%", zIndex: 0, pointerEvents: "none" }}>
        <Botanical size={520} opacity={0.045} color={C.obsidian} float />
      </div>

      {/* LEFT CONTENT */}
      <div style={{ padding: "120px clamp(1.5rem, 6vw, 7rem) 80px", position: "relative", zIndex: 1 }}>
        <div style={{
          display: "flex", alignItems: "center", gap: 14, marginBottom: 28,
          opacity: loaded ? 1 : 0, transition: "all 0.7s ease 0.2s",
        }}>
          <div style={{ width: 40, height: 1, background: C.champagne }} />
          <span style={{ fontFamily: FONT_BODY, fontSize: 9, fontWeight: 500, letterSpacing: "0.45em", textTransform: "uppercase", color: C.stone }}>
            LAHORE · PAKISTAN · LUXURY BEAUTY
          </span>
        </div>

        {["Redefining", "Beauty", "in Lahore."].map((line, i) => (
          <div key={line} style={{
            fontFamily: FONT_DISPLAY, fontWeight: 300, lineHeight: i === 1 ? 1 : 1.05,
            fontSize: i === 1 ? "clamp(56px, 9vw, 112px)" : "clamp(38px, 6vw, 76px)",
            color: C.obsidian, letterSpacing: i === 1 ? "-0.02em" : "-0.01em",
            fontStyle: i === 1 ? "italic" : "normal",
            opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(28px)",
            transition: `all 0.85s cubic-bezier(0.16,1,0.3,1) ${0.3 + i * 0.14}s`,
          }}>{line}</div>
        ))}

        <div style={{
          width: 80, height: 1, background: C.champagne, margin: "30px 0",
          transformOrigin: "left", transform: loaded ? "scaleX(1)" : "scaleX(0)",
          transition: "transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.75s",
        }} />

        <p style={{
          fontFamily: FONT_BODY, fontSize: 14, fontWeight: 300, color: C.stone,
          lineHeight: 1.9, maxWidth: 390, margin: "0 0 36px",
          opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(16px)",
          transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 0.9s",
        }}>
          Luxury hair, bridal artistry, skin aesthetics & more — crafted for the women of Lahore.
        </p>

        <div style={{
          display: "flex", gap: 12, flexWrap: "wrap",
          opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(14px)",
          transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 1.05s",
        }}>
          <Link href="/booking" style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            fontFamily: FONT_BODY, fontSize: 11, fontWeight: 500,
            letterSpacing: "0.18em", textTransform: "uppercase",
            padding: "13px 34px", borderRadius: 2,
            border: `1px solid ${C.obsidian}`, background: C.obsidian, color: C.cream,
            textDecoration: "none", transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
          }}>Book Appointment →</Link>
          <Link href="/contact" style={{
            fontFamily: FONT_BODY, fontSize: 11, fontWeight: 500,
            letterSpacing: "0.18em", textTransform: "uppercase",
            background: "transparent", color: C.obsidian, border: "1px solid rgba(26,26,26,0.28)",
            borderRadius: 2, padding: "13px 34px", textDecoration: "none",
            transition: "all 0.3s ease",
          }}>WhatsApp Consult</Link>
        </div>

        <div style={{
          marginTop: 44, fontFamily: FONT_BODY, fontSize: 10, color: C.whisper, letterSpacing: "0.1em",
          opacity: loaded ? 1 : 0, transition: "all 0.8s ease 1.25s",
        }}>
          ⭐ 4.9 · 2,000+ Women Served · Certified Experts
        </div>
      </div>

      {/* RIGHT — IMAGE (desktop only) */}
      <div className="hero-right" style={{ height: "88vh", position: "relative", display: "none" }}>
        <div style={{
          width: "100%", height: "100%", borderRadius: "0 0 0 100px",
          overflow: "hidden", position: "relative",
          clipPath: loaded ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)",
          transition: "clip-path 1.3s cubic-bezier(0.16,1,0.3,1) 0.3s",
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&q=90&fit=crop"
            alt="MONÉT Beauty Lounge"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(197,179,150,0.06) 0%, transparent 60%)" }} />
        </div>

        {/* Floating badges */}
        <div style={{
          position: "absolute", bottom: 40, left: -20,
          background: C.white, border: `1px solid ${C.parchment}`,
          borderRadius: 16, padding: "18px 24px",
          boxShadow: "0 20px 60px rgba(26,26,26,0.12)",
          animation: "float 8s ease-in-out infinite",
          opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease 1.4s",
        }}>
          <div style={{ fontFamily: FONT_DISPLAY, fontSize: 34, fontStyle: "italic", fontWeight: 300, color: C.obsidian, lineHeight: 1 }}>2K+</div>
          <div style={{ fontFamily: FONT_BODY, fontSize: 9, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: C.stone, marginTop: 5 }}>Happy Clients</div>
        </div>

        <div style={{
          position: "absolute", top: "18%", right: -16,
          background: C.champagne, borderRadius: 16, padding: "16px 22px",
          boxShadow: "0 16px 48px rgba(26,26,26,0.18)",
          animation: "float 8s ease-in-out 4s infinite",
          opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease 1.6s",
        }}>
          <div style={{ fontFamily: FONT_DISPLAY, fontSize: 28, fontStyle: "italic", fontWeight: 300, color: C.obsidian, lineHeight: 1 }}>4.9★</div>
          <div style={{ fontFamily: FONT_BODY, fontSize: 9, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: C.obsidian2, marginTop: 5, opacity: 0.7 }}>Google Rating</div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
        opacity: loaded ? 1 : 0, transition: "opacity 1s ease 1.6s",
      }}>
        <div style={{ width: 1, height: 48, background: `linear-gradient(to bottom, transparent, ${C.champagne})` }} />
        <span style={{ fontFamily: FONT_BODY, fontSize: 8, fontWeight: 500, letterSpacing: "0.4em", textTransform: "uppercase", color: C.stone }}>SCROLL</span>
      </div>
    </section>
  );
}
