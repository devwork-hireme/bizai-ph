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

type PricingTier = {
  key: string;
  name: string;
  launchPrice: string;
  regularPrice: string;
  setupFee: string;
  features: string[];
  bestFor: string;
  highlight: boolean;
  popularBadge: boolean;
};

const tiers: PricingTier[] = [
  {
    key: "starter",
    name: "Starter",
    launchPrice: "₱750",
    regularPrice: "₱1,500",
    setupFee: "₱2,999",
    bestFor: "New and small businesses",
    features: [
      "1 automation system (your choice)",
      "Full setup and configuration",
      "Messenger bot or booking system",
      "30-day performance guarantee",
      "Email support",
      "Monthly system health check",
    ],
    highlight: false,
    popularBadge: true,
  },
  {
    key: "growth",
    name: "Growth",
    launchPrice: "₱1,500",
    regularPrice: "₱2,999",
    setupFee: "₱4,999",
    bestFor: "Growing businesses with multiple channels",
    features: [
      "Up to 3 automation systems",
      "Messenger bot + booking + follow-up",
      "Business performance dashboard",
      "Priority WhatsApp support",
      "Weekly optimization review",
      "30-day performance guarantee",
    ],
    highlight: true,
    popularBadge: false,
  },
  {
    key: "business",
    name: "Business",
    launchPrice: "₱2,500",
    regularPrice: "₱4,999",
    setupFee: "₱9,999",
    bestFor: "Established businesses at scale",
    features: [
      "Unlimited automation systems",
      "Custom workflow design",
      "Dedicated automation manager",
      "Real-time reporting dashboard",
      "24/7 priority support",
      "30-day performance guarantee",
    ],
    highlight: false,
    popularBadge: false,
  },
];

const comparisonRows = [
  { label: "Monthly Cost", human: "₱15,000–₱20,000", bizai: "From ₱750" },
  { label: "Works 24/7", human: "No", bizai: "Yes" },
  { label: "Response Time", human: "30 min–4 hrs", bizai: "Under 30 seconds" },
  { label: "Handles 100+ chats at once", human: "No", bizai: "Yes" },
  { label: "Zero sick days", human: "No", bizai: "Yes" },
  { label: "Training required", human: "Weeks", bizai: "None" },
];

