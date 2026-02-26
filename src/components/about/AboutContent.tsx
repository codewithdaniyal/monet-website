"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight, Star, Users, CalendarDays,
  Briefcase, Award, Shield, Lightbulb,
} from "lucide-react";

const C = {
  cream: "#F4F0E6", creamDark: "#EAE4D6", creamLight: "#FAF8F2",
  obsidian: "#1A1A1A", obsidian2: "#2C2C2C",
  champagne: "#C5B396", stone: "#8A8070", whisper: "#B8AF9E", parchment: "#EAE4D6", white: "#FFFFFF",
};
const FONT_DISPLAY = "var(--font-display)";
const FONT_BODY = "var(--font-body)";

/* ── Team data ── */
const team = [
  {
    name: "Dr. Ayesha Malik",
    role: "Lead Aesthetician & Founder",
    bio: "MBBS, certified in advanced dermal aesthetics with 12+ years of experience.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964f25e?q=80&w=987&auto=format&fit=crop",
  },
  {
    name: "Sana Tariq",
    role: "Senior Bridal Makeup Artist",
    bio: "Award-winning MUA specializing in South-Asian bridal transformations.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1061&auto=format&fit=crop",
  },
  {
    name: "Dr. Hassan Ahmed",
    role: "Cosmetic Dentist",
    bio: "BDS, Smile Design certified — bringing Hollywood smiles to Lahore since 2016.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1170&auto=format&fit=crop",
  },
  {
    name: "Fatima Noor",
    role: "Hair Specialist & Colorist",
    bio: "L'Oréal certified colorist with expertise in balayage and keratin treatments.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop",
  },
];

/* ── Stats ── */
const stats = [
  { icon: CalendarDays, number: "12+", label: "Years Experience" },
  { icon: Users, number: "2,000+", label: "Happy Clients" },
  { icon: Briefcase, number: "25+", label: "Beauty Experts" },
  { icon: Star, number: "6", label: "Service Categories" },
];

/* ── Values ── */
const values = [
  {
    icon: Award,
    title: "Excellence",
    desc: "We pursue the highest standards in every treatment, using only premium products and certified techniques.",
  },
  {
    icon: Shield,
    title: "Hygiene",
    desc: "Hospital-grade sterilization protocols and single-use tools ensure your complete safety.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We adopt the latest global beauty and dental technologies to deliver cutting-edge results.",
  },
];

