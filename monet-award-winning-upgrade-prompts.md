# MONÉT Beauty Lounge — Award-Winning 2026/27 UPGRADE Prompts
## Surgical File-by-File Upgrades · Existing Project Enhancement
### Inspired by: Awwwards SOTD · CSS Design Awards · Cannes Lions Digital Craft

---

## 🔍 WHY YOUR CURRENT UI LOOKS "NOT MODERN"

Before upgrading, understand exactly what's wrong:

```
❌ CURRENT PROBLEMS (typical AI-generated 12-step output):
├── Generic white backgrounds → feels like any website
├── Standard Tailwind card components → no personality
├── Inter/default fonts → zero brand character
├── Regular CSS transitions → feels sluggish
├── Equal-height grid cards → editorial photography magazines never do this
├── Standard navbar with background → no sophistication
├── Basic hover effects → no surprise or delight
├── No texture/grain → feels flat, digital, cheap
├── Uniform spacing → no rhythm or breathing
└── No micro-interactions → feels static, 2019-era

✅ WHAT AWARD-WINNING 2026/27 SALON SITES DO:
├── Warm cream textures (never pure white)
├── Massive editorial typography with extreme scale contrast
├── Scroll-driven animations (GSAP or framer-motion scroll)
├── Asymmetric layouts that break the grid intentionally
├── Images that bleed off-screen
├── Custom cursor (crosshair or dot)
├── Horizontal scroll sections
├── Clip-path reveal animations on images
├── Full-screen mobile menu with huge italic type
└── Every interactive element has a spring-physics animation
```

---

## 🎨 MONÉT BRAND TOKENS — EXTRACTED FROM LOGO

```css
/* THE EXACT PALETTE — Never deviate */

Cream Circle:     #F4F0E6   ← Your logo background = hero background
Pure White:       #FFFFFF   ← Cards, overlays only
Warm Black:       #1A1A1A   ← Logo text = all headings, body text
Champagne Gold:   #C5B396   ← Hover states, accents, decorative
Light Parchment:  #EAE4D6   ← Subtle section breaks
Mid Stone:        #8A8070   ← Secondary text, captions
Whisper:          #B8AF9E   ← Placeholder text, borders

DARK CONTRAST:
Dark Cream:       #1A1A1A   ← Dark sections background
On-Dark Text:     #F4F0E6   ← Ivory text on dark backgrounds
On-Dark Accent:   #C5B396   ← Champagne on dark

FONTS (from your spec):
Display:   Cormorant Garamond, Playfair Display — serif
Body/UI:   Montserrat — sans-serif, uppercase tracking
```

---

## ⚡ UPGRADE 1 — globals.css: Complete Rebuild

### Cursor Prompt:
```
UPGRADE TASK: Replace the entire /app/globals.css with this award-winning version.
Do NOT keep any existing styles. Full replacement.

I am upgrading MONÉT Beauty Lounge to be award-winning 2026/27 quality.

Brand palette:
  Cream: #F4F0E6 (logo circle color = hero bg)
  White: #FFFFFF (cards only)
  Obsidian: #1A1A1A (all text)
  Champagne: #C5B396 (hover/accent)
  Parchment: #EAE4D6 (section breaks)
  Stone: #8A8070 (secondary text)

Write the COMPLETE new globals.css:

1. CSS CUSTOM PROPERTIES:
:root {
  --cream: #F4F0E6;
  --cream-dark: #EAE4D6;
  --white: #FFFFFF;
  --obsidian: #1A1A1A;
  --obsidian-2: #2C2C2C;
  --champagne: #C5B396;
  --champagne-light: #D9CDB8;
  --stone: #8A8070;
  --whisper: #B8AF9E;
  --border: rgba(26,26,26,0.1);
  --border-hover: rgba(26,26,26,0.25);

  --font-display: 'Cormorant Garamond', 'Playfair Display', Georgia, serif;
  --font-body: 'Montserrat', system-ui, sans-serif;

  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out: cubic-bezier(0.87, 0, 0.13, 1);
  --duration-fast: 200ms;
  --duration-mid: 400ms;
  --duration-slow: 800ms;
}

2. BASE RESET (proper 2026 reset):
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; font-size: 16px; }
  body {
    background-color: var(--cream);
    color: var(--obsidian);
    font-family: var(--font-body);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
  }

3. PAPER GRAIN TEXTURE (THE most important line in the file):
  body::before {
    content: '';
    position: fixed;
    inset: -100%;
    width: 300%;
    height: 300%;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23g)'/%3E%3C/svg%3E");
    opacity: 0.022;
    pointer-events: none;
    z-index: 9999;
    animation: grain 0.4s steps(2) infinite;
  }

4. KEYFRAME ANIMATIONS:
  @keyframes grain {
    0%, 100% { transform: translate(0, 0); }
    10% { transform: translate(-2%, -3%); }
    30% { transform: translate(3%, 2%); }
    50% { transform: translate(-1%, 4%); }
    70% { transform: translate(2%, -2%); }
    90% { transform: translate(-3%, 1%); }
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(32px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes lineGrow {
    from { transform: scaleX(0); transform-origin: left; }
    to   { transform: scaleX(1); transform-origin: left; }
  }
  @keyframes marquee {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  @keyframes marqueeR {
    from { transform: translateX(-50%); }
    to   { transform: translateX(0); }
  }
  @keyframes clipReveal {
    from { clip-path: inset(0 100% 0 0); }
    to   { clip-path: inset(0 0% 0 0); }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-10px); }
  }
  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position:  200% center; }
  }
  @keyframes drawStroke {
    from { stroke-dashoffset: 500; }
    to   { stroke-dashoffset: 0; }
  }
  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.94); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-12px); }
    to   { opacity: 1; transform: translateY(0); }
  }

5. CUSTOM SCROLLBAR:
  ::-webkit-scrollbar { width: 4px; height: 4px; }
  ::-webkit-scrollbar-track { background: var(--cream); }
  ::-webkit-scrollbar-thumb { background: var(--champagne); border-radius: 2px; }
  ::-webkit-scrollbar-thumb:hover { background: var(--obsidian); }

6. TEXT SELECTION:
  ::selection { background: var(--obsidian); color: var(--cream); }

7. FOCUS STYLES:
  :focus-visible { outline: 1.5px solid var(--obsidian); outline-offset: 3px; border-radius: 1px; }

8. IMAGE DEFAULTS:
  img { max-width: 100%; display: block; }

9. UTILITY CLASSES:
  .container-xl { max-width: 1400px; margin: 0 auto; padding: 0 clamp(1.5rem, 5vw, 5rem); }
  .container-lg { max-width: 1200px; margin: 0 auto; padding: 0 clamp(1.5rem, 4vw, 4rem); }
  .section-padding { padding: clamp(5rem, 10vw, 10rem) 0; }
  .label-text { font-family: var(--font-body); font-size: 10px; font-weight: 500; letter-spacing: 0.35em; text-transform: uppercase; }
  .display-text { font-family: var(--font-display); }

Write the complete file now.
```

---

## ⚡ UPGRADE 2 — tailwind.config.ts: Brand Token Extension

