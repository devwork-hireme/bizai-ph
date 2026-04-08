"use client";

import { useRef } from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { Search, MessageSquare, Clock } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] },
  }),
};

type ProblemCard = {
  icon: React.ReactNode;
  title: string;
  body: string;
  stat: string;
};

const problems: ProblemCard[] = [
  {
    icon: <Search size={22} />,
    title: "No Online Presence",
    body: "Customers search Google and Facebook for your service but can't find you. They go to your competitor instead. Every day you're invisible online is a day you're losing business.",
    stat: "46% of all Google searches are seeking local information",
  },
  {
    icon: <MessageSquare size={22} />,
    title: "Missed Inquiries",
    body: "Customers message your Facebook page at 10PM. By morning when you reply, they've already booked someone else. Every missed message at night is a lost sale.",
    stat: "67% of customers expect a reply within 1 hour",
  },
  {
    icon: <Clock size={22} />,
    title: "No Time for Marketing",
    body: "You're too busy running your business to post on social media, reply to messages, or follow up on leads. Your competitors are showing up online while you're stuck on operations.",
    stat: "SMB owners spend 20+ hours per week on repetitive tasks",
  },
];

export default function Problem() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-50px" });

  return (
    <section
      id="problem"
      style={{
        background: "var(--deep)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "130px 64px",
        position: "relative",
        overflow: "hidden",
      }}
      className="problem-section"
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
      {/* Red tint glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "400px",
          background: "rgba(239,68,68,0.03)",
          filter: "blur(80px)",
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
          style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 64px" }}
        >
          <p className="section-label">The Problem</p>
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
            Every Day You're Offline,{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #F5C518, #FFD94A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Your Competitor Gets Your Customer
            </span>
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.85,
              fontWeight: 400,
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
          >
            You built a real business. But without a digital presence, automated responses,
            and consistent marketing — you're invisible to the customers who need you.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div
          className="problem-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
        >
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              initial="hidden"
              animate={headInView ? "visible" : "hidden"}
              custom={0.1 * i}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "16px",
                padding: "40px 32px",
                position: "relative",
                transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(255,255,255,0.07)";
                el.style.borderColor = "rgba(239,68,68,0.2)";
                el.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(255,255,255,0.04)";
                el.style.borderColor = "rgba(255,255,255,0.07)";
                el.style.transform = "translateY(0)";
              }}
            >
              {/* Red left accent */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  width: "3px",
                  borderRadius: "16px 0 0 16px",
                  background: "linear-gradient(to bottom, transparent, rgba(239,68,68,0.5), transparent)",
                }}
              />

              {/* Icon */}
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "12px",
                  background: "rgba(239,68,68,0.08)",
                  border: "1px solid rgba(239,68,68,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#EF4444",
                  marginBottom: "24px",
                  flexShrink: 0,
                }}
              >
                {p.icon}
              </div>

              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  color: "#FFFFFF",
                  marginBottom: "12px",
                  lineHeight: 1.3,
                  fontFamily: "var(--font-syne), sans-serif",
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  fontWeight: 400,
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  marginBottom: "0",
                }}
              >
                {p.body}
              </p>

              {/* Stat at bottom */}
              <div
                style={{
                  marginTop: "24px",
                  paddingTop: "20px",
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "#EF4444",
                  letterSpacing: "0.04em",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                }}
              >
                {p.stat}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .problem-section { padding: 80px 24px !important; }
          .problem-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .problem-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
