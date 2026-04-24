"use client";

import { motion, Variants } from "framer-motion";
import CountdownTimer from "@/components/ui/CountdownTimer";
import NeuralGrid from "@/components/ui/NeuralGrid";
import RevenueCounter from "@/components/ui/RevenueCounter";

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

const line1 = ["We", "Don’t", "Do", "Marketing."];
const line2White = ["We", "Build"];
const line2Gold = ["Revenue", "Machines."];

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
      {/* NeuralGrid canvas */}
      <div
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}
      >
        <NeuralGrid />
      </div>

      {/* Aurora orb 1 — top left gold */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-10%",
          left: "-5%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(232,184,75,0.09) 0%, transparent 60%)",
          filter: "blur(40px)",
          animation: "orb1 15s ease-in-out infinite",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      {/* Aurora orb 2 — center right green */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "30%",
          right: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(61,186,110,0.06) 0%, transparent 60%)",
          filter: "blur(50px)",
          animation: "orb2 18s ease-in-out infinite",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      {/* Aurora orb 3 — bottom */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "0",
          left: "30%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(232,184,75,0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
          animation: "orb3 20s ease-in-out infinite",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

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

          {/* H1 — word-by-word reveal */}
          <motion.div variants={item} style={{ marginBottom: "28px" }}>
            <h1
              className="hero-h1"
              style={{
                fontSize: "clamp(40px, 6.5vw, 76px)",
                fontWeight: 700,
                letterSpacing: "-0.035em",
                lineHeight: 0.96,
                color: "#ffffff",
                fontFamily: "var(--font-syne), sans-serif",
              }}
            >
              {line1.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.065, ease: "easeOut" }}
                  style={{ display: "inline-block", marginRight: "0.28em" }}
                >
                  {word}
                </motion.span>
              ))}
              <br />
              {line2White.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.5, delay: 0.4 + (line1.length + i) * 0.065, ease: "easeOut" }}
                  style={{ display: "inline-block", marginRight: "0.28em" }}
                >
                  {word}
                </motion.span>
              ))}
              {line2Gold.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.5, delay: 0.4 + (line1.length + line2White.length + i) * 0.065, ease: "easeOut" }}
                  style={{ display: "inline-block", marginRight: "0.28em", color: "#e8b84b" }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          {/* Sub */}
          <motion.p
            variants={item}
            style={{
              fontSize: "clamp(1rem, 2.2vw, 1.2rem)",
              color: "rgba(255,255,255,0.6)",
              maxWidth: "640px",
              margin: "0 auto 28px",
              lineHeight: 1.75,
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
          >
            AI-powered digital presence, automation, and smart marketing — one
            system that finds customers, answers every inquiry, and grows your
            revenue automatically. Starting ₱3,999.
          </motion.p>

          {/* Revenue counter */}
          <motion.div variants={item} style={{ marginBottom: "36px" }}>
            <RevenueCounter />
          </motion.div>

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

          {/* Trust badges — 2×2 grid on mobile */}
          <motion.div
            variants={item}
            className="hero-trust-grid"
            style={{
              display: "flex",
              gap: "20px 28px",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "40px",
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

          {/* Countdown timer */}
          <motion.div variants={item} style={{ display: "flex", justifyContent: "center" }}>
            <CountdownTimer size="md" />
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
          .hero-h1 {
            font-size: clamp(36px, 8vw, 48px) !important;
            line-height: 1.05 !important;
          }
          .hero-trust-grid {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 12px !important;
            justify-items: start !important;
            max-width: 280px !important;
            margin: 0 auto 40px !important;
          }
        }
        @media (max-width: 480px) {
          .hero-section svg[aria-hidden] { display: none; }
        }
      `}</style>
    </section>
  );
}
