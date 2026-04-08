"use client";

import { useState, useRef } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";

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
    a: "None whatsoever. We handle every technical aspect of setup and deployment. Your only requirement is 30 minutes for an initial consultation. You do not write code, configure anything, or manage servers.",
  },
  {
    q: "How long does setup take?",
    a: "Most projects go live within 3–5 business days of your session. We do not consider a project complete until everything is tested and functioning exactly as specified. If something needs adjustment, we fix it before you go live.",
  },
  {
    q: "Can I cancel my monthly subscription?",
    a: "Yes. There are no lock-in contracts. All monthly plans operate month-to-month and can be cancelled at any time. We also offer a 30-day performance guarantee on all setup fees — if your system does not deliver results, we rebuild it free of charge.",
  },
  {
    q: "What is included in monthly maintenance?",
    a: "Monthly maintenance covers system monitoring, bug fixing, performance optimization, content posting, and minor updates. If your automation breaks or a platform changes, we repair it before it impacts your business — usually before you even notice.",
  },
  {
    q: "What do I need to provide to get started?",
    a: "Basic information about your business — name, services, pricing, and any photos you have. For Starter and Growth plans, we also need access to your Facebook page. We handle everything else — tool accounts, integrations, testing, and deployment.",
  },
  {
    q: "Do I need a Facebook Page to get started?",
    a: "No. If you don't have a Facebook Page yet, we can help you create one as part of onboarding. We set it up properly with your business details, branding, and initial content — ready to receive customers from day one.",
  },
  {
    q: "What is the difference between Basic and Starter?",
    a: "Basic gives you a professional 5-page website so you exist online professionally — it's a one-time setup with no monthly fee. Starter includes everything in Basic plus automation, lead capture, Google My Business setup, Google Review automation, and social media management on a monthly retainer. If you want customers to find you and inquire automatically, Starter is the right choice.",
  },
  {
    q: "How do I see my results?",
    a: "Starter clients receive a monthly WhatsApp performance report showing leads captured, messages handled, reviews earned, and website traffic. Growth clients get a live business dashboard updated daily — you can see your numbers in real time, anytime.",
  },
  {
    q: "Which businesses benefit most from your service?",
    a: "Our systems deliver the strongest results for businesses that receive high volumes of customer inquiries — salons, restaurants, repair shops, clinics, catering services, and retail stores. If you are spending more than 2 hours daily on repetitive messaging or admin work, automation will have a significant impact.",
  },
  {
    q: "Is my business data secure?",
    a: "Yes. All automation systems are built on enterprise-grade platforms. Customer data is stored in your own accounts — we do not retain or access your business data beyond what is required for setup and ongoing maintenance.",
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
      custom={index * 0.04}
      style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", overflow: "hidden" }}
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
            color: "#FFFFFF",
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
            background: open ? "rgba(245,197,24,0.15)" : "rgba(255,255,255,0.06)",
            border: "1px solid",
            borderColor: open ? "rgba(245,197,24,0.4)" : "rgba(255,255,255,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "all 0.25s ease",
            color: open ? "#F5C518" : "rgba(255,255,255,0.4)",
          }}
        >
          <ChevronDown
            size={14}
            style={{
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.25s ease",
            }}
          />
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
        background: "var(--deep)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
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
            "linear-gradient(rgba(245,197,24,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(245,197,24,0.02) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <motion.div
          ref={headRef}
          variants={fadeUp}
          initial="hidden"
          animate={headInView ? "visible" : "hidden"}
          style={{ textAlign: "center", marginBottom: "56px" }}
        >
          <p className="section-label">FAQ</p>
          <h2
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: "#FFFFFF",
              fontFamily: "var(--font-syne), sans-serif",
            }}
          >
            Frequently Asked{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #F5C518, #FFD94A)",
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
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "14px",
          }}
        >
          <p
            style={{
              fontSize: "1rem",
              fontWeight: 600,
              color: "#FFFFFF",
              marginBottom: "0.5rem",
              fontFamily: "var(--font-syne), sans-serif",
            }}
          >
            Still have questions?
          </p>
          <p
            style={{
              fontSize: "0.875rem",
              color: "rgba(255,255,255,0.5)",
              marginBottom: "1.25rem",
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
          >
            Book a free 30-minute session and we will answer everything specific to your business.
          </p>
          <a
            href="#contact"
            className="btn-primary"
            style={{ display: "inline-flex" }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Book Free 30-Min Session
          </a>
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
