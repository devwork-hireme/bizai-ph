"use client";

import { useRef } from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { Search, MessageCircle, TrendingDown } from "lucide-react";

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
    Icon: Search,
    title: "They Search. Your Competitor Shows Up. You Don't.",
    body: "Right now someone in your city is searching for exactly what you sell. Your competitor has a website and a Google listing. You don't. They get the customer. You get nothing. This happens every single day you stay invisible.",
    stat: "97% of customers search online before buying",
  },
  {
    Icon: MessageCircle,
    title: "They Message at 10PM. You Reply at 9AM. They Already Bought.",
    body: "A customer messages you excited about your service. You see it the next morning. By then, the competitor who replied at 10:05PM already has their payment. That sale is gone forever — and you never even knew it existed.",
    stat: "67% of customers buy from whoever replies first",
  },
  {
    Icon: TrendingDown,
    title: "Interested People Disappear. You Never Follow Up. Revenue Lost.",
    body: "Someone asks about your price on Monday. You're busy. You mean to follow up. Life happens. By Friday they've paid someone else. This isn't laziness — you're running a business. But every missed follow-up is money you'll never recover.",
    stat: "80% of sales need 5 follow-ups to close",
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
            Why This Is Happening
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
            You&apos;re Losing Customers{" "}
            <span style={{ color: "#C9940A" }}>Every Day You&apos;re Offline.</span>
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
            Not because your business isn&apos;t good enough. Because these three
            problems are happening right now — and nobody is fixing them.
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
                el.style.borderColor = "#EF4444";
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
              {/* Red top accent line */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: "linear-gradient(90deg, #EF4444, transparent)",
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
                  border: "1px solid rgba(239,68,68,0.2)",
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
                  fontSize: "1.05rem",
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
