"use client";

import { useRef } from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { CheckCircle, Shield, Star, Clock, ArrowRight, Lock, Flame } from "lucide-react";

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
          <p className="section-label">Our Offers</p>
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
            Choose Your{" "}
            <span style={{ color: "#F5C518" }}>Growth System</span>
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
            Start where you are. Every offer is 100% done for you. Upgrade
            anytime as your business grows.
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
            Launch Promo — 50% Off All Offers
          </span>
          <span
            style={{
              fontSize: "0.875rem",
              color: "rgba(255,255,255,0.65)",
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
          >
            Limited slots available. April to May 2026 only.
          </span>
        </motion.div>

        {/* Pricing cards */}
        <div
          className="pricing-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.25rem",
            marginBottom: "3rem",
            alignItems: "start",
          }}
        >
          {/* ========== GET FOUND ========== */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={headInView ? "visible" : "hidden"}
            custom={0.15}
            style={{
              background: "var(--navy-mid)",
              border: "1px solid var(--navy-border)",
              borderRadius: "16px",
              padding: "28px 22px",
              position: "relative",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "0.4rem" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#94A3B8", flexShrink: 0 }} />
              <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                Get Found
              </span>
            </div>

            <p style={{ fontSize: "1rem", fontWeight: 700, color: "#F5C518", fontStyle: "italic", marginBottom: "0.2rem", fontFamily: "var(--font-syne), sans-serif" }}>
              Exist Online. Professionally.
            </p>
            <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.35)", marginBottom: "1.25rem", lineHeight: 1.5, fontFamily: "var(--font-dm-sans), sans-serif" }}>
              For businesses with no website yet
            </p>

            <div style={{ marginBottom: "1.25rem", paddingBottom: "1.25rem", borderBottom: "1px solid var(--navy-border)" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "4px" }}>
                <span style={{ fontSize: "2rem", fontWeight: 900, letterSpacing: "-0.04em", color: "#FFFFFF", fontFamily: "var(--font-syne), sans-serif" }}>
                  ₱3,999
                </span>
                <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-dm-sans), sans-serif" }}>one-time</span>
                <span style={{ fontSize: "0.85rem", color: "rgba(239,68,68,0.5)", textDecoration: "line-through", fontFamily: "var(--font-dm-sans), sans-serif" }}>₱7,999</span>
              </div>
              <span style={{ display: "inline-block", fontSize: "0.65rem", fontWeight: 700, color: "#0A1628", background: "#F5C518", borderRadius: "100px", padding: "2px 10px", letterSpacing: "0.06em", textTransform: "uppercase", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                Launch Price
              </span>
            </div>

            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.55rem", marginBottom: "0.75rem" }}>
              {[
                "Professional website that makes customers trust your business instantly",
                "Your own .com address — no more sending customers to your Facebook page",
                "Always online, always fast — we handle all the technical details",
                "Looks perfect on every phone — 97% of Filipinos browse on mobile",
                "Shows up when customers search for your service on Google",
                "Every customer inquiry lands directly in your inbox",
                "Connected to your Facebook so no lead ever gets missed",
              ].map((f) => (
                <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: "0.55rem" }}>
                  <CheckCircle size={13} style={{ flexShrink: 0, marginTop: "3px", color: "#94A3B8" }} />
                  <span style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.5, fontFamily: "var(--font-dm-sans), sans-serif" }}>{f}</span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "0.8rem", fontStyle: "italic", color: "#F5C518", lineHeight: 1.6, marginBottom: "0.75rem", fontFamily: "var(--font-dm-sans), sans-serif" }}>
              In 3–5 days — customers can find your business, trust it, and contact you directly.
            </p>

            <button
              onClick={scrollToContact}
              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "12px 20px", borderRadius: "10px", fontWeight: 700, fontSize: "0.88rem", cursor: "pointer", background: "transparent", color: "#FFFFFF", border: "1px solid rgba(255,255,255,0.2)", fontFamily: "var(--font-dm-sans), sans-serif", transition: "all 0.2s ease", width: "100%" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(245,197,24,0.4)"; e.currentTarget.style.color = "#F5C518"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "#FFFFFF"; }}
            >
              Get Started Free
              <ArrowRight size={14} />
            </button>
            <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.25)", textAlign: "center", marginTop: "8px", marginBottom: 0, fontFamily: "var(--font-dm-sans), sans-serif" }}>
              Free session first. No commitment.
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
              padding: "28px 22px",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(245,197,24,0.12)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-14px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "#F5C518",
                color: "#0A1628",
                fontSize: "0.62rem",
                fontWeight: 800,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "4px 16px",
                borderRadius: "100px",
                whiteSpace: "nowrap",
                fontFamily: "var(--font-dm-sans), sans-serif",
              }}
            >
              Most Popular
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "0.4rem", marginTop: "8px" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22C55E", boxShadow: "0 0 8px rgba(34,197,94,0.6)", flexShrink: 0 }} />
              <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#22C55E", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                Starter
              </span>
            </div>

            <p style={{ fontSize: "1rem", fontWeight: 700, color: "#F5C518", fontStyle: "italic", marginBottom: "0.2rem", fontFamily: "var(--font-syne), sans-serif" }}>
              Get Found. Get Customers.
            </p>
            <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.4)", marginBottom: "1.25rem", lineHeight: 1.5, fontFamily: "var(--font-dm-sans), sans-serif" }}>
              For businesses ready to get customers automatically
            </p>

            <div style={{ marginBottom: "1.25rem", paddingBottom: "1.25rem", borderBottom: "1px solid rgba(245,197,24,0.2)" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "4px" }}>
                <span style={{ fontSize: "2rem", fontWeight: 900, letterSpacing: "-0.04em", color: "#FFFFFF", fontFamily: "var(--font-syne), sans-serif" }}>₱7,999</span>
                <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-dm-sans), sans-serif" }}>setup</span>
                <span style={{ fontSize: "0.85rem", color: "rgba(239,68,68,0.5)", textDecoration: "line-through", fontFamily: "var(--font-dm-sans), sans-serif" }}>₱15,999</span>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginBottom: "8px" }}>
                <span style={{ fontSize: "1.35rem", fontWeight: 800, color: "#22C55E", fontFamily: "var(--font-syne), sans-serif" }}>₱2,999</span>
                <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-dm-sans), sans-serif" }}>/month</span>
                <span style={{ fontSize: "0.82rem", color: "rgba(239,68,68,0.45)", textDecoration: "line-through", fontFamily: "var(--font-dm-sans), sans-serif" }}>₱5,999</span>
              </div>
              <span style={{ display: "inline-block", fontSize: "0.65rem", fontWeight: 700, color: "#0A1628", background: "#F5C518", borderRadius: "100px", padding: "2px 10px", letterSpacing: "0.06em", textTransform: "uppercase", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                Launch Price
              </span>
            </div>

            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.55rem", marginBottom: "0.75rem" }}>
              {[
                "Everything in Get Found",
                "AI that answers every customer instantly — even at 2AM, even on holidays, even when you're busy",
                "Every inquiry automatically saved — name, number, and what they need — so no lead ever disappears",
                "Your business shows up when customers search nearby on Google Maps",
                "Google reviews requested automatically after every sale — your reputation builds itself",
                "Every month you receive a clear report showing exactly how many customers your system brought you",
                "We fix every issue immediately — your system never breaks silently",
                "Message us anytime on WhatsApp — we respond fast",
              ].map((f) => (
                <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: "0.55rem" }}>
                  <CheckCircle size={13} style={{ flexShrink: 0, marginTop: "3px", color: "#22C55E" }} />
                  <span style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.5, fontFamily: "var(--font-dm-sans), sans-serif" }}>{f}</span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "0.8rem", fontStyle: "italic", color: "#F5C518", lineHeight: 1.6, marginBottom: "0.75rem", fontFamily: "var(--font-dm-sans), sans-serif" }}>
              Wake up every morning to new leads already answered — without sending a single message yourself.
            </p>

            <button
              onClick={scrollToContact}
              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "13px 20px", borderRadius: "10px", fontWeight: 700, fontSize: "0.9rem", cursor: "pointer", border: "none", background: "#F5C518", color: "#0A1628", fontFamily: "var(--font-dm-sans), sans-serif", transition: "all 0.2s ease", boxShadow: "0 4px 16px rgba(0,0,0,0.25), 0 8px 30px rgba(245,197,24,0.35)", width: "100%" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#FFD94A"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#F5C518"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Get More Customers
              <ArrowRight size={14} />
            </button>
            <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.3)", textAlign: "center", marginTop: "8px", marginBottom: 0, fontFamily: "var(--font-dm-sans), sans-serif" }}>
              Free session first. No commitment.
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
              padding: "28px 22px",
              position: "relative",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "0.4rem" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#F5C518", boxShadow: "0 0 8px rgba(245,197,24,0.5)", flexShrink: 0 }} />
              <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                Growth
              </span>
            </div>

            <p style={{ fontSize: "1rem", fontWeight: 700, color: "#F5C518", fontStyle: "italic", marginBottom: "0.2rem", fontFamily: "var(--font-syne), sans-serif" }}>
              Turn Every Lead Into a Sale.
            </p>
            <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.35)", marginBottom: "1.25rem", lineHeight: 1.5, fontFamily: "var(--font-dm-sans), sans-serif" }}>
              For businesses getting leads but losing too many
            </p>

            <div style={{ marginBottom: "1.25rem", paddingBottom: "1.25rem", borderBottom: "1px solid var(--navy-border)" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "4px" }}>
                <span style={{ fontSize: "2rem", fontWeight: 900, letterSpacing: "-0.04em", color: "#FFFFFF", fontFamily: "var(--font-syne), sans-serif" }}>₱14,999</span>
                <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-dm-sans), sans-serif" }}>setup</span>
                <span style={{ fontSize: "0.85rem", color: "rgba(239,68,68,0.45)", textDecoration: "line-through", fontFamily: "var(--font-dm-sans), sans-serif" }}>₱29,999</span>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginBottom: "8px" }}>
                <span style={{ fontSize: "1.35rem", fontWeight: 800, color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-syne), sans-serif" }}>₱7,999</span>
                <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-dm-sans), sans-serif" }}>/month</span>
                <span style={{ fontSize: "0.82rem", color: "rgba(239,68,68,0.4)", textDecoration: "line-through", fontFamily: "var(--font-dm-sans), sans-serif" }}>₱15,999</span>
              </div>
              <span style={{ display: "inline-block", fontSize: "0.65rem", fontWeight: 700, color: "#F5C518", background: "rgba(245,197,24,0.1)", border: "1px solid rgba(245,197,24,0.3)", borderRadius: "100px", padding: "2px 10px", letterSpacing: "0.06em", textTransform: "uppercase", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                Launch Price
              </span>
            </div>

            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.55rem", marginBottom: "0.75rem" }}>
              {[
                "Everything in Starter",
                "Leads that don't respond get followed up automatically — Day 1, Day 2, Day 3 — with personalized messages that feel like a real person wrote them",
                "Customers book their own appointments directly — confirmed, reminded, and protected against no-shows automatically",
                "Leads that went cold 7 days ago get re-engaged automatically — and come back ready to pay",
                "You get an instant WhatsApp alert the moment a serious buyer comes in — with a full summary of what they want",
                "Your system gets smarter every month — analyzing every conversation to improve how it converts your specific customers",
                "See your leads, bookings, and revenue in real time — updated every single day",
                "Your business shows up higher on Google every month — new content published automatically",
                "We respond within 4 hours — dedicated priority support",
              ].map((f) => (
                <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: "0.55rem" }}>
                  <CheckCircle size={13} style={{ flexShrink: 0, marginTop: "3px", color: "#F5C518" }} />
                  <span style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.5, fontFamily: "var(--font-dm-sans), sans-serif" }}>{f}</span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "0.8rem", fontStyle: "italic", color: "#F5C518", lineHeight: 1.6, marginBottom: "0.75rem", fontFamily: "var(--font-dm-sans), sans-serif" }}>
              The leads that used to go cold now show up and pay — automatically, every month.
            </p>

            <button
              onClick={scrollToContact}
              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "12px 20px", borderRadius: "10px", fontWeight: 700, fontSize: "0.88rem", cursor: "pointer", background: "transparent", color: "#F5C518", border: "1px solid rgba(245,197,24,0.4)", fontFamily: "var(--font-dm-sans), sans-serif", transition: "all 0.2s ease", width: "100%" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(245,197,24,0.08)"; e.currentTarget.style.borderColor = "rgba(245,197,24,0.7)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(245,197,24,0.4)"; }}
            >
              Get Started Free
              <ArrowRight size={14} />
            </button>
            <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.25)", textAlign: "center", marginTop: "8px", marginBottom: 0, fontFamily: "var(--font-dm-sans), sans-serif" }}>
              Free session first. No commitment.
            </p>
          </motion.div>

          {/* ========== SCALE ========== */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={headInView ? "visible" : "hidden"}
            custom={0.39}
            style={{
              background: "var(--navy-mid)",
              border: "1px solid var(--navy-border)",
              borderRadius: "16px",
              padding: "28px 22px",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              opacity: 0.75,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-14px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "rgba(245,197,24,0.1)",
                border: "1px solid rgba(245,197,24,0.3)",
                color: "#F5C518",
                fontSize: "0.62rem",
                fontWeight: 800,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "4px 14px",
                borderRadius: "100px",
                whiteSpace: "nowrap",
                fontFamily: "var(--font-dm-sans), sans-serif",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <Lock size={9} />
              Coming Soon
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "0.4rem", marginTop: "8px" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "rgba(245,197,24,0.4)", flexShrink: 0 }} />
              <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                Scale
              </span>
            </div>

            <p style={{ fontSize: "1rem", fontWeight: 700, color: "rgba(245,197,24,0.6)", fontStyle: "italic", marginBottom: "0.2rem", fontFamily: "var(--font-syne), sans-serif" }}>
              Full Business Growth Engine.
            </p>
            <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.25)", marginBottom: "1.25rem", lineHeight: 1.5, fontFamily: "var(--font-dm-sans), sans-serif" }}>
              For businesses ready to dominate their market
            </p>

            <div style={{ marginBottom: "1.25rem", paddingBottom: "1.25rem", borderBottom: "1px solid var(--navy-border)" }}>
              <p style={{ fontSize: "1.2rem", fontWeight: 800, color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-syne), sans-serif", letterSpacing: "-0.02em" }}>
                Custom Pricing
              </p>
              <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.25)", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                Tailored to your growth goals
              </p>
            </div>

            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.55rem", marginBottom: "0.75rem" }}>
              {[
                "Everything in Growth",
                "One system answering customers across Facebook, Instagram, WhatsApp, and your website — simultaneously, 24 hours a day",
                "Customers who haven't visited in 30, 60, or 90 days get brought back automatically with personalized offers",
                "Your business predicts slow periods and launches promotions automatically before revenue drops",
                "Every competitor move monitored monthly — price changes, new services, review trends — so you're always one step ahead",
                "Weekly analysis of your entire business — what's working, what's not, and exactly what to do next",
                "Your business runs and grows automatically — customers acquired, sales closed, revenue growing — whether you're working or not",
              ].map((f) => (
                <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: "0.55rem" }}>
                  <CheckCircle size={13} style={{ flexShrink: 0, marginTop: "3px", color: "rgba(245,197,24,0.4)" }} />
                  <span style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.35)", lineHeight: 1.5, fontFamily: "var(--font-dm-sans), sans-serif" }}>{f}</span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "0.8rem", fontStyle: "italic", color: "rgba(245,197,24,0.6)", lineHeight: 1.6, marginBottom: "0.75rem", fontFamily: "var(--font-dm-sans), sans-serif" }}>
              You built the business. Now it runs without you.
            </p>

            <button
              onClick={scrollToContact}
              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "12px 20px", borderRadius: "10px", fontWeight: 700, fontSize: "0.88rem", cursor: "pointer", background: "transparent", color: "rgba(255,255,255,0.3)", border: "1px solid rgba(255,255,255,0.12)", fontFamily: "var(--font-dm-sans), sans-serif", transition: "all 0.2s ease", width: "100%" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(245,197,24,0.3)"; e.currentTarget.style.color = "#F5C518"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "rgba(255,255,255,0.3)"; }}
            >
              Join Waitlist
              <ArrowRight size={14} />
            </button>
            <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.2)", textAlign: "center", marginTop: "8px", marginBottom: 0, fontFamily: "var(--font-dm-sans), sans-serif" }}>
              Lock in the early access price.
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
            { Icon: CheckCircle, label: "Results Guaranteed" },
            { Icon: Star, label: "30-Day Guarantee" },
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
        @media (max-width: 1100px) {
          .pricing-section { padding: 80px 24px !important; }
          .pricing-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .trust-badges { gap: 1rem; }
          .pricing-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
