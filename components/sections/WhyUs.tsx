"use client";

import { useRef } from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { Wrench, Zap, BarChart3, MapPin, MessageSquare, TrendingUp } from "lucide-react";

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
    icon: <Wrench size={22} />,
    title: "100% Done For You",
    body: "We don't teach you what to do. We do it for you. Focus on your business, we handle the digital side — website, automation, content, and reporting.",
  },
  {
    icon: <Zap size={22} />,
    title: "Powered by AI",
    body: "Our systems use AI to automate repetitive tasks — faster results, lower cost, no manual work. Your business works even when you're sleeping.",
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Results You Can See",
    body: "Monthly reports showing exact numbers — leads captured, messages handled, reviews earned. No guessing if it's working. You see the data.",
  },
  {
    icon: <MapPin size={22} />,
    title: "Filipino at Heart",
    body: "We understand Filipino consumer behavior and what actually works in the Philippine market. Our strategies are built for local SMBs — not copied from abroad.",
  },
  {
    icon: <MessageSquare size={22} />,
    title: "Always Here",
    body: "WhatsApp support for all concerns. We don't disappear after delivery — we stay with you, fix issues fast, and keep your systems running smoothly.",
  },
  {
    icon: <TrendingUp size={22} />,
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
        background: "var(--black)",
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
      {/* Gold glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "30%",
          right: "-200px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "rgba(245,197,24,0.04)",
          filter: "blur(100px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div
          ref={headRef}
          variants={fadeUp}
          initial="hidden"
          animate={headInView ? "visible" : "hidden"}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <p className="section-label">Why BizAI PH</p>
          <h2
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: "#FFFFFF",
              marginBottom: "20px",
              fontFamily: "var(--font-syne), sans-serif",
            }}
          >
            We Are Not Just Another Agency —{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #F5C518, #FFD94A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              We Are Your Growth Partner
            </span>
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "rgba(255,255,255,0.55)",
              maxWidth: "540px",
              margin: "0 auto",
              lineHeight: 1.78,
              fontWeight: 400,
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
          >
            Six reasons why Filipino SMB owners choose BizAI PH and stay with us long-term.
          </p>
        </motion.div>

        {/* Reasons grid */}
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
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "14px",
                padding: "32px 28px",
                transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(255,255,255,0.07)";
                el.style.borderColor = "rgba(245,197,24,0.2)";
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 12px 40px rgba(0,0,0,0.4)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(255,255,255,0.04)";
                el.style.borderColor = "rgba(255,255,255,0.07)";
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
                  height: "2px",
                  borderRadius: "14px 14px 0 0",
                  background: "linear-gradient(90deg, transparent, rgba(245,197,24,0.4), transparent)",
                }}
              />

              {/* Icon */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: "rgba(245,197,24,0.08)",
                  border: "1px solid rgba(245,197,24,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#F5C518",
                  marginBottom: "20px",
                  flexShrink: 0,
                }}
              >
                {reason.icon}
              </div>

              <h3
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: "#FFFFFF",
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
                  color: "rgba(255,255,255,0.5)",
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
