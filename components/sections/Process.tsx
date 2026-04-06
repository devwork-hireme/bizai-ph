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

type Step = {
  number: string;
  title: string;
  duration: string;
  body: string;
  icon: React.ReactNode;
};

const steps: Step[] = [
  {
    number: "01",
    title: "Free Automation Audit",
    duration: "30 minutes",
    body: "We map your current workflow and identify the 3 highest-impact processes to automate first. No cost. No obligation. You leave with a clear picture of what is possible.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "We Design Your System",
    duration: "Within 24 hours",
    body: "Our team maps the exact automation workflow, selects the right tools, and sends you a clear proposal with expected outcomes. You approve — we build.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Build and Test",
    duration: "Within 48 hours",
    body: "We build, configure, and thoroughly test every part of your automation system. You review it live on a test environment. Nothing goes live until you are fully satisfied.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    number: "04",
    title: "Go Live + Ongoing Management",
    duration: "Day 3 onward",
    body: "Your system launches. We monitor performance, fix any issues before they reach you, and optimize based on real data. You grow. We handle the technology.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
];

export default function Process() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-50px" });
  const stepsRef = useRef(null);
  const stepsInView = useInView(stepsRef, { once: true, margin: "-50px" });

  return (
    <section
      id="process"
      className="process-section"
      style={{
        background: "var(--black)",
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
            "linear-gradient(rgba(82,130,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(82,130,255,0.03) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
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
          <p className="section-label">How It Works</p>
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
            Live in 48 Hours.{" "}
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
              Not 48 Days.
            </span>
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--soft)",
              maxWidth: "540px",
              margin: "0 auto",
              lineHeight: 1.78,
              fontWeight: 300,
            }}
          >
            A clear, no-nonsense process from first call to fully operational
            automation — with zero technical knowledge required on your end.
          </p>
        </motion.div>

        {/* Steps — horizontal track */}
        <div ref={stepsRef}>
          {/* Desktop: horizontal connector line */}
          <div
            style={{ position: "relative" }}
            className="process-track"
          >
            {/* Connector line */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: "28px",
                left: "10%",
                right: "10%",
                height: "1px",
                background:
                  "linear-gradient(90deg, transparent, var(--border-mid), var(--border-mid), transparent)",
                pointerEvents: "none",
              }}
              className="process-connector"
            />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "1.5rem",
                position: "relative",
              }}
              className="process-grid"
            >
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  variants={fadeUp}
                  initial="hidden"
                  animate={stepsInView ? "visible" : "hidden"}
                  custom={0.1 * i}
                  style={{ textAlign: "center" }}
                >
                  {/* Icon circle */}
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "50%",
                      background: "var(--card)",
                      border: "1px solid var(--border-mid)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 1.5rem",
                      color: "var(--blue-light)",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {step.icon}
                  </div>

                  {/* Step number */}
                  <p
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      color: "var(--blue-light)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Step {step.number}
                  </p>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "var(--white)",
                      lineHeight: 1.3,
                      marginBottom: "0.4rem",
                    }}
                  >
                    {step.title}
                  </h3>

                  {/* Duration badge */}
                  <div style={{ marginBottom: "0.75rem" }}>
                    <span
                      style={{
                        display: "inline-block",
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        color: "var(--green)",
                        background: "rgba(0,229,160,0.07)",
                        border: "1px solid rgba(0,229,160,0.18)",
                        padding: "2px 10px",
                        borderRadius: "100px",
                      }}
                    >
                      {step.duration}
                    </span>
                  </div>

                  {/* Body */}
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--muted)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {step.body}
                  </p>
                  {i === 0 && (
                    <a
                      href="https://calendly.com/devwork2025-proton/free-ai-automation-audit"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-block",
                        marginTop: "12px",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        color: "var(--blue-light)",
                        textDecoration: "none",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cyan)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--blue-light)")}
                    >
                      Book your free audit →
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA below process */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={stepsInView ? "visible" : "hidden"}
          custom={0.45}
          style={{ textAlign: "center", marginTop: "4rem" }}
        >
          <p
            style={{
              fontSize: "0.9rem",
              color: "var(--soft)",
              marginBottom: "1.5rem",
            }}
          >
            Ready to start? The first step is a free 30-minute call.
          </p>
          <a
            href="#contact"
            className="btn-primary"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Book Your Free Audit
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .process-section { padding: 80px 24px !important; }
          .process-connector { display: none !important; }
          .process-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
