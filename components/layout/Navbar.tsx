"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
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
          padding: "0 40px",
          transition: "background 0.3s ease, border-color 0.3s ease",
          background: scrolled ? "rgba(6,6,15,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        }}
      >
        <div style={{ maxWidth: "1200px", width: "100%", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            style={{ textDecoration: "none", display: "flex", alignItems: "baseline", gap: "2px", letterSpacing: "-0.03em" }}
          >
            <span style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--white)" }}>Biz</span>
            <span style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--blue-light)" }}>AI</span>
            <span style={{ fontSize: "0.8rem", fontWeight: 400, color: "var(--muted)", marginLeft: "1px" }}>PH</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex" style={{ gap: "2rem", alignItems: "center" }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                style={{ color: "var(--muted)", textDecoration: "none", fontSize: "0.875rem", fontWeight: 400, transition: "color 0.2s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="https://calendly.com/devwork2025-proton/free-ai-automation-audit"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex btn-primary"
            style={{ padding: "10px 22px", fontSize: "0.875rem" }}
          >
            Book Free Consultation
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", flexDirection: "column", gap: "5px" }}
          >
            <span style={{ display: "block", width: "22px", height: "2px", background: "var(--white)", transition: "transform 0.3s ease", transform: mobileOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
            <span style={{ display: "block", width: "22px", height: "2px", background: "var(--white)", transition: "opacity 0.3s ease", opacity: mobileOpen ? 0 : 1, marginTop: "4px" }} />
            <span style={{ display: "block", width: "22px", height: "2px", background: "var(--white)", transition: "transform 0.3s ease", transform: mobileOpen ? "rotate(-45deg) translate(5px, -5px)" : "none", marginTop: "4px" }} />
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
            style={{ position: "fixed", inset: 0, zIndex: 99, background: "var(--black)", display: "flex", flexDirection: "column", padding: "96px 32px 32px" }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); setMobileOpen(false); scrollTo(link.href); }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, ease: "easeOut" }}
                style={{ color: "var(--white)", textDecoration: "none", fontSize: "1.75rem", fontWeight: 700, padding: "1rem 0", borderBottom: "1px solid var(--border)", letterSpacing: "-0.02em" }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="https://calendly.com/devwork2025-proton/free-ai-automation-audit"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.06, ease: "easeOut" }}
              className="btn-primary"
              style={{ marginTop: "2rem", width: "100%", fontSize: "1rem" }}
            >
              Book Free Consultation
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
