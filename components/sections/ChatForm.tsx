"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { getRecommendation } from "@/lib/recommendations";
import type { Recommendation } from "@/lib/types";

const bubbleIn: Variants = {
  hidden: { opacity: 0, y: 8, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 400, damping: 30 } },
};

const userBubbleIn: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 400, damping: 30 } },
};

type Step = "intro" | "pain" | "bizType" | "rec" | "contact" | "final";
type ContactField = "name" | "whatsapp" | "email" | "bizName";

const PAIN_OPTIONS = [
  { emoji: "😴", label: "Customers can't find me on Google" },
  { emoji: "🌙", label: "I miss messages after business hours" },
  { emoji: "📉", label: "Leads disappear before I can follow up" },
  { emoji: "😩", label: "Everything is still manual — I do it all myself" },
  { emoji: "🤷", label: "All of the above" },
];

const BIZ_OPTIONS = [
  { emoji: "💇", label: "Salon / Barbershop" },
  { emoji: "🍽️", label: "Restaurant / Food Business" },
  { emoji: "🔧", label: "Repair Shop" },
  { emoji: "🏥", label: "Clinic / Medical" },
  { emoji: "🛍️", label: "Retail Store" },
  { emoji: "📦", label: "Online Seller" },
  { emoji: "🎉", label: "Catering / Events" },
  { emoji: "💼", label: "Something else" },
];

const CONTACT_SEQUENCE: ContactField[] = ["name", "whatsapp", "email", "bizName"];

const CONTACT_PROMPTS: Record<ContactField, string> = {
  name: "What's your full name?",
  whatsapp: "And your WhatsApp number?",
  email: "Your email address? (optional)",
  bizName: "Last one — what's your business name?",
};

const CONTACT_TYPES: Record<ContactField, string> = {
  name: "text",
  whatsapp: "tel",
  email: "email",
  bizName: "text",
};

const CONTACT_PLACEHOLDERS: Record<ContactField, string> = {
  name: "Your full name",
  whatsapp: "e.g. 09171234567",
  email: "your@email.com (optional)",
  bizName: "Your business name",
};

// ─── Avatar ────────────────────────────────────────────────────────────────

function Avatar() {
  return (
    <div
      style={{
        width: "36px",
        height: "36px",
        borderRadius: "50%",
        background: "#e8b84b",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        fontFamily: "var(--font-syne), sans-serif",
        fontWeight: 800,
        fontSize: "13px",
        color: "#0a0a0a",
      }}
    >
      BA
    </div>
  );
}

// ─── Typing indicator ──────────────────────────────────────────────────────

function TypingIndicator() {
  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "flex-end" }}>
      <Avatar />
      <div
        style={{
          background: "#222222",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: "16px 16px 16px 4px",
          padding: "14px 18px",
          display: "flex",
          gap: "5px",
          alignItems: "center",
        }}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: "#888480",
              animation: `bounce-dot 1.4s ${i * 0.2}s infinite`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

// ─── BizAI bubble ─────────────────────────────────────────────────────────

