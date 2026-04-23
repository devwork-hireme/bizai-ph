"use client";

const companyLinks = [
  { label: "How It Works", href: "#systems" },
  { label: "Our Systems", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

const systemLinks = [
  { label: "Get Found — ₱3,999", href: "#pricing" },
  { label: "Get Customers — ₱7,999 + ₱2,999/mo", href: "#pricing" },
  { label: "Get Sales — ₱14,999 + ₱7,999/mo", href: "#pricing" },
  { label: "Get Automated — Coming Soon", href: "#pricing" },
  { label: "Free Logo — /free-logo", href: "/free-logo", isGold: true, external: false },
];

const weHelpLinks = [
  "Salons & Barbershops",
  "Restaurants & Food",
  "Repair Shops",
  "Clinics & Medical",
  "Retail Stores",
  "Online Sellers",
];

function scrollTo(href: string) {
  if (href.startsWith("/")) return;
  const id = href.replace("#", "");
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="footer-outer"
      style={{
        background: "#060606",
        borderTop: "1px solid rgba(232,184,75,0.1)",
        padding: "80px 64px 40px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Radial glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "300px",
          background: "radial-gradient(ellipse, rgba(232,184,75,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
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
        {/* Grid */}
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.6fr 1fr 1.4fr 1fr",
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
                gap: "10px",
                marginBottom: "12px",
              }}
            >
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "7px",
                  background: "#e8b84b",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0a0a0a"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontWeight: 800,
                  fontSize: "1.05rem",
                  color: "#ffffff",
                  letterSpacing: "-0.02em",
                }}
              >
                BizAI PH
              </span>
            </div>

            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#e8b84b",
                marginBottom: "12px",
                fontFamily: "var(--font-dm-sans), sans-serif",
              }}
            >
              We Don&apos;t Do Marketing. We Build Revenue Machines.
            </p>

            <p
              style={{
                fontSize: "0.85rem",
                color: "rgba(255,255,255,0.35)",
                lineHeight: 1.75,
                marginBottom: "20px",
                maxWidth: "280px",
                fontFamily: "var(--font-dm-sans), sans-serif",
              }}
            >
              We build AI systems that turn Philippine businesses into automated
              revenue machines.
            </p>

            <p
              style={{
                fontSize: "0.8rem",
                color: "rgba(255,255,255,0.22)",
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
                fontSize: "0.68rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "#e8b84b",
                marginBottom: "20px",
                fontFamily: "var(--font-dm-sans), sans-serif",
              }}
            >
              Company
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {companyLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(l.href);
                  }}
                  style={{
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.35)",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.8)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.35)")
                  }
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Our Systems */}
          <div>
            <p
              style={{
                fontSize: "0.68rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "#e8b84b",
                marginBottom: "20px",
                fontFamily: "var(--font-dm-sans), sans-serif",
              }}
            >
              Our Systems
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {systemLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={
                    l.href.startsWith("#")
                      ? (e) => {
                          e.preventDefault();
                          scrollTo(l.href);
                        }
                      : undefined
                  }
                  style={{
                    fontSize: "0.875rem",
                    color: l.isGold ? "#e8b84b" : "rgba(255,255,255,0.35)",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontWeight: l.isGold ? 600 : 400,
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = l.isGold
                      ? "#ffd970"
                      : "rgba(255,255,255,0.8)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = l.isGold
                      ? "#e8b84b"
                      : "rgba(255,255,255,0.35)")
                  }
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* We Help */}
          <div>
            <p
              style={{
                fontSize: "0.68rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "#e8b84b",
                marginBottom: "20px",
                fontFamily: "var(--font-dm-sans), sans-serif",
              }}
            >
              We Help
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
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
            borderTop: "1px solid rgba(255,255,255,0.06)",
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
            We build revenue machines. You grow.
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
