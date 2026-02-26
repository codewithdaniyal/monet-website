"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

const C = {
  cream: "#F4F0E6", creamDark: "#EAE4D6", obsidian: "#1A1A1A", obsidian2: "#2C2C2C",
  champagne: "#C5B396", stone: "#8A8070", parchment: "#EAE4D6",
};
const FONT_DISPLAY = "var(--font-display)";
const FONT_BODY = "var(--font-body)";

export function BridalHighlight() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [imgHov, setImgHov] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section style={{ background: C.obsidian, width: "100%", overflow: "hidden", position: "relative" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "clamp(70px, 10vw, 120px) clamp(1.5rem, 4vw, 4rem)", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "clamp(40px, 7vw, 90px)", alignItems: "center" }} className="bridal-grid">
          <style>{`
            @media (min-width: 1024px) {
              .bridal-grid { grid-template-columns: 1fr 1fr !important; }
            }
          `}</style>

          {/* LEFT IMAGE */}
          <div style={{ position: "relative" }}
            onMouseEnter={() => setImgHov(true)} onMouseLeave={() => setImgHov(false)}>
            <div style={{ width: "100%", height: "clamp(350px, 55vh, 640px)", borderRadius: "0 0 0 80px", overflow: "hidden", position: "relative" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=90&fit=crop" alt="Bridal"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", transform: imgHov ? "scale(1.04)" : "scale(1)", transition: "transform 1s cubic-bezier(0.16,1,0.3,1)" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(197,179,150,0.07) 0%, transparent 60%)" }} />
            </div>
            <div style={{ position: "absolute", top: 26, right: -18, background: C.cream, border: `1px solid ${C.parchment}`, borderRadius: 100, padding: "10px 22px", fontFamily: FONT_BODY, fontSize: 9, fontWeight: 500, letterSpacing: "0.28em", textTransform: "uppercase", color: C.stone, whiteSpace: "nowrap", boxShadow: "0 8px 32px rgba(26,26,26,0.18)" }}>
              THE BRIDAL STUDIO
            </div>
            <div style={{ position: "absolute", bottom: 28, left: -18, background: C.champagne, borderRadius: 16, padding: "18px 24px", boxShadow: "0 16px 48px rgba(26,26,26,0.3)", animation: "float 8s ease-in-out infinite" }}>
              <div style={{ fontFamily: FONT_DISPLAY, fontSize: 36, fontStyle: "italic", fontWeight: 300, color: C.obsidian, lineHeight: 1 }}>500+</div>
              <div style={{ fontFamily: FONT_BODY, fontSize: 9, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: C.obsidian2, marginTop: 4, opacity: 0.7 }}>Brides Served</div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div ref={ref} style={{ color: C.cream }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18, opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(14px)", transition: "all 0.65s cubic-bezier(0.16,1,0.3,1)" }}>
              <div style={{ width: 36, height: 1, background: C.champagne }} />
              <span style={{ fontFamily: FONT_BODY, fontSize: 9, fontWeight: 500, letterSpacing: "0.42em", textTransform: "uppercase", color: C.champagne }}>BRIDAL EXCELLENCE</span>
            </div>

            <div style={{ marginBottom: 8 }}>
              {["Your Perfect", "Bridal Look", "Awaits."].map((line, i) => (
                <div key={line} style={{
                  fontFamily: FONT_DISPLAY, fontWeight: 300, lineHeight: 1.06,
                  fontSize: i === 2 ? "clamp(30px, 4vw, 52px)" : "clamp(36px, 5vw, 64px)",
                  fontStyle: i === 1 ? "italic" : "normal",
                  color: i === 1 ? C.champagne : C.cream,
                  opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(20px)",
                  transition: `all 0.75s cubic-bezier(0.16,1,0.3,1) ${0.08 + i * 0.1}s`,
                }}>{line}</div>
              ))}
            </div>

            <div style={{ width: 60, height: 1, background: C.champagne, margin: "28px 0", transformOrigin: "left", transform: inView ? "scaleX(1)" : "scaleX(0)", transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.4s" }} />

            <p style={{ fontFamily: FONT_BODY, fontSize: 14, fontWeight: 300, color: "rgba(244,240,230,0.65)", lineHeight: 1.9, marginBottom: 30, maxWidth: 400, opacity: inView ? 1 : 0, transition: "all 0.7s ease 0.5s" }}>
              From Mehndi to Walima — we craft every look with precision. International makeup artists, premium imported products, and a private bridal suite experience.
            </p>

            {["Engagement Photoshoot Makeup", "Mehndi + Bridal Full Package", "Barat & Walima Looks", "Pre-Bridal Skincare Regime"].map((pkg, i) => (
              <div key={pkg} style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 0", borderBottom: i < 3 ? "1px solid rgba(244,240,230,0.07)" : "none", opacity: inView ? 1 : 0, transition: `all 0.6s ease ${0.55 + i * 0.08}s` }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: C.champagne, flexShrink: 0 }} />
                <span style={{ fontFamily: FONT_BODY, fontSize: 13, fontWeight: 300, color: "rgba(244,240,230,0.72)", letterSpacing: "0.03em" }}>{pkg}</span>
              </div>
            ))}

            <div style={{ marginTop: 36, display: "flex", gap: 14, flexWrap: "wrap", opacity: inView ? 1 : 0, transition: "all 0.7s ease 0.9s" }}>
              <Link href="/services" style={{
                fontFamily: FONT_BODY, fontSize: 11, fontWeight: 500,
                letterSpacing: "0.18em", textTransform: "uppercase",
                background: C.cream, color: C.obsidian, border: "none", borderRadius: 2,
                padding: "13px 34px", textDecoration: "none",
                transition: "all 0.3s ease",
              }}>Explore Bridal →</Link>
            </div>
            <div style={{ fontFamily: FONT_BODY, fontSize: 10, color: "rgba(244,240,230,0.28)", marginTop: 14, letterSpacing: "0.05em" }}>Bridal consultations by appointment only</div>
          </div>
        </div>
      </div>
    </section>
  );
}
