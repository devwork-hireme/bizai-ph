"use client";

import { useState, useRef } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

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
    q: "What is the difference between Get Found and Starter?",
    a: "Get Found is a one-time ₱3,999 setup that gives you a professional website so customers can find and verify your business. There is no monthly fee. Starter includes everything in Get Found plus the full growth system — 24/7 Messenger bot, Google My Business setup, Google review automation, Facebook posting, and a monthly report. Starter is for businesses that want customers finding them and inquiring automatically, not just existing online.",
  },
  {
    q: "How fast will I see results?",
    a: "Most clients are live within 3–5 business days. You will typically see your first organic inquiries within the first week of going live. Google ranking improves progressively over 30–60 days. The Messenger bot delivers results from day one — every inquiry gets answered the moment it arrives.",
  },
  {
    q: "What if it doesn't work for my business?",
    a: "We offer a 30-day results guarantee. If you don't get measurable results within 30 days — more customers finding you, more inquiries coming in, or more leads converting depending on your package — we rebuild your entire system at no extra cost. No questions asked. No conditions.",
  },
  {
    q: "Do I have to sign a long-term contract?",
    a: "No. All monthly plans are month-to-month. You can cancel anytime with no penalties. We keep clients by delivering results, not by locking them into contracts.",
  },
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
      style={{
        borderBottom: "1px solid var(--gray-light)",
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
            color: "var(--navy)",
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
            background: open ? "var(--navy)" : "var(--gray-light)",
            border: "1px solid",
            borderColor: open ? "var(--navy)" : "var(--gray-light)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "all 0.25s ease",
            color: open ? "#F5C518" : "var(--gray)",
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
                  color: "var(--gray)",
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
        background: "var(--off-white)",
        padding: "130px 64px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
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
          <p className="section-label" style={{ color: "var(--navy)" }}>
            FAQ
          </p>
          <h2
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: "var(--navy)",
              fontFamily: "var(--font-syne), sans-serif",
            }}
          >
            Frequently Asked{" "}
            <span style={{ color: "#C9940A" }}>
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
            background: "#FFFFFF",
            border: "1px solid var(--gray-light)",
            borderRadius: "14px",
          }}
        >
          <p
            style={{
              fontSize: "1rem",
              fontWeight: 600,
              color: "var(--navy)",
              marginBottom: "0.5rem",
              fontFamily: "var(--font-syne), sans-serif",
            }}
          >
            Still have questions?
          </p>
          <p
            style={{
              fontSize: "0.875rem",
              color: "var(--gray)",
              marginBottom: "1.25rem",
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
          >
            Start free and we will answer every question specific to your business.
          </p>
          <a
            href="#contact"
            className="btn-primary"
            style={{ display: "inline-flex", gap: "8px" }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get More Customers — Start Free
            <ArrowRight size={16} />
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
