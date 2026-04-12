"use client";

import { motion } from "motion/react";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const FOOTER_COLS = [
  {
    title: "Services",
    links: [
      { text: "Blockchain Consulting", href: "/services#blockchain" },
      { text: "Web3 Solutions", href: "/services#web3" },
      { text: "Crypto Services", href: "/services#crypto" },
      { text: "AI Consultancy", href: "/services#ai" },
    ],
  },
  {
    title: "Company",
    links: [
      { text: "About Us", href: "/about" },
      { text: "Industries Served", href: "/industries" },
      { text: "Resources", href: "/resources" },
      { text: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Industries",
    links: [
      { text: "Finance & Banking", href: "/industries#finance" },
      { text: "Healthcare", href: "/industries#healthcare" },
      { text: "Supply Chain", href: "/industries#supply-chain" },
      { text: "Retail & E-Commerce", href: "/industries#retail" },
    ],
  },
  {
    title: "Legal",
    links: [
      { text: "Privacy Policy", href: "/contact" },
      { text: "Terms of Service", href: "/contact" },
      { text: "Cookie Policy", href: "/contact" },
    ],
  },
];

const fade = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] as const } },
};

export default function Footer4() {
  return (
    <footer style={{ background: "#0b0b0d", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        style={{ display: "grid", gap: 0 }}
      >
        {/* CTA Headline */}
        <div style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "64px 0" }}>
          <div className="bx-container">
            <motion.div variants={fade} style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "32px", flexWrap: "wrap" }}>
              <h2
                className="font-display"
                style={{ margin: 0, fontSize: "clamp(2.8rem, 5.5vw, 6rem)", lineHeight: 0.9, letterSpacing: "0.01em", color: "white", maxWidth: "640px" }}
              >
                READY TO BUILD THE{" "}
                <span style={{ color: "#C41E3A" }}>FUTURE</span>?
              </h2>
              <Link
                href="/contact"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "10px",
                  padding: "16px 28px", background: "#C41E3A", color: "white",
                  fontSize: "14px", fontWeight: 700, textDecoration: "none",
                  borderRadius: "12px", letterSpacing: "0.06em",
                  boxShadow: "0 8px 24px rgba(196,30,58,0.22)",
                  transition: "background 0.2s", flexShrink: 0,
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#9B1520"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#C41E3A"; }}
              >
                Get Started Today <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Main links + newsletter */}
        <div style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          <div className="bx-container">
            <motion.div
              variants={fade}
              style={{ display: "grid", gridTemplateColumns: "1fr 1.8fr", gap: "0" }}
              className="footer-main-grid"
            >
              {/* Left — brand + contact + newsletter */}
              <div style={{ borderRight: "1px solid rgba(255,255,255,0.07)", padding: "48px 48px 48px 0" }} className="footer-left">
                <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "12px", textDecoration: "none", marginBottom: "24px" }}>
                  <span style={{
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "10px", padding: "7px 12px",
                  }}>
                    <Image src="/logo-white.png" alt="BlockXAI" width={80} height={22} style={{ height: "22px", width: "auto" }} />
                  </span>
                </Link>

                <p style={{ color: "rgba(255,255,255,0.48)", fontSize: "14px", lineHeight: 1.75, marginBottom: "28px", maxWidth: "300px" }}>
                  Enterprise blockchain and AI consultancy helping organisations design, integrate, and scale transformative technology.
                </p>

                <div style={{ display: "grid", gap: "12px", marginBottom: "32px" }}>
                  {[
                    { icon: Phone, val: "+44 7440183728", href: "tel:+447440183728" },
                    { icon: Mail, val: "info@blockxai.xyz", href: "mailto:info@blockxai.xyz" },
                    { icon: MapPin, val: "18 Elmstead Avenue, Wembley, HA9 8NX", href: "https://maps.google.com/?q=18+Elmstead+Avenue+Wembley+HA9+8NX" },
                  ].map(({ icon: Icon, val, href }) => (
                    <a key={val} href={href} style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", color: "rgba(255,255,255,0.5)", fontSize: "13px", transition: "color 0.2s" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "white"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)"; }}
                    >
                      <Icon size={13} color="#C41E3A" style={{ flexShrink: 0 }} />
                      {val}
                    </a>
                  ))}
                </div>

                <p style={{ color: "rgba(255,255,255,0.32)", fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "10px" }}>
                  Newsletter
                </p>
                <div style={{ display: "flex", gap: "0" }}>
                  <input
                    type="email"
                    placeholder="Your email address"
                    style={{
                      flex: 1, padding: "11px 14px", background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)", borderRight: "none",
                      borderRadius: "8px 0 0 8px", color: "white", fontSize: "13px", outline: "none",
                    }}
                    onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#C41E3A"; }}
                    onBlur={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; }}
                  />
                  <button
                    style={{
                      padding: "11px 16px", background: "#C41E3A", border: "none",
                      borderRadius: "0 8px 8px 0", cursor: "pointer", color: "white",
                      display: "flex", alignItems: "center", transition: "background 0.2s",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#9B1520"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#C41E3A"; }}
                    aria-label="Subscribe"
                  >
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>

              {/* Right — link columns */}
              <div style={{ padding: "48px 0 48px 48px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }} className="footer-links-grid">
                {FOOTER_COLS.map((col) => (
                  <div key={col.title}>
                    <p style={{ color: "rgba(255,255,255,0.32)", fontSize: "11px", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "20px" }}>
                      {col.title}
                    </p>
                    <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: "12px" }}>
                      {col.links.map((l) => (
                        <li key={l.text}>
                          <Link
                            href={l.href}
                            style={{ color: "rgba(255,255,255,0.52)", fontSize: "13px", textDecoration: "none", fontWeight: 500, transition: "color 0.18s", display: "block" }}
                            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "white"; }}
                            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.52)"; }}
                          >
                            {l.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="bx-container">
          <motion.div
            variants={fade}
            style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "24px 0", gap: "16px", flexWrap: "wrap" }}
          >
            <p style={{ color: "rgba(255,255,255,0.28)", fontSize: "12px", margin: 0 }}>
              © {new Date().getFullYear()} BlockX AI Limited. Registered in England & Wales. All rights reserved.
            </p>
            <p style={{ color: "rgba(255,255,255,0.18)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", margin: 0 }}>
              Est. 2020 · London, England
            </p>
          </motion.div>
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 1024px) { .footer-main-grid { grid-template-columns: 1fr !important; } .footer-left { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.07); padding-right: 0 !important; } }
        @media (max-width: 640px) { .footer-links-grid { grid-template-columns: repeat(2, 1fr) !important; padding-left: 0 !important; } }
      `}</style>
    </footer>
  );
}
