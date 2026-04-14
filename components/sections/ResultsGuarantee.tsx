"use client";

import { motion } from "framer-motion";

export default function ResultsGuarantee() {
  return (
    <section
      id="guarantee"
      className="guarantee-section"
      style={{
        background: "#F5C518",
        padding: "100px 64px",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{ maxWidth: "680px", margin: "0 auto", position: "relative", zIndex: 1 }}
      >
        <h2
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.08,
            color: "#0A1628",
            marginBottom: "1.5rem",
            fontFamily: "var(--font-syne), sans-serif",
          }}
        >
          30-Day Results Guarantee.
        </h2>
        <p
          style={{
            fontSize: "1rem",
            color: "rgba(10,22,40,0.7)",
            lineHeight: 1.78,
            marginBottom: "1.5rem",
            fontFamily: "var(--font-dm-sans), sans-serif",
          }}
        >
          If you don&apos;t get measurable results within 30 days — more customers
          finding you, more leads coming in, or more sales closing depending on
          your package — we rebuild your entire system for free.
        </p>
        <p
          style={{
            fontSize: "0.95rem",
            color: "rgba(10,22,40,0.6)",
            lineHeight: 1.78,
            marginBottom: "2rem",
            fontFamily: "var(--font-dm-sans), sans-serif",
          }}
        >
          No questions asked. No conditions. No excuses.
        </p>
        <p
          style={{
            fontSize: "1.05rem",
            fontWeight: 700,
            color: "#0A1628",
            lineHeight: 1.6,
            fontFamily: "var(--font-syne), sans-serif",
            maxWidth: "560px",
            margin: "0 auto",
          }}
        >
          We don&apos;t get paid to build things. We get paid to deliver results. And
          results are what you will get.
        </p>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .guarantee-section { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  );
}
