"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";

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
        style={{ maxWidth: "720px", margin: "0 auto", position: "relative", zIndex: 1 }}
      >
        {/* Shield icon */}
        <div
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            background: "rgba(10,22,40,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 24px",
          }}
        >
          <Shield size={28} color="#0A1628" />
        </div>

        <p
          style={{
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "rgba(10,22,40,0.5)",
            marginBottom: "16px",
            fontFamily: "var(--font-dm-sans), sans-serif",
          }}
        >
          Our Guarantee
        </p>

        <h2
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.08,
            color: "#0A1628",
            marginBottom: "1.25rem",
            fontFamily: "var(--font-syne), sans-serif",
          }}
        >
          More Customers in 30 Days.
          <br />
          Or We Rebuild for Free.
        </h2>
        <p
          style={{
            fontSize: "1.05rem",
            color: "rgba(10,22,40,0.72)",
            lineHeight: 1.78,
            marginBottom: "1.25rem",
            fontFamily: "var(--font-dm-sans), sans-serif",
            maxWidth: "580px",
            margin: "0 auto 1.25rem",
          }}
        >
          If you don&apos;t get measurable results within 30 days — more customers finding
          you, more inquiries coming in, or more leads converting — we rebuild your
          entire system at no extra cost.
        </p>
        <p
          style={{
            fontSize: "0.95rem",
            fontWeight: 700,
            color: "rgba(10,22,40,0.6)",
            lineHeight: 1.6,
            marginBottom: "2rem",
            fontFamily: "var(--font-dm-sans), sans-serif",
          }}
        >
          No fine print. No conditions. No excuses. Results or we rebuild.
        </p>

        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "14px 32px",
            background: "#0A1628",
            color: "#F5C518",
            borderRadius: "10px",
            fontSize: "1rem",
            fontWeight: 700,
            textDecoration: "none",
            fontFamily: "var(--font-dm-sans), sans-serif",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#0F1E35";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#0A1628";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Get More Customers
          <ArrowRight size={16} />
        </a>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .guarantee-section { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  );
}
