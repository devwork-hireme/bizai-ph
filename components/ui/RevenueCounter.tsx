"use client";

import { useState, useEffect, useRef } from "react";

function formatPeso(n: number): string {
  return "₱" + Math.round(n).toLocaleString("en-PH");
}

export default function RevenueCounter() {
  const [display, setDisplay] = useState(formatPeso(2847320));
  const [animating, setAnimating] = useState(false);
  const valueRef = useRef(2847320);

  useEffect(() => {
    const schedule = () => {
      const delay = 3000 + Math.random() * 1000;
      return setTimeout(() => {
        const increment = 1500 + Math.random() * 7000;
        valueRef.current += increment;

        setAnimating(true);
        setTimeout(() => {
          setDisplay(formatPeso(valueRef.current));
          setAnimating(false);
        }, 300);

        schedule();
      }, delay);
    };

    const id = schedule();
    return () => clearTimeout(id);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(232,184,75,0.12)",
          borderRadius: "40px",
          padding: "10px 20px",
        }}
      >
        <span
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "#3dba6e",
            flexShrink: 0,
            animation: "pulse-ring 2s infinite",
          }}
        />
        <span
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontWeight: 300,
            fontSize: "12px",
            color: "#888480",
          }}
        >
          Revenue generated for our clients
        </span>
        <span
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 700,
            fontSize: "14px",
            color: "#e8b84b",
            transition: "opacity 0.3s ease, transform 0.3s ease",
            opacity: animating ? 0 : 1,
            transform: animating ? "translateY(-8px)" : "translateY(0)",
            display: "inline-block",
          }}
        >
          {display}
        </span>
      </div>
      <p
        style={{
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontWeight: 300,
          fontSize: "11px",
          color: "#888480",
          margin: 0,
        }}
      >
        Updated in real-time across all client accounts
      </p>
    </div>
  );
}
