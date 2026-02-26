import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: { DEFAULT: '#F4F0E6', dark: '#EAE4D6', light: '#FAF8F2' },
        champagne: { DEFAULT: '#C5B396', light: '#D9CDB8', dark: '#A89070' },
        obsidian: { DEFAULT: '#1A1A1A', 2: '#2C2C2C' },
        stone: '#8A8070',
        whisper: '#B8AF9E',
        parchment: '#EAE4D6',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        body: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in': 'fadeIn 0.7s ease forwards',
        'line-grow': 'lineGrow 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        'clip-reveal': 'clipReveal 1s cubic-bezier(0.16,1,0.3,1) forwards',
        'float': 'float 8s ease-in-out infinite',
        'marquee': 'marquee 40s linear infinite',
        'marquee-r': 'marqueeR 40s linear infinite',
        'scale-in': 'scaleIn 0.6s cubic-bezier(0.16,1,0.3,1) forwards',
        'draw': 'drawStroke 2s ease forwards',
        'grain': 'grain 0.4s steps(2) infinite',
        'shimmer': 'shimmer 3s ease infinite',
      },
      keyframes: {
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-2%, -3%)' },
          '30%': { transform: 'translate(3%, 2%)' },
          '50%': { transform: 'translate(-1%, 4%)' },
          '70%': { transform: 'translate(2%, -2%)' },
          '90%': { transform: 'translate(-3%, 1%)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(32px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        lineGrow: {
          from: { transform: 'scaleX(0)', transformOrigin: 'left' },
          to: { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        marqueeR: {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0)' },
        },
        clipReveal: {
          from: { clipPath: 'inset(0 100% 0 0)' },
          to: { clipPath: 'inset(0 0% 0 0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        drawStroke: {
          from: { strokeDashoffset: '500' },
          to: { strokeDashoffset: '0' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.94)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        slideDown: {
          from: { opacity: '0', transform: 'translateY(-12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        }
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
        30: '7.5rem',
      },
    },
  },
  plugins: [],
};
export default config;
