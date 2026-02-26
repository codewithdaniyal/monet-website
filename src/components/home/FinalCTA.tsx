"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";

const C = {
  cream: "#F4F0E6", creamDark: "#EAE4D6", obsidian: "#1A1A1A",
  champagne: "#C5B396",
};
const FONT_DISPLAY = "var(--font-display)";
const FONT_BODY = "var(--font-body)";

function Botanical({ size = 48, opacity = 0.18, color = "#1A1A1A", float = false, rotate = false }: { size?: number; opacity?: number; color?: string; float?: boolean; rotate?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none"
      style={{ opacity, display: "block", animation: float ? (rotate ? "float 9s ease-in-out infinite, rotateSlow 40s linear infinite" : "float 9s ease-in-out infinite") : "none" }}>
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
        <g key={a} transform={`rotate(${a} 24 24)`}>
          <path d="M24 5 C26.5 13 27 18 24 24 C21 18 21.5 13 24 5 Z" stroke={color} strokeWidth="0.8" fill="none" strokeLinecap="round" />
        </g>
      ))}
      <circle cx="24" cy="24" r="1.5" fill={color} opacity="0.4" />
    </svg>
  );
}

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ background: C.obsidian, padding: "clamp(80px, 14vw, 160px) 0", overflow: "hidden", position: "relative", textAlign: "center" }}>
      <style>{`@keyframes rotateSlow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", opacity: 0.05, pointerEvents: "none" }}>
        <Botanical size={380} color="#F4F0E6" opacity={1} float rotate />
      </div>

      <div style={{ maxWidth: 600, margin: "0 auto", padding: "0 clamp(1.5rem, 4vw, 4rem)", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 28, opacity: inView ? 1 : 0, transition: "all 0.7s ease 0.1s" }}>
          <Botanical size={64} opacity={0.22} color="#F4F0E6" float />
        </div>

        <div style={{ fontFamily: FONT_BODY, fontSize: 9, fontWeight: 500, letterSpacing: "0.45em", textTransform: "uppercase", color: C.champagne, marginBottom: 20, opacity: inView ? 1 : 0, transition: "all 0.7s ease 0.2s" }}>BEGIN YOUR TRANSFORMATION</div>

        {["Ready for Your", "Transformation?"].map((line, i) => (
          <div key={line} style={{
            fontFamily: FONT_DISPLAY, fontWeight: 300,
            fontSize: "clamp(38px, 6vw, 80px)", lineHeight: 1.05,
            letterSpacing: "-0.02em", color: C.cream,
            fontStyle: i === 1 ? "italic" : "normal",
            opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(20px)",
            transition: `all 0.8s cubic-bezier(0.16,1,0.3,1) ${0.3 + i * 0.12}s`,
          }}>{line}</div>
        ))}

        <p style={{ fontFamily: FONT_BODY, fontSize: 14, fontWeight: 300, color: "rgba(244,240,230,0.55)", lineHeight: 1.85, margin: "24px auto 36px", maxWidth: 380, opacity: inView ? 1 : 0, transition: "all 0.7s ease 0.56s" }}>
          Luxury hair, bridal artistry & skin aesthetics crafted for the women of Lahore.
        </p>

        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", opacity: inView ? 1 : 0, transition: "all 0.7s ease 0.68s" }}>
          <Link href="/booking" style={{
            fontFamily: FONT_BODY, fontSize: 11, fontWeight: 500,
            letterSpacing: "0.18em", textTransform: "uppercase",
            background: C.cream, color: C.obsidian, border: "none", borderRadius: 2,
            padding: "14px 36px", textDecoration: "none",
            transition: "all 0.3s ease",
          }}>Book Appointment →</Link>
          <Link href="/contact" style={{
            fontFamily: FONT_BODY, fontSize: 11, fontWeight: 500,
            letterSpacing: "0.18em", textTransform: "uppercase",
            background: "transparent", color: C.cream,
            border: "1px solid rgba(244,240,230,0.3)", borderRadius: 2,
            padding: "14px 36px", textDecoration: "none",
            transition: "all 0.3s ease",
          }}>WhatsApp Consult</Link>
        </div>

        <div style={{ fontFamily: FONT_BODY, fontSize: 10, color: "rgba(244,240,230,0.3)", marginTop: 28, letterSpacing: "0.08em", opacity: inView ? 1 : 0, transition: "all 0.7s ease 0.8s" }}>+92 300 123 4567 · hello@monetbeauty.pk</div>
      </div>
    </section>
  );
}
