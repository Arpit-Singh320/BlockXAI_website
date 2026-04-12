import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { PageTransition } from "@/components/layout/PageTransition";
import { ArrowRight, CreditCard, Mail, Phone, FileText, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Pay Your Invoice",
  description:
    "Pay your BlockXAI Limited invoice securely. Contact us for payment options and queries.",
};

const STEPS = [
  {
    icon: FileText,
    step: "01",
    title: "Locate Your Invoice",
    desc: "Find your invoice number in the email we sent you. It begins with BX- followed by your reference number.",
  },
  {
    icon: CreditCard,
    step: "02",
    title: "Confirm Amount",
    desc: "Verify the invoice total, currency, and any applicable VAT. If you have questions, contact us before making payment.",
  },
  {
    icon: ShieldCheck,
    step: "03",
    title: "Make Payment",
    desc: "Submit your payment via bank transfer using the details provided on your invoice, or contact us for alternative payment methods.",
  },
];

const PAYMENT_METHODS = [
  { label: "Bank Transfer (BACS)", detail: "Preferred method — details on your invoice" },
  { label: "CHAPS / SWIFT", detail: "For international payments — contact us first" },
  { label: "Cheque", detail: "Payable to BlockX AI Limited — contact for postal address" },
];

export default function PayInvoicePage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Client Payments"
        title="PAY YOUR"
        titleAccent="INVOICE"
        subtitle="Securely settle your BlockXAI Limited invoice. If you have any queries about your bill, please contact us before making payment."
      />

      {/* Steps */}
      <section className="bx-section" style={{ background: "#f3efe8" }}>
        <div className="bx-container">
          <span className="bx-eyebrow" style={{ marginBottom: "20px", display: "inline-flex" }}>
            How It Works
          </span>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
              lineHeight: 0.95,
              letterSpacing: "0.02em",
              color: "#0b0b0d",
              marginBottom: "48px",
              marginTop: "8px",
            }}
          >
            THREE SIMPLE <span style={{ color: "#C41E3A" }}>STEPS</span>
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
            }}
            className="steps-grid"
          >
            {STEPS.map(({ icon: Icon, step, title, desc }) => (
              <div
                key={step}
                style={{
                  background: "white",
                  border: "1px solid rgba(11,11,13,0.08)",
                  borderRadius: "20px",
                  padding: "32px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    fontSize: "40px",
                    fontWeight: 900,
                    color: "rgba(11,11,13,0.05)",
                    lineHeight: 1,
                    letterSpacing: "0.02em",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {step}
                </div>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "rgba(196,30,58,0.08)",
                    border: "1px solid rgba(196,30,58,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                  }}
                >
                  <Icon size={20} color="#C41E3A" />
                </div>
                <h3 style={{ margin: "0 0 10px", fontSize: "17px", fontWeight: 800, color: "#0b0b0d", letterSpacing: "0.01em" }}>
                  {title}
                </h3>
                <p style={{ margin: 0, color: "rgba(11,11,13,0.6)", fontSize: "14px", lineHeight: 1.75 }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <style>{`@media (max-width: 768px) { .steps-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* Payment methods + bank details */}
      <section className="bx-section" style={{ background: "#0b0b0d" }}>
        <div className="bx-container pay-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "start" }}>
          <div>
            <span className="bx-eyebrow" style={{ marginBottom: "20px", display: "inline-flex", color: "rgba(255,255,255,0.44)" }}>
              Payment Methods
            </span>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                lineHeight: 0.95,
                letterSpacing: "0.02em",
                color: "white",
                marginBottom: "32px",
                marginTop: "8px",
              }}
            >
              ACCEPTED <span style={{ color: "#C41E3A" }}>METHODS</span>
            </h2>
            <div style={{ display: "grid", gap: "12px" }}>
              {PAYMENT_METHODS.map(({ label, detail }) => (
                <div
                  key={label}
                  style={{
                    padding: "20px 24px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "14px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#C41E3A",
                      marginTop: "5px",
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <p style={{ margin: "0 0 4px", color: "white", fontSize: "14px", fontWeight: 700 }}>{label}</p>
                    <p style={{ margin: 0, color: "rgba(255,255,255,0.48)", fontSize: "13px" }}>{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="bx-eyebrow" style={{ marginBottom: "20px", display: "inline-flex", color: "rgba(255,255,255,0.44)" }}>
              Have a Query?
            </span>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                lineHeight: 0.95,
                letterSpacing: "0.02em",
                color: "white",
                marginBottom: "24px",
                marginTop: "8px",
              }}
            >
              CONTACT <span style={{ color: "#C41E3A" }}>BILLING</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.56)", fontSize: "15px", lineHeight: 1.75, marginBottom: "32px" }}>
              For invoice disputes, overdue payment plans, or questions about VAT, please contact our team directly. We aim to respond within one business day.
            </p>
            <div style={{ display: "grid", gap: "12px" }}>
              <a
                href="mailto:info@blockxint.com"
                className="pi-contact-link"
              >
                <Mail size={16} color="#C41E3A" /> info@blockxint.com
              </a>
              <a
                href="tel:+447440183728"
                className="pi-contact-link"
              >
                <Phone size={16} color="#C41E3A" /> +44 7440183728
              </a>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) { .pay-grid { grid-template-columns: 1fr !important; } }
          .pi-contact-link {
            display: flex; align-items: center; gap: 12px;
            padding: 16px 20px; background: rgba(255,255,255,0.04);
            border: 1px solid rgba(255,255,255,0.08); border-radius: 12px;
            color: rgba(255,255,255,0.7); font-size: 14px;
            text-decoration: none; transition: color 0.2s, border-color 0.2s;
          }
          .pi-contact-link:hover { color: white !important; border-color: rgba(255,255,255,0.16) !important; }
        `}</style>
      </section>

      {/* CTA */}
      <section style={{ background: "#111115", paddingBlock: "80px" }}>
        <div className="bx-container" style={{ textAlign: "center" }}>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(2rem, 4vw, 4rem)",
              lineHeight: 0.9,
              letterSpacing: "0.02em",
              color: "white",
              marginBottom: "16px",
            }}
          >
            INVOICE NOT FOUND?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.52)", fontSize: "15px", maxWidth: "440px", margin: "0 auto 32px", lineHeight: 1.7 }}>
            If you have not received an invoice or need a copy resent, contact our team and we will assist you promptly.
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
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