### Cursor Prompt:
```
UPGRADE TASK: Replace tailwind.config.ts completely for MONÉT Beauty Lounge brand tokens.

Write complete tailwind.config.ts with these extensions:

colors:
  cream: { DEFAULT: '#F4F0E6', dark: '#EAE4D6', light: '#FAF8F2' }
  champagne: { DEFAULT: '#C5B396', light: '#D9CDB8', dark: '#A89070' }
  obsidian: { DEFAULT: '#1A1A1A', 2: '#2C2C2C' }
  stone: '#8A8070'
  whisper: '#B8AF9E'
  parchment: '#EAE4D6'

fontFamily:
  display: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif']
  body: ['Montserrat', 'system-ui', 'sans-serif']

animation:
  'fade-up': 'fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards'
  'fade-in': 'fadeIn 0.7s ease forwards'
  'line-grow': 'lineGrow 0.7s cubic-bezier(0.16,1,0.3,1) forwards'
  'clip-reveal': 'clipReveal 1s cubic-bezier(0.16,1,0.3,1) forwards'
  'float': 'float 8s ease-in-out infinite'
  'marquee': 'marquee 40s linear infinite'
  'marquee-r': 'marqueeR 40s linear infinite'
  'scale-in': 'scaleIn 0.6s cubic-bezier(0.16,1,0.3,1) forwards'
  'draw': 'drawStroke 2s ease forwards'
  'grain': 'grain 0.4s steps(2) infinite'
  'shimmer': 'shimmer 3s ease infinite'

keyframes: (all keyframes matching globals.css above)

spacing: add 18: '4.5rem', 22: '5.5rem', 26: '6.5rem', 30: '7.5rem' for editorial spacing

Show complete file.
```

---

## ⚡ UPGRADE 3 — layout.tsx: Fonts + Custom Cursor + Page Transitions

### Cursor Prompt:
```
UPGRADE TASK: Replace /app/layout.tsx completely with award-winning version.

Changes needed:

1. FONTS — Import from next/font/google:
   - Cormorant_Garamond: weights 300,400,500,600 + italic variants, variable --font-display
   - Playfair_Display: weights 400,500,700 + italic, variable --font-display-alt
   - Montserrat: weights 300,400,500,600, variable --font-body
   Apply all 3 as CSS variables on <html>

2. METADATA:
   title: "MONÉT Beauty Lounge | Luxury Hair, Skin & Bridal in Lahore"
   description: "Lahore's premier luxury beauty lounge. Expert bridal makeup, hair treatments, skincare & aesthetics. Book your transformation today."
   keywords: bridal makeup lahore, luxury salon lahore, hair treatment lahore, hydrafacial lahore
   openGraph: { title, description, type: 'website', locale: 'en_PK' }

3. CUSTOM CURSOR (award-winning detail):
   Create an inline <CustomCursor /> component inside layout.tsx:
   - Two elements: a small 6px dot (obsidian fill) and a 32px ring (obsidian stroke, 1px)
   - The dot follows cursor immediately (no lag)
   - The ring follows with a 0.15s lerp delay (smooth trailing effect)
   - On hovering <a>, <button>: ring expands to 48px and fills with champagne (#C5B396) at 0.15 opacity
   - Use useEffect + requestAnimationFrame + mousemove listener
   - Hide default cursor site-wide: cursor: none on body (when cursor is active)
   - On mobile/touch: don't render (check navigator.maxTouchPoints)
   
   CSS for cursor:
   .cursor-dot { width:6px; height:6px; background:var(--obsidian); border-radius:50%; position:fixed; pointer-events:none; z-index:99999; transform:translate(-50%,-50%); transition:opacity 0.3s; }
   .cursor-ring { width:32px; height:32px; border:1px solid var(--obsidian); border-radius:50%; position:fixed; pointer-events:none; z-index:99998; transform:translate(-50%,-50%); transition:width 0.3s var(--ease-out), height 0.3s var(--ease-out), background 0.3s, border-color 0.3s; }
   .cursor-ring.hovering { width:48px; height:48px; background:rgba(197,179,150,0.15); border-color:var(--champagne); }

4. PAGE TRANSITION WRAPPER:
   Wrap {children} in:
   <div 
     className="animate-fade-in"
     style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
   >
     {children}
   </div>

5. GLOBAL COMPONENTS rendered in layout:
   <Navbar />
   <CustomCursor />  ← inline
   <main>{/* children wrapper */}</main>
   <Footer />
   <FloatingWhatsApp />
   <ScrollToTop />
   <Toaster position="top-right" toastOptions={{
     style: {
       background: '#1A1A1A', color: '#F4F0E6',
       fontFamily: 'Montserrat', fontSize: '12px',
       letterSpacing: '0.08em', borderRadius: '4px',
       border: '1px solid rgba(244,240,230,0.1)'
     }
   }} />

Show complete layout.tsx with all TypeScript.
```

---

## ⚡ UPGRADE 4 — Navbar: Award-Winning Editorial Header

### Cursor Prompt:
```
UPGRADE TASK: Completely replace /components/Navbar.tsx 

The current navbar is generic. Replace with an award-winning 2026/27 version.

━━━ DESIGN REFERENCE ━━━
Study: Lemaire.fr, Jacquemus.com, TheRow.com
Concept: "A fashion house editorial header"
The logo is CENTERED always. Links float to sides.

━━━ DESKTOP (viewport ≥ 1024px) ━━━

Container: fixed, top 0, full width, z-index: 100, height: 76px
Padding: 0 clamp(2rem, 5vw, 5rem)

DEFAULT STATE (on hero — cream bg):
  background: transparent
  border-bottom: 1px solid transparent

SCROLLED STATE (after 80px):
  background: rgba(244,240,230,0.92)
  backdrop-filter: blur(24px) saturate(180%)
  border-bottom: 1px solid rgba(26,26,26,0.08)
  Transition: all 0.5s cubic-bezier(0.16,1,0.3,1)

3-ZONE LAYOUT (CSS Grid: auto 1fr auto):

ZONE LEFT:
  Nav links: Services · Gallery · About
  Font: Montserrat, 11px, weight 500, tracking: 0.12em, uppercase
  Color: #8A8070 (stone) default
  Hover: #1A1A1A (obsidian), transition 0.25s
  Active: #1A1A1A + a 2px champagne underline via ::after (absolute bottom-0)
  NO pills, NO backgrounds — pure typographic links

ZONE CENTER (absolute, centered):
  The MONÉT Logo — recreate as JSX with exact brand aesthetics:

  <div style={{ textAlign: 'center' }}>
    {/* Botanical SVG — simplified line art of logo flower */}
    <svg width="24" height="24" viewBox="0 0 48 48" fill="none" style={{ margin: '0 auto 4px' }}>
      {/* 8 petals using path elements */}
      {[0,45,90,135,180,225,270,315].map(r => (
        <path
          key={r}
          d="M24 6 C26 14 27 19 24 24 C21 19 22 14 24 6 Z"
          stroke="#1A1A1A" strokeWidth="0.75" fill="none" strokeLinecap="round"
          transform={`rotate(${r} 24 24)`}
        />
      ))}
      <circle cx="24" cy="24" r="1.2" fill="#1A1A1A" opacity="0.5"/>
    </svg>
    {/* MONÉT wordmark */}
    <div style={{
      fontFamily: 'Cormorant Garamond, serif',
      fontSize: '18px', fontWeight: 500,
      letterSpacing: '0.18em',
      color: '#1A1A1A', lineHeight: 1
    }}>MONÉT</div>
    {/* Beauty Lounge subtitle */}
    <div style={{
      fontFamily: 'Montserrat, sans-serif',
      fontSize: '8px', fontWeight: 400,
      letterSpacing: '0.35em',
      color: '#8A8070', textTransform: 'uppercase',
      marginTop: '2px'
    }}>Beauty Lounge</div>
  </div>

ZONE RIGHT:
  Contact · Book Now
  "Book Now" button:
    background: #1A1A1A
    color: #F4F0E6
    padding: 10px 24px
    border-radius: 2px (barely rounded)
    font: Montserrat, 11px, weight 500, tracking 0.15em, uppercase
    hover: background #2C2C2C + box-shadow: 0 4px 20px rgba(26,26,26,0.25)
    transition: all 0.3s var(--ease-out)

━━━ MOBILE (< 1024px) ━━━

Height: 64px
Left side: Custom menu trigger:
  NOT a hamburger icon. Instead:
  Two horizontal lines (16px and 10px, different widths, stacked)
  Each: 1px height, obsidian background
  Gap: 5px
  Label "MENU" below in Montserrat 8px tracking 0.3em — appears on hover

Center: Smaller logo (botanical SVG 18px + "MONÉT" text 16px)
Right: "BOOK" text link (Montserrat 10px, obsidian, tracking 0.2em)

━━━ MOBILE FULLSCREEN OVERLAY MENU ━━━

Trigger: MENU button
Animation: curtain drops down — clip-path: inset(0 0 100% 0) → inset(0 0 0% 0)
Duration: 0.7s cubic-bezier(0.16,1,0.3,1)
Background: #F4F0E6 (cream — immersive brand moment)

Content layout:
  Top bar: Logo center, "CLOSE" right (Montserrat 9px, obsidian, tracking 0.3em)
  
  Vertical nav links (center-aligned, staggered framer-motion entry):
    Home
    Services
    Gallery
    About
    Contact
    — Book Appointment — (this one is different: obsidian background pill)

  Each link:
    Font: Cormorant Garamond, 52px, weight 300, italic, obsidian
    Hover: color champagne (#C5B396), translateX(6px)
    framer-motion: initial opacity 0 translateY 20px → animated in with 0.12s stagger
    
  Bottom bar inside overlay:
    Left: "+92 300 123 4567" — Montserrat 10px, stone
    Right: "Instagram · WhatsApp" — Montserrat 10px, stone

Use framer-motion AnimatePresence for open/close.
All Next.js <Link> components.
Show complete TypeScript.
```

