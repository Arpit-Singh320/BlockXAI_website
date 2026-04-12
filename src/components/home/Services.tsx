"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";

const SERVICES = [
  {
    index: "01",
    title: "Blockchain Consulting",
    href: "/services#blockchain",
    summary:
      "Bespoke blockchain strategies aligned with your business model — from architecture design and smart contract auditing to secure, scalable system integration.",
    bullets: [
      "Strategy development & implementation",
      "Smart contract development & auditing",
      "Tokenisation of digital assets",
    ],
    accent: false,
  },
  {
    index: "02",
    title: "Web3 Solutions",
    href: "/services#web3",
    summary:
      "End-to-end decentralised application engineering across Ethereum, Polkadot, and Solana — including NFT marketplaces and full DeFi platform builds.",
    bullets: [
      "dApp development on leading chains",
      "NFT marketplace creation",
      "Decentralised finance (DeFi) platforms",
    ],
    accent: false,
  },
  {
    index: "03",
    title: "Crypto Services",
    href: "/services#crypto",
    summary:
      "Secure cryptocurrency wallet infrastructure, payment gateway integration, and expert trading advisory services for modern digital asset operations.",
    bullets: [
      "Secure wallet development",
      "Crypto payment gateway integration",
      "Trading & investment advisory",
    ],
    accent: false,
  },
  {
    index: "04",
    title: "AI Consultancy",
    href: "/services#ai",
    summary:
      "Custom machine learning systems, predictive analytics engines, NLP chatbots, and computer vision applications that transform raw data into competitive advantage.",
    bullets: [
      "Custom AI & ML development",
      "Natural language processing (NLP)",
      "Computer vision applications",
    ],
    accent: true,
  },
];

export function Services() {
  return (
    <section className="bx-section" style={{ background: "#f3efe8" }}>
      <div className="bx-container">
        {/* Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "flex-end",
            gap: "32px",
            marginBottom: "56px",
          }}
          className="section-header"
        >
          <div>
            <span className="bx-eyebrow" style={{ color: "#df2531" }}>
              What We Do
            </span>
            <h2
              className="font-display"
              style={{
                marginTop: "16px",
                fontSize: "clamp(2.8rem, 4.8vw, 5rem)",
                lineHeight: 0.9,
                letterSpacing: "0.02em",
                color: "#0b0b0d",
              }}
            >
              OUR SERVICES
            </h2>
            <p
              style={{
                marginTop: "16px",
                color: "rgba(11,11,13,0.6)",
                fontSize: "16px",
                lineHeight: 1.7,
                maxWidth: "520px",
              }}
            >
              Four core service pillars covering every dimension of enterprise
              blockchain and AI transformation.
            </p>
          </div>

          <Link
            href="/services"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 22px",
              background: "#0b0b0d",
              color: "white",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textDecoration: "none",
              borderRadius: "10px",
              whiteSpace: "nowrap",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#df2531"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#0b0b0d"; }}
          >
            All Services
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "16px",
          }}
          className="services-grid"
        >
          {SERVICES.map((svc) => (
            <SpotlightCard
              key={svc.index}
              spotlightColor={(svc.accent ? "rgba(223, 37, 49, 0.12)" : "rgba(11, 11, 13, 0.06)") as `rgba(${number}, ${number}, ${number}, ${number})`}
              className="p-0 rounded-[16px] border-0 bg-transparent"
              style={{ transition: "transform 0.22s, box-shadow 0.22s" }}
            >
            <Link
              href={svc.href}
              style={{
                display: "flex",
                flexDirection: "column",
                background: svc.accent ? "#0b0b0d" : "white",
                border: svc.accent ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(11,11,13,0.08)",
                borderRadius: "16px",
                padding: "28px",
                textDecoration: "none",
                gap: "20px",
                transition: "transform 0.22s, box-shadow 0.22s",
                position: "relative",
                overflow: "hidden",
                minHeight: "340px",
                height: "100%",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = svc.accent
                  ? "0 20px 48px rgba(0,0,0,0.4)"
                  : "0 20px 48px rgba(11,11,13,0.12)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Accent background glow for dark card */}
              {svc.accent && (
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    top: "-40px",
                    right: "-40px",
                    width: "160px",
                    height: "160px",
                    borderRadius: "50%",
                    background: "rgba(223,37,49,0.18)",
                    filter: "blur(40px)",
                    pointerEvents: "none",
                  }}
                />
              )}

              {/* Index */}
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 800,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: svc.accent ? "rgba(255,255,255,0.36)" : "rgba(11,11,13,0.32)",
                }}
              >
                {svc.index}
              </span>

              {/* Title */}
              <h3
                className="font-display"
                style={{
                  margin: 0,
                  fontSize: "clamp(1.8rem, 2.4vw, 2.2rem)",
                  letterSpacing: "0.04em",
                  lineHeight: 1.0,
                  color: svc.accent ? "white" : "#0b0b0d",
                }}
              >
                {svc.title.toUpperCase()}
              </h3>

              {/* Summary */}
              <p
                style={{
                  margin: 0,
                  fontSize: "13px",
                  lineHeight: 1.7,
                  color: svc.accent ? "rgba(255,255,255,0.6)" : "rgba(11,11,13,0.6)",
                  flex: 1,
                }}
              >
                {svc.summary}
              </p>

              {/* Bullets */}
              <ul
                style={{
                  margin: 0,
                  padding: 0,
                  listStyle: "none",
                  display: "grid",
                  gap: "8px",
                  borderTop: svc.accent ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(11,11,13,0.08)",
                  paddingTop: "16px",
                }}
              >
                {svc.bullets.map((b) => (
                  <li
                    key={b}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      color: svc.accent ? "rgba(255,255,255,0.56)" : "rgba(11,11,13,0.64)",
                      fontSize: "13px",
                    }}
                  >
                    <span
                      style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        background: "#df2531",
                        flexShrink: 0,
                        marginTop: "7px",
                      }}
                    />
                    {b}
                  </li>
                ))}
              </ul>

              {/* Arrow CTA */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: svc.accent ? "white" : "#df2531",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                }}
              >
                Learn More
                <ArrowRight size={13} />
              </div>
            </Link>
            </SpotlightCard>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) { .services-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px) { .services-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 700px) { .section-header { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
