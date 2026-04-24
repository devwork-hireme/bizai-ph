"use client";

import { useRef, useState } from "react";
import { motion, Variants, useInView, AnimatePresence } from "framer-motion";
import CountdownTimer from "@/components/ui/CountdownTimer";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

function scrollToStart() {
  document.getElementById("start")?.scrollIntoView({ behavior: "smooth" });
}

function AccordionFeatures({ features, open }: { features: string[]; open: boolean }) {
  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ overflow: "hidden" }}
        >
          <div style={{ paddingTop: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
            {features.map((f) => (
              <div
                key={f}
                style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}
              >
                <span style={{ color: "#3dba6e", flexShrink: 0, marginTop: "1px", fontSize: "0.85rem" }}>→</span>
                <span
                  style={{
                    fontSize: "0.82rem",
                    color: "rgba(255,255,255,0.6)",
                    lineHeight: 1.55,
                    fontFamily: "var(--font-dm-sans), sans-serif",
                  }}
                >
                  {f}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const tiers = [
  {
    id: "found",
    badge: "Live in 24 Hours",
    badgeColor: "#3dba6e",
    name: "GET FOUND",
    price: "₱3,999",
    priceOld: "₱7,999",
    priceLabel: "one-time · launch price",
    headline:
      "Someone in your city just searched for what you sell. They found your competitor. Not you.",
    copy: "We put your business on Google. In 24 hours — you're found, trusted, and getting contacted.",
    promise:
      "You will be found by customers actively searching for what you sell — starting tomorrow.",
    cta: "Start Free Session",
    tier: "Get Found — ₱3,999 one-time",
    features: [
      "Your business on Google — found before competitors",
      "A website that converts visitors into revenue",
      "Lead capture on every channel — Messenger, WhatsApp, form",
      "SEO foundation that compounds every month",
      "Live in 24 hours",
      "🎁 Free professional logo — every client",
    ],
    featured: false,
    comingSoon: false,
    waitlist: false,
  },
  {
    id: "customers",
    badge: "Most Popular",
    badgeColor: "#e8b84b",
    name: "GET CUSTOMERS",
    price: "₱7,999",
    priceOld: "₱15,999",
    priceMonthly: "₱2,999/mo",
    priceMonthlyOld: "₱5,999",
    priceLabel: "+ ₱2,999/month · launch price",
    headline:
      "A customer messaged you last night. You saw it this morning. They already paid your competitor at 10:05PM.",
    copy: "We make sure this never happens again. AI replies in seconds — 2AM, holidays, weekends. Every lead followed up automatically.",
    promise:
      "Every inquiry becomes a paying customer. Revenue happens while you sleep — starting this week.",
    cta: "Start Free Session",
    tier: "Get Customers — ₱7,999 + ₱2,999/mo",
    features: [
      "Everything in Get Found",
      "AI that replies before your competitor does — 24/7",
      "Automated follow-up that closes cold leads",
      "Leads saved and organized automatically",
      "Consistent presence — 3x Facebook posts per week",
      "Google reviews built automatically",
      "Monthly revenue report via WhatsApp",
    ],
    featured: true,
    comingSoon: false,
    waitlist: false,
  },
  {
    id: "sales",
    badge: "Advanced",
    badgeColor: "#888480",
    name: "GET SALES",
    price: "₱14,999",
    priceOld: "₱29,999",
    priceMonthly: "₱7,999/mo",
    priceMonthlyOld: "₱15,999",
    priceLabel: "+ ₱7,999/month · launch price",
    headline: "Your revenue has a ceiling. That ceiling is you.",
    copy: "Every sale needs you. Every follow-up needs you. The moment you stop — revenue stops. We remove you as the bottleneck.",
    promise:
      "The AI sells. You deliver. Revenue grows — with or without you in the office.",
    cta: "Start Free Session",
    tier: "Get Sales — ₱14,999 + ₱7,999/mo",
    features: [
      "Everything in Get Customers",
      "AI across every platform — simultaneously",
      "7-day lead nurture — nobody left behind",
      "Appointment booking — fully automated",
      "Live revenue dashboard — updated daily",
      "Hot lead alerts — instant WhatsApp notification",
      "Local SEO — compounds every month",
      "AI that gets smarter every month",
      "Priority support — 4-hour response",
    ],
    featured: false,
    comingSoon: false,
    waitlist: false,
  },
  {
    id: "automated",
    badge: "Coming Soon",
    badgeColor: "#444",
    name: "GET AUTOMATED",
    price: "Custom",
    priceLabel: "minimum ₱20,000/month",
    headline: "You built the business. Now it runs — and grows — without you.",
    copy: "Every platform connected. Every touchpoint automated. Competitors monitored. A dedicated revenue partner — weekly.",
    promise:
      "Customers acquired. Sales closed. Revenue growing. Whether you're working or not.",
    cta: "Join Waitlist",
    tier: "Get Automated — Coming Soon",
    features: [
      "Everything in Get Sales",
      "One AI brain — every platform unified",
      "Customer win-back — automatic",
      "Predictive revenue protection",
      "Competitor intelligence — monthly",
      "Dedicated revenue partner",
      "Custom AI integrations",
      "Advanced revenue analytics",
      "Full content production",
      "Reputation management",
    ],
    featured: false,
    comingSoon: true,
    waitlist: true,
  },
];

function TierCard({ tier, inView, delay }: { tier: typeof tiers[0]; inView: boolean; delay: number }) {
  const [featuresOpen, setFeaturesOpen] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={delay}
      style={{
        background: tier.featured ? "rgba(232,184,75,0.03)" : tier.comingSoon ? "#0f0f0f" : "#181818",
        border: tier.featured
          ? "2px solid rgba(232,184,75,0.4)"
          : `1px solid rgba(255,255,255,${tier.comingSoon ? "0.04" : "0.07"})`,
        borderRadius: "16px",
        padding: "28px 22px",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        opacity: tier.comingSoon ? 0.7 : 1,
        boxShadow: tier.featured
          ? "0 24px 60px rgba(0,0,0,0.5), 0 0 60px rgba(232,184,75,0.18), 0 0 120px rgba(232,184,75,0.08)"
          : "none",
      }}
    >
      {/* Badge */}
      <div
        style={{
          position: "absolute",
          top: "-13px",
          left: "50%",
          transform: "translateX(-50%)",
          background: tier.featured ? tier.badgeColor : tier.comingSoon ? "#1a1a1a" : "#1a1a1a",
          border: tier.featured ? "none" : `1px solid rgba(255,255,255,0.1)`,
          color: tier.featured ? "#0a0a0a" : tier.badgeColor,
          fontSize: "0.6rem",
          fontWeight: 800,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          padding: "4px 14px",
          borderRadius: "100px",
          whiteSpace: "nowrap",
          fontFamily: "var(--font-dm-sans), sans-serif",
        }}
      >
        {tier.badge}
      </div>

      {/* Gold top bar */}
      {tier.featured && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "linear-gradient(90deg, #e8b84b, #ffd970)",
            borderRadius: "16px 16px 0 0",
          }}
        />
      )}

      {/* Name */}
      <p
        style={{
          fontSize: "0.68rem",
          fontWeight: 700,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: tier.comingSoon ? "#444" : "#e8b84b",
          marginBottom: "8px",
          marginTop: "8px",
          fontFamily: "var(--font-dm-sans), sans-serif",
        }}
      >
        {tier.name}
      </p>

      {/* Price */}
      <div style={{ marginBottom: "16px", paddingBottom: "16px", borderBottom: `1px solid rgba(255,255,255,${tier.featured ? "0.1" : "0.05"})` }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "4px", flexWrap: "wrap" }}>
          <span
            style={{
              fontSize: "1.8rem",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              color: tier.comingSoon ? "#555" : "#ffffff",
              fontFamily: "var(--font-syne), sans-serif",
            }}
          >
            {tier.price}
          </span>
          {tier.priceOld && (
            <span
              style={{
                fontSize: "0.85rem",
                color: "rgba(239,68,68,0.45)",
                textDecoration: "line-through",
                fontFamily: "var(--font-dm-sans), sans-serif",
              }}
            >
              {tier.priceOld}
            </span>
          )}
        </div>
        {tier.priceMonthly && (
          <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginBottom: "6px" }}>
            <span
              style={{
                fontSize: "1.1rem",
                fontWeight: 800,
                color: tier.featured ? "#3dba6e" : "rgba(255,255,255,0.7)",
                fontFamily: "var(--font-syne), sans-serif",
              }}
            >
              {tier.priceMonthly}
            </span>
            {tier.priceMonthlyOld && (
              <span
                style={{
                  fontSize: "0.8rem",
                  color: "rgba(239,68,68,0.4)",
                  textDecoration: "line-through",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                }}
              >
                {tier.priceMonthlyOld}
              </span>
            )}
          </div>
        )}
        <span
          style={{
            display: "inline-block",
            fontSize: "0.62rem",
            fontWeight: 700,
            color: tier.featured ? "#0a0a0a" : "#e8b84b",
            background: tier.featured ? "#e8b84b" : "rgba(232,184,75,0.1)",
            border: tier.featured ? "none" : "1px solid rgba(232,184,75,0.25)",
            borderRadius: "100px",
            padding: "2px 10px",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            fontFamily: "var(--font-dm-sans), sans-serif",
          }}
        >
          Launch Price
        </span>
      </div>

      {/* Headline */}
      <p
        style={{
          fontSize: "0.88rem",
          fontStyle: "italic",
          color: tier.comingSoon ? "#555" : tier.featured ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.6)",
          lineHeight: 1.6,
          marginBottom: "10px",
          fontFamily: "var(--font-dm-sans), sans-serif",
        }}
      >
        {tier.headline}
      </p>

      <p
        style={{
          fontSize: "0.85rem",
          color: tier.comingSoon ? "#444" : "rgba(255,255,255,0.5)",
          lineHeight: 1.65,
          marginBottom: "16px",
          fontFamily: "var(--font-dm-sans), sans-serif",
        }}
      >
        {tier.copy}
      </p>

      {/* Accordion toggle */}
      <button
        onClick={() => setFeaturesOpen(!featuresOpen)}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "8px 0",
          color: tier.comingSoon ? "#444" : "#e8b84b",
          fontSize: "0.8rem",
          fontWeight: 600,
          fontFamily: "var(--font-dm-sans), sans-serif",
          textAlign: "left",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          marginBottom: "8px",
        }}
      >
        See what&apos;s included {featuresOpen ? "▲" : "▾"}
      </button>

      <AccordionFeatures features={tier.features} open={featuresOpen} />

      {/* Promise */}
      <div
        style={{
          borderLeft: `3px solid ${tier.comingSoon ? "#333" : "#e8b84b"}`,
          paddingLeft: "14px",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <p
          style={{
            fontSize: "0.82rem",
            fontStyle: "italic",
            color: tier.comingSoon ? "#444" : "rgba(232,184,75,0.8)",
            lineHeight: 1.6,
            fontFamily: "var(--font-dm-sans), sans-serif",
          }}
        >
          {tier.promise}
        </p>
      </div>

      {/* CTA */}
      <div style={{ marginTop: "auto" }}>
        <button
          onClick={scrollToStart}
          data-tier={tier.tier}
          style={{
            width: "100%",
            padding: "13px 20px",
            borderRadius: "10px",
            fontWeight: 700,
            fontSize: "0.9rem",
            cursor: tier.comingSoon ? "default" : "pointer",
            background: tier.featured
              ? "#e8b84b"
              : tier.comingSoon
              ? "rgba(255,255,255,0.04)"
              : "transparent",
            color: tier.featured
              ? "#0a0a0a"
              : tier.comingSoon
              ? "#444"
              : tier.waitlist
              ? "rgba(255,255,255,0.3)"
              : "rgba(255,255,255,0.7)",
            border: tier.featured
              ? "none"
              : tier.comingSoon
              ? "1px solid rgba(255,255,255,0.07)"
              : "1px solid rgba(255,255,255,0.15)",
            fontFamily: "var(--font-dm-sans), sans-serif",
            transition: "all 0.2s ease",
            boxShadow: tier.featured
              ? "0 4px 16px rgba(0,0,0,0.3), 0 8px 30px rgba(232,184,75,0.3)"
              : "none",
          } as React.CSSProperties}
        >
          {tier.cta}
        </button>
        {!tier.comingSoon && (
          <p
            style={{
              fontSize: "0.68rem",
              color: "rgba(255,255,255,0.22)",
              textAlign: "center",
              marginTop: "8px",
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
          >
            Free session first. No commitment.
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default function Pricing() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-50px" });
  const guarRef = useRef(null);
  const guarInView = useInView(guarRef, { once: true, margin: "-50px" });

  return (
    <section
      id="pricing"
      className="pricing-section"
      style={{
        background: "#0a0a0a",
        padding: "130px 64px",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      {/* Grid bg */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(232,184,75,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(232,184,75,0.02) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
          pointerEvents: "none",
        }}
      />

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
          style={{ textAlign: "center", marginBottom: "36px" }}
        >
          <p className="section-label">Choose Your Revenue Machine</p>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "#ffffff",
              marginBottom: "16px",
              fontFamily: "var(--font-syne), sans-serif",
            }}
          >
            Start Where You Are.{" "}
            <span style={{ color: "#e8b84b" }}>Scale As You Grow.</span>
          </h2>
        </motion.div>

        {/* Countdown timer */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={headInView ? "visible" : "hidden"}
          custom={0.1}
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "36px",
            padding: "20px 24px",
            background: "linear-gradient(135deg, rgba(232,184,75,0.06) 0%, rgba(255,217,112,0.03) 100%)",
            border: "1px solid rgba(232,184,75,0.2)",
            borderRadius: "12px",
          }}
        >
          <CountdownTimer size="sm" />
        </motion.div>

        {/* Pricing grid */}
        <div
          className="pricing-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "16px",
            marginBottom: "52px",
            alignItems: "start",
          }}
        >
          {tiers.map((t, i) => (
            <TierCard key={t.id} tier={t} inView={headInView} delay={0.1 + i * 0.08} />
          ))}
        </div>

        {/* Guarantee */}
        <motion.div
          ref={guarRef}
          variants={fadeUp}
          initial="hidden"
          animate={guarInView ? "visible" : "hidden"}
          style={{
            background: "linear-gradient(135deg, #120e00, #0f0f0f)",
            border: "1px solid rgba(232,184,75,0.25)",
            borderRadius: "16px",
            padding: "52px 56px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Glow */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "-50px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "500px",
              height: "200px",
              background: "radial-gradient(ellipse, rgba(232,184,75,0.08) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative" }}>
            <p
              style={{
                fontSize: "2.5rem",
                marginBottom: "16px",
                lineHeight: 1,
              }}
            >
              🛡️
            </p>
            <h3
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "#ffffff",
                marginBottom: "16px",
                fontFamily: "var(--font-syne), sans-serif",
              }}
            >
              More Revenue in 30 Days.{" "}
              <span style={{ color: "#e8b84b" }}>Or We Rebuild for Free.</span>
            </h3>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.75,
                maxWidth: "640px",
                margin: "0 auto 32px",
                fontFamily: "var(--font-dm-sans), sans-serif",
              }}
            >
              If your revenue machine doesn&apos;t deliver measurable results in 30
              days — more customers finding you, more inquiries coming in, more
              leads converting — we rebuild the entire system at zero cost. No
              fine print. No conditions. No excuses.
            </p>

            {/* Trust badges */}
            <div
              style={{
                display: "flex",
                gap: "28px",
                justifyContent: "center",
                flexWrap: "wrap",
                marginBottom: "32px",
              }}
            >
              {["SSL Secured", "Results Guaranteed", "30-Day Guarantee", "Month-to-Month"].map((b) => (
                <div
                  key={b}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.35)",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                  }}
                >
                  <span style={{ color: "#e8b84b" }}>✓</span>
                  {b}
                </div>
              ))}
            </div>

            <button
              onClick={scrollToStart}
              className="btn-primary"
              style={{ fontSize: "1rem", padding: "14px 36px" }}
            >
              Start Free Session →
            </button>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .pricing-section { padding: 80px 24px !important; }
          .pricing-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .pricing-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
