"use client";

import { useRef } from "react";
import { motion, Variants, useInView } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export default function UrgencyClose() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      style={{
        background: "#0a0a0a",
        padding: "130px 64px",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        textAlign: "center",
      }}
    >
      {/* Gold glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "400px",
          background:
            "radial-gradient(ellipse, rgba(232,184,75,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <motion.div
        ref={ref}
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            color: "#ffffff",
            marginBottom: "20px",
            fontFamily: "var(--font-syne), sans-serif",
          }}
        >
          Every Day You Wait Is Revenue{" "}
          <span style={{ color: "#e8b84b" }}>Your Competitor Collects.</span>
        </h2>

        <p
          style={{
            fontSize: "1.05rem",
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.75,
            marginBottom: "40px",
            fontFamily: "var(--font-dm-sans), sans-serif",
          }}
        >
          Your competitor is being found on Google right now. They&apos;re
          answering inquiries while you sleep. Every day without a revenue
          machine is another day they grow — at your expense.
        </p>

        <button
          onClick={() =>
            document
              .getElementById("start")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="btn-primary"
          style={{ fontSize: "1.05rem", padding: "16px 40px" }}
        >
          Start Free Session →
        </button>

        <p
          style={{
            marginTop: "16px",
            fontSize: "0.82rem",
            color: "rgba(255,255,255,0.3)",
            fontFamily: "var(--font-dm-sans), sans-serif",
          }}
        >
          Free session. No commitment. Live in 24 hours.
        </p>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          section { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  );
}
