"use client";

const REASONS = [
  {
    index: "01",
    title: "Enhanced Security & Transparency",
    body: "Blockchain's immutable ledger secures your data and ensures transparent transactions, while AI delivers real-time insights that power better strategic decisions.",
  },
  {
    index: "02",
    title: "Operational Efficiency & Automation",
    body: "Intelligent automation streamlines complex processes, reduces manual intervention, and cuts operational costs without sacrificing quality or compliance.",
  },
  {
    index: "03",
    title: "Future-Proof Innovation",
    body: "Position your business at the forefront of technological advancement — unlocking new revenue streams and growth opportunities in an ever-evolving market.",
  },
  {
    index: "04",
    title: "Increased Trust & Accountability",
    body: "Build a culture of verifiable, data-driven accountability. Transparent records enhance trust across every layer of your organisation and supply chain.",
  },
];

export function WhyBlockXAI() {
  return (
    <section className="bx-section" style={{ background: "#0b0b0d" }}>
      <div className="bx-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
          className="why-grid"
        >
          {/* Left: Header block */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <span className="bx-eyebrow">Why Blockchain &amp; AI</span>

            <h2
              className="font-display"
              style={{
                margin: 0,
                fontSize: "clamp(3rem, 5.2vw, 5.6rem)",
                lineHeight: 0.88,
                letterSpacing: "0.02em",
                color: "white",
              }}
            >
              WHY EMBRACE{" "}
              <span style={{ color: "#C41E3A" }}>BLOCKCHAIN</span>{" "}
              AND AI?
            </h2>

            <p style={{ color: "rgba(255,255,255,0.56)", fontSize: "16px", lineHeight: 1.7 }}>
              We&apos;ve worked with over <strong style={{ color: "white" }}>400 companies</strong> to build
              blockchain and AI solutions. The results speak for themselves.
            </p>

            {/* Large stat */}
            <div
              style={{
                background: "rgba(196,30,58,0.08)",
                border: "1px solid rgba(196,30,58,0.2)",
                borderRadius: "16px",
                padding: "28px 32px",
                marginTop: "8px",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-end", gap: "12px", marginBottom: "8px" }}>
                <span
                  className="font-display"
                  style={{ fontSize: "4.8rem", color: "white", lineHeight: 1, letterSpacing: "-0.02em" }}
                >
                  400+
                </span>
                <span
                  style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", marginBottom: "10px" }}
                >
                  COMPANIES<br />ALREADY TRUST US
                </span>
              </div>
              <p style={{ color: "rgba(255,255,255,0.44)", fontSize: "13px", margin: 0 }}>
                Across finance, healthcare, supply chain, retail, and more.
              </p>
            </div>
          </div>

          {/* Right: Reason cards */}
          <div style={{ display: "grid", gap: "12px" }}>
            {REASONS.map((r) => (
              <div
                key={r.index}
                style={{
                  background: "#17181d",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "14px",
                  padding: "22px 24px",
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: "20px",
                  alignItems: "flex-start",
                  transition: "border-color 0.2s, background 0.2s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(196,30,58,0.22)";
                  el.style.background = "#1a1b21";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(255,255,255,0.06)";
                  el.style.background = "#17181d";
                }}
              >
                <span
                  className="font-display"
                  style={{
                    fontSize: "1.8rem",
                    color: "#C41E3A",
                    lineHeight: 1.1,
                    letterSpacing: "0.04em",
                    flexShrink: 0,
                    marginTop: "1px",
                  }}
                >
                  {r.index}
                </span>
                <div>
                  <h3
                    style={{
                      margin: "0 0 8px",
                      color: "white",
                      fontSize: "15px",
                      fontWeight: 700,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {r.title}
                  </h3>
                  <p style={{ margin: 0, color: "rgba(255,255,255,0.52)", fontSize: "13px", lineHeight: 1.65 }}>
                    {r.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .why-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
