"use client";

import { useRef } from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { CheckCircle, Shield, Star, Clock, Zap, ArrowRight, Lock, Flame } from "lucide-react";

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
        background: "var(--navy)",
        borderTop: "1px solid var(--navy-border)",
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
            "linear-gradient(rgba(26,58,107,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(26,58,107,0.5) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      {/* Gold glow */}
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
          style={{ textAlign: "center", marginBottom: "40px" }}
        >
          <p className="section-label">Your Growth Journey</p>
          <h2
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: "#FFFFFF",
              marginBottom: "20px",
              fontFamily: "var(--font-syne), sans-serif",
            }}
          >
            Build.{" "}
            <span style={{ color: "#F5C518" }}>
              Get Leads. Convert.
            </span>
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "rgba(255,255,255,0.55)",
              maxWidth: "560px",
              margin: "0 auto 2rem",
              lineHeight: 1.78,
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
          >
            Three steps. One journey. We build your online presence, get you
            leads, and convert them into customers. Pick the step you need
            right now.
          </p>
        </motion.div>

        {/* Promo banner */}
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
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          <Flame size={18} style={{ color: "#F5C518", flexShrink: 0 }} />
          <span
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              color: "#F5C518",
              fontFamily: "var(--font-syne), sans-serif",
            }}
          >
            Launch Promo — 50% Off All Packages
          </span>
          <span
            style={{
              fontSize: "0.875rem",
              color: "rgba(255,255,255,0.65)",
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
          >
            Limited slots available. April to May 2026 only. Original prices
            shown — launch price applied at checkout.
          </span>
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
          {/* ========== BASIC ========== */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={headInView ? "visible" : "hidden"}
            custom={0.15}
            style={{
              background: "var(--navy-mid)",
              border: "1px solid var(--navy-border)",
              borderRadius: "16px",
              padding: "36px 28px",
              position: "relative",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Dot + name */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.4rem" }}>
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#94A3B8", flexShrink: 0 }} />
              <span style={{ fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                Basic
              </span>
            </div>

            {/* Tagline */}
            <p style={{ fontSize: "1.2rem", fontWeight: 700, color: "#F5C518", fontStyle: "italic", marginBottom: "0.25rem", fontFamily: "var(--font-syne), sans-serif" }}>
              Step 1 — Build Your Online Presence
            </p>

            {/* For */}
            <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)", marginBottom: "1.25rem", fontFamily: "var(--font-dm-sans), sans-serif" }}>
              For businesses running on word-of-mouth with no website
            </p>

            {/* Pain statement */}
            <p style={{ fontSize: "0.82rem", fontStyle: "italic", color: "rgba(245,197,24,0.6)", marginBottom: "1.5rem", lineHeight: 1.6, fontFamily: "var(--font-dm-sans), sans-serif", borderLeft: "2px solid rgba(245,197,24,0.25)", paddingLeft: "12px" }}>
              &ldquo;Customers ask for your website. You send them your Facebook
              page. They don&apos;t call back.&rdquo;
            </p>

            {/* Price */}
            <div style={{ marginBottom: "1.5rem", paddingBottom: "1.5rem", borderBottom: "1px solid var(--navy-border)" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "6px" }}>
                <span style={{ fontSize: "2.4rem", fontWeight: 900, letterSpacing: "-0.04em", color: "#FFFFFF", fontFamily: "var(--font-syne), sans-serif" }}>
                  ₱3,999
                </span>
                <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  one-time
                </span>
                <span style={{ fontSize: "0.9rem", color: "rgba(239,68,68,0.55)", textDecoration: "line-through", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  ₱7,999
                </span>
              </div>
              <span style={{ display: "inline-block", fontSize: "0.68rem", fontWeight: 700, color: "#0A1628", background: "#F5C518", borderRadius: "100px", padding: "3px 12px", letterSpacing: "0.06em", textTransform: "uppercase", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                Launch Price
              </span>
            </div>

            {/* Promise */}
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.7, marginBottom: "0.75rem", fontFamily: "var(--font-dm-sans), sans-serif" }}>
              In 3–5 days, you&apos;ll have a professional website that impresses
              every customer who looks you up.
            </p>
            <p style={{ fontSize: "0.82rem", color: "#22C55E", lineHeight: 1.6, marginBottom: "1.5rem", fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 600 }}>
              The result: Customers can find you and reach you professionally.
            </p>

            {/* Features */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "1.75rem" }}>
              {[
                "5-Page Professional Website (Home, About, Services, Contact, Gallery)",
                "Mobile-Friendly Design — perfect on any phone",
                "Contact Form — customers reach you directly",
                "Free 1 Year Domain — your own .com address",
                "Free 1 Year Hosting — no extra cost first year",
                "Professional Email — hello@yourbusiness.com",
              ].map((f) => (
                <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                  <CheckCircle size={14} style={{ flexShrink: 0, marginTop: "3px", color: "#94A3B8" }} />
                  <span style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.5, fontFamily: "var(--font-dm-sans), sans-serif" }}>{f}</span>
                </div>
              ))}
            </div>

            {/* Transformation line */}
            <div style={{ marginBottom: "1.5rem", padding: "14px 16px", background: "rgba(255,255,255,0.03)", border: "1px solid var(--navy-border)", borderRadius: "10px" }}>
              <div style={{ fontSize: "0.72rem", fontWeight: 600, color: "rgba(239,68,68,0.7)", marginBottom: "6px", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                Before: &ldquo;We don&apos;t have a website yet.&rdquo;
              </div>
              <div style={{ fontSize: "0.72rem", fontWeight: 600, color: "#22C55E", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                After: &ldquo;Check us out at juansbarbershop.com&rdquo;
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={scrollToContact}
              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "14px 24px", borderRadius: "10px", fontWeight: 700, fontSize: "0.95rem", cursor: "pointer", background: "transparent", color: "#FFFFFF", border: "1px solid rgba(255,255,255,0.2)", fontFamily: "var(--font-dm-sans), sans-serif", transition: "all 0.2s ease", width: "100%" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(245,197,24,0.4)"; e.currentTarget.style.color = "#F5C518"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "#FFFFFF"; }}
            >
              Get My Website
              <ArrowRight size={15} />
            </button>
            <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.3)", textAlign: "center", marginTop: "8px", marginBottom: 0, fontFamily: "var(--font-dm-sans), sans-serif" }}>
              Free 30-min session first. No commitment required.
            </p>
            <p style={{ fontSize: "0.8rem", color: "rgba(245,197,24,0.65)", textAlign: "center", marginTop: "12px", marginBottom: 0, fontFamily: "var(--font-dm-sans), sans-serif" }}>
              Want leads coming in automatically? → That&apos;s Starter.
            </p>
          </motion.div>

          {/* ========== STARTER ========== */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={headInView ? "visible" : "hidden"}
            custom={0.23}
            style={{
              background: "rgba(245,197,24,0.04)",
              border: "2px solid #F5C518",
              borderRadius: "16px",
              padding: "36px 28px",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(245,197,24,0.12)",
            }}
          >
            {/* Most popular badge */}
            <div
              style={{
                position: "absolute",
                top: "-14px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "#F5C518",
                color: "#0A1628",
                fontSize: "0.65rem",
                fontWeight: 800,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "4px 18px",
                borderRadius: "100px",
                whiteSpace: "nowrap",
                fontFamily: "var(--font-dm-sans), sans-serif",
              }}
            >
              Most Popular
            </div>

            {/* Dot + name */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.4rem", marginTop: "8px" }}>
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#22C55E", boxShadow: "0 0 8px rgba(34,197,94,0.6)", flexShrink: 0 }} />
              <span style={{ fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#22C55E", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                Starter
              </span>
            </div>

            {/* Tagline */}
            <p style={{ fontSize: "1.2rem", fontWeight: 700, color: "#F5C518", fontStyle: "italic", marginBottom: "0.25rem", fontFamily: "var(--font-syne), sans-serif" }}>
              Step 2 — Get Leads Automatically
            </p>

            {/* For */}
            <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)", marginBottom: "1.25rem", fontFamily: "var(--font-dm-sans), sans-serif" }}>
              For businesses with a Facebook page — but invisible on Google and
              losing leads every night
            </p>

            {/* Pain statement */}
            <p style={{ fontSize: "0.82rem", fontStyle: "italic", color: "rgba(245,197,24,0.65)", marginBottom: "1.5rem", lineHeight: 1.6, fontFamily: "var(--font-dm-sans), sans-serif", borderLeft: "2px solid rgba(245,197,24,0.4)", paddingLeft: "12px" }}>
              &ldquo;You have a Facebook page. But customers searching Google
              can&apos;t find you. And half your Messenger inquiries come in while
              you&apos;re asleep — unanswered.&rdquo;
            </p>

            {/* Price */}
            <div style={{ marginBottom: "1.5rem", paddingBottom: "1.5rem", borderBottom: "1px solid rgba(245,197,24,0.2)" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "4px" }}>
                <span style={{ fontSize: "2.4rem", fontWeight: 900, letterSpacing: "-0.04em", color: "#FFFFFF", fontFamily: "var(--font-syne), sans-serif" }}>
                  ₱7,999
                </span>
                <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-dm-sans), sans-serif" }}>setup</span>
                <span style={{ fontSize: "0.9rem", color: "rgba(239,68,68,0.55)", textDecoration: "line-through", fontFamily: "var(--font-dm-sans), sans-serif" }}>₱15,999</span>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginBottom: "8px" }}>
                <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "#22C55E", fontFamily: "var(--font-syne), sans-serif" }}>₱2,999</span>
                <span style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-dm-sans), sans-serif" }}>/month</span>
                <span style={{ fontSize: "0.85rem", color: "rgba(239,68,68,0.5)", textDecoration: "line-through", fontFamily: "var(--font-dm-sans), sans-serif" }}>₱5,999</span>
              </div>
              <span style={{ display: "inline-block", fontSize: "0.68rem", fontWeight: 700, color: "#0A1628", background: "#F5C518", borderRadius: "100px", padding: "3px 12px", letterSpacing: "0.06em", textTransform: "uppercase", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                Launch Price
              </span>
            </div>

            {/* Promise */}
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.7, marginBottom: "0.75rem", fontFamily: "var(--font-dm-sans), sans-serif" }}>
              We make you show up on Google, set up a bot that answers every
              inquiry 24/7, and post on Facebook automatically — all managed for
              you every month.
            </p>
            <p style={{ fontSize: "0.82rem", color: "#22C55E", lineHeight: 1.6, marginBottom: "1.5rem", fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 600 }}>
              The result: Inquiries come to you 24/7 — even while you sleep.
            </p>

            {/* Features */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "1.75rem" }}>
              {[
                "Everything in Basic",
                "Custom Website — built around your brand",
                "SEO Foundation Setup — show up on Google Search",
                "24/7 Messenger Bot — answers while you sleep",
                "Lead Capture System — every inquiry saved automatically",
                "Google My Business Setup — found on Maps & Search",
                "Google Review Automation — auto-requested after every sale",
                "Automated Facebook Posts — 3x per week, done for you",
                "Monthly Performance Report — delivered via WhatsApp",
                "Bug Fixes & Maintenance — we keep everything running",
                "WhatsApp Support — reach us anytime",
              ].map((f) => (
                <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                  <CheckCircle size={14} style={{ flexShrink: 0, marginTop: "3px", color: "#22C55E" }} />
                  <span style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.5, fontFamily: "var(--font-dm-sans), sans-serif" }}>{f}</span>
                </div>
              ))}
            </div>

            {/* Transformation line */}
            <div style={{ marginBottom: "1.5rem", padding: "14px 16px", background: "rgba(245,197,24,0.04)", border: "1px solid rgba(245,197,24,0.2)", borderRadius: "10px" }}>
              <div style={{ fontSize: "0.72rem", fontWeight: 600, color: "rgba(239,68,68,0.7)", marginBottom: "6px", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                Before: &ldquo;Sorry, I only saw your message this morning.&rdquo;
              </div>
              <div style={{ fontSize: "0.72rem", fontWeight: 600, color: "#22C55E", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                After: &ldquo;Our bot replied instantly at 2AM — they&apos;re already booked.&rdquo;
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={scrollToContact}
              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "14px 24px", borderRadius: "10px", fontWeight: 700, fontSize: "0.95rem", cursor: "pointer", border: "none", background: "#F5C518", color: "#0A1628", fontFamily: "var(--font-dm-sans), sans-serif", transition: "all 0.2s ease", boxShadow: "0 4px 16px rgba(0,0,0,0.25), 0 8px 30px rgba(245,197,24,0.4)", width: "100%" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#FFD94A"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.35), 0 12px 40px rgba(245,197,24,0.55)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#F5C518"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.25), 0 8px 30px rgba(245,197,24,0.4)"; }}
            >
              Start Getting Found
              <ArrowRight size={15} />
            </button>
            <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.3)", textAlign: "center", marginTop: "8px", marginBottom: 0, fontFamily: "var(--font-dm-sans), sans-serif" }}>
              Free 30-min session first. No commitment required.
            </p>
            <p style={{ fontSize: "0.8rem", color: "rgba(245,197,24,0.65)", textAlign: "center", marginTop: "12px", marginBottom: 0, fontFamily: "var(--font-dm-sans), sans-serif" }}>
              Getting leads but not converting enough? → That&apos;s Growth.
            </p>
          </motion.div>

          {/* ========== GROWTH ========== */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={headInView ? "visible" : "hidden"}
            custom={0.31}
            style={{
              background: "var(--navy-mid)",
              border: "1px solid var(--navy-border)",
              borderRadius: "16px",
              padding: "36px 28px",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              opacity: 0.9,
            }}
          >
            {/* Coming soon badge */}
            <div
              style={{
                position: "absolute",
                top: "-14px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "rgba(245,197,24,0.12)",
                border: "1px solid rgba(245,197,24,0.35)",
                color: "#F5C518",
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
              <Lock size={10} />
              Coming Soon
            </div>

            {/* Dot + name */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.4rem", marginTop: "8px" }}>
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#F5C518", boxShadow: "0 0 8px rgba(245,197,24,0.5)", flexShrink: 0 }} />
              <span style={{ fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                Growth
              </span>
            </div>

            {/* Tagline */}
            <p style={{ fontSize: "1.2rem", fontWeight: 700, color: "#F5C518", fontStyle: "italic", marginBottom: "0.25rem", fontFamily: "var(--font-syne), sans-serif" }}>
              Turn Every Lead Into a Paying Customer
            </p>

            {/* For */}
            <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)", marginBottom: "1.25rem", fontFamily: "var(--font-dm-sans), sans-serif" }}>
              For businesses getting inquiries but losing too many before they convert
            </p>

            {/* Pain statement */}
            <p style={{ fontSize: "0.82rem", fontStyle: "italic", color: "rgba(245,197,24,0.5)", marginBottom: "1.5rem", lineHeight: 1.6, fontFamily: "var(--font-dm-sans), sans-serif", borderLeft: "2px solid rgba(245,197,24,0.2)", paddingLeft: "12px" }}>
              &ldquo;Leads message you. You reply when you can. Half already went
              somewhere else. The ones you do reach — half don&apos;t show up.&rdquo;
            </p>

            {/* Price */}
            <div style={{ marginBottom: "1.5rem", paddingBottom: "1.5rem", borderBottom: "1px solid var(--navy-border)" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "4px" }}>
                <span style={{ fontSize: "2.4rem", fontWeight: 900, letterSpacing: "-0.04em", color: "#FFFFFF", fontFamily: "var(--font-syne), sans-serif" }}>
                  ₱14,999
                </span>
                <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-dm-sans), sans-serif" }}>setup</span>
                <span style={{ fontSize: "0.9rem", color: "rgba(239,68,68,0.45)", textDecoration: "line-through", fontFamily: "var(--font-dm-sans), sans-serif" }}>₱29,999</span>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginBottom: "8px" }}>
                <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-syne), sans-serif" }}>₱7,999</span>
                <span style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-dm-sans), sans-serif" }}>/month</span>
                <span style={{ fontSize: "0.85rem", color: "rgba(239,68,68,0.4)", textDecoration: "line-through", fontFamily: "var(--font-dm-sans), sans-serif" }}>₱15,999</span>
              </div>
              <span style={{ display: "inline-block", fontSize: "0.68rem", fontWeight: 700, color: "#F5C518", background: "rgba(245,197,24,0.12)", border: "1px solid rgba(245,197,24,0.3)", borderRadius: "100px", padding: "3px 12px", letterSpacing: "0.06em", textTransform: "uppercase", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                Waitlist Only
              </span>
            </div>

            {/* Promise */}
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: "1.5rem", fontFamily: "var(--font-dm-sans), sans-serif" }}>
              Our AI qualifies every lead instantly, follows up automatically for
              3 days, books their appointment, sends reminders — you only hear from
              us when they&apos;re ready to pay.
            </p>

            {/* Features */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "1.75rem", opacity: 0.75 }}>
              {[
                "Everything in Starter",
                "Advanced AI Messenger Bot — Facebook + Instagram",
                "3-Day Lead Follow-Up Sequence — recovers 40% of lost leads",
                "Appointment Booking System — no-shows reduced by 60%",
                "Local SEO Growth — monthly content and keyword tracking",
                "Automated Facebook Posts — 5x per week",
                "Live Business Dashboard — real-time leads and performance",
                "WhatsApp Lead Alerts — instant notification for every hot lead",
                "Priority Support — we respond within 4 hours",
              ].map((f) => (
                <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                  <CheckCircle size={14} style={{ flexShrink: 0, marginTop: "3px", color: "#F5C518" }} />
                  <span style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.5, fontFamily: "var(--font-dm-sans), sans-serif" }}>{f}</span>
                </div>
              ))}
            </div>

            {/* Transformation line */}
            <div style={{ marginBottom: "1.5rem", padding: "14px 16px", background: "rgba(255,255,255,0.03)", border: "1px solid var(--navy-border)", borderRadius: "10px" }}>
              <div style={{ fontSize: "0.72rem", fontWeight: 600, color: "rgba(239,68,68,0.6)", marginBottom: "6px", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                Before: &ldquo;I lost track of that lead — I think they went somewhere else.&rdquo;
              </div>
              <div style={{ fontSize: "0.72rem", fontWeight: 600, color: "#22C55E", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                After: &ldquo;The bot followed up 3 times. They booked yesterday. They showed up today.&rdquo;
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={scrollToContact}
              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "14px 24px", borderRadius: "10px", fontWeight: 700, fontSize: "0.95rem", cursor: "pointer", background: "transparent", color: "#F5C518", border: "1px solid rgba(245,197,24,0.4)", fontFamily: "var(--font-dm-sans), sans-serif", transition: "all 0.2s ease", width: "100%" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(245,197,24,0.08)"; e.currentTarget.style.borderColor = "rgba(245,197,24,0.6)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(245,197,24,0.4)"; }}
            >
              Join the Waitlist
              <ArrowRight size={15} />
            </button>
            <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.3)", textAlign: "center", marginTop: "8px", marginBottom: 0, fontFamily: "var(--font-dm-sans), sans-serif" }}>
              Lock in the 50% launch price before we go live.
            </p>
          </motion.div>
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
          <p style={{ fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#F5C518", marginBottom: "1.25rem", fontFamily: "var(--font-dm-sans), sans-serif" }}>
            BizAI PH vs. Hiring Full-Time Staff
          </p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "480px" }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", padding: "0.6rem 0", fontSize: "0.78rem", fontWeight: 700, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.08em", borderBottom: "1px solid var(--navy-border)", width: "50%", fontFamily: "var(--font-dm-sans), sans-serif" }}>Feature</th>
                  <th style={{ textAlign: "center", padding: "0.6rem 1rem", fontSize: "0.78rem", fontWeight: 700, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.08em", borderBottom: "1px solid var(--navy-border)", fontFamily: "var(--font-dm-sans), sans-serif" }}>Human Staff</th>
                  <th style={{ textAlign: "center", padding: "0.6rem 1rem", fontSize: "0.78rem", fontWeight: 700, color: "#F5C518", textTransform: "uppercase", letterSpacing: "0.08em", borderBottom: "1px solid var(--navy-border)", fontFamily: "var(--font-dm-sans), sans-serif" }}>BizAI PH</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.label}>
                    <td style={{ padding: "0.75rem 0", fontSize: "0.88rem", color: "rgba(255,255,255,0.6)", borderBottom: i < comparisonRows.length - 1 ? "1px solid rgba(26,58,107,0.5)" : "none", fontFamily: "var(--font-dm-sans), sans-serif" }}>{row.label}</td>
                    <td style={{ padding: "0.75rem 1rem", textAlign: "center", fontSize: "0.88rem", color: "rgba(239,68,68,0.65)", borderBottom: i < comparisonRows.length - 1 ? "1px solid rgba(26,58,107,0.5)" : "none", fontFamily: "var(--font-dm-sans), sans-serif" }}>{row.human}</td>
                    <td style={{ padding: "0.75rem 1rem", textAlign: "center", fontSize: "0.88rem", fontWeight: 600, color: "#22C55E", borderBottom: i < comparisonRows.length - 1 ? "1px solid rgba(26,58,107,0.5)" : "none", fontFamily: "var(--font-dm-sans), sans-serif" }}>{row.bizai}</td>
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
          style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", justifyContent: "center" }}
        >
          {[
            { Icon: Shield, label: "SSL Secured" },
            { Icon: CheckCircle, label: "PayMongo Verified" },
            { Icon: Star, label: "30-Day Performance Guarantee" },
            { Icon: Clock, label: "Month-to-Month, No Lock-In" },
          ].map(({ Icon, label }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: "7px", fontSize: "0.78rem", fontWeight: 600, color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-dm-sans), sans-serif" }}>
              <Icon size={14} style={{ color: "rgba(245,197,24,0.5)" }} />
              {label}
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1000px) {
          .pricing-section { padding: 80px 24px !important; }
          .pricing-grid { grid-template-columns: 1fr !important; max-width: 480px; margin-left: auto; margin-right: auto; }
        }
        @media (max-width: 600px) {
          .trust-badges { gap: 1rem; }
          .pricing-grid { max-width: 100%; }
        }
      `}</style>
    </section>
  );
}
