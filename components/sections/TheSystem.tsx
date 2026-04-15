"use client";

import { useRef } from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { Search, MessageCircle, TrendingUp, ArrowRight } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] },
  }),
};

const systemSteps = [
  {
    number: "01",
    Icon: Search,
    color: "#F5C518",
    colorBg: "rgba(245,197,24,0.08)",
    colorBorder: "rgba(245,197,24,0.2)",
    title: "Get Customers",
    subtitle: "They find you first. Every time.",
    body: "We build your professional website, set up your Google My Business listing, and get you on Google Maps. When someone searches for what you sell, you show up — before your competitors.",
    deliverables: [
      "Professional 5-page website",
      "Google My Business setup",
      "Google Maps listing",
      "SEO foundation",
    ],
    result: "Customers find you on Google every day",
  },
  {
    number: "02",
    Icon: MessageCircle,
    color: "#22C55E",
    colorBg: "rgba(34,197,94,0.08)",
    colorBorder: "rgba(34,197,94,0.2)",
    title: "Close Sales",
    subtitle: "Every inquiry becomes a customer.",
    body: "We build a 24/7 Messenger bot that answers every inquiry instantly — even at 2AM. No lead goes cold. Every interested person gets a reply in seconds. Every follow-up happens automatically.",
    deliverables: [
      "24/7 Messenger bot",
      "Automated lead capture",
      "Instant reply system",
      "Automated follow-ups",
    ],
    result: "Inquiries convert to customers while you sleep",
  },
  {
    number: "03",
    Icon: TrendingUp,
    color: "#F5C518",
    colorBg: "rgba(245,197,24,0.08)",
    colorBorder: "rgba(245,197,24,0.2)",
    title: "Grow Automatically",
    subtitle: "Revenue grows. Work stays the same.",
    body: "We automate your Google reviews, post on Facebook 3x per week, and send you a monthly report showing exactly how your business is growing. Your reputation builds itself. Your sales grow on autopilot.",
    deliverables: [
      "Automated Google reviews",
      "3x Facebook posts per week",
      "Monthly performance report",
      "Ongoing optimization",
    ],
    result: "Revenue and reputation grow every month",
  },
];

export default function TheSystem() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-50px" });
  const stepsRef = useRef(null);
  const stepsInView = useInView(stepsRef, { once: true, margin: "-50px" });

  return (
    <section
      id="system"
      className="system-section"
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
          style={{ textAlign: "center", marginBottom: "72px" }}
        >
          <p className="section-label">The System</p>
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
            We Don&apos;t Just Do Marketing.{" "}
            <span style={{ color: "#F5C518" }}>We Build Systems.</span>
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
            Three systems that work together — getting you found, converting
            inquiries into customers, and growing your revenue automatically.
          </p>
        </motion.div>

        {/* Steps */}
        <div
          ref={stepsRef}
          className="system-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
        >
          {systemSteps.map((step, i) => (
            <motion.div
              key={step.title}
              variants={fadeUp}
              initial="hidden"
              animate={stepsInView ? "visible" : "hidden"}
              custom={0.12 * i}
              style={{
                background: "var(--navy-mid)",
                border: "1px solid var(--navy-border)",
                borderRadius: "16px",
                padding: "36px 28px",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Gold top accent */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: `linear-gradient(90deg, ${step.color}, transparent)`,
                  borderRadius: "16px 16px 0 0",
                }}
              />

              {/* Step number */}
              <p
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: step.color,
                  marginBottom: "16px",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                }}
              >
                System {step.number}
              </p>

              {/* Icon */}
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "14px",
                  background: step.colorBg,
                  border: `1px solid ${step.colorBorder}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: step.color,
                  marginBottom: "20px",
                  flexShrink: 0,
                }}
              >
                <step.Icon size={22} />
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  marginBottom: "4px",
                  letterSpacing: "-0.02em",
                  fontFamily: "var(--font-syne), sans-serif",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  color: step.color,
                  marginBottom: "16px",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                }}
              >
                {step.subtitle}
              </p>

              <p
                style={{
                  fontSize: "0.875rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.75,
                  marginBottom: "20px",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                }}
              >
                {step.body}
              </p>

              {/* Deliverables */}
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  marginBottom: "20px",
                }}
              >
                {step.deliverables.map((d) => (
                  <div
                    key={d}
                    style={{ display: "flex", alignItems: "center", gap: "8px" }}
                  >
                    <span
                      style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        background: step.color,
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontSize: "0.82rem",
                        color: "rgba(255,255,255,0.6)",
                        fontFamily: "var(--font-dm-sans), sans-serif",
                      }}
                    >
                      {d}
                    </span>
                  </div>
                ))}
              </div>

              {/* Result */}
              <div
                style={{
                  padding: "12px 16px",
                  background: "rgba(34,197,94,0.06)",
                  border: "1px solid rgba(34,197,94,0.15)",
                  borderRadius: "10px",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "#22C55E",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  lineHeight: 1.5,
                }}
              >
                Result: {step.result}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={stepsInView ? "visible" : "hidden"}
          custom={0.4}
          style={{ textAlign: "center", marginTop: "4rem" }}
        >
          <p
            style={{
              fontSize: "0.9rem",
              color: "rgba(255,255,255,0.45)",
              marginBottom: "1.5rem",
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
          >
            All three systems. Done for you. Starting ₱3,999.
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
          .system-section { padding: 80px 24px !important; }
          .system-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