---

## ⚡ UPGRADE 5 — Hero Section: Cinematic Editorial

### Cursor Prompt:
```
UPGRADE TASK: Completely replace /components/home/HeroSection.tsx

Current hero is generic. Replace with an award-winning cinematic editorial hero.

━━━ CONCEPT ━━━
"The first spread of Vogue Arabia's beauty issue"
Light, warm, Parisian. NOT dark. The cream (#F4F0E6) IS the hero.
References: Jacquemus SS2026, Chloé website, Charlotte Tilbury homepage

━━━ LAYOUT ━━━
Height: 100svh
Background: 
  Base: radial-gradient(ellipse 80% 80% at 25% 40%, #F4F0E6 0%, #EDE7D6 50%, #FAF8F2 100%)
  This creates a soft warm vignette effect

Layout: Asymmetric two-column (CSS Grid: 52% 48%)

━━━ LEFT COLUMN (content) ━━━
Vertical center with padding-left: clamp(2rem, 8vw, 9rem)

Element 1 — Pre-heading label:
  Layout: flex align-center, gap 12px
  Left: 40px line (1px, #C5B396, animated scaleX 0→1 on load)
  Text: Montserrat, 9px, weight 500, tracking 0.45em, uppercase, stone (#8A8070)
  Content: "LAHORE · PAKISTAN · LUXURY BEAUTY"
  Animation: fadeIn, delay 0.2s

Element 2 — Main Heading (3 separate lines, each animates independently):
  ALL font: Cormorant Garamond, weight 300
  
  Line 1: "Redefining"
    Size: clamp(52px, 7vw, 88px)
    Style: normal (not italic)
    Color: #1A1A1A
    animation: fadeUp delay 0.35s

  Line 2: "Beauty"
    Size: clamp(72px, 10vw, 120px)
    Style: ITALIC
    Color: #1A1A1A  
    Letter-spacing: -0.02em
    animation: fadeUp delay 0.5s

  Line 3: "in Lahore."
    Size: clamp(52px, 7vw, 88px)
    Style: normal
    Color: #1A1A1A
    animation: fadeUp delay 0.65s

Element 3 — Champagne divider:
  Width: 80px, height: 1px, background: #C5B396
  margin: 32px 0
  animation: lineGrow delay 0.8s

Element 4 — Subtext:
  "Luxury hair, bridal artistry, skin aesthetics & more — crafted for the women of Lahore."
  Font: Montserrat, 14px, weight 300, stone (#8A8070), line-height 1.9, max-width 380px
  animation: fadeUp delay 0.95s

Element 5 — CTA row:
  gap: 12px, display: flex, flex-wrap: wrap

  Button 1 "Book Appointment":
    background: #1A1A1A, color: #F4F0E6
    padding: 15px 36px, border-radius: 2px
    font: Montserrat, 11px, weight 500, tracking 0.18em, uppercase
    hover: background #2C2C2C + shadow 0 8px 32px rgba(26,26,26,0.2)
    Right: arrow icon →

  Button 2 "WhatsApp Consult":
    background: transparent
    border: 1px solid rgba(26,26,26,0.3)
    color: #1A1A1A
    Same font spec
    hover: border-color #1A1A1A

  animation: fadeUp delay 1.1s

Element 6 — Social proof (margin-top: 48px):
  "⭐ 4.9 · 2,000+ Women · Certified Experts"
  Font: Montserrat, 10px, weight 400, tracking 0.12em, whisper (#B8AF9E)
  animation: fadeIn delay 1.3s

━━━ RIGHT COLUMN (image composition) ━━━

This is where the design becomes EXTRAORDINARY:

Main image container:
  Width: 100%, height: 88vh
  border-radius: 0 0 0 120px (only bottom-left rounded — asymmetric)
  overflow: hidden
  clip-path: initially inset(0 0 100% 0), animates to inset(0 0 0% 0) — curtain reveal
  Animation delay: 0.3s, duration: 1.2s, ease: cubic-bezier(0.16,1,0.3,1)
  
  Image: https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&q=90
  Next.js Image, objectFit: cover, objectPosition: center top

Floating stat card #1 (absolute, bottom-left offset -24px left, -20px bottom):
  Background: #FFFFFF
  Border: 1px solid rgba(26,26,26,0.08)
  Border-radius: 16px
  Padding: 18px 24px
  Box-shadow: 0 20px 60px rgba(26,26,26,0.1)
  Content:
    "2,000+" — Cormorant Garamond, 32px, italic, obsidian
    "Happy Clients" — Montserrat, 9px, tracking 0.25em, stone
  Animation: float (8s loop), fadeUp delay 1.4s

Floating stat card #2 (absolute, top: 20%, right: -16px):
  Same card style
  Content: "⭐ 4.9" + "Google Rating"
  Animation: float (8s loop, starts at 4s), fadeUp delay 1.6s

━━━ SCROLL INDICATOR ━━━
Bottom center, absolute position
  Vertical: animated line (60px, champagne, top-to-bottom fill animation, 2s loop)
  Below: "SCROLL" in Montserrat 8px, tracking 0.4em, stone
  Disappears after user scrolls 150px

━━━ BACKGROUND BOTANICAL (decorative) ━━━
Large SVG flower (same logo motif):
  Position: absolute, right: -8%, top: 5%
  Size: 55vw × 55vw
  Stroke: rgba(26,26,26,0.04), fill: none
  strokeWidth: 0.5
  z-index: 0 (behind content)
  animation: float 12s ease-in-out infinite

Show complete TypeScript + framer-motion code.
```

