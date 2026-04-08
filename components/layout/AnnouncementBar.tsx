"use client";

import { useState, useEffect } from "react";

const DEADLINE = new Date("2026-05-31T23:59:00+08:00").getTime();
const LS_KEY = "bizai-announcement-closed-v2";

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };

function getTimeLeft(): TimeLeft {
  const diff = Math.max(0, DEADLINE - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(false);
  const [time, setTime] = useState<TimeLeft>(getTimeLeft());

  useEffect(() => {
    const closed = localStorage.getItem(LS_KEY);
    if (!closed) {
      setVisible(true);
      document.documentElement.style.setProperty("--announcement-bar-height", "48px");
    } else {
      document.documentElement.style.setProperty("--announcement-bar-height", "0px");
    }
  }, []);

  useEffect(() => {
    if (!visible) return;
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, [visible]);

  function close() {
    setVisible(false);
    localStorage.setItem(LS_KEY, "1");
    document.documentElement.style.setProperty("--announcement-bar-height", "0px");
  }

  if (!visible) return null;

  const expired = DEADLINE <= Date.now();

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        height: "48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
        background: "linear-gradient(90deg, rgba(245,197,24,0.12), rgba(255,217,74,0.08), rgba(245,197,24,0.12))",
        borderBottom: "1px solid rgba(245,197,24,0.25)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        padding: "0 48px",
      }}
    >
      {/* Launch badge */}
      <span
        style={{
          background: "rgba(245,197,24,0.15)",
          border: "1px solid rgba(245,197,24,0.35)",
          borderRadius: "100px",
          padding: "3px 12px",
          fontSize: "0.68rem",
          fontWeight: 700,
          color: "#F5C518",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          whiteSpace: "nowrap",
          flexShrink: 0,
        }}
      >
        LAUNCH PROMO
      </span>

      {/* Center text */}
      <span
        className="announcement-text"
        style={{
          fontSize: "0.82rem",
          fontWeight: 400,
          color: "rgba(255,255,255,0.8)",
          whiteSpace: "nowrap",
        }}
      >
        50% off all packages — April to May 2026 only
      </span>

      {/* Countdown */}
      {!expired && (
        <div
          style={{
            background: "rgba(0,0,0,0.3)",
            borderRadius: "6px",
            padding: "2px 0",
            display: "flex",
            gap: "4px",
            alignItems: "center",
            flexShrink: 0,
          }}
        >
          {[
            { v: time.days, l: "d" },
            { v: time.hours, l: "h" },
            { v: time.minutes, l: "m" },
            { v: time.seconds, l: "s" },
          ].map(({ v, l }) => (
            <div
              key={l}
              style={{
                background: "rgba(245,197,24,0.12)",
                border: "1px solid rgba(245,197,24,0.2)",
                borderRadius: "4px",
                padding: "2px 8px",
                fontSize: "0.78rem",
                fontWeight: 700,
                color: "#F5C518",
                fontFamily: "monospace",
                whiteSpace: "nowrap",
                minWidth: "36px",
                textAlign: "center",
              }}
            >
              {pad(v)}{l}
            </div>
          ))}
        </div>
      )}
      {expired && (
        <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "rgba(255,255,255,0.8)" }}>
          Offer Ended
        </span>
      )}

      {/* Close */}
      <button
        onClick={close}
        aria-label="Close announcement"
        style={{
          position: "absolute",
          right: "16px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "rgba(255,255,255,0.5)",
          padding: "4px",
          lineHeight: 1,
          fontSize: "0.9rem",
          transition: "color 0.2s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
      >
        ✕
      </button>

      <style>{`
        @media (max-width: 640px) {
          .announcement-text { display: none; }
        }
      `}</style>
    </div>
  );
}