export function AboutContent() {
  const storyRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, margin: "-80px" });
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });
  const teamRef = useRef(null);
  const teamInView = useInView(teamRef, { once: true, margin: "-80px" });

  return (
    <>
      <style>{`
        @media (min-width: 1024px) {
          .about-story-grid { grid-template-columns: 1fr 1fr; }
          .about-team-grid { grid-template-columns: repeat(4, 1fr); }
          .about-values-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .about-story-grid { grid-template-columns: 1fr; }
          .about-team-grid { grid-template-columns: repeat(2, 1fr); }
          .about-values-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 767px) {
          .about-story-grid { grid-template-columns: 1fr; }
          .about-team-grid { grid-template-columns: 1fr; }
          .about-values-grid { grid-template-columns: 1fr; }
        }
      `}</style>
      
      {/* ── Hero ── */}
      <section style={{
        position: "relative", width: "100%", height: "50vh", minHeight: 400,
        display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden",
        background: C.cream
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: 'url("https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2074&auto=format&fit=crop")',
          backgroundSize: "cover", backgroundPosition: "center"
        }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(244, 240, 230, 0.85)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent, #F4F0E6)" }} />

        <div style={{
          position: "relative", zIndex: 10, width: "100%", maxWidth: 1280, padding: "0 24px",
          display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center"
        }}>
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: "flex", alignItems: "center", gap: 8, fontFamily: FONT_BODY,
              fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase",
              color: C.stone, marginBottom: 24
            }}
          >
            <Link href="/" style={{ color: C.stone, textDecoration: "none", transition: "color 0.3s" }}
              onMouseEnter={(e) => e.currentTarget.style.color = C.obsidian}
              onMouseLeave={(e) => e.currentTarget.style.color = C.stone}>
              Home
            </Link>
            <ChevronRight size={12} />
            <span style={{ color: C.obsidian }}>About</span>
          </motion.nav>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontFamily: FONT_DISPLAY, fontSize: "clamp(48px, 8vw, 84px)", fontStyle: "italic",
              fontWeight: 300, color: C.obsidian, lineHeight: 1, marginBottom: 24
            }}
          >
            About Us
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ width: 80, height: 1, background: C.champagne, transformOrigin: "center" }}
          />
        </div>
      </section>

      {/* ── Story ── */}
      <section ref={storyRef} style={{ background: C.cream, padding: "96px clamp(1.5rem, 5vw, 3rem)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="about-story-grid" style={{ display: "grid", gap: "clamp(3rem, 6vw, 5rem)", alignItems: "center" }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              style={{ position: "relative", height: "clamp(360px, 50vw, 520px)", borderRadius: 12, overflow: "hidden" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1521590832167-7bfcbaa6362d?q=80&w=2070&auto=format&fit=crop"
                alt="Beauty Lounge Salon Interior"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(244, 240, 230, 0.4), transparent)" }} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span style={{
                fontFamily: FONT_BODY, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase",
                color: C.champagne, fontWeight: 500, display: "block", marginBottom: 16
              }}>
                Our Story
              </span>
              <h2 style={{
                fontFamily: FONT_DISPLAY, fontSize: "clamp(36px, 5vw, 48px)", fontStyle: "italic",
                fontWeight: 300, color: C.obsidian, lineHeight: 1.1, marginBottom: 24
              }}>
                A Legacy of Beauty
                <br />
                <span style={{ color: C.champagne }}>Since 2012</span>
              </h2>
              <div style={{ width: 64, height: 1, background: C.champagne, marginBottom: 24 }} />
              <div style={{ display: "flex", flexDirection: "column", gap: 16, fontFamily: FONT_BODY, fontSize: 13, color: C.stone, lineHeight: 1.8, fontWeight: 300 }}>
                <p>
                  Founded in 2012, MONÉT Beauty Lounge began as a dream to bring
                  world-class beauty and dental aesthetics to Lahore. What
                  started as a small boutique salon has evolved into one of the
                  city's most trusted names in beauty.
                </p>
                <p>
                  Today, we serve thousands of clients with a team of 25+
                  certified experts — from master hair stylists and bridal
                  makeup artists to cosmetic dentists and dermal specialists.
                </p>
                <p>
                  Our philosophy is simple: every client deserves a luxury
                  experience with world-class results, no matter the service.
                  That's the MONÉT promise.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section
        ref={statsRef}
        style={{ background: C.obsidian, padding: "80px clamp(1.5rem, 5vw, 3rem)", borderTop: "1px solid rgba(197, 179, 150, 0.1)", borderBottom: "1px solid rgba(197, 179, 150, 0.1)" }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 32 }}>
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}
                >
                  <div style={{ marginBottom: 16, color: C.champagne, background: "rgba(197, 179, 150, 0.05)", padding: 16, borderRadius: "50%" }}>
                    <Icon size={24} strokeWidth={1.2} />
                  </div>
                  <h3 style={{ fontFamily: FONT_DISPLAY, fontSize: 40, fontStyle: "italic", fontWeight: 300, color: C.champagne, lineHeight: 1, marginBottom: 8 }}>
                    {stat.number}
                  </h3>
                  <p style={{ fontFamily: FONT_BODY, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(244, 240, 230, 0.6)" }}>
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section ref={teamRef} style={{ background: C.creamLight, padding: "112px clamp(1.5rem, 5vw, 3rem)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <span style={{
              fontFamily: FONT_BODY, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase",
              color: C.champagne, fontWeight: 500, display: "block", marginBottom: 16
            }}>
              Our Team
            </span>
            <h2 style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(36px, 5vw, 56px)", fontStyle: "italic", fontWeight: 300, color: C.obsidian, lineHeight: 1 }}>
              Meet Our Experts
            </h2>
            <div style={{ width: 64, height: 1, background: C.champagne, margin: "24px auto 0" }} />
          </div>

          <div className="about-team-grid" style={{ display: "grid", gap: 40 }}>
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                style={{ textAlign: "center", cursor: "default" }}
                onMouseEnter={(e) => {
                  const img = e.currentTarget.querySelector("img");
                  if (img) img.style.transform = "scale(1.05)";
                  const h3 = e.currentTarget.querySelector("h3");
                  if (h3) h3.style.color = C.champagne;
                  const border = e.currentTarget.querySelector(".img-border") as HTMLElement;
                  if (border) border.style.borderColor = "rgba(197, 179, 150, 0.6)";
                }}
                onMouseLeave={(e) => {
                  const img = e.currentTarget.querySelector("img");
                  if (img) img.style.transform = "scale(1)";
                  const h3 = e.currentTarget.querySelector("h3");
                  if (h3) h3.style.color = C.obsidian;
                  const border = e.currentTarget.querySelector(".img-border") as HTMLElement;
                  if (border) border.style.borderColor = "rgba(197, 179, 150, 0.2)";
                }}
              >
                <div className="img-border" style={{
                  position: "relative", width: 160, height: 160, margin: "0 auto 24px",
                  borderRadius: "50%", overflow: "hidden", border: "1px solid rgba(197, 179, 150, 0.2)",
                  padding: 4, transition: "border-color 0.4s ease"
                }}>
                  <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: "50%", overflow: "hidden" }}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      style={{ objectFit: "cover", transition: "transform 0.6s ease" }}
                      sizes="160px"
                    />
                  </div>
                </div>
                <h3 style={{ fontFamily: FONT_DISPLAY, fontSize: 20, fontStyle: "italic", fontWeight: 400, color: C.obsidian, marginBottom: 6, transition: "color 0.3s" }}>
                  {member.name}
                </h3>
                <p style={{ fontFamily: FONT_BODY, fontSize: 10, letterSpacing: "0.15em", color: C.champagne, textTransform: "uppercase", marginBottom: 12 }}>
                  {member.role}
                </p>
                <p style={{ fontFamily: FONT_BODY, fontSize: 12, color: C.stone, lineHeight: 1.6, maxWidth: 260, margin: "0 auto", fontWeight: 300 }}>
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section style={{ background: C.obsidian, padding: "112px clamp(1.5rem, 5vw, 3rem)", borderTop: "1px solid rgba(197, 179, 150, 0.1)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <span style={{
              fontFamily: FONT_BODY, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase",
              color: C.champagne, fontWeight: 500, display: "block", marginBottom: 16
            }}>
              Our Values
            </span>
            <h2 style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(36px, 5vw, 56px)", fontStyle: "italic", fontWeight: 300, color: C.cream, lineHeight: 1 }}>
              What We Stand For
            </h2>
            <div style={{ width: 64, height: 1, background: C.champagne, margin: "24px auto 0" }} />
          </div>

          <div className="about-values-grid" style={{ display: "grid", gap: 32 }}>
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <div
                  key={i}
                  style={{
                    background: "rgba(244, 240, 230, 0.03)", border: "1px solid rgba(197, 179, 150, 0.1)",
                    borderRadius: 16, padding: 32, textAlign: "center", cursor: "default",
                    transition: "border-color 0.4s ease, background 0.4s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(197, 179, 150, 0.3)";
                    e.currentTarget.style.background = "rgba(244, 240, 230, 0.05)";
                    const iconBg = e.currentTarget.querySelector(".icon-bg") as HTMLElement;
                    if (iconBg) iconBg.style.background = "rgba(197, 179, 150, 0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(197, 179, 150, 0.1)";
                    e.currentTarget.style.background = "rgba(244, 240, 230, 0.03)";
                    const iconBg = e.currentTarget.querySelector(".icon-bg") as HTMLElement;
                    if (iconBg) iconBg.style.background = "rgba(197, 179, 150, 0.1)";
                  }}
                >
                  <div className="icon-bg" style={{
                    width: 64, height: 64, background: "rgba(197, 179, 150, 0.1)", borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px",
                    transition: "background 0.4s ease"
                  }}>
                    <Icon size={28} color={C.champagne} strokeWidth={1.2} />
                  </div>
                  <h3 style={{ fontFamily: FONT_DISPLAY, fontSize: 24, fontStyle: "italic", fontWeight: 400, color: C.cream, marginBottom: 12 }}>
                    {val.title}
                  </h3>
                  <p style={{ fontFamily: FONT_BODY, fontSize: 13, color: "rgba(244, 240, 230, 0.6)", lineHeight: 1.7, fontWeight: 300 }}>
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