---

## ⚡ UPGRADE 6 — Marquee Strip + Services Bento Grid

### Cursor Prompt:
```
UPGRADE TASK: Replace the services overview section with 2026/27 award-winning versions.

Create two components:

━━━ COMPONENT A: /components/home/MarqueeStrip.tsx ━━━

Design:
  Full-width, height: 48px
  Background: #1A1A1A (obsidian — high contrast between cream hero)
  border-top: 1px solid rgba(244,240,230,0.06)

Two rows (scrolling opposite directions, pure CSS):

Row 1 scrolls LEFT:
  Text: "THE BRIDAL STUDIO ✦ HAIR LOUNGE ✦ SKIN & AESTHETICS ✦ BODY & SPA ✦ LASER TREATMENTS ✦ NAIL STUDIO ✦ "
  Repeated 4× for seamless loop

Row 2 scrolls RIGHT (animation: marqueeR):
  Same text

Text style:
  Montserrat, 10px, weight 500, tracking 0.3em, uppercase
  Color row 1: rgba(244,240,230,0.55)
  Color row 2: rgba(244,240,230,0.35)
  ✦ separator: #C5B396 (champagne), full opacity

CSS only — no JS:
  .marquee-inner { display: flex; width: max-content; white-space: nowrap; }
  Row 1 class: animate-marquee
  Row 2 class: animate-marquee-r

Row separator: 1px rgba(244,240,230,0.06)

━━━ COMPONENT B: /components/home/ServicesBento.tsx ━━━

CONCEPT: "2026/27 Bento editorial mosaic — award-winning category showcase"
Background: #FAF8F2 (cream-light)
Section padding: 120px 0

SECTION HEADER (centered):
  Montserrat label: "SIGNATURE SERVICES" — 9px, tracking 0.45em, champagne, uppercase
  60px champagne line animated on scroll (framer-motion useInView)
  Heading: Cormorant Garamond, 72px, weight 300:
    "Our" (normal) " Craft" (italic) — inline
  Subtext: Montserrat, 14px, weight 300, stone, max-width 400px

BENTO GRID (CSS Grid — exact areas):

Desktop layout:
  grid-template-columns: 2fr 1.2fr 1fr
  grid-template-rows: 340px 220px 280px
  gap: 14px

  Cell 1: THE BRIDAL STUDIO — spans row 1 col 1
  Cell 2: HAIR LOUNGE — spans row 1 col 2
  Cell 3: SKIN — spans rows 1-2 col 3
  Cell 4: BODY & SPA — row 2 col 1
  Cell 5: LASER — row 2 col 2
  Cell 6: NAILS — row 3 col 1-2 (wide)
  ...adjust with grid-template-areas

CARD DESIGN (each card):
  position: relative, overflow: hidden, border-radius: 16px
  
  Background image: Next.js Image, objectFit cover, full bleed
  
  Color overlay:
    DEFAULT: linear-gradient(to top, rgba(26,26,26,0.75) 0%, rgba(26,26,26,0.1) 55%, transparent 100%)
    HOVER: linear-gradient(to top, rgba(26,26,26,0.88) 0%, rgba(26,26,26,0.3) 60%, transparent 100%)

  Content (absolute, bottom 0, padding 28px, full width):
    Service number: Montserrat, 9px, tracking 0.35em, rgba(244,240,230,0.45), uppercase — "01"
    Service name: Cormorant Garamond, 28px, italic, #F4F0E6, line-height 1.1
    Description (DEFAULT: hidden, HOVER: visible with translateY animation):
      Montserrat, 12px, weight 300, rgba(244,240,230,0.75), line-height 1.6
    "Explore →" link: Montserrat 10px, tracking 0.15em, #C5B396

  HOVER STATE:
    image scale: 1.06, transition: 0.7s cubic-bezier(0.16,1,0.3,1)
    description: translateY 0 from 8px, opacity 1 from 0, transition 0.4s
    border: 1px solid rgba(197,179,150,0.3) appears
    box-shadow: 0 24px 60px rgba(26,26,26,0.2)

6 services with these Unsplash images:
  Bridal:  https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=85
  Hair:    https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&q=85
  Skin:    https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=85
  Body:    https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=85
  Laser:   https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=800&q=85
  Nails:   https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=85

Mobile: Single column, each card 260px height, border-radius 12px.
Framer-motion: staggered viewport entry (each card fadeUp with 0.1s stagger).
Show complete TypeScript.
```

---

## ⚡ UPGRADE 7 — Bridal Highlight + Stats + Portfolio

### Cursor Prompt:
```
UPGRADE TASK: Create/replace three homepage sections with award-winning 2026/27 design.

━━━ SECTION A: Bridal Highlight (/components/home/BridalHighlight.tsx) ━━━

CONCEPT: "The crown jewel section — this is where MONÉT wins over Canvas Salon"
This section must feel like a Vogue bridal editorial.

Layout: Full-width, min-height: 100vh
Background: #1A1A1A (obsidian — maximum contrast)

Design: Overlapping editorial composition (NOT standard two-column)

Left (60%): Large portrait image
  Height: 90vh
  border-radius: 0 120px 120px 0 (pill on right side only)
  overflow: hidden
  Image: https://images.unsplash.com/photo-1519741497674-611481863552?w=1000&q=90
  
  HOVER on image: subtle scale 1.03, very slow 1s transition
  
  Overlapping badge (absolute, top-right of image, offset 40px right):
    Background: #F4F0E6 (cream)
    Border: 1px solid rgba(26,26,26,0.12)
    Border-radius: 100px (pill)
    Padding: 12px 24px
    Content: "THE BRIDAL STUDIO" — Montserrat 9px tracking 0.3em uppercase
    Floats with animation

Right (40%): Content panel (padding-left: 60px, vertical center)
  All text color: #F4F0E6 (ivory on dark)
  
  Label: "BRIDAL EXCELLENCE" — Montserrat 9px, tracking 0.45em, #C5B396
  
  Heading: Cormorant Garamond, 64px, weight 300, line-height 1.05
    "Your Perfect" (normal, line 1)
    "Bridal Look" (italic, line 2)
    "Awaits." (normal, line 3, smaller: 48px)
  
  Divider: 60px champagne line
  
  Body: Montserrat, 15px, weight 300, rgba(244,240,230,0.7), line-height 1.9
  "From Mehndi to Walima — we craft every look with precision. Featuring international makeup artists, premium imported products, and a private bridal suite experience."
  
  4 bridal packages (list):
    Each row: small champagne dot + text
    — Engagement Photoshoot Makeup
    — Mehndi + Bridal Full Package
    — Barat & Walima Looks
    — Pre-Bridal Skincare Regime
    Font: Montserrat 13px, weight 300, rgba(244,240,230,0.75)
    
  CTA button: cream background, obsidian text — "Explore Bridal Packages"
  
  Small print: "Bridal consultations by appointment only" — Montserrat 10px, rgba(244,240,230,0.4)

━━━ SECTION B: Stats (/components/home/StatsSection.tsx) ━━━

Background: #F4F0E6 (logo cream)
Padding: 80px 0
Overflow: hidden (for the large decorative number)

Layout: horizontal row with large numbers

Decorative background element:
  "MONÉT" text in Cormorant Garamond, 25vw, weight 300, opacity 0.04, obsidian
  Positioned absolute, center, letter-spacing: 0.05em
  This creates a luxury watermark effect

4 stats (flex row, centered, with 1px parchment vertical dividers):
  2,000+ / Happy Clients
  12 / Years of Excellence
  4.9★ / Google Rating
  6 / Expert Services

Each stat:
  Number: Cormorant Garamond, 72px, weight 300, italic, obsidian
  Suffix: same font, 36px
  Label: Montserrat, 9px, tracking 0.35em, uppercase, stone
  framer-motion count-up animation on viewport enter

━━━ SECTION C: Portfolio Horizontal Strip (/components/home/PortfolioStrip.tsx) ━━━

Background: #FAF8F2
Section header: "OUR PORTFOLIO" label + "Real Transformations" heading

Horizontal film-strip gallery:
  overflow-x: auto (styled, no scrollbar shown)
  display: flex, gap: 12px, padding: 0 clamp(2rem, 5vw, 5rem)
  scroll-snap-type: x mandatory
  
  8 images:
    Each: scroll-snap-align start
    Width: alternating 280px / 340px
    Height: 400px
    border-radius: 14px
    overflow: hidden
    flex-shrink: 0

  Image hover:
    scale 1.04, transition 0.5s ease
    Dark overlay fades in from bottom
    Category badge appears (bottom-left)

  Custom scroll wheel → horizontal (useEffect + wheel listener):
    el.scrollLeft += event.deltaY * 2

  Progress bar (below gallery):
    Full-width div, height: 2px, background: rgba(26,26,26,0.08)
    Inner fill div: obsidian, width updates with scroll progress via JS
    
  Caption: "← scroll to explore →" — Montserrat 9px, stone, center

Show complete TypeScript for all three.
```

