"use client";

import { useRef, useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { TrendingUp, Star } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] },
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
    body: "Answers inquiries, qualifies leads, takes orders, and books appointments automatically — 24/7.",
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
    body: "Score, sort, and respond to leads based on intent — so your sales effort goes to prospects ready to buy.",
    tag: "Messenger · Instagram",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    title: "Appointment Booking System",
    body: "Customers book, reschedule, and receive reminders automatically. No more no-shows.",
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
    body: "Orders captured from Messenger, logged to your sheet, confirmation sent — zero errors.",
    tag: "Google Sheets · Messenger",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: "Customer Follow-Up Sequences",
    body: "Automated follow-up messages at the right time — post-inquiry, post-purchase, re-engagement.",
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
    body: "Every comment, DM, and story reply handled automatically across Facebook and Instagram.",
    tag: "Facebook · Instagram",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    title: "Business Intelligence Reports",
    body: "Daily performance reports — sales, inquiries, bookings — delivered automatically to your phone.",
    tag: "Google Sheets · Viber",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: "Review Collection Bot",
    body: "Automatically request Google and Facebook reviews from happy customers after service completion.",
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
    body: "Get notified automatically when stock runs low or orders exceed threshold. Never miss a restocking window.",
    tag: "Google Sheets · Viber",
  },
];

const impactMetrics = [
  "40% higher conversion rate",
  "100% of leads captured",
  "3-day automated sequence",
];

// Messenger chat animation data
type ChatMessage = { from: "customer" | "bot"; text: string };
const chatScript: { delay: number; type: "message" | "typing_start" | "typing_end"; from?: "customer" | "bot"; text?: string }[] = [
  { delay: 200, type: "message", from: "customer", text: "Hi! Magkano ang menu nyo at may delivery ba?" },
  { delay: 800, type: "typing_start" },
  { delay: 2000, type: "typing_end" },
  { delay: 2100, type: "message", from: "bot", text: "Hi! Welcome to Aling Rosa's Kitchen 🍛 Yes, we deliver to Taguig and BGC! Our full menu starts at ₱120. What would you like to order?" },
  { delay: 3600, type: "message", from: "customer", text: "Paki-order ng 2 pcs chicken adobo + 1 rice. COD lang please." },
  { delay: 4400, type: "typing_start" },
  { delay: 5900, type: "typing_end" },
  { delay: 6000, type: "message", from: "bot", text: "Order confirmed! ✅\n2x Chicken Adobo + 1x Rice — ₱280\nCOD. Estimated delivery: 45 mins.\nKindly provide your delivery address." },
  { delay: 8000, type: "message", from: "customer", text: "Salamat! 123 Kalayaan Ave, Taguig." },
  { delay: 8800, type: "typing_start" },
  { delay: 10200, type: "typing_end" },
  { delay: 10300, type: "message", from: "bot", text: "Perfect! Your order is on its way 🛵\nWe'll message you when our rider departs. Thank you for ordering!" },
];
const LOOP_DURATION = 13000;

