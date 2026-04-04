"use client";

import { useRef } from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { TrendingUp, Star } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

type AutomationCard = {
  icon: React.ReactNode;
  title: string;
  body: string;
  tag: string;
  badge?: { text: string; style: "blue" | "green" };
};

const automations: AutomationCard[] = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    title: "Messenger Auto-Reply Bot",
    body: "Answers inquiries, qualifies leads, takes orders, and books appointments automatically — through Facebook Messenger, 24/7. Responds in under 30 seconds.",
    tag: "Facebook Messenger",
    badge: { text: "MOST POPULAR", style: "blue" },
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "AI Lead Qualification",
    body: "Automatically score, sort, and respond to leads based on their intent — so your sales effort goes to prospects who are ready to buy.",
    tag: "Messenger · Instagram",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    title: "Appointment Booking System",
    body: "Customers book, reschedule, and receive reminders automatically. No more no-shows. No more back-and-forth scheduling over chat.",
    tag: "Google Calendar · Messenger",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>
    ),
    title: "Order Processing Automation",
    body: "Customer orders captured from Messenger, logged to your sheet, confirmation sent — all without you touching a keyboard. Zero order errors.",
    tag: "Google Sheets · Messenger",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: "Customer Follow-Up Sequences",
    body: "Automated follow-up messages sent at the right time — post-inquiry, post-purchase, and re-engagement. Leads never go cold again.",
    tag: "Messenger · Email",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
      </svg>
    ),
    title: "Social Media Auto-Reply",
    body: "Every comment, DM, and story reply handled automatically. Consistent brand voice, instant response, across Facebook and Instagram.",
    tag: "Facebook · Instagram",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    title: "Business Intelligence Reports",
    body: "Daily and weekly performance reports delivered automatically to your phone — sales, inquiries, bookings, and trends. Know your numbers without logging in.",
    tag: "Google Sheets · Viber",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: "Review Collection Bot",
    body: "Automatically request Google and Facebook reviews from happy customers after purchase or service completion. Build your reputation on autopilot.",
    tag: "Google · Facebook",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
    title: "Inventory Alert System",
    body: "Get notified automatically when stock runs low, orders exceed threshold, or new supplier quotes arrive. Never miss a restocking window again.",
    tag: "Google Sheets · Viber",
  },
];

const impactMetrics = [
  "40% higher conversion rate",
  "100% of leads captured",
  "3-day automated sequence",
];

