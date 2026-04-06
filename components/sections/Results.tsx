"use client";

import { useRef, useEffect, useState } from "react";
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

type Metric = {
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
};

type CaseStudy = {
  business: string;
  location: string;
  industry: string;
  result: string;
  quote: string;
  metrics: { label: string; value: string }[];
};

const metrics: Metric[] = [
  { value: 100, suffix: "+", label: "Businesses Automated" },
  { value: 20, suffix: "+ hrs", label: "Saved Per Business Weekly" },
  { value: 48, suffix: "h", label: "Average Time to Live" },
  { prefix: "₱", value: 0, suffix: " tech skills", label: "Required from You" },
];

const caseStudies: CaseStudy[] = [
  {
    business: "Aling Rosa's Kitchen",
    location: "Taguig City",
    industry: "Restaurant",
    result: "Response time: 4 hours → 30 seconds",
    quote:
      "Before, I would wake up to 40 unanswered messages and spend my whole morning replying. Now the bot handles everything overnight and I just see the confirmed orders in my sheet. Revenue went up 40% in the first 3 months.",
    metrics: [
      { label: "Response Time", value: "< 30 sec" },
      { label: "Orders Monthly", value: "+40%" },
      { label: "Admin Time Saved", value: "22 hrs/week" },
    ],
  },
  {
    business: "StylePH Salon",
    location: "Quezon City",
    industry: "Salon / Beauty",
    result: "No-shows: 30% → under 5%",
    quote:
      "The appointment bot changed our business. Customers book online, get a reminder the day before, and even reschedule themselves. We went from constantly empty slots to being fully booked 3 weeks ahead.",
    metrics: [
      { label: "No-Show Rate", value: "-83%" },
      { label: "Bookings", value: "Fully Booked" },
      { label: "Staff Admin Time", value: "-18 hrs/week" },
    ],
  },
  {
    business: "HomeFinder PH",
    location: "Makati / BGC",
    industry: "Real Estate",
    result: "50+ leads qualified weekly, zero manual effort",
    quote:
      "Our agents used to spend half the day just qualifying leads over Messenger. Now the bot does the initial qualification — budget, timeline, property type — and only sends us the serious buyers. Conversion is up and my team is actually selling.",
    metrics: [
      { label: "Leads Qualified Weekly", value: "50+" },
      { label: "Agent Time on Admin", value: "-60%" },
      { label: "Conversion Rate", value: "+35%" },
    ],
  },
];

