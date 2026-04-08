"use client";

import { motion, Variants } from "framer-motion";
import {
  Globe,
  Bot,
  MapPin,
  Share2,
  Star,
  BarChart3,
  CheckCircle,
} from "lucide-react";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

const whatYouGet = [
  { icon: Globe, label: "Website Live", detail: "3–5 days" },
  { icon: Bot, label: "Messenger Bot", detail: "Active 24/7" },
  { icon: MapPin, label: "Google My Business", detail: "Found on Maps" },
  { icon: Share2, label: "Facebook Auto-Posts", detail: "3x/week" },
  { icon: Star, label: "Google Reviews", detail: "Auto-requested" },
  { icon: BarChart3, label: "Monthly Report", detail: "Via WhatsApp" },
];

const heroStats = [
  { value: "24/7", label: "AI Active" },
  { value: "₱3,999", label: "Setup Price" },
  { value: "3–5", label: "Days to Live" },
  { value: "100%", label: "Done For You" },
];

const trustBadges = [
  "No Technical Knowledge Needed",
  "Month-to-Month, No Lock-In",
  "Free 30-Min Strategy Session",
  "Filipino-Owned & Operated",
];

export default function Hero() {
  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "var(--navy)",
        paddingTop: "calc(var(--announcement-bar-height) + 120px)",
        paddingBottom: "80px",
        paddingLeft: "64px",
        paddingRight: "64px",
      }}
      className="hero-section"
    >
      {/* Grid background */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(26,58,107,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(26,58,107,0.5) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Gold glow top-left */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-80px",
          left: "-100px",
          width: "700px",
          height: "500px",
          borderRadius: "50%",
          background: "rgba(245,197,24,0.07)",
          filter: "blur(120px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Navy glow bottom-right */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          right: "-100px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "rgba(15,30,53,0.9)",
          filter: "blur(100px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Two-column layout */}
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          alignItems: "center",
        }}
        className="hero-inner"
      >
        {/* LEFT — Text content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow badge */}
          <motion.div variants={item} style={{ marginBottom: "28px" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "8px 20px",
                background: "rgba(245,197,24,0.07)",
                border: "1px solid rgba(245,197,24,0.22)",
                borderRadius: "100px",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#22C55E",
                  boxShadow: "0 0 0 0 rgba(34,197,94,0.4)",
                  animation: "pulse-ring 2s infinite",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  color: "#F5C518",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                }}
              >
                Done-For-You Digital Growth — Filipino SMBs
              </span>
            </span>
          </motion.div>

          {/* H1 — two lines */}
          <motion.h1
            variants={item}
            style={{
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.06,
              color: "#FFFFFF",
              marginBottom: "24px",
              fontFamily: "var(--font-syne), sans-serif",
            }}
          >
            Your Competitor Is Online.
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #F5C518 0%, #FFD94A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Are You?
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={item}
            style={{
              fontSize: "1rem",
              color: "rgba(255,255,255,0.62)",
              maxWidth: "480px",
              marginBottom: "12px",
              lineHeight: 1.8,
              fontWeight: 400,
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
          >
            We build your website, set up your AI bots, and manage your digital
            presence — all done for you, live in 3–5 days.
          </motion.p>

          {/* Promo pill */}
          <motion.div variants={item} style={{ marginBottom: "32px" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 18px",
                background: "rgba(245,197,24,0.1)",
                border: "1px solid rgba(245,197,24,0.3)",
                borderRadius: "100px",
                fontSize: "0.8rem",
                fontWeight: 700,
                color: "#F5C518",
                fontFamily: "var(--font-dm-sans), sans-serif",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#F5C518",
                  flexShrink: 0,
                }}
              />
              50% Off — April to May 2026 Only
            </span>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            variants={item}
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              marginBottom: "52px",
            }}
          >
            <a
              href="#contact"
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("contact");
              }}
            >
              Book Free 30-Min Session
            </a>
            <a
              href="#pricing"
              className="btn-ghost"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("pricing");
              }}
            >
              See Our Packages
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={item}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1px",
              background: "var(--navy-border)",
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid var(--navy-border)",
              marginBottom: "28px",
            }}
            className="hero-stats-grid"
          >
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: "var(--navy-mid)",
                  padding: "18px 8px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 900,
                    letterSpacing: "-0.03em",
                    color: "#F5C518",
                    lineHeight: 1,
                    marginBottom: "4px",
                    fontFamily: "var(--font-syne), sans-serif",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.4)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={item}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {trustBadges.map((badge) => (
              <div
                key={badge}
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <CheckCircle
                  size={14}
                  style={{ color: "#22C55E", flexShrink: 0 }}
                />
                <span
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.5)",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                  }}
                >
                  {badge}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT — What You Get card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div
            style={{
              background: "var(--navy-mid)",
              border: "1px solid var(--navy-border)",
              borderRadius: "20px",
              padding: "36px 32px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Gold top accent */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "3px",
                background: "linear-gradient(90deg, #F5C518, #FFD94A)",
                borderRadius: "20px 20px 0 0",
              }}
            />
            {/* Inner glow */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "200px",
                background:
                  "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(245,197,24,0.07) 0%, transparent 100%)",
                pointerEvents: "none",
              }}
            />

            <div style={{ position: "relative" }}>
              {/* Card header */}
              <div style={{ marginBottom: "28px" }}>
                <p
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#F5C518",
                    marginBottom: "8px",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                  }}
                >
                  What You Get
                </p>
                <h2
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                    color: "#FFFFFF",
                    lineHeight: 1.2,
                    fontFamily: "var(--font-syne), sans-serif",
                  }}
                >
                  Everything. Done for you.
                </h2>
              </div>

              {/* Feature list */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {whatYouGet.map((feature, i) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.label}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "14px",
                        padding: "14px 0",
                        borderBottom:
                          i < whatYouGet.length - 1
                            ? "1px solid var(--navy-border)"
                            : "none",
                      }}
                    >
                      <div
                        style={{
                          width: "38px",
                          height: "38px",
                          borderRadius: "10px",
                          background: "rgba(245,197,24,0.08)",
                          border: "1px solid rgba(245,197,24,0.15)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          color: "#F5C518",
                        }}
                      >
                        <Icon size={16} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <span
                          style={{
                            fontSize: "0.9rem",
                            fontWeight: 600,
                            color: "#FFFFFF",
                            display: "block",
                            lineHeight: 1.2,
                            fontFamily: "var(--font-dm-sans), sans-serif",
                          }}
                        >
                          {feature.label}
                        </span>
                      </div>
                      <span
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          color: "#22C55E",
                          whiteSpace: "nowrap",
                          fontFamily: "var(--font-dm-sans), sans-serif",
                        }}
                      >
                        {feature.detail}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Card CTA */}
              <div style={{ marginTop: "28px" }}>
                <button
                  onClick={() => scrollTo("contact")}
                  style={{
                    width: "100%",
                    padding: "14px 24px",
                    background: "#F5C518",
                    color: "#0A1628",
                    border: "none",
                    borderRadius: "10px",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    cursor: "pointer",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    transition: "all 0.25s ease",
                    boxShadow:
                      "0 4px 16px rgba(0,0,0,0.25), 0 8px 30px rgba(245,197,24,0.4)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#FFD94A";
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 6px 20px rgba(0,0,0,0.35), 0 12px 40px rgba(245,197,24,0.55)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#F5C518";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 16px rgba(0,0,0,0.25), 0 8px 30px rgba(245,197,24,0.4)";
                  }}
                >
                  Get All of This — Start Free
                </button>
                <p
                  style={{
                    fontSize: "0.72rem",
                    color: "rgba(255,255,255,0.3)",
                    textAlign: "center",
                    marginTop: "10px",
                    marginBottom: 0,
                    fontFamily: "var(--font-dm-sans), sans-serif",
                  }}
                >
                  Free 30-min session first. No commitment required.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-section {
            padding-left: 32px !important;
            padding-right: 32px !important;
          }
          .hero-inner {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
        @media (max-width: 600px) {
          .hero-section {
            padding-left: 20px !important;
            padding-right: 20px !important;
            padding-top: calc(var(--announcement-bar-height) + 100px) !important;
          }
          .hero-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
