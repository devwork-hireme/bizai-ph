"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      id="final-cta"
      style={{
        background: "var(--navy)",
        borderTop: "1px solid var(--navy-border)",
        padding: "120px 64px",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
      className="final-cta-section"
    >
      {/* Dot grid */}
      <div
        aria-hidden="true"
        className="dot-grid-bg"
        style={{
          position: "absolute",
          inset: 0,
          maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black, transparent)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      {/* Gold glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(245,197,24,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{ position: "relative", zIndex: 1, maxWidth: "680px", margin: "0 auto" }}
      >
        <p className="section-label" style={{ marginBottom: "1.5rem", justifyContent: "center" }}>
          Don&apos;t Wait
        </p>
        <h2
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.08,
            color: "#FFFFFF",
            marginBottom: "1.25rem",
            fontFamily: "var(--font-syne), sans-serif",
          }}
        >
          Every Day You Wait
          <br />
          <span style={{ color: "#F5C518" }}>Is a Customer They Get.</span>
        </h2>
        <p
          style={{
            fontSize: "1rem",
            color: "rgba(255,255,255,0.55)",
            maxWidth: "520px",
            margin: "0 auto 2.5rem",
            lineHeight: 1.78,
            fontFamily: "var(--font-dm-sans), sans-serif",
          }}
        >
          Your competitor is getting found on Google right now. They&apos;re
          answering inquiries while you sleep. Every day without a system is
          another day they get your customers. The first step is free.
        </p>
        <a
          href="#contact"
          className="btn-primary"
          style={{ fontSize: "1.05rem", padding: "1rem 2.8rem", gap: "10px" }}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Get More Customers
          <ArrowRight size={18} />
        </a>
        <p
          style={{
            fontSize: "0.8rem",
            color: "rgba(255,255,255,0.25)",
            marginTop: "1rem",
            fontFamily: "var(--font-dm-sans), sans-serif",
          }}
        >
          Free session. No commitment. Results in 3–5 days.
        </p>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .final-cta-section { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  );
}
