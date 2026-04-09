"use client";

import { useRef } from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { Globe, MessageCircle, Clock } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] },
  }),
};

const problems = [
  {
    Icon: Globe,
    title: "No Online Presence",
    body: "Customers search Google and Facebook for your service but can't find you. Every day you're invisible online is a day your competitor wins.",
    stat: "46% of all Google searches are seeking local information",
  },
  {
    Icon: MessageCircle,
    title: "Missed Inquiries",
    body: "Customers message at 10PM. By morning when you reply, they've already booked someone else. Every missed message is a lost sale.",
    stat: "67% of customers expect a reply within 1 hour",
  },
  {
    Icon: Clock,
    title: "No Time for Marketing",
    body: "You're busy running your business. No time to post on Facebook, reply to messages, or follow up leads. Your competitor does all of this automatically.",
    stat: "SMB owners spend 20+ hours per week on repetitive tasks",
  },
];

export default function Problem() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-50px" });

  return (
    <section
      id="problem"
      className="problem-section"
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
          style={{
            textAlign: "center",
            maxWidth: "700px",
            margin: "0 auto 64px",
          }}
        >
          <p
            className="section-label"
            style={{ color: "var(--navy)" }}
          >
            The Problem
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
            Every Day You&apos;re Offline, Your Competitor{" "}
            <span style={{ color: "#C9940A" }}>
              Gets Your Customer
            </span>
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--gray)",
              lineHeight: 1.78,
              fontWeight: 400,
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
          >
            Filipino consumers search Google and Facebook for your services every
            day. If they can&apos;t find you — they find someone else.
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
                background: "#FFFFFF",
                border: "1px solid var(--gray-light)",
                borderRadius: "14px",
                padding: "40px 32px",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
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
              {/* Gold top accent line */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: "linear-gradient(90deg, #F5C518, transparent)",
                  borderRadius: "14px 14px 0 0",
                }}
              />

              {/* Icon */}
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "12px",
                  background: "rgba(239,68,68,0.08)",
                  border: "1px solid rgba(239,68,68,0.18)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#EF4444",
                  marginBottom: "24px",
                  flexShrink: 0,
                }}
              >
                <p.Icon size={22} />
              </div>

              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  color: "var(--navy)",
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
                  color: "var(--gray)",
                  lineHeight: 1.78,
                  fontWeight: 400,
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  marginBottom: 0,
                }}
              >
                {p.body}
              </p>

              {/* Stat at bottom */}
              <div
                style={{
                  marginTop: "24px",
                  paddingTop: "20px",
                  borderTop: "1px solid var(--gray-light)",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "#EF4444",
                  letterSpacing: "0.03em",
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
