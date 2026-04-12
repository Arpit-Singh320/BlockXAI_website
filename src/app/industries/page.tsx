import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { PageTransition } from "@/components/layout/PageTransition";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries Served",
  description:
    "BlockXAI Limited delivers tailored blockchain and AI solutions across finance, healthcare, supply chain, retail, and more.",
};

const INDUSTRIES = [
  {
    id: "finance",
    index: "01",
    name: "Finance & Banking",
    tag: "FinTech",
    overview:
      "Financial institutions demand high levels of security, transparency, and real-time data processing. Integrating blockchain and AI enables secure, compliant, and efficient financial operations.",
    solutions: [
      { title: "Secure Transactions & Smart Contracts", desc: "Automate payments and agreements, reduce fraud, and streamline compliance with immutable, self-executing contracts." },
      { title: "DeFi & Tokenisation", desc: "Unlock new liquidity channels by tokenising assets and building decentralised financial platforms that democratise investment." },
      { title: "AI-Powered Analytics", desc: "Leverage predictive analytics and risk assessment tools to inform smarter investment decisions and detect anomalies in real time." },
      { title: "Digital Identity Management", desc: "Enhance customer onboarding and security with blockchain-based digital identity solutions that reduce KYC friction." },
    ],
    dark: true,
  },
  {
    id: "healthcare",
    index: "02",
    name: "Healthcare",
    tag: "MedTech",
    overview:
      "The healthcare sector requires uncompromising data integrity, interoperability, and patient privacy. Our solutions bring blockchain-backed records and AI-driven diagnostics to clinical workflows.",
    solutions: [
      { title: "Secure Patient Data Management", desc: "Utilise blockchain to create tamper-proof, interoperable medical records accessible across providers — securely and instantly." },
      { title: "AI-Enhanced Diagnostics", desc: "Implement machine learning algorithms for early diagnosis, predictive analytics, and clinical decision support at scale." },
      { title: "Automated Administration", desc: "Streamline claims processing, billing, and inventory management with smart contracts and AI-driven workflow automation." },
      { title: "IoT & Wearable Integration", desc: "Connect wearable devices and medical equipment for real-time patient monitoring and proactive, personalised care pathways." },
    ],
    dark: false,
  },
  {
    id: "supply-chain",
    index: "03",
    name: "Supply Chain & Logistics",
    tag: "LogisTech",
    overview:
      "In the fast-paced world of supply chains, visibility, traceability, and efficiency are crucial. Our solutions ensure end-to-end transparency and data-driven decision-making throughout the logistics process.",
    solutions: [
      { title: "End-to-End Traceability", desc: "Deploy blockchain to track product movement from origin to destination, ensuring authenticity and reducing counterfeits." },
      { title: "Smart Contract Automation", desc: "Automate vendor agreements, payments, and inventory management to minimise errors and boost operational efficiency." },
      { title: "AI-Driven Forecasting", desc: "Utilise predictive analytics for demand planning, route optimisation, and real-time adjustments across complex supply networks." },
      { title: "Regulatory Compliance", desc: "Maintain transparent records that simplify audits and adhere to industry standards — automatically and continuously." },
    ],
    dark: true,
  },
  {
    id: "retail",
    index: "04",
    name: "Retail & E-Commerce",
    tag: "RetailTech",
    overview:
      "Retail demands seamless payment experiences, authentic products, and deeply personalised customer journeys. Blockchain and AI are transforming every touchpoint in the retail value chain.",
    solutions: [
      { title: "Secure Payment Systems", desc: "Enhance customer trust with blockchain-powered payment gateways, multi-currency support, and AI-driven fraud prevention." },
      { title: "Inventory & Supply Chain Optimisation", desc: "Use AI to optimise stock levels, reduce waste, and improve order fulfilment accuracy across every channel." },
      { title: "Customer Personalisation", desc: "Deploy AI-driven analytics to tailor product recommendations, dynamic pricing, and marketing strategies at the individual level." },
      { title: "Provenance & Authenticity", desc: "Leverage blockchain to authenticate products, combat counterfeiting, and build consumer trust with verifiable product histories." },
    ],
    dark: false,
  },
];