function MetricCounter({ metric, active }: { metric: Metric; active: boolean }) {
  const [display, setDisplay] = useState(metric.value === 0 ? 0 : 0);
  const started = useRef(false);

  useEffect(() => {
    if (!active || started.current || metric.value === 0) return;
    started.current = true;
    const duration = 1600;
    const start = performance.now();
    function frame(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(ease * metric.value));
      if (progress < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }, [active, metric.value]);

  if (metric.value === 0) {
    return <span>{metric.prefix}{metric.suffix}</span>;
  }
  return <span>{metric.prefix}{display}{metric.suffix}</span>;
}

export default function Results() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-50px" });
  const metricsRef = useRef(null);
  const metricsInView = useInView(metricsRef, { once: true, margin: "-60px" });

  return (
    <section
      id="results"
      className="results-section"
      style={{
        background: "var(--deep)",
        borderTop: "1px solid var(--card-border)",
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
            "linear-gradient(rgba(82,130,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(82,130,255,0.03) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
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
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <p className="section-label">Client Results</p>
          <h2
            style={{
              fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 1.0,
              color: "var(--white)",
              marginBottom: "20px",
            }}
          >
            Proof Over{" "}
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
              Promises
            </span>
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--soft)",
              maxWidth: "540px",
              margin: "0 auto",
              lineHeight: 1.78,
              fontWeight: 300,
            }}
          >
            Real numbers from real Philippine businesses that automated with BizAI PH.
          </p>
        </motion.div>

        {/* Metrics strip */}
        <motion.div
          ref={metricsRef}
          variants={fadeUp}
          initial="hidden"
          animate={headInView ? "visible" : "hidden"}
          custom={0.1}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "0",
            background: "var(--card)",
            border: "1px solid var(--card-border)",
            borderRadius: "14px",
            overflow: "hidden",
            marginBottom: "56px",
          }}
          className="metrics-strip"
        >
          {metrics.map((m, i) => (
            <div
              key={m.label}
              style={{
                padding: "2rem 1.5rem",
                textAlign: "center",
                borderRight: i < metrics.length - 1 ? "1px solid var(--card-border)" : "none",
              }}
              className="metric-cell"
            >
              <div
                style={{
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  marginBottom: "0.4rem",
                  background: "linear-gradient(135deg, var(--white) 0%, var(--blue-light) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <MetricCounter metric={m} active={metricsInView} />
              </div>
              <p style={{ fontSize: "0.82rem", color: "var(--muted)", margin: 0, lineHeight: 1.4 }}>
                {m.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Case study cards */}
        <div
          className="case-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "var(--card-border)",
            borderRadius: "14px",
            overflow: "hidden",
          }}
        >
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.business}
              variants={fadeUp}
              initial="hidden"
              animate={headInView ? "visible" : "hidden"}
              custom={0.15 + 0.08 * i}
              style={{
                background: "var(--card)",
                padding: "36px 28px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                transition: "background 0.25s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--card-hover)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--card)";
              }}
            >
              {/* Business info */}
              <div>
                <div
                  style={{
                    display: "inline-block",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--blue-light)",
                    background: "var(--blue-pale)",
                    border: "1px solid var(--border)",
                    padding: "3px 10px",
                    borderRadius: "4px",
                    marginBottom: "0.75rem",
                  }}
                >
                  {cs.industry}
                </div>
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "var(--white)",
                    marginBottom: "0.2rem",
                  }}
                >
                  {cs.business}
                </h3>
                <p style={{ fontSize: "0.78rem", color: "var(--muted)", margin: 0 }}>
                  {cs.location}
                </p>
              </div>

              {/* Result headline */}
              <div
                style={{
                  padding: "0.75rem 1rem",
                  background: "rgba(0,229,160,0.05)",
                  border: "1px solid rgba(0,229,160,0.15)",
                  borderRadius: "8px",
                  borderLeft: "3px solid var(--green)",
                }}
              >
                <p
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "var(--green)",
                    margin: 0,
                    lineHeight: 1.4,
                  }}
                >
                  {cs.result}
                </p>
              </div>

              {/* Quote */}
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--soft)",
                  lineHeight: 1.72,
                  fontStyle: "italic",
                  margin: 0,
                  flex: 1,
                }}
              >
                &ldquo;{cs.quote}&rdquo;
              </p>

              {/* Metrics */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "0.5rem",
                  paddingTop: "1rem",
                  borderTop: "1px solid var(--border)",
                }}
              >
                {cs.metrics.map((m) => (
                  <div key={m.label} style={{ textAlign: "center" }}>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: 800,
                        color: "var(--white)",
                        marginBottom: "0.15rem",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {m.value}
                    </p>
                    <p style={{ fontSize: "0.68rem", color: "var(--muted)", margin: 0, lineHeight: 1.3 }}>
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Results CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={headInView ? "visible" : "hidden"}
          custom={0.35}
          style={{ marginTop: "48px", textAlign: "center" }}
        >
          <p
            style={{
              fontSize: "1.1rem",
              fontWeight: 700,
              color: "var(--white)",
              marginBottom: "20px",
            }}
          >
            Ready to see results like these in your business?
          </p>
          <a
            href="https://calendly.com/devwork2025-proton/free-ai-automation-audit"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book Your Free Audit
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .results-section { padding: 80px 24px !important; }
          .case-grid { grid-template-columns: 1fr !important; }
          .metrics-strip { grid-template-columns: 1fr 1fr !important; }
          .metric-cell { border-right: none !important; border-bottom: 1px solid var(--card-border); }
          .metric-cell:nth-child(2), .metric-cell:nth-child(4) { border-bottom: none; }
          .metric-cell:nth-child(odd) { border-right: 1px solid var(--card-border) !important; }
        }
        @media (max-width: 480px) {
          .metrics-strip { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
