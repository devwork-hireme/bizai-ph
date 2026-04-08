"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Services", href: "#pricing" },
  { label: "How It Works", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Why Us", href: "#why-us" },
  { label: "FAQ", href: "#faq" },
];

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docH > 0 ? (y / docH) * 100 : 0);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Scroll progress bar */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          top: "var(--announcement-bar-height)",
          left: 0,
          height: "2px",
          width: `${scrollProgress}%`,
          background: "linear-gradient(90deg, #F5C518 0%, #FFD94A 100%)",
          zIndex: 201,
          transition: "none",
          pointerEvents: "none",
        }}
      />

      <nav
        style={{
          position: "fixed",
          top: "var(--announcement-bar-height)",
          left: 0,
          right: 0,
          zIndex: 100,
          height: "72px",
          display: "flex",
          alignItems: "center",
          transition: "background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
          background: scrolled ? "rgba(10,22,40,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
          borderBottom: scrolled ? "1px solid rgba(245,197,24,0.12)" : "1px solid transparent",
          boxShadow: scrolled ? "0 1px 0 rgba(245,197,24,0.04)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            width: "100%",
            margin: "0 auto",
            padding: "0 48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          className="navbar-inner"
        >
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "baseline",
              gap: "1px",
              letterSpacing: "-0.03em",
              transition: "opacity 0.2s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
          >
            <span style={{ fontSize: "1.2rem", fontWeight: 800, color: "#FFFFFF", fontFamily: "var(--font-syne), sans-serif" }}>Biz</span>
            <span style={{ fontSize: "1.2rem", fontWeight: 800, color: "#F5C518", fontFamily: "var(--font-syne), sans-serif" }}>AI</span>
            <span style={{ fontSize: "0.9rem", fontWeight: 500, color: "rgba(255,255,255,0.45)", marginLeft: "1px", fontFamily: "var(--font-dm-sans), sans-serif" }}>PH</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex" style={{ gap: "4px", alignItems: "center" }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                style={{
                  color: "rgba(255,255,255,0.55)",
                  textDecoration: "none",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  padding: "8px 12px",
                  borderRadius: "6px",
                  transition: "color 0.2s ease, background 0.2s ease",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#FFFFFF";
                  e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.55)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
            className="hidden md:inline-flex"
            style={{
              padding: "9px 20px",
              background: "#F5C518",
              color: "#0A1628",
              fontSize: "0.85rem",
              fontWeight: 700,
              borderRadius: "8px",
              textDecoration: "none",
              fontFamily: "var(--font-dm-sans), sans-serif",
              boxShadow: "0 0 0 1px rgba(255,255,255,0.1) inset",
              transition: "background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#FFD94A";
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(245,197,24,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#F5C518";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 0 0 1px rgba(255,255,255,0.1) inset";
            }}
          >
            Book Free 30-Min Session
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                background: "#FFFFFF",
                transition: "transform 0.3s ease",
                transform: mobileOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                background: "#FFFFFF",
                transition: "opacity 0.3s ease",
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                background: "#FFFFFF",
                transition: "transform 0.3s ease",
                transform: mobileOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99,
              background: "rgba(10,22,40,0.98)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              display: "flex",
              flexDirection: "column",
              padding: "96px 32px 32px",
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); setMobileOpen(false); scrollTo(link.href); }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, ease: "easeOut" }}
                style={{
                  color: "#FFFFFF",
                  textDecoration: "none",
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  padding: "1.1rem 0",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  letterSpacing: "-0.02em",
                  fontFamily: "var(--font-syne), sans-serif",
                }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); setMobileOpen(false); scrollTo("#contact"); }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.06, ease: "easeOut" }}
              className="btn-primary"
              style={{ marginTop: "2rem", width: "100%", fontSize: "1rem" }}
            >
              Book Free 30-Min Session
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .navbar-inner { padding: 0 24px !important; }
        }
      `}</style>
    </>
  );
}
