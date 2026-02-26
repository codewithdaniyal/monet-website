"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    // Check if touch device
    if (typeof navigator !== "undefined" && navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }
    setIsTouch(false);

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;

    const updateCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%))`;
      }
    };

    const render = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(calc(${ringX}px - 50%), calc(${ringY}px - 50%))`;
      }
      requestAnimationFrame(render);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a") || target.closest("button")) {
        if (ringRef.current) ringRef.current.classList.add("hovering");
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a") || target.closest("button")) {
        if (ringRef.current) ringRef.current.classList.remove("hovering");
      }
    };

    // Hide default cursor site-wide
    const styleEl = document.createElement("style");
    styleEl.innerHTML = "body, a, button { cursor: none !important; }";
    document.head.appendChild(styleEl);

    window.addEventListener("mousemove", updateCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    // Initial positioning outside
    if (dotRef.current) {
      dotRef.current.style.transform = "translate(-100px, -100px)";
    }
    if (ringRef.current) {
      ringRef.current.style.transform = "translate(-100px, -100px)";
    }

    const rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", updateCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(rafId);
      if (document.head.contains(styleEl)) {
        document.head.removeChild(styleEl);
      }
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{ left: 0, top: 0 }}
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{ left: 0, top: 0 }}
      />
      <style jsx global>{`
        .cursor-dot {
          width: 6px;
          height: 6px;
          background: var(--obsidian);
          border-radius: 50%;
          position: fixed;
          pointer-events: none;
          z-index: 99999;
          transform: translate(-50%, -50%);
          transition: opacity 0.3s;
        }
        .cursor-ring {
          width: 32px;
          height: 32px;
          border: 1px solid var(--obsidian);
          border-radius: 50%;
          position: fixed;
          pointer-events: none;
          z-index: 99998;
          transform: translate(-50%, -50%);
          transition: width 0.3s var(--ease-out), height 0.3s var(--ease-out), background 0.3s, border-color 0.3s;
        }
        .cursor-ring.hovering {
          width: 48px;
          height: 48px;
          background: rgba(197, 179, 150, 0.15);
          border-color: var(--champagne);
        }
      `}</style>
    </>
  );
}
