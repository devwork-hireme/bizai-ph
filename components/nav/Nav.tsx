"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Systems", href: "#systems" },
  { label: "Pricing", href: "#pricing" },
  { label: "Results", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

function scrollTo(href: string) {
  const id = href.replace("#", "");
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    transition: "all 0.3s ease",
    padding: scrolled ? "14px 48px" : "22px 48px",
    background: scrolled
      ? "rgba(10,10,10,0.92)"
      : "transparent",
    backdropFilter: scrolled ? "blur(20px)" : "none",
    WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
    borderBottom: scrolled
      ? "1px solid rgba(232,184,75,0.15)"
      : "1px solid transparent",
  };

  return (
    <>
      <nav style={navStyle}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <a
            href="/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "10px",
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
                fontSize: "1rem",
                color: "#ffffff",
                letterSpacing: "-0.02em",
              }}
            >
              BizAI PH
            </span>
          </a>

          {/* Desktop links */}
          <div
            className="nav-links"
            style={{ display: "flex", alignItems: "center", gap: "36px" }}
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(l.href);
                }}
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.65)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#ffffff")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.65)")
                }
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <button
            className="nav-cta"
            onClick={() =>
              document
                .getElementById("start")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            style={{
              padding: "10px 22px",
              background: "#e8b84b",
              color: "#0a0a0a",
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 700,
              fontSize: "0.875rem",
              border: "none",
              borderRadius: "7px",
              cursor: "pointer",
              transition: "all 0.2s ease",
              boxShadow: "0 4px 16px rgba(232,184,75,0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#ffd970";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#e8b84b";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Start Free Session
          </button>

          {/* Mobile hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
              color: "#ffffff",
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(10,10,10,0.98)",
            zIndex: 999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
          }}
          onClick={() => setMenuOpen(false)}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(l.href);
                setMenuOpen(false);
              }}
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "#ffffff",
                textDecoration: "none",
                fontFamily: "var(--font-syne), sans-serif",
              }}
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => {
              document
                .getElementById("start")
                ?.scrollIntoView({ behavior: "smooth" });
              setMenuOpen(false);
            }}
            style={{
              marginTop: "1rem",
              padding: "14px 36px",
              background: "#e8b84b",
              color: "#0a0a0a",
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 700,
              fontSize: "1rem",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Start Free Session
          </button>
        </div>
      )}

      <style>{`
        .nav-links { display: flex !important; }
        .nav-cta { display: flex !important; }
        .nav-hamburger { display: none !important; }
        @media (max-width: 768px) {
          nav { padding: 16px 20px !important; }
          .nav-links { display: none !important; }
          .nav-cta { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
