"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SystemCard from "@/components/ui/SystemCard";
import RoadmapSpine from "@/components/ui/RoadmapSpine";
import type { SystemCardProps } from "@/lib/types";

const systems: SystemCardProps[] = [
  {
    number: "01",
    badge: "Start Here",
    badgeVariant: "start",
    problem: "Revenue Problem: Zero Discovery",
    headline: "Customers are searching for your business right now. They're finding your competitor.",
    description: "We get your business on Google — website, Business Profile, and Maps — fully set up and optimized. When someone in your city searches for what you sell, you appear before your competitors. Live in 24 hours.",
    features: [
      "Professional website built to convert visitors into paying customers",
      "Google Business Profile — set up, verified, and fully optimized",
      "Google Maps listing — directions, hours, photos, reviews live",
      "SEO foundation that compounds and grows your ranking monthly",
      "Lead capture on every channel — Messenger, WhatsApp, contact form",
      "🎁 Free professional logo — included for every client",
    ],
    result: "Customers find you and contact you every day",
    resultStat: "24hrs",
    ctaText: "Start with Get Found →",
    ctaTier: "Get Found — ₱3,999 one-time",
  },
  {
    number: "02",
    badge: "Unlocks Next",
    badgeVariant: "unlock",
    problem: "Revenue Problem: Leaking Leads",
    headline: "You're being found. But 67% of customers buy from whoever replies first — and that's not you.",
    description: "AI replies to every inquiry in seconds — 2AM, holidays, weekends. Every lead that doesn't respond gets followed up automatically for 3 days. No inquiry ever goes cold. No revenue leaks. Ever.",
    features: [
      "AI Messenger bot — replies in seconds, 24 hours a day, 7 days a week",
      "Automated 3-day follow-up — 80% of sales need multiple touchpoints",
      "Every lead saved — name, number, what they need — organized automatically",
      "3x Facebook posts per week — consistent presence builds trust and recall",
      "Google Review automation — your reputation builds itself after every transaction",
      "Monthly revenue report delivered directly to your WhatsApp",
    ],
    result: "Every inquiry becomes a paying customer — automatically",
    resultStat: "3x",
    ctaText: "Add Get Customers →",
    ctaTier: "Get Customers — ₱7,999 + ₱2,999/mo",
  },
  {
    number: "03",
    badge: "Unlocks Next",
    badgeVariant: "unlock",
    problem: "Revenue Problem: Manual Bottleneck",
    headline: "Revenue has hit a ceiling. That ceiling is you — every sale still needs you to close it.",
    description: "Advanced AI handles complex inquiries across Facebook, Instagram, and WhatsApp simultaneously. It qualifies leads by budget and timeline, books appointments, and follows up for 7 days. Your live dashboard shows exactly what's being generated — in real time.",
    features: [
      "Advanced AI — Facebook + Instagram + WhatsApp handled simultaneously",
      "Full 7-day lead nurture — cold, warm, and hot leads all handled differently",
      "Appointment booking — automated, confirmed, and reminded automatically",
      "Live revenue dashboard — every lead and peso tracked, updated daily",
      "Hot lead WhatsApp alerts — you only step in for your highest-value clients",
      "Local SEO — your Google ranking compounds and improves every month",
    ],
    result: "The AI sells. You deliver. Revenue grows without you.",
    resultStat: "7day",
    ctaText: "Add Get Sales →",
    ctaTier: "Get Sales — ₱14,999 + ₱7,999/mo",
  },
  {
    number: "04",
    badge: "Complete Machine",
    badgeVariant: "complete",
    problem: "Revenue Problem: Scale Ceiling",
    headline: "You built the business. Now it runs — and grows — completely without you.",
    description: "Every platform connected. Every customer touchpoint automated. Slow periods predicted and prevented before revenue drops. Competitors monitored monthly. A dedicated revenue partner optimizing everything weekly. This is not a service. This is a revenue machine.",
    features: [
      "One AI brain — website, Facebook, Instagram, WhatsApp, Google all unified",
      "Customer win-back — 30, 60, 90-day re-engagement launched automatically",
      "Predictive revenue — AI detects slow periods and launches promos before they hit",
      "Competitor intelligence — every move, price change, and review trend tracked monthly",
      "Dedicated revenue partner — weekly strategy calls, continuous optimization",
      "Full content production — daily social media, video, ads, complete marketing machine",
    ],
    result: "Customers acquired. Sales closed. Revenue growing always.",
    resultStat: "24/7",
    ctaText: "Join Waitlist →",
    ctaTier: "Get Automated — Coming Soon",
    isComingSoon: true,
  },
];

