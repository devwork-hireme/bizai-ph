"use client";

import { useRef } from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
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
      style={{
        background: "var(--deep)",
        borderTop: "1px solid var(--border)",
        padding: "6.5rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          ref={headRef}
          variants={fadeUp}
          initial="hidden"
          animate={headInView ? "visible" : "hidden"}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <p className="section-label">The Solution</p>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              color: "var(--white)",
              marginBottom: "1.25rem",
            }}
          >
            Your Business on{" "}
            <span
              style={{
                fontFamily: "var(--font-baskerville), serif",
                fontStyle: "italic",
                fontWeight: 400,
                background: "linear-gradient(135deg, var(--blue-light), var(--cyan))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Autopilot
            </span>
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--soft)",
              maxWidth: "580px",
              margin: "0 auto",
              lineHeight: 1.78,
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
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.25rem",
            marginBottom: "5rem",
          }}
          className="compare-grid"
        >
          {/* Before */}
          <div
            style={{
              background: "rgba(239,68,68,0.04)",
              border: "1px solid rgba(239,68,68,0.15)",
              borderRadius: "16px",
              padding: "2rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                marginBottom: "1.5rem",
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
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "rgba(239,68,68,0.7)",
                }}
              >
                Before BizAI PH
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {beforeItems.map((item) => (
                <div
                  key={item}
                  style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(239,68,68,0.6)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ flexShrink: 0, marginTop: "2px" }}
                  >
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                  <span
                    style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.55 }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* After */}
          <div
            style={{
              background: "rgba(0,229,160,0.04)",
              border: "1px solid rgba(0,229,160,0.18)",
              borderRadius: "16px",
              padding: "2rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                marginBottom: "1.5rem",
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
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--green)",
                }}
              >
                After BizAI PH
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {afterItems.map((item) => (
                <div
                  key={item}
                  style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}
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
                    style={{ flexShrink: 0, marginTop: "2px" }}
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span
                    style={{ fontSize: "0.9rem", color: "var(--soft)", lineHeight: 1.55 }}
                  >
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
            style={{ textAlign: "center", marginBottom: "3rem" }}
          >
            <p className="section-label">How It Works</p>
            <h3
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                color: "var(--white)",
              }}
            >
              From Audit to Automation in 3 Steps
            </h3>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2rem",
            }}
            className="steps-grid"
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
                  border: "1px solid var(--border)",
                  borderRadius: "14px",
                  padding: "2rem",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    fontSize: "2.8rem",
                    fontWeight: 900,
                    letterSpacing: "-0.06em",
                    color: "var(--border-mid)",
                    lineHeight: 1,
                    marginBottom: "1.25rem",
                    fontFamily: "var(--font-outfit), sans-serif",
                  }}
                >
                  {step.number}
                </div>
                <h4
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "var(--white)",
                    marginBottom: "0.65rem",
                  }}
                >
                  {step.title}
                </h4>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--muted)",
                    lineHeight: 1.72,
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
        @media (max-width: 768px) {
          .compare-grid { grid-template-columns: 1fr !important; }
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
