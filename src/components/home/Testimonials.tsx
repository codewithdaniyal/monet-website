"use client";

import React, { useRef, useState, useEffect } from "react";

const C = {
  cream: "#F4F0E6", creamLight: "#FAF8F2", white: "#FFFFFF",
  obsidian: "#1A1A1A", champagne: "#C5B396", stone: "#8A8070", parchment: "#EAE4D6",
};
const FONT_DISPLAY = "var(--font-display)";
const FONT_BODY = "var(--font-body)";

const REVIEWS = [
  { name: "Zara Ahmed", service: "Full Bridal Package", quote: "An absolutely transformative experience. My bridal look was everything I dreamed of — the team at MONÉT understood my vision perfectly and delivered beyond my imagination.", stars: 5 },
  { name: "Amna Malik", service: "Keratin Treatment", quote: "Silky smooth for 6 whole months. Worth every rupee — my hair has never looked this healthy.", stars: 5 },
  { name: "Sara Hussain", service: "HydraFacial Deep Clean", quote: "My skin was absolutely glowing after just one session. I'm completely converted.", stars: 5 },
  { name: "Hira Baig", service: "Dental Whitening", quote: "My smile transformed in just one visit. The attention to detail is extraordinary.", stars: 5 },
];

function StarRow({ n }: { n: number }) {
  return (
    <div style={{ display: "flex", gap: 3, marginBottom: 16 }}>
      {[...Array(n)].map((_, i) => <span key={i} style={{ color: C.obsidian, fontSize: 13 }}>★</span>)}
    </div>
  );
}

