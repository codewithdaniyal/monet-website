"use client";

import React from "react";

const FONT_BODY = "var(--font-body)";

export function MarqueeStrip() {
  const items = "THE BRIDAL STUDIO ✦ HAIR LOUNGE ✦ SKIN & AESTHETICS ✦ BODY & SPA ✦ NAIL STUDIO ✦ LASER TREATMENTS ✦ ";
  const repeated = items.repeat(6);

  return (
    <div style={{ background: "#1A1A1A", overflow: "hidden", borderTop: "1px solid rgba(244,240,230,0.05)" }}>
      {[
        { anim: "marquee 80s linear infinite", opacity: 0.55 },
        { anim: "marqueeR 80s linear infinite", opacity: 0.3 },
      ].map((row, i) => (
        <div key={i} style={{
          height: 40, overflow: "hidden", display: "flex", alignItems: "center",
          borderBottom: i === 0 ? "1px solid rgba(244,240,230,0.05)" : "none",
        }}>
          <div style={{ display: "flex", whiteSpace: "nowrap", animation: row.anim }}>
            {[0, 1].map((j) => (
              <span key={j} style={{
                fontFamily: FONT_BODY, fontSize: 10, fontWeight: 500,
                letterSpacing: "0.3em", textTransform: "uppercase",
                color: `rgba(244,240,230,${row.opacity})`,
              }}>
                {repeated}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
