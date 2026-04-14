"use client";

import { useRef } from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { Search, MessageCircle, TrendingUp, Zap } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

const results = [
  {
    number: "01",
    Icon: Search,
    title: "Customers Find You",
    body: "Right now someone is searching for exactly what you offer. They find your competitor. Not you. We make sure they find you — every single time.",
    tag: "Basic — ₱3,999 one-time",
    featured: false,
    muted: false,
  },
  {
    number: "02",
    Icon: MessageCircle,
    title: "Leads Come In Automatically",
    body: "Every inquiry answered before you wake up. Every lead captured before they message someone else. Every night — without you doing anything.",
    tag: "Starter — from ₱2,999/mo",
    featured: true,
    muted: false,
  },
  {
    number: "03",
    Icon: TrendingUp,
    title: "Leads Become Customers",
    body: "Getting leads means nothing if they don't buy. We make sure every lead is followed up, every appointment booked, and every sale closed — automatically.",
    tag: "Growth — from ₱7,999/mo",
    featured: false,
    muted: false,
  },
  {
    number: "04",
    Icon: Zap,
    title: "Revenue Grows Automatically",
    body: "Systems that compound. Results that multiply. Revenue that grows — whether you're working, sleeping, or on vacation.",
    tag: "Scale — Coming Soon",
    featured: false,
    muted: true,
  },
];

export default function FourResults() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-50px" });

  return (
    <section
      id="results"
      className="four-results-section"
      style={{
        background: "var(--navy)",
        borderTop: "1px solid var(--navy-border)",
        padding: "130px 64px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid background */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(26,58,107,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(26,58,107,0.5) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <motion.div
          ref={headRef}
          variants={fadeUp}
          initial="hidden"
          animate={headInView ? "visible" : "hidden"}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <p className="section-label">What We Deliver</p>
          <h2
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: "#FFFFFF",
              marginBottom: "20px",
              fontFamily: "var(--font-syne), sans-serif",
            }}
          >
            Four Results.{" "}
            <span style={{ color: "#F5C518" }}>One Complete System.</span>
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "rgba(255,255,255,0.55)",
              maxWidth: "540px",
              margin: "0 auto",
              lineHeight: 1.78,
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
          >
            Most Filipino businesses are missing at least one. We make sure you
            have all four.
          </p>
        </motion.div>

        {/* Result cards */}
        <div
          className="results-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.25rem",
            marginBottom: "3rem",
          }}
        >
          {results.map((r, i) => (
            <motion.div
              key={r.number}
              variants={fadeUp}
              initial="hidden"
              animate={headInView ? "visible" : "hidden"}
              custom={0.08 * i}
              style={{
                background: r.featured ? "rgba(245,197,24,0.04)" : "var(--navy-mid)",
                border: `1px solid ${r.featured ? "#F5C518" : "var(--navy-border)"}`,
                borderRadius: "16px",
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
                opacity: r.muted ? 0.55 : 1,
                boxShadow: r.featured ? "0 0 30px rgba(245,197,24,0.1)" : "none",
              }}
            >
              {/* Number + Icon row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "20px",
                }}
              >
                <span
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    color: r.featured ? "#F5C518" : "rgba(255,255,255,0.25)",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                  }}
                >
                  {r.number}
                </span>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: r.featured ? "rgba(245,197,24,0.12)" : "rgba(255,255,255,0.05)",
                    border: `1px solid ${r.featured ? "rgba(245,197,24,0.3)" : "rgba(255,255,255,0.08)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: r.featured ? "#F5C518" : "rgba(255,255,255,0.4)",
                  }}
                >
                  <r.Icon size={18} />
                </div>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  marginBottom: "12px",
                  lineHeight: 1.3,
                  fontFamily: "var(--font-syne), sans-serif",
                }}
              >
                {r.title}
              </h3>

              {/* Body */}
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.75,
                  flex: 1,
                  marginBottom: "20px",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                }}
              >
                {r.body}
              </p>

              {/* Tag */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "4px 12px",
                  background: r.featured ? "rgba(245,197,24,0.12)" : "rgba(255,255,255,0.05)",
                  border: `1px solid ${r.featured ? "rgba(245,197,24,0.3)" : "rgba(255,255,255,0.1)"}`,
                  borderRadius: "100px",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  color: r.featured ? "#F5C518" : "rgba(255,255,255,0.35)",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  alignSelf: "flex-start",
                }}
              >
                {r.tag}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statement below */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={headInView ? "visible" : "hidden"}
          custom={0.35}
          style={{
            textAlign: "center",
            fontSize: "1rem",
            fontWeight: 700,
            color: "#F5C518",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: 1.6,
            fontFamily: "var(--font-syne), sans-serif",
          }}
        >
          These are the only four things that matter for your business growth.
          We deliver all four. You run your business.
        </motion.p>
      </div>

      <style>{`
        @media (max-width: 1000px) {
          .four-results-section { padding: 80px 24px !important; }
          .results-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .results-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
