"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import AnimatedStat from "@/components/ui/AnimatedStat";

const problems = [
  {
    num: "01",
    h3: "Right now someone searched for your business. They found your competitor.",
    body: "Your competitor has a website and Google listing. You don't. They get the customer. You get nothing. This happens every single day you're invisible.",
    statVal: 97,
    statSuffix: "%",
    statText: "of customers search online before buying",
  },
  {
    num: "02",
    h3: "A customer messaged you last night. They bought from your competitor this morning.",
    body: "You saw it this morning. By then your competitor — who replied at 10:05PM — already has their payment. That revenue is gone forever.",
    statVal: 67,
    statSuffix: "%",
    statText: "of customers buy from whoever replies first",
  },
  {
    num: "03",
    h3: "You meant to follow up. You forgot. That revenue is gone forever.",
    body: "Someone asked about your price on Monday. Life happened. By Friday they paid someone else. Every missed follow-up is revenue you will never recover.",
    statVal: 80,
    statSuffix: "%",
    statText: "of sales need 5 follow-ups to close",
  },
];

export default function Problem() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-50px" });

  return (
    <section
      id="problem"
      className="problem-section"
      style={{
        background: "#111111",
        padding: "130px 64px",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(255,255,255,0.04)",
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
          initial={{ opacity: 0, y: 28 }}
          animate={headInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 64px" }}
        >
          <p className="section-label">Why Revenue Is Being Lost</p>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "#ffffff",
              marginBottom: "0",
              fontFamily: "var(--font-syne), sans-serif",
            }}
          >
            Every Day Without a Revenue Machine Is a Day Your Competitor Wins.
          </h2>
        </motion.div>

        {/* Cards */}
        <div
          className="problem-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "rgba(255,255,255,0.04)",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          {problems.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, x: -24 }}
              animate={headInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
              transition={{ duration: 0.55, delay: 0.15 * i, ease: "easeOut" }}
              className={`problem-card problem-card-${i}`}
              style={{
                background: "#111111",
                padding: "48px 36px",
                position: "relative",
                transition: "background 0.25s ease",
                cursor: "default",
              }}
              onHoverStart={(e) => {
                (e.target as HTMLElement).closest(".problem-card" + i)
              }}
            >
              {/* Gold underline on hover */}
              <div
                className={`card-underline-${i}`}
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: "linear-gradient(90deg, #e8b84b, transparent)",
                  transform: "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 0.35s ease",
                }}
              />

              {/* Decorative number */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: "24px",
                  right: "28px",
                  fontFamily: "var(--font-syne), sans-serif",
                  fontSize: "52px",
                  fontWeight: 800,
                  color: "rgba(232,184,75,0.06)",
                  lineHeight: 1,
                  userSelect: "none",
                }}
              >
                {p.num}
              </div>

              <h3
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: "#ffffff",
                  lineHeight: 1.4,
                  marginBottom: "16px",
                  fontFamily: "var(--font-syne), sans-serif",
                  paddingRight: "40px",
                }}
              >
                {p.h3}
              </h3>

              <p
                style={{
                  fontSize: "0.9rem",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.75,
                  marginBottom: "28px",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                }}
              >
                {p.body}
              </p>

              {/* Stat */}
              <div
                className="problem-stat"
                style={{
                  paddingTop: "20px",
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div style={{ fontSize: "2rem", fontWeight: 800, lineHeight: 1.1, marginBottom: "4px" }}>
                  <AnimatedStat value={p.statVal} suffix={p.statSuffix} />
                </div>
                <p
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 500,
                    color: "rgba(232,184,75,0.7)",
                    letterSpacing: "0.03em",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    margin: 0,
                  }}
                >
                  {p.statText}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .problem-card:hover {
          background: #161616 !important;
        }
        .problem-card:hover .card-underline-0,
        .problem-card:hover .card-underline-1,
        .problem-card:hover .card-underline-2 {
          transform: scaleX(1) !important;
        }
        @media (max-width: 900px) {
          .problem-section { padding: 80px 24px !important; }
          .problem-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
            background: transparent !important;
            border-radius: 0 !important;
          }
          .problem-card {
            border: 1px solid rgba(255,255,255,0.06) !important;
            border-radius: 12px !important;
            border-left: 3px solid rgba(232,184,75,0.35) !important;
          }
        }
        @media (max-width: 600px) {
          .problem-stat {
            border-top: none !important;
            padding-top: 0 !important;
            border-left: 2px solid rgba(232,184,75,0.4) !important;
            padding-left: 12px !important;
          }
        }
      `}</style>
    </section>
  );
}
