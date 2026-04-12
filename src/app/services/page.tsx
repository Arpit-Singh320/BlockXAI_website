import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "BlockXAI Limited delivers blockchain consulting, Web3 solutions, crypto services, and AI consultancy for enterprise organisations.",
};

const SERVICES_DETAIL = [
  {
    id: "blockchain",
    index: "01",
    name: "Blockchain Consulting",
    tagline: "Strategy, smart contracts, and secure integration.",
    intro:
      "Crafting bespoke blockchain strategies tailored to your business needs and ensuring smooth, secure integration with existing systems.",
    items: [
      { title: "Strategy Development & Implementation", desc: "Crafting bespoke blockchain strategies tailored to your business needs and ensuring smooth, secure integration with existing systems." },
      { title: "Smart Contract Development & Auditing", desc: "Designing, developing, and rigorously testing smart contracts to guarantee flawless performance and security." },
      { title: "Tokenisation Services", desc: "Enabling the creation of digital assets on blockchain — from fungible tokens to complex tokenised real-world assets." },
    ],
  },
  {
    id: "web3",
    index: "02",
    name: "Web3 Solutions",
    tagline: "dApps, NFTs, and decentralised finance at scale.",
    intro:
      "Building decentralised applications on leading platforms like Ethereum, Polkadot, and Solana — plus NFT marketplaces and full DeFi ecosystems.",
    items: [
      { title: "dApp Development", desc: "Building decentralised applications on Ethereum, Polkadot, or Solana — with production-ready smart contracts, indexing, and front-end integration." },
      { title: "NFT Marketplace Creation", desc: "Full-stack NFT platform development: minting, trading, royalties, and custom metadata with IPFS or Arweave storage." },
      { title: "DeFi Solutions", desc: "Decentralised finance applications — AMMs, lending protocols, yield aggregators, and governance tooling for financial applications." },
    ],
  },
  {
    id: "crypto",
    index: "03",
    name: "Crypto Services",
    tagline: "Wallets, payment gateways, and trading infrastructure.",
    intro:
      "Secure cryptocurrency infrastructure, seamless payment integrations, and expert advisory services for modern digital asset operations.",
    items: [
      { title: "Secure Wallet Development", desc: "Building robust cryptocurrency wallets fortified with advanced security protocols — multi-sig, hardware wallet integration, and key management systems." },
      { title: "Payment Gateway Integration", desc: "Streamlining crypto transactions with reliable payment solutions — enabling businesses to accept Bitcoin, Ethereum, stablecoins, and more." },
      { title: "Trading & Investment Advisory", desc: "Expert insights and advisory services to navigate the dynamic world of cryptocurrency trading, portfolio management, and digital asset investments." },
    ],
  },
  {
    id: "ai",
    index: "04",
    name: "AI Consultancy",
    tagline: "Custom AI systems, ML, NLP, and computer vision.",
    intro:
      "Crafting tailor-made AI systems that leverage machine learning, predictive analytics, and automation to transform your operations.",
    items: [
      { title: "Custom AI Development", desc: "Tailor-made AI systems leveraging machine learning, predictive analytics, and automation — from proof-of-concept to production deployment." },
      { title: "Natural Language Processing", desc: "Intuitive chatbots, language translation tools, document analysis systems, and intent recognition applications built for your workflow." },
      { title: "Computer Vision", desc: "Image recognition, object detection, quality inspection, and visual analysis applications that enhance operational efficiency at scale." },
      { title: "Data Analysis & ML", desc: "Turning raw data into actionable insights through sophisticated data modelling, feature engineering, and predictive analytics pipelines." },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="FOUR PILLARS OF"
        titleAccent="DIGITAL TRANSFORMATION"
        subtitle="From blockchain strategy to AI deployment — every service is tailored to your organisation, not from a generic playbook."
      />

      {/* Services detail sections */}
      {SERVICES_DETAIL.map((svc, i) => (
        <section
          key={svc.id}
          id={svc.id}
          className="bx-section"
          style={{ background: i % 2 === 0 ? "#f3efe8" : "white" }}
        >
          <div className="bx-container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 2fr",
                gap: "clamp(40px, 6vw, 80px)",
                alignItems: "flex-start",
              }}
              className="svc-detail-grid"
            >
              {/* Left: meta */}
              <div style={{ position: "sticky", top: "120px" }}>
                <span
                  className="font-display"
                  style={{
                    display: "block",
                    fontSize: "5rem",
                    color: "rgba(223,37,49,0.2)",
                    lineHeight: 1,
                    letterSpacing: "0.02em",
                    marginBottom: "12px",
                  }}
                >
                  {svc.index}
                </span>
                <h2
                  className="font-display"
                  style={{
                    margin: "0 0 12px",
                    fontSize: "clamp(2rem, 3.2vw, 3rem)",
                    lineHeight: 0.92,
                    letterSpacing: "0.02em",
                    color: "#0b0b0d",
                  }}
                >
                  {svc.name.toUpperCase()}
                </h2>
                <p style={{ color: "#df2531", fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "16px" }}>
                  {svc.tagline}
                </p>
                <p style={{ color: "rgba(11,11,13,0.6)", fontSize: "14px", lineHeight: 1.7 }}>
                  {svc.intro}
                </p>
                <Link
                  href="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    marginTop: "24px",
                    padding: "14px 22px",
                    background: "#0b0b0d",
                    color: "white",
                    fontSize: "13px",
                    fontWeight: 700,
                    textDecoration: "none",
                    borderRadius: "10px",
                    letterSpacing: "0.06em",
                  }}
                >
                  Enquire <ArrowRight size={13} />
                </Link>
              </div>

              {/* Right: items */}
              <div style={{ display: "grid", gap: "16px" }}>
                {svc.items.map((item, idx) => (
                  <div
                    key={item.title}
                    style={{
                      background: "white",
                      border: "1px solid rgba(11,11,13,0.08)",
                      borderRadius: "14px",
                      padding: "24px 28px",
                      display: "grid",
                      gridTemplateColumns: "auto 1fr",
                      gap: "20px",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "8px",
                        background: "rgba(223,37,49,0.08)",
                        border: "1px solid rgba(223,37,49,0.14)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "12px",
                        fontWeight: 800,
                        color: "#df2531",
                        letterSpacing: "0.06em",
                        flexShrink: 0,
                      }}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 style={{ margin: "0 0 8px", color: "#0b0b0d", fontSize: "16px", fontWeight: 800, letterSpacing: "0.02em" }}>
                        {item.title}
                      </h3>
                      <p style={{ margin: 0, color: "rgba(11,11,13,0.6)", fontSize: "14px", lineHeight: 1.7 }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <style>{`
            @media (max-width: 900px) { .svc-detail-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>
      ))}

      {/* Bottom CTA */}
      <section style={{ background: "#0b0b0d", paddingBlock: "80px", textAlign: "center" }}>
        <div className="bx-container">
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(2.4rem, 4.5vw, 4.8rem)",
              lineHeight: 0.9,
              letterSpacing: "0.02em",
              color: "white",
              marginBottom: "20px",
            }}
          >
            NOT SURE WHICH <span style={{ color: "#df2531" }}>SERVICE</span> YOU NEED?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.52)", fontSize: "15px", maxWidth: "480px", margin: "0 auto 32px", lineHeight: 1.7 }}>
            Book a free consultation and we&apos;ll assess your needs and recommend the right approach — no obligation.
          </p>
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "18px 36px",
              background: "#df2531",
              color: "white",
              fontSize: "16px",
              fontWeight: 700,
              textDecoration: "none",
              borderRadius: "12px",
              boxShadow: "0 10px 28px rgba(223,37,49,0.26)",
            }}
          >
            Book a Free Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
