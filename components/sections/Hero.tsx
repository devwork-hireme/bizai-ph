"use client";

import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const pills = [
  "More Customers Captured",
  "20+ Hours Saved Weekly",
  "Revenue Without Extra Staff",
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
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "var(--black)",
        padding: "calc(var(--announcement-bar-height) + 120px) 1.5rem 6rem",
      }}
    >
      {/* Grid background */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(82,130,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(82,130,255,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 100%)",
        }}
      />

      {/* Glow — blue top-left */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-15%",
          left: "-8%",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(61,111,255,0.13) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* Glow — cyan bottom-right */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-15%",
          right: "-8%",
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,200,255,0.08) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* Accent line */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          right: "12%",
          width: "1px",
          height: "100%",
          background:
            "linear-gradient(to bottom, transparent, rgba(82,130,255,0.18), transparent)",
          transform: "skewX(-10deg)",
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
          maxWidth: "880px",
          width: "100%",
          textAlign: "center",
        }}
      >
        {/* Eyebrow badge */}
        <motion.div variants={item} style={{ marginBottom: "2rem" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.45rem 1.1rem",
              background: "rgba(0,229,160,0.07)",
              border: "1px solid rgba(0,229,160,0.18)",
              borderRadius: "100px",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "var(--green)",
                boxShadow: "0 0 8px var(--green)",
                animation: "dot-pulse 2.4s ease-in-out infinite",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: "0.8rem",
                fontWeight: 600,
                color: "var(--green)",
                letterSpacing: "0.04em",
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
            fontSize: "clamp(2.6rem, 5.5vw, 4.2rem)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 1.08,
            color: "var(--white)",
            marginBottom: "0.35rem",
          }}
        >
          We Automate Your Business.
        </motion.h1>

        {/* H1 — line 2 italic gradient */}
        <motion.h1
          variants={item}
          style={{
            fontSize: "clamp(2.6rem, 5.5vw, 4.2rem)",
            fontWeight: 400,
            letterSpacing: "-0.03em",
            lineHeight: 1.08,
            fontFamily: "var(--font-baskerville), 'Libre Baskerville', serif",
            fontStyle: "italic",
            background: "linear-gradient(135deg, var(--blue-light) 0%, var(--cyan) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: "2rem",
          }}
        >
          You Grow It.
        </motion.h1>

        {/* Benefit pills */}
        <motion.div
          variants={item}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.6rem",
            marginBottom: "2.25rem",
          }}
        >
          {pills.map((p) => (
            <span
              key={p}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
                padding: "0.4rem 0.9rem",
                background: "var(--blue-pale)",
                border: "1px solid var(--border)",
                borderRadius: "6px",
                fontSize: "0.82rem",
                fontWeight: 600,
                color: "var(--blue-light)",
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {p}
            </span>
          ))}
        </motion.div>

        {/* Subheadline */}
        <motion.p
          variants={item}
          style={{
            fontSize: "1.1rem",
            color: "var(--soft)",
            maxWidth: "620px",
            margin: "0 auto 2.75rem",
            lineHeight: 1.78,
            fontWeight: 300,
          }}
        >
          BizAI PH builds and manages intelligent automation systems for
          Philippine SMBs — Messenger bots, lead capture, appointment booking,
          and order processing. Fully built. Fully managed. Zero technical
          knowledge required.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={item}
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "4rem",
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
            href="#services"
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
                    height: "16px",
                    background: "var(--border-mid)",
                    margin: "0 1.25rem",
                    flexShrink: 0,
                  }}
                />
              )}
              <span
                style={{
                  fontSize: "0.84rem",
                  fontWeight: 500,
                  color: "var(--muted)",
                }}
              >
                {text}
              </span>
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
