"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type Stat = {
  prefix?: string;
  suffix: string;
  value: number;
  label: string;
  sub: string;
};

const stats: Stat[] = [
  { value: 20, suffix: "+", label: "Hours Saved Weekly", sub: "Per Business, On Average" },
  { value: 100, suffix: "+", label: "Businesses Automated", sub: "Across the Philippines" },
  { value: 48, suffix: "h", label: "Average Setup Time", sub: "From Consultation to Live" },
  { prefix: "₱", value: 1500, suffix: "/mo", label: "Starting Retainer", sub: "No Lock-In Contracts" },
];

const trustSignals = [
  "30-Day Performance Guarantee",
  "Month-to-Month, No Lock-In",
  "Zero Technical Knowledge Required",
  "Setup in 48 Hours",
];

function CountUp({ value, prefix = "", suffix, active }: { value: number; prefix?: string; suffix: string; active: boolean }) {
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!active || started.current) return;
    started.current = true;
    const duration = 2200;
    const start = performance.now();
    function frame(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(ease * value));
      if (progress < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }, [active, value]);

  return (
    <span>
      {prefix}{display.toLocaleString()}{suffix}
    </span>
  );
}

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--blue-light)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function ResultsBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--card-border)",
        borderBottom: "1px solid var(--card-border)",
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
          borderBottom: "1px solid var(--card-border)",
        }}
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            className="results-stat-cell"
            style={{
              padding: "36px 48px",
              textAlign: "center",
              borderRight: i < stats.length - 1 ? "1px solid var(--card-border)" : "none",
            }}
          >
            <div
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                lineHeight: 1,
                marginBottom: "6px",
                background: "linear-gradient(135deg, #3D6FFF 0%, #00C8FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              <CountUp
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                active={inView}
              />
            </div>
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--muted)",
                margin: 0,
                lineHeight: 1.4,
              }}
            >
              {stat.label}
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
          padding: "24px 64px",
          flexWrap: "wrap",
        }}
      >
        {trustSignals.map((signal, i) => (
          <div key={signal} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {i > 0 && (
              <span
                style={{
                  width: "1px",
                  height: "16px",
                  background: "var(--card-border)",
                  flexShrink: 0,
                  marginRight: "32px",
                }}
              />
            )}
            <CheckIcon />
            <span
              style={{
                fontSize: "0.8rem",
                fontWeight: 500,
                color: "var(--soft)",
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
          .results-stat-cell:nth-child(odd) { border-right: 1px solid var(--card-border) !important; }
          .results-stat-cell:nth-child(1),
          .results-stat-cell:nth-child(2) { border-bottom: 1px solid var(--card-border) !important; }
        }
        @media (max-width: 768px) {
          .results-stat-cell { padding: 28px 24px !important; }
          .trust-signals-row { padding: 20px 24px !important; gap: 16px !important; }
        }
      `}</style>
    </section>
  );
}
