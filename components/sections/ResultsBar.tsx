"use client";

import { CheckCircle } from "lucide-react";

const stats = [
  { value: "100+", label: "Businesses Served", sub: "Across the Philippines" },
  { value: "20+", label: "Hours Saved / Week", sub: "Per Business, On Average" },
  { value: "3–5", label: "Days to Go Live", sub: "From Booking to Launch" },
  { value: "₱2,999", label: "Starting Retainer", sub: "No Lock-In Contracts" },
];

const trustSignals = [
  "30-Day Performance Guarantee",
  "Month-to-Month, No Lock-In",
  "Zero Technical Knowledge Required",
  "Free 30-Min Strategy Session",
];

export default function ResultsBar() {
  return (
    <section
      style={{
        background: "var(--navy-mid)",
        borderTop: "1px solid var(--navy-border)",
        borderBottom: "1px solid var(--navy-border)",
      }}
    >
      {/* Stats row */}
      <div
        className="results-stats-grid"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          borderBottom: "1px solid var(--navy-border)",
        }}
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            className="results-stat-cell"
            style={{
              padding: "36px 48px",
              textAlign: "center",
              borderRight:
                i < stats.length - 1
                  ? "1px solid var(--navy-border)"
                  : "none",
            }}
          >
            <div
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                lineHeight: 1,
                marginBottom: "6px",
                background: "linear-gradient(135deg, #F5C518 0%, #FFD94A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontFamily: "var(--font-syne), sans-serif",
              }}
            >
              {stat.value}
            </div>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.55)",
                margin: "0 0 4px",
                lineHeight: 1.3,
                fontFamily: "var(--font-dm-sans), sans-serif",
              }}
            >
              {stat.label}
            </p>
            <p
              style={{
                fontSize: "0.68rem",
                color: "rgba(255,255,255,0.3)",
                margin: 0,
                fontFamily: "var(--font-dm-sans), sans-serif",
              }}
            >
              {stat.sub}
            </p>
          </div>
        ))}
      </div>

      {/* Trust signals row */}
      <div
        className="trust-signals-row"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
          padding: "20px 64px",
          flexWrap: "wrap",
        }}
      >
        {trustSignals.map((signal, i) => (
          <div
            key={signal}
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            {i > 0 && (
              <span
                style={{
                  width: "1px",
                  height: "16px",
                  background: "var(--navy-border)",
                  flexShrink: 0,
                  marginRight: "32px",
                }}
              />
            )}
            <CheckCircle size={14} style={{ color: "#22C55E", flexShrink: 0 }} />
            <span
              style={{
                fontSize: "0.8rem",
                fontWeight: 500,
                color: "rgba(255,255,255,0.5)",
                fontFamily: "var(--font-dm-sans), sans-serif",
              }}
            >
              {signal}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .results-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .results-stat-cell { border-right: none !important; }
          .results-stat-cell:nth-child(odd) { border-right: 1px solid var(--navy-border) !important; }
          .results-stat-cell:nth-child(1),
          .results-stat-cell:nth-child(2) { border-bottom: 1px solid var(--navy-border) !important; }
        }
        @media (max-width: 768px) {
          .results-stat-cell { padding: 28px 24px !important; }
          .trust-signals-row { padding: 16px 24px !important; gap: 16px !important; }
        }
      `}</style>
    </section>
  );
}
