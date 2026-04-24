"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingWA() {
  const waUrl = "https://wa.me/639602104478";
  const [showLabel, setShowLabel] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    function resetTimer() {
      clearTimeout(timeout);
      setShowLabel(false);
      timeout = setTimeout(() => setShowLabel(true), 5000);
    }
    resetTimer();
    window.addEventListener("scroll", resetTimer, { passive: true });
    window.addEventListener("mousemove", resetTimer, { passive: true });
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", resetTimer);
      window.removeEventListener("mousemove", resetTimer);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "28px",
        right: "28px",
        zIndex: 999,
        display: "flex",
        alignItems: "center",
        gap: "10px",
        flexDirection: "row-reverse",
      }}
    >
      {/* Inactivity label */}
      <AnimatePresence>
        {showLabel && (
          <motion.span
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 12 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            style={{
              background: "rgba(10,10,10,0.92)",
              border: "1px solid rgba(232,184,75,0.3)",
              borderRadius: "8px",
              padding: "6px 12px",
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 600,
              fontSize: "12px",
              color: "#e8b84b",
              whiteSpace: "nowrap",
              backdropFilter: "blur(12px)",
            }}
          >
            Start here →
          </motion.span>
        )}
      </AnimatePresence>

      {/* Button + pulse ring wrapper */}
      <div style={{ position: "relative", width: "56px", height: "56px" }}>
        {/* Pulse ring */}
        <motion.div
          style={{
            position: "absolute",
            inset: "-4px",
            borderRadius: "50%",
            border: "2px solid rgba(232,184,75,0.4)",
            animation: "wa-pulse-ring 2.5s ease-out infinite",
            pointerEvents: "none",
          }}
        />

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          title="Chat with us on WhatsApp"
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            background: "#0a0a0a",
            border: "2px solid rgba(232,184,75,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 24px rgba(0,0,0,0.4), 0 0 0 1px rgba(232,184,75,0.15)",
            transition: "border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease",
            textDecoration: "none",
            position: "relative",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(232,184,75,0.8)";
            e.currentTarget.style.transform = "scale(1.06)";
            e.currentTarget.style.boxShadow = "0 6px 28px rgba(0,0,0,0.5), 0 0 0 1px rgba(232,184,75,0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(232,184,75,0.4)";
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.4), 0 0 0 1px rgba(232,184,75,0.15)";
          }}
        >
          <svg viewBox="0 0 100 100" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="12" y="62" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="52" fill="white">B</text>
            <text x="42" y="62" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="52" fill="#e8b84b">A</text>
            <line x1="30" y1="75" x2="88" y2="20" stroke="#e8b84b" strokeWidth="5" strokeLinecap="round"/>
            <polygon points="88,20 75,22 86,33" fill="#e8b84b"/>
          </svg>
        </a>
      </div>
    </div>
  );
}
