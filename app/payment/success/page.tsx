"use client";

import { useEffect, useRef } from "react";

export default function PaymentSuccess() {
  const notified = useRef(false);

  useEffect(() => {
    if (notified.current) return;
    notified.current = true;
    fetch("/api/payment/notify", { method: "POST" }).catch(() => {});
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--black)",
        padding: "2rem 1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: "520px",
          width: "100%",
          textAlign: "center",
        }}
      >
        {/* Check icon */}
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: "rgba(0,229,160,0.1)",
            border: "2px solid rgba(0,229,160,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 28px",
            color: "var(--green)",
          }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            color: "var(--white)",
            marginBottom: "1rem",
            lineHeight: 1.1,
          }}
        >
          Payment Successful
        </h1>

        {/* Body */}
        <p
          style={{
            fontSize: "0.975rem",
            color: "var(--soft)",
            lineHeight: 1.78,
            marginBottom: "2.5rem",
            fontWeight: 300,
          }}
        >
          Thank you for choosing BizAI PH. We have received your payment and
          will contact you within 24 hours to begin your automation setup.
          <br />
          <br />
          Check your email for payment confirmation.
        </p>

        {/* Confirmation card */}
        <div
          style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "12px",
            padding: "1.25rem 1.5rem",
            marginBottom: "2rem",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "8px",
              background: "var(--blue-pale)",
              border: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              color: "var(--blue-light)",
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          <p
            style={{
              fontSize: "0.875rem",
              color: "var(--soft)",
              margin: 0,
              textAlign: "left",
              lineHeight: 1.55,
            }}
          >
            Our team will reach out to you within <strong style={{ color: "var(--white)" }}>24 hours</strong> on
            Messenger or by email to kick off your automation setup.
          </p>
        </div>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a href="/" className="btn-primary">
            Go Back to Homepage
          </a>
          <a
            href="https://facebook.com/bizaiph"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            Follow us on Facebook
          </a>
        </div>

        {/* BizAI PH wordmark */}
        <div
          style={{
            marginTop: "3rem",
            display: "flex",
            alignItems: "baseline",
            justifyContent: "center",
            gap: "2px",
            letterSpacing: "-0.03em",
          }}
        >
          <span style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--white)" }}>Biz</span>
          <span style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--blue-light)" }}>AI</span>
          <span style={{ fontSize: "0.7rem", fontWeight: 400, color: "var(--muted)", marginLeft: "1px" }}>PH</span>
        </div>
      </div>
    </main>
  );
}
