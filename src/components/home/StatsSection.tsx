"use client";

import React, { useRef, useState, useEffect } from "react";

const C = { cream: "#F4F0E6", obsidian: "#1A1A1A", stone: "#8A8070", parchment: "#EAE4D6" };
const FONT_DISPLAY = "var(--font-display)";
const FONT_BODY = "var(--font-body)";

const items = [
  { num: "2,000", suf: "+", label: "Happy Clients" },
  { num: "12", suf: "", label: "Years Excellence" },
  { num: "4.9", suf: "★", label: "Google Rating" },
  { num: "6", suf: "", label: "Expert Services" },
];

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ background: C.cream, padding: "90px 0", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", fontFamily: FONT_DISPLAY, fontSize: "clamp(60px, 14vw, 180px)", fontWeight: 300, color: C.obsidian, opacity: 0.03, whiteSpace: "nowrap", pointerEvents: "none", letterSpacing: "0.08em" }}>MONÉT</div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(1.5rem, 4vw, 4rem)", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 0, position: "relative", zIndex: 1 }}>
        {items.map((item, i) => (
          <div key={item.label} style={{
            flex: "1 1 120px", textAlign: "center", padding: "16px 24px",
            borderRight: i < items.length - 1 ? `1px solid ${C.parchment}` : "none",
            opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(20px)",
            transition: `all 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s`,
            minWidth: 120,
          }}>
            <div style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(36px, 5vw, 80px)", fontWeight: 300, fontStyle: "italic", color: C.obsidian, lineHeight: 1 }}>
              {item.num}<span style={{ fontSize: "0.5em" }}>{item.suf}</span>
            </div>
            <div style={{ fontFamily: FONT_BODY, fontSize: 9, fontWeight: 500, letterSpacing: "0.32em", textTransform: "uppercase", color: C.stone, marginTop: 10 }}>{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
