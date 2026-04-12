import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { PageTransition } from "@/components/layout/PageTransition";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "BlockXAI Limited is a forward-thinking technology firm bridging the gap between emerging digital innovations and practical business applications in blockchain and AI.",
};

const TEAM_ROLES = [
  {
    role: "Blockchain Architects",
    desc: "Pioneering innovative blockchain strategies, our experts design and implement secure, scalable systems tailored to your business needs.",
  },
  {
    role: "AI Specialists",
    desc: "Our data scientists and machine learning engineers develop cutting-edge AI solutions that transform raw data into actionable insights.",
  },
  {
    role: "Technology Strategists",
    desc: "Our leaders deeply understand emerging trends and drive the vision of disruptive technologies to power your digital transformation.",
  },
];

export default function AboutPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="About BlockXAI Limited"
        title="BRIDGING INNOVATION"
        titleAccent="& BUSINESS"
        subtitle="Founded with a passion for innovation, BlockXAI Limited believes technology can fundamentally transform business operations — merging blockchain's disruptive power with AI's analytical prowess."
      />

      {/* Our Story */}
      <section className="bx-section" style={{ background: "#f3efe8" }}>
        <div className="bx-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(40px, 6vw, 80px)",
              alignItems: "flex-start",
            }}
            className="about-grid"
          >
            <div>
              <span className="bx-eyebrow">Our Story</span>
              <h2
                className="font-display"
                style={{
                  marginTop: "16px",
                  marginBottom: "24px",
                  fontSize: "clamp(2.4rem, 4vw, 4rem)",
                  lineHeight: 0.92,
                  letterSpacing: "0.02em",
                  color: "#0b0b0d",
                }}
              >
                FOUNDED ON A VISION
              </h2>
              <div style={{ display: "grid", gap: "16px" }}>
                <p style={{ color: "rgba(11,11,13,0.7)", fontSize: "15px", lineHeight: 1.75 }}>
                  Founded with a passion for innovation, BlockX AI Limited believed that technology can fundamentally transform business operations. Our journey began with a vision to merge blockchain&apos;s disruptive power with artificial intelligence&apos;s analytical prowess.
                </p>
                <p style={{ color: "rgba(11,11,13,0.7)", fontSize: "15px", lineHeight: 1.75 }}>
                  Since our inception, we have been dedicated to crafting robust, integrated solutions that drive efficiency, security, and growth for organisations across diverse industries.
                </p>
              </div>
            </div>

            <div>
              <span className="bx-eyebrow">Our Mission</span>
              <div
                style={{
                  marginTop: "20px",
                  background: "#0b0b0d",
                  borderRadius: "16px",
                  padding: "32px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    top: "-30px",
                    right: "-30px",
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    background: "rgba(196,30,58,0.2)",
                    filter: "blur(30px)",
                    pointerEvents: "none",
                  }}
                />
                <p
                  style={{
                    color: "rgba(255,255,255,0.8)",
                    fontSize: "16px",
                    lineHeight: 1.75,
                    fontStyle: "italic",
                    margin: 0,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  &ldquo;Our mission is to empower businesses to thrive in the digital era by delivering forward-thinking, transformative technologies — enabling increased transparency, efficiency, and competitive advantage.&rdquo;
                </p>
                <div
                  style={{
                    marginTop: "20px",
                    paddingTop: "16px",
                    borderTop: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <span style={{ color: "#C41E3A", fontSize: "22px", fontWeight: 800 }}>—</span>
                  <span style={{ color: "rgba(255,255,255,0.52)", fontSize: "13px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>BlockXAI Limited Mission Statement</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 800px) { .about-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* Team */}
      <section className="bx-section" style={{ background: "#0b0b0d" }}>
        <div className="bx-container">
          <div style={{ marginBottom: "56px", maxWidth: "560px" }}>
            <span className="bx-eyebrow">Our Team</span>
            <h2
              className="font-display"
              style={{
                marginTop: "16px",
                marginBottom: "16px",
                fontSize: "clamp(2.4rem, 4vw, 4rem)",
                lineHeight: 0.92,
                letterSpacing: "0.02em",
                color: "white",
              }}
            >
              EXPERTISE ACROSS DISCIPLINES
            </h2>
            <p style={{ color: "rgba(255,255,255,0.54)", fontSize: "15px", lineHeight: 1.7 }}>
              At the heart of BlockXAI is a diverse team of experts committed to excellence, bringing decades of combined experience to every project.
            </p>
          </div>

          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}
            className="team-grid"
          >
            {TEAM_ROLES.map((role, i) => (
              <div
                key={role.role}
                style={{
                  background: "#17181d",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "16px",
                  padding: "28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <span
                  className="font-display"
                  style={{ fontSize: "3rem", color: "rgba(196,30,58,0.4)", lineHeight: 1, letterSpacing: "0.02em" }}
                >
                  0{i + 1}
                </span>
                <h3 style={{ margin: 0, color: "white", fontSize: "18px", fontWeight: 800, letterSpacing: "0.02em" }}>
                  {role.role}
                </h3>
                <p style={{ margin: 0, color: "rgba(255,255,255,0.52)", fontSize: "14px", lineHeight: 1.7 }}>
                  {role.desc}
                </p>
              </div>
            ))}
          </div>

          <p style={{ marginTop: "36px", color: "rgba(255,255,255,0.5)", fontSize: "15px", lineHeight: 1.7, maxWidth: "640px" }}>
            Together, we create a dynamic environment where creativity meets technical excellence — ensuring every solution is advanced, practical, and built to last.
          </p>
        </div>

        <style>{`
          @media (max-width: 900px) { .team-grid { grid-template-columns: 1fr !important; } }
          @media (min-width: 601px) and (max-width: 900px) { .team-grid { grid-template-columns: 1fr 1fr !important; } }
        `}</style>
      </section>

      {/* Vision */}
      <section className="bx-section" style={{ background: "#17181d" }}>
        <div className="bx-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(40px, 6vw, 80px)",
              alignItems: "center",
            }}
            className="vision-grid"
          >
            <div>
              <span className="bx-eyebrow">Vision for the Future</span>
              <h2
                className="font-display"
                style={{
                  marginTop: "16px",
                  marginBottom: "24px",
                  fontSize: "clamp(2.4rem, 4vw, 4.4rem)",
                  lineHeight: 0.88,
                  letterSpacing: "0.02em",
                  color: "white",
                }}
              >
                SHAPING THE <span style={{ color: "#C41E3A" }}>DIGITAL</span> FUTURE
              </h2>
              <p style={{ color: "rgba(255,255,255,0.58)", fontSize: "15px", lineHeight: 1.75, marginBottom: "24px" }}>
                We envision a future where blockchain and AI redefine the business landscape. Blockchain&apos;s promise of transparency and security, combined with AI&apos;s ability to analyse and predict trends, will revolutionise how companies operate.
              </p>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "15px", lineHeight: 1.75 }}>
                We are committed to staying at the forefront of this technological evolution — continuously exploring new possibilities that empower our clients to lead confidently in an increasingly digital world.
              </p>
            </div>

            <div style={{ display: "grid", gap: "14px" }}>
              {[
                { title: "With BlockXAI Limited", body: "You're not just adapting to change — you're driving it." },
                { title: "Join us", body: "As we shape a more secure, efficient, and innovative business future." },
                { title: "Our commitment", body: "Blockchain solutions that pioneer secure, decentralised technology for seamless transactions and smart contract automation." },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "12px",
                    padding: "20px 24px",
                    borderLeft: "3px solid #C41E3A",
                  }}
                >
                  <h4 style={{ margin: "0 0 8px", color: "white", fontSize: "14px", fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    {item.title}
                  </h4>
                  <p style={{ margin: 0, color: "rgba(255,255,255,0.56)", fontSize: "13px", lineHeight: 1.65 }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 800px) { .vision-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* CTA */}
      <section
        style={{
          background: "#0b0b0d",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          paddingBlock: "72px",
          textAlign: "center",
        }}
      >
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
            READY TO WORK <span style={{ color: "#C41E3A" }}>TOGETHER?</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "15px", maxWidth: "480px", margin: "0 auto 32px", lineHeight: 1.7 }}>
            Let&apos;s discuss how blockchain and AI can transform your specific business operations and create new opportunities.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
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
              Get in Touch <ArrowRight size={16} />
            </Link>
            <Link
              href="/services"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "16px 32px",
                background: "rgba(255,255,255,0.06)",
                color: "white",
                fontSize: "15px",
                fontWeight: 700,
                textDecoration: "none",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
