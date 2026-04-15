"use client";

import { useRef } from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { MessageSquare, Zap, CheckCircle, TrendingUp, ArrowRight } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

const steps = [
  {
    number: "01",
    Icon: MessageSquare,
    title: "Getting Started",
    duration: "30 minutes",
    body: "One free 30-minute call. You tell us your biggest challenge. We show you exactly what results you'll get. No commitment. No technical knowledge needed.",
  },
  {
    number: "02",
    Icon: Zap,
    title: "We Build Everything",
    duration: "Days 1–3",
    body: "You give us your business details. We handle every technical step — website, bot, Google setup, integrations. You do almost nothing.",
  },
  {
    number: "03",
    Icon: CheckCircle,
    title: "Live in 3–5 Days",
    duration: "Day 3–5",
    body: "Your systems go live. Customers start finding you on Google. Every inquiry gets answered automatically. Leads are captured and followed up.",
  },
  {
    number: "04",
    Icon: TrendingUp,
    title: "Results Keep Growing",
    duration: "Ongoing",
    body: "Every month your results compound. More customers found you. More leads converted. More reviews built your reputation. We report everything to you.",
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
            "linear-gradient(rgba(26,58,107,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(26,58,107,0.4) 1px, transparent 1px)",
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
          <p className="section-label">
            How It Works
          </p>
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
            Live in 3–5 Days.{" "}
            <span style={{ color: "#F5C518" }}>You Do Almost Nothing.</span>
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "rgba(255,255,255,0.55)",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.78,
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
          >
            Four steps. We handle everything technical. You focus on running
            your business.
          </p>
        </motion.div>

        {/* Steps */}
        <div ref={stepsRef} style={{ position: "relative" }}>
          {/* Connector line */}
          <div
            aria-hidden="true"
            className="process-connector"
            style={{
              position: "absolute",
              top: "28px",
              left: "12%",
              right: "12%",
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(245,197,24,0.25), rgba(245,197,24,0.25), transparent)",
              pointerEvents: "none",
            }}
          />

          <div
            className="process-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1.5rem",
              position: "relative",
            }}
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
                    background: "var(--navy-mid)",
                    border: "1px solid rgba(245,197,24,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.5rem",
                    color: "#F5C518",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <step.Icon size={20} />
                </div>

                {/* Step label */}
                <p
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: "#F5C518",
                    marginBottom: "0.4rem",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                  }}
                >
                  Step {step.number}
                </p>

                {/* Title */}
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    lineHeight: 1.3,
                    marginBottom: "0.4rem",
                    fontFamily: "var(--font-syne), sans-serif",
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
                      color: "#22C55E",
                      background: "rgba(34,197,94,0.08)",
                      border: "1px solid rgba(34,197,94,0.2)",
                      padding: "2px 10px",
                      borderRadius: "100px",
                      fontFamily: "var(--font-dm-sans), sans-serif",
                    }}
                  >
                    {step.duration}
                  </span>
                </div>

                {/* Body */}
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.7,
                    margin: 0,
                    fontFamily: "var(--font-dm-sans), sans-serif",
                  }}
                >
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
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
              color: "rgba(255,255,255,0.4)",
              marginBottom: "1.5rem",
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
          >
            The first step is free. Results in 3–5 days.
          </p>
          <a
            href="#contact"
            className="btn-primary"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{ gap: "8px" }}
          >
            Get More Customers
            <ArrowRight size={16} />
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
