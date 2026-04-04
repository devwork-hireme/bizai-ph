"use client";

import { useRef } from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { InlineWidget } from "react-calendly";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

const valueItems = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    text: "Free 30-minute consultation — zero obligation",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4"/>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
    text: "Custom automation recommendation for your business",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    text: "Clear proposal with pricing within 24 hours",
  },
];

export default function Contact() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-50px" });

  return (
    <section
      id="contact"
      style={{
        background: "var(--black)",
        borderTop: "1px solid var(--border)",
        padding: "6.5rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <motion.div
          ref={headRef}
          variants={fadeUp}
          initial="hidden"
          animate={headInView ? "visible" : "hidden"}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <p className="section-label">Get Started</p>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              color: "var(--white)",
              marginBottom: "1.25rem",
            }}
          >
            Book Your Free{" "}
            <span
              style={{
                fontFamily: "var(--font-baskerville), serif",
                fontStyle: "italic",
                fontWeight: 400,
                background: "linear-gradient(135deg, var(--blue-light), var(--cyan))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Automation Audit
            </span>
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--soft)",
              maxWidth: "560px",
              margin: "0 auto",
              lineHeight: 1.78,
              fontWeight: 300,
            }}
          >
            In 30 minutes, we will identify exactly which processes in your business can be
            automated, what results to expect, and what investment is required. No commitment.
            No technical knowledge needed.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.6fr",
            gap: "3rem",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left — value props + contact info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={headInView ? "visible" : "hidden"}
            custom={0.1}
          >
            <div style={{ marginBottom: "2.5rem" }}>
              {valueItems.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                    padding: "1rem 0",
                    borderBottom: i < valueItems.length - 1 ? "1px solid var(--border)" : "none",
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                      background: "var(--blue-pale)",
                      border: "1px solid var(--border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      color: "var(--blue-light)",
                    }}
                  >
                    {item.icon}
                  </div>
                  <span
                    style={{ fontSize: "0.9rem", color: "var(--soft)", paddingTop: "0.5rem", lineHeight: 1.5 }}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {[
                { label: "Email", value: "hello@bizaiph.com" },
                { label: "Location", value: "Taguig City, Metro Manila" },
                { label: "Response Time", value: "Within 24 hours" },
                { label: "Availability", value: "Mon–Sat, 9AM–9PM PHT" },
              ].map((item) => (
                <div key={item.label}>
                  <p
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "var(--muted)",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {item.label}
                  </p>
                  <p style={{ fontSize: "0.9rem", color: "var(--soft)", margin: 0 }}>{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Calendly embed */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={headInView ? "visible" : "hidden"}
            custom={0.2}
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            <div style={{ padding: "2rem 2rem 1rem" }}>
              <h3
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "var(--white)",
                  marginBottom: "0.5rem",
                }}
              >
                Book Your Free Audit
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.5, margin: 0 }}>
                Pick a time that works for you — 30 minutes, no obligation.
              </p>
            </div>
            <InlineWidget
              url="https://calendly.com/devwork2025-proton/free-ai-automation-audit"
              styles={{ height: "650px" }}
              pageSettings={{
                backgroundColor: "10102a",
                primaryColor: "3D6FFF",
                textColor: "eeeef8",
              }}
            />
            <p
              style={{
                fontSize: "0.78rem",
                color: "var(--muted)",
                textAlign: "center",
                padding: "0 2rem 1.5rem",
                margin: 0,
              }}
            >
              Or email us at{" "}
              <a
                href="mailto:hello@bizaiph.com"
                style={{ color: "var(--blue-light)", textDecoration: "none" }}
              >
                hello@bizaiph.com
              </a>
            </p>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
