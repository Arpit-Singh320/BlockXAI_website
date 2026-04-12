const STEPS = [
  {
    index: "01",
    title: "Initial Assessment",
    body: "We analyse your business model, current infrastructure, and strategic objectives to identify where blockchain or AI creates the most meaningful impact.",
  },
  {
    index: "02",
    title: "Strategy Development",
    body: "We design a bespoke blockchain or AI transformation roadmap — scoped, prioritised, and aligned to your industry and competitive environment.",
  },
  {
    index: "03",
    title: "Implementation & Integration",
    body: "We build, test, and deploy solutions directly into your existing systems with minimal disruption, using enterprise-grade security practices throughout.",
  },
  {
    index: "04",
    title: "Training & Ongoing Support",
    body: "We transfer knowledge to your team and provide long-term support, iteration, and scaling assistance to maximise the value of your investment.",
  },
];

export function Process() {
  return (
    <section className="bx-section" style={{ background: "#17181d" }}>
      <div className="bx-container">
        {/* Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            marginBottom: "64px",
            alignItems: "flex-end",
          }}
          className="process-header"
        >
          <div>
            <span className="bx-eyebrow">How We Work</span>
            <h2
              className="font-display"
              style={{
                marginTop: "16px",
                marginBottom: 0,
                fontSize: "clamp(2.8rem, 4.8vw, 5rem)",
                lineHeight: 0.9,
                letterSpacing: "0.02em",
                color: "white",
              }}
            >
              OUR PROCESS
            </h2>
          </div>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>
            A four-phase engagement model that takes you from discovery to delivery — and beyond. No generic roadmaps, no padded timelines.
          </p>
        </div>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "0",
            position: "relative",
          }}
          className="process-steps"
        >
          {/* Connector line */}
          <div
            aria-hidden
            className="process-connector"
            style={{
              position: "absolute",
              top: "clamp(28px, 4.5vw, 46px)",
              left: "calc(12.5% + 16px)",
              right: "calc(12.5% + 16px)",
              height: "1px",
              background: "rgba(255,255,255,0.08)",
              zIndex: 0,
            }}
          />

          {STEPS.map((step, i) => (
            <div
              key={step.index}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                padding: "0 24px",
                paddingTop: "0",
                borderRight: i < STEPS.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                position: "relative",
                zIndex: 1,
              }}
            >
              {/* Index circle */}
              <div
                style={{
                  width: "clamp(48px, 5.5vw, 64px)",
                  height: "clamp(48px, 5.5vw, 64px)",
                  borderRadius: "50%",
                  background: i === 0 ? "#df2531" : "#17181d",
                  border: i === 0 ? "none" : "1px solid rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <span
                  className="font-display"
                  style={{
                    fontSize: "clamp(1rem, 1.6vw, 1.4rem)",
                    letterSpacing: "0.04em",
                    color: i === 0 ? "white" : "rgba(255,255,255,0.5)",
                    lineHeight: 1,
                  }}
                >
                  {step.index}
                </span>
              </div>

              {/* Content */}
              <div>
                <h3
                  style={{
                    margin: "0 0 10px",
                    color: "white",
                    fontSize: "16px",
                    fontWeight: 800,
                    letterSpacing: "0.02em",
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ margin: 0, color: "rgba(255,255,255,0.5)", fontSize: "13px", lineHeight: 1.7 }}>
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .process-header { grid-template-columns: 1fr !important; gap: 24px !important; }
          .process-steps { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
          .process-connector { display: none !important; }
          .process-steps > div { border-right: none !important; padding: 0 !important; }
        }
        @media (max-width: 560px) {
          .process-steps { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