export default function Pricing() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-50px" });
  const compareRef = useRef(null);
  const compareInView = useInView(compareRef, { once: true, margin: "-50px" });

  return (
    <section
      id="pricing"
      style={{
        background: "var(--deep)",
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
          style={{ textAlign: "center", marginBottom: "2.5rem" }}
        >
          <p className="section-label">Launch Pricing</p>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              color: "var(--white)",
              marginBottom: "1rem",
            }}
          >
            50% Off —{" "}
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
              April to May Only
            </span>
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--soft)",
              maxWidth: "520px",
              margin: "0 auto 2rem",
              lineHeight: 1.78,
              fontWeight: 300,
            }}
          >
            All plans include full setup, configuration, and ongoing management.
            Month-to-month. Cancel anytime.
          </p>

          {/* Urgency row */}
          <div
            className="urgency-row"
            style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}
          >
            {[
              {
                icon: (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="var(--cyan)" stroke="none">
                    <path d="M12 2c0 6-6 8-6 14a6 6 0 0 0 12 0c0-6-6-8-6-14zm0 17a2 2 0 0 1-2-2c0-2 2-3.5 2-3.5s2 1.5 2 3.5a2 2 0 0 1-2 2z" />
                  </svg>
                ),
                text: "Limited Time Offer",
              },
              {
                icon: (
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--cyan)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                ),
                text: "Ends May 31, 2025",
              },
              {
                icon: (
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--cyan)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
                text: "Only 20 Slots Available",
              },
            ].map(({ icon, text }) => (
              <div
                key={text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "rgba(0,200,255,0.06)",
                  border: "1px solid rgba(0,200,255,0.15)",
                  borderRadius: "100px",
                  padding: "6px 14px",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "var(--soft)",
                }}
              >
                {icon}
                {text}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Comparison table */}
        <motion.div
          ref={compareRef}
          variants={fadeUp}
          initial="hidden"
          animate={compareInView ? "visible" : "hidden"}
          style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "16px",
            padding: "2rem",
            marginBottom: "3rem",
            overflow: "hidden",
          }}
        >
          <p
            style={{
              fontSize: "0.8rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--blue-light)",
              marginBottom: "1.25rem",
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
                      color: "var(--muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      borderBottom: "1px solid var(--border)",
                      width: "50%",
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
                      color: "var(--muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      borderBottom: "1px solid var(--border)",
                    }}
                  >
                    Human Assistant
                  </th>
                  <th
                    style={{
                      textAlign: "center",
                      padding: "0.6rem 1rem",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      color: "var(--blue-light)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      borderBottom: "1px solid var(--border)",
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
                        color: "var(--soft)",
                        borderBottom:
                          i < comparisonRows.length - 1
                            ? "1px solid var(--border)"
                            : "none",
                      }}
                    >
                      {row.label}
                    </td>
                    <td
                      style={{
                        padding: "0.75rem 1rem",
                        textAlign: "center",
                        fontSize: "0.88rem",
                        color: "rgba(239,68,68,0.7)",
                        borderBottom:
                          i < comparisonRows.length - 1
                            ? "1px solid var(--border)"
                            : "none",
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
                        color: "var(--green)",
                        borderBottom:
                          i < comparisonRows.length - 1
                            ? "1px solid var(--border)"
                            : "none",
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

        {/* Pricing cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.25rem",
            marginBottom: "2rem",
          }}
          className="pricing-grid"
        >
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.key}
              variants={fadeUp}
              initial="hidden"
              animate={compareInView ? "visible" : "hidden"}
              custom={0.08 * i}
              style={{
                background: tier.highlight
                  ? "linear-gradient(145deg, rgba(61,111,255,0.15), rgba(0,200,255,0.08))"
                  : "var(--card)",
                border: tier.highlight
                  ? "1px solid rgba(107,147,255,0.4)"
                  : "1px solid var(--border)",
                borderRadius: "16px",
                padding: "2rem",
                position: "relative",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Most Popular badge */}
              {tier.popularBadge && (
                <div
                  style={{
                    position: "absolute",
                    top: "-12px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "var(--cyan)",
                    color: "var(--black)",
                    fontSize: "0.68rem",
                    fontWeight: 800,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    padding: "4px 14px",
                    borderRadius: "100px",
                    whiteSpace: "nowrap",
                  }}
                >
                  Most Popular
                </div>
              )}

              {/* Name + 50% OFF */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "1.25rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "0.88rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: tier.highlight ? "var(--blue-light)" : "var(--muted)",
                  }}
                >
                  {tier.name}
                </h3>
                <span
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 800,
                    color: "var(--black)",
                    background: "var(--green)",
                    borderRadius: "100px",
                    padding: "3px 10px",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  50% OFF
                </span>
              </div>

              {/* Price */}
              <div style={{ marginBottom: "1.25rem" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "8px",
                    marginBottom: "0.35rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "2.25rem",
                      fontWeight: 900,
                      letterSpacing: "-0.04em",
                      color: "var(--white)",
                    }}
                  >
                    {tier.launchPrice}
                  </span>
                  <span style={{ fontSize: "0.85rem", color: "var(--muted)" }}>/month</span>
                  <span
                    style={{
                      fontSize: "0.9rem",
                      color: "rgba(239,68,68,0.6)",
                      textDecoration: "line-through",
                    }}
                  >
                    {tier.regularPrice}
                  </span>
                </div>
                <p style={{ fontSize: "0.8rem", color: "var(--muted)", margin: 0 }}>
                  + {tier.setupFee} one-time setup
                </p>
              </div>

              {/* Best for */}
              <p
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: tier.highlight ? "var(--blue-light)" : "var(--muted)",
                  marginBottom: "1rem",
                }}
              >
                Best for: {tier.bestFor}
              </p>

              {/* Features */}
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                  marginBottom: "2rem",
                }}
              >
                {tier.features.map((f) => (
                  <div
                    key={f}
                    style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem" }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={tier.highlight ? "var(--cyan)" : "var(--green)"}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ flexShrink: 0, marginTop: "3px" }}
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--soft)",
                        lineHeight: 1.5,
                      }}
                    >
                      {f}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="https://calendly.com/devwork2025-proton/free-ai-automation-audit"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "13px 24px",
                  borderRadius: "8px",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  background: tier.highlight
                    ? "linear-gradient(135deg, var(--blue), var(--cyan))"
                    : "transparent",
                  color: "var(--white)",
                  border: tier.highlight ? "none" : "1px solid var(--border-mid)",
                }}
                onMouseEnter={(e) => {
                  if (!tier.highlight) {
                    e.currentTarget.style.borderColor = "var(--blue-light)";
                    e.currentTarget.style.color = "var(--blue-light)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!tier.highlight) {
                    e.currentTarget.style.borderColor = "var(--border-mid)";
                    e.currentTarget.style.color = "var(--white)";
                  }
                }}
              >
                Get Started — Book Free Audit
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <p style={{ fontSize: "0.72rem", color: "var(--muted)", textAlign: "center", marginTop: "8px", marginBottom: 0 }}>
                Free 30-min consultation first. No payment required to book.
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={compareInView ? "visible" : "hidden"}
          custom={0.25}
          className="trust-badges"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
            justifyContent: "center",
            marginBottom: "2.5rem",
          }}
        >
          {[
            {
              icon: (
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              ),
              label: "SSL Secured",
            },
            {
              icon: (
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              ),
              label: "PayMongo Verified",
            },
            {
              icon: (
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                  <line x1="1" y1="10" x2="23" y2="10" />
                </svg>
              ),
              label: "GCash · Maya · Cards · Bank",
            },
            {
              icon: (
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="23 4 23 10 17 10" />
                  <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
                </svg>
              ),
              label: "30-Day Money Back",
            },
          ].map(({ icon, label }) => (
            <div
              key={label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "7px",
                fontSize: "0.78rem",
                fontWeight: 600,
                color: "var(--muted)",
              }}
            >
              {icon}
              {label}
            </div>
          ))}
        </motion.div>

        {/* Guarantee */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={compareInView ? "visible" : "hidden"}
          custom={0.35}
          style={{
            background: "rgba(0,229,160,0.05)",
            border: "1px solid rgba(0,229,160,0.2)",
            borderRadius: "14px",
            padding: "1.75rem 2rem",
            display: "flex",
            alignItems: "center",
            gap: "1.25rem",
          }}
          className="guarantee-row"
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: "rgba(0,229,160,0.1)",
              border: "1px solid rgba(0,229,160,0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--green)",
              flexShrink: 0,
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <div>
            <p
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: "var(--white)",
                marginBottom: "0.2rem",
              }}
            >
              30-Day Performance Guarantee
            </p>
            <p
              style={{
                fontSize: "0.875rem",
                color: "var(--soft)",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              If your automation system does not deliver measurable improvement in
              your first 30 days, we will rebuild it at no additional cost. We stand
              behind every system we deploy.
            </p>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pricing-grid { grid-template-columns: 1fr !important; max-width: 480px; margin-left: auto; margin-right: auto; }
        }
        @media (max-width: 600px) {
          .guarantee-row { flex-direction: column; text-align: center; }
          .urgency-row { flex-direction: column; align-items: center; }
          .trust-badges { gap: 1rem; }
        }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}
