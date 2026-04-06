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
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

const pills = [
  { text: "More Customers Captured", color: "var(--green)" },
  { text: "20+ Hours Saved Weekly", color: "var(--blue-light)" },
  { text: "Revenue Without Extra Staff", color: "var(--cyan)" },
];

const proof = [
  "100+ Businesses Automated",
  "Live in 48 Hours",
  "Starting at ₱1,500/month",
];

export default function Hero() {
  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        overflow: "hidden",
        background: "var(--black)",
        paddingTop: "calc(var(--announcement-bar-height) + 140px)",
        paddingBottom: "80px",
        paddingLeft: "24px",
        paddingRight: "24px",
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
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Glow — blue top-left */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-200px",
          left: "-200px",
          width: "800px",
          height: "800px",
          borderRadius: "50%",
          background: "rgba(61,111,255,0.07)",
          filter: "blur(120px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Glow — cyan bottom-right */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          right: "-100px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "rgba(0,200,255,0.04)",
          filter: "blur(100px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Diagonal light streak */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          right: "15%",
          width: "1px",
          height: "100%",
          background:
            "linear-gradient(to bottom, transparent, rgba(82,130,255,0.12) 30%, rgba(0,200,255,0.08) 70%, transparent)",
          transform: "skewX(-5deg)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "900px",
          width: "100%",
          textAlign: "center",
        }}
      >
        {/* Eyebrow badge */}
        <motion.div variants={item} style={{ marginBottom: "40px" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "8px 20px",
              background: "rgba(61,111,255,0.06)",
              border: "1px solid rgba(82,130,255,0.2)",
              borderRadius: "100px",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "var(--green)",
                boxShadow: "0 0 0 0 rgba(0,229,160,0.4)",
                animation: "pulse-ring 2s infinite",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: "0.72rem",
                fontWeight: 600,
                color: "var(--blue-light)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              AI Automation — Built for Philippine Business
            </span>
          </span>
        </motion.div>

        {/* H1 — line 1 */}
        <motion.h1
          variants={item}
          style={{
            fontSize: "clamp(3rem, 7vw, 5.5rem)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 1.0,
            color: "var(--white)",
            marginBottom: "0.2rem",
          }}
        >
          We Automate Your Business.
        </motion.h1>

        {/* H1 — line 2 italic gradient */}
        <motion.h1
          variants={item}
          style={{
            fontSize: "clamp(3rem, 7vw, 5.5rem)",
            fontWeight: 400,
            letterSpacing: "-0.04em",
            lineHeight: 1.0,
            fontFamily: "var(--font-baskerville), 'Libre Baskerville', serif",
            fontStyle: "italic",
            background: "linear-gradient(135deg, var(--blue-light) 0%, var(--cyan) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: "32px",
          }}
        >
          You Grow It.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={item}
          style={{
            fontSize: "1.15rem",
            color: "var(--soft)",
            maxWidth: "640px",
            margin: "0 auto 40px",
            lineHeight: 1.8,
            fontWeight: 300,
          }}
        >
          BizAI PH builds and manages intelligent automation systems for
          Philippine SMBs — Messenger bots, lead capture, appointment booking,
          and order processing. Fully built. Fully managed. Zero technical
          knowledge required.
        </motion.p>

        {/* Benefit pills */}
        <motion.div
          variants={item}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "12px",
            marginBottom: "44px",
          }}
        >
          {pills.map((pill) => (
            <span
              key={pill.text}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "7px 16px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid var(--card-border)",
                borderRadius: "100px",
                fontSize: "0.8rem",
                fontWeight: 500,
                color: "var(--soft)",
                backdropFilter: "blur(8px)",
                transition: "background 0.2s ease, border-color 0.2s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                e.currentTarget.style.borderColor = "rgba(82,130,255,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                e.currentTarget.style.borderColor = "var(--card-border)";
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: pill.color,
                  boxShadow: `0 0 6px ${pill.color}`,
                  flexShrink: 0,
                }}
              />
              {pill.text}
            </span>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          variants={item}
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "60px",
          }}
        >
          <a
            href="https://calendly.com/devwork2025-proton/free-ai-automation-audit"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Get Your Free Audit
          </a>
          <a
            href="#automations"
            className="btn-ghost"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("automations");
            }}
          >
            See Our Automations
          </a>
        </motion.div>

        {/* Social proof strip */}
        <motion.div
          variants={item}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 0,
          }}
        >
          {proof.map((text, i) => (
            <span
              key={text}
              style={{ display: "flex", alignItems: "center" }}
            >
              {i > 0 && (
                <span
                  style={{
                    width: "1px",
                    height: "14px",
                    background: "var(--border)",
                    margin: "0 32px",
                    flexShrink: 0,
                  }}
                />
              )}
              <span
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  color: "var(--muted)",
                  letterSpacing: "0.02em",
                }}
              >
                {text}
              </span>
            </span>
          ))}
        </motion.div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          #hero { padding-left: 24px !important; padding-right: 24px !important; }
        }
        @media (max-width: 480px) {
          #hero { padding-top: calc(var(--announcement-bar-height) + 100px) !important; }
        }
      `}</style>
    </section>
  );
}
