"use client";

import { useState, useEffect } from "react";

const DEADLINE = new Date("2025-05-31T23:59:00+08:00").getTime();
const LS_KEY = "bizai-announcement-closed";

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
      document.documentElement.style.setProperty("--announcement-bar-height", "44px");
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
        height: "44px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
        background: "linear-gradient(135deg, var(--blue), var(--cyan))",
        padding: "0 16px",
      }}
    >
      {/* Left — badge + text */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
        <span
          style={{
            background: "rgba(255,255,255,0.15)",
            borderRadius: "100px",
            padding: "3px 10px",
            fontSize: "0.72rem",
            fontWeight: 700,
            color: "white",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            whiteSpace: "nowrap",
          }}
        >
          🔥 Launch Offer
        </span>
        <span
          style={{
            fontSize: "0.82rem",
            fontWeight: 500,
            color: "white",
            whiteSpace: "nowrap",
          }}
          className="announcement-text"
        >
          50% off all monthly plans — April to May 2025 only
        </span>
      </div>

      {/* Right — countdown */}
      <div style={{ display: "flex", gap: "8px", alignItems: "center", flexShrink: 0 }}>
        {expired ? (
          <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "rgba(255,255,255,0.8)" }}>
            Offer Ended
          </span>
        ) : (
          [
            { v: time.days, l: "d" },
            { v: time.hours, l: "h" },
            { v: time.minutes, l: "m" },
            { v: time.seconds, l: "s" },
          ].map(({ v, l }) => (
            <div
              key={l}
              style={{
                background: "rgba(0,0,0,0.2)",
                borderRadius: "4px",
                padding: "2px 8px",
                fontSize: "0.8rem",
                fontWeight: 700,
                color: "white",
                fontFamily: "monospace",
                whiteSpace: "nowrap",
                minWidth: "36px",
                textAlign: "center",
              }}
            >
              {pad(v)}{l}
            </div>
          ))
        )}
      </div>

      {/* Close */}
      <button
        onClick={close}
        aria-label="Close announcement"
        style={{
          position: "absolute",
          right: "12px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "rgba(255,255,255,0.7)",
          padding: "4px",
          lineHeight: 1,
          fontSize: "1rem",
          transition: "color 0.2s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
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
