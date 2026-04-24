"use client";

import { useRef } from "react";
import { motion, Variants, useInView } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: "easeOut" },
  }),
};

const testimonials = [
  {
    initials: "MS",
    name: "Maria Santos",
    biz: "Maria's Kitchen Catering",
    location: "QC",
    stars: 5,
    platform: "Google",
    beforeAmount: "₱12,000/mo",
    beforeDesc: "manual Messenger replies",
    afterAmount: "₱2,999/mo",
    afterDesc: "24/7 automated",
    saving: "↑ Saving ₱9,001 every month",
    quote:
      "BizAI PH Get Customers does the same 24 hours a day for ₱2,999. Same result. For a fraction of the cost.",
  },
  {
    initials: "CR",
    name: "Carlo Reyes",
    biz: "Pinnacle Real Estate",
    location: "BGC",
    stars: 5,
    platform: "Facebook",
    beforeAmount: "₱25,000/mo",
    beforeDesc: "full-time coordinator",
    afterAmount: "₱2,999/mo",
    afterDesc: "fully automated",
    saving: "↑ Saving ₱22,001 every month",
    quote:
      "The automation responds instantly instead of hours later. Three additional deals closed in the first 60 days.",
  },
  {
    initials: "AC",
    name: "Angela Cruz",
    biz: "Glow Aesthetics Salon",
    location: "Makati",
    stars: 5,
    platform: "Google",
    beforeAmount: "₱18,000/mo",
    beforeDesc: "receptionist + no-shows",
    afterAmount: "₱2,999/mo",
    afterDesc: "fully automated",
    saving: "↑ Saving ₱15,001 every month",
    quote:
      "BizAI PH Get Customers costs ₱2,999 and handles everything. That ₱15,001 monthly saving goes directly to our bottom line.",
  },
];

