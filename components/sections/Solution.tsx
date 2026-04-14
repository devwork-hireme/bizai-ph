"use client";

import { useRef } from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { X, CheckCircle } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] },
  }),
};

const beforeItems = [
  "Customers can't find you online",
  "Inquiries go unanswered at night",
  "Leads go cold before you follow up",
  "Your Facebook page looks abandoned",
  "No Google reviews to build trust",
  "No idea what's working in your business",
];

const afterItems = [
  "Customers find you every time they search",
  "Every inquiry answered before you wake up",
  "Every lead followed up automatically",
  "Your Facebook active and professional daily",
  "Google reviews building your reputation",
  "Monthly results report delivered to your phone",
];

export default function Solution() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-50px" });

  return (
    <section
      id="transformation"
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
          <p className="section-label">The Transformation</p>
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
            What Changes When{" "}
            <span style={{ color: "#F5C518" }}>You Work With BizAI PH</span>
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "rgba(255,255,255,0.55)",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.78,
              fontWeight: 400,
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
          >
            One decision. Four results. Complete transformation.
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
                Without BizAI PH
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {beforeItems.map((item) => (
                <div
                  key={item}
                  style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}
                >
                  <X
                    size={16}
                    style={{ color: "rgba(239,68,68,0.5)", flexShrink: 0, marginTop: "3px" }}
                  />
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
                With BizAI PH
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {afterItems.map((item) => (
                <div
                  key={item}
                  style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}
                >
                  <CheckCircle
                    size={16}
                    style={{ color: "#22C55E", flexShrink: 0, marginTop: "3px" }}
                  />
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