function Botanical({ size = 48, opacity = 0.18, color = "#1A1A1A" }: { size?: number; opacity?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={{ opacity, display: "block", margin: "0 auto" }}>
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
        <g key={a} transform={`rotate(${a} 24 24)`}>
          <path d="M24 5 C26.5 13 27 18 24 24 C21 18 21.5 13 24 5 Z" stroke={color} strokeWidth="0.8" fill="none" strokeLinecap="round" />
        </g>
      ))}
      <circle cx="24" cy="24" r="1.5" fill={color} opacity="0.4" />
    </svg>
  );
}

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [feat, setFeat] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const t = setInterval(() => setFeat((p) => (p + 1) % REVIEWS.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section style={{ background: C.white, padding: "110px 0", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", top: -40, left: "4%", fontFamily: FONT_DISPLAY, fontSize: "clamp(120px, 22vw, 320px)", fontWeight: 300, color: C.obsidian, opacity: 0.025, pointerEvents: "none", lineHeight: 1 }}>&ldquo;</div>

      <div ref={ref} style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(1.5rem, 4vw, 4rem)" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 18, opacity: inView ? 1 : 0, transition: "all 0.65s ease" }}>
            <div style={{ width: 36, height: 1, background: C.champagne }} />
            <span style={{ fontFamily: FONT_BODY, fontSize: 9, fontWeight: 500, letterSpacing: "0.42em", textTransform: "uppercase", color: C.champagne }}>CLIENT LOVE</span>
            <div style={{ width: 36, height: 1, background: C.champagne }} />
          </div>
          <h2 style={{ fontFamily: FONT_DISPLAY, fontWeight: 300, lineHeight: 1.05, fontSize: "clamp(38px, 5.5vw, 72px)", color: C.obsidian, margin: 0, opacity: inView ? 1 : 0, transition: "all 0.75s ease 0.1s" }}>
            What Our <em style={{ fontStyle: "italic" }}>Clients Say</em>
          </h2>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 18, alignItems: "start" }} className="testi-grid">
          <style>{`@media (min-width: 768px) { .testi-grid { grid-template-columns: 1.6fr 1fr 1fr !important; } }`}</style>

          {/* Featured */}
          <div style={{ background: C.cream, border: `1px solid ${C.parchment}`, borderRadius: 24, padding: "44px 38px", opacity: inView ? 1 : 0, transition: "all 0.8s ease 0.15s" }}>
            <StarRow n={REVIEWS[feat].stars} />
            <p style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(17px, 1.8vw, 22px)", fontStyle: "italic", fontWeight: 300, color: C.obsidian, lineHeight: 1.75, margin: "0 0 28px" }}>&ldquo;{REVIEWS[feat].quote}&rdquo;</p>
            <div style={{ width: 40, height: 1, background: C.champagne, marginBottom: 20 }} />
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: C.parchment, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: FONT_DISPLAY, fontSize: 20, fontStyle: "italic", color: C.obsidian }}>{REVIEWS[feat].name[0]}</div>
              <div>
                <div style={{ fontFamily: FONT_DISPLAY, fontSize: 17, fontStyle: "italic", color: C.obsidian }}>{REVIEWS[feat].name}</div>
                <div style={{ fontFamily: FONT_BODY, fontSize: 9, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: C.stone, marginTop: 2 }}>{REVIEWS[feat].service}</div>
              </div>
              <div style={{ marginLeft: "auto", fontFamily: FONT_BODY, fontSize: 9, color: C.champagne, letterSpacing: "0.12em" }}>✓ Verified</div>
            </div>
            <div style={{ display: "flex", gap: 6, marginTop: 24 }}>
              {REVIEWS.map((_, i) => (
                <div key={i} onClick={() => setFeat(i)} style={{ width: i === feat ? 20 : 6, height: 6, borderRadius: 3, background: i === feat ? C.obsidian : C.parchment, cursor: "pointer", transition: "all 0.3s ease" }} />
              ))}
            </div>
          </div>

          {/* Col 2 */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {REVIEWS.slice(1, 3).map((r, i) => (
              <div key={r.name} style={{ background: C.creamLight, border: "1px solid rgba(26,26,26,0.07)", borderRadius: 16, padding: "26px 24px", opacity: inView ? 1 : 0, transition: `all 0.7s ease ${0.25 + i * 0.1}s` }}>
                <StarRow n={r.stars} />
                <p style={{ fontFamily: FONT_DISPLAY, fontSize: 15, fontStyle: "italic", fontWeight: 300, color: C.obsidian, lineHeight: 1.65, margin: "0 0 16px" }}>&ldquo;{r.quote}&rdquo;</p>
                <div style={{ fontFamily: FONT_DISPLAY, fontSize: 15, fontStyle: "italic", color: C.obsidian }}>{r.name}</div>
                <div style={{ fontFamily: FONT_BODY, fontSize: 9, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: C.stone, marginTop: 2 }}>{r.service}</div>
              </div>
            ))}
          </div>

          {/* Col 3 */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ background: C.creamLight, border: "1px solid rgba(26,26,26,0.07)", borderRadius: 16, padding: "26px 24px", opacity: inView ? 1 : 0, transition: "all 0.7s ease 0.45s" }}>
              <StarRow n={REVIEWS[3].stars} />
              <p style={{ fontFamily: FONT_DISPLAY, fontSize: 15, fontStyle: "italic", fontWeight: 300, color: C.obsidian, lineHeight: 1.65, margin: "0 0 16px" }}>&ldquo;{REVIEWS[3].quote}&rdquo;</p>
              <div style={{ fontFamily: FONT_DISPLAY, fontSize: 15, fontStyle: "italic", color: C.obsidian }}>{REVIEWS[3].name}</div>
              <div style={{ fontFamily: FONT_BODY, fontSize: 9, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: C.stone, marginTop: 2 }}>{REVIEWS[3].service}</div>
            </div>
            <div style={{ background: C.cream, border: `1px solid ${C.parchment}`, borderRadius: 16, padding: "26px 24px", textAlign: "center", opacity: inView ? 1 : 0, transition: "all 0.7s ease 0.55s" }}>
              <Botanical size={40} opacity={0.18} color={C.obsidian} />
              <div style={{ fontFamily: FONT_DISPLAY, fontSize: 28, fontStyle: "italic", fontWeight: 300, color: C.obsidian, margin: "10px 0 4px" }}>2,000+</div>
              <div style={{ fontFamily: FONT_BODY, fontSize: 9, fontWeight: 500, letterSpacing: "0.28em", textTransform: "uppercase", color: C.stone }}>Happy Women</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
