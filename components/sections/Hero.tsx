"use client";

import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const trustBadges = [
  "Live in 24 Hours",
  "AI-Powered 24/7",
  "30-Day Guarantee",
  "Cancel Anytime",
];

export default function Hero() {
  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "#0a0a0a",
        paddingTop: "120px",
        paddingBottom: "80px",
        paddingLeft: "64px",
        paddingRight: "64px",
      }}
    >
      {/* Radial gradient backgrounds */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "900px",
          height: "700px",
          background:
            "radial-gradient(ellipse, rgba(232,184,75,0.06) 0%, transparent 65%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(ellipse, rgba(61,186,110,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* SVG grain overlay */}
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 0,
          opacity: 0.03,
        }}
      >
        <filter id="grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>

      {/* Content */}
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          width: "100%",
        }}
      >
        <motion.div variants={container} initial="hidden" animate="visible">
          {/* Eyebrow */}
          <motion.p
            variants={item}
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#e8b84b",
              marginBottom: "20px",
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
          >
            The Revenue Machine for Philippine Businesses
          </motion.p>

          {/* Promo badge */}
          <motion.div variants={item} style={{ marginBottom: "28px" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "8px 20px",
                background: "rgba(61,186,110,0.08)",
                border: "1px solid rgba(61,186,110,0.25)",
                borderRadius: "100px",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#3dba6e",
                  animation: "pulse-ring 2s infinite",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  color: "#3dba6e",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                }}
              >
                50% Off — April and May 2026 Only
              </span>
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={item}
            style={{
              fontSize: "clamp(36px, 7vw, 80px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              color: "#ffffff",
              marginBottom: "24px",
              fontFamily: "var(--font-syne), sans-serif",
            }}
          >
            We Don&apos;t Do Marketing.
            <br />
            We Build{" "}
            <span style={{ color: "#e8b84b" }}>Revenue Machines.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={item}
            style={{
              fontSize: "clamp(1rem, 2.2vw, 1.2rem)",
              color: "rgba(255,255,255,0.6)",
              maxWidth: "640px",
              margin: "0 auto 36px",
              lineHeight: 1.75,
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
          >
            AI-powered digital presence, automation, and smart marketing — one
            system that finds customers, answers every inquiry, and grows your
            revenue automatically. Starting ₱3,999.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            style={{
              display: "flex",
              gap: "14px",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "52px",
            }}
          >
            <button
              onClick={() => scrollTo("start")}
              className="btn-primary"
              style={{ fontSize: "1rem", padding: "14px 32px" }}
            >
              Start Free Session →
            </button>
            <button
              onClick={() => scrollTo("pricing")}
              className="btn-ghost"
              style={{ fontSize: "1rem", padding: "14px 32px" }}
            >
              See Our Systems
            </button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={item}
            style={{
              display: "flex",
              gap: "28px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {trustBadges.map((badge) => (
              <div
                key={badge}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "7px",
                  fontSize: "0.82rem",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.45)",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                }}
              >
                <span style={{ color: "#3dba6e", fontSize: "0.9rem" }}>✓</span>
                {badge}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-section {
            padding-left: 24px !important;
            padding-right: 24px !important;
            padding-top: 100px !important;
          }
        }
      `}</style>
    </section>
  );
}
