"use client";

import Link from "next/link";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

export function ConsultationCTA() {
  return (
    <section
      style={{
        background: "#0b0b0d",
        position: "relative",
        overflow: "hidden",
        paddingBlock: "clamp(72px, 10vh, 120px)",
      }}
    >
      {/* Background accents */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(223,37,49,0.14) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "-80px",
          left: "-80px",
          width: "360px",
          height: "360px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(255,255,255,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="bx-container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(40px, 6vw, 80px)",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Left: Text */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <span className="bx-eyebrow">Ready to Start?</span>

          <h2
            className="font-display"
            style={{
              margin: 0,
              fontSize: "clamp(3rem, 5.5vw, 5.8rem)",
              lineHeight: 0.88,
              letterSpacing: "0.02em",
              color: "white",
            }}
          >
            OVER <span style={{ color: "#df2531" }}>400</span>{" "}
            COMPANIES HAVE ALREADY TRIED
          </h2>

          <p style={{ color: "rgba(255,255,255,0.56)", fontSize: "16px", lineHeight: 1.7 }}>
            Join the growing number of organisations that have transformed their operations with BlockXAI&apos;s enterprise blockchain and AI consultancy services.
          </p>

          {/* Contact details */}
          <div style={{ display: "grid", gap: "14px" }}>
            {[
              { icon: Phone, label: "+44 7440 183728", href: "tel:+447440183728" },
              { icon: Mail, label: "contact@blockxint.com", href: "mailto:contact@blockxint.com" },
              { icon: MapPin, label: "18 Elmstead Avenue, Wembley, England, HA9 8NX", href: "#" },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                style={{
                  display: "inline-flex",
                  alignItems: "flex-start",
                  gap: "14px",
                  color: "rgba(255,255,255,0.64)",
                  textDecoration: "none",
                  fontSize: "14px",
                  lineHeight: 1.5,
                  transition: "color 0.18s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "white"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.64)"; }}
              >
                <span
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={15} />
                </span>
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Right: CTA card */}
        <div
          style={{
            background: "#17181d",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          {/* Red top bar */}
          <div style={{ height: "4px", background: "#df2531" }} />

          <div style={{ padding: "36px" }}>
            <h3
              style={{
                margin: "0 0 8px",
                color: "white",
                fontSize: "22px",
                fontWeight: 800,
                letterSpacing: "0.02em",
              }}
            >
              Book a Free Consultation
            </h3>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", margin: "0 0 28px", lineHeight: 1.6 }}>
              No obligation. We&apos;ll assess your needs and recommend the most impactful solution for your business.
            </p>

            <div style={{ display: "grid", gap: "12px" }}>
              {[
                "Initial business needs assessment",
                "Blockchain or AI feasibility review",
                "Tailored technology roadmap",
                "Clear scoping and indicative cost",
              ].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <span style={{ width: "20px", height: "20px", borderRadius: "50%", background: "rgba(223,37,49,0.12)", border: "1px solid rgba(223,37,49,0.24)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px" }}>
                    <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#df2531" }} />
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.64)", fontSize: "14px" }}>{item}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "grid", gap: "12px", marginTop: "32px" }}>
              <Link
                href="/contact"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  padding: "16px",
                  background: "#df2531",
                  color: "white",
                  fontSize: "15px",
                  fontWeight: 700,
                  textDecoration: "none",
                  borderRadius: "12px",
                  letterSpacing: "0.04em",
                  boxShadow: "0 8px 24px rgba(223,37,49,0.24)",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#b81a26"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#df2531"; }}
              >
                Get Started Today
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/services"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "16px",
                  background: "rgba(255,255,255,0.05)",
                  color: "rgba(255,255,255,0.72)",
                  fontSize: "14px",
                  fontWeight: 700,
                  textDecoration: "none",
                  borderRadius: "12px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  transition: "background 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(255,255,255,0.1)";
                  el.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(255,255,255,0.05)";
                  el.style.color = "rgba(255,255,255,0.72)";
                }}
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          section > div[class="bx-container"].cta-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