export default function Automations() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-50px" });
  const featuredRef = useRef(null);
  const featuredInView = useInView(featuredRef, { once: true, margin: "-50px" });

  return (
    <section
      id="automations"
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
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <p className="section-label">Our Services</p>
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
            Everything Your Business Does Manually —{" "}
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
              Done Automatically
            </span>
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--soft)",
              maxWidth: "580px",
              margin: "0 auto",
              lineHeight: 1.78,
              fontWeight: 300,
            }}
          >
            From the first customer message to the final sale confirmation — we
            automate every step in between.
          </p>
        </motion.div>

        {/* Featured card */}
        <motion.div
          ref={featuredRef}
          variants={fadeUp}
          initial="hidden"
          animate={featuredInView ? "visible" : "hidden"}
          style={{
            background: "var(--card)",
            border: "1px solid var(--border-mid)",
            borderRadius: "20px",
            padding: "2.5rem",
            marginBottom: "2rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
          }}
          className="featured-card"
        >
          {/* Glow accent */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "-40%",
              right: "-10%",
              width: "400px",
              height: "400px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(61,111,255,0.12) 0%, transparent 65%)",
              pointerEvents: "none",
            }}
          />

          {/* Left — copy */}
          <div style={{ position: "relative", zIndex: 1 }}>
            {/* HIGHEST ROI badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.35rem 0.85rem",
                background: "rgba(0,229,160,0.1)",
                border: "1px solid rgba(0,229,160,0.3)",
                borderRadius: "6px",
                marginBottom: "1.5rem",
              }}
            >
              <TrendingUp size={14} color="var(--green)" />
              <span
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  color: "var(--green)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Highest ROI
              </span>
            </div>

            <h3
              style={{
                fontSize: "1.7rem",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                color: "var(--white)",
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              Lead Capture and Follow-Up System
            </h3>
            <p
              style={{
                fontSize: "0.95rem",
                color: "var(--soft)",
                lineHeight: 1.78,
                marginBottom: "1.75rem",
                fontWeight: 300,
              }}
            >
              Most Philippine businesses lose more than 60% of their leads to
              slow response times and inconsistent follow-up. This system captures
              every inquiry instantly — from Facebook, Messenger, or your website
              — logs it automatically, and triggers a personalized 3-day
              follow-up sequence so no opportunity is ever lost.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                marginBottom: "1.75rem",
              }}
            >
              {[
                "Instant Lead Capture",
                "3-Day Follow-Up Sequence",
                "Lead Scoring",
                "Google Sheets Dashboard",
                "Messenger Integration",
                "Zero Manual Work",
              ].map((tag) => (
                <span key={tag} className="tool-tag">
                  {tag}
                </span>
              ))}
            </div>

            {/* Impact metrics */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginBottom: "1.75rem",
                flexWrap: "wrap",
              }}
            >
              {impactMetrics.map((metric, i) => (
                <div key={metric} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <span
                    style={{
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      color: "var(--soft)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {metric}
                  </span>
                  {i < impactMetrics.length - 1 && (
                    <div
                      style={{
                        width: "1px",
                        height: "16px",
                        background: "var(--border)",
                        flexShrink: 0,
                      }}
                    />
                  )}
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get This Automation
            </a>
          </div>

          {/* Right — chat mockup */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            {[
              { from: "customer", text: "Hi! Magkano ang menu nyo at may delivery ba?" },
              {
                from: "bot",
                text: "Hi! Welcome to Aling Rosa's Kitchen 🍛 Yes, we deliver to Taguig and BGC! Our full menu is here: [link]. What would you like to order?",
              },
              { from: "customer", text: "Paki-order ng 2 pcs chicken adobo + 1 rice. COD lang please." },
              {
                from: "bot",
                text: "Order confirmed! ✅\n2x Chicken Adobo + 1x Rice — ₱280\nCOD. Estimated delivery: 45 mins.\nKindly provide your delivery address.",
              },
            ].map((msg, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: msg.from === "customer" ? "flex-start" : "flex-end",
                }}
              >
                <div
                  style={{
                    maxWidth: "80%",
                    padding: "0.7rem 1rem",
                    borderRadius:
                      msg.from === "customer"
                        ? "4px 14px 14px 14px"
                        : "14px 4px 14px 14px",
                    background:
                      msg.from === "customer"
                        ? "rgba(255,255,255,0.06)"
                        : "var(--blue)",
                    fontSize: "0.8rem",
                    color: "var(--white)",
                    lineHeight: 1.55,
                    whiteSpace: "pre-line",
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <div
                style={{
                  padding: "0.7rem 1rem",
                  borderRadius: "14px 4px 14px 14px",
                  background: "var(--blue-pale)",
                  border: "1px solid var(--border)",
                  display: "flex",
                  gap: "4px",
                  alignItems: "center",
                }}
              >
                {[0, 0.2, 0.4].map((delay, i) => (
                  <span
                    key={i}
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "var(--blue-light)",
                      animation: `chat-blink 1.4s ${delay}s infinite`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* 9-card grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1rem",
          }}
          className="auto-grid"
        >
          {automations.map((auto, i) => (
            <motion.div
              key={auto.title}
              variants={fadeUp}
              initial="hidden"
              animate={featuredInView ? "visible" : "hidden"}
              custom={0.05 * i}
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "1.5rem",
                transition: "border-color 0.2s ease",
                position: "relative",
              }}
              whileHover={{ y: -4 }}
            >
              {/* Optional badge */}
              {auto.badge && (
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                    padding: "3px 8px",
                    background:
                      auto.badge.style === "blue"
                        ? "rgba(61,111,255,0.1)"
                        : "rgba(0,229,160,0.1)",
                    border:
                      auto.badge.style === "blue"
                        ? "1px solid rgba(61,111,255,0.3)"
                        : "1px solid rgba(0,229,160,0.3)",
                    borderRadius: "4px",
                    marginBottom: "0.75rem",
                  }}
                >
                  {auto.badge.style === "blue" ? (
                    <Star size={14} color="var(--blue-light)" />
                  ) : (
                    <TrendingUp size={14} color="var(--green)" />
                  )}
                  <span
                    style={{
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      color:
                        auto.badge.style === "blue"
                          ? "var(--blue-light)"
                          : "var(--green)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    {auto.badge.text}
                  </span>
                </div>
              )}

              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: "var(--blue-pale)",
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--blue-light)",
                  marginBottom: "1rem",
                  flexShrink: 0,
                }}
              >
                {auto.icon}
              </div>
              <h4
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  color: "var(--white)",
                  marginBottom: "0.5rem",
                  lineHeight: 1.3,
                }}
              >
                {auto.title}
              </h4>
              <p
                style={{
                  fontSize: "0.82rem",
                  color: "var(--muted)",
                  lineHeight: 1.65,
                  marginBottom: "1rem",
                }}
              >
                {auto.body}
              </p>
              <span
                style={{
                  fontSize: "0.68rem",
                  fontWeight: 600,
                  color: "var(--blue-light)",
                  background: "var(--blue-pale)",
                  border: "1px solid var(--border)",
                  padding: "3px 8px",
                  borderRadius: "4px",
                }}
              >
                {auto.tag}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .auto-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .featured-card { grid-template-columns: 1fr !important; }
          .auto-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .auto-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