export default function Proof() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-50px" });

  return (
    <section
      id="testimonials"
      className="proof-section"
      style={{
        background: "#0a0a0a",
        padding: "130px 64px",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      {/* Grid texture */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(232,184,75,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(232,184,75,0.015) 1px, transparent 1px)",
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
          style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 56px" }}
        >
          <p className="section-label">Real Results</p>
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
            They Were Losing Revenue Every Day.
            <br />
            Then They Built{" "}
            <span style={{ color: "#e8b84b" }}>the Machine.</span>
          </h2>
          <p
            style={{
              fontSize: "0.78rem",
              color: "rgba(255,255,255,0.3)",
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
          >
            Testimonials reflect individual client experiences. Results may vary.
          </p>
        </motion.div>

        {/* Cards */}
        <div
          className="proof-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          {testimonials.map((t, i) => {
            const directional = [
              { opacity: 0, x: -40 },
              { opacity: 0, y: 40 },
              { opacity: 0, x: 40 },
            ];
            return (
            <motion.div
              key={t.name}
              initial={directional[i]}
              animate={headInView ? { opacity: 1, x: 0, y: 0 } : directional[i]}
              transition={{ duration: 0.6, delay: 0.1 * i, ease: "easeOut" }}
              style={{
                background: "rgba(24,24,24,0.85)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "16px",
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
                gap: "0",
                transition: "border-color 0.25s ease",
              }}
              whileHover={{ borderColor: "rgba(232,184,75,0.25)" } as never}
            >
              {/* Stars + platform */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "16px",
                }}
              >
                <div style={{ display: "flex", gap: "2px" }}>
                  {Array.from({ length: t.stars }).map((_, idx) => (
                    <span key={idx} style={{ color: "#e8b84b", fontSize: "1rem" }}>
                      ★
                    </span>
                  ))}
                </div>
                <span
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    padding: "2px 8px",
                    borderRadius: "4px",
                    background:
                      t.platform === "Google"
                        ? "rgba(234,67,53,0.08)"
                        : "rgba(24,119,242,0.08)",
                    border:
                      t.platform === "Google"
                        ? "1px solid rgba(234,67,53,0.2)"
                        : "1px solid rgba(24,119,242,0.2)",
                    color:
                      t.platform === "Google"
                        ? "rgba(234,67,53,0.85)"
                        : "rgba(100,160,255,0.85)",
                    letterSpacing: "0.04em",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                  }}
                >
                  {t.platform} Review
                </span>
              </div>

              {/* Before/After */}
              <div
                style={{
                  background: "#111111",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "10px",
                  padding: "16px",
                  marginBottom: "16px",
                }}
              >
                <div className="testi-ba-row" style={{ display: "flex", alignItems: "stretch", gap: "0" }}>
                  {/* Before */}
                  <div style={{ flex: 1, paddingRight: "14px" }}>
                    <p
                      style={{
                        fontSize: "0.62rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "rgba(239,68,68,0.7)",
                        marginBottom: "6px",
                        fontFamily: "var(--font-dm-sans), sans-serif",
                      }}
                    >
                      Before
                    </p>
                    <p
                      className="testi-amount"
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 800,
                        color: "#ffffff",
                        letterSpacing: "-0.02em",
                        textDecoration: "line-through",
                        textDecorationColor: "rgba(239,68,68,0.4)",
                        marginBottom: "2px",
                        fontFamily: "var(--font-syne), sans-serif",
                      }}
                    >
                      {t.beforeAmount}
                    </p>
                    <p
                      style={{
                        fontSize: "0.72rem",
                        color: "rgba(255,255,255,0.35)",
                        fontStyle: "italic",
                        fontFamily: "var(--font-dm-sans), sans-serif",
                      }}
                    >
                      {t.beforeDesc}
                    </p>
                  </div>

                  {/* Divider */}
                  <div
                    className="testi-vs-divider"
                    style={{
                      width: "1px",
                      background: "rgba(255,255,255,0.06)",
                      flexShrink: 0,
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        background: "#111111",
                        border: "1px solid rgba(255,255,255,0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.6rem",
                        fontWeight: 700,
                        color: "rgba(255,255,255,0.3)",
                        zIndex: 1,
                      }}
                    >
                      VS
                    </div>
                  </div>

                  {/* After */}
                  <div style={{ flex: 1, paddingLeft: "14px" }}>
                    <p
                      style={{
                        fontSize: "0.62rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#3dba6e",
                        marginBottom: "6px",
                        fontFamily: "var(--font-dm-sans), sans-serif",
                      }}
                    >
                      After
                    </p>
                    <p
                      className="testi-amount"
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 800,
                        color: "#3dba6e",
                        letterSpacing: "-0.02em",
                        marginBottom: "2px",
                        fontFamily: "var(--font-syne), sans-serif",
                      }}
                    >
                      {t.afterAmount}
                    </p>
                    <p
                      style={{
                        fontSize: "0.72rem",
                        color: "rgba(255,255,255,0.35)",
                        fontStyle: "italic",
                        fontFamily: "var(--font-dm-sans), sans-serif",
                      }}
                    >
                      {t.afterDesc}
                    </p>
                  </div>
                </div>

                {/* Savings pill */}
                <div
                  style={{
                    marginTop: "14px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <span
                    className="testi-savings-pill"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      background: "rgba(61,186,110,0.08)",
                      border: "1px solid rgba(61,186,110,0.2)",
                      borderRadius: "100px",
                      padding: "4px 14px",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      color: "#3dba6e",
                      fontFamily: "var(--font-dm-sans), sans-serif",
                    }}
                  >
                    {t.saving}
                  </span>
                </div>
              </div>

              {/* Quote */}
              <p
                className="testi-quote-text"
                style={{
                  fontSize: "0.88rem",
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.75,
                  fontStyle: "italic",
                  marginBottom: "20px",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "auto" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #e8b84b, #3dba6e)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.72rem",
                    fontWeight: 800,
                    color: "#0a0a0a",
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "0.88rem",
                      fontWeight: 700,
                      color: "#ffffff",
                      margin: 0,
                      fontFamily: "var(--font-syne), sans-serif",
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    style={{
                      fontSize: "0.78rem",
                      color: "rgba(255,255,255,0.4)",
                      margin: 0,
                      fontFamily: "var(--font-dm-sans), sans-serif",
                    }}
                  >
                    {t.biz} · {t.location}
                  </p>
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .proof-section { padding: 80px 24px !important; }
          .proof-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .testi-ba-row {
            flex-direction: column !important;
            gap: 12px !important;
          }
          .testi-ba-row > div {
            flex: unset !important;
            width: 100% !important;
            padding: 12px !important;
            background: rgba(255,255,255,0.03);
            border-radius: 8px;
          }
          .testi-ba-row > div:first-child { padding-right: 12px !important; }
          .testi-ba-row > div:last-child { padding-left: 12px !important; }
          .testi-amount { font-size: clamp(18px, 5vw, 24px) !important; }
          .testi-savings-pill {
            width: 100% !important;
            justify-content: center !important;
            font-size: 13px !important;
          }
          .testi-quote-text { font-size: 14px !important; line-height: 1.7 !important; }
        }
      `}</style>
    </section>
  );
}
