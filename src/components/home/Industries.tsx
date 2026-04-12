"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const INDUSTRIES = [
  {
    name: "Finance & Banking",
    href: "/industries#finance",
    highlights: ["Secure transactions & smart contracts", "DeFi & tokenisation", "AI-powered analytics", "Digital identity management"],
    tag: "FinTech",
  },
  {
    name: "Healthcare",
    href: "/industries#healthcare",
    highlights: ["Tamper-proof patient records", "AI-enhanced diagnostics", "Automated claims processing", "IoT & wearable integration"],
    tag: "MedTech",
  },
  {
    name: "Supply Chain & Logistics",
    href: "/industries#supply-chain",
    highlights: ["End-to-end traceability", "Smart contract automation", "AI demand forecasting", "Regulatory compliance"],
    tag: "LogisTech",
  },
  {
    name: "Retail & E-Commerce",
    href: "/industries#retail",
    highlights: ["Blockchain payment gateways", "Inventory AI optimisation", "Customer personalisation", "Anti-counterfeiting"],
    tag: "RetailTech",
  },
];

export function Industries() {
  return (
    <section className="bx-section" style={{ background: "#f3efe8" }}>
      <div className="bx-container">
        {/* Header */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "56px", maxWidth: "620px" }}>
          <span className="bx-eyebrow">Industries We Serve</span>
          <h2
            className="font-display"
            style={{
              margin: 0,
              fontSize: "clamp(2.8rem, 4.8vw, 5rem)",
              lineHeight: 0.9,
              letterSpacing: "0.02em",
              color: "#0b0b0d",
            }}
          >
            BUILT FOR YOUR SECTOR
          </h2>
          <p style={{ color: "rgba(11,11,13,0.56)", fontSize: "16px", lineHeight: 1.7, maxWidth: "480px" }}>
            Our solutions are tailored to the specific challenges and compliance requirements of your industry — not generic templates.
          </p>
        </div>

        {/* Industry cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "14px",
          }}
          className="industry-grid"
        >
          {INDUSTRIES.map((ind) => (
            <Link
              key={ind.name}
              href={ind.href}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                background: "white",
                border: "1px solid rgba(11,11,13,0.08)",
                borderRadius: "16px",
                padding: "24px",
                textDecoration: "none",
                transition: "transform 0.22s, box-shadow 0.22s, border-color 0.22s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 16px 40px rgba(11,11,13,0.1)";
                el.style.borderColor = "rgba(196,30,58,0.2)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
                el.style.borderColor = "rgba(11,11,13,0.08)";
              }}
            >
              {/* Tag badge */}
              <span style={{
                display: "inline-flex",
                alignSelf: "flex-start",
                padding: "5px 12px",
                background: "rgba(196,30,58,0.08)",
                border: "1px solid rgba(196,30,58,0.16)",
                borderRadius: "6px",
                color: "#C41E3A",
                fontSize: "10px",
                fontWeight: 800,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}>
                {ind.tag}
              </span>

              <h3 style={{
                margin: 0,
                color: "#0b0b0d",
                fontSize: "16px",
                fontWeight: 800,
                letterSpacing: "0.02em",
                lineHeight: 1.3,
              }}>
                {ind.name}
              </h3>

              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: "8px", flex: 1 }}>
                {ind.highlights.map((h) => (
                  <li key={h} style={{ display: "flex", alignItems: "flex-start", gap: "10px", color: "rgba(11,11,13,0.6)", fontSize: "13px" }}>
                    <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#C41E3A", flexShrink: 0, marginTop: "7px" }} />
                    {h}
                  </li>
                ))}
              </ul>

              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#C41E3A", fontSize: "13px", fontWeight: 700, marginTop: "8px" }}>
                Explore Solutions
                <ArrowRight size={13} />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ marginTop: "40px", textAlign: "center" }}>
          <Link
            href="/industries"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "16px 32px",
              background: "#0b0b0d",
              color: "white",
              fontSize: "15px",
              fontWeight: 700,
              textDecoration: "none",
              borderRadius: "12px",
              letterSpacing: "0.04em",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#C41E3A"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#0b0b0d"; }}
          >
            All Industries
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) { .industry-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px) { .industry-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
