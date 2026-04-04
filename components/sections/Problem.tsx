"use client";

import { useRef } from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

type ProblemCard = {
  icon: React.ReactNode;
  title: string;
  body: string;
};

const problems: ProblemCard[] = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    title: "You Miss Inquiries While You Sleep",
    body: "Customers send messages at 10pm. By 9am when you reply, they have already booked with your competitor. Every missed message is a lost sale.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: "Manual Orders Eat 3+ Hours Every Day",
    body: "Copying orders from Messenger into spreadsheets. Re-typing addresses. Sending confirmation messages one by one. This is not a business — it is a data entry job.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    title: "No-Shows and Double Bookings Destroy Revenue",
    body: "Scheduling via Messenger chat means no confirmations, no reminders, no record. Clients forget. You end up with empty slots and angry customers.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: "Leads Go Cold Before You Follow Up",
    body: "A prospect inquires on Monday. You mean to follow up but get busy. By Friday they have signed with someone else. Late follow-up is the single biggest source of lost revenue.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    title: "You Answer the Same Questions Every Single Day",
    body: '"What are your rates?" "Are you open Sunday?" "Do you deliver to Makati?" You spend hours answering questions that should be automated.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    title: "No Visibility Into What Is Actually Working",
    body: "No dashboard. No reports. No idea which products drive the most revenue or which ads bring the best leads. You are running a business blind.",
  },
];

export default function Problem() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-50px" });

  return (
    <section
      id="problem"
      style={{
        background: "var(--black)",
        borderTop: "1px solid var(--border)",
        padding: "6.5rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          ref={headRef}
          variants={fadeUp}
          initial="hidden"
          animate={headInView ? "visible" : "hidden"}
          style={{ maxWidth: "680px", marginBottom: "4rem" }}
        >
          <p className="section-label">The Problem</p>
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
            Why Most Filipino SMBs Are{" "}
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
              Leaving Money on the Table
            </span>
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--soft)",
              lineHeight: 1.78,
              fontWeight: 300,
            }}
          >
            You built a real business. But manual processes, slow responses, and
            zero visibility are costing you customers every single day.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.25rem",
          }}
          className="problem-grid"
        >
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              initial="hidden"
              animate={headInView ? "visible" : "hidden"}
              custom={0.08 * i}
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderLeft: "3px solid rgba(239,68,68,0.5)",
                borderRadius: "12px",
                padding: "1.75rem",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: "rgba(239,68,68,0.06)",
                  border: "1px solid rgba(239,68,68,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(239,68,68,0.7)",
                  marginBottom: "1.1rem",
                  flexShrink: 0,
                }}
              >
                {p.icon}
              </div>
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--white)",
                  marginBottom: "0.6rem",
                  lineHeight: 1.35,
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--muted)",
                  lineHeight: 1.72,
                  margin: 0,
                }}
              >
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .problem-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .problem-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