function BizAIBubble({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={bubbleIn}
      initial="hidden"
      animate="visible"
      style={{ display: "flex", gap: "10px", alignItems: "flex-end", maxWidth: "85%" }}
    >
      <Avatar />
      <div
        style={{
          background: "#222222",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: "16px 16px 16px 4px",
          padding: "14px 18px",
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontSize: "0.93rem",
          color: "#c8c4bc",
          lineHeight: 1.65,
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}

// ─── User bubble ──────────────────────────────────────────────────────────

function UserBubble({ text }: { text: string }) {
  return (
    <motion.div
      variants={userBubbleIn}
      initial="hidden"
      animate="visible"
      style={{ display: "flex", justifyContent: "flex-end" }}
    >
      <div
        style={{
          background: "rgba(232,184,75,0.12)",
          border: "1px solid rgba(232,184,75,0.2)",
          borderRadius: "16px 16px 4px 16px",
          padding: "12px 16px",
          color: "#e8b84b",
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontSize: "0.93rem",
          maxWidth: "80%",
        }}
      >
        {text}
      </div>
    </motion.div>
  );
}

// ─── Option button ────────────────────────────────────────────────────────

function OptionBtn({
  emoji,
  label,
  selected,
  onClick,
}: {
  emoji: string;
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "100%",
        minHeight: "52px",
        padding: "12px 16px",
        background: selected ? "rgba(232,184,75,0.1)" : "#1a1a1a",
        border: selected
          ? "1px solid rgba(232,184,75,0.5)"
          : "1px solid rgba(255,255,255,0.07)",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        cursor: "pointer",
        transition: "all 0.2s ease",
        textAlign: "left",
        fontFamily: "var(--font-dm-sans), sans-serif",
        fontSize: "0.9rem",
        color: selected ? "#e8b84b" : "rgba(255,255,255,0.7)",
        fontWeight: selected ? 600 : 400,
      }}
    >
      <span style={{ fontSize: "1.2rem", flexShrink: 0 }}>{emoji}</span>
      {label}
    </button>
  );
}

// ─── Recommendation card ──────────────────────────────────────────────────

function RecCard({ rec }: { rec: Recommendation }) {
  return (
    <div
      style={{
        background: "#1a1a1a",
        border: "1px solid rgba(232,184,75,0.3)",
        borderRadius: "12px",
        padding: "16px 18px",
        marginTop: "8px",
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
        Recommended For You
      </p>
      <p
        style={{
          fontSize: "1.2rem",
          fontWeight: 800,
          color: "#ffffff",
          marginBottom: "4px",
          fontFamily: "var(--font-syne), sans-serif",
        }}
      >
        {rec.tier}
      </p>
      <p
        style={{
          fontSize: "1rem",
          fontWeight: 700,
          color: "#e8b84b",
          marginBottom: "8px",
          fontFamily: "var(--font-syne), sans-serif",
        }}
      >
        {rec.price}
      </p>
      <p
        style={{
          fontSize: "0.85rem",
          color: "rgba(255,255,255,0.55)",
          lineHeight: 1.6,
          fontFamily: "var(--font-dm-sans), sans-serif",
        }}
      >
        {rec.reason}
      </p>
    </div>
  );
}

// ─── Main ChatForm ─────────────────────────────────────────────────────────

export default function ChatForm() {
  const [step, setStep] = useState<Step>("intro");
  const [isTyping, setIsTyping] = useState(false);
  const [pain, setPain] = useState("");
  const [bizType, setBizType] = useState("");
  const [rec, setRec] = useState<Recommendation | null>(null);
  const [contactIdx, setContactIdx] = useState(0);
  const [contactVals, setContactVals] = useState<Record<ContactField, string>>({
    name: "",
    whatsapp: "",
    email: "",
    bizName: "",
  });
  const [currentInput, setCurrentInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [progress, setProgress] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  function scrollDown() {
    setTimeout(() => {
      scrollRef.current?.scrollTo({ top: 9999, behavior: "smooth" });
    }, 100);
  }

  function showTypingThen(delay: number, cb: () => void) {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      cb();
      scrollDown();
    }, delay);
  }

  function handleStart() {
    setProgress(25);
    showTypingThen(900, () => setStep("pain"));
  }

  function handlePain(label: string) {
    setPain(label);
    setProgress(50);
    showTypingThen(900, () => setStep("bizType"));
  }

  function handleBizType(label: string) {
    setBizType(label);
    const recommendation = getRecommendation(pain);
    setRec(recommendation);
    setProgress(75);
    showTypingThen(1000, () => setStep("rec"));
  }

  function handleRecYes() {
    setProgress(88);
    showTypingThen(800, () => {
      setStep("contact");
      setContactIdx(0);
    });
  }

  function handleRecNo() {
    // Reset to show all options — just go back to pain step
    setStep("pain");
    setPain("");
    setBizType("");
    setRec(null);
    setProgress(25);
    scrollDown();
  }

  function handleContactSubmit() {
    const field = CONTACT_SEQUENCE[contactIdx];
    if (!currentInput.trim() && field !== "email") return;

    setContactVals((prev) => ({ ...prev, [field]: currentInput.trim() }));
    setCurrentInput("");

    if (contactIdx < CONTACT_SEQUENCE.length - 1) {
      const next = contactIdx + 1;
      showTypingThen(700, () => setContactIdx(next));
    } else {
      // All contact fields done — use updated values inline
      const finalVals = { ...contactVals, [field]: currentInput.trim() };
      submitLead(finalVals);
    }
  }

  async function submitLead(vals: Record<ContactField, string>) {
    setIsSubmitting(true);
    try {
      await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: vals.name,
          whatsapp: vals.whatsapp,
          email: vals.email || undefined,
          businessName: vals.bizName,
          pain,
          businessType: bizType,
          recommendedTier: rec?.tier ?? "",
          source: "homepage_form",
        }),
      });
    } catch {
      // Graceful — still show success
    } finally {
      setIsSubmitting(false);
      setProgress(100);
      showTypingThen(800, () => setStep("final"));
    }
  }

  const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER ?? "639602104478";
  const waMessage = encodeURIComponent(
    `Hi BizAI PH! 👋\nMy name is ${contactVals.name} and I run ${contactVals.bizName}.\nMy biggest challenge: ${pain}\nBusiness type: ${bizType}\nRecommended system: ${rec?.tier ?? ""}\nI'm ready to start my free session.`
  );

  return (
    <section
      id="start"
      style={{
        background: "#0a0a0a",
        padding: "100px 64px",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div style={{ maxWidth: "580px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <p className="section-label">Start Your Free Session</p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "#ffffff",
              fontFamily: "var(--font-syne), sans-serif",
            }}
          >
            Find Your{" "}
            <span style={{ color: "#e8b84b" }}>Revenue Machine</span>
          </h2>
        </div>

        {/* Chat container */}
        <div
          style={{
            background: "#181818",
            border: "1px solid rgba(232,184,75,0.2)",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          {/* Progress bar */}
          <div
            style={{
              height: "3px",
              background: "rgba(255,255,255,0.06)",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                height: "100%",
                width: `${progress}%`,
                background: "linear-gradient(90deg, #e8b84b, #ffd970)",
                transition: "width 0.5s ease",
                borderRadius: "0 2px 2px 0",
              }}
            />
          </div>

          {/* Chat header */}
          <div
            style={{
              padding: "14px 20px",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Avatar />
            <div>
              <p
                style={{
                  fontSize: "0.88rem",
                  fontWeight: 700,
                  color: "#ffffff",
                  margin: 0,
                  fontFamily: "var(--font-syne), sans-serif",
                }}
              >
                BizAI PH
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#3dba6e",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: "0.72rem",
                    color: "rgba(255,255,255,0.4)",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                  }}
                >
                  Revenue Machine Advisor
                </span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            style={{
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              maxHeight: "480px",
              overflowY: "auto",
            }}
          >
            {/* Intro */}
            <BizAIBubble>
              Hi! 👋 I&apos;m going to help you find the right revenue machine
              for your business.
            </BizAIBubble>
            <BizAIBubble>Just 4 quick questions. Ready?</BizAIBubble>

            {step === "intro" && (
              <motion.div variants={bubbleIn} initial="hidden" animate="visible">
                <button
                  onClick={handleStart}
                  className="btn-primary"
                  style={{
                    fontSize: "0.95rem",
                    padding: "12px 28px",
                    marginTop: "4px",
                  }}
                >
                  Let&apos;s Go →
                </button>
              </motion.div>
            )}

            {/* Pain step */}
            {(step === "pain" ||
              step === "bizType" ||
              step === "rec" ||
              step === "contact" ||
              step === "final") && (
              <>
                {pain && <UserBubble text={pain} />}
                <BizAIBubble>
                  What&apos;s your biggest problem right now with your business?
                </BizAIBubble>
              </>
            )}

            {step === "pain" && !isTyping && (
              <motion.div
                variants={bubbleIn}
                initial="hidden"
                animate="visible"
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                {PAIN_OPTIONS.map((o) => (
                  <OptionBtn
                    key={o.label}
                    emoji={o.emoji}
                    label={o.label}
                    selected={pain === o.label}
                    onClick={() => handlePain(o.label)}
                  />
                ))}
              </motion.div>
            )}

            {/* BizType step */}
            {(step === "bizType" ||
              step === "rec" ||
              step === "contact" ||
              step === "final") && (
              <>
                {bizType && <UserBubble text={bizType} />}
                <BizAIBubble>
                  Got it. What kind of business do you have?
                </BizAIBubble>
              </>
            )}

            {step === "bizType" && !isTyping && (
              <motion.div
                variants={bubbleIn}
                initial="hidden"
                animate="visible"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "8px",
                }}
              >
                {BIZ_OPTIONS.map((o) => (
                  <OptionBtn
                    key={o.label}
                    emoji={o.emoji}
                    label={o.label}
                    selected={bizType === o.label}
                    onClick={() => handleBizType(o.label)}
                  />
                ))}
              </motion.div>
            )}

            {/* Recommendation step */}
            {(step === "rec" || step === "contact" || step === "final") &&
              rec && (
                <>
                  <BizAIBubble>
                    <div>
                      <p style={{ margin: "0 0 4px" }}>
                        Perfect. Here&apos;s what I recommend for you:
                      </p>
                      <RecCard rec={rec} />
                    </div>
                  </BizAIBubble>
                  <BizAIBubble>
                    Does this look right for you?
                  </BizAIBubble>
                </>
              )}

            {step === "rec" && !isTyping && (
              <motion.div
                variants={bubbleIn}
                initial="hidden"
                animate="visible"
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <OptionBtn
                  emoji="✅"
                  label="Yes, this is what I need"
                  selected={false}
                  onClick={handleRecYes}
                />
                <OptionBtn
                  emoji="🔍"
                  label="Show me other options"
                  selected={false}
                  onClick={handleRecNo}
                />
              </motion.div>
            )}

            {/* Contact step */}
            {(step === "contact" || step === "final") && (
              <BizAIBubble>
                Almost there! Where should we reach you?
              </BizAIBubble>
            )}

            {step === "contact" && !isTyping &&
              CONTACT_SEQUENCE.slice(0, contactIdx + 1).map((field, idx) => (
                <div key={field}>
                  {idx > 0 && contactVals[CONTACT_SEQUENCE[idx - 1]] && (
                    <UserBubble text={contactVals[CONTACT_SEQUENCE[idx - 1]]} />
                  )}
                  <BizAIBubble>{CONTACT_PROMPTS[field]}</BizAIBubble>
                  {idx === contactIdx && (
                    <motion.div
                      variants={bubbleIn}
                      initial="hidden"
                      animate="visible"
                      style={{
                        display: "flex",
                        gap: "8px",
                        marginTop: "4px",
                      }}
                    >
                      <input
                        autoFocus
                        type={CONTACT_TYPES[field]}
                        inputMode={field === "whatsapp" ? "numeric" : undefined}
                        placeholder={CONTACT_PLACEHOLDERS[field]}
                        value={currentInput}
                        onChange={(e) => setCurrentInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") handleContactSubmit();
                        }}
                        style={{
                          flex: 1,
                          padding: "12px 16px",
                          background: "#222222",
                          border: "1px solid rgba(255,255,255,0.1)",
                          borderRadius: "10px",
                          color: "#ffffff",
                          fontFamily: "var(--font-dm-sans), sans-serif",
                          fontSize: "0.93rem",
                          outline: "none",
                          transition: "border-color 0.2s ease",
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor =
                            "rgba(232,184,75,0.4)";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor =
                            "rgba(255,255,255,0.1)";
                        }}
                      />
                      <button
                        onClick={handleContactSubmit}
                        disabled={isSubmitting}
                        style={{
                          padding: "12px 18px",
                          background: "#e8b84b",
                          border: "none",
                          borderRadius: "10px",
                          color: "#0a0a0a",
                          fontWeight: 700,
                          cursor: "pointer",
                          fontSize: "0.9rem",
                          fontFamily: "var(--font-dm-sans), sans-serif",
                          flexShrink: 0,
                          opacity: isSubmitting ? 0.7 : 1,
                        }}
                      >
                        {isSubmitting ? "..." : "→"}
                      </button>
                    </motion.div>
                  )}
                </div>
              ))}

            {/* Final step */}
            {step === "final" && (
              <>
                <BizAIBubble>
                  🎉 You&apos;re all set, {contactVals.name || "friend"}!
                </BizAIBubble>
                <BizAIBubble>
                  We&apos;ll reach out within 24 hours. Tap below to connect on
                  WhatsApp.
                </BizAIBubble>
                <motion.div
                  variants={bubbleIn}
                  initial="hidden"
                  animate="visible"
                  style={{ display: "flex", flexDirection: "column", gap: "10px" }}
                >
                  <a
                    href={`https://wa.me/${waNumber}?text=${waMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                      padding: "15px 24px",
                      background: "#25D366",
                      color: "#ffffff",
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      borderRadius: "10px",
                      textDecoration: "none",
                      boxShadow: "0 4px 16px rgba(37,211,102,0.35)",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Talk to Us on WhatsApp →
                  </a>
                  <p
                    style={{
                      textAlign: "center",
                      fontSize: "0.72rem",
                      color: "rgba(255,255,255,0.3)",
                      fontFamily: "var(--font-dm-sans), sans-serif",
                    }}
                  >
                    No spam. No pressure. Just results.
                  </p>
                </motion.div>
              </>
            )}

            {/* Typing indicator */}
            <AnimatePresence>
              {isTyping && (
                <motion.div
                  key="typing"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <TypingIndicator />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #start { padding: 80px 20px !important; }
        }
      `}</style>
    </section>
  );
}
