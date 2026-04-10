"use client";

import { useRef } from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { CheckCircle, Bot, BarChart3, MapPin, Phone, TrendingUp } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

const reasons = [
  {
    Icon: CheckCircle,
    title: "100% Done For You",
    body: "We don't teach you what to do. We do it for you. Focus on your business, we handle the digital side — website, automation, content, and reporting.",
  },
  {
    Icon: Bot,
    title: "Powered by AI",
    body: "Our systems use AI to automate repetitive tasks — faster results, lower cost, no manual work. Your business works even when you're sleeping.",
  },
  {
    Icon: BarChart3,
    title: "Results You Can See",
    body: "Monthly reports showing exact numbers — leads captured, messages handled, reviews earned. No guessing if it's working. You see the data.",
  },
  {
    Icon: MapPin,
    title: "Filipino at Heart",
    body: "We understand Filipino consumer behavior and what actually works in the Philippine market. Our strategies are built for local SMBs — not copied from abroad.",
  },
  {
    Icon: Phone,
    title: "Always Here",
    body: "WhatsApp support for all concerns. We don't disappear after delivery — we stay with you, fix issues fast, and keep your systems running smoothly.",
  },
  {
    Icon: TrendingUp,
    title: "Grows With You",
    body: "Start with Basic, upgrade to Starter, then Growth. Your digital presence grows as your business grows. No need to switch providers or start over.",
  },
];

export default function WhyUs() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-50px" });
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-50px" });

  return (
    <section
      id="why-us"
      className="why-us-section"
      style={{
        background: "var(--off-white)",
        padding: "130px 64px",
        position: "relative",
        overflow: "hidden",
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
          variants={fadeUp}
          initial="hidden"
          animate={headInView ? "visible" : "hidden"}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <p className="section-label" style={{ color: "var(--navy)" }}>
            Why BizAI PH
          </p>
          <h2
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: "var(--navy)",
              marginBottom: "20px",
              fontFamily: "var(--font-syne), sans-serif",
            }}
          >
            Not Just Another Agency —{" "}
            <span style={{ color: "#C9940A" }}>
              Your Growth Partner
            </span>
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--gray)",
              maxWidth: "540px",
              margin: "0 auto",
              lineHeight: 1.78,
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
          >
            Six reasons why Filipino SMB owners choose BizAI PH and stay with
            us long-term.
          </p>
        </motion.div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="why-us-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
        >
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              variants={fadeUp}
              initial="hidden"
              animate={gridInView ? "visible" : "hidden"}
              custom={0.07 * i}
              style={{
                background: "#FFFFFF",
                border: "1px solid var(--gray-light)",
                borderRadius: "14px",
                padding: "32px 28px",
                transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "#F5C518";
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 12px 40px rgba(10,22,40,0.08)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--gray-light)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Gold top accent */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  borderRadius: "14px 14px 0 0",
                  background: "linear-gradient(90deg, #F5C518, transparent)",
                }}
              />

              {/* Icon */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: "var(--navy)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#F5C518",
                  marginBottom: "20px",
                  flexShrink: 0,
                }}
              >
                <reason.Icon size={22} />
              </div>

              <h3
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: "var(--navy)",
                  marginBottom: "10px",
                  lineHeight: 1.3,
                  fontFamily: "var(--font-syne), sans-serif",
                }}
              >
                {reason.title}
              </h3>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--gray)",
                  lineHeight: 1.78,
                  fontWeight: 400,
                  margin: 0,
                  fontFamily: "var(--font-dm-sans), sans-serif",
                }}
              >
                {reason.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .why-us-section { padding: 80px 24px !important; }
          .why-us-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .why-us-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
