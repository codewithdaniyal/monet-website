"use client";

import React from "react";
import Link from "next/link";

const C = {
  cream: "#F4F0E6", obsidian: "#1A1A1A", obsidian2: "#2C2C2C",
  champagne: "#C5B396", stone: "#8A8070",
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
        </g>
      ))}
      <circle cx="24" cy="24" r="1.5" fill={color} opacity="0.4" />
    </svg>
  );
}

const cols = [
  { title: "Navigate", links: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Booking", href: "/booking" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]},
  { title: "Specialties", links: [
    { label: "Bridal Studio", href: "/services" },
    { label: "Hair Lounge", href: "/services" },
    { label: "Skin & Aesthetics", href: "/services" },
    { label: "Body & Spa", href: "/services" },
    { label: "Nail Studio", href: "/services" },
    { label: "Laser & Glow", href: "/services" },
  ]},
  { title: "Visit Us", links: [
    { label: "DHA Phase 5, Lahore", href: "#" },
    { label: "+92 300 123 4567", href: "tel:+923001234567" },
    { label: "Mon–Sat: 10AM–8PM", href: "#" },
    { label: "Sun: 11AM–6PM", href: "#" },
    { label: "hello@monetbeauty.pk", href: "mailto:hello@monetbeauty.pk" },
  ]},
];

export function Footer() {
  return (
    <footer style={{ background: C.obsidian, width: "100%", overflow: "hidden" }}>
      {/* Top botanical divider */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "32px 0 0", gap: 20 }}>
        <div style={{ flex: 1, height: 1, background: "rgba(244,240,230,0.08)", maxWidth: 200 }} />
        <Botanical size={26} opacity={0.28} color="#F4F0E6" />
        <div style={{ flex: 1, height: 1, background: "rgba(244,240,230,0.08)", maxWidth: 200 }} />
      </div>

      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "60px clamp(1.5rem, 4vw, 4rem) 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 40, marginBottom: 60 }} className="footer-grid">
          <style>{`@media (min-width: 768px) { .footer-grid { grid-template-columns: 1.4fr 2fr !important; gap: 80px !important; } .footer-links { grid-template-columns: repeat(3, 1fr) !important; } }`}</style>

          {/* Brand col */}
          <div>
            <Botanical size={56} opacity={0.2} color="#F4F0E6" float />
            <div style={{ fontFamily: FONT_DISPLAY, fontSize: 26, fontStyle: "italic", fontWeight: 300, color: C.cream, margin: "14px 0 2px" }}>MONÉT</div>
            <div style={{ fontFamily: FONT_BODY, fontSize: 9, fontWeight: 400, letterSpacing: "0.32em", textTransform: "uppercase", color: "rgba(244,240,230,0.4)" }}>Beauty Lounge</div>
            <div style={{ width: 36, height: 1, background: C.champagne, margin: "18px 0" }} />
            <p style={{ fontFamily: FONT_DISPLAY, fontSize: 15, fontStyle: "italic", fontWeight: 300, color: "rgba(244,240,230,0.45)", lineHeight: 1.6 }}>Where beauty transforms.</p>
            <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
              {["IG", "WA"].map((icon) => (
                <div key={icon} style={{
                  width: 36, height: 36, borderRadius: "50%",
                  border: "1px solid rgba(244,240,230,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: FONT_BODY, fontSize: 9, fontWeight: 500,
                  color: "rgba(244,240,230,0.5)", letterSpacing: "0.05em",
                  transition: "all 0.25s ease", cursor: "pointer",
                }}>{icon}</div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 32 }} className="footer-links">
            {cols.map((col) => (
              <div key={col.title}>
                <div style={{ fontFamily: FONT_BODY, fontSize: 9, fontWeight: 500, letterSpacing: "0.32em", textTransform: "uppercase", color: "rgba(244,240,230,0.3)", marginBottom: 22 }}>{col.title}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {col.links.map((link) => (
                    <Link key={link.label} href={link.href} style={{
                      fontFamily: FONT_BODY, fontSize: 13, fontWeight: 300,
                      color: "rgba(244,240,230,0.55)", textDecoration: "none",
                      transition: "color 0.2s", letterSpacing: "0.02em",
                    }}>{link.label}</Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(244,240,230,0.06)", padding: "22px 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontFamily: FONT_BODY, fontSize: 10, color: "rgba(244,240,230,0.28)", letterSpacing: "0.05em" }}>© 2026 MONÉT Beauty Lounge. All rights reserved.</span>
          <span style={{ fontFamily: FONT_BODY, fontSize: 10, color: "rgba(244,240,230,0.28)", letterSpacing: "0.05em" }}>Lahore, Pakistan ✦</span>
        </div>
      </div>
    </footer>
  );
}
