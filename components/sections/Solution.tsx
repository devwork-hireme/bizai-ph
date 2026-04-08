"use client";

import { useRef } from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] },
  }),
};

const beforeItems = [
  "4–8 hour average response time",
  "Manual order copying & data entry",
  "Leads lost to slow follow-up",
  "Appointments managed through chat",
  "No reporting or business visibility",
  "20+ hours/week on repetitive admin",
];

const afterItems = [
  "Instant automated response, 24/7",
  "Orders captured and logged automatically",
  "Every lead followed up within minutes",
  "Self-service booking with confirmations",
  "Live dashboard updated in real time",
  "Your time spent on growth, not admin",
];

const steps = [
  {
    number: "01",
    title: "Free 30-Minute Audit",
    body: "We identify exactly which tasks in your business are costing you the most time and revenue — and show you the exact automation that fixes each one.",
  },
  {
    number: "02",
    title: "We Build Your System",
    body: "Our team designs and deploys your automation using n8n, Make.com, and the Meta API. You do not write a single line of code. Average build time: 48 hours.",
  },
  {
    number: "03",
    title: "Live and Fully Managed",
    body: "Your system goes live. We monitor it, fix any issues before they affect you, and handle all updates. You get the results without the technical headache.",
  },
];

export default function Solution() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-50px" });
  const stepsRef = useRef(null);
  const stepsInView = useInView(stepsRef, { once: true, margin: "-50px" });

  return (
    <section
      id="solution"
      className="solution-section"
      style={{
        background: "var(--deep)",
        borderTop: "1px solid var(--card-border)",
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
      {/* Blue glow left */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "30%",
          left: "-200px",
          width: "600px",
          height: "600px",
          background: "rgba(245,197,24,0.05)",
          filter: "blur(100px)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div
          ref={headRef}
          variants={fadeUp}
          initial="hidden"
          animate={headInView ? "visible" : "hidden"}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <p className="section-label">The Solution</p>
          <h2
            style={{
              fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 1.0,
              color: "var(--white)",
              marginBottom: "20px",
            }}
          >
            What Happens When{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #F5C518, #FFD94A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              We Take Over
            </span>
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--soft)",
              maxWidth: "560px",
              margin: "0 auto",
              lineHeight: 1.85,
              fontWeight: 300,
            }}
          >
            We replace manual, time-consuming tasks with intelligent automation
            systems that work around the clock — so you can focus on what
            actually grows your business.
          </p>
        </motion.div>

        {/* Before / After comparison */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={headInView ? "visible" : "hidden"}
          custom={0.1}
          className="compare-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1px",
            background: "var(--card-border)",
            borderRadius: "16px",
            overflow: "hidden",
            marginBottom: "80px",
          }}
        >
          {/* Before */}
          <div
            style={{
              background: "rgba(239,68,68,0.03)",
              padding: "40px 36px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                marginBottom: "28px",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "rgba(239,68,68,0.7)",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.16em",
                  color: "rgba(239,68,68,0.7)",
                }}
              >
                Before BizAI PH
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {beforeItems.map((item) => (
                <div
                  key={item}
                  style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(239,68,68,0.5)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ flexShrink: 0, marginTop: "3px" }}
                  >
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                  <span style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.6, fontWeight: 300 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* After */}
          <div
            style={{
              background: "rgba(0,229,160,0.03)",
              padding: "40px 36px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                marginBottom: "28px",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "var(--green)",
                  boxShadow: "0 0 8px var(--green)",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.16em",
                  color: "var(--green)",
                }}
              >
                After BizAI PH
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {afterItems.map((item) => (
                <div
                  key={item}
                  style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--green)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ flexShrink: 0, marginTop: "3px" }}
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span style={{ fontSize: "0.9rem", color: "var(--soft)", lineHeight: 1.6, fontWeight: 300 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 3-step process */}
        <div ref={stepsRef}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={stepsInView ? "visible" : "hidden"}
            style={{ textAlign: "center", marginBottom: "48px" }}
          >
            <p className="section-label">How It Works</p>
            <h3
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                lineHeight: 1.0,
                color: "var(--white)",
              }}
            >
              From Audit to Automation in 3 Steps
            </h3>
          </motion.div>

          <div
            className="steps-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1px",
              background: "var(--card-border)",
              borderRadius: "14px",
              overflow: "hidden",
            }}
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                initial="hidden"
                animate={stepsInView ? "visible" : "hidden"}
                custom={0.08 * i}
                style={{
                  background: "var(--card)",
                  padding: "40px 32px",
                  position: "relative",
                  transition: "background 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--card-hover)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--card)";
                }}
              >
                <div
                  style={{
                    fontSize: "3.5rem",
                    fontWeight: 900,
                    letterSpacing: "-0.06em",
                    color: "rgba(245,197,24,0.12)",
                    lineHeight: 1,
                    marginBottom: "20px",
                  }}
                >
                  {step.number}
                </div>
                <h4
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    letterSpacing: "-0.01em",
                    color: "var(--white)",
                    marginBottom: "12px",
                  }}
                >
                  {step.title}
                </h4>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--soft)",
                    lineHeight: 1.8,
                    fontWeight: 300,
                    margin: 0,
                  }}
                >
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .solution-section { padding: 80px 24px !important; }
          .compare-grid { grid-template-columns: 1fr !important; }
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
