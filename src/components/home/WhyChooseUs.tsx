"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

const C = {
  cream: "#F4F0E6", creamDark: "#EAE4D6", obsidian: "#1A1A1A", obsidian2: "#2C2C2C",
  champagne: "#C5B396", stone: "#8A8070", parchment: "#EAE4D6",
};
const FONT_DISPLAY = "var(--font-display)";
const FONT_BODY = "var(--font-body)";

const WHY_ITEMS = [
  { num: "01", title: "Certified Professionals", body: "Every artist is internationally trained and certified — no exceptions ever made." },
  { num: "02", title: "Premium Imported Products", body: "We use exclusively MAC, Charlotte Tilbury, and NARS for all services." },
  { num: "03", title: "Hygienic Environment", body: "Medical-grade sterilization protocols after every single appointment." },
  { num: "04", title: "Private Bridal Suite", body: "A dedicated VIP suite — intimate, calm, and exclusively yours on your big day." },
  { num: "05", title: "Personalized Consultation", body: "Every visit begins with a one-on-one consultation tailored only to you." },
];

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

export function WhyChooseUs() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section style={{ background: C.obsidian, width: "100%", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", right: "-5%", top: "50%", transform: "translateY(-50%)", opacity: 0.04, pointerEvents: "none" }}>
        <Botanical size={500} color="#F4F0E6" opacity={1} float />
      </div>

      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "clamp(70px, 10vw, 120px) clamp(1.5rem, 4vw, 4rem)", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "clamp(40px, 8vw, 100px)", alignItems: "center" }} className="why-grid">
          <style>{`@media (min-width: 1024px) { .why-grid { grid-template-columns: 1fr 1fr !important; } }`}</style>

          {/* LEFT IMAGE */}
          <div style={{ position: "relative" }}>
            <div style={{ width: "100%", height: "clamp(350px, 55vh, 640px)", borderRadius: "0 0 0 80px", overflow: "hidden", position: "relative" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=900&q=90&fit=crop" alt="Salon interior" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(197,179,150,0.07) 0%, transparent 60%)" }} />
            </div>
            <div style={{ position: "absolute", top: 26, right: -18, background: C.cream, border: `1px solid ${C.parchment}`, borderRadius: 100, padding: "10px 22px", fontFamily: FONT_BODY, fontSize: 9, fontWeight: 500, letterSpacing: "0.28em", textTransform: "uppercase", color: C.stone, whiteSpace: "nowrap", boxShadow: "0 8px 32px rgba(26,26,26,0.18)" }}>EST. 2020 · LAHORE</div>
            <div style={{ position: "absolute", bottom: 28, left: -18, background: C.champagne, borderRadius: 16, padding: "18px 24px", boxShadow: "0 16px 48px rgba(26,26,26,0.3)", animation: "float 8s ease-in-out infinite" }}>
              <div style={{ fontFamily: FONT_DISPLAY, fontSize: 36, fontStyle: "italic", fontWeight: 300, color: C.obsidian, lineHeight: 1 }}>2K+</div>
              <div style={{ fontFamily: FONT_BODY, fontSize: 9, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: C.obsidian2, marginTop: 4, opacity: 0.7 }}>Happy Clients</div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div ref={ref} style={{ color: C.cream }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18, opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(14px)", transition: "all 0.65s cubic-bezier(0.16,1,0.3,1)" }}>
              <div style={{ width: 36, height: 1, background: C.champagne }} />
              <span style={{ fontFamily: FONT_BODY, fontSize: 9, fontWeight: 500, letterSpacing: "0.42em", textTransform: "uppercase", color: C.champagne }}>THE MONÉT DIFFERENCE</span>
            </div>

            {["Why Women Choose", "MONÉT."].map((line, i) => (
              <div key={line} style={{
                fontFamily: FONT_DISPLAY, fontWeight: 300, lineHeight: 1.06,
                fontSize: "clamp(34px, 5vw, 64px)",
                fontStyle: i === 1 ? "italic" : "normal",
                color: i === 1 ? C.champagne : C.cream,
                opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(20px)",
                transition: `all 0.75s cubic-bezier(0.16,1,0.3,1) ${0.08 + i * 0.12}s`,
              }}>{line}</div>
            ))}

            <div style={{ width: 60, height: 1, background: C.champagne, margin: "28px 0", transformOrigin: "left", transform: inView ? "scaleX(1)" : "scaleX(0)", transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.35s" }} />

            <div style={{ display: "flex", flexDirection: "column" }}>
              {WHY_ITEMS.map((item, i) => {
                const isActive = active === i;
                return (
                  <div key={item.num} onMouseEnter={() => setActive(i)} onMouseLeave={() => setActive(null)}
                    style={{
                      display: "grid", gridTemplateColumns: "40px 1fr", gap: 18,
                      padding: "17px 0", borderBottom: i < WHY_ITEMS.length - 1 ? "1px solid rgba(244,240,230,0.07)" : "none",
                      cursor: "default",
                      opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(14px)",
                      transition: `opacity 0.6s ease ${0.35 + i * 0.08}s, transform 0.6s ease ${0.35 + i * 0.08}s`,
                    }}>
                    <div style={{ fontFamily: FONT_BODY, fontSize: 10, fontWeight: 500, letterSpacing: "0.2em", color: isActive ? C.champagne : "rgba(244,240,230,0.28)", paddingTop: 3, transition: "color 0.25s" }}>{item.num}</div>
                    <div>
                      <div style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(16px, 1.8vw, 20px)", fontStyle: "italic", fontWeight: 400, color: isActive ? C.champagne : C.cream, marginBottom: 2, transition: "color 0.25s" }}>{item.title}</div>
                      <div style={{ fontFamily: FONT_BODY, fontSize: 12, fontWeight: 300, color: "rgba(244,240,230,0.52)", lineHeight: 1.65, maxHeight: isActive ? 50 : 0, opacity: isActive ? 1 : 0, overflow: "hidden", transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)" }}>{item.body}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{ marginTop: 42, opacity: inView ? 1 : 0, transition: "all 0.7s ease 0.8s" }}>
              <Link href="/booking" style={{
                fontFamily: FONT_BODY, fontSize: 11, fontWeight: 500,
                letterSpacing: "0.18em", textTransform: "uppercase",
                background: C.cream, color: C.obsidian, border: "none", borderRadius: 2,
                padding: "13px 34px", textDecoration: "none",
                display: "inline-block", transition: "all 0.3s ease",
              }}>Book Your Visit →</Link>
              <div style={{ fontFamily: FONT_BODY, fontSize: 10, color: "rgba(244,240,230,0.28)", marginTop: 14 }}>Free consultation with every first booking</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