---

## ⚡ UPGRADE 8 — Testimonials + Final CTA

### Cursor Prompt:
```
UPGRADE TASK: Replace testimonials and final CTA sections.

━━━ TESTIMONIALS (/components/home/Testimonials.tsx) ━━━

CONCEPT: "Fashion magazine pull-quote editorial"
Background: #FFFFFF (pure white — contrast against cream page)
Padding: 120px 0

Large decorative element:
  Giant quotation mark "
  Cormorant Garamond, 400px, weight 300, rgba(26,26,26,0.03)
  Absolute, top: -60px, left: 5%
  z-index: 0

Grid layout (3 columns on desktop):
  Col 1 (40%): FEATURED testimonial card (tall)
  Col 2 (30%): Two stacked cards
  Col 3 (30%): One card + botanical decoration

FEATURED CARD:
  Background: #F4F0E6 (cream)
  Border: 1px solid #EAE4D6 (parchment)
  Border-radius: 24px
  Padding: 48px 40px

  5 star SVGs (solid obsidian fill, 14px each, gap 3px)
  
  Quote: Cormorant Garamond, 22px, italic, weight 300, obsidian, line-height 1.75
  "An absolutely transformative experience. My bridal look was everything I dreamed of — the team at MONÉT understood my vision perfectly."

  Champagne divider (40px)

  Client row (flex, align-center, gap: 12px):
    Avatar: 44px circle, background: parchment, Montserrat initial letter centered
    OR: next/image if photo available
    Name: Cormorant Garamond, 18px, italic, obsidian
    Service: Montserrat 9px, tracking 0.2em, uppercase, stone
    Right: Verified badge (Montserrat 9px, champagne, "✓ Verified")

SMALL CARDS:
  Background: #FAF8F2, border: 1px solid rgba(26,26,26,0.08)
  Border-radius: 16px, padding: 28px 24px
  
Client names (Pakistani):
  "Zara Ahmed" — Full Bridal Package
  "Amna Malik" — Keratin Treatment
  "Sara Hussain" — HydraFacial Deep Clean
  "Hira Baig" — Dental Whitening
  "Nadia Sheikh" — Luxury Nail Studio

Auto-rotate featured: useState + 5s interval + framer-motion AnimatePresence crossfade

━━━ FINAL CTA (/components/home/FinalCTA.tsx) ━━━

CONCEPT: "The final invitation in a couture lookbook"
Height: min 90vh
Background: #1A1A1A (obsidian)
Padding: 120px 0

Large botanical SVG (logo flower):
  200×200px, centered, stroke: rgba(244,240,230,0.1), fill: none
  strokeWidth: 0.6
  animation: float 10s ease-in-out infinite + slow rotate (40s)

Centered text content:

  Label: "BEGIN YOUR TRANSFORMATION" — Montserrat 9px, tracking 0.45em, #C5B396
  
  Heading (2 lines):
    "Ready for Your" — Cormorant Garamond, 80px, weight 300, #F4F0E6
    "Transformation?" — Cormorant Garamond, 80px, weight 300, ITALIC, #F4F0E6
    letter-spacing: -0.02em, line-height: 1

  Subtext: Montserrat, 15px, weight 300, rgba(244,240,230,0.55), max-width 380px

  Buttons row:
    "Book Appointment" — cream bg, obsidian text (inverted)
    "WhatsApp Consult" — outline, cream border and text
    Same padding/font as site-wide buttons

  Meta: "+92 300 123 4567 · hello@monetbeauty.pk" — Montserrat 10px, rgba(244,240,230,0.3)

All content: framer-motion staggered viewport entry
Show complete TypeScript.
```

---

## ⚡ UPGRADE 9 — Services Page (Full Rebuild)

