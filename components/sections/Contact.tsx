"use client";

import { useState, useRef } from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

type FormData = {
  fullName: string;
  whatsapp: string;
  businessName: string;
  businessType: string;
  biggestChallenge: string;
  packageInterest: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const businessTypes = [
  { value: "", label: "Select your business type" },
  { value: "salon", label: "Salon / Barbershop" },
  { value: "restaurant", label: "Restaurant / Food Business" },
  { value: "repair", label: "Repair Shop" },
  { value: "clinic", label: "Clinic / Medical" },
  { value: "catering", label: "Catering" },
  { value: "retail", label: "Retail Store" },
  { value: "service", label: "Service Business" },
  { value: "other", label: "Other" },
];

const challengeOptions = [
  { value: "", label: "What's your biggest challenge?" },
  { value: "not-found", label: "Customers can't find me online" },
  { value: "after-hours", label: "Losing leads after business hours" },
  { value: "no-followup", label: "No time to follow up on inquiries" },
  { value: "no-reviews", label: "No Google reviews to build trust" },
  { value: "no-website", label: "I don't have a professional website" },
  { value: "need-customers", label: "I just need more customers" },
  { value: "other", label: "Something else" },
];

const packageOptions = [
  { value: "", label: "Which offer interests you?" },
  { value: "get-found", label: "Get Found — ₱3,999 one-time" },
  { value: "starter", label: "Starter — ₱7,999 setup + ₱2,999/mo" },
  { value: "growth", label: "Growth — ₱14,999 setup + ₱7,999/mo" },
  { value: "scale", label: "Scale — Coming Soon (Waitlist)" },
  { value: "unsure", label: "Not sure yet — help me decide" },
];

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.fullName.trim()) errors.fullName = "Full name is required";
  if (!data.whatsapp.trim()) errors.whatsapp = "WhatsApp number is required";
  if (!data.businessName.trim()) errors.businessName = "Business name is required";
  if (!data.businessType) errors.businessType = "Please select your business type";
  if (!data.biggestChallenge) errors.biggestChallenge = "Please select your biggest challenge";
  if (!data.packageInterest) errors.packageInterest = "Please select an offer";
  return errors;
}

