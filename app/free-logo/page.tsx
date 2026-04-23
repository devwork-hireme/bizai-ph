"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import type { LogoSubmission, LogoSubmissionResult } from "@/lib/types";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// ─── Helpers ────────────────────────────────────────────────────────────────

function TapCard({
  label,
  selected,
  onClick,
  children,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
  children?: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        padding: "14px 16px",
        background: selected ? "rgba(232,184,75,0.1)" : "#1a1a1a",
        border: selected
          ? "1px solid rgba(232,184,75,0.5)"
          : "1px solid rgba(255,255,255,0.08)",
        borderRadius: "10px",
        cursor: "pointer",
        color: selected ? "#e8b84b" : "rgba(255,255,255,0.65)",
        fontFamily: "var(--font-dm-sans), sans-serif",
        fontSize: "0.88rem",
        fontWeight: selected ? 600 : 400,
        transition: "all 0.2s ease",
        textAlign: "left",
        width: "100%",
      }}
    >
      {label}
      {children}
    </button>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontSize: "0.78rem",
        fontWeight: 700,
        color: "rgba(255,255,255,0.5)",
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        marginBottom: "10px",
        fontFamily: "var(--font-dm-sans), sans-serif",
      }}
    >
      {children}
    </p>
  );
}

function Input({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
  inputMode,
  note,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  note?: string;
}) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <FieldLabel>
        {label} {required && <span style={{ color: "#e8b84b" }}>*</span>}
      </FieldLabel>
      <input
        type={type}
        inputMode={inputMode}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: "100%",
          padding: "13px 16px",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "8px",
          color: "#ffffff",
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontSize: "0.95rem",
          outline: "none",
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(232,184,75,0.4)")}
        onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
      />
      {note && (
        <p
          style={{
            fontSize: "0.72rem",
            color: "rgba(255,255,255,0.3)",
            marginTop: "5px",
            fontFamily: "var(--font-dm-sans), sans-serif",
          }}
        >
          {note}
        </p>
      )}
    </div>
  );
}

function Textarea({
  label,
  value,
  onChange,
  placeholder,
  required,
  rows = 3,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
  rows?: number;
}) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <FieldLabel>
        {label} {required && <span style={{ color: "#e8b84b" }}>*</span>}
      </FieldLabel>
      <textarea
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: "100%",
          padding: "13px 16px",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "8px",
          color: "#ffffff",
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontSize: "0.95rem",
          outline: "none",
          resize: "vertical",
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(232,184,75,0.4)")}
        onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
      />
    </div>
  );
}

// ─── Progress indicator ────────────────────────────────────────────────────