### Cursor Prompt:
```
UPGRADE TASK: Fully replace /app/services/page.tsx and /components/services/

━━━ PAGE HERO ━━━

Background: #F4F0E6 (logo cream)
Height: 55vh

Left 55%: Content
  Breadcrumb: Montserrat 10px, stone — "Home / Services"
  Heading: Cormorant Garamond, 88px, weight 300, italic: "Our Services"
  Subtext: Montserrat 14px, weight 300, stone, max-width 360px
  Stat badge: "18 Services across 6 categories" — Montserrat 10px, tracking 0.2em, champagne

Right 45%: Decorative
  Large botanical SVG: 280×280px, opacity: 0.15, obsidian stroke
  animation: float 10s + slow rotate 60s

━━━ STICKY FILTER NAVIGATION ━━━

Background: rgba(244,240,230,0.95), backdrop-blur: 20px
Border-bottom: 1px solid rgba(26,26,26,0.08)
Height: 52px
top: 76px (below navbar)

Filter items (ZERO pill backgrounds — pure typographic 2026/27 style):
  Montserrat, 11px, weight 500, tracking 0.2em, uppercase
  Inactive: stone (#8A8070)
  Active: obsidian + 2px champagne underline that SLIDES (framer-motion layoutId="tab-indicator")
  Hover: obsidian, 0.25s transition

Tabs: All · Bridal · Hair · Skin · Body · Nails · Laser

━━━ SERVICES GRID ━━━

Background: #FAF8F2, padding: 80px 0
Grid: 3 col desktop, 2 col tablet, 1 col mobile, gap: 20px

CARD DESIGN (2026/27 — not generic):
  Background: #FFFFFF
  Border: 1px solid rgba(26,26,26,0.07)
  Border-radius: 20px
  Overflow: hidden

  Image area: 200px height
    Image: next/image, objectFit cover
    HOVER: image scale(1.06), 0.6s ease
    
    Category pill (top-left, inside image):
      Background: rgba(244,240,230,0.92)
      Backdrop-blur: 8px
      Border: none
      Font: Montserrat 9px, tracking 0.2em, uppercase, obsidian
      Padding: 5px 14px, border-radius: 100px

  Content area: padding 22px 24px

    Title: Cormorant Garamond, 22px, italic, weight 400, obsidian, line-height 1.2
    Description: Montserrat, 12px, weight 300, stone, line-height 1.65, 2 lines max, ellipsis
    
    Bottom row (margin-top: 20px, border-top: 1px solid rgba(26,26,26,0.06), padding-top: 16px):
      Left: "From PKR 2,500" — Montserrat 11px, weight 500, champagne
      Right: "Book →" — Montserrat 10px, weight 500, tracking 0.12em, obsidian
             On click: navigate to /booking?service=ServiceName
             Hover: translateX(4px)

  CARD HOVER:
    Border: rgba(26,26,26,0.15)
    Box-shadow: 0 16px 48px rgba(26,26,26,0.1)
    Transform: translateY(-2px)

Filter animation:
  framer-motion layout + AnimatePresence
  Exit: opacity 0, scale 0.96
  Enter: opacity 1, scale 1
  Duration: 0.3s

━━━ /lib/services-data.ts ━━━

Create array of 18 services:
Interface: { id, name, category, description, price, duration, imageUrl }
Categories: bridal | hair | skin | body | nails | laser

Include realistic service names:
BRIDAL (3): Full Bridal Package, Engagement Makeup, Mehndi Party Look
HAIR (3): Balayage & Color, Keratin Treatment, Haircut & Style
SKIN (3): HydraFacial Deep Clean, Dermaplaning, Anti-Aging Facial
BODY (3): Luxury Body Wax, Mani & Pedi Combo, Body Spa Ritual
NAILS (3): Gel Nail Extensions, Nail Art Design, Spa Manicure
LASER (3): Full Body Laser, Underarm Laser, Face Laser

Show complete code with all 18 services.
```

---

## ⚡ UPGRADE 10 — Booking Engine: Multi-Step Typeform Style

### Cursor Prompt:
```
UPGRADE TASK: Completely rebuild /app/booking/page.tsx as a 2026/27 multi-step booking experience.

CONCEPT: "Booking at Aman Resorts — unhurried, elegant, personalized"
References: Typeform aesthetic, Aman booking, Net-a-Porter checkout

━━━ LAYOUT ━━━
Background: #FAF8F2
Two columns (60/40):
Left: Multi-step form
Right: Sticky info panel

━━━ LEFT SIDE: MULTI-STEP FORM ━━━

Progress indicator (top of form):
  4 steps shown as a thin progress bar:
    Background: rgba(26,26,26,0.08), height: 2px
    Active fill: #1A1A1A, animated with CSS transition
    Below bar: Step labels (Montserrat 9px, tracking 0.2em): "Category · Service · Schedule · Details"
    Current step highlighted in obsidian, others in stone

STEP 1: Category Selection
  Heading: Cormorant Garamond, 48px, italic: "What are you here for?"
  
  Category cards (2×3 grid):
    Each card: cream background, parchment border, border-radius 12px, padding: 28px 20px
    Center content:
      Botanical-style SVG icon (simple line art, 32px, obsidian stroke)
      Category name: Cormorant Garamond, 20px, italic
      Description: Montserrat 11px, stone, 1 line
      
    SELECTED state:
      Border: 2px solid #1A1A1A
      Background: #F4F0E6 (cream)
      Box-shadow: 0 8px 32px rgba(26,26,26,0.12)
      Checkmark: small circle top-right, obsidian with cream check
      
    Hover: border rgba(26,26,26,0.25), translateY(-2px)
    
  Categories: The Bridal Studio · Hair Lounge · Skin & Aesthetics · Body & Spa · Nails · Laser

STEP 2: Service Selection
  Heading: "Choose your service"
  
  Service list (vertical, filtered by category):
    Each item: flex row, full width
    Left: service name (Cormorant Garamond 20px italic) + description (Montserrat 12px stone)
    Right: price (Montserrat 12px weight 500 champagne) + duration (Montserrat 10px stone)
    
    Border-bottom: 1px rgba(26,26,26,0.06) between items
    Hover: background rgba(244,240,230,0.5), transiton 0.2s
    Selected: background #F4F0E6, left border 2px solid obsidian
    
STEP 3: Date & Time
  Heading: "Pick your perfect time"

  DATE PICKER (custom, NOT browser default):
    Use react-day-picker with full custom CSS:
      Container: white card, border 1px parchment, border-radius 16px, padding 24px
      Month header: Cormorant Garamond, 18px, italic
      Day cells: Montserrat 13px, 36px circles
      Today: parchment border
      Selected: #1A1A1A background, #F4F0E6 text
      Hover: #EAE4D6 background
      Disabled (past dates): opacity 0.3
      
  TIME SLOTS (below calendar):
    Label: "Available Times" — Montserrat 9px, tracking 0.3em, stone
    Grid of time pills (flex wrap, gap 8px):
      10:00 AM, 11:00 AM, 12:00 PM, 1:00 PM, 2:00 PM,
      3:00 PM, 4:00 PM, 5:00 PM, 6:00 PM
      
      Unselected: border 1px parchment, Montserrat 12px, stone, padding 9px 18px, border-radius 100px
      Selected: background #1A1A1A, color #F4F0E6, border obsidian
      Hover: border obsidian

STEP 4: Client Details
  Heading: "Tell us about you"
  
  ALL inputs: 2026/27 underline-only style:
    No border box. Bottom line only: 1px solid rgba(26,26,26,0.15)
    Floating label: Montserrat 10px, tracking 0.25em, uppercase, animates up on focus/fill
    Input text: Cormorant Garamond, 18px, weight 400, obsidian
    Focus: bottom line becomes 2px, obsidian, animated scaleX from left
    
  Fields: Full Name, Phone, Email (optional), Special Notes (textarea)
  
STEP NAVIGATION:
  "Continue →" button (obsidian, full width, same style as site)
  "← Back" text link (Montserrat 11px, stone, underline)
  Step counter: "Step 2 of 4" — Montserrat 9px, stone

━━━ RIGHT SIDE: Info Panel ━━━

Background: #F4F0E6 (cream)
Border-radius: 0 (full height column)
Padding: 80px 48px

Content:
  Botanical SVG logo flower: 56px, opacity: 0.2
  "MONÉT Beauty Lounge" — Cormorant Garamond, 22px, italic
  Champagne divider (40px)
  
  Selected service summary (updates as steps progress):
    Shows: category, service name, date, time as they're selected
    Each: Montserrat 11px, weight 500 label + Cormorant Garamond 16px value
    
  Contact info with thin separators
  "What to Expect" list (4 items, champagne checkmarks)
  WhatsApp button (green, Montserrat 11px uppercase)

━━━ SUCCESS STATE ━━━
Full-page animated overlay:
  Background: #F4F0E6 (cream)
  Botanical SVG: animated drawStroke (stroke-dashoffset animation)
  Heading: Cormorant Garamond, 52px, italic — "Thank You, [Name]"
  Booking summary card: obsidian background, cream text
  "We'll confirm on WhatsApp within 1 hour"
  "Back to Home" — Montserrat 10px, underline

━━━ SERVER ACTION: /app/actions/booking.ts ━━━
'use server' — validates, inserts all fields into Supabase bookings table with schema from the spec document (client_name, phone_number, service_category, specific_service, appointment_date, appointment_time, status:'pending', special_notes)

Show complete TypeScript code.
```

