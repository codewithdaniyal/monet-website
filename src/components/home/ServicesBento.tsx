"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const C = {
  cream: "#F4F0E6", creamLight: "#FAF8F2", obsidian: "#1A1A1A", obsidian2: "#2C2C2C",
  champagne: "#C5B396", stone: "#8A8070", parchment: "#EAE4D6",
};
const FONT_DISPLAY = "var(--font-display)";
const FONT_BODY = "var(--font-body)";

const CATEGORIES = [
  { id: 1, num: "01", title: "The Bridal Studio", sub: "Mehndi · Barat · Walima · Engagement", desc: "Bespoke bridal artistry for your most unforgettable day", img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80" },
  { id: 2, num: "02", title: "Hair Lounge", sub: "Balayage · Keratin · Treatments", desc: "Premium hair transformations using luxury products", img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80" },
  { id: 3, num: "03", title: "Skin & Aesthetics", sub: "HydraFacial · Dermaplaning", desc: "Clinical skincare with visible, lasting results", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80" },
  { id: 4, num: "04", title: "Body & Spa", sub: "Mani/Pedi · Waxing · Body Spa", desc: "Full-body luxury rituals from head to toe", img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80" },
  { id: 5, num: "05", title: "Nail Studio", sub: "Extensions · Nail Art · Spa", desc: "Precision nail artistry in every detail", img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80" },
  { id: 6, num: "06", title: "Laser & Glow", sub: "Carbon Peel · Brightening", desc: "Advanced laser treatments for flawless skin", img: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=800&q=80" },
];

export function ServicesBento() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, { threshold: 0.1 });
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      style={{ background: C.creamLight, padding: "clamp(60px, 10vw, 110px) 0", width: "100%", overflow: "hidden", position: "relative" }}
    >
      <style>{`
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 16px;
          grid-auto-rows: 280px;
        }
        @media (min-width: 768px) {
          .bento-grid {
            grid-template-columns: repeat(12, 1fr);
            grid-template-rows: 320px 240px 280px;
          }
          .bento-item-0 { grid-column: 1 / 8; grid-row: 1 / 2; }
          .bento-item-1 { grid-column: 8 / 13; grid-row: 1 / 3; }
          .bento-item-2 { grid-column: 1 / 5; grid-row: 2 / 3; }
          .bento-item-3 { grid-column: 5 / 8; grid-row: 2 / 3; }
          .bento-item-4 { grid-column: 1 / 7; grid-row: 3 / 4; }
          .bento-item-5 { grid-column: 7 / 13; grid-row: 3 / 4; }
        }
        
        .fade-in-up {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s var(--ease-out), transform 0.8s var(--ease-out);
        }
        .fade-in-up.active {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* Watermark */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", fontFamily: FONT_DISPLAY, fontSize: "clamp(70px, 16vw, 200px)", fontWeight: 300, color: C.obsidian, opacity: 0.02, whiteSpace: "nowrap", pointerEvents: "none", letterSpacing: "0.08em", zIndex: 0 }}>MONÉT</div>

      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 clamp(1.5rem, 5vw, 4rem)", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className={`fade-in-up ${inView ? 'active' : ''}`} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 18 }}>
            <div style={{ width: 36, height: 1, background: C.champagne }} />
            <span style={{ fontFamily: FONT_BODY, fontSize: 10, fontWeight: 500, letterSpacing: "0.4em", textTransform: "uppercase", color: C.champagne }}>SIGNATURE SERVICES</span>
            <div style={{ width: 36, height: 1, background: C.champagne }} />
          </div>
          <h2 className={`fade-in-up ${inView ? 'active' : ''}`} style={{ transitionDelay: '0.1s', fontFamily: FONT_DISPLAY, fontWeight: 300, lineHeight: 1.1, fontSize: "clamp(42px, 5vw, 72px)", color: C.obsidian, margin: 0 }}>
            Our <em style={{ fontStyle: "italic" }}>Craft</em>
          </h2>
          <p className={`fade-in-up ${inView ? 'active' : ''}`} style={{ transitionDelay: '0.2s', fontFamily: FONT_BODY, fontSize: 15, fontWeight: 300, color: C.stone, lineHeight: 1.8, maxWidth: 420, margin: "20px auto 0" }}>
            Six disciplines. One destination. Crafted for Lahore&apos;s most discerning women.
          </p>
        </div>

        {/* BENTO GRID */}
        <div className="bento-grid">
          {CATEGORIES.map((cat, i) => {
            const isHov = hovered === cat.id;
            return (
              <Link key={cat.id} href="/services" 
                onMouseEnter={() => setHovered(cat.id)}
                onMouseLeave={() => setHovered(null)}
                className={`bento-item-${i} fade-in-up ${inView ? 'active' : ''}`}
                style={{ 
                  textDecoration: "none", 
                  display: "block", 
                  height: "100%",
                  transitionDelay: `${0.3 + i * 0.1}s` 
                }}
              >
                <div style={{
                  position: "relative", overflow: "hidden",
                  borderRadius: 20, cursor: "pointer", height: "100%",
                  border: "1px solid rgba(26,26,26,0.06)",
                  boxShadow: isHov ? "0 24px 60px rgba(26,26,26,0.18)" : "0 2px 10px rgba(26,26,26,0.04)",
                  transform: isHov ? "translateY(-4px)" : "translateY(0)",
                  transition: "all 0.5s var(--ease-out)",
                }}>
                  {/* Background Image */}
                  <Image 
                    src={cat.img} 
                    alt={cat.title} 
                    fill 
                    className="object-cover"
                    style={{ 
                      transform: isHov ? "scale(1.08)" : "scale(1)", 
                      transition: "transform 0.8s var(--ease-out)" 
                    }} 
                  />
                  
                  {/* Overlay */}
                  <div style={{ 
                    position: "absolute", 
                    inset: 0, 
                    background: isHov 
                      ? "linear-gradient(to top, rgba(26,26,26,0.95) 0%, rgba(26,26,26,0.4) 60%, transparent 100%)" 
                      : "linear-gradient(to top, rgba(26,26,26,0.85) 0%, rgba(26,26,26,0.2) 50%, transparent 100%)", 
                    transition: "background 0.5s ease" 
                  }} />

                  {/* Category Number */}
                  <div style={{ position: "absolute", top: 16, left: 16, background: "rgba(244,240,230,0.1)", backdropFilter: "blur(12px)", border: "1px solid rgba(244,240,230,0.2)", borderRadius: 100, padding: "5px 14px", fontFamily: FONT_BODY, fontSize: 10, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(244,240,230,0.9)" }}>
                    {cat.num}
                  </div>

                  {/* Content */}
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "26px 28px" }}>
                    <h3 style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(22px, 2.5vw, 30px)", fontStyle: "italic", fontWeight: 400, color: "#F4F0E6", lineHeight: 1.1, marginBottom: 6 }}>{cat.title}</h3>
                    <div style={{ fontFamily: FONT_BODY, fontSize: 12, fontWeight: 300, color: "rgba(244,240,230,0.65)", letterSpacing: "0.05em" }}>{cat.sub}</div>
                    
                    <div style={{ 
                      fontFamily: FONT_BODY, fontSize: 13, fontWeight: 300, color: "rgba(244,240,230,0.8)", 
                      lineHeight: 1.6, marginTop: 12, 
                      maxHeight: isHov ? 60 : 0, 
                      opacity: isHov ? 1 : 0, 
                      overflow: "hidden", 
                      transition: "all 0.4s var(--ease-out)" 
                    }}>
                      {cat.desc}
                    </div>
                    
                    <div style={{ 
                      fontFamily: FONT_BODY, fontSize: 10, fontWeight: 600, letterSpacing: "0.2em", 
                      textTransform: "uppercase", color: C.champagne, marginTop: 16, 
                      display: "flex", alignItems: "center", gap: 8, 
                      opacity: isHov ? 1 : 0, 
                      transform: isHov ? "translateX(0)" : "translateX(-8px)", 
                      transition: "all 0.4s var(--ease-out) 0.1s" 
                    }}>
                      Explore Signature <span style={{ fontSize: 16 }}>→</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div style={{ textAlign: "center", marginTop: 64 }}>
          <Link href="/services" style={{
            display: "inline-flex", alignItems: "center", gap: 12,
            fontFamily: FONT_BODY, fontSize: 12, fontWeight: 500,
            letterSpacing: "0.2em", textTransform: "uppercase",
            padding: "16px 42px", borderRadius: 4,
            border: `1px solid ${C.obsidian}`, background: C.obsidian, color: C.cream,
            textDecoration: "none", transition: "all 0.4s var(--ease-out)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = C.obsidian;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = C.obsidian;
            e.currentTarget.style.color = C.cream;
          }}
          >View All Services →</Link>
        </div>
      </div>
    </section>
  );
}