function ProgressBar({ current }: { current: number }) {
  const steps = ["Business", "Style", "Brand", "Delivery"];
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0",
        marginBottom: "48px",
      }}
    >
      {steps.map((s, i) => (
        <div
          key={s}
          style={{ display: "flex", alignItems: "center", gap: "0" }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background:
                  i < current
                    ? "#3dba6e"
                    : i === current
                    ? "#e8b84b"
                    : "#222",
                border:
                  i < current
                    ? "none"
                    : i === current
                    ? "2px solid #e8b84b"
                    : "1px solid rgba(255,255,255,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.75rem",
                fontWeight: 700,
                color: i < current ? "#fff" : i === current ? "#0a0a0a" : "rgba(255,255,255,0.3)",
              }}
            >
              {i < current ? "✓" : i + 1}
            </div>
            <span
              style={{
                fontSize: "0.65rem",
                fontWeight: 600,
                color:
                  i === current
                    ? "#e8b84b"
                    : i < current
                    ? "#3dba6e"
                    : "rgba(255,255,255,0.25)",
                fontFamily: "var(--font-dm-sans), sans-serif",
                letterSpacing: "0.06em",
                whiteSpace: "nowrap",
              }}
            >
              {s}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div
              style={{
                width: "40px",
                height: "2px",
                background: i < current ? "#3dba6e" : "rgba(255,255,255,0.08)",
                margin: "0 4px",
                marginBottom: "22px",
                flexShrink: 0,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Step components ─────────────────────────────────────────────────────

const BIZ_TYPES = [
  { emoji: "💇", label: "Salon / Barbershop" },
  { emoji: "🍽️", label: "Restaurant / Food" },
  { emoji: "🏥", label: "Clinic / Medical" },
  { emoji: "🔧", label: "Repair Shop" },
  { emoji: "🛍️", label: "Retail Store" },
  { emoji: "📦", label: "Online Seller" },
  { emoji: "🎉", label: "Catering / Events" },
  { emoji: "💼", label: "Other Business" },
];

const BIZ_AGES = ["Just Starting", "1–3 Years", "3+ Years"];
const WEBSITE_STATUS = ["No Website", "Facebook Only", "Has Website"];

const COLORS = [
  "Black & Gold",
  "Rose Gold",
  "Navy Blue",
  "Forest Green",
  "Deep Red",
  "Purple & Gold",
  "Orange & Brown",
  "Teal & White",
];

const LOGO_FEELS = [
  { label: "Minimalist", sub: "Think: Apple" },
  { label: "Elegant/Luxury", sub: "Think: Chanel" },
  { label: "Bold & Strong", sub: "Think: FedEx" },
  { label: "Friendly", sub: "Think: Jollibee" },
  { label: "Classic/Traditional", sub: "Think: Rolex" },
  { label: "Playful", sub: "Think: Canva" },
];

const LOGO_TYPES = [
  "Text Only (Wordmark)",
  "Icon + Text (Most popular)",
  "Initials (Monogram)",
];

const TARGET_CUSTOMERS = ["👩 Young Women", "👨‍👩‍👧 Families", "💼 Professionals", "🌍 Everyone"];
const TAGLINE_CHOICES = ["Yes I have one", "Yes suggest one", "No tagline"];
const REFERRAL_SOURCES = [
  "Facebook post",
  "Facebook Group",
  "TikTok",
  "Instagram",
  "Friend or referral",
  "Google search",
  "Other",
];
const CHALLENGES = [
  "👥 Getting Customers",
  "🔍 Visible Online",
  "💬 Fast Replies",
  "⏰ No Time",
];

// ─── Main Page ─────────────────────────────────────────────────────────────

const EMPTY: LogoSubmission = {
  bizName: "",
  bizType: "",
  location: "",
  businessAge: "",
  hasWebsite: "",
  colorDirection: "",
  logoFeel: "",
  logoType: "",
  businessDescription: "",
  targetCustomers: "",
  taglineChoice: "",
  taglineText: "",
  additionalNotes: "",
  ownerName: "",
  whatsapp: "",
  email: "",
  referralSource: "",
  biggestChallenge: "",
};

export default function FreeLogoPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<LogoSubmission>(EMPTY);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<LogoSubmissionResult | null>(null);
  const [copied, setCopied] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  function set(key: keyof LogoSubmission, val: string) {
    setForm((prev) => ({ ...prev, [key]: val }));
  }

  function nextStep() {
    setStep((s) => s + 1);
    setTimeout(() => topRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
  }

  async function handleSubmit() {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/submit-logo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json()) as LogoSubmissionResult;
      setResult(data);
      setStep(4);
    } catch {
      // Graceful fallback
      setResult({
        brief: `BUSINESS: ${form.bizName}\nTYPE: ${form.bizType}\nLOCATION: ${form.location}`,
        salesIntel: {
          priority: "🟡 MEDIUM",
          tierToPitch: "Get Found",
          price: "₱3,999 one-time",
          pitchScript: "Your logo is ready. Let's get your business found on Google.",
          pitchAngle: "Get Found — visibility angle",
          approach: "Supportive",
          recommendedOffer: "Pitch Get Found — ₱3,999 one-time",
        },
      });
      setStep(4);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => topRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
    }
  }

  function copyBrief() {
    if (!result) return;
    navigator.clipboard.writeText(result.brief).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER ?? "639602104478";
  const waMsg = encodeURIComponent(
    `Hi BizAI PH! 👋 I just submitted my free logo request.\nBusiness: ${form.bizName}\nType: ${form.bizType} — ${form.location}\nStyle: ${form.logoFeel}\nColors: ${form.colorDirection}\nLooking forward to my free logo! 🎨`
  );

  const stepValid = [
    form.bizName && form.bizType && form.location,
    form.colorDirection && form.logoFeel && form.logoType,
    form.businessDescription,
    form.ownerName && form.whatsapp && form.email && form.biggestChallenge,
  ];

  return (
    <div
      style={{
        background: "#0a0a0a",
        minHeight: "100vh",
        paddingBottom: "80px",
      }}
    >
      <div ref={topRef} />

      {/* Hero */}
      <section
        style={{
          padding: "100px 24px 60px",
          textAlign: "center",
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(232,184,75,0.06) 0%, transparent 70%)",
        }}
      >
        <span
          style={{
            display: "inline-block",
            padding: "5px 16px",
            background: "rgba(61,186,110,0.1)",
            border: "1px solid rgba(61,186,110,0.2)",
            borderRadius: "100px",
            fontSize: "0.75rem",
            fontWeight: 700,
            color: "#3dba6e",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "20px",
            fontFamily: "var(--font-dm-sans), sans-serif",
          }}
        >
          100% Free — No Payment Required
        </span>
        <h1
          style={{
            fontSize: "clamp(2rem, 6vw, 3.2rem)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            color: "#ffffff",
            marginBottom: "16px",
            fontFamily: "var(--font-syne), sans-serif",
          }}
        >
          Get Your Business Logo{" "}
          <span style={{ color: "#e8b84b" }}>for Free.</span>
        </h1>
        <p
          style={{
            fontSize: "1.05rem",
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.75,
            maxWidth: "520px",
            margin: "0 auto 24px",
            fontFamily: "var(--font-dm-sans), sans-serif",
          }}
        >
          Professional logo designed for your negosyo. Tell us about your brand
          — we deliver to your WhatsApp within 24 hours.
        </p>
        <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
          {["✓ 100% Free", "✓ Delivered in 24 hours", "✓ Any Philippine business", "✓ Via WhatsApp"].map(
            (t) => (
              <span
                key={t}
                style={{
                  fontSize: "0.82rem",
                  color: "rgba(255,255,255,0.4)",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                }}
              >
                {t}
              </span>
            )
          )}
        </div>
      </section>

      {/* Form area */}
      <section style={{ padding: "0 24px" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          {step < 4 && <ProgressBar current={step} />}

          <AnimatePresence mode="wait">
            {/* ─── Step 0: Business ────────────────────────────────────── */}
            {step === 0 && (
              <motion.div
                key="step0"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -16 }}
              >
                <h2
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 800,
                    color: "#ffffff",
                    marginBottom: "28px",
                    fontFamily: "var(--font-syne), sans-serif",
                  }}
                >
                  Tell us about your negosyo.
                </h2>

                <Input
                  label="Business Name"
                  value={form.bizName}
                  onChange={(v) => set("bizName", v)}
                  placeholder="e.g. Maria's Kitchen"
                  required
                />

                <div style={{ marginBottom: "20px" }}>
                  <FieldLabel>
                    Business Type <span style={{ color: "#e8b84b" }}>*</span>
                  </FieldLabel>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "8px",
                    }}
                  >
                    {BIZ_TYPES.map((b) => (
                      <TapCard
                        key={b.label}
                        label={`${b.emoji} ${b.label}`}
                        selected={form.bizType === b.label}
                        onClick={() => set("bizType", b.label)}
                      />
                    ))}
                  </div>
                </div>

                <Input
                  label="Location"
                  value={form.location}
                  onChange={(v) => set("location", v)}
                  placeholder="e.g. Quezon City, Metro Manila"
                  required
                />

                <div style={{ marginBottom: "20px" }}>
                  <FieldLabel>How long in business?</FieldLabel>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    {BIZ_AGES.map((a) => (
                      <TapCard
                        key={a}
                        label={a}
                        selected={form.businessAge === a}
                        onClick={() => set("businessAge", a)}
                      />
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: "32px" }}>
                  <FieldLabel>Do you have a website?</FieldLabel>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    {WEBSITE_STATUS.map((w) => (
                      <TapCard
                        key={w}
                        label={w}
                        selected={form.hasWebsite === w}
                        onClick={() => set("hasWebsite", w)}
                      />
                    ))}
                  </div>
                </div>

                <button
                  onClick={nextStep}
                  disabled={!stepValid[0]}
                  className="btn-primary"
                  style={{
                    width: "100%",
                    padding: "15px",
                    fontSize: "1rem",
                    opacity: stepValid[0] ? 1 : 0.4,
                    cursor: stepValid[0] ? "pointer" : "not-allowed",
                  }}
                >
                  Continue → Your Logo Style
                </button>
              </motion.div>
            )}

            {/* ─── Step 1: Style ────────────────────────────────────────── */}
            {step === 1 && (
              <motion.div
                key="step1"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -16 }}
              >
                <h2
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 800,
                    color: "#ffffff",
                    marginBottom: "28px",
                    fontFamily: "var(--font-syne), sans-serif",
                  }}
                >
                  Choose your logo style.
                </h2>

                <div style={{ marginBottom: "24px" }}>
                  <FieldLabel>
                    Color Direction <span style={{ color: "#e8b84b" }}>*</span>
                  </FieldLabel>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "8px",
                    }}
                  >
                    {COLORS.map((c) => (
                      <TapCard
                        key={c}
                        label={c}
                        selected={form.colorDirection === c}
                        onClick={() => set("colorDirection", c)}
                      />
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: "24px" }}>
                  <FieldLabel>
                    Logo Feel <span style={{ color: "#e8b84b" }}>*</span>
                  </FieldLabel>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "8px",
                    }}
                  >
                    {LOGO_FEELS.map((f) => (
                      <button
                        key={f.label}
                        type="button"
                        onClick={() => set("logoFeel", f.label)}
                        style={{
                          padding: "14px 16px",
                          background:
                            form.logoFeel === f.label
                              ? "rgba(232,184,75,0.1)"
                              : "#1a1a1a",
                          border:
                            form.logoFeel === f.label
                              ? "1px solid rgba(232,184,75,0.5)"
                              : "1px solid rgba(255,255,255,0.08)",
                          borderRadius: "10px",
                          cursor: "pointer",
                          textAlign: "left",
                          transition: "all 0.2s ease",
                        }}
                      >
                        <p
                          style={{
                            fontSize: "0.88rem",
                            fontWeight: 600,
                            color:
                              form.logoFeel === f.label
                                ? "#e8b84b"
                                : "#ffffff",
                            margin: "0 0 2px",
                            fontFamily: "var(--font-dm-sans), sans-serif",
                          }}
                        >
                          {f.label}
                        </p>
                        <p
                          style={{
                            fontSize: "0.72rem",
                            color: "rgba(255,255,255,0.35)",
                            margin: 0,
                            fontFamily: "var(--font-dm-sans), sans-serif",
                          }}
                        >
                          {f.sub}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: "32px" }}>
                  <FieldLabel>
                    Logo Type <span style={{ color: "#e8b84b" }}>*</span>
                  </FieldLabel>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {LOGO_TYPES.map((t) => (
                      <TapCard
                        key={t}
                        label={t}
                        selected={form.logoType === t}
                        onClick={() => set("logoType", t)}
                      />
                    ))}
                  </div>
                </div>

                <div style={{ display: "flex", gap: "12px" }}>
                  <button
                    onClick={() => setStep(0)}
                    className="btn-ghost"
                    style={{ padding: "15px 24px", fontSize: "0.9rem" }}
                  >
                    ← Back
                  </button>
                  <button
                    onClick={nextStep}
                    disabled={!stepValid[1]}
                    className="btn-primary"
                    style={{
                      flex: 1,
                      padding: "15px",
                      fontSize: "1rem",
                      opacity: stepValid[1] ? 1 : 0.4,
                      cursor: stepValid[1] ? "pointer" : "not-allowed",
                    }}
                  >
                    Continue → Your Brand Story
                  </button>
                </div>
              </motion.div>
            )}

            {/* ─── Step 2: Brand ────────────────────────────────────────── */}
            {step === 2 && (
              <motion.div
                key="step2"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -16 }}
              >
                <h2
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 800,
                    color: "#ffffff",
                    marginBottom: "28px",
                    fontFamily: "var(--font-syne), sans-serif",
                  }}
                >
                  Tell us about your brand.
                </h2>

                <Textarea
                  label="What does your business do?"
                  value={form.businessDescription}
                  onChange={(v) => set("businessDescription", v)}
                  placeholder="e.g. We serve home-cooked Filipino meals for catering events and office orders in QC."
                  required
                />

                <div style={{ marginBottom: "20px" }}>
                  <FieldLabel>Who are your customers?</FieldLabel>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "8px",
                    }}
                  >
                    {TARGET_CUSTOMERS.map((c) => (
                      <TapCard
                        key={c}
                        label={c}
                        selected={form.targetCustomers === c}
                        onClick={() => set("targetCustomers", c)}
                      />
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <FieldLabel>Tagline?</FieldLabel>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {TAGLINE_CHOICES.map((t) => (
                      <TapCard
                        key={t}
                        label={t}
                        selected={form.taglineChoice === t}
                        onClick={() => set("taglineChoice", t)}
                      />
                    ))}
                  </div>
                </div>

                {form.taglineChoice === "Yes I have one" && (
                  <Input
                    label="Your tagline"
                    value={form.taglineText}
                    onChange={(v) => set("taglineText", v)}
                    placeholder="e.g. Luto ng puso, para sa pamilya"
                  />
                )}

                <Textarea
                  label="Additional notes"
                  value={form.additionalNotes}
                  onChange={(v) => set("additionalNotes", v)}
                  placeholder="Anything else we should know about your brand? (optional)"
                  rows={2}
                />

                <div style={{ display: "flex", gap: "12px" }}>
                  <button
                    onClick={() => setStep(1)}
                    className="btn-ghost"
                    style={{ padding: "15px 24px", fontSize: "0.9rem" }}
                  >
                    ← Back
                  </button>
                  <button
                    onClick={nextStep}
                    disabled={!stepValid[2]}
                    className="btn-primary"
                    style={{
                      flex: 1,
                      padding: "15px",
                      fontSize: "1rem",
                      opacity: stepValid[2] ? 1 : 0.4,
                      cursor: stepValid[2] ? "pointer" : "not-allowed",
                    }}
                  >
                    Continue → Delivery Details
                  </button>
                </div>
              </motion.div>
            )}

            {/* ─── Step 3: Delivery ─────────────────────────────────────── */}
            {step === 3 && (
              <motion.div
                key="step3"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -16 }}
              >
                <h2
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 800,
                    color: "#ffffff",
                    marginBottom: "28px",
                    fontFamily: "var(--font-syne), sans-serif",
                  }}
                >
                  Where do we send your logo?
                </h2>

                <Input
                  label="Full Name"
                  value={form.ownerName}
                  onChange={(v) => set("ownerName", v)}
                  placeholder="Your full name"
                  required
                />

                <Input
                  label="WhatsApp Number"
                  value={form.whatsapp}
                  onChange={(v) => set("whatsapp", v)}
                  placeholder="e.g. 09171234567"
                  type="tel"
                  inputMode="numeric"
                  required
                />

                <Input
                  label="Email Address"
                  value={form.email}
                  onChange={(v) => set("email", v)}
                  placeholder="your@email.com"
                  type="email"
                  required
                  note="For delivery confirmation."
                />

                <div style={{ marginBottom: "20px" }}>
                  <FieldLabel>How did you find BizAI PH?</FieldLabel>
                  <select
                    value={form.referralSource}
                    onChange={(e) => set("referralSource", e.target.value)}
                    style={{
                      width: "100%",
                      padding: "13px 16px",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "8px",
                      color: form.referralSource ? "#ffffff" : "rgba(255,255,255,0.3)",
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: "0.95rem",
                      outline: "none",
                      cursor: "pointer",
                      appearance: "none",
                    }}
                  >
                    <option value="" style={{ background: "#1a1a1a", color: "#fff" }}>
                      Select...
                    </option>
                    {REFERRAL_SOURCES.map((s) => (
                      <option
                        key={s}
                        value={s}
                        style={{ background: "#1a1a1a", color: "#fff" }}
                      >
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div style={{ marginBottom: "32px" }}>
                  <FieldLabel>
                    Biggest challenge right now?{" "}
                    <span style={{ color: "#e8b84b" }}>*</span>
                  </FieldLabel>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "8px",
                    }}
                  >
                    {CHALLENGES.map((c) => (
                      <TapCard
                        key={c}
                        label={c}
                        selected={form.biggestChallenge === c}
                        onClick={() => set("biggestChallenge", c)}
                      />
                    ))}
                  </div>
                </div>

                <div style={{ display: "flex", gap: "12px" }}>
                  <button
                    onClick={() => setStep(2)}
                    className="btn-ghost"
                    style={{ padding: "15px 24px", fontSize: "0.9rem" }}
                  >
                    ← Back
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting || !stepValid[3]}
                    className="btn-primary"
                    style={{
                      flex: 1,
                      padding: "15px",
                      fontSize: "1rem",
                      opacity: !isSubmitting && stepValid[3] ? 1 : 0.4,
                      cursor:
                        !isSubmitting && stepValid[3] ? "pointer" : "not-allowed",
                    }}
                  >
                    {isSubmitting ? "Submitting..." : "Send My Logo Request →"}
                  </button>
                </div>
              </motion.div>
            )}

            {/* ─── Step 4: Success ──────────────────────────────────────── */}
            {step === 4 && result && (
              <motion.div
                key="step4"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                style={{ textAlign: "center" }}
              >
                <div style={{ fontSize: "4rem", marginBottom: "16px" }}>🎨</div>
                <h2
                  style={{
                    fontSize: "1.8rem",
                    fontWeight: 800,
                    color: "#ffffff",
                    marginBottom: "12px",
                    fontFamily: "var(--font-syne), sans-serif",
                  }}
                >
                  Your logo request is in!
                </h2>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "rgba(255,255,255,0.55)",
                    marginBottom: "36px",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    lineHeight: 1.65,
                  }}
                >
                  We&apos;re designing your logo now. You&apos;ll receive it on
                  WhatsApp within 24 hours.
                </p>

                {/* Submission Summary */}
                <div
                  style={{
                    background: "linear-gradient(135deg, #1a1500, #111)",
                    border: "1px solid rgba(232,184,75,0.25)",
                    borderRadius: "14px",
                    overflow: "hidden",
                    marginBottom: "20px",
                    textAlign: "left",
                  }}
                >
                  <div
                    style={{
                      padding: "20px 24px",
                      borderBottom: "1px solid rgba(232,184,75,0.15)",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "#e8b84b",
                        marginBottom: "6px",
                        fontFamily: "var(--font-dm-sans), sans-serif",
                      }}
                    >
                      Your Logo Brief
                    </p>
                    <p
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: 800,
                        color: "#ffffff",
                        fontFamily: "var(--font-syne), sans-serif",
                        margin: "0 0 2px",
                      }}
                    >
                      {form.bizName}
                    </p>
                    <p
                      style={{
                        fontSize: "0.85rem",
                        color: "rgba(255,255,255,0.4)",
                        fontFamily: "var(--font-dm-sans), sans-serif",
                      }}
                    >
                      {form.bizType} · {form.location}
                    </p>
                  </div>
                  <div
                    style={{
                      padding: "20px 24px",
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "14px",
                    }}
                  >
                    {[
                      { label: "Owner", val: form.ownerName },
                      { label: "WhatsApp", val: form.whatsapp },
                      { label: "Business Age", val: form.businessAge || "—" },
                      { label: "Online Status", val: form.hasWebsite || "—" },
                      { label: "Logo Style", val: form.logoFeel || "—" },
                      { label: "Colors", val: form.colorDirection || "—" },
                    ].map(({ label, val }) => (
                      <div key={label}>
                        <p
                          style={{
                            fontSize: "0.62rem",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            color: "rgba(255,255,255,0.3)",
                            marginBottom: "2px",
                            fontFamily: "var(--font-dm-sans), sans-serif",
                          }}
                        >
                          {label}
                        </p>
                        <p
                          style={{
                            fontSize: "0.88rem",
                            color: "#ffffff",
                            fontFamily: "var(--font-dm-sans), sans-serif",
                          }}
                        >
                          {val}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Logo Brief box */}
                <div
                  style={{
                    background: "#111",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "12px",
                    padding: "20px 24px",
                    marginBottom: "20px",
                    textAlign: "left",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "12px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "#e8b84b",
                        fontFamily: "var(--font-dm-sans), sans-serif",
                      }}
                    >
                      Logo Design Brief — For Designer
                    </p>
                    <button
                      onClick={copyBrief}
                      style={{
                        padding: "5px 12px",
                        background: "rgba(232,184,75,0.1)",
                        border: "1px solid rgba(232,184,75,0.3)",
                        borderRadius: "6px",
                        color: "#e8b84b",
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        cursor: "pointer",
                        fontFamily: "var(--font-dm-sans), sans-serif",
                      }}
                    >
                      {copied ? "✓ Copied!" : "Copy Brief"}
                    </button>
                  </div>
                  <pre
                    style={{
                      fontFamily: "monospace",
                      fontSize: "0.8rem",
                      color: "#c8c4bc",
                      whiteSpace: "pre-wrap",
                      wordBreak: "break-word",
                      margin: 0,
                    }}
                  >
                    {result.brief}
                  </pre>
                </div>

                {/* Sales Intelligence */}
                <div
                  style={{
                    background: "#0a1a0a",
                    border: "1px solid #1a3a1a",
                    borderRadius: "12px",
                    padding: "20px 24px",
                    marginBottom: "20px",
                    textAlign: "left",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#3dba6e",
                      marginBottom: "14px",
                      fontFamily: "var(--font-dm-sans), sans-serif",
                    }}
                  >
                    🔒 Sales Intelligence — Internal Only
                  </p>
                  {[
                    {
                      label: "Online Status → Pitch",
                      val: `${result.salesIntel.priority} — ${result.salesIntel.tierToPitch} ${result.salesIntel.price}`,
                    },
                    {
                      label: "Challenge → Angle",
                      val: result.salesIntel.pitchAngle,
                    },
                    {
                      label: "Business Age → Approach",
                      val: result.salesIntel.approach,
                    },
                    {
                      label: "Recommended Action",
                      val: result.salesIntel.recommendedOffer,
                    },
                  ].map(({ label, val }) => (
                    <div
                      key={label}
                      style={{
                        padding: "10px 0",
                        borderBottom: "1px solid rgba(61,186,110,0.08)",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "0.65rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          color: "rgba(61,186,110,0.5)",
                          marginBottom: "3px",
                          fontFamily: "var(--font-dm-sans), sans-serif",
                        }}
                      >
                        {label}
                      </p>
                      <p
                        style={{
                          fontSize: "0.88rem",
                          color: "#c8c4bc",
                          fontFamily: "var(--font-dm-sans), sans-serif",
                        }}
                      >
                        {val}
                      </p>
                    </div>
                  ))}
                  <div style={{ marginTop: "14px" }}>
                    <p
                      style={{
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "rgba(61,186,110,0.5)",
                        marginBottom: "4px",
                        fontFamily: "var(--font-dm-sans), sans-serif",
                      }}
                    >
                      Pitch Script
                    </p>
                    <p
                      style={{
                        fontSize: "0.88rem",
                        color: "#e8b84b",
                        fontStyle: "italic",
                        fontFamily: "var(--font-dm-sans), sans-serif",
                      }}
                    >
                      &ldquo;{result.salesIntel.pitchScript}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Next steps */}
                <div
                  style={{
                    background: "#111",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "12px",
                    padding: "20px 24px",
                    marginBottom: "24px",
                    textAlign: "left",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.4)",
                      marginBottom: "14px",
                      fontFamily: "var(--font-dm-sans), sans-serif",
                    }}
                  >
                    What Happens Next
                  </p>
                  {[
                    "We review your brief and design within 24 hours.",
                    "We send your logo via WhatsApp — PNG + SVG ready to use everywhere.",
                    "We'll show you how to build a complete online presence — no obligation.",
                  ].map((step, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        gap: "12px",
                        alignItems: "flex-start",
                        marginBottom: "10px",
                      }}
                    >
                      <span
                        style={{
                          width: "22px",
                          height: "22px",
                          borderRadius: "50%",
                          background: "rgba(232,184,75,0.1)",
                          border: "1px solid rgba(232,184,75,0.2)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          color: "#e8b84b",
                          flexShrink: 0,
                        }}
                      >
                        {i + 1}
                      </span>
                      <p
                        style={{
                          fontSize: "0.88rem",
                          color: "rgba(255,255,255,0.55)",
                          lineHeight: 1.65,
                          fontFamily: "var(--font-dm-sans), sans-serif",
                        }}
                      >
                        {step}
                      </p>
                    </div>
                  ))}
                </div>

                {/* WhatsApp button */}
                <a
                  href={`https://wa.me/${waNumber}?text=${waMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    padding: "16px 24px",
                    background: "#25D366",
                    color: "#ffffff",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    borderRadius: "10px",
                    textDecoration: "none",
                    marginBottom: "12px",
                    boxShadow: "0 4px 16px rgba(37,211,102,0.35)",
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Message Us on WhatsApp →
                </a>
                <p
                  style={{
                    fontSize: "0.72rem",
                    color: "rgba(255,255,255,0.25)",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                  }}
                >
                  No spam. No pressure. Just your free logo.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
