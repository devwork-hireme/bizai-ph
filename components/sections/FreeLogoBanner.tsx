"use client";

import { useRef } from "react";
import { motion, Variants, useInView } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function FreeLogoBanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      style={{
        background: "#0a0a0a",
        padding: "0 64px 80px",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div
          ref={ref}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="logo-banner"
          style={{
            background: "linear-gradient(135deg, #1a1500, #111111)",
            border: "1px solid rgba(232,184,75,0.2)",
            borderRadius: "16px",
            padding: "48px 52px",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "48px",
            alignItems: "center",
          }}
        >
          {/* Left */}
          <div>
            <span
              style={{
                display: "inline-block",
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#e8b84b",
                marginBottom: "12px",
                padding: "4px 12px",
                background: "rgba(232,184,75,0.08)",
                border: "1px solid rgba(232,184,75,0.2)",
                borderRadius: "100px",
                fontFamily: "var(--font-dm-sans), sans-serif",
              }}
            >
              Free Gift
            </span>
            <h2
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.15,
                color: "#ffffff",
                marginBottom: "12px",
                fontFamily: "var(--font-syne), sans-serif",
              }}
            >
              Get a Professional Logo for Your Business.{" "}
              <span style={{ color: "#e8b84b" }}>Free.</span>
            </h2>
            <p
              style={{
                fontSize: "0.95rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.75,
                marginBottom: "20px",
                maxWidth: "520px",
                fontFamily: "var(--font-dm-sans), sans-serif",
              }}
            >
              Tell us about your negosyo — we design your logo and deliver it
              to your WhatsApp within 24 hours. No payment. No catch.
            </p>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              {[
                "✓ 100% Free",
                "✓ Delivered in 24 hours",
                "✓ Via WhatsApp",
                "✓ Any Philippine business",
              ].map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.45)",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right */}
          <div style={{ textAlign: "center", flexShrink: 0 }}>
            <a
              href="/free-logo"
              className="btn-primary"
              style={{
                display: "inline-flex",
                fontSize: "1rem",
                padding: "15px 32px",
                whiteSpace: "nowrap",
              }}
            >
              Get My Free Logo →
            </a>
            <p
              style={{
                marginTop: "10px",
                fontSize: "0.75rem",
                color: "rgba(255,255,255,0.3)",
                fontFamily: "var(--font-dm-sans), sans-serif",
              }}
            >
              Takes 3 minutes. No payment required.
            </p>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section { padding-left: 24px !important; padding-right: 24px !important; }
          .logo-banner {
            grid-template-columns: 1fr !important;
            padding: 32px 24px !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
