"use client";

import { useState, useRef } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

const faqs = [
  {
    q: "Do I need any technical knowledge to get started?",
    a: "None whatsoever. We handle every technical aspect of setup and deployment. Your only requirement is a Facebook Page for your business and 30 minutes for an initial consultation. You do not write code, configure anything, or manage servers.",
  },
  {
    q: "How long does setup take?",
    a: "Most automation systems are live within 48 hours of your consultation. We do not consider a project complete until everything is tested and functioning exactly as specified. If something needs adjustment, we fix it before you go live.",
  },
  {
    q: "Can I cancel my monthly subscription?",
    a: "Yes. There are no lock-in contracts. All plans operate month-to-month and can be cancelled at any time. We also offer a 30-day performance guarantee on all setup fees — if your system does not deliver results, we rebuild it free of charge.",
  },
  {
    q: "What is included in monthly maintenance?",
    a: "Monthly maintenance covers system monitoring, bug fixing, performance optimization, and minor workflow updates. If your automation breaks or a platform changes its API, we repair it before it impacts your business — usually before you even notice.",
  },
  {
    q: "What do I need to provide to get started?",
    a: "A Facebook Page for your business, basic information about your services and pricing, and 30 minutes for a consultation call. We handle everything else — tool accounts, integrations, testing, and deployment.",
  },
  {
    q: "Can you build custom automations not listed on your page?",
    a: "Yes. Beyond our standard automation packages, we design and build custom workflow systems for specific business requirements. If you have a manual process that is eating your time, we can likely automate it. Contact us for a custom quote.",
  },
  {
    q: "Which businesses benefit most from your service?",
    a: "Our systems deliver the strongest results for businesses that receive high volumes of customer inquiries — restaurants, salons, online sellers, real estate agencies, and clinics. If you are spending more than 2 hours daily on repetitive messaging or admin work, automation will have a significant impact.",
  },
  {
    q: "Is my business data secure?",
    a: "Yes. All automation systems are built on enterprise-grade platforms including n8n and Make.com. Customer data is stored in your own Google account — we do not retain or access your business data beyond what is required for setup and ongoing maintenance.",
  },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={index * 0.05}
      style={{ borderBottom: "1px solid var(--border)", overflow: "hidden" }}
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
        <span style={{ fontSize: "1rem", fontWeight: 600, color: "var(--white)", lineHeight: 1.4 }}>
          {faq.q}
        </span>
        <span
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            background: open ? "var(--blue)" : "rgba(82,130,255,0.08)",
            border: "1px solid",
            borderColor: open ? "var(--blue)" : "var(--border-mid)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "all 0.25s ease",
            color: open ? "var(--white)" : "var(--blue-light)",
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.25s ease" }}
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
              <p style={{ fontSize: "0.9rem", color: "var(--soft)", lineHeight: 1.78, margin: 0 }}>
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
      style={{
        background: "var(--deep)",
        borderTop: "1px solid var(--border)",
        padding: "6.5rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <motion.div
          ref={headRef}
          variants={fadeUp}
          initial="hidden"
          animate={headInView ? "visible" : "hidden"}
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
        >
          <p className="section-label">FAQ</p>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              color: "var(--white)",
            }}
          >
            Frequently Asked{" "}
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
              Questions
            </span>
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
          custom={0.5}
          style={{
            textAlign: "center",
            marginTop: "3rem",
            padding: "2rem",
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "14px",
          }}
        >
          <p style={{ fontSize: "1rem", fontWeight: 600, color: "var(--white)", marginBottom: "0.5rem" }}>
            Still have questions?
          </p>
          <p style={{ fontSize: "0.875rem", color: "var(--soft)", marginBottom: "1.25rem" }}>
            Book a free 30-minute call and we will answer everything specific to your business.
          </p>
          <a
            href="https://calendly.com/devwork2025-proton/free-ai-automation-audit"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ display: "inline-flex" }}
          >
            Book Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
