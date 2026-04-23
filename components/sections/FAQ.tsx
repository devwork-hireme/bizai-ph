"use client";

import { useState, useRef } from "react";
import { motion, Variants, AnimatePresence, useInView } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

const faqs = [
  {
    q: "What is the difference between Get Found and Get Customers?",
    a: "Get Found solves the discovery problem — customers can find you on Google. Get Customers solves the revenue leak — every inquiry gets answered and followed up automatically. Get Found is the foundation. Get Customers is the revenue engine built on top.",
  },
  {
    q: "How fast will I see results?",
    a: "Get Found — live in 24 hours. Get Customers — live in 3 days. Get Sales — live in 5 days. Get Automated — custom timeline.",
  },
  {
    q: "What if it doesn't generate revenue?",
    a: "We rebuild the entire system for free. No fine print. No conditions. Results in 30 days or we rebuild everything at zero cost.",
  },
  {
    q: "Do I have to sign a long-term contract?",
    a: "No. Month-to-month. Cancel anytime. No lock-in. No penalties.",
  },
  {
    q: "Do I need technical knowledge?",
    a: "Zero. We handle everything. You give us your details. We build, set up, and launch everything.",
  },
  {
    q: "What do I need to provide?",
    a: "Business name, location, services, photos if available, and your WhatsApp number. That's it.",
  },
  {
    q: "Which businesses get the best results?",
    a: "Salons, barbershops, restaurants, clinics, repair shops, retail stores, online sellers, catering, and any service-based business in the Philippines.",
  },
  {
    q: "How do I see my results?",
    a: "Monthly WhatsApp report. Get Sales and above includes a live dashboard updated daily.",
  },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={index * 0.05}
      style={{
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        overflow: "hidden",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "1.5rem 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontSize: "1rem",
            fontWeight: 600,
            color: "#ffffff",
            lineHeight: 1.4,
            fontFamily: "var(--font-dm-sans), sans-serif",
          }}
        >
          {faq.q}
        </span>
        <span
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            background: open ? "#e8b84b" : "rgba(255,255,255,0.06)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "all 0.25s ease",
            color: open ? "#0a0a0a" : "rgba(255,255,255,0.5)",
          }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            style={{
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.25s ease",
            }}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div style={{ paddingBottom: "1.5rem" }}>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.78,
                  margin: 0,
                  fontFamily: "var(--font-dm-sans), sans-serif",
                }}
              >
                {faq.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-50px" });

  return (
    <section
      id="faq"
      className="faq-section"
      style={{
        background: "#111111",
        padding: "130px 64px",
        position: "relative",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div
        style={{
          maxWidth: "680px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.div
          ref={headRef}
          variants={fadeUp}
          initial="hidden"
          animate={headInView ? "visible" : "hidden"}
          style={{ textAlign: "center", marginBottom: "56px" }}
        >
          <p className="section-label">Questions</p>
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
            Frequently Asked{" "}
            <span style={{ color: "#e8b84b" }}>Questions</span>
          </h2>
        </motion.div>

        <div>
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} faq={faq} index={i} />
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={headInView ? "visible" : "hidden"}
          custom={0.6}
          style={{ textAlign: "center", marginTop: "48px" }}
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
        @media (max-width: 768px) {
          .faq-section { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  );
}
