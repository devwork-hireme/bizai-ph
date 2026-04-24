"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedStat from "./AnimatedStat";
import type { SystemCardProps } from "@/lib/types";

function TypewriterText({ text, inView }: { text: string; inView: boolean }) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    if (!inView) return;
    let i = 0;
    setDisplayed("");
    const iv = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(iv);
    }, 80);
    return () => clearInterval(iv);
  }, [inView, text]);
  return <span>{displayed || " "}</span>;
}

function ResultStat({ stat, inView }: { stat: string; inView: boolean }) {
  const numeric = /^\d+$/.test(stat);
  const withSuffix = /^(\d+)([a-zA-Z%/]+)$/.exec(stat);

  if (numeric) {
    return <AnimatedStat value={parseInt(stat)} suffix="" />;
  }
  if (withSuffix) {
    return <AnimatedStat value={parseInt(withSuffix[1])} suffix={withSuffix[2]} />;
  }
  return (
    <span style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 800, fontSize: "26px", color: "#e8b84b" }}>
      <TypewriterText text={stat} inView={inView} />
    </span>
  );
}

const badgeStyles = {
  start: {
    bg: "rgba(61,186,110,0.1)",
    border: "1px solid rgba(61,186,110,0.25)",
    color: "#3dba6e",
    label: "● Start Here",
  },
  unlock: {
    bg: "rgba(232,184,75,0.08)",
    border: "1px solid rgba(232,184,75,0.2)",
    color: "#e8b84b",
    label: "→ Unlocks Next",
  },
  complete: {
    bg: "rgba(139,92,246,0.1)",
    border: "1px solid rgba(139,92,246,0.25)",
    color: "#8b5cf6",
    label: "⚡ Complete Machine",
  },
};

export default function SystemCard({
  number,
  badge,
  badgeVariant,
  problem,
  headline,
  description,
  features,
  result,
  resultStat,
  ctaText,
  ctaTier,
  isComingSoon = false,
}: SystemCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const bs = badgeStyles[badgeVariant];

  function scrollToStart() {
    document.getElementById("start")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 32 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.25, 0.4, 0.25, 1] }}
      style={{
        background: "rgba(255,255,255,0.02)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: inView ? "1px solid rgba(232,184,75,0.15)" : "1px solid rgba(255,255,255,0.06)",
        borderRadius: "20px",
        padding: "44px",
        marginBottom: "20px",
        opacity: isComingSoon ? 0.8 : 1,
        boxShadow: inView ? "0 0 40px rgba(232,184,75,0.04)" : "none",
        transition: "border-color 0.4s ease, box-shadow 0.4s ease",
      }}
      className="system-card"
    >
      {/* Row 1 */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontWeight: 500,
            fontSize: "10px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#e8b84b",
          }}
        >
          System {number}
        </span>
        <span
          style={{
            background: bs.bg,
            border: bs.border,
            color: bs.color,
            borderRadius: "40px",
            padding: "5px 14px",
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontWeight: 500,
            fontSize: "11px",
            letterSpacing: "0.5px",
          }}
        >
          {bs.label}
        </span>
      </div>

      {/* Problem line */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <div style={{ width: "20px", height: "1px", background: "#e8b84b", flexShrink: 0 }} />
        <span
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontWeight: 500,
            fontSize: "11px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#888480",
          }}
        >
          {problem}
        </span>
      </div>

      {/* Headline */}
      <h3
        style={{
          fontFamily: "var(--font-syne), sans-serif",
          fontWeight: 700,
          fontSize: "clamp(19px, 2.2vw, 24px)",
          color: "#f0ece4",
          letterSpacing: "-0.02em",
          lineHeight: 1.25,
          marginTop: "10px",
          marginBottom: "12px",
        }}
      >
        {headline}
      </h3>

      {/* Description */}
      <p
        style={{
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontWeight: 300,
          fontSize: "14px",
          color: "#888480",
          lineHeight: 1.85,
          marginBottom: "28px",
        }}
      >
        {description}
      </p>

      {/* Features */}
      <div>
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.07, ease: "easeOut" }}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "10px",
              padding: "9px 0",
              borderBottom: i < features.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
            }}
          >
            <span
              style={{
                color: "#e8b84b",
                fontSize: "10px",
                flexShrink: 0,
                marginTop: "2px",
                fontFamily: "var(--font-dm-sans), sans-serif",
              }}
            >
              →
            </span>
            <span
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: 400,
                fontSize: "13px",
                color: "#c8c4bc",
                lineHeight: 1.5,
              }}
            >
              {f}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Result box */}
      <div
        style={{
          marginTop: "28px",
          background: "rgba(232,184,75,0.05)",
          border: "1px solid rgba(232,184,75,0.12)",
          borderRadius: "12px",
          padding: "18px 22px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 500,
              fontSize: "9px",
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              color: "#888480",
              margin: 0,
            }}
          >
            Result
          </p>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 400,
              fontSize: "13px",
              color: "#c8c4bc",
              margin: 0,
              marginTop: "4px",
            }}
          >
            {result}
          </p>
        </div>
        <div style={{ flexShrink: 0, fontSize: "26px" }}>
          <ResultStat stat={resultStat} inView={inView} />
        </div>
      </div>

      {/* CTA */}
      <div style={{ marginTop: "28px" }}>
        <button
          onClick={scrollToStart}
          data-tier={ctaTier}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: isComingSoon ? "rgba(139,92,246,0.06)" : "rgba(232,184,75,0.1)",
            border: isComingSoon ? "1px solid rgba(139,92,246,0.2)" : "1px solid rgba(232,184,75,0.25)",
            borderRadius: "8px",
            padding: "12px 22px",
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 700,
            fontSize: "11px",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            color: isComingSoon ? "#8b5cf6" : "#e8b84b",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            if (!isComingSoon) {
              e.currentTarget.style.background = "rgba(232,184,75,0.18)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = isComingSoon ? "rgba(139,92,246,0.06)" : "rgba(232,184,75,0.1)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          {ctaText}
        </button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .system-card { padding: 28px !important; }
        }
      `}</style>
    </motion.div>
  );
}
