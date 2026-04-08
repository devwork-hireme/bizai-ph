"use client";

import { useRef } from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { Check, Clock, Users, Zap, Lock } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

const comparisonRows = [
  { label: "Monthly Cost", human: "₱15,000–₱25,000", bizai: "From ₱2,999/mo" },
  { label: "Works 24/7", human: "No", bizai: "Yes" },
  { label: "Response Time", human: "30 min–4 hrs", bizai: "Under 30 seconds" },
  { label: "Handles 100+ chats at once", human: "No", bizai: "Yes" },
  { label: "Zero sick days or absences", human: "No", bizai: "Yes" },
  { label: "Monthly performance reports", human: "Manual", bizai: "Automated" },
];

type Tier = {
  key: string;
  name: string;
  badge?: string;
  tagline: string;
  forWho: string;
  originalSetup: string;
  launchSetup: string;
  originalMonthly?: string;
  launchMonthly?: string;
  isOneTime?: boolean;
  features: string[];
  dotColor: string;
  isPopular?: boolean;
  isComingSoon?: boolean;
  ctaLabel: string;
  ctaStyle: "gold" | "outline" | "waitlist";
};

const tiers: Tier[] = [
  {
    key: "basic",
    name: "Basic",
    tagline: "Get your business online",
    forWho: "Businesses with no website",
    originalSetup: "₱7,999",
    launchSetup: "₱3,999",
    isOneTime: true,
    features: [
      "5-Page Professional Website (Home, About, Services, Contact, Gallery)",
      "Mobile-Friendly Design",
      "Contact Form",
      "Free 1 Year Domain",
      "Free 1 Year Hosting",
      "Professional Email (hello@yourbusiness.com)",
    ],
    dotColor: "#6B7A99",
    ctaLabel: "Get Started",
    ctaStyle: "outline",
  },
  {
    key: "starter",
    name: "Starter",
    badge: "MOST POPULAR",
    tagline: "Get your business found",
    forWho: "Businesses online but invisible",
    originalSetup: "₱15,999",
    launchSetup: "₱7,999",
    originalMonthly: "₱5,999",
    launchMonthly: "₱2,999",
    features: [
      "Everything in Basic",
      "Custom Website (3 professional layouts)",
      "SEO Foundation Setup",
      "24/7 Messenger Bot",
      "Lead Capture System",
      "Google My Business Setup",
      "Google Review Automation",
      "Automated Facebook Posts — 3x/week",
      "Monthly Performance Report via WhatsApp",
      "Bug Fixes and Maintenance",
      "WhatsApp Support",
    ],
    dotColor: "#22C55E",
    isPopular: true,
    ctaLabel: "Get Started",
    ctaStyle: "gold",
  },
  {
    key: "growth",
    name: "Growth",
    badge: "COMING SOON",
    tagline: "Get your business customers",
    forWho: "Businesses visible but not converting",
    originalSetup: "₱29,999",
    launchSetup: "₱14,999",
    originalMonthly: "₱15,999",
    launchMonthly: "₱7,999",
    features: [
      "Everything in Starter",
      "Advanced AI Messenger Bot (Facebook + Instagram)",
      "3-Day Lead Follow-Up Sequence",
      "Appointment Booking System",
      "Local SEO Growth (monthly content)",
      "Automated Facebook Posts — 5x/week",
      "Live Business Dashboard",
      "WhatsApp Lead Alerts",
      "Priority Support (4-hour response)",
    ],
    dotColor: "#F5C518",
    isComingSoon: true,
    ctaLabel: "Join Waitlist",
    ctaStyle: "waitlist",
  },
];