---

## ⚡ UPGRADE 11 — Gallery + Contact/FAQ Pages

### Cursor Prompt:
```
UPGRADE TASK: Rebuild gallery and contact pages.

━━━ GALLERY (/app/gallery/page.tsx) ━━━

Hero: 45vh, cream bg, same editorial hero pattern
  Split: heading left "Our Portfolio", floating images right (3 overlapping, decorative)

Filter bar: same champagne-underline style as services

MASONRY GRID (CSS columns — no JS library):
  Desktop: 4 columns, gap: 10px, column-gap: 10px
  Each image: break-inside: avoid, margin-bottom: 10px, border-radius: 12px
  
  Image hover:
    Scale(1.02), box-shadow: 0 20px 50px rgba(26,26,26,0.15)
    Overlay fades in: gradient bottom
    Category badge (Montserrat 9px, cream, champagne bg, pill)

LIGHTBOX (/components/gallery/Lightbox.tsx):
  Background: rgba(26,26,26,0.97), backdrop-blur: 12px
  Image: max 85vw/88vh, border-radius 8px
  Nav arrows: 44px circles, rgba(244,240,230,0.1) bg, cream icon, champagne hover
  Close: "ESC" label + X icon, top-right, Montserrat 9px cream
  Counter: "08 / 24" Montserrat 11px cream center bottom
  Keyboard: arrows, escape
  Touch: swipe support
  framer-motion: scale 0.95→1 + fade, direction-aware left/right slide

━━━ CONTACT + FAQ (/app/contact/page.tsx) ━━━

Background: #FAF8F2
Hero: "Let's Connect" heading (Cormorant 72px italic)

SPLIT LAYOUT:

Left 55% — Contact Form:
  Same underline-input style
  Fields: Name, Email, Phone, Subject (select), Message
  Submit: obsidian, "Send Message"
  Server Action → saves to Supabase contact_messages table
  Success: inline animated "✓ Message sent" with botanical icon

Right 45% — Info + FAQ:

  INFO CARD (cream bg, parchment border, border-radius 20px, padding 40px):
    Botanical icon 48px, opacity 0.15
    Address, phone (tel: link), WhatsApp (green), email, hours

  FAQ ACCORDION BELOW:
    Heading: "Frequently Asked" — Cormorant Garamond, 36px, italic
    
    6 FAQ items (accordion — framer-motion AnimatePresence for answer reveal):
    
    Each item:
      Question: Cormorant Garamond, 18px, italic, obsidian + chevron icon right
      Answer: Montserrat 13px weight 300, stone, line-height 1.8
      Border-bottom: 1px parchment
      Open state: question turns champagne, chevron rotates 180deg
      
    SEO-optimized questions:
      Q: "What foundation brands do you use for bridal makeup?"
      A: "We exclusively use MAC, Charlotte Tilbury, and NARS for bridal applications..."
      
      Q: "How long does a Keratin treatment last?"
      A: "Our premium keratin treatments last 4–6 months..."
      
      Q: "Do you offer private bridal suite experiences?"
      A: "Yes — all bridal bookings include exclusive access to our private suite..."
      
      Q: "What's included in the HydraFacial treatment?"
      A: "Our HydraFacial includes cleansing, exfoliation, extraction, hydration, and antioxidant protection..."
      
      Q: "How far in advance should I book for a wedding?"
      A: "We recommend booking at least 3–6 months in advance for full bridal packages..."
      
      Q: "Do you offer trial makeup sessions before the wedding?"
      A: "Absolutely — we strongly recommend a trial session 2–4 weeks before your event..."

GOOGLE MAPS:
  Full-width below, 300px, border-radius 16px, overflow hidden
  Iframe embed for Lahore

Show complete TypeScript.
```

---

## ⚡ UPGRADE 12 — Admin Dashboard: Premium SaaS-Quality

### Cursor Prompt:
```
UPGRADE TASK: Completely rebuild the admin dashboard.

Style: Linear.app × Vercel Dashboard × brand colors
The admin uses MONÉT's brand colors, not generic SaaS gray.

━━━ ADMIN LOGIN (/app/admin/login/page.tsx) ━━━

Full-screen split:
Left 50%:
  Background: #F4F0E6 (cream)
  Center content:
    Botanical SVG animated drawStroke (120px, obsidian)
    "MONÉT" — Cormorant Garamond, 52px, weight 400
    "Admin Panel" — Montserrat 11px, tracking 0.35em, stone
    
Right 50%:
  Background: #FAF8F2
  Max-width: 380px card, centered
  Heading: Cormorant Garamond, 32px, italic: "Welcome Back"
  
  Form (underline inputs — consistent with site):
    Email, Password (show/hide toggle)
    "Sign In" — obsidian button, full width
    Error state: Montserrat 12px, warm red, slides in
  
  Supabase: supabase.auth.signInWithPassword
  Success: router.push('/admin')

━━━ MIDDLEWARE (/middleware.ts) ━━━
Protect /admin routes except /admin/login
Use @supabase/ssr, cookie-based session check

━━━ ADMIN LAYOUT (/components/admin/AdminLayout.tsx) ━━━

SIDEBAR (256px, fixed):
  Background: #1A1A1A (obsidian)
  Border-right: 1px solid rgba(244,240,230,0.06)
  
  TOP: Brand area
    Botanical SVG 28px, ivory stroke, opacity 0.6
    "MONÉT" — Cormorant Garamond, 18px, italic, #F4F0E6
    "Admin" — Montserrat 9px, tracking 0.3em, rgba(244,240,230,0.4)
    Separator: 1px rgba(244,240,230,0.08)

  NAV ITEMS (44px each, padding 0 16px):
    Icon (lucide-react 16px) + Label (Montserrat 13px)
    Default: rgba(244,240,230,0.45) text, transparent bg
    Hover: rgba(244,240,230,0.08) bg, rgba(244,240,230,0.75) text
    Active: rgba(244,240,230,0.06) bg + 2px left border #C5B396 + #F4F0E6 text
    
    Items: LayoutDashboard Dashboard · Calendar Bookings · Mail Messages · LogOut Sign Out
    
    LogOut: bottom of sidebar, rgba(244,240,230,0.35) text, hover rgba(220,80,80,0.3) bg

HEADER BAR (64px, right of sidebar):
  Background: #FAF8F5
  Border-bottom: 1px rgba(26,26,26,0.08)
  Left: "Good morning" — Cormorant Garamond, 20px, italic + date — Montserrat 11px, stone
  Right: Avatar circle (40px, obsidian bg, cream initials, Cormorant Garamond)

━━━ DASHBOARD (/app/admin/page.tsx) ━━━

STATS ROW (4 cards, server component fetch):
  Each card: white bg, border 1px rgba(26,26,26,0.08), border-radius 12px, padding 24px
  Icon in 36px square: cream bg, obsidian icon (lucide-react 18px)
  Number: Cormorant Garamond, 44px, italic
  Label: Montserrat 10px, tracking 0.2em, uppercase, stone
  Trend: Montserrat 10px, green/stone

  Stats fetched from Supabase:
    Total Bookings (count all)
    Today's (filter date = today)
    Pending (status = 'pending')
    Completed (status = 'completed')

━━━ BOOKINGS TABLE (/components/admin/BookingsTable.tsx) — 'use client' ━━━

Container: white bg, border 1px rgba(26,26,26,0.08), border-radius 12px

TOOLBAR:
  Left: Search (underline input, magnifier icon) — filters name + phone live
  Right: Status select + Date input + "CSV Export" outlined button

TABLE:
  Header: Montserrat 9px, tracking 0.25em, uppercase, stone
          border-bottom: 1px rgba(26,26,26,0.08)
  Rows: border-bottom 1px rgba(26,26,26,0.04)
  Hover: rgba(244,240,230,0.4) bg
  Cells: Montserrat 13px, obsidian

  Columns: # · Name · Phone · Service · Date · Time · Status · Actions

  STATUS PILLS (border-radius: 100px, Montserrat 9px, tracking 0.1em, uppercase):
    pending:   bg rgba(245,158,11,0.1)  · text #92400E  · border rgba(245,158,11,0.3)
    confirmed: bg rgba(59,130,246,0.1)  · text #1e3a5f  · border rgba(59,130,246,0.25)
    completed: bg rgba(34,197,94,0.1)   · text #14532d  · border rgba(34,197,94,0.25)
    cancelled: bg rgba(239,68,68,0.1)   · text #7f1d1d  · border rgba(239,68,68,0.25)

  ACTION BUTTONS (per row, 28×28px icon buttons, border-radius 6px):
    Confirm (check, blue tint bg)
    Complete (double-check, green tint bg)  
    WhatsApp (message icon → wa.me/phone link in new tab)
    Call (phone → tel: link)
    Delete (trash → red tint on hover, confirmation before delete)
    
    Each: tooltip on hover (Montserrat 10px, obsidian bg, cream text, border-radius 4px)

ROW CLICK → expand:
  Clicking anywhere on a row (except action buttons) expands an inline detail panel below:
  Shows full notes, created_at timestamp
  framer-motion AnimatePresence height 0 → auto

EMPTY STATE:
  Botanical SVG 80px, opacity 0.15
  "No bookings yet" — Cormorant Garamond, 28px, italic
  Subtext: Montserrat 13px, stone

PAGINATION: 10 per page, Montserrat 11px prev/next

REAL-TIME: Supabase .channel().on('INSERT') → auto-adds row + toast notification
Toast: "🌸 New booking from Zara Ahmed" — styled with brand colors

━━━ SERVER ACTIONS (/app/actions/admin.ts) ━━━
  updateBookingStatus(id, status) — UPDATE bookings SET status
  deleteBooking(id) — DELETE from bookings
  Both verify auth.getUser() before executing

Show complete TypeScript for all admin files.
```

