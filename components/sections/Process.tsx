"use client";

import { useRef } from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { CalendarCheck, Wrench, Rocket, BarChart3 } from "lucide-react";

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
    title: "Book Free 30-Min Session",
    duration: "30 minutes",
    body: "We understand your business, your goals, and your biggest challenges. We then recommend the right package for you. No obligation. No technical knowledge needed.",
    icon: <CalendarCheck size={20} />,
  },
  {
    number: "02",
    title: "We Build Everything",
    duration: "Days 1–3",
    body: "Website, automations, bots — we build it all. You just provide basic business info (name, services, photos). We handle every technical detail from setup to launch.",
    icon: <Wrench size={20} />,
  },
  {
    number: "03",
    title: "Go Live in 3–5 Days",
    duration: "Day 3–5",
    body: "Your business goes live online. Customers can find you on Google, message your bot, and book automatically — all while you focus on running your business.",
    icon: <Rocket size={20} />,
  },
  {
    number: "04",
    title: "We Manage and Grow",
    duration: "Ongoing",
    body: "Monthly reports, maintenance, content posting, lead tracking — all handled for you. We stay with you and make sure your digital presence keeps growing.",
    icon: <BarChart3 size={20} />,
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
        borderTop: "1px solid rgba(255,255,255,0.05)",
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
            "linear-gradient(rgba(245,197,24,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(245,197,24,0.02) 1px, transparent 1px)",
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
              fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: "#FFFFFF",
              marginBottom: "20px",
              fontFamily: "var(--font-syne), sans-serif",
            }}
          >
            Live in 3–5 Days.{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #F5C518, #FFD94A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Not 3–5 Months.
            </span>
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "rgba(255,255,255,0.55)",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.78,
              fontWeight: 400,
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
          >
            A simple, four-step process from first call to fully operational digital presence —
            with zero technical work required on your end.
          </p>
        </motion.div>

        {/* Steps */}
        <div ref={stepsRef}>
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
                  "linear-gradient(90deg, transparent, rgba(245,197,24,0.25), rgba(245,197,24,0.25), transparent)",
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
                      background: "rgba(255,255,255,0.05)",
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
                    {step.icon}
                  </div>

                  {/* Step number */}
                  <p
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      color: "#F5C518",
                      marginBottom: "0.5rem",
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
              color: "rgba(255,255,255,0.5)",
              marginBottom: "1.5rem",
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
          >
            Ready to start? The first step is a free 30-minute session.
          </p>
          <a
            href="#contact"
            className="btn-primary"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Book Free 30-Min Session
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
