"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/lib/services-data";

const C = {
  cream: "#F4F0E6", creamDark: "#EAE4D6", creamLight: "#FAF8F2",
  obsidian: "#1A1A1A", obsidian2: "#2C2C2C",
  champagne: "#C5B396", stone: "#8A8070", whisper: "#B8AF9E", parchment: "#EAE4D6", white: "#FFFFFF",
};
const FONT_DISPLAY = "var(--font-display)";
const FONT_BODY = "var(--font-body)";

const CATEGORIES = ["All", "Bridal", "Hair", "Skin", "Body", "Nails", "Laser"];

export function ServicesGrid() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredServices = services.filter((s) =>
    activeTab === "All" ? true : s.category === activeTab
  );

  return (
    <>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      
      {/* Sticky Filter Navigation */}
      <div style={{
        position: "sticky", top: 72, zIndex: 40, background: "rgba(244, 240, 230, 0.95)",
        backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(26,26,26,0.08)",
        height: 52, width: "100%", display: "flex", alignItems: "center", justifyContent: "center",
        overflowX: "auto"
      }} className="hide-scrollbar">
        <nav style={{ display: "flex", alignItems: "center", gap: 32, padding: "0 24px" }}>
          {CATEGORIES.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  position: "relative", fontFamily: FONT_BODY, fontSize: 11, fontWeight: 500,
                  letterSpacing: "0.2em", textTransform: "uppercase",
                  color: isActive ? C.obsidian : C.stone,
                  transition: "color 0.25s ease",
                  background: "none", border: "none", cursor: "pointer", padding: 0
                }}
              >
                {tab}
                {isActive && (
                  <motion.div
                    layoutId="tab-indicator"
                    style={{
                      position: "absolute", bottom: -19, left: 0, right: 0,
                      height: 2, background: C.champagne
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Services Grid Section */}
      <section style={{ width: "100%", background: C.creamLight, padding: "80px clamp(1.5rem, 5vw, 3rem)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.div
            layout
            style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20
            }}
          >
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service) => (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: C.white, border: "1px solid rgba(26,26,26,0.07)",
                    borderRadius: 20, overflow: "hidden", display: "flex", flexDirection: "column",
                    transition: "all 0.4s ease-out", cursor: "default"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(26,26,26,0.15)";
                    e.currentTarget.style.boxShadow = "0 16px 48px rgba(26,26,26,0.1)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                    const img = e.currentTarget.querySelector("img");
                    if (img) img.style.transform = "scale(1.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(26,26,26,0.07)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "none";
                    const img = e.currentTarget.querySelector("img");
                    if (img) img.style.transform = "scale(1)";
                  }}
                >
                  {/* Image Area (200px) */}
                  <div style={{ position: "relative", width: "100%", height: 200, overflow: "hidden", flexShrink: 0 }}>
                    <Image
                      src={service.imageUrl}
                      alt={service.name}
                      fill
                      style={{ objectFit: "cover", transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)" }}
                    />
                    
                    {/* Category Pill Inside Image */}
                    <div style={{
                      position: "absolute", top: 16, left: 16, background: "rgba(244, 240, 230, 0.92)",
                      backdropFilter: "blur(8px)", borderRadius: 9999, padding: "5px 14px"
                    }}>
                      <span style={{
                        fontFamily: FONT_BODY, fontSize: 9, letterSpacing: "0.2em",
                        textTransform: "uppercase", color: C.obsidian, fontWeight: 500
                      }}>
                        {service.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div style={{ padding: "22px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
                    <h3 style={{
                      fontFamily: FONT_DISPLAY, fontSize: 22, fontStyle: "italic", fontWeight: 400,
                      color: C.obsidian, lineHeight: 1.2, margin: "0 0 8px"
                    }}>
                      {service.name}
                    </h3>
                    <p style={{
                      fontFamily: FONT_BODY, fontSize: 12, fontWeight: 300, color: C.stone,
                      lineHeight: 1.65, margin: "0 0 16px", flex: 1,
                      display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden"
                    }}>
                      {service.description}
                    </p>

                    {/* Bottom Row */}
                    <div style={{
                      marginTop: 20, paddingTop: 16, borderTop: "1px solid rgba(26,26,26,0.06)",
                      display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%"
                    }}>
                      <span style={{ fontFamily: FONT_BODY, fontSize: 11, fontWeight: 500, color: C.champagne }}>
                        {service.price}
                      </span>
                      <Link 
                        href={`/booking?service=${encodeURIComponent(service.name)}`}
                        style={{
                          fontFamily: FONT_BODY, fontSize: 10, fontWeight: 500, letterSpacing: "0.12em",
                          color: C.obsidian, textTransform: "uppercase", display: "flex", alignItems: "center",
                          gap: 4, textDecoration: "none", transition: "color 0.3s"
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = C.champagne;
                          const span = e.currentTarget.querySelector("span");
                          if (span) span.style.transform = "translateX(4px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = C.obsidian;
                          const span = e.currentTarget.querySelector("span");
                          if (span) span.style.transform = "none";
                        }}
                      >
                        <span style={{ transition: "transform 0.3s ease", display: "inline-block" }}>
                          Book →
                        </span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}
