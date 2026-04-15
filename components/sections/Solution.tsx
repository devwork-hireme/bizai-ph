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
  "No website — customers can't verify your business",
  "Invisible on Google — competitors get all the traffic",
  "Inquiries unanswered after 8PM every night",
  "Leads go cold because there's no follow-up",
  "Facebook page abandoned — last post was months ago",
  "Zero Google reviews — no trust, no credibility",
];

const afterItems = [
  "Professional website — customers find and trust you",
  "Page 1 on Google — you show up before competitors",
  "Every inquiry answered in seconds, 24/7",
  "Every lead followed up automatically — no one slips away",
  "Facebook posting 3x per week, done for you",
  "Google reviews building your reputation every month",
];

export default function Solution() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-50px" });

  return (
    <section
      id="transformation"
      className="solution-section"
      style={{
        background: "var(--off-white)",
        borderTop: "1px solid var(--gray-light)",
        padding: "130px 64px",
        position: "relative",
        overflow: "hidden",
      }}
    >
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
          <p className="section-label" style={{ color: "var(--navy)" }}>Before vs After</p>
          <h2
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: "var(--navy)",
              marginBottom: "20px",
              fontFamily: "var(--font-syne), sans-serif",
            }}
          >
            What Changes When You{" "}
            <span style={{ color: "#C9940A" }}>Work With BizAI PH</span>
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--gray)",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.78,
              fontWeight: 400,
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
          >
            One decision. Six transformations. Your business completely changed.
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
            background: "var(--gray-light)",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          {/* Before */}
          <div
            style={{
              background: "#FFFFFF",
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
                      color: "var(--gray)",
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
              background: "#FFFFFF",
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
                      color: "var(--navy)",
                      lineHeight: 1.6,
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontWeight: 500,
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