function MessengerDemo() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [typing, setTyping] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeouts: ReturnType<typeof setTimeout>[] = [];

    function run() {
      setMessages([]);
      setTyping(false);

      chatScript.forEach((event) => {
        const t = setTimeout(() => {
          if (event.type === "typing_start") {
            setTyping(true);
          } else if (event.type === "typing_end") {
            setTyping(false);
          } else if (event.type === "message" && event.from && event.text) {
            const msg: ChatMessage = { from: event.from, text: event.text };
            setMessages((prev) => [...prev, msg]);
          }
          // Auto-scroll
          if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
          }
        }, event.delay);
        timeouts.push(t);
      });

      const loopTimer = setTimeout(run, LOOP_DURATION);
      timeouts.push(loopTimer);
    }

    run();
    return () => timeouts.forEach(clearTimeout);
  }, []);

  // Auto-scroll on new message
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages, typing]);

  return (
    <div
      style={{
        background: "var(--card)",
        border: "1px solid var(--card-border)",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow:
          "0 0 0 1px rgba(255,255,255,0.04), 0 40px 80px rgba(0,0,0,0.6), 0 0 120px rgba(61,111,255,0.1)",
      }}
    >
      {/* Fake browser bar */}
      <div
        style={{
          background: "var(--surface)",
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          borderBottom: "1px solid var(--card-border)",
        }}
      >
        {/* Traffic lights */}
        <div style={{ display: "flex", gap: "6px" }}>
          {["#FF5F57", "#FFBD2E", "#28C840"].map((c) => (
            <div key={c} style={{ width: "10px", height: "10px", borderRadius: "50%", background: c }} />
          ))}
        </div>
        {/* URL bar */}
        <div
          style={{
            flex: 1,
            maxWidth: "300px",
            margin: "0 auto",
            background: "rgba(255,255,255,0.05)",
            borderRadius: "6px",
            padding: "5px 12px",
            fontSize: "0.72rem",
            color: "var(--muted)",
            textAlign: "center",
          }}
        >
          m.me/bizaiph
        </div>
      </div>

      {/* Messenger interface */}
      <div>
        {/* Header — Messenger blue */}
        <div
          style={{
            background: "#0084FF",
            padding: "14px 16px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.9rem",
              fontWeight: 700,
              color: "#0084FF",
              flexShrink: 0,
            }}
          >
            B
          </div>
          <div>
            <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "white" }}>BizAI PH</div>
            <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.8)" }}>Active now</div>
          </div>
        </div>

        {/* Messages area — white Messenger style */}
        <div
          ref={containerRef}
          style={{
            background: "#FFFFFF",
            padding: "16px",
            minHeight: "320px",
            maxHeight: "320px",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          {/* Time stamp */}
          <div style={{ fontSize: "0.65rem", color: "#999", textAlign: "center", margin: "4px 0" }}>
            Today {new Date().toLocaleTimeString("en-PH", { hour: "2-digit", minute: "2-digit" })}
          </div>

          {messages.map((msg, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: msg.from === "customer" ? "flex-end" : "flex-start",
              }}
            >
              <div
                style={{
                  maxWidth: "75%",
                  padding: "10px 14px",
                  borderRadius:
                    msg.from === "customer"
                      ? "18px 18px 4px 18px"
                      : "18px 18px 18px 4px",
                  background: msg.from === "customer" ? "#0084FF" : "#F0F0F0",
                  color: msg.from === "customer" ? "white" : "#000",
                  fontSize: "0.85rem",
                  lineHeight: 1.5,
                  whiteSpace: "pre-line",
                }}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {typing && (
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <div
                style={{
                  background: "#F0F0F0",
                  borderRadius: "18px",
                  padding: "12px 16px",
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
                      background: "#999",
                      animation: `bounce-dot 1.4s ${delay}s infinite`,
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Input bar */}
        <div
          style={{
            background: "#FFFFFF",
            padding: "10px 16px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            borderTop: "1px solid #F0F0F0",
          }}
        >
          <div
            style={{
              flex: 1,
              background: "#F5F5F5",
              borderRadius: "20px",
              padding: "8px 14px",
              fontSize: "0.82rem",
              color: "#999",
            }}
          >
            Aa
          </div>
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              background: "#0084FF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Automations() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-50px" });
  const featuredRef = useRef(null);
  const featuredInView = useInView(featuredRef, { once: true, margin: "-50px" });

  return (
    <section
      id="automations"
      className="automations-section"
      style={{
        background: "var(--black)",
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
      {/* Cyan glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "20%",
          right: "-200px",
          width: "600px",
          height: "600px",
          background: "rgba(0,200,255,0.05)",
          filter: "blur(80px)",
          borderRadius: "50%",
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
          <p className="section-label">Our Services</p>
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
              maxWidth: "560px",
              margin: "0 auto",
              lineHeight: 1.85,
              fontWeight: 300,
            }}
          >
            From the first customer message to the final sale confirmation — we
            automate every step in between.
          </p>
        </motion.div>

        {/* Featured card — with real Messenger demo */}
        <motion.div
          ref={featuredRef}
          variants={fadeUp}
          initial="hidden"
          animate={featuredInView ? "visible" : "hidden"}
          className="featured-card"
          style={{
            background: "var(--card)",
            border: "1px solid var(--card-border)",
            borderRadius: "20px",
            padding: "40px",
            marginBottom: "32px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
          }}
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
              background: "radial-gradient(circle, rgba(61,111,255,0.12) 0%, transparent 65%)",
              pointerEvents: "none",
            }}
          />
          {/* Top accent line */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "1px",
              background: "linear-gradient(90deg, transparent, var(--blue), var(--cyan), transparent)",
            }}
          />

          {/* Left — copy */}
          <div style={{ position: "relative", zIndex: 1 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.35rem 0.85rem",
                background: "rgba(0,229,160,0.1)",
                border: "1px solid rgba(0,229,160,0.3)",
                borderRadius: "6px",
                marginBottom: "24px",
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
                marginBottom: "16px",
              }}
            >
              Lead Capture and Follow-Up System
            </h3>
            <p
              style={{
                fontSize: "0.95rem",
                color: "var(--soft)",
                lineHeight: 1.85,
                marginBottom: "24px",
                fontWeight: 300,
              }}
            >
              Most Philippine businesses lose more than 60% of their leads to
              slow response times and inconsistent follow-up. This system captures
              every inquiry instantly — from Facebook, Messenger, or your website
              — and triggers a personalized 3-day follow-up sequence.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                marginBottom: "24px",
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
                marginBottom: "28px",
                flexWrap: "wrap",
              }}
            >
              {impactMetrics.map((metric, i) => (
                <div key={metric} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--soft)", whiteSpace: "nowrap" }}>
                    {metric}
                  </span>
                  {i < impactMetrics.length - 1 && (
                    <div style={{ width: "1px", height: "16px", background: "var(--border)", flexShrink: 0 }} />
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

          {/* Right — Messenger demo */}
          <div style={{ position: "relative", zIndex: 1 }}>
            <MessengerDemo />
          </div>
        </motion.div>

        {/* 9-card grid */}
        <div
          className="auto-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px",
            background: "var(--card-border)",
            borderRadius: "14px",
            overflow: "hidden",
          }}
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
                padding: "28px 24px",
                position: "relative",
                overflow: "hidden",
                transition: "background 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                cursor: "default",
              }}
              whileHover={{ y: -4 }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--card-hover)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--card)";
              }}
            >
              {/* Top accent on hover handled via CSS */}
              {auto.badge && (
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                    padding: "3px 8px",
                    background: auto.badge.style === "blue" ? "rgba(61,111,255,0.1)" : "rgba(0,229,160,0.1)",
                    border: auto.badge.style === "blue" ? "1px solid rgba(61,111,255,0.3)" : "1px solid rgba(0,229,160,0.3)",
                    borderRadius: "4px",
                    marginBottom: "12px",
                  }}
                >
                  {auto.badge.style === "blue" ? (
                    <Star size={12} color="var(--blue-light)" />
                  ) : (
                    <TrendingUp size={12} color="var(--green)" />
                  )}
                  <span
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      color: auto.badge.style === "blue" ? "var(--blue-light)" : "var(--green)",
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
                  marginBottom: "16px",
                  flexShrink: 0,
                }}
              >
                {auto.icon}
              </div>
              <h4
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  color: "var(--white)",
                  marginBottom: "8px",
                  lineHeight: 1.3,
                }}
              >
                {auto.title}
              </h4>
              <p
                style={{
                  fontSize: "0.82rem",
                  color: "var(--muted)",
                  lineHeight: 1.7,
                  marginBottom: "16px",
                  fontWeight: 300,
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
        @media (max-width: 900px) {
          .automations-section { padding: 80px 24px !important; }
          .featured-card { grid-template-columns: 1fr !important; gap: 32px !important; }
          .auto-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .auto-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
