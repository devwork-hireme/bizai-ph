"use client";

import { motion, Variants } from "framer-motion";

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

const stats = [
  { text: "24/7 AI Working" },
  { text: "From ₱3,999 Launch Price" },
  { text: "100% Done For You" },
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
        display: "grid",
        placeItems: "center",
        overflow: "hidden",
        background: "var(--black)",
        paddingTop: "calc(var(--announcement-bar-height) + 140px)",
        paddingBottom: "80px",
        paddingLeft: "24px",
        paddingRight: "24px",
      }}
    >
      {/* Grid background */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(245,197,24,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(245,197,24,0.03) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Glow — gold top */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-100px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "900px",
          height: "500px",
          borderRadius: "50%",
          background: "rgba(245,197,24,0.06)",
          filter: "blur(120px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Glow — navy mid blue bottom-right */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          right: "-100px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "rgba(17,34,64,0.8)",
          filter: "blur(100px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Diagonal light streak */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          right: "15%",
          width: "1px",
          height: "100%",
          background:
            "linear-gradient(to bottom, transparent, rgba(245,197,24,0.1) 30%, rgba(255,217,74,0.06) 70%, transparent)",
          transform: "skewX(-5deg)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "860px",
          width: "100%",
          textAlign: "center",
        }}
      >
        {/* Eyebrow badge */}
        <motion.div variants={item} style={{ marginBottom: "32px" }}>
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

        {/* H1 */}
        <motion.h1
          variants={item}
          style={{
            fontSize: "clamp(2.6rem, 6.5vw, 5rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            color: "#FFFFFF",
            marginBottom: "24px",
            fontFamily: "var(--font-syne), sans-serif",
          }}
        >
          We Build, Automate, and{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #F5C518 0%, #FFD94A 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Grow Your Business Online
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={item}
          style={{
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.62)",
            maxWidth: "620px",
            margin: "0 auto 32px",
            lineHeight: 1.8,
            fontWeight: 400,
            fontFamily: "var(--font-dm-sans), sans-serif",
          }}
        >
          Website, AI automation, leads, and social media — fully set up and managed for you.
          No technical knowledge needed. Focus on your business, we handle everything else.
        </motion.p>

        {/* Promo pill */}
        <motion.div variants={item} style={{ marginBottom: "28px" }}>
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
            <span style={{ fontSize: "1rem" }}>🔥</span>
            50% Off — April to May 2026 Only
          </span>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          variants={item}
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "64px",
          }}
        >
          <a
            href="#contact"
            className="btn-primary"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("contact");
            }}
            style={{ fontSize: "1rem" }}
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
            style={{ fontSize: "1rem" }}
          >
            See Our Packages
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={item}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 0,
          }}
        >
          {stats.map((stat, i) => (
            <span
              key={stat.text}
              style={{ display: "flex", alignItems: "center" }}
            >
              {i > 0 && (
                <span
                  style={{
                    width: "1px",
                    height: "14px",
                    background: "rgba(245,197,24,0.2)",
                    margin: "0 28px",
                    flexShrink: 0,
                  }}
                />
              )}
              <span
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.5)",
                  letterSpacing: "0.02em",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                }}
              >
                {stat.text}
              </span>
            </span>
          ))}
        </motion.div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          #hero { padding-left: 24px !important; padding-right: 24px !important; }
        }
        @media (max-width: 480px) {
          #hero { padding-top: calc(var(--announcement-bar-height) + 100px) !important; }
        }
      `}</style>
    </section>
  );
}
