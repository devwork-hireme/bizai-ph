"use client";

import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const DEADLINE = new Date("2026-05-31T23:59:59+08:00");

function getTimeLeft(): TimeLeft {
  const diff = DEADLINE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

export default function CountdownTimer({ size = "md" }: { size?: "md" | "sm" }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const t = getTimeLeft();
    if (t.days === 0 && t.hours === 0 && t.minutes === 0 && t.seconds === 0) return;
    setTimeLeft(t);
    const timer = setInterval(() => {
      const next = getTimeLeft();
      if (next.days === 0 && next.hours === 0 && next.minutes === 0 && next.seconds === 0) {
        clearInterval(timer);
        setTimeLeft(null);
        return;
      }
      setTimeLeft(next);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return null;

  const sm = size === "sm";
  const units = [
    { value: String(timeLeft.days).padStart(2, "0"), label: "DAYS" },
    { value: String(timeLeft.hours).padStart(2, "0"), label: "HRS" },
    { value: String(timeLeft.minutes).padStart(2, "0"), label: "MIN" },
    { value: String(timeLeft.seconds).padStart(2, "0"), label: "SEC" },
  ];

  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        gap: sm ? "8px" : "10px",
      }}
    >
      {!sm && (
        <p
          style={{
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#e8b84b",
            fontFamily: "var(--font-dm-sans), sans-serif",
            margin: 0,
          }}
        >
          🔥 Launch Promo Ends In
        </p>
      )}

      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        {units.map((u, i) => (
          <div key={u.label} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div
              style={{
                background: "#1c1c1c",
                border: "1px solid rgba(232,184,75,0.15)",
                borderRadius: "8px",
                padding: sm ? "8px 12px" : "12px 16px",
                textAlign: "center",
                minWidth: sm ? "44px" : "56px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontWeight: 800,
                  fontSize: sm ? "22px" : "28px",
                  color: "#e8b84b",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
              >
                {u.value}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontWeight: 400,
                  fontSize: "10px",
                  color: "#888480",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  marginTop: "4px",
                }}
              >
                {u.label}
              </div>
            </div>
            {i < 3 && (
              <span
                style={{
                  color: "rgba(232,184,75,0.4)",
                  fontSize: sm ? "16px" : "20px",
                  fontWeight: 700,
                  lineHeight: 1,
                  marginTop: "-8px",
                }}
              >
                :
              </span>
            )}
          </div>
        ))}
      </div>

      {!sm && (
        <p
          style={{
            fontSize: "0.72rem",
            color: "rgba(255,255,255,0.3)",
            fontFamily: "var(--font-dm-sans), sans-serif",
            margin: 0,
          }}
        >
          50% off all systems — April &amp; May 2026 only
        </p>
      )}
    </div>
  );
}
