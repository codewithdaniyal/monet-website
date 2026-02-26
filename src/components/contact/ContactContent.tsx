"use client";

import React, { useState, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { submitContactMessage } from "@/app/actions/contact";

const C = {
  cream: "#F4F0E6", creamDark: "#EAE4D6", creamLight: "#FAF8F2",
  obsidian: "#1A1A1A", obsidian2: "#2C2C2C",
  champagne: "#C5B396", stone: "#8A8070", whisper: "#B8AF9E", parchment: "#EAE4D6", white: "#FFFFFF",
};
const FONT_DISPLAY = "var(--font-display)";
const FONT_BODY = "var(--font-body)";

const faqs = [
  {
    q: "Do I need to book an appointment in advance?",
    a: "We highly recommend booking in advance to secure your preferred time and specialist. Walk-ins are welcome for basic services, subject to availability.",
  },
  {
    q: "What is your cancellation policy?",
    a: "We ask for at least 24 hours' notice for cancellations. Late cancellations or no-shows may be subject to a fee of 50% of the scheduled service cost.",
  },
  {
    q: "Do you offer consultations before booking a treatment?",
    a: "Yes! Complex treatments like bridal makeup, advanced skin aesthetics, and cosmetic dentistry begin with a comprehensive consultation to understand your goals.",
  },
  {
    q: "What is the timeline for bridal makeup bookings?",
    a: "For brides, we recommend securing your date at least 3-6 months in advance. Our bridal trial sessions should be scheduled 1-2 months before the big day.",
  },
];

function FloatingInput({ label, value, onChange, type = "text", required = false }: any) {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value.length > 0;

  return (
    <div style={{ position: "relative", marginBottom: 32 }}>
      <label style={{
        position: "absolute", left: 0, transition: "all 0.3s ease", pointerEvents: "none",
        fontFamily: FONT_BODY, letterSpacing: "0.25em", textTransform: "uppercase",
        ...(isActive ? { fontSize: 9, top: -16, color: C.obsidian } : { fontSize: 10, top: 8, color: C.stone })
      }}>
        {label}{required && " *"}
      </label>
      <input
        type={type} value={value} onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{
          width: "100%", background: "transparent", border: "none",
          borderBottom: focused ? `2px solid ${C.obsidian}` : "1px solid rgba(26,26,26,0.15)",
          paddingTop: 8, paddingBottom: 8, fontFamily: FONT_DISPLAY, fontSize: 18, color: C.obsidian,
          outline: "none", transition: "all 0.3s ease", marginBottom: focused ? -1 : 0
        }}
      />
      <div style={{
        position: "absolute", bottom: 0, left: 0, height: 2, background: C.obsidian,
        transition: "transform 0.5s ease", transformOrigin: "left", width: "100%",
        transform: focused ? "scaleX(1)" : "scaleX(0)"
      }} />
    </div>
  );
}

function FloatingTextarea({ label, value, onChange, required = false }: any) {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value.length > 0;

  return (
    <div style={{ position: "relative", marginBottom: 32 }}>
      <label style={{
        position: "absolute", left: 0, transition: "all 0.3s ease", pointerEvents: "none",
        fontFamily: FONT_BODY, letterSpacing: "0.25em", textTransform: "uppercase",
        ...(isActive ? { fontSize: 9, top: -16, color: C.obsidian } : { fontSize: 10, top: 8, color: C.stone })
      }}>
        {label}{required && " *"}
      </label>
      <textarea
        value={value} onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} rows={4}
        style={{
          width: "100%", background: "transparent", border: "none", resize: "none",
          borderBottom: focused ? `2px solid ${C.obsidian}` : "1px solid rgba(26,26,26,0.15)",
          paddingTop: 8, paddingBottom: 8, fontFamily: FONT_DISPLAY, fontSize: 18, color: C.obsidian,
          outline: "none", transition: "all 0.3s ease", marginBottom: focused ? -1 : 0
        }}
      />
      <div style={{
        position: "absolute", bottom: 0, left: 0, height: 2, background: C.obsidian,
        transition: "transform 0.5s ease", transformOrigin: "left", width: "100%",
        transform: focused ? "scaleX(1)" : "scaleX(0)"
      }} />
    </div>
  );
}

