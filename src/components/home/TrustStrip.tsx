"use client";

import CountUp from "@/components/CountUp";

const STATS = [
  { value: 400, suffix: "+", label: "Companies Served" },
  { value: 4, suffix: "", label: "Core Service Pillars" },
  { value: 5, suffix: "+", label: "Industries Covered" },
  { value: 2020, suffix: "", label: "Established" },
];

const TAGS = [
  "Blockchain Strategy",
  "Smart Contract Audits",
  "Web3 Development",
  "NFT Marketplaces",
  "DeFi Solutions",
  "Crypto Wallets",
  "AI Consultancy",
  "Machine Learning",
  "NLP & Computer Vision",
  "Digital Transformation",
];

export function TrustStrip() {
  return (
    <section
      style={{
        background: "#111115",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Stats row */}
      <div className="bx-container" style={{ padding: "40px 0" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "0",
          }}
          className="stats-grid"
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "24px 20px",
                borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                gap: "6px",
                textAlign: "center",
              }}
            >
              <span
                className="font-display"
                style={{
                  fontSize: "clamp(2.2rem, 3.5vw, 3.4rem)",
                  color: "white",
                  letterSpacing: "0.03em",
                  lineHeight: 1,
                  display: "flex", alignItems: "baseline", gap: "2px",
                }}
              >
                <CountUp to={stat.value} duration={2.2} delay={0.3} />
                {stat.suffix}
              </span>
              <span
                style={{
                  color: "rgba(255,255,255,0.44)",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scrolling capability tags */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          overflow: "hidden",
          padding: "14px 0",
          background: "rgba(0,0,0,0.2)",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "0",
            animation: "marquee 32s linear infinite",
            width: "max-content",
          }}
        >
          {[...TAGS, ...TAGS].map((tag, i) => (
            <span
              key={`${tag}-${i}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                padding: "0 32px",
                color: "rgba(255,255,255,0.36)",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              <span
                style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#df2531", flexShrink: 0 }}
              />
              {tag}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @media (max-width: 600px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .stats-grid > div:nth-child(2) { border-right: none !important; }
          .stats-grid > div:nth-child(3), .stats-grid > div:nth-child(4) { border-top: 1px solid rgba(255,255,255,0.06); }
        }
      `}</style>
    </section>
  );
}
