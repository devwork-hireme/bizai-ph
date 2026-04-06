"use client";

import { motion } from "framer-motion";

const navLinks = [
  { label: "Services", href: "#automations" },
  { label: "How It Works", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  "Messenger AI Bot",
  "Appointment Booking System",
  "Lead Qualification Bot",
  "Order Processing Automation",
  "Social Media Auto-Reply",
  "Business Intelligence Reports",
];

const industryLinks = [
  "Restaurant / Food Service",
  "Salon / Spa / Beauty",
  "Online Sellers",
  "Real Estate Agencies",
  "Clinics / Healthcare",
  "Coaches & Consultants",
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
        borderTop: "1px solid var(--card-border)",
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
            "linear-gradient(rgba(82,130,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(82,130,255,0.02) 1px, transparent 1px)",
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
          background: "var(--card)",
          border: "1px solid var(--card-border)",
          borderRadius: "20px",
          padding: "64px 48px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        {/* Glow accent */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 60% 60% at 50% 110%, rgba(61,111,255,0.18) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <p className="section-label" style={{ marginBottom: "1rem" }}>
            Ready to Start?
          </p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              color: "var(--white)",
              marginBottom: "1rem",
            }}
          >
            Your automation system can be{" "}
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
              live in 48 hours.
            </span>
          </h2>
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--soft)",
              maxWidth: "480px",
              margin: "0 auto 2rem",
              lineHeight: 1.75,
              fontWeight: 300,
            }}
          >
            Stop losing customers to slow responses. Stop wasting hours on tasks
            that should run on autopilot. The first step is a free 30-minute
            consultation.
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
              href="https://calendly.com/devwork2025-proton/free-ai-automation-audit"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book Free Consultation
            </a>
            <a
              href="#automations"
              className="btn-ghost"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("automations");
              }}
            >
              See Our Services
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
                  background: "var(--blue)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
              </div>
              <span style={{ fontWeight: 800, fontSize: "1.05rem", color: "var(--white)", letterSpacing: "-0.02em" }}>
                BizAI PH
              </span>
            </div>
            <p
              style={{
                fontSize: "0.875rem",
                color: "var(--muted)",
                lineHeight: 1.75,
                marginBottom: "1.5rem",
                maxWidth: "260px",
              }}
            >
              We Automate Your Business. You Grow It. AI automation systems built and managed for Philippine SMBs.
            </p>
            <p style={{ fontSize: "0.8rem", color: "var(--muted)", margin: 0 }}>
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
                color: "var(--blue-light)",
                marginBottom: "1.25rem",
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
                    color: "var(--muted)",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
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
                color: "var(--blue-light)",
                marginBottom: "1.25rem",
              }}
            >
              Services
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              {serviceLinks.map((s) => (
                <span key={s} style={{ fontSize: "0.875rem", color: "var(--muted)" }}>
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
                color: "var(--blue-light)",
                marginBottom: "1.25rem",
              }}
            >
              Industries
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              {industryLinks.map((ind) => (
                <span key={ind} style={{ fontSize: "0.875rem", color: "var(--muted)" }}>
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
            borderTop: "1px solid var(--card-border)",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p style={{ fontSize: "0.8rem", color: "var(--muted)", margin: 0 }}>
            © {year} BizAI PH. All rights reserved.
          </p>
          <p style={{ fontSize: "0.8rem", color: "var(--muted)", margin: 0 }}>
            We Automate Your Business. You Grow It.
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
