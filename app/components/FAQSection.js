"use client";
import { useState } from "react";

const FAQS = [
  {
    q: "How does NeuralMed's AI achieve such high diagnostic accuracy?",
    a: "Our models are trained on over 12 million anonymized clinical cases and continuously validated against gold-standard diagnostic outcomes. We combine ensemble learning with human-in-the-loop refinement, ensuring every prediction is grounded in evidence-based medicine.",
  },
  {
    q: "Is patient data HIPAA and GDPR compliant?",
    a: "Absolutely. NeuralMed operates with end-to-end encryption, zero-trust architecture, and full HIPAA / GDPR compliance. Patient data is never used for model training without explicit consent, and all infrastructure is audited quarterly by independent security firms.",
  },
  {
    q: "How long does onboarding and integration take?",
    a: "Most clinical partners are fully operational within 2–4 weeks. Our dedicated integration team handles API connections to existing EHR systems (Epic, Cerner, Meditech), bespoke workflow configuration, and staff training as part of the onboarding package.",
  },
  {
    q: "What biomarkers does the platform track?",
    a: "NeuralMed tracks 450+ biomarkers across genomics, proteomics, metabolomics, and standard clinical labs. Continuous physiological signals (HRV, blood oxygen, temperature) can be fed from wearables. The platform dynamically prioritizes biomarkers based on each patient's risk profile.",
  },
  {
    q: "Do you offer a free trial or pilot program?",
    a: "Yes — qualified clinical partners can access a 90-day pilot program at no cost, including full platform access, onboarding support, and a dedicated clinical success manager. Apply through our Early Access Program above.",
  },
  {
    q: "Can the platform integrate with existing hospital infrastructure?",
    a: "NeuralMed is EHR-agnostic and exposes a comprehensive HL7 FHIR-compliant REST API. We have pre-built connectors for Epic, Cerner, and Allscripts, and our team can build custom integrations within our standard onboarding window.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <section
      id="faq"
      className="section-pad"
      style={{
        background: "linear-gradient(180deg, #050A1A 0%, #0A0F2C 50%, #050A1A 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "400px",
          background: "radial-gradient(ellipse at center, rgba(139,0,0,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-wide" style={{ position: "relative", zIndex: 2 }}>
        {/* Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "5rem",
            alignItems: "start",
          }}
          className="faq-header-grid"
        >
          <div style={{ position: "sticky", top: "7rem" }}>
            <div className="pill-tag" style={{ marginBottom: "1.25rem" }}>
              FAQ
            </div>
            <h2 className="display-section" style={{ color: "#ffffff", marginBottom: "1.25rem" }}>
              Common
              <br />
              <span className="gradient-text-red">Questions</span>
            </h2>
            <p className="body-md" style={{ marginBottom: "2rem" }}>
              Everything you need to know about the NeuralMed platform,
              security, and onboarding process.
            </p>
            <a href="#newsletter" className="btn-primary glow-btn" style={{ display: "inline-flex" }}>
              Contact Sales
            </a>
          </div>

          {/* Accordion */}
          <div>
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="accordion-item"
                  style={{
                    borderBottom: `1px solid ${isOpen ? "rgba(255,26,26,0.25)" : "rgba(255,255,255,0.07)"}`,
                    transition: "border-color 0.3s ease",
                  }}
                >
                  <button
                    id={`faq-toggle-${idx}`}
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                    style={{
                      width: "100%",
                      padding: "1.6rem 0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "1.5rem",
                      background: "none",
                      border: "none",
                      color: isOpen ? "#ffffff" : "rgba(255,255,255,0.8)",
                      textAlign: "left",
                      cursor: "pointer",
                      fontSize: "1.05rem",
                      fontWeight: isOpen ? 600 : 500,
                      transition: "color 0.2s ease",
                    }}
                  >
                    <span>{faq.q}</span>
                    <div
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        border: `1px solid ${isOpen ? "rgba(255,26,26,0.5)" : "rgba(255,255,255,0.15)"}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        transition: "all 0.3s ease",
                        background: isOpen ? "rgba(255,26,26,0.15)" : "transparent",
                      }}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        style={{
                          transition: "transform 0.3s ease",
                          transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        }}
                      >
                        <path d="M12 5v14M5 12h14" stroke={isOpen ? "#FF6666" : "rgba(255,255,255,0.6)"} strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </button>

                  <div
                    id={`faq-content-${idx}`}
                    style={{
                      maxHeight: isOpen ? "400px" : "0",
                      overflow: "hidden",
                      transition: "max-height 0.4s ease, opacity 0.3s ease, padding 0.3s ease",
                      opacity: isOpen ? 1 : 0,
                      paddingBottom: isOpen ? "1.5rem" : "0",
                    }}
                  >
                    <p style={{ color: "var(--text-gray)", lineHeight: 1.8, fontSize: "0.97rem" }}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .faq-header-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
