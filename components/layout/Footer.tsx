"use client";

const companyLinks = [
  { label: "How It Works", href: "#process" },
  { label: "Our Offers", href: "#pricing" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

const offerLinks = [
  "Get Found — ₱3,999",
  "Starter — ₱7,999 + ₱2,999/mo",
  "Growth — ₱14,999 + ₱7,999/mo",
  "Scale — Coming Soon",
];

const weHelpLinks = [
  "Salons & Barbershops",
  "Restaurants & Food",
  "Repair Shops",
  "Clinics & Medical",
  "Catering Services",
  "Retail Stores",
];

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="footer-outer"
      style={{
        background: "#060E1C",
        borderTop: "1px solid rgba(26,58,107,0.6)",
        padding: "80px 64px 40px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle grid */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(26,58,107,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(26,58,107,0.2) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
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
        {/* Columns */}
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
            gap: "3rem",
            marginBottom: "4rem",
          }}
        >
          {/* Brand column */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                marginBottom: "1rem",
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
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
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
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#F5C518",
                marginBottom: "0.75rem",
                fontFamily: "var(--font-dm-sans), sans-serif",
              }}
            >
              More Customers. Less Work. Guaranteed.
            </p>

            <p
              style={{
                fontSize: "0.875rem",
                color: "rgba(255,255,255,0.35)",
                lineHeight: 1.75,
                marginBottom: "1.5rem",
                maxWidth: "260px",
                fontFamily: "var(--font-dm-sans), sans-serif",
              }}
            >
              We build the complete system that gets your business found,
              turns inquiries into customers, and grows your revenue
              automatically.
            </p>
            <p
              style={{
                fontSize: "0.8rem",
                color: "rgba(255,255,255,0.25)",
                fontFamily: "var(--font-dm-sans), sans-serif",
                lineHeight: 1.75,
              }}
            >
              Taguig City, Metro Manila
              <br />
              hello@bizaiph.com
            </p>
          </div>

          {/* Company */}
          <div>
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "#F5C518",
                marginBottom: "1.25rem",
                fontFamily: "var(--font-dm-sans), sans-serif",
              }}
            >
              Company
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              {companyLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  style={{
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.35)",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Our Offers */}
          <div>
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "#F5C518",
                marginBottom: "1.25rem",
                fontFamily: "var(--font-dm-sans), sans-serif",
              }}
            >
              Our Offers
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              {offerLinks.map((s) => (
                <span
                  key={s}
                  style={{
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.35)",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* We Help */}
          <div>
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "#F5C518",
                marginBottom: "1.25rem",
                fontFamily: "var(--font-dm-sans), sans-serif",
              }}
            >
              We Help
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              {weHelpLinks.map((ind) => (
                <span
                  key={ind}
                  style={{
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.35)",
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
            borderTop: "1px solid rgba(26,58,107,0.4)",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p
            style={{
              fontSize: "0.8rem",
              color: "rgba(255,255,255,0.2)",
              margin: 0,
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
          >
            © {year} BizAI PH. All rights reserved.
          </p>
          <p
            style={{
              fontSize: "0.8rem",
              color: "rgba(255,255,255,0.2)",
              margin: 0,
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
          >
            We build systems. You grow.
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
