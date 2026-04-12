"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Services Overview", href: "/services" },
      { label: "Industries Served", href: "/industries" },
      { label: "Resources", href: "/resources" },
    ],
  },
  { label: "Pay Invoice", href: "/pay-invoice" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropdownOpen(true);
  };
  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 180);
  };

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: "80px",
        display: "flex",
        alignItems: "center",
        transition: "background 0.3s ease, border-color 0.3s ease",
        background: scrolled ? "rgba(11,11,13,0.97)" : "rgba(11,11,13,0.72)",
        backdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
      }}
    >
      <div className="bx-container" style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px" }}>
        {/* Brand */}
        <Link
          href="/"
          style={{ display: "inline-flex", alignItems: "center", gap: "14px", textDecoration: "none", flexShrink: 0 }}
          aria-label="BlockXAI Home"
        >
          <span style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "12px",
            padding: "8px 14px",
          }}>
            <Image
              src="/logo-white.png"
              alt="BlockXAI"
              width={90}
              height={24}
              style={{ height: "24px", width: "auto", objectFit: "contain" }}
              priority
            />
          </span>
          <span style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
            <strong style={{
              color: "white",
              fontSize: "13px",
              fontWeight: 800,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              lineHeight: 1.2,
            }}>
              BlockXAI Limited
            </strong>
            <span style={{
              color: "rgba(255,255,255,0.52)",
              fontSize: "10px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontWeight: 700,
            }}>
              Enterprise Blockchain &amp; AI
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "4px" }} aria-label="Primary navigation" className="hidden-mobile">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div
                key={link.label}
                style={{ position: "relative" }}
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              >
                <button
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "10px 14px",
                    borderRadius: "999px",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.78)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    transition: "color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "white";
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.78)";
                    (e.currentTarget as HTMLElement).style.background = "none";
                  }}
                >
                  {link.label}
                  <ChevronDown size={12} style={{ transition: "transform 0.2s", transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
                </button>
                <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
                    style={{
                      position: "absolute",
                      top: "calc(100% + 8px)",
                      left: "0",
                      minWidth: "240px",
                      background: "#17181d",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "16px",
                      padding: "10px",
                      boxShadow: "0 24px 56px rgba(0,0,0,0.4)",
                      display: "grid",
                      gap: "6px",
                    }}
                    onMouseEnter={openDropdown}
                    onMouseLeave={closeDropdown}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setDropdownOpen(false)}
                        style={{
                          display: "block",
                          padding: "12px 16px",
                          borderRadius: "10px",
                          color: "white",
                          fontSize: "13px",
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          textDecoration: "none",
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.04)",
                          transition: "background 0.18s, border-color 0.18s",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.background = "rgba(196,30,58,0.1)";
                          (e.currentTarget as HTMLElement).style.borderColor = "rgba(196,30,58,0.24)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                          (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.04)";
                        }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "10px 14px",
                  borderRadius: "999px",
                  fontSize: "14px",
                  fontWeight: isActive(link.href) ? 700 : 600,
                  color: isActive(link.href) ? "white" : "rgba(255,255,255,0.78)",
                  textDecoration: "none",
                  background: isActive(link.href) ? "rgba(255,255,255,0.07)" : "none",
                  transition: "color 0.2s, background 0.2s",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "white";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = isActive(link.href) ? "white" : "rgba(255,255,255,0.78)";
                  (e.currentTarget as HTMLElement).style.background = isActive(link.href) ? "rgba(255,255,255,0.07)" : "none";
                }}
              >
                {link.label}
                {isActive(link.href) && (
                  <motion.span
                    layoutId="nav-active-pill"
                    style={{
                      position: "absolute",
                      bottom: "6px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "16px",
                      height: "2px",
                      background: "#C41E3A",
                      borderRadius: "999px",
                    }}
                  />
                )}
              </Link>
            )
          )}
        </nav>

        {/* Mobile toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: 0 }}>
          {/* Mobile hamburger */}
          <button
            className="show-mobile"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
            style={{
              display: "none",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "10px",
              padding: "10px",
              color: "white",
              cursor: "pointer",
            }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
          style={{
          position: "fixed",
          inset: "80px 0 0 0",
          background: "#0b0b0d",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          overflowY: "auto",
        }}>
          {NAV_LINKS.map((link, i) => (
            <div key={link.label}>
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05, duration: 0.22 }}
              >
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "block",
                  padding: "16px 20px",
                  color: isActive(link.href) ? "white" : "rgba(255,255,255,0.88)",
                  fontSize: "15px",
                  fontWeight: 700,
                  textDecoration: "none",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  border: isActive(link.href) ? "1px solid rgba(196,30,58,0.24)" : "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "12px",
                  background: isActive(link.href) ? "rgba(196,30,58,0.08)" : "rgba(255,255,255,0.03)",
                }}
              >
                {link.label}
              </Link>
              </motion.div>
              {link.children && (
                <div style={{ paddingLeft: "16px", paddingTop: "6px", display: "grid", gap: "6px" }}>
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      style={{
                        display: "block",
                        padding: "12px 16px",
                        color: "rgba(255,255,255,0.72)",
                        fontSize: "13px",
                        fontWeight: 600,
                        textDecoration: "none",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        borderLeft: "2px solid #C41E3A",
                        paddingLeft: "16px",
                      }}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            style={{
              display: "block",
              padding: "18px",
              textAlign: "center",
              background: "#C41E3A",
              color: "white",
              fontSize: "15px",
              fontWeight: 800,
              textDecoration: "none",
              borderRadius: "12px",
              marginTop: "8px",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            Get Started Today
          </Link>
        </motion.div>
      )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </motion.header>
  );
}
