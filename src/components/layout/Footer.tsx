"use client";

import Link from "next/link";
import Image from "next/image";

const FOOTER_LINKS = {
  Services: [
    { label: "Blockchain Consulting", href: "/services#blockchain" },
    { label: "Web3 Solutions", href: "/services#web3" },
    { label: "Crypto Services", href: "/services#crypto" },
    { label: "AI Consultancy", href: "/services#ai" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Industries Served", href: "/industries" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Pay Your Invoice", href: "/pay-invoice" },
  ],
};

export function Footer() {
  return (
    <footer
      style={{
        background: "#0b0b0d",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        color: "rgba(255,255,255,0.68)",
        fontSize: "14px",
        lineHeight: 1.7,
      }}
    >
      {/* Main footer */}
      <div
        className="bx-container"
        style={{
          padding: "72px 0 56px",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "48px",
        }}
      >
        {/* Top row: Brand + Columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "48px",
          }}
          className="footer-grid"
        >
          {/* Brand block */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{
                display: "inline-flex",
                alignItems: "center",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "10px",
                padding: "8px 12px",
              }}>
                <Image
                  src="/logo-white.png"
                  alt="BlockXAI"
                  width={80}
                  height={22}
                  style={{ height: "22px", width: "auto" }}
                />
              </span>
            </div>
            <p style={{ maxWidth: "280px", fontSize: "13px", color: "rgba(255,255,255,0.5)", lineHeight: 1.8 }}>
              Enterprise blockchain, Web3, crypto infrastructure, and AI consultancy — delivering secure digital transformation for forward-thinking organisations.
            </p>

            <div style={{ display: "grid", gap: "10px", marginTop: "8px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <span style={{ color: "#C41E3A", fontSize: "11px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", paddingTop: "2px", flexShrink: 0 }}>Location</span>
                <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.56)" }}>18 Elmstead Avenue, Wembley, England, HA9 8NX</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ color: "#C41E3A", fontSize: "11px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", flexShrink: 0 }}>Phone</span>
                <a href="tel:+447440183728" style={{ color: "rgba(255,255,255,0.72)", textDecoration: "none", fontSize: "13px" }}>+44 7440183728</a>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ color: "#C41E3A", fontSize: "11px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", flexShrink: 0 }}>Email</span>
                <a href="mailto:info@blockxint.com" style={{ color: "rgba(255,255,255,0.72)", textDecoration: "none", fontSize: "13px" }}>info@blockxint.com</a>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <p style={{ fontSize: "11px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.18em", color: "rgba(255,255,255,0.36)", marginBottom: "20px" }}>
                {title}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "12px" }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      style={{
                        color: "rgba(255,255,255,0.6)",
                        textDecoration: "none",
                        fontSize: "14px",
                        fontWeight: 500,
                        transition: "color 0.18s",
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "white"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)"; }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div style={{
          background: "rgba(196,30,58,0.08)",
          border: "1px solid rgba(196,30,58,0.2)",
          borderRadius: "16px",
          padding: "32px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "32px",
          flexWrap: "wrap",
        }}>
          <div>
            <p style={{ color: "white", fontSize: "18px", fontWeight: 800, letterSpacing: "0.04em", marginBottom: "4px" }}>
              Ready to transform your business?
            </p>
            <p style={{ color: "rgba(255,255,255,0.58)", fontSize: "14px" }}>
              Over 400 companies already trust BlockXAI. Schedule a consultation today.
            </p>
          </div>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link
              href="/contact"
              style={{
                padding: "14px 26px",
                background: "#C41E3A",
                color: "white",
                fontSize: "14px",
                fontWeight: 700,
                textDecoration: "none",
                borderRadius: "10px",
                letterSpacing: "0.04em",
                whiteSpace: "nowrap",
                boxShadow: "0 8px 24px rgba(196,30,58,0.24)",
              }}
            >
              Get Started
            </Link>
            <Link
              href="/about"
              style={{
                padding: "14px 26px",
                background: "rgba(255,255,255,0.06)",
                color: "white",
                fontSize: "14px",
                fontWeight: 700,
                textDecoration: "none",
                borderRadius: "10px",
                letterSpacing: "0.04em",
                border: "1px solid rgba(255,255,255,0.12)",
                whiteSpace: "nowrap",
              }}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div
          className="bx-container"
          style={{
            padding: "20px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.36)" }}>
            © 2025 BlockXAI Limited. All rights reserved. Registered in England.
          </p>
          <div style={{ display: "flex", gap: "20px" }}>
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a
                key={item}
                href="#"
                style={{ fontSize: "12px", color: "rgba(255,255,255,0.36)", textDecoration: "none", transition: "color 0.18s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.36)"; }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