function Connector() {
  return (
    <div
      className="roadmap-connector"
      style={{
        height: "28px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingLeft: "0",
        marginBottom: "0",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0" }}>
        <div style={{ width: "20px", borderTop: "1px dashed rgba(232,184,75,0.2)" }} />
        <span
          style={{
            background: "rgba(232,184,75,0.06)",
            border: "1px solid rgba(232,184,75,0.15)",
            borderRadius: "40px",
            padding: "4px 12px",
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontWeight: 500,
            fontSize: "9px",
            color: "#e8b84b",
            letterSpacing: "1px",
            whiteSpace: "nowrap",
          }}
        >
          + Unlocks this system
        </span>
        <div style={{ width: "20px", borderTop: "1px dashed rgba(232,184,75,0.2)" }} />
      </div>
    </div>
  );
}

export default function SystemsRoadmap() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);
  const closingRef = useRef<HTMLDivElement>(null);

  const headInView = useInView(headRef, { once: true, amount: 0.2 });
  const closingInView = useInView(closingRef, { once: true, amount: 0.3 });

  function scrollToStart() {
    document.getElementById("start")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      id="systems"
      ref={sectionRef}
      className="roadmap-section"
      style={{
        background: "#0a0a0a",
        padding: "130px 0",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      {/* Section header */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 64px" }}>
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ textAlign: "center", marginBottom: "80px" }}
        >
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 500,
              fontSize: "0.6875rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#e8b84b",
              marginBottom: "16px",
            }}
          >
            The Revenue Machine
          </p>
          <h2
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 5vw, 3rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: "#ffffff",
              marginBottom: "20px",
            }}
          >
            Four Systems. One Complete Machine.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 300,
              fontSize: "16px",
              color: "#888480",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Each system builds on the last. Start with Get Found. Add layers as your business
            grows. End with a fully automated revenue machine.
          </p>
        </motion.div>
      </div>

      {/* Roadmap layout */}
      <div
        className="roadmap-layout"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 64px",
          display: "grid",
          gridTemplateColumns: "100px 1fr",
          gap: "0",
          alignItems: "stretch",
        }}
      >
        {/* Spine — desktop only */}
        <div className="roadmap-spine-col" style={{ position: "relative" }}>
          <RoadmapSpine
            sectionRef={sectionRef}
            card1Ref={card1Ref}
            card2Ref={card2Ref}
            card3Ref={card3Ref}
            card4Ref={card4Ref}
          />
        </div>

        {/* Cards column */}
        <div>
          <div ref={card1Ref}>
            <SystemCard {...systems[0]} />
          </div>
          <Connector />
          <div ref={card2Ref}>
            <SystemCard {...systems[1]} />
          </div>
          <Connector />
          <div ref={card3Ref}>
            <SystemCard {...systems[2]} />
          </div>
          <Connector />
          <div ref={card4Ref}>
            <SystemCard {...systems[3]} />
          </div>
        </div>
      </div>

      {/* Closing element */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 64px" }}>
        <motion.div
          ref={closingRef}
          initial={{ opacity: 0, y: 20 }}
          animate={closingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ textAlign: "center", marginTop: "48px" }}
        >
          <div
            style={{
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(232,184,75,0.15), transparent)",
              marginBottom: "32px",
            }}
          />
          <h3
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 700,
              fontSize: "clamp(18px, 2.5vw, 24px)",
              color: "#f0ece4",
              marginBottom: "12px",
            }}
          >
            This is the complete revenue machine.
          </h3>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 300,
              fontSize: "14px",
              color: "#888480",
              maxWidth: "440px",
              margin: "0 auto 56px",
              lineHeight: 1.7,
            }}
          >
            Most clients start with Get Found and upgrade naturally as results compound.
            Every tier builds on the last.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={scrollToStart}
              className="btn-primary"
              style={{ fontSize: "0.95rem", padding: "13px 28px" }}
            >
              Start with Get Found — ₱3,999 →
            </button>
            <a
              href="https://wa.me/639602104478"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              style={{ fontSize: "0.95rem", padding: "13px 28px" }}
            >
              Talk to us first →
            </a>
          </div>
          <p
            style={{
              marginTop: "16px",
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 300,
              fontSize: "13px",
              color: "#888480",
              cursor: "pointer",
            }}
            onClick={scrollToStart}
          >
            Not sure where to start? Answer 4 questions and we&apos;ll tell you.
          </p>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .roadmap-section { padding: 80px 0 !important; }
          .roadmap-layout {
            grid-template-columns: 1fr !important;
            padding: 0 24px !important;
          }
          .roadmap-spine-col { display: none !important; }
          .roadmap-section > div { padding: 0 24px !important; }
          .roadmap-connector { justify-content: center !important; }
        }
      `}</style>
    </section>
  );
}
