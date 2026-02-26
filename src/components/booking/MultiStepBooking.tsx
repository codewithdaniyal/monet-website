"use client";

import React, { useState, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import Link from "next/link";
import { services } from "@/lib/services-data";
import { submitBooking } from "@/app/actions/booking";
import { Sparkles, Scissors, Droplets, Flower, Activity, Star } from "lucide-react";

const C = {
  cream: "#F4F0E6", creamDark: "#EAE4D6", creamLight: "#FAF8F2",
  obsidian: "#1A1A1A", obsidian2: "#2C2C2C",
  champagne: "#C5B396", stone: "#8A8070", whisper: "#B8AF9E", parchment: "#EAE4D6", white: "#FFFFFF",
};
const FONT_DISPLAY = "var(--font-display)";
const FONT_BODY = "var(--font-body)";

const STEP_LABELS = ["Category", "Service", "Schedule", "Details"];

const CATEGORIES = [
  { name: "Bridal", label: "The Bridal Studio", desc: "Complete bridal glam", icon: Sparkles },
  { name: "Hair", label: "Hair Lounge", desc: "Color, cuts & treatments", icon: Scissors },
  { name: "Skin", label: "Skin & Aesthetics", desc: "Facials & advanced skin", icon: Droplets },
  { name: "Body", label: "Body & Spa", desc: "Wax, massage & spa", icon: Flower },
  { name: "Nails", label: "Nails", desc: "Extensions, art & care", icon: Star },
  { name: "Laser", label: "Laser", desc: "Permanent hair removal", icon: Activity },
];

const TIME_SLOTS = [
  "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM",
  "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM",
];

function FloatingInput({ label, value, onChange, type = "text", required = false }: any) {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value.length > 0;

  return (
    <div style={{ position: "relative", marginBottom: 32 }}>
      <label style={{
        position: "absolute", left: 0, transition: "all 0.3s ease",
        fontFamily: FONT_BODY, letterSpacing: "0.25em", textTransform: "uppercase", pointerEvents: "none",
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
          paddingTop: 8, paddingBottom: 8, fontFamily: FONT_DISPLAY, fontSize: 18,
          color: C.obsidian, outline: "none", transition: "all 0.3s ease", marginBottom: focused ? -1 : 0
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

function FloatingTextarea({ label, value, onChange }: any) {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value.length > 0;

  return (
    <div style={{ position: "relative", marginBottom: 32 }}>
      <label style={{
        position: "absolute", left: 0, transition: "all 0.3s ease",
        fontFamily: FONT_BODY, letterSpacing: "0.25em", textTransform: "uppercase", pointerEvents: "none",
        ...(isActive ? { fontSize: 9, top: -16, color: C.obsidian } : { fontSize: 10, top: 8, color: C.stone })
      }}>
        {label}
      </label>
      <textarea
        value={value} onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} rows={3}
        style={{
          width: "100%", background: "transparent", border: "none", resize: "none",
          borderBottom: focused ? `2px solid ${C.obsidian}` : "1px solid rgba(26,26,26,0.15)",
          paddingTop: 8, paddingBottom: 8, fontFamily: FONT_DISPLAY, fontSize: 18,
          color: C.obsidian, outline: "none", transition: "all 0.3s ease", marginBottom: focused ? -1 : 0
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

export default function MultiStepBooking() {
  const [step, setStep] = useState(0);
  const [category, setCategory] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  const filteredServices = services.filter((s) => s.category === category);
  const selectedService = services.find((s) => s.name === service);

  const canContinue = () => {
    if (step === 0) return !!category;
    if (step === 1) return !!service;
    if (step === 2) return !!date && !!time;
    if (step === 3) return name.trim().length >= 2 && phone.trim().length >= 7;
    return false;
  };

  const handleSubmit = () => {
    startTransition(async () => {
      setError("");
      const result = await submitBooking({
        clientName: name, phone, email: email || undefined,
        category, service, date: date ? format(date, "yyyy-MM-dd") : "",
        time, notes: notes || undefined,
      });
      if (result.success) setSubmitted(true);
      else setError(result.error || "Something went wrong.");
    });
  };

  const next = () => {
    if (step === 3) handleSubmit();
    else setStep((s) => Math.min(s + 1, 3));
  };
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const progressWidth = `${((step + 1) / 4) * 100}%`;

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ position: "fixed", inset: 0, zIndex: 100, background: C.cream, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center", maxWidth: 512, padding: "0 24px" }}>
          <div style={{ width: 80, height: 80, borderRadius: "50%", background: C.obsidian, color: C.cream, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 32px", fontSize: 32 }}>✓</div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(42px, 6vw, 52px)", fontStyle: "italic", color: C.obsidian, lineHeight: 1.1, marginBottom: 24 }}>
            Thank You, {name.split(" ")[0]}
          </motion.h1>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} style={{ background: C.obsidian, borderRadius: 16, padding: 32, textAlign: "left", marginBottom: 32 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}><span style={{ fontFamily: FONT_BODY, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(244,240,230,0.6)" }}>SERVICE</span><span style={{ fontFamily: FONT_DISPLAY, fontSize: 16, color: C.cream }}>{service}</span></div>
              <div style={{ width: "100%", height: 1, background: "rgba(244,240,230,0.1)" }} />
              <div style={{ display: "flex", justifyContent: "space-between" }}><span style={{ fontFamily: FONT_BODY, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(244,240,230,0.6)" }}>DATE</span><span style={{ fontFamily: FONT_DISPLAY, fontSize: 16, color: C.cream }}>{date ? format(date, "MMMM d, yyyy") : ""}</span></div>
              <div style={{ width: "100%", height: 1, background: "rgba(244,240,230,0.1)" }} />
              <div style={{ display: "flex", justifyContent: "space-between" }}><span style={{ fontFamily: FONT_BODY, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(244,240,230,0.6)" }}>TIME</span><span style={{ fontFamily: FONT_DISPLAY, fontSize: 16, color: C.cream }}>{time}</span></div>
            </div>
          </motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} style={{ fontFamily: FONT_BODY, fontSize: 13, color: C.stone, margin: "0 0 32px" }}>We'll confirm on WhatsApp within 1 hour</motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}><Link href="/" style={{ fontFamily: FONT_BODY, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: C.obsidian, textDecoration: "underline", textUnderlineOffset: 4 }}>Back to Home</Link></motion.div>
        </div>
      </motion.div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: C.creamLight, display: "flex", flexDirection: "column" }}>
      <style>{`
        .booking-main-grid { display: grid; grid-template-columns: 1fr; }
        .booking-right-panel { display: none; }
        @media(min-width: 1024px) { .booking-main-grid { grid-template-columns: 60% 40%; } .booking-right-panel { display: block; } }
      `}</style>

      <div className="booking-main-grid" style={{ width: "100%", maxWidth: 1280, margin: "0 auto", flex: 1, minHeight: "100vh" }}>
        {/* ──── LEFT PANEL ──── */}
        <div style={{ width: "100%", padding: "128px clamp(1.5rem, 5vw, 4rem) 64px" }}>
          <div style={{ marginBottom: 48 }}>
            <div style={{ width: "100%", height: 2, background: "rgba(26,26,26,0.08)", borderRadius: 9999, marginBottom: 16 }}>
              <div style={{ height: "100%", background: C.obsidian, borderRadius: 9999, transition: "width 0.7s ease-out", width: progressWidth }} />
            </div>
            <div style={{ display: "flex", gap: 24 }}>
              {STEP_LABELS.map((label, i) => (
                <span key={label} style={{ fontFamily: FONT_BODY, fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", transition: "color 0.3s ease", color: i <= step ? C.obsidian : C.stone }}>
                  {label}
                </span>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div key="step-0" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.35 }}>
                <h2 style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(36px, 5vw, 48px)", fontStyle: "italic", color: C.obsidian, lineHeight: 1.1, marginBottom: 40 }}>What are you here for?</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
                  {CATEGORIES.map((cat) => {
                    const isSelected = category === cat.name;
                    const Icon = cat.icon;
                    return (
                      <button
                        key={cat.name} onClick={() => setCategory(cat.name)}
                        style={{
                          position: "relative", textAlign: "left", padding: "clamp(20px, 3vw, 28px)", borderRadius: 12, transition: "all 0.3s ease", cursor: "pointer",
                          ...(isSelected ? { border: `2px solid ${C.obsidian}`, background: C.cream, boxShadow: "0 8px 32px rgba(26,26,26,0.12)" } : { border: `1px solid ${C.parchment}`, background: C.creamLight })
                        }}
                        onMouseEnter={(e) => { if (!isSelected) { e.currentTarget.style.borderColor = "rgba(26,26,26,0.25)"; e.currentTarget.style.transform = "translateY(-2px)"; } }}
                        onMouseLeave={(e) => { if (!isSelected) { e.currentTarget.style.borderColor = C.parchment; e.currentTarget.style.transform = "none"; } }}
                      >
                        {isSelected && <div style={{ position: "absolute", top: 12, right: 12, width: 20, height: 20, background: C.obsidian, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: C.cream, fontSize: 10 }}>✓</div>}
                        <div style={{ marginBottom: 12 }}><Icon size={24} color={C.obsidian} strokeWidth={1} /></div>
                        <p style={{ fontFamily: FONT_DISPLAY, fontSize: 20, fontStyle: "italic", color: C.obsidian, lineHeight: 1.1, marginBottom: 4 }}>{cat.label}</p>
                        <p style={{ fontFamily: FONT_BODY, fontSize: 11, color: C.stone }}>{cat.desc}</p>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div key="step-1" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.35 }}>
                <h2 style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(36px, 5vw, 48px)", fontStyle: "italic", color: C.obsidian, lineHeight: 1.1, marginBottom: 40 }}>Choose your service</h2>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {filteredServices.map((s, idx) => {
                    const isSel = service === s.name;
                    return (
                      <button
                        key={s.id} onClick={() => setService(s.name)}
                        style={{
                          display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", padding: "20px 16px", textAlign: "left", transition: "all 0.2s ease", borderRadius: 8, cursor: "pointer", border: "none",
                          borderTop: idx > 0 ? "1px solid rgba(26,26,26,0.06)" : "none",
                          ...(isSel ? { background: C.cream, borderLeft: `2px solid ${C.obsidian}` } : { background: "transparent", borderLeft: "2px solid transparent" })
                        }}
                        onMouseEnter={(e) => { if (!isSel) e.currentTarget.style.background = "rgba(244,240,230,0.5)"; }}
                        onMouseLeave={(e) => { if (!isSel) e.currentTarget.style.background = "transparent"; }}
                      >
                        <div style={{ flex: 1, minWidth: 0, marginRight: 16 }}>
                          <p style={{ fontFamily: FONT_DISPLAY, fontSize: 20, fontStyle: "italic", color: C.obsidian, lineHeight: 1.3 }}>{s.name}</p>
                          <p style={{ fontFamily: FONT_BODY, fontSize: 12, color: C.stone, marginTop: 4 }}>{s.description}</p>
                        </div>
                        <div style={{ textAlign: "right", flexShrink: 0 }}>
                          <p style={{ fontFamily: FONT_BODY, fontSize: 12, fontWeight: 500, color: C.champagne }}>{s.price}</p>
                          <p style={{ fontFamily: FONT_BODY, fontSize: 10, color: C.stone, marginTop: 2 }}>{s.duration}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step-2" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.35 }}>
                <h2 style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(36px, 5vw, 48px)", fontStyle: "italic", color: C.obsidian, lineHeight: 1.1, marginBottom: 40 }}>Pick your perfect time</h2>
                <style>{`
                  .rdp-monet .rdp-day_selected { background-color: #1a1a1a !important; color: #F4F0E6 !important; }
                  .rdp-monet .rdp-day:hover:not(.rdp-day_selected) { background-color: #EAE4D6; }
                `}</style>
                <div style={{ background: C.white, border: `1px solid ${C.parchment}`, borderRadius: 16, padding: 24, marginBottom: 32, display: "inline-block" }}>
                  <DayPicker
                    mode="single" selected={date} onSelect={setDate} disabled={{ before: new Date() }}
                    classNames={{
                      root: "rdp-monet",
                      month_caption: "font-[var(--font-display)] text-[18px] italic text-[#1A1A1A] mb-4 flex justify-between",
                      day: "font-[var(--font-body)] text-[13px] w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-200",
                      selected: "rdp-day_selected",
                      today: `border border-[${C.parchment}]`, disabled: "opacity-30 cursor-default",
                      weekday: "font-[var(--font-body)] text-[10px] tracking-[0.15em] uppercase text-[#8A8070] w-9 text-center",
                      nav: "flex justify-between items-center mb-2",
                      button_previous: "font-[var(--font-body)] text-[12px] text-[#8A8070] hover:text-[#1A1A1A] transition-colors p-1",
                      button_next: "font-[var(--font-body)] text-[12px] text-[#8A8070] hover:text-[#1A1A1A] transition-colors p-1",
                    }}
                  />
                </div>
                <div>
                  <p style={{ fontFamily: FONT_BODY, fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: C.stone, marginBottom: 16 }}>Available Times</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {TIME_SLOTS.map((slot) => {
                      const isSel = time === slot;
                      return (
                        <button
                          key={slot} onClick={() => setTime(slot)}
                          style={{
                            padding: "9px 18px", borderRadius: 9999, fontFamily: FONT_BODY, fontSize: 12, transition: "all 0.2s ease", cursor: "pointer",
                            ...(isSel ? { background: C.obsidian, color: C.cream, border: `1px solid ${C.obsidian}` } : { background: "transparent", border: `1px solid ${C.parchment}`, color: C.stone })
                          }}
                          onMouseEnter={(e) => { if (!isSel) e.currentTarget.style.borderColor = C.obsidian; }}
                          onMouseLeave={(e) => { if (!isSel) e.currentTarget.style.borderColor = C.parchment; }}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step-3" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.35 }}>
                <h2 style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(36px, 5vw, 48px)", fontStyle: "italic", color: C.obsidian, lineHeight: 1.1, marginBottom: 40 }}>Tell us about you</h2>
                <div style={{ maxWidth: 448 }}>
                  <FloatingInput label="Full Name" value={name} onChange={setName} required />
                  <FloatingInput label="Phone" value={phone} onChange={setPhone} type="tel" required />
                  <FloatingInput label="Email (optional)" value={email} onChange={setEmail} type="email" />
                  <FloatingTextarea label="Special Notes" value={notes} onChange={setNotes} />
                </div>
                {error && <p style={{ fontFamily: FONT_BODY, fontSize: 12, color: "#DC2626", marginTop: 8 }}>{error}</p>}
              </motion.div>
            )}
          </AnimatePresence>

          <div style={{ marginTop: 48, maxWidth: 448 }}>
            <button
              onClick={next} disabled={!canContinue() || isPending}
              style={{
                width: "100%", height: 52, background: C.obsidian, color: C.cream, fontFamily: FONT_BODY, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", borderRadius: 9999, border: "none",
                cursor: (!canContinue() || isPending) ? "not-allowed" : "pointer", opacity: (!canContinue() || isPending) ? 0.4 : 1, transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => { if (canContinue() && !isPending) e.currentTarget.style.background = C.obsidian2; }}
              onMouseLeave={(e) => { if (canContinue() && !isPending) e.currentTarget.style.background = C.obsidian; }}
            >
              {isPending ? "Submitting…" : step === 3 ? "Confirm Booking →" : "Continue →"}
            </button>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 20 }}>
              {step > 0 ? (
                <button
                  onClick={back} style={{ fontFamily: FONT_BODY, fontSize: 11, color: C.stone, textDecoration: "underline", textUnderlineOffset: 4, background: "none", border: "none", cursor: "pointer", padding: 0, transition: "color 0.3s ease" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = C.obsidian} onMouseLeave={(e) => e.currentTarget.style.color = C.stone}
                >← Back</button>
              ) : <span />}
              <span style={{ fontFamily: FONT_BODY, fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: C.stone }}>Step {step + 1} of 4</span>
            </div>
          </div>
        </div>

        {/* ──── RIGHT PANEL ──── */}
        <div className="booking-right-panel" style={{ width: "100%", background: C.cream, position: "sticky", top: 0, height: "100vh", overflowY: "auto" }}>
          <div style={{ padding: "80px 48px" }}>
            <h3 style={{ fontFamily: FONT_DISPLAY, fontSize: 22, fontStyle: "italic", color: C.obsidian, marginBottom: 16 }}>MONÉT Beauty Lounge</h3>
            <div style={{ width: 40, height: 1, background: C.champagne, marginBottom: 32 }} />

            <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 40 }}>
              {category && <div><p style={{ fontFamily: FONT_BODY, fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: C.stone, marginBottom: 4 }}>CATEGORY</p><p style={{ fontFamily: FONT_DISPLAY, fontSize: 16, color: C.obsidian }}>{CATEGORIES.find(c => c.name === category)?.label}</p></div>}
              {service && <div><p style={{ fontFamily: FONT_BODY, fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: C.stone, marginBottom: 4 }}>SERVICE</p><p style={{ fontFamily: FONT_DISPLAY, fontSize: 16, color: C.obsidian }}>{service}</p></div>}
              {selectedService && <div><p style={{ fontFamily: FONT_BODY, fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: C.stone, marginBottom: 4 }}>PRICE</p><p style={{ fontFamily: FONT_DISPLAY, fontSize: 16, color: C.champagne }}>{selectedService.price}</p></div>}
              {date && <div><p style={{ fontFamily: FONT_BODY, fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: C.stone, marginBottom: 4 }}>DATE</p><p style={{ fontFamily: FONT_DISPLAY, fontSize: 16, color: C.obsidian }}>{format(date, "EEEE, MMMM d")}</p></div>}
              {time && <div><p style={{ fontFamily: FONT_BODY, fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: C.stone, marginBottom: 4 }}>TIME</p><p style={{ fontFamily: FONT_DISPLAY, fontSize: 16, color: C.obsidian }}>{time}</p></div>}
            </div>

            <div style={{ width: "100%", height: 1, background: C.parchment, marginBottom: 32 }} />

            <div style={{ marginBottom: 32 }}>
              <p style={{ fontFamily: FONT_BODY, fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: C.stone, marginBottom: 12 }}>CONTACT US</p>
              <p style={{ fontFamily: FONT_BODY, fontSize: 13, color: C.obsidian, marginBottom: 4 }}>+92 321 4567890</p>
              <p style={{ fontFamily: FONT_BODY, fontSize: 13, color: C.obsidian }}>Gulberg III, Lahore</p>
            </div>

            <div style={{ width: "100%", height: 1, background: C.parchment, marginBottom: 32 }} />

            <div style={{ marginBottom: 40 }}>
              <p style={{ fontFamily: FONT_BODY, fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: C.stone, marginBottom: 16 }}>WHAT TO EXPECT</p>
              <ul style={{ display: "flex", flexDirection: "column", gap: 12, listStyle: "none", padding: 0, margin: 0 }}>
                {["Consultation with your specialist", "Complimentary herbal tea on arrival", "Premium international products only", "WhatsApp confirmation within 1 hour"].map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <span style={{ color: C.champagne, fontSize: 14 }}>✓</span>
                    <span style={{ fontFamily: FONT_BODY, fontSize: 12, color: C.obsidian, lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <a
              href="https://wa.me/923214567890" target="_blank" rel="noopener noreferrer"
              style={{ display: "block", textAlign: "center", width: "100%", padding: "12px 0", background: "#25D366", color: C.white, fontFamily: FONT_BODY, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", borderRadius: 9999, textDecoration: "none", transition: "background 0.3s ease" }}
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