export default function IndustriesPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Industries We Serve"
        title="BUILT FOR"
        titleAccent="YOUR SECTOR"
        subtitle="At BlockXAI, our solutions address sector-specific challenges — not generic implementations. Explore how our expertise can redefine your industry."
      />

      {/* Industry sections */}
      {INDUSTRIES.map((ind) => (
        <section
          key={ind.id}
          id={ind.id}
          className="bx-section"
          style={{ background: ind.dark ? "#0b0b0d" : "#f3efe8" }}
        >
          <div className="bx-container">
            {/* Industry header */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "32px",
                alignItems: "flex-start",
                marginBottom: "48px",
                paddingBottom: "40px",
                borderBottom: ind.dark ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(11,11,13,0.08)",
              }}
              className="ind-header"
            >
              <div>
                <span
                  className="font-display"
                  style={{
                    display: "block",
                    fontSize: "5rem",
                    color: ind.dark ? "rgba(196,30,58,0.24)" : "rgba(196,30,58,0.2)",
                    lineHeight: 1,
                    letterSpacing: "0.02em",
                  }}
                >
                  {ind.index}
                </span>
              </div>
              <div>
                <span style={{
                  display: "inline-flex",
                  padding: "5px 12px",
                  background: "rgba(196,30,58,0.1)",
                  border: "1px solid rgba(196,30,58,0.2)",
                  borderRadius: "6px",
                  color: "#C41E3A",
                  fontSize: "10px",
                  fontWeight: 800,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginBottom: "14px",
                }}>
                  {ind.tag}
                </span>
                <h2
                  className="font-display"
                  style={{
                    margin: "0 0 16px",
                    fontSize: "clamp(2.4rem, 4.2vw, 4.4rem)",
                    lineHeight: 0.92,
                    letterSpacing: "0.02em",
                    color: ind.dark ? "white" : "#0b0b0d",
                  }}
                >
                  {ind.name.toUpperCase()}
                </h2>
                <p style={{ margin: 0, color: ind.dark ? "rgba(255,255,255,0.58)" : "rgba(11,11,13,0.6)", fontSize: "15px", lineHeight: 1.7, maxWidth: "560px" }}>
                  {ind.overview}
                </p>
              </div>
            </div>

            {/* Solutions grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "14px",
              }}
              className="solutions-grid"
            >
              {ind.solutions.map((sol) => (
                <div
                  key={sol.title}
                  style={{
                    background: ind.dark ? "#17181d" : "white",
                    border: ind.dark ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(11,11,13,0.08)",
                    borderRadius: "14px",
                    padding: "24px 26px",
                    borderLeft: "3px solid #C41E3A",
                  }}
                >
                  <h3 style={{ margin: "0 0 10px", color: ind.dark ? "white" : "#0b0b0d", fontSize: "15px", fontWeight: 800, letterSpacing: "0.02em" }}>
                    {sol.title}
                  </h3>
                  <p style={{ margin: 0, color: ind.dark ? "rgba(255,255,255,0.54)" : "rgba(11,11,13,0.6)", fontSize: "13px", lineHeight: 1.7 }}>
                    {sol.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <style>{`
            @media (max-width: 600px) {
              .solutions-grid { grid-template-columns: 1fr !important; }
              .ind-header { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </section>
      ))}

      {/* Additional industries CTA */}
      <section style={{ background: "#17181d", paddingBlock: "80px" }}>
        <div className="bx-container" style={{ textAlign: "center" }}>
          <span className="bx-eyebrow" style={{ justifyContent: "center" }}>Beyond These Sectors</span>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(2.4rem, 4.5vw, 4.8rem)",
              lineHeight: 0.9,
              letterSpacing: "0.02em",
              color: "white",
              marginTop: "16px",
              marginBottom: "20px",
            }}
          >
            YOUR INDUSTRY, <span style={{ color: "#C41E3A" }}>TRANSFORMED</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.52)", fontSize: "15px", maxWidth: "520px", margin: "0 auto 32px", lineHeight: 1.7 }}>
            Whether you are in real estate, legal, education, or any other sector, our integrated blockchain and AI technologies will propel your business into a future of transparency, efficiency, and sustainable growth.
          </p>
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "16px 32px",
              background: "#C41E3A",
              color: "white",
              fontSize: "15px",
              fontWeight: 700,
              textDecoration: "none",
              borderRadius: "12px",
              boxShadow: "0 8px 24px rgba(196,30,58,0.24)",
            }}
          >
            Explore the Possibilities <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
