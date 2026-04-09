"use client";

import { useRef } from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] },
  }),
};

const beforeItems = [
  "4–8 hour average response time",
  "Leads lost to slow follow-up",
  "Manual social media posting",
  "No reporting or visibility",
  "20+ hours/week on admin tasks",
];

const afterItems = [
  "Instant automated response, 24/7",
  "Every lead followed up within minutes",
  "Facebook posts scheduled automatically",
  "Live reports delivered to your phone",
  "Your time spent on growth, not admin",
];

export default function Solution() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-50px" });

  return (
    <section
      id="solution"
      className="solution-section"
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
            "linear-gradient(rgba(26,58,107,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(26,58,107,0.5) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      {/* Gold glow left */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "30%",
          left: "-200px",
          width: "600px",
          height: "600px",
          background: "rgba(245,197,24,0.05)",
          filter: "blur(100px)",
          borderRadius: "50%",
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
          <p className="section-label">The Solution</p>
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
            What Happens When{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #F5C518, #FFD94A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              We Take Over
            </span>
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "rgba(255,255,255,0.55)",
              maxWidth: "560px",
              margin: "0 auto",
              lineHeight: 1.78,
              fontWeight: 400,
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
          >
            We replace manual, time-consuming tasks with systems that run
            automatically — 24 hours a day, 7 days a week.
          </p>
        </motion.div>

        {/* Before / After comparison */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={headInView ? "visible" : "hidden"}
          custom={0.1}
          className="compare-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1px",
            background: "var(--navy-border)",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          {/* Before */}
          <div
            style={{
              background: "var(--navy-mid)",
              padding: "40px 36px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                marginBottom: "28px",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "rgba(239,68,68,0.7)",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.16em",
                  color: "rgba(239,68,68,0.7)",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                }}
              >
                Before BizAI PH
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {beforeItems.map((item) => (
                <div
                  key={item}
                  style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(239,68,68,0.5)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ flexShrink: 0, marginTop: "3px" }}
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                  <span
                    style={{
                      fontSize: "0.9rem",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.6,
                      fontFamily: "var(--font-dm-sans), sans-serif",
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* After */}
          <div
            style={{
              background: "var(--navy-mid)",
              padding: "40px 36px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                marginBottom: "28px",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#22C55E",
                  boxShadow: "0 0 8px rgba(34,197,94,0.5)",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.16em",
                  color: "#22C55E",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                }}
              >
                After BizAI PH
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {afterItems.map((item) => (
                <div
                  key={item}
                  style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#22C55E"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ flexShrink: 0, marginTop: "3px" }}
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span
                    style={{
                      fontSize: "0.9rem",
                      color: "rgba(255,255,255,0.7)",
                      lineHeight: 1.6,
                      fontFamily: "var(--font-dm-sans), sans-serif",
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .solution-section { padding: 80px 24px !important; }
          .compare-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
