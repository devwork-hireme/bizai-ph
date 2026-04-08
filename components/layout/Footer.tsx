"use client";

import { motion } from "framer-motion";

const navLinks = [
  { label: "Services", href: "#pricing" },
  { label: "How It Works", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Why Us", href: "#why-us" },
  { label: "FAQ", href: "#faq" },
];

const serviceLinks = [
  "Basic Package",
  "Starter Package",
  "Growth Package",
  "Free 30-Min Session",
];

const industryLinks = [
  "Salons & Barbershops",
  "Restaurants & Food",
  "Repair Shops",
  "Clinics & Medical",
  "Catering Services",
  "Retail Stores",
];

function scrollTo(id: string) {
  const el = document.getElementById(id.replace("#", ""));
  el?.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--deep)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "80px 64px 40px",
        position: "relative",
        overflow: "hidden",
      }}
      className="footer-outer"
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
      {/* Floating CTA card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{
          maxWidth: "1200px",
          margin: "0 auto 80px",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(245,197,24,0.2)",
          borderRadius: "20px",
          padding: "64px 48px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        {/* Gold glow accent */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 60% 60% at 50% 110%, rgba(245,197,24,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <p
            className="section-label"
            style={{ marginBottom: "1rem" }}
          >
            Ready to Start?
          </p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "#FFFFFF",
              marginBottom: "1rem",
              fontFamily: "var(--font-syne), sans-serif",
            }}
          >
            Your business can be live online{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #F5C518, #FFD94A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              in 3–5 days.
            </span>
          </h2>
          <p
            style={{
              fontSize: "0.95rem",
              color: "rgba(255,255,255,0.55)",
              maxWidth: "480px",
              margin: "0 auto 2rem",
              lineHeight: 1.75,
              fontWeight: 400,
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
          >
            Stop losing customers to competitors who are visible online. The first step is
            a free 30-minute session — no commitment required.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
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
          </div>
        </div>
      </motion.div>

      {/* Footer columns */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
            gap: "3rem",
            marginBottom: "4rem",
          }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                marginBottom: "1.25rem",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  background: "#F5C518",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A1628" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
              </div>
              <span
                style={{
                  fontWeight: 800,
                  fontSize: "1.05rem",
                  color: "#FFFFFF",
                  letterSpacing: "-0.02em",
                  fontFamily: "var(--font-syne), sans-serif",
                }}
              >
                BizAI PH
              </span>
            </div>
            <p
              style={{
                fontSize: "0.875rem",
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.75,
                marginBottom: "1.5rem",
                maxWidth: "260px",
                fontFamily: "var(--font-dm-sans), sans-serif",
              }}
            >
              Done-for-you digital growth for Filipino SMBs. Website, automation, leads — fully managed for you.
            </p>
            <p
              style={{
                fontSize: "0.8rem",
                color: "rgba(255,255,255,0.3)",
                margin: 0,
                fontFamily: "var(--font-dm-sans), sans-serif",
              }}
            >
              Taguig City, Metro Manila
              <br />
              hello@bizaiph.com
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#F5C518",
                marginBottom: "1.25rem",
                fontFamily: "var(--font-dm-sans), sans-serif",
              }}
            >
              Navigation
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  style={{
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.4)",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#F5C518",
                marginBottom: "1.25rem",
                fontFamily: "var(--font-dm-sans), sans-serif",
              }}
            >
              Services
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              {serviceLinks.map((s) => (
                <span
                  key={s}
                  style={{
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.4)",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#F5C518",
                marginBottom: "1.25rem",
                fontFamily: "var(--font-dm-sans), sans-serif",
              }}
            >
              We Serve
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              {industryLinks.map((ind) => (
                <span
                  key={ind}
                  style={{
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.4)",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                  }}
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p
            style={{
              fontSize: "0.8rem",
              color: "rgba(255,255,255,0.25)",
              margin: 0,
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
          >
            © {year} BizAI PH. All rights reserved.
          </p>
          <p
            style={{
              fontSize: "0.8rem",
              color: "rgba(255,255,255,0.25)",
              margin: 0,
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
          >
            Done-for-you digital growth for Filipino SMBs.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-outer { padding: 60px 24px 32px !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 2rem !important; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
