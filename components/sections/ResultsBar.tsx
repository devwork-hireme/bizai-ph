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

function CountUp({ value, prefix = "", suffix, active }: { value: number; prefix?: string; suffix: string; active: boolean }) {
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!active || started.current) return;
    started.current = true;
    const duration = 1400;
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

export default function ResultsBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "3.5rem 1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "2rem",
        }}
        className="results-bar-grid"
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            style={{
              textAlign: "center",
              padding: "0 1rem",
              borderRight: i < stats.length - 1 ? "1px solid var(--border)" : "none",
            }}
            className="results-bar-item"
          >
            <div
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                lineHeight: 1,
                marginBottom: "0.5rem",
                background: "linear-gradient(135deg, var(--white) 0%, var(--blue-light) 100%)",
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
                fontSize: "0.92rem",
                fontWeight: 700,
                color: "var(--white)",
                marginBottom: "0.2rem",
              }}
            >
              {stat.label}
            </p>
            <p style={{ fontSize: "0.76rem", color: "var(--muted)", margin: 0 }}>
              {stat.sub}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .results-bar-grid { grid-template-columns: 1fr 1fr !important; }
          .results-bar-item { border-right: none !important; padding: 1rem 0.5rem; }
          .results-bar-item:nth-child(odd) { border-right: 1px solid var(--border) !important; }
        }
        @media (max-width: 480px) {
          .results-bar-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
