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

type IndustryCard = {
  icon: React.ReactNode;
  name: string;
  stat: string;
  painPoint: string;
  automations: string[];
};

const industries: IndustryCard[] = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11l19-9-9 19-2-8-8-2z"/>
      </svg>
    ),
    name: "Restaurant / Food Service",
    stat: "300+ orders processed monthly",
    painPoint: "Customers message at peak hours and never get a reply.",
    automations: ["Order intake via Messenger", "Menu auto-reply bot", "Delivery tracking updates"],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    name: "Salon / Spa / Beauty",
    stat: "40+ appointments automated daily",
    painPoint: "No-shows and double bookings kill revenue every week.",
    automations: ["Self-service booking system", "Reminder & confirmation bot", "Rebooking follow-up"],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>
    ),
    name: "Online Sellers — Shopee / Lazada",
    stat: "200+ daily inquiries handled",
    painPoint: "Hundreds of product questions pile up while you sleep.",
    automations: ["Product FAQ auto-reply", "Order status bot", "Review request automation"],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    name: "Real Estate Agencies",
    stat: "50+ leads qualified automatically",
    painPoint: "Hot leads go cold because brokers can't follow up fast enough.",
    automations: ["Instant lead qualifier", "Property inquiry auto-reply", "Viewing scheduler"],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    name: "Clinics / Healthcare",
    stat: "100+ appointment confirmations weekly",
    painPoint: "Manual appointment scheduling leads to missed bookings and no-shows.",
    automations: ["Patient booking system", "Appointment reminders", "Follow-up care messages"],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
    name: "Coaches & Consultants",
    stat: "90% reduction in admin time",
    painPoint: "Too much time on scheduling, follow-up, and onboarding. Not enough on clients.",
    automations: ["Discovery call scheduler", "Client onboarding flow", "Session reminder bot"],
  },
];

export default function Industries() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-50px" });

  return (
    <section
      id="industries"
      className="industries-section"
      style={{
        background: "var(--deep)",
        borderTop: "1px solid var(--card-border)",
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
            "linear-gradient(rgba(82,130,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(82,130,255,0.03) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
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
          <p className="section-label">Industries We Serve</p>
          <h2
            style={{
              fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 1.0,
              color: "var(--white)",
              marginBottom: "20px",
            }}
          >
            Built for Your{" "}
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
              Industry
            </span>
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--soft)",
              maxWidth: "560px",
              margin: "0 auto",
              lineHeight: 1.85,
              fontWeight: 300,
            }}
          >
            We know the specific pain points of each business type. Our
            automations are designed around how Philippine SMBs actually operate.
          </p>
        </motion.div>

        {/* 3×2 grid — hairline */}
        <div
          className="industries-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "var(--card-border)",
            borderRadius: "14px",
            overflow: "hidden",
          }}
        >
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              variants={fadeUp}
              initial="hidden"
              animate={headInView ? "visible" : "hidden"}
              custom={0.07 * i}
              style={{
                background: "var(--card)",
                padding: "36px 28px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                transition: "background 0.25s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--card-hover)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--card)";
              }}
            >
              {/* Icon + name */}
              <div>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "10px",
                    background: "var(--blue-pale)",
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--blue-light)",
                    marginBottom: "0.9rem",
                  }}
                >
                  {ind.icon}
                </div>
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "var(--white)",
                    lineHeight: 1.3,
                    marginBottom: "0.3rem",
                  }}
                >
                  {ind.name}
                </h3>
                <p
                  style={{
                    fontSize: "0.75rem",
                    fontStyle: "italic",
                    color: "var(--blue-light)",
                    margin: 0,
                  }}
                >
                  {ind.stat}
                </p>
              </div>

              {/* Pain point */}
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--muted)",
                  lineHeight: 1.65,
                  margin: 0,
                  paddingTop: "0.75rem",
                  borderTop: "1px solid var(--border)",
                }}
              >
                {ind.painPoint}
              </p>

              {/* Automations list */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {ind.automations.map((a) => (
                  <div
                    key={a}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--green)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span style={{ fontSize: "0.8rem", color: "var(--soft)" }}>{a}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .industries-section { padding: 80px 24px !important; }
          .industries-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 580px) {
          .industries-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