---

## 🎨 COMPLETE BRAND REFERENCE CARD

| Token | Hex | Usage |
|-------|-----|-------|
| `--cream` | `#F4F0E6` | **Logo circle** · Page base · Hero bg · Info panels |
| `--white` | `#FFFFFF` | Cards · Overlays · Admin backgrounds |
| `--cream-light` | `#FAF8F2` | Page content sections |
| `--parchment` | `#EAE4D6` | Borders · Dividers · Subtle section breaks |
| `--obsidian` | `#1A1A1A` | **Logo text** · All headings · Body text · Buttons |
| `--champagne` | `#C5B396` | Hover states · Active indicators · Accents · Decorative lines |
| `--stone` | `#8A8070` | Secondary text · Captions · Labels |
| `--whisper` | `#B8AF9E` | Placeholder text · Disabled states |

## 🔤 TYPOGRAPHY SPEC

| Role | Font | Size | Weight | Style |
|------|------|------|--------|-------|
| Hero display | Cormorant Garamond | 88–120px | 300 | italic |
| Section H1 | Cormorant Garamond | 64–88px | 300–400 | normal/italic alternating |
| Card title | Cormorant Garamond | 20–28px | 400 | italic |
| All buttons | Montserrat | 11px | 500 | uppercase + tracking 0.18em |
| All labels | Montserrat | 9–10px | 500 | uppercase + tracking 0.35–0.45em |
| Body text | Montserrat | 14–15px | 300 | normal, line-height 1.8–1.9 |
| Prices/meta | Montserrat | 11–12px | 400–500 | normal |

## ✦ THE BOTANICAL ICON (Copy-Paste Component)

```typescript
// /components/ui/BotanicalIcon.tsx
// Use on EVERY page — this is your brand signature

interface Props {
  size?: number
  opacity?: number
  color?: string
  className?: string
  animated?: boolean
}

export function BotanicalIcon({
  size = 48,
  opacity = 0.2,
  color = 'currentColor',
  className = '',
  animated = false
}: Props) {
  const petals = [0, 45, 90, 135, 180, 225, 270, 315]
  return (
    <svg
      width={size} height={size}
      viewBox="0 0 48 48" fill="none"
      className={`${animated ? 'animate-float' : ''} ${className}`}
      style={{ opacity, color }}
    >
      {petals.map((angle) => (
        <g key={angle} transform={`rotate(${angle} 24 24)`}>
          <path
            d="M24 5 C26.5 13 27 18 24 24 C21 18 21.5 13 24 5 Z"
            stroke={color} strokeWidth="0.75"
            fill="none" strokeLinecap="round"
          />
          <path
            d="M24 5 C27 11 28.5 17 24 24 C19.5 17 21 11 24 5 Z"
            stroke={color} strokeWidth="0.4"
            fill="none" strokeLinecap="round" opacity="0.5"
          />
        </g>
      ))}
      <circle cx="24" cy="24" r="1.5" fill={color} opacity="0.4"/>
    </svg>
  )
}
```

## ✦ ANIMATED DRAW VERSION (For loading screens, success states):

```typescript
// Animated stroke-draw version — use on /app/loading.tsx and booking success
export function BotanicalIconAnimated({ size = 120 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {[0,45,90,135,180,225,270,315].map((angle, i) => (
        <path
          key={angle}
          d="M24 5 C26.5 13 27 18 24 24 C21 18 21.5 13 24 5 Z"
          stroke="#1A1A1A" strokeWidth="0.75"
          fill="none" strokeLinecap="round"
          strokeDasharray="50" strokeDashoffset="50"
          transform={`rotate(${angle} 24 24)`}
          style={{
            animation: `drawStroke 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.08}s forwards`
          }}
        />
      ))}
      <circle cx="24" cy="24" r="1.5" fill="#1A1A1A" opacity="0.4"
        style={{ animation: 'fadeIn 0.3s ease 0.7s forwards', opacity: 0 }}
      />
    </svg>
  )
}
```

---

## ⚡ THE GOLDEN RULE (READ BEFORE EVERY PROMPT)

```
Every single page and component must feel like it belongs to ONE cohesive brand.
The test: Could you show any single component and immediately know it's MONÉT?

✦ Cream (#F4F0E6) is always the "home" color — warm, inviting, the logo itself
✦ The botanical flower is the brand's soul — use it everywhere, always subtle
✦ Cormorant Garamond italic is the voice — grand declarations in italic
✦ Montserrat small-caps is the whisper — precise technical labels
✦ Champagne (#C5B396) is the reward — use it ONLY for interaction feedback
✦ Never pure white (#FFF) for backgrounds — always cream (#F4F0E6) or (#FAF8F2)
✦ Never pure black (#000) — always warm obsidian (#1A1A1A)
✦ Paper grain texture on body — always. It's what makes it feel REAL.
```

> 💡 **Run each upgrade in order.** After each step, check desktop + mobile + test the grain texture (you should barely see it but feel the "warmth" vs a flat digital page).