export default function Contact() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-50px" });

  const [form, setForm] = useState<FormData>({
    fullName: "",
    whatsapp: "",
    businessName: "",
    businessType: "",
    biggestChallenge: "",
    packageInterest: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors = validate(form);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitting(true);
    setSubmitError("");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setSubmitError("Something went wrong. Please try again or WhatsApp us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  const fieldStyle = (name: keyof FormData) => ({
    ...{
      width: "100%",
      background: "rgba(255,255,255,0.06)",
      border: `1px solid ${errors[name] ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.12)"}`,
      borderRadius: "8px",
      padding: "13px 16px",
      color: "#FFFFFF",
      fontFamily: "var(--font-dm-sans), sans-serif",
      fontSize: "0.92rem",
      fontWeight: 400,
      outline: "none",
      transition: "border-color 0.2s ease",
      appearance: "none" as const,
      boxSizing: "border-box" as const,
    },
  });

  const selectWrapper = (name: keyof FormData) => (
    <span
      style={{
        position: "absolute",
        right: "12px",
        top: "50%",
        transform: "translateY(-50%)",
        color: "rgba(255,255,255,0.4)",
        pointerEvents: "none",
        fontSize: "0.75rem",
      }}
    >
      ▼
    </span>
  );

  return (
    <section
      id="contact"
      className="contact-section"
      style={{
        background: "var(--black)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
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
            "linear-gradient(rgba(245,197,24,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(245,197,24,0.02) 1px, transparent 1px)",
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
          style={{ textAlign: "center", marginBottom: "56px" }}
        >
          <p className="section-label">Get Started Free</p>
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
            Ready to Stop Losing{" "}
            <span style={{ color: "#F5C518" }}>
              Customers?
            </span>
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "rgba(255,255,255,0.55)",
              maxWidth: "560px",
              margin: "0 auto",
              lineHeight: 1.78,
              fontWeight: 400,
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
          >
            Tell us about your business. We&apos;ll confirm via WhatsApp within 24 hours,
            recommend the right offer, and show you exactly what results to expect.
            Free. No commitment. No technical knowledge needed.
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={headInView ? "visible" : "hidden"}
          custom={0.15}
          style={{
            maxWidth: "680px",
            margin: "0 auto",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.09)",
            borderRadius: "20px",
            padding: "48px",
          }}
          className="contact-card"
        >
          {submitted ? (
            <div style={{ textAlign: "center", padding: "32px 0" }}>
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  background: "rgba(34,197,94,0.1)",
                  border: "1px solid rgba(34,197,94,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                  color: "#22C55E",
                }}
              >
                <CheckCircle2 size={32} />
              </div>
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  marginBottom: "12px",
                  fontFamily: "var(--font-syne), sans-serif",
                }}
              >
                You&apos;re all set!
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.75,
                  maxWidth: "400px",
                  margin: "0 auto",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                }}
              >
                We&apos;ll confirm your session via WhatsApp within 24 hours. No spam,
                no sales pressure — just a helpful conversation about getting you
                more customers.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                  marginBottom: "1rem",
                }}
                className="form-grid-2"
              >
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    style={{
                      display: "block",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      color: "rgba(255,255,255,0.7)",
                      marginBottom: "6px",
                      fontFamily: "var(--font-dm-sans), sans-serif",
                    }}
                  >
                    Full Name <span style={{ color: "#F5C518" }}>*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Maria Santos"
                    value={form.fullName}
                    onChange={handleChange}
                    required
                    style={fieldStyle("fullName")}
                    onFocus={(e) => (e.target.style.borderColor = "#F5C518")}
                    onBlur={(e) =>
                      (e.target.style.borderColor = errors.fullName
                        ? "rgba(239,68,68,0.5)"
                        : "rgba(255,255,255,0.12)")
                    }
                  />
                  {errors.fullName && (
                    <p style={{ fontSize: "0.78rem", color: "#EF4444", marginTop: "4px", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* WhatsApp */}
                <div>
                  <label
                    htmlFor="whatsapp"
                    style={{
                      display: "block",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      color: "rgba(255,255,255,0.7)",
                      marginBottom: "6px",
                      fontFamily: "var(--font-dm-sans), sans-serif",
                    }}
                  >
                    WhatsApp Number <span style={{ color: "#F5C518" }}>*</span>
                  </label>
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    placeholder="09XX XXX XXXX"
                    value={form.whatsapp}
                    onChange={handleChange}
                    required
                    style={fieldStyle("whatsapp")}
                    onFocus={(e) => (e.target.style.borderColor = "#F5C518")}
                    onBlur={(e) =>
                      (e.target.style.borderColor = errors.whatsapp
                        ? "rgba(239,68,68,0.5)"
                        : "rgba(255,255,255,0.12)")
                    }
                  />
                  {errors.whatsapp && (
                    <p style={{ fontSize: "0.78rem", color: "#EF4444", marginTop: "4px", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                      {errors.whatsapp}
                    </p>
                  )}
                </div>
              </div>

              {/* Business Name */}
              <div style={{ marginBottom: "1rem" }}>
                <label
                  htmlFor="businessName"
                  style={{
                    display: "block",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.7)",
                    marginBottom: "6px",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                  }}
                >
                  Business Name <span style={{ color: "#F5C518" }}>*</span>
                </label>
                <input
                  id="businessName"
                  name="businessName"
                  type="text"
                  placeholder="Maria's Catering Services"
                  value={form.businessName}
                  onChange={handleChange}
                  required
                  style={fieldStyle("businessName")}
                  onFocus={(e) => (e.target.style.borderColor = "#F5C518")}
                  onBlur={(e) =>
                    (e.target.style.borderColor = errors.businessName
                      ? "rgba(239,68,68,0.5)"
                      : "rgba(255,255,255,0.12)")
                  }
                />
                {errors.businessName && (
                  <p style={{ fontSize: "0.78rem", color: "#EF4444", marginTop: "4px", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    {errors.businessName}
                  </p>
                )}
              </div>

              {/* Business Type */}
              <div style={{ marginBottom: "1rem" }}>
                <label
                  htmlFor="businessType"
                  style={{
                    display: "block",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.7)",
                    marginBottom: "6px",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                  }}
                >
                  Business Type <span style={{ color: "#F5C518" }}>*</span>
                </label>
                <div style={{ position: "relative" }}>
                  <select
                    id="businessType"
                    name="businessType"
                    value={form.businessType}
                    onChange={handleChange}
                    required
                    style={{ ...fieldStyle("businessType"), paddingRight: "36px", cursor: "pointer" }}
                    onFocus={(e) => (e.target.style.borderColor = "#F5C518")}
                    onBlur={(e) =>
                      (e.target.style.borderColor = errors.businessType
                        ? "rgba(239,68,68,0.5)"
                        : "rgba(255,255,255,0.12)")
                    }
                  >
                    {businessTypes.map((opt) => (
                      <option key={opt.value} value={opt.value} style={{ background: "#0A1628", color: "#FFFFFF" }}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  {selectWrapper("businessType")}
                </div>
                {errors.businessType && (
                  <p style={{ fontSize: "0.78rem", color: "#EF4444", marginTop: "4px", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    {errors.businessType}
                  </p>
                )}
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                  marginBottom: "1rem",
                }}
                className="form-grid-2"
              >
                {/* Biggest Challenge */}
                <div>
                  <label
                    htmlFor="biggestChallenge"
                    style={{
                      display: "block",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      color: "rgba(255,255,255,0.7)",
                      marginBottom: "6px",
                      fontFamily: "var(--font-dm-sans), sans-serif",
                    }}
                  >
                    Biggest Challenge <span style={{ color: "#F5C518" }}>*</span>
                  </label>
                  <div style={{ position: "relative" }}>
                    <select
                      id="biggestChallenge"
                      name="biggestChallenge"
                      value={form.biggestChallenge}
                      onChange={handleChange}
                      required
                      style={{ ...fieldStyle("biggestChallenge"), paddingRight: "36px", cursor: "pointer" }}
                      onFocus={(e) => (e.target.style.borderColor = "#F5C518")}
                      onBlur={(e) =>
                        (e.target.style.borderColor = errors.biggestChallenge
                          ? "rgba(239,68,68,0.5)"
                          : "rgba(255,255,255,0.12)")
                      }
                    >
                      {challengeOptions.map((opt) => (
                        <option key={opt.value} value={opt.value} style={{ background: "#0A1628", color: "#FFFFFF" }}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    {selectWrapper("biggestChallenge")}
                  </div>
                  {errors.biggestChallenge && (
                    <p style={{ fontSize: "0.78rem", color: "#EF4444", marginTop: "4px", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                      {errors.biggestChallenge}
                    </p>
                  )}
                </div>

                {/* Package Interest */}
                <div>
                  <label
                    htmlFor="packageInterest"
                    style={{
                      display: "block",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      color: "rgba(255,255,255,0.7)",
                      marginBottom: "6px",
                      fontFamily: "var(--font-dm-sans), sans-serif",
                    }}
                  >
                    Offer Interest <span style={{ color: "#F5C518" }}>*</span>
                  </label>
                  <div style={{ position: "relative" }}>
                    <select
                      id="packageInterest"
                      name="packageInterest"
                      value={form.packageInterest}
                      onChange={handleChange}
                      required
                      style={{ ...fieldStyle("packageInterest"), paddingRight: "36px", cursor: "pointer" }}
                      onFocus={(e) => (e.target.style.borderColor = "#F5C518")}
                      onBlur={(e) =>
                        (e.target.style.borderColor = errors.packageInterest
                          ? "rgba(239,68,68,0.5)"
                          : "rgba(255,255,255,0.12)")
                      }
                    >
                      {packageOptions.map((opt) => (
                        <option key={opt.value} value={opt.value} style={{ background: "#0A1628", color: "#FFFFFF" }}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    {selectWrapper("packageInterest")}
                  </div>
                  {errors.packageInterest && (
                    <p style={{ fontSize: "0.78rem", color: "#EF4444", marginTop: "4px", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                      {errors.packageInterest}
                    </p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div style={{ marginBottom: "1.5rem" }}>
                <label
                  htmlFor="message"
                  style={{
                    display: "block",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.7)",
                    marginBottom: "6px",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                  }}
                >
                  Anything else?{" "}
                  <span style={{ color: "rgba(255,255,255,0.35)", fontWeight: 400 }}>(optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Tell us more about your business or what you want to achieve."
                  value={form.message}
                  onChange={handleChange}
                  style={{
                    ...fieldStyle("message"),
                    resize: "vertical",
                    minHeight: "90px",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#F5C518")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
                />
              </div>

              {/* Submit error */}
              {submitError && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "12px 16px",
                    background: "rgba(239,68,68,0.08)",
                    border: "1px solid rgba(239,68,68,0.25)",
                    borderRadius: "8px",
                    marginBottom: "1rem",
                    fontSize: "0.875rem",
                    color: "#EF4444",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                  }}
                >
                  <AlertCircle size={16} style={{ flexShrink: 0 }} />
                  {submitError}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                style={{
                  width: "100%",
                  padding: "15px 24px",
                  background: submitting ? "rgba(245,197,24,0.6)" : "#F5C518",
                  color: "#0A1628",
                  border: "none",
                  borderRadius: "10px",
                  fontSize: "1rem",
                  fontWeight: 700,
                  cursor: submitting ? "not-allowed" : "pointer",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  transition: "all 0.2s ease",
                  boxShadow: "0 4px 20px rgba(245,197,24,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
                onMouseEnter={(e) => {
                  if (!submitting) {
                    e.currentTarget.style.background = "#FFD94A";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!submitting) {
                    e.currentTarget.style.background = "#F5C518";
                    e.currentTarget.style.transform = "translateY(0)";
                  }
                }}
              >
                {submitting ? "Submitting..." : "Get More Customers — Start Free"}
                {!submitting && <ArrowRight size={16} />}
              </button>

              <p
                style={{
                  textAlign: "center",
                  fontSize: "0.78rem",
                  color: "rgba(255,255,255,0.35)",
                  marginTop: "12px",
                  marginBottom: 0,
                  fontFamily: "var(--font-dm-sans), sans-serif",
                }}
              >
                We confirm via WhatsApp within 24 hours. No spam. No sales pressure.
              </p>
            </form>
          )}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-section { padding: 80px 24px !important; }
          .contact-card { padding: 32px 24px !important; }
        }
        @media (max-width: 560px) {
          .form-grid-2 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
