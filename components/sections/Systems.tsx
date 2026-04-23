"use client";

import { useRef } from "react";
import { motion, Variants, useInView } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: "easeOut" },
  }),
};

const systems = [
  {
    num: "01",
    icon: "🎯",
    name: "Get Found",
    tagline: "Customers find you first. Every time.",
    copy: "Your business on Google — website, Maps, Business Profile — all optimized. When someone searches for what you sell, you appear before your competitors.",
    result: "✦ Customers find you and contact you every day",
  },
  {
    num: "02",
    icon: "⚡",
    name: "Get Customers",
    tagline: "Every inquiry becomes revenue. Automatically.",
    copy: "AI answers every inquiry in seconds — 2AM, holidays, weekends. Every lead followed up automatically. No revenue leaks. Ever.",
    result: "✦ Revenue generated while you sleep",
    featured: true,
  },
  {
    num: "03",
    icon: "🚀",
    name: "Get Automated",
    tagline: "Revenue grows. Work stays the same.",
    copy: "Reviews build automatically. Content posts automatically. Your dashboard shows exactly what your revenue machine is generating — every month.",
    result: "✦ Revenue and reputation compound monthly",
  },
];

export default function Systems() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-50px" });

  return (
    <section
      id="systems"
      className="systems-section"
      style={{
        background: "#111111",
        padding: "130px 64px",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      {/* Gold glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "0",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "300px",
          background: "radial-gradient(ellipse, rgba(232,184,75,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
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
          style={{ textAlign: "center", maxWidth: "580px", margin: "0 auto 64px" }}
        >
          <p className="section-label">The Revenue Machine</p>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "#ffffff",
              fontFamily: "var(--font-syne), sans-serif",
            }}
          >
            Three Systems.{" "}
            <span style={{ color: "#e8b84b" }}>One Revenue Machine.</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div
          className="systems-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            marginBottom: "52px",
          }}
        >
          {systems.map((s, i) => (
            <motion.div
              key={s.num}
              variants={fadeUp}
              initial="hidden"
              animate={headInView ? "visible" : "hidden"}
              custom={0.1 * i}
              style={{
                background: s.featured ? "rgba(232,184,75,0.04)" : "#181818",
                border: s.featured
                  ? "2px solid rgba(232,184,75,0.35)"
                  : "1px solid rgba(255,255,255,0.06)",
                borderRadius: "16px",
                padding: "40px 32px",
                position: "relative",
                boxShadow: s.featured
                  ? "0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(232,184,75,0.08)"
                  : "none",
              }}
            >
              {/* Gold top bar for featured */}
              {s.featured && (
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: "linear-gradient(90deg, #e8b84b, #ffd970)",
                    borderRadius: "16px 16px 0 0",
                  }}
                />
              )}

              {/* Number */}
              <p
                style={{
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: "rgba(232,184,75,0.5)",
                  marginBottom: "16px",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                }}
              >
                System {s.num}
              </p>

              {/* Icon + name */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                <span style={{ fontSize: "2rem", lineHeight: 1 }}>{s.icon}</span>
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 800,
                    color: "#ffffff",
                    fontFamily: "var(--font-syne), sans-serif",
                  }}
                >
                  {s.name}
                </h3>
              </div>

              <p
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: "#e8b84b",
                  marginBottom: "14px",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                }}
              >
                {s.tagline}
              </p>

              <p
                style={{
                  fontSize: "0.9rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.75,
                  marginBottom: "24px",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                }}
              >
                {s.copy}
              </p>

              {/* Result box */}
              <div
                style={{
                  background: "rgba(232,184,75,0.06)",
                  border: "1px solid rgba(232,184,75,0.15)",
                  borderRadius: "8px",
                  padding: "12px 16px",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  color: "#e8b84b",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                }}
              >
                {s.result}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={headInView ? "visible" : "hidden"}
          custom={0.4}
          style={{ textAlign: "center" }}
        >
          <button
            onClick={() =>
              document
                .getElementById("start")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-primary"
            style={{ fontSize: "1rem", padding: "14px 36px" }}
          >
            Start Free Session →
          </button>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .systems-section { padding: 80px 24px !important; }
          .systems-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
