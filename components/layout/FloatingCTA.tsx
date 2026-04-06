"use client";

import { useState, useEffect } from "react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "32px",
        right: "32px",
        zIndex: 90,
      }}
      className="floating-cta-container"
    >
      {/* Tooltip */}
      <div
        style={{
          position: "absolute",
          right: "72px",
          top: "50%",
          transform: `translateY(-50%) scale(${showTooltip ? 1 : 0.95})`,
          background: "var(--card)",
          border: "1px solid var(--card-border)",
          borderRadius: "8px",
          padding: "8px 14px",
          fontSize: "0.8rem",
          fontWeight: 500,
          color: "var(--white)",
          whiteSpace: "nowrap",
          opacity: showTooltip ? 1 : 0,
          pointerEvents: showTooltip ? "auto" : "none",
          transition: "opacity 0.2s ease, transform 0.2s ease",
          boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
        }}
      >
        Book Free Consultation
      </div>

      {/* Outer ping ring */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          background: "rgba(61,111,255,0.2)",
          animation: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
        }}
      />

      {/* Button */}
      <a
        href="https://calendly.com/devwork2025-proton/free-ai-automation-audit"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={(e) => {
          setShowTooltip(true);
          (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.08)";
        }}
        onMouseLeave={(e) => {
          setShowTooltip(false);
          (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
        }}
        style={{
          position: "relative",
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: "var(--blue)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 24px rgba(61,111,255,0.5)",
          textDecoration: "none",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
        }}
        aria-label="Book Free Consultation"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      </a>

      <style>{`
        @media (max-width: 768px) {
          .floating-cta-container { bottom: 20px !important; right: 20px !important; }
        }
      `}</style>
    </div>
  );
}