export default function Pricing() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-50px" });
  const compareRef = useRef(null);
  const compareInView = useInView(compareRef, { once: true, margin: "-50px" });

  function scrollToContact() {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      id="pricing"
      className="pricing-section"
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
      {/* Gold glow top */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-200px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "400px",
          background: "rgba(245,197,24,0.05)",
          filter: "blur(120px)",
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
          style={{ textAlign: "center", marginBottom: "40px" }}
        >
          <p className="section-label">Packages & Pricing</p>
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
            Pick Your{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #F5C518, #FFD94A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Growth Stage
            </span>
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "rgba(255,255,255,0.55)",
              maxWidth: "520px",
              margin: "0 auto 2rem",
              lineHeight: 1.78,
              fontWeight: 400,
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
          >
            Everything is done for you. Pick the package that fits your stage and start growing.
          </p>
        </motion.div>

        {/* PROMO BANNER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={headInView ? "visible" : "hidden"}
          custom={0.1}
          style={{
            background: "linear-gradient(135deg, rgba(245,197,24,0.12) 0%, rgba(255,217,74,0.08) 100%)",
            border: "1px solid rgba(245,197,24,0.35)",
            borderRadius: "14px",
            padding: "1.5rem 2rem",
            marginBottom: "2.5rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "1.05rem",
              fontWeight: 700,
              color: "#F5C518",
              marginBottom: "0.35rem",
              fontFamily: "var(--font-syne), sans-serif",
            }}
          >
            🔥 Launch Promo — 50% Off All Packages
          </p>
          <p
            style={{
              fontSize: "0.875rem",
              color: "rgba(255,255,255,0.65)",
              margin: 0,
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
          >
            Limited slots available. Promo runs{" "}
            <strong style={{ color: "rgba(255,255,255,0.85)" }}>April to May 2026 only</strong>.
            Original prices shown. Launch price applied at checkout.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div
          className="pricing-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
            marginBottom: "3rem",
            alignItems: "start",
          }}
        >
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.key}
              variants={fadeUp}
              initial="hidden"
              animate={headInView ? "visible" : "hidden"}
              custom={0.15 + 0.08 * i}
              style={{
                background: tier.isPopular
                  ? "linear-gradient(180deg, rgba(34,197,94,0.07) 0%, var(--navy-mid) 40%)"
                  : "var(--navy-mid)",
                border: tier.isPopular
                  ? "1px solid rgba(34,197,94,0.35)"
                  : "1px solid var(--navy-border)",
                borderRadius: "16px",
                padding: "36px 28px",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                boxShadow: tier.isPopular
                  ? "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(34,197,94,0.15)"
                  : "none",
              }}
            >
              {/* Badge */}
              {tier.badge && (
                <div
                  style={{
                    position: "absolute",
                    top: "-13px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: tier.isPopular
                      ? "linear-gradient(135deg, #22C55E, #16A34A)"
                      : "rgba(245,197,24,0.15)",
                    border: tier.isComingSoon ? "1px solid rgba(245,197,24,0.4)" : "none",
                    color: tier.isPopular ? "#FFFFFF" : "#F5C518",
                    fontSize: "0.65rem",
                    fontWeight: 800,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    padding: "4px 16px",
                    borderRadius: "100px",
                    whiteSpace: "nowrap",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  {tier.isComingSoon && <Lock size={10} />}
                  {tier.badge}
                </div>
              )}

              {/* Dot + Name */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "0.5rem",
                  marginTop: tier.badge ? "8px" : "0",
                }}
              >
                <span
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: tier.dotColor,
                    boxShadow: `0 0 8px ${tier.dotColor}60`,
                    flexShrink: 0,
                  }}
                />
                <h3
                  style={{
                    fontSize: "0.88rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: tier.isPopular ? "#22C55E" : "rgba(255,255,255,0.6)",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    margin: 0,
                  }}
                >
                  {tier.name}
                </h3>
              </div>

              {/* Tagline */}
              <p
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  marginBottom: "0.25rem",
                  fontFamily: "var(--font-syne), sans-serif",
                }}
              >
                {tier.tagline}
              </p>
              <p
                style={{
                  fontSize: "0.82rem",
                  color: "rgba(255,255,255,0.45)",
                  marginBottom: "1.5rem",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                }}
              >
                For: {tier.forWho}
              </p>

              {/* Price */}
              <div
                style={{
                  marginBottom: "1.5rem",
                  paddingBottom: "1.5rem",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                {/* Setup price */}
                <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "4px" }}>
                  <span
                    style={{
                      fontSize: "2.4rem",
                      fontWeight: 900,
                      letterSpacing: "-0.04em",
                      color: "#FFFFFF",
                      fontFamily: "var(--font-syne), sans-serif",
                    }}
                  >
                    {tier.launchSetup}
                  </span>
                  <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    {tier.isOneTime ? "one-time" : "setup"}
                  </span>
                  <span
                    style={{
                      fontSize: "0.9rem",
                      color: "rgba(239,68,68,0.6)",
                      textDecoration: "line-through",
                      fontFamily: "var(--font-dm-sans), sans-serif",
                    }}
                  >
                    {tier.originalSetup}
                  </span>
                </div>

                {/* Monthly price */}
                {tier.launchMonthly && (
                  <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                    <span
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: 800,
                        color: tier.isPopular ? "#22C55E" : "rgba(255,255,255,0.8)",
                        fontFamily: "var(--font-syne), sans-serif",
                      }}
                    >
                      {tier.launchMonthly}
                    </span>
                    <span style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-dm-sans), sans-serif" }}>/month</span>
                    <span
                      style={{
                        fontSize: "0.85rem",
                        color: "rgba(239,68,68,0.5)",
                        textDecoration: "line-through",
                        fontFamily: "var(--font-dm-sans), sans-serif",
                      }}
                    >
                      {tier.originalMonthly}
                    </span>
                  </div>
                )}

                {/* Launch price badge */}
                <div style={{ marginTop: "10px" }}>
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      color: tier.isComingSoon ? "#F5C518" : "#0A1628",
                      background: tier.isComingSoon ? "rgba(245,197,24,0.15)" : "#F5C518",
                      border: tier.isComingSoon ? "1px solid rgba(245,197,24,0.4)" : "none",
                      borderRadius: "100px",
                      padding: "3px 12px",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      fontFamily: "var(--font-dm-sans), sans-serif",
                    }}
                  >
                    {tier.isComingSoon ? "WAITLIST ONLY" : "LAUNCH PRICE"}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.65rem",
                  marginBottom: "2rem",
                }}
              >
                {tier.features.map((f) => (
                  <div
                    key={f}
                    style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem" }}
                  >
                    <Check
                      size={14}
                      style={{
                        flexShrink: 0,
                        marginTop: "3px",
                        color: tier.isPopular ? "#22C55E" : tier.isComingSoon ? "#F5C518" : "#6B7A99",
                      }}
                    />
                    <span
                      style={{
                        fontSize: "0.875rem",
                        color: "rgba(255,255,255,0.62)",
                        lineHeight: 1.5,
                        fontFamily: "var(--font-dm-sans), sans-serif",
                      }}
                    >
                      {f}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              {tier.ctaStyle === "gold" && (
                <button
                  onClick={scrollToContact}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    padding: "14px 24px",
                    borderRadius: "10px",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    cursor: "pointer",
                    border: "none",
                    background: "#F5C518",
                    color: "#0A1628",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    transition: "all 0.2s ease",
                    boxShadow: "0 4px 20px rgba(245,197,24,0.25)",
                    width: "100%",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#FFD94A";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#F5C518";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  Get Started
                </button>
              )}
              {tier.ctaStyle === "outline" && (
                <button
                  onClick={scrollToContact}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    padding: "14px 24px",
                    borderRadius: "10px",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    cursor: "pointer",
                    background: "transparent",
                    color: "#FFFFFF",
                    border: "1px solid rgba(255,255,255,0.2)",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    transition: "all 0.2s ease",
                    width: "100%",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(245,197,24,0.4)";
                    e.currentTarget.style.color = "#F5C518";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                    e.currentTarget.style.color = "#FFFFFF";
                  }}
                >
                  Get Started
                </button>
              )}
              {tier.ctaStyle === "waitlist" && (
                <>
                  <button
                    onClick={scrollToContact}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      padding: "14px 24px",
                      borderRadius: "10px",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      cursor: "pointer",
                      background: "transparent",
                      color: "#F5C518",
                      border: "1px solid rgba(245,197,24,0.4)",
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      transition: "all 0.2s ease",
                      width: "100%",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(245,197,24,0.08)";
                      e.currentTarget.style.borderColor = "rgba(245,197,24,0.6)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.borderColor = "rgba(245,197,24,0.4)";
                    }}
                  >
                    Join Waitlist
                  </button>
                  <p
                    style={{
                      fontSize: "0.72rem",
                      color: "rgba(255,255,255,0.35)",
                      textAlign: "center",
                      marginTop: "8px",
                      marginBottom: 0,
                      fontFamily: "var(--font-dm-sans), sans-serif",
                    }}
                  >
                    Lock in the 50% launch price before we go live.
                  </p>
                </>
              )}
              {tier.ctaStyle !== "waitlist" && (
                <p
                  style={{
                    fontSize: "0.72rem",
                    color: "rgba(255,255,255,0.35)",
                    textAlign: "center",
                    marginTop: "8px",
                    marginBottom: 0,
                    fontFamily: "var(--font-dm-sans), sans-serif",
                  }}
                >
                  Free 30-min session first. No commitment required.
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Comparison table */}
        <motion.div
          ref={compareRef}
          variants={fadeUp}
          initial="hidden"
          animate={compareInView ? "visible" : "hidden"}
          style={{
            background: "var(--navy-mid)",
            border: "1px solid var(--navy-border)",
            borderRadius: "16px",
            padding: "2rem",
            marginBottom: "2rem",
            overflow: "hidden",
          }}
        >
          <p
            style={{
              fontSize: "0.8rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#F5C518",
              marginBottom: "1.25rem",
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
          >
            BizAI PH vs. Hiring a Full-Time Assistant
          </p>
          <div style={{ overflowX: "auto" }}>
            <table
              style={{ width: "100%", borderCollapse: "collapse", minWidth: "480px" }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "0.6rem 0",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      color: "rgba(255,255,255,0.35)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      borderBottom: "1px solid rgba(255,255,255,0.07)",
                      width: "50%",
                      fontFamily: "var(--font-dm-sans), sans-serif",
                    }}
                  >
                    Feature
                  </th>
                  <th
                    style={{
                      textAlign: "center",
                      padding: "0.6rem 1rem",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      color: "rgba(255,255,255,0.35)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      borderBottom: "1px solid rgba(255,255,255,0.07)",
                      fontFamily: "var(--font-dm-sans), sans-serif",
                    }}
                  >
                    Human Staff
                  </th>
                  <th
                    style={{
                      textAlign: "center",
                      padding: "0.6rem 1rem",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      color: "#F5C518",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      borderBottom: "1px solid rgba(255,255,255,0.07)",
                      fontFamily: "var(--font-dm-sans), sans-serif",
                    }}
                  >
                    BizAI PH
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.label}>
                    <td
                      style={{
                        padding: "0.75rem 0",
                        fontSize: "0.88rem",
                        color: "rgba(255,255,255,0.62)",
                        borderBottom: i < comparisonRows.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                        fontFamily: "var(--font-dm-sans), sans-serif",
                      }}
                    >
                      {row.label}
                    </td>
                    <td
                      style={{
                        padding: "0.75rem 1rem",
                        textAlign: "center",
                        fontSize: "0.88rem",
                        color: "rgba(239,68,68,0.65)",
                        borderBottom: i < comparisonRows.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                        fontFamily: "var(--font-dm-sans), sans-serif",
                      }}
                    >
                      {row.human}
                    </td>
                    <td
                      style={{
                        padding: "0.75rem 1rem",
                        textAlign: "center",
                        fontSize: "0.88rem",
                        fontWeight: 600,
                        color: "#22C55E",
                        borderBottom: i < comparisonRows.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                        fontFamily: "var(--font-dm-sans), sans-serif",
                      }}
                    >
                      {row.bizai}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={compareInView ? "visible" : "hidden"}
          custom={0.15}
          className="trust-badges"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
            justifyContent: "center",
          }}
        >
          {[
            { icon: <Zap size={14} />, label: "SSL Secured" },
            { icon: <Check size={14} />, label: "PayMongo Verified" },
            { icon: <Users size={14} />, label: "GCash · Maya · Cards" },
            { icon: <Clock size={14} />, label: "30-Day Money Back" },
          ].map(({ icon, label }) => (
            <div
              key={label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "7px",
                fontSize: "0.78rem",
                fontWeight: 600,
                color: "rgba(255,255,255,0.4)",
                fontFamily: "var(--font-dm-sans), sans-serif",
              }}
            >
              {icon}
              {label}
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pricing-section { padding: 80px 24px !important; }
          .pricing-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .trust-badges { gap: 1rem; }
        }
      `}</style>
    </section>
  );
}
