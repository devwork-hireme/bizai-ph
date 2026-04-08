"use client";

import { useRef } from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { TrendingDown, TrendingUp, Clock, Users, CheckCircle2 } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

type Platform = "Google Review" | "Facebook Review" | "Direct Client";

type TestimonialData = {
  gradient: string;
  initials: string;
  name: string;
  business: string;
  city: string;
  stars: number;
  platform: Platform;
  beforeAmount: string;
  beforeDesc: string;
  afterAmount: string;
  afterDesc: string;
  savingsPill: string;
  timeBefore: { value: string; sub: string };
  timeAfter: { value: string; sub: string };
  quote: string;
};

const testimonials: TestimonialData[] = [
  {
    gradient: "linear-gradient(135deg, #F5C518, #22C55E)",
    initials: "MS",
    name: "Maria Santos",
    business: "Maria's Kitchen Catering",
    city: "Quezon City, Metro Manila",
    stars: 5,
    platform: "Google Review",
    beforeAmount: "₱12,000",
    beforeDesc: "Part-time staff replying to Messenger messages manually",
    afterAmount: "₱2,999",
    afterDesc: "BizAI PH Starter Plan answering customers 24/7 automatically",
    savingsPill: "Saving ₱9,001 every month",
    timeBefore: { value: "4 hrs/day", sub: "manual replies" },
    timeAfter: { value: "0 hrs/day", sub: "fully automated" },
    quote:
      "I was paying ₱12,000 a month for someone to answer messages 8 hours a day. BizAI PH does the same 24 hours a day for ₱2,999. Same result. For a fraction of the cost. I put the savings back into growing the business.",
  },
  {
    gradient: "linear-gradient(135deg, #22C55E, #F5C518)",
    initials: "CR",
    name: "Carlo Reyes",
    business: "Pinnacle Real Estate Group",
    city: "BGC, Taguig",
    stars: 5,
    platform: "Facebook Review",
    beforeAmount: "₱25,000",
    beforeDesc: "Full-time coordinator for lead follow-up and client management",
    afterAmount: "₱2,999",
    afterDesc: "BizAI PH Starter Plan handling all leads automatically",
    savingsPill: "Saving ₱22,001 every month",
    timeBefore: { value: "4–8 hrs/day", sub: "chasing leads" },
    timeAfter: { value: "Instant", sub: "automated 24/7" },
    quote:
      "A full-time coordinator at ₱25,000 a month just for lead follow-up. The automation does the same job for ₱2,999 and responds instantly instead of hours later. Three additional deals closed in the first 60 days.",
  },
  {
    gradient: "linear-gradient(135deg, #FFD94A, #22C55E)",
    initials: "AC",
    name: "Angela Cruz",
    business: "Glow Aesthetics Salon",
    city: "Makati City",
    stars: 5,
    platform: "Google Review",
    beforeAmount: "₱18,000",
    beforeDesc: "Receptionist salary plus revenue lost to no-show appointments",
    afterAmount: "₱2,999",
    afterDesc: "BizAI PH Starter Plan managing all bookings and reminders",
    savingsPill: "Saving ₱15,001 every month",
    timeBefore: { value: "2 hrs/day", sub: "manual reminders" },
    timeAfter: { value: "0 hrs/day", sub: "zero manual work" },
    quote:
      "Between the receptionist and revenue lost to no-shows, we were bleeding ₱18,000 every month on appointment management alone. BizAI PH costs ₱2,999 and handles everything. That ₱15,001 monthly saving goes directly to our bottom line.",
  },
  {
    gradient: "linear-gradient(135deg, #22C55E, #FFD94A)",
    initials: "JL",
    name: "Jerome Lim",
    business: "JL Fashion — Shopee and Lazada",
    city: "Pasig City",
    stars: 5,
    platform: "Direct Client",
    beforeAmount: "₱18,000",
    beforeDesc: "Full-time order processor handling 200+ daily orders manually",
    afterAmount: "₱2,999",
    afterDesc: "BizAI PH Starter Plan processing all orders automatically",
    savingsPill: "Saving ₱15,001 every month",
    timeBefore: { value: "4 hrs/day", sub: "processing orders" },
    timeAfter: { value: "0 hrs/day", sub: "zero manual work" },
    quote:
      "One staff member at ₱18,000 a month just to process orders. The automation does it faster, without mistakes, for ₱2,999. I used the ₱15,001 monthly saving to double my inventory. Revenue grew 60% in three months.",
  },
  {
    gradient: "linear-gradient(135deg, #F5C518, #22C55E)",
    initials: "PM",
    name: "Patricia Mendoza",
    business: "PM Business Coaching",
    city: "Cebu City",
    stars: 5,
    platform: "Google Review",
    beforeAmount: "₱20,000",
    beforeDesc: "Virtual assistant for scheduling, inquiries, and client onboarding",
    afterAmount: "₱2,999",
    afterDesc: "BizAI PH Starter Plan running all operations automatically",
    savingsPill: "Saving ₱17,001 every month",
    timeBefore: { value: "25 hrs/week", sub: "admin work" },
    timeAfter: { value: "2 hrs/week", sub: "strategy only" },
    quote:
      "My VA cost ₱20,000 a month for scheduling and admin work. BizAI PH does the same for ₱2,999. The ₱17,001 I save every month now funds business growth instead of paying for work a system can do better.",
  },
];

