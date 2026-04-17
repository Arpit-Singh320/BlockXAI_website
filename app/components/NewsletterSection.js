"use client";
import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <section
      id="newsletter"
      style={{
        background: "linear-gradient(180deg,#050A1A 0%,#000000 100%)",
        padding: "6rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative circles */}
      <div style={{ position:"absolute", inset:0, pointerEvents:"none" }}>
        <div style={{
          position:"absolute",
          right:"-8%", top:"-40%",
          width:500, height:500,
          borderRadius:"50%",
          border:"1px solid rgba(255,26,26,0.07)",
        }}/>
        <div style={{
          position:"absolute",
          left:"-5%", bottom:"-30%",
          width:380, height:380,
          borderRadius:"50%",
          border:"1px solid rgba(255,26,26,0.05)",
        }}/>
        <div style={{
          position:"absolute",
          left:"40%", top:"50%",
          transform:"translate(-50%,-50%)",
          width:600, height:300,
          background:"radial-gradient(ellipse, rgba(139,0,0,0.1) 0%, transparent 70%)",
          filter:"blur(50px)",
        }}/>
      </div>

      <div style={{ maxWidth:680, margin:"0 auto", padding:"0 2rem", textAlign:"center", position:"relative", zIndex:2 }}>
        <div style={{
          display:"inline-flex", alignItems:"center", gap:6,
          padding:"0.3rem 0.9rem",
          background:"rgba(255,26,26,0.1)",
          border:"1px solid rgba(255,26,26,0.25)",
          borderRadius:100,
          color:"#FF6666",
          fontSize:"0.72rem",
          fontWeight:700,
          letterSpacing:"0.1em",
          textTransform:"uppercase",
          marginBottom:"1.5rem",
        }}>
          🔴 Early Access Program
        </div>

        <h2 style={{
          fontFamily:"var(--font-display,'Space Grotesk',sans-serif)",
          fontSize:"clamp(2rem,4vw,3rem)",
          fontWeight:800,
          color:"#ffffff",
          marginBottom:"1rem",
          letterSpacing:"-0.02em",
        }}>
          Join the{" "}
          <span style={{
            background:"linear-gradient(135deg,#FF4444,#B30000)",
            WebkitBackgroundClip:"text",
            WebkitTextFillColor:"transparent",
            backgroundClip:"text",
          }}>
            Health Revolution
          </span>
        </h2>

        <p style={{
          color:"rgba(255,255,255,0.5)",
          fontSize:"1rem",
          lineHeight:1.75,
          marginBottom:"2.5rem",
        }}>
          Be among the first to access NeuralMed's AI-driven clinical platform.
          Priority onboarding, dedicated support, and exclusive early adopter pricing.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <div style={{ display:"flex", gap:"0.75rem", flexWrap:"wrap", justifyContent:"center" }}>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={e=>setEmail(e.target.value)}
                required
                style={{
                  flex:1,
                  minWidth:220,
                  padding:"0.9rem 1.25rem",
                  background:"rgba(255,255,255,0.06)",
                  border:"1px solid rgba(255,255,255,0.1)",
                  borderRadius:8,
                  color:"#fff",
                  fontSize:"0.95rem",
                  outline:"none",
                }}
              />
              <button
                id="newsletter-submit"
                type="submit"
                style={{
                  padding:"0.9rem 1.75rem",
                  background:"linear-gradient(90deg,#FF1A1A,#B30000)",
                  border:"none",
                  borderRadius:8,
                  color:"#fff",
                  fontWeight:700,
                  fontSize:"0.95rem",
                  cursor:"pointer",
                  whiteSpace:"nowrap",
                  boxShadow:"0 4px 16px rgba(255,26,26,0.4)",
                  transition:"box-shadow 0.25s ease, transform 0.25s ease",
                }}
                onMouseEnter={e=>{e.currentTarget.style.boxShadow="0 6px 24px rgba(255,26,26,0.6)"; e.currentTarget.style.transform="translateY(-1px)";}}
                onMouseLeave={e=>{e.currentTarget.style.boxShadow="0 4px 16px rgba(255,26,26,0.4)"; e.currentTarget.style.transform="translateY(0)";}}
              >
                Get Early Access
              </button>
            </div>
          </form>
        ) : (
          <div style={{
            padding:"2rem",
            background:"rgba(255,255,255,0.04)",
            border:"1px solid rgba(255,26,26,0.2)",
            borderRadius:12,
          }}>
            <div style={{ fontSize:"2rem", marginBottom:"0.75rem" }}>✅</div>
            <h3 style={{ fontWeight:700, marginBottom:"0.5rem" }}>You're on the list!</h3>
            <p style={{ color:"rgba(255,255,255,0.5)", fontSize:"0.9rem" }}>
              We'll be in touch within 48 hours with your onboarding details.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