export default function ContactContent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    startTransition(async () => {
      setError("");
      const result = await submitContactMessage({ name, email, phone, subject, message });
      if (result.success) {
        setSubmitted(true);
        setName(""); setEmail(""); setPhone(""); setSubject(""); setMessage("");
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(result.error || "Failed to send message.");
      }
    });
  };

  return (
    <>
      <style>{`
        .contact-grid { display: grid; gap: 64px; }
        @media(min-width: 1024px) {
          .contact-grid { grid-template-columns: 1fr 1fr; gap: 96px; }
        }
      `}</style>
      
      {/* ── Hero ── */}
      <section style={{
        position: "relative", width: "100%", height: "45vh", minHeight: 400,
        background: C.cream, display: "flex", alignItems: "center", justifyContent: "center"
      }}>
        <div style={{ textAlign: "center", padding: "0 24px" }}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(48px, 8vw, 84px)", fontStyle: "italic", fontWeight: 300, color: C.obsidian, lineHeight: 1, marginBottom: 24 }}
          >
            Get In Touch
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6, delay: 0.2 }} style={{ width: 80, height: 1, background: C.champagne, margin: "0 auto" }} />
        </div>
      </section>

      {/* ── Content Grid ── */}
      <section style={{ background: C.creamLight, padding: "96px clamp(1.5rem, 5vw, 3rem)" }}>
        <div className="contact-grid" style={{ maxWidth: 1280, margin: "0 auto" }}>
          
          {/* ── Left: Info & FAQ ── */}
          <div>
            <span style={{ fontFamily: FONT_BODY, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: C.champagne, fontWeight: 500, display: "block", marginBottom: 16 }}>
              Contact Details
            </span>
            <h2 style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(36px, 5vw, 48px)", fontStyle: "italic", fontWeight: 300, color: C.obsidian, lineHeight: 1.1, marginBottom: 40 }}>
              Here for you.
            </h2>
            
            <div style={{ display: "flex", flexDirection: "column", gap: 32, marginBottom: 64 }}>
              <div>
                <p style={{ fontFamily: FONT_BODY, fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: C.stone, marginBottom: 8 }}>Vist Us</p>
                <p style={{ fontFamily: FONT_BODY, fontSize: 14, color: C.obsidian, lineHeight: 1.6 }}>MM Alam Road, Gulberg III<br />Lahore, Pakistan</p>
              </div>
              <div>
                <p style={{ fontFamily: FONT_BODY, fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: C.stone, marginBottom: 8 }}>Contact</p>
                <p style={{ fontFamily: FONT_BODY, fontSize: 14, color: C.obsidian, lineHeight: 1.6 }}>+92 321 4567890<br />hello@monet.pk</p>
              </div>
              <div>
                <p style={{ fontFamily: FONT_BODY, fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: C.stone, marginBottom: 8 }}>Hours</p>
                <p style={{ fontFamily: FONT_BODY, fontSize: 14, color: C.obsidian, lineHeight: 1.6 }}>Mon - Sat: 10:00 AM - 8:00 PM<br />Sun: Closed</p>
              </div>
            </div>

            <div style={{ width: "100%", height: 1, background: "rgba(26,26,26,0.1)", marginBottom: 48 }} />

            <h3 style={{ fontFamily: FONT_DISPLAY, fontSize: 32, fontStyle: "italic", fontWeight: 300, color: C.obsidian, marginBottom: 32 }}>
              FAQs
            </h3>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {faqs.map((faq, idx) => (
                <div key={idx} style={{ borderBottom: "1px solid rgba(26,26,26,0.1)" }}>
                  <button
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    style={{ width: "100%", textAlign: "left", padding: "24px 0", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                  >
                    <span style={{ fontFamily: FONT_DISPLAY, fontSize: 20, color: C.obsidian, paddingRight: 24, fontStyle: activeFaq === idx ? "italic" : "normal" }}>
                      {faq.q}
                    </span>
                    <span style={{ fontFamily: FONT_DISPLAY, fontSize: 24, color: C.champagne, transform: activeFaq === idx ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }}>
                      +
                    </span>
                  </button>
                  <AnimatePresence>
                    {activeFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                        style={{ overflow: "hidden" }}
                      >
                        <p style={{ paddingBottom: 24, fontFamily: FONT_BODY, fontSize: 14, color: C.stone, lineHeight: 1.6, fontWeight: 300 }}>
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div>
            <div style={{ background: C.cream, padding: "clamp(32px, 5vw, 56px)", borderRadius: 16 }}>
              <span style={{ fontFamily: FONT_BODY, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: C.champagne, fontWeight: 500, display: "block", marginBottom: 16 }}>
                Send a Message
              </span>
              <h2 style={{ fontFamily: FONT_DISPLAY, fontSize: 32, fontStyle: "italic", fontWeight: 300, color: C.obsidian, marginBottom: 48 }}>
                How can we help?
              </h2>

              {submitted ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ padding: "40px 0", textAlign: "center" }}>
                  <div style={{ width: 64, height: 64, borderRadius: "50%", background: C.obsidian, color: C.cream, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                    ✓
                  </div>
                  <h3 style={{ fontFamily: FONT_DISPLAY, fontSize: 24, fontStyle: "italic", color: C.obsidian, marginBottom: 12 }}>Message Sent</h3>
                  <p style={{ fontFamily: FONT_BODY, fontSize: 14, color: C.stone }}>We will get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <FloatingInput label="Full Name" value={name} onChange={setName} required />
                  <div style={{ display: "flex", gap: 32 }}>
                    <div style={{ flex: 1 }}><FloatingInput label="Email" value={email} onChange={setEmail} type="email" required /></div>
                    <div style={{ flex: 1 }}><FloatingInput label="Phone (Optional)" value={phone} onChange={setPhone} type="tel" /></div>
                  </div>
                  <FloatingInput label="Subject (Optional)" value={subject} onChange={setSubject} />
                  <FloatingTextarea label="Your Message" value={message} onChange={setMessage} required />

                  {error && <p style={{ color: "#DC2626", fontFamily: FONT_BODY, fontSize: 12, marginBottom: 24 }}>{error}</p>}

                  <button
                    type="submit" disabled={isPending || !name.trim() || !email.trim() || !message.trim()}
                    style={{
                      width: "100%", height: 56, background: C.obsidian, color: C.cream,
                      fontFamily: FONT_BODY, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
                      cursor: (isPending || !name.trim() || !email.trim() || !message.trim()) ? "not-allowed" : "pointer",
                      opacity: (isPending || !name.trim() || !email.trim() || !message.trim()) ? 0.4 : 1,
                      border: "none", borderRadius: 0, transition: "background 0.3s ease", marginTop: 16
                    }}
                    onMouseEnter={(e) => {
                      if (!isPending && name.trim() && email.trim() && message.trim()) e.currentTarget.style.background = C.obsidian2;
                    }}
                    onMouseLeave={(e) => {
                      if (!isPending && name.trim() && email.trim() && message.trim()) e.currentTarget.style.background = C.obsidian;
                    }}
                  >
                    {isPending ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