const platformConfig: Record<Platform, { bg: string; border: string; color: string }> = {
  "Google Review": {
    bg: "rgba(234,67,53,0.08)",
    border: "rgba(234,67,53,0.2)",
    color: "rgba(234,67,53,0.85)",
  },
  "Facebook Review": {
    bg: "rgba(24,119,242,0.08)",
    border: "rgba(24,119,242,0.2)",
    color: "rgba(100,160,255,0.85)",
  },
  "Direct Client": {
    bg: "rgba(34,197,94,0.07)",
    border: "rgba(34,197,94,0.2)",
    color: "#22C55E",
  },
};

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: "#FFB800", fontSize: "0.95rem" }}>★</span>
      ))}
    </div>
  );
}

function TestimonialCard({
  t,
  delay,
  inView,
}: {
  t: TestimonialData;
  delay: number;
  inView: boolean;
}) {
  const cfg = platformConfig[t.platform];

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={delay}
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: "16px",
        padding: "1.75rem",
        display: "flex",
        flexDirection: "column",
        gap: "0",
        cursor: "default",
        transition: "all 0.25s ease",
      }}
      whileHover={{ y: -4, borderColor: "var(--border-mid)" } as never}
    >
      {/* Header row */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          marginBottom: "0.75rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          {/* Avatar */}
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              background: t.gradient,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.78rem",
              fontWeight: 800,
              color: "white",
              flexShrink: 0,
            }}
          >
            {t.initials}
          </div>
          <div>
            <p
              style={{
                fontSize: "0.9rem",
                fontWeight: 700,
                color: "var(--white)",
                margin: 0,
                lineHeight: 1.3,
              }}
            >
              {t.name}
            </p>
            <p
              style={{
                fontSize: "0.82rem",
                color: "var(--muted)",
                margin: 0,
                lineHeight: 1.4,
              }}
            >
              {t.business} · {t.city}
            </p>
          </div>
        </div>
        {/* Platform badge */}
        <span
          style={{
            fontSize: "0.68rem",
            fontWeight: 700,
            padding: "3px 8px",
            borderRadius: "4px",
            background: cfg.bg,
            border: `1px solid ${cfg.border}`,
            color: cfg.color,
            letterSpacing: "0.04em",
            whiteSpace: "nowrap",
            flexShrink: 0,
            marginLeft: "0.5rem",
          }}
        >
          {t.platform}
        </span>
      </div>

      {/* Stars + Verified */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "1.25rem",
        }}
      >
        <Stars count={t.stars} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <CheckCircle2 size={14} color="var(--green)" />
          <span
            style={{
              fontSize: "0.68rem",
              fontWeight: 600,
              color: "var(--muted)",
              letterSpacing: "0.04em",
            }}
          >
            Verified Client
          </span>
        </div>
      </div>

      {/* Cost comparison block */}
      <div
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "12px",
          padding: "20px 24px",
          marginBottom: "1rem",
        }}
      >
        {/* Before / VS / After */}
        <div style={{ display: "flex", alignItems: "stretch", gap: "0" }}>
          {/* Before */}
          <div style={{ flex: 1, paddingRight: "1rem" }}>
            <p
              style={{
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#FF6B6B",
                marginBottom: "8px",
              }}
            >
              Before
            </p>
            <p
              style={{
                fontSize: "2rem",
                fontWeight: 900,
                color: "var(--white)",
                letterSpacing: "-0.03em",
                lineHeight: 1,
                marginBottom: "2px",
              }}
            >
              {t.beforeAmount}
            </p>
            <p style={{ fontSize: "0.72rem", color: "var(--muted)", margin: 0 }}>
              per month
            </p>
            <p
              style={{
                fontSize: "0.75rem",
                color: "var(--soft)",
                fontStyle: "italic",
                marginTop: "6px",
                lineHeight: 1.5,
              }}
            >
              {t.beforeDesc}
            </p>
          </div>

          {/* Divider + VS */}
          <div
            style={{
              position: "relative",
              width: "1px",
              background: "var(--border)",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: "var(--deep)",
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.65rem",
                fontWeight: 700,
                color: "var(--muted)",
                zIndex: 1,
              }}
            >
              VS
            </div>
          </div>

          {/* After */}
          <div style={{ flex: 1, paddingLeft: "1rem" }}>
            <p
              style={{
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--green)",
                marginBottom: "8px",
              }}
            >
              After
            </p>
            <p
              style={{
                fontSize: "2rem",
                fontWeight: 900,
                color: "var(--green)",
                letterSpacing: "-0.03em",
                lineHeight: 1,
                marginBottom: "2px",
              }}
            >
              {t.afterAmount}
            </p>
            <p style={{ fontSize: "0.72rem", color: "var(--muted)", margin: 0 }}>
              per month
            </p>
            <p
              style={{
                fontSize: "0.75rem",
                color: "var(--soft)",
                fontStyle: "italic",
                marginTop: "6px",
                lineHeight: 1.5,
              }}
            >
              {t.afterDesc}
            </p>
          </div>
        </div>

        {/* Savings pill */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "16px",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "rgba(0,229,160,0.08)",
              border: "1px solid rgba(0,229,160,0.25)",
              borderRadius: "100px",
              padding: "5px 16px",
            }}
          >
            <TrendingDown size={14} color="var(--green)" />
            <span
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                color: "var(--green)",
              }}
            >
              {t.savingsPill}
            </span>
          </div>
        </div>
      </div>

      {/* Time metrics */}
      <div
        style={{
          borderTop: "1px solid var(--border)",
          paddingTop: "14px",
          marginTop: "4px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "12px",
          marginBottom: "1.25rem",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "0.62rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#FF6B6B",
              marginBottom: "4px",
            }}
          >
            Time Before
          </p>
          <p
            style={{
              fontSize: "0.95rem",
              fontWeight: 800,
              color: "var(--white)",
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            {t.timeBefore.value}
          </p>
          <p
            style={{
              fontSize: "0.72rem",
              color: "var(--muted)",
              fontStyle: "italic",
              margin: 0,
            }}
          >
            {t.timeBefore.sub}
          </p>
        </div>
        <div>
          <p
            style={{
              fontSize: "0.62rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--green)",
              marginBottom: "4px",
            }}
          >
            Time After
          </p>
          <p
            style={{
              fontSize: "0.95rem",
              fontWeight: 800,
              color: "var(--white)",
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            {t.timeAfter.value}
          </p>
          <p
            style={{
              fontSize: "0.72rem",
              color: "var(--muted)",
              fontStyle: "italic",
              margin: 0,
            }}
          >
            {t.timeAfter.sub}
          </p>
        </div>
      </div>

      {/* Quote */}
      <div
        style={{
          borderTop: "1px solid var(--border)",
          paddingTop: "16px",
          position: "relative",
        }}
      >
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "-10px",
            left: "10px",
            fontSize: "4rem",
            color: "var(--blue)",
            opacity: 0.12,
            lineHeight: 1,
            fontFamily: "Georgia, serif",
            pointerEvents: "none",
          }}
        >
          &ldquo;
        </span>
        <p
          style={{
            fontFamily: "var(--font-baskerville), serif",
            fontStyle: "italic",
            fontSize: "0.88rem",
            color: "var(--soft)",
            lineHeight: 1.85,
            margin: 0,
          }}
        >
          &ldquo;{t.quote}&rdquo;
        </p>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-50px" });

  const top = testimonials.slice(0, 3);
  const bottom = testimonials.slice(3);

  return (
    <section
      id="testimonials"
      className="testimonials-section"
      style={{
        background: "var(--deep)",
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
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <motion.div
          ref={headRef}
          variants={fadeUp}
          initial="hidden"
          animate={headInView ? "visible" : "hidden"}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <p className="section-label">Client Testimonials</p>
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
            Real Numbers From{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #F5C518, #FFD94A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Real Businesses
            </span>
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "rgba(255,255,255,0.55)",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.78,
              fontWeight: 400,
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
          >
            Every figure below is based on actual client results before and
            after implementing BizAI PH automation.
          </p>

          {/* Overall rating */}
          <div style={{ marginTop: "2.5rem", marginBottom: "2rem" }}>
            <p
              style={{
                fontSize: "4.5rem",
                fontWeight: 900,
                color: "var(--white)",
                letterSpacing: "-0.04em",
                lineHeight: 1,
                marginBottom: "0.5rem",
              }}
            >
              4.9
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "3px",
                marginBottom: "0.5rem",
              }}
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} style={{ color: "#FFB800", fontSize: "1.3rem" }}>
                  ★
                </span>
              ))}
            </div>
            <p
              style={{
                fontSize: "0.85rem",
                color: "var(--soft)",
                marginBottom: "0.25rem",
              }}
            >
              Average client satisfaction
            </p>
            <p style={{ fontSize: "0.78rem", color: "var(--muted)" }}>
              Based on 500+ verified client reviews
            </p>
          </div>

          {/* Stat pills */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "16px",
              flexWrap: "wrap",
              marginBottom: "0",
            }}
          >
            {[
              {
                icon: <TrendingDown size={18} color="#22C55E" />,
                text: "₱9,000+ avg monthly savings",
              },
              {
                icon: <Clock size={18} color="#F5C518" />,
                text: "20+ hours recovered weekly",
              },
              {
                icon: <Users size={18} color="#F5C518" />,
                text: "500+ businesses served",
              },
            ].map(({ icon, text }) => (
              <div
                key={text}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(245,197,24,0.2)",
                  borderRadius: "100px",
                  padding: "12px 24px",
                }}
              >
                {icon}
                <span
                  style={{
                    fontSize: "0.88rem",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                  }}
                >
                  {text}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Top row — 3 cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            marginBottom: "20px",
          }}
          className="testi-grid-3"
        >
          {top.map((t, i) => (
            <TestimonialCard key={t.name} t={t} delay={0.07 * i} inView={headInView} />
          ))}
        </div>

        {/* Bottom row — 2 cards centered */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px",
            maxWidth: "720px",
            margin: "0 auto",
          }}
          className="testi-grid-2"
        >
          {bottom.map((t, i) => (
            <TestimonialCard key={t.name} t={t} delay={0.22 + 0.07 * i} inView={headInView} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .testimonials-section { padding: 80px 24px !important; }
          .testi-grid-3 { grid-template-columns: 1fr 1fr !important; }
          .testi-grid-2 { grid-template-columns: 1fr !important; max-width: 100% !important; }
        }
        @media (max-width: 560px) {
          .testi-grid-3 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
