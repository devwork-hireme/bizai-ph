"use client";

import { motion, Variants } from "framer-motion";
import { CheckCircle, ArrowRight, Flame } from "lucide-react";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

const whatYouGet = [
  "Professional Website — live in 3–5 days",
  "24/7 Messenger Bot — never miss an inquiry",
  "Google My Business — found on Maps & Search",
  "Automated Facebook Posts — 3x per week",
  "Google Review System — auto-requested after every sale",
  "Monthly Performance Report — via WhatsApp",
];

const trustItems = [
  "Live in 3–5 Days",
  "Month-to-Month, No Lock-In",
  "100% Done For You",
  "30-Day Performance Guarantee",
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
        background: "var(--navy)",
        paddingTop: "calc(var(--announcement-bar-height) + 120px)",
        paddingBottom: "80px",
        paddingLeft: "64px",
        paddingRight: "64px",
      }}
    >
      {/* Dot grid background */}
      <div
        aria-hidden="true"
        className="dot-grid-bg"
        style={{
          position: "absolute",
          inset: 0,
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 40%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 40%, black, transparent)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Gold radial glow behind headline */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "20%",
          left: "30%",
          width: "600px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(245,197,24,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Two-column layout */}
      <div
        className="hero-inner"
        style={{
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          alignItems: "center",
        }}
      >
        {/* LEFT — Text content */}
        <motion.div variants={container} initial="hidden" animate="visible">
          {/* Eyebrow badge */}
          <motion.div variants={item} style={{ marginBottom: "28px" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "8px 20px",
                background: "rgba(245,197,24,0.07)",
                border: "1px solid rgba(245,197,24,0.22)",
                borderRadius: "100px",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#22C55E",
                  animation: "pulse-ring 2s infinite",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  color: "#F5C518",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  whiteSpace: "nowrap",
                }}
              >
                Built on AI. Run by Experts.
              </span>
            </span>
          </motion.div>

          {/* H1 — three lines */}
          <motion.h1
            variants={item}
            style={{
              fontSize: "clamp(2.6rem, 5.5vw, 4.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: "#FFFFFF",
              marginBottom: "24px",
              fontFamily: "var(--font-syne), sans-serif",
            }}
          >
            Your Competitor
            <br />
            Is Online.
            <br />
            <span style={{ color: "#F5C518" }}>
              Are You?
            </span>
          </motion.h1>

          {/* Body */}
          <motion.p
            variants={item}
            style={{
              fontSize: "1rem",
              color: "rgba(255,255,255,0.62)",
              maxWidth: "480px",
              marginBottom: "20px",
              lineHeight: 1.78,
              fontWeight: 400,
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
          >
            We build your website, automate your leads, and manage your social
            media — fully done for you, powered by AI. No technical knowledge
            needed. Your business goes live in 3–5 days.
          </motion.p>

          {/* Promo badge */}
          <motion.div variants={item} style={{ marginBottom: "32px" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "7px 18px",
                background: "rgba(245,197,24,0.1)",
                border: "1px solid rgba(245,197,24,0.3)",
                borderRadius: "100px",
                fontSize: "0.8rem",
                fontWeight: 700,
                color: "#F5C518",
                fontFamily: "var(--font-dm-sans), sans-serif",
              }}
            >
              <Flame size={14} style={{ flexShrink: 0 }} />
              50% Off Launch Promo — April to May 2026 Only
            </span>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            variants={item}
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              marginBottom: "48px",
            }}
          >
            <a
              href="#contact"
              className="btn-primary"
              onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}
              style={{ gap: "8px" }}
            >
              Book Free 30-Min Session
              <ArrowRight size={16} />
            </a>
            <a
              href="#pricing"
              className="btn-ghost"
              onClick={(e) => { e.preventDefault(); scrollTo("pricing"); }}
              style={{ border: "1.5px solid rgba(255,255,255,0.35)", color: "#FFFFFF" }}
            >
              See Our Packages
            </a>
          </motion.div>

          {/* Trust row */}
          <motion.div
            variants={item}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {trustItems.map((badge) => (
              <div
                key={badge}
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <CheckCircle
                  size={15}
                  style={{ color: "#22C55E", flexShrink: 0 }}
                />
                <span
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.55)",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                  }}
                >
                  {badge}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT — What You Get card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div
            style={{
              background: "var(--navy-mid)",
              border: "2px solid rgba(245,197,24,0.35)",
              borderRadius: "20px",
              padding: "36px 32px",
              position: "relative",
              overflow: "hidden",
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
                background: "linear-gradient(90deg, #F5C518, #FFD94A)",
                borderRadius: "20px 20px 0 0",
              }}
            />
            {/* Glow */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "180px",
                background:
                  "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(245,197,24,0.07) 0%, transparent 100%)",
                pointerEvents: "none",
              }}
            />

            <div style={{ position: "relative" }}>
              {/* Card header */}
              <div style={{ marginBottom: "28px" }}>
                <p
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#F5C518",
                    marginBottom: "8px",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                  }}
                >
                  What You Get
                </p>
                <h2
                  style={{
                    fontSize: "1.45rem",
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                    color: "#FFFFFF",
                    lineHeight: 1.2,
                    fontFamily: "var(--font-syne), sans-serif",
                  }}
                >
                  Everything. Done for you.
                </h2>
              </div>

              {/* Feature list */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {whatYouGet.map((feature, i) => (
                  <div
                    key={feature}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      padding: "13px 0",
                      borderBottom:
                        i < whatYouGet.length - 1
                          ? "1px solid var(--navy-border)"
                          : "none",
                    }}
                  >
                    <CheckCircle
                      size={16}
                      style={{ color: "#22C55E", flexShrink: 0, marginTop: "2px" }}
                    />
                    <span
                      style={{
                        fontSize: "0.875rem",
                        fontWeight: 500,
                        color: "rgba(255,255,255,0.8)",
                        lineHeight: 1.45,
                        fontFamily: "var(--font-dm-sans), sans-serif",
                      }}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Card CTA */}
              <div style={{ marginTop: "28px" }}>
                <button
                  onClick={() => scrollTo("contact")}
                  className="btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Get All of This — Start Free
                  <ArrowRight size={16} />
                </button>
                <p
                  style={{
                    fontSize: "0.72rem",
                    color: "rgba(255,255,255,0.3)",
                    textAlign: "center",
                    marginTop: "10px",
                    marginBottom: 0,
                    fontFamily: "var(--font-dm-sans), sans-serif",
                  }}
                >
                  Free 30-min session first. No commitment required.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-section { padding-left: 32px !important; padding-right: 32px !important; }
          .hero-inner { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
        @media (max-width: 600px) {
          .hero-section {
            padding-left: 20px !important;
            padding-right: 20px !important;
            padding-top: calc(var(--announcement-bar-height) + 100px) !important;
          }
        }
      `}</style>
    </section>
  );
}
