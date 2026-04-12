"use client";

import { useState } from "react";
import { PageHero } from "@/components/layout/PageHero";
import FAQ3 from "@/components/blocks/faq-3";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";


export function ContactContent() {
  const [form, setForm] = useState({ name: "", email: "", company: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact BlockXAI Limited"
        title="LET'S BUILD"
        titleAccent="SOMETHING GREAT"
        subtitle="Whether you're ready to start a project or just exploring possibilities — we're here to help. No obligation, no pressure."
      />

      {/* Contact section */}
      <section className="bx-section" style={{ background: "#0b0b0d" }}>
        <div className="bx-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(40px, 6vw, 80px)",
              alignItems: "flex-start",
            }}
            className="contact-grid"
          >
            {/* Left: info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              <div>
                <h2
                  className="font-display"
                  style={{ margin: "0 0 16px", fontSize: "clamp(2rem, 3.2vw, 3rem)", lineHeight: 0.92, letterSpacing: "0.02em", color: "white" }}
                >
                  GET IN TOUCH
                </h2>
                <p style={{ color: "rgba(255,255,255,0.56)", fontSize: "15px", lineHeight: 1.7 }}>
                  Ready to discuss how blockchain or AI can transform your business? Our team is available to consult, advise, and design a solution built around your specific goals.
                </p>
              </div>

              <div style={{ display: "grid", gap: "16px" }}>
                {[
                  { icon: Phone, label: "Phone", value: "+44 7440 183728", href: "tel:+447440183728" },
                  { icon: Mail, label: "Email", value: "contact@blockxint.com", href: "mailto:contact@blockxint.com" },
                  { icon: MapPin, label: "Location", value: "18 Elmstead Avenue, Wembley, England, HA9 8NX", href: "#" },
                ].map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "16px",
                      textDecoration: "none",
                      padding: "16px 20px",
                      background: "#17181d",
                      border: "1px solid rgba(255,255,255,0.07)",
                      borderRadius: "12px",
                      transition: "border-color 0.2s, background 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "rgba(223,37,49,0.2)";
                      el.style.background = "#1a1b21";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "rgba(255,255,255,0.07)";
                      el.style.background = "#17181d";
                    }}
                  >
                    <span style={{
                      width: "40px", height: "40px", borderRadius: "10px",
                      background: "rgba(223,37,49,0.1)", border: "1px solid rgba(223,37,49,0.2)",
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}>
                      <Icon size={16} color="#df2531" />
                    </span>
                    <div>
                      <p style={{ margin: "0 0 2px", color: "rgba(255,255,255,0.4)", fontSize: "11px", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase" }}>{label}</p>
                      <p style={{ margin: 0, color: "white", fontSize: "14px", fontWeight: 600 }}>{value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "12px", padding: "20px 24px" }}>
                <p style={{ margin: "0 0 12px", color: "rgba(255,255,255,0.4)", fontSize: "11px", fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase" }}>Response Time</p>
                <p style={{ margin: 0, color: "rgba(255,255,255,0.68)", fontSize: "14px", lineHeight: 1.7 }}>
                  We typically respond within <strong style={{ color: "white" }}>24 hours</strong> on weekdays. For urgent enquiries, please call us directly.
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div style={{ background: "#17181d", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "20px", overflow: "hidden" }}>
              <div style={{ height: "4px", background: "#df2531" }} />
              <div style={{ padding: "36px" }}>
                {submitted ? (
                  <div style={{ textAlign: "center", padding: "40px 0" }}>
                    <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.24)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                      <span style={{ fontSize: "28px" }}>✓</span>
                    </div>
                    <h3 style={{ color: "white", fontSize: "22px", fontWeight: 800, marginBottom: "10px" }}>Message Sent!</h3>
                    <p style={{ color: "rgba(255,255,255,0.56)", fontSize: "14px", lineHeight: 1.7 }}>
                      Thank you for reaching out. We&apos;ll be in touch within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: "grid", gap: "16px" }}>
                    <h3 style={{ margin: "0 0 4px", color: "white", fontSize: "18px", fontWeight: 800 }}>Send a Message</h3>
                    <p style={{ margin: "0 0 8px", color: "rgba(255,255,255,0.44)", fontSize: "13px" }}>All fields marked * are required.</p>

                    {[
                      { name: "name", label: "Full Name *", type: "text", placeholder: "John Smith", required: true },
                      { name: "email", label: "Email Address *", type: "email", placeholder: "john@company.com", required: true },
                      { name: "company", label: "Company Name", type: "text", placeholder: "Your organisation", required: false },
                    ].map((field) => (
                      <div key={field.name}>
                        <label style={{ display: "block", color: "rgba(255,255,255,0.64)", fontSize: "12px", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px" }}>
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          required={field.required}
                          placeholder={field.placeholder}
                          value={form[field.name as keyof typeof form]}
                          onChange={(e) => setForm(p => ({ ...p, [field.name]: e.target.value }))}
                          style={{
                            width: "100%", padding: "12px 16px",
                            background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
                            borderRadius: "10px", color: "white", fontSize: "14px", outline: "none",
                            transition: "border-color 0.18s",
                          }}
                          onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#df2531"; }}
                          onBlur={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; }}
                        />
                      </div>
                    ))}

                    <div>
                      <label style={{ display: "block", color: "rgba(255,255,255,0.64)", fontSize: "12px", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px" }}>
                        Service of Interest
                      </label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm(p => ({ ...p, service: e.target.value }))}
                        style={{
                          width: "100%", padding: "12px 16px",
                          background: "#111115", border: "1px solid rgba(255,255,255,0.1)",
                          borderRadius: "10px", color: form.service ? "white" : "rgba(255,255,255,0.4)",
                          fontSize: "14px", outline: "none", appearance: "none",
                        }}
                      >
                        <option value="">Select a service area…</option>
                        <option value="blockchain">Blockchain Consulting</option>
                        <option value="web3">Web3 Solutions</option>
                        <option value="crypto">Crypto Services</option>
                        <option value="ai">AI Consultancy</option>
                        <option value="other">General Enquiry</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: "block", color: "rgba(255,255,255,0.64)", fontSize: "12px", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px" }}>
                        Message *
                      </label>
                      <textarea
                        required
                        placeholder="Tell us about your project, goals, or challenges…"
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm(p => ({ ...p, message: e.target.value }))}
                        style={{
                          width: "100%", padding: "12px 16px",
                          background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
                          borderRadius: "10px", color: "white", fontSize: "14px", outline: "none",
                          resize: "vertical", transition: "border-color 0.18s", minHeight: "100px",
                        }}
                        onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#df2531"; }}
                        onBlur={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; }}
                      />
                    </div>

                    <button
                      type="submit"
                      style={{
                        padding: "16px", background: "#df2531", color: "white",
                        fontSize: "15px", fontWeight: 700, border: "none", borderRadius: "12px",
                        cursor: "pointer", letterSpacing: "0.04em",
                        boxShadow: "0 8px 24px rgba(223,37,49,0.22)",
                        transition: "background 0.2s", marginTop: "4px",
                        display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#b81a26"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#df2531"; }}
                    >
                      Send Message <ArrowRight size={16} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 800px) { .contact-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      <FAQ3 />
    </>
  );
}
