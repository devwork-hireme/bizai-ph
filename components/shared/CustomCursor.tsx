"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let ringX = 0;
    let ringY = 0;
    let dotX = 0;
    let dotY = 0;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      dotX = e.clientX;
      dotY = e.clientY;
    };

    const animate = () => {
      ringX += (dotX - ringX) * 0.12;
      ringY += (dotY - ringY) * 0.12;
      if (dot) {
        dot.style.transform = `translate(${dotX}px, ${dotY}px) translate(-50%, -50%)`;
      }
      if (ring) {
        ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    const show = () => {
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };
    const hide = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseenter", show);
    document.addEventListener("mouseleave", hide);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseenter", show);
      document.removeEventListener("mouseleave", hide);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Gold dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "#e8b84b",
          pointerEvents: "none",
          zIndex: 99999,
          opacity: 0,
          willChange: "transform",
        }}
      />
      {/* Trailing ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          border: "1.5px solid rgba(232,184,75,0.5)",
          pointerEvents: "none",
          zIndex: 99998,
          opacity: 0,
          willChange: "transform",
        }}
      />

      <style>{`
        @media (max-width: 768px) {
          /* CustomCursor elements hidden on mobile via CSS */
        }
        @media (hover: none) {
          /* Touch devices — hide cursor */
        }
      `}</style>
    </>
  );
}
