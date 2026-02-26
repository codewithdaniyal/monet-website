"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const C = {
  cream: "#F4F0E6", obsidian: "#1A1A1A", obsidian2: "#2C2C2C",
  champagne: "#C5B396", stone: "#8A8070",
};
const FONT_DISPLAY = "var(--font-display)";
const FONT_BODY = "var(--font-body)";

const NAV_LINKS = [
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
];

const MOBILE_LINKS = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

function Botanical({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={{ display: "block", margin: "0 auto 4px" }}>
      {[0, 45, 90, 135, 180, 225, 270, 315].map((r) => (
        <path key={r} d="M24 6 C26 14 27 19 24 24 C21 19 22 14 24 6 Z"
          stroke="#1A1A1A" strokeWidth="0.75" fill="none" strokeLinecap="round"
          transform={`rotate(${r} 24 24)`} />
      ))}
      <circle cx="24" cy="24" r="1.2" fill="#1A1A1A" opacity="0.5" />
    </svg>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        height: 72, display: "flex", alignItems: "center",
        padding: "0 clamp(1.5rem, 5vw, 4rem)",
        background: scrolled ? "rgba(244,240,230,0.93)" : "transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        borderBottom: scrolled ? "1px solid rgba(26,26,26,0.08)" : "1px solid transparent",
        transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)",
      }}>
        {/* LEFT — Desktop Links */}
        <div style={{ display: "flex", gap: 32, flex: 1 }}
          className="nav-desktop-left">
          <style>{`
            @media (max-width: 1023px) {
              .nav-desktop-left { display: none !important; }
              .nav-desktop-right { display: none !important; }
              .nav-mobile-left { display: flex !important; }
              .nav-mobile-right { display: flex !important; }
            }
            @media (min-width: 1024px) {
              .nav-mobile-left { display: none !important; }
              .nav-mobile-right { display: none !important; }
            }
          `}</style>
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.name} href={link.href} style={{
                fontFamily: FONT_BODY, fontSize: 11, fontWeight: 500,
                letterSpacing: "0.12em", textTransform: "uppercase",
                color: isActive ? C.obsidian : C.stone,
                textDecoration: "none", transition: "color 0.25s",
                paddingBottom: 4, position: "relative",
              }}>
                {link.name}
                {isActive && <span style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: C.champagne }} />}
              </Link>
            );
          })}
        </div>

        {/* LEFT — Mobile Menu Button */}
        <div style={{ flex: 1, justifyContent: "flex-start", display: "none" }}
          className="nav-mobile-left">
          <button onClick={() => setMenuOpen(true)} style={{
            display: "flex", flexDirection: "column", gap: 5,
            background: "none", border: "none", cursor: "pointer", padding: 8,
          }}>
            <span style={{ display: "block", height: 1, width: 18, background: C.obsidian }} />
            <span style={{ display: "block", height: 1, width: 11, background: C.obsidian }} />
          </button>
        </div>

        {/* CENTER — Logo */}
        <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", textAlign: "center" }}>
          <Link href="/" style={{ textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Botanical size={20} />
            <div style={{ fontFamily: FONT_DISPLAY, fontSize: 18, fontWeight: 500, letterSpacing: "0.16em", color: C.obsidian, lineHeight: 1 }}>MONÉT</div>
            <div style={{ fontFamily: FONT_BODY, fontSize: 8, fontWeight: 400, letterSpacing: "0.35em", textTransform: "uppercase", color: C.stone, marginTop: 1 }}>Beauty Lounge</div>
          </Link>
        </div>

        {/* RIGHT — Desktop */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 24, flex: 1 }}
          className="nav-desktop-right">
          <Link href="/contact" style={{
            fontFamily: FONT_BODY, fontSize: 11, fontWeight: 500,
            letterSpacing: "0.12em", textTransform: "uppercase",
            color: pathname === "/contact" ? C.obsidian : C.stone,
            textDecoration: "none", transition: "color 0.25s",
            paddingBottom: 4, position: "relative",
          }}>
            Contact
            {pathname === "/contact" && <span style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: C.champagne }} />}
          </Link>
          <Link href="/booking" style={{
            fontFamily: FONT_BODY, fontSize: 10, fontWeight: 500,
            letterSpacing: "0.15em", textTransform: "uppercase",
            background: C.obsidian, color: C.cream,
            border: "none", borderRadius: 2, padding: "10px 22px",
            textDecoration: "none", transition: "all 0.3s ease",
          }}>Book Now</Link>
        </div>

        {/* RIGHT — Mobile */}
        <div style={{ flex: 1, justifyContent: "flex-end", display: "none" }}
          className="nav-mobile-right">
          <Link href="/booking" style={{
            fontFamily: FONT_BODY, fontSize: 10, fontWeight: 500,
            letterSpacing: "0.2em", textTransform: "uppercase",
            color: C.obsidian, textDecoration: "none", padding: 8,
          }}>Book</Link>
        </div>
      </nav>

      {/* MOBILE FULLSCREEN MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "fixed", inset: 0, zIndex: 200,
              background: C.cream, display: "flex", flexDirection: "column",
              padding: "0 clamp(1.5rem, 5vw, 4rem)",
            }}
          >
            {/* Top bar */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: 72 }}>
              <div style={{ fontFamily: FONT_DISPLAY, fontSize: 18, fontWeight: 500, letterSpacing: "0.16em", color: C.obsidian }}>MONÉT</div>
              <button onClick={() => setMenuOpen(false)} style={{
                fontFamily: FONT_BODY, fontSize: 9, fontWeight: 500, letterSpacing: "0.3em",
                textTransform: "uppercase", color: C.stone,
                background: "none", border: "none", cursor: "pointer",
              }}>CLOSE</button>
            </div>

            {/* Links */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 8 }}>
              {MOBILE_LINKS.map((link, i) => (
                <motion.div key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 0.2 + i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link href={link.href} onClick={() => setMenuOpen(false)} style={{
                    fontFamily: FONT_DISPLAY,
                    fontSize: "clamp(40px, 10vw, 64px)",
                    fontWeight: 300, fontStyle: "italic",
                    color: pathname === link.href ? C.champagne : C.obsidian,
                    textDecoration: "none", display: "block",
                    padding: "6px 0", lineHeight: 1.1,
                    transition: "color 0.25s",
                  }}>{link.name}</Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + MOBILE_LINKS.length * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{ marginTop: 32 }}
              >
                <Link href="/booking" onClick={() => setMenuOpen(false)} style={{
                  display: "inline-block",
                  background: C.obsidian, color: C.cream,
                  padding: "14px 32px", borderRadius: 100,
                  fontFamily: FONT_BODY, fontSize: 12, fontWeight: 500,
                  letterSpacing: "0.15em", textTransform: "uppercase",
                  textDecoration: "none",
                }}>Book Appointment</Link>
              </motion.div>
            </div>

            {/* Bottom */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 0 32px", flexWrap: "wrap", gap: 8 }}
            >
              <a href="tel:+923001234567" style={{ fontFamily: FONT_BODY, fontSize: 10, color: C.stone, letterSpacing: "0.08em", textDecoration: "none" }}>+92 300 123 4567</a>
              <span style={{ fontFamily: FONT_BODY, fontSize: 10, color: C.stone, letterSpacing: "0.08em" }}>@monet_beautyloungelahore</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
