"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #050A1A 0%, #0A0010 60%, #000000 100%)",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(rgba(255,26,26,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,26,26,0.03) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* Red glow behind image */}
      <div
        style={{
          position: "absolute",
          right: "0",
          top: "10%",
          width: "55%",
          height: "80%",
          background: "radial-gradient(ellipse at 70% 50%, rgba(139,0,0,0.28) 0%, rgba(255,26,26,0.06) 45%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "6rem 2rem 3rem",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "center",
          position: "relative",
          zIndex: 2,
        }}
        className="hero-grid"
      >
        {/* LEFT: Text */}
        <div>
          {/* Headline — matching reference big bold style */}
          <h1
            style={{
              fontFamily: "var(--font-display,'Space Grotesk',sans-serif)",
              fontSize: "clamp(2.5rem, 5vw, 4.8rem)",
              fontWeight: 400,
              lineHeight: 1.08,
              letterSpacing: "-0.025em",
              color: "#ffffff",
              marginBottom: "1.75rem",
            }}
          >
            BlockX AI Limited
            <br />
            <span
              style={{
                background: "linear-gradient(135deg,#FF4444,#FF1A1A,#B30000)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Technology for Business
            </span>
          </h1>

          {/* CTA row — matches reference: text link + round arrow button */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginTop: "2.5rem" }}>
            <span
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "0.95rem",
                fontWeight: 500,
                letterSpacing: "0.01em",
              }}
            >
              Get Started Today
            </span>
            <a
              href="#mission"
              id="hero-cta"
              aria-label="Get Started"
              style={{
                width: 56,
                height: 56,
                borderRadius: 0,
                background: "linear-gradient(135deg,#FF1A1A,#B30000)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 28px rgba(255,26,26,0.5), 0 0 60px rgba(255,26,26,0.2)",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
                textDecoration: "none",
                flexShrink: 0,
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.1)"; e.currentTarget.style.boxShadow = "0 0 40px rgba(255,26,26,0.7), 0 0 80px rgba(255,26,26,0.3)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 0 28px rgba(255,26,26,0.5), 0 0 60px rgba(255,26,26,0.2)"; }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Stats row */}
        </div>

        {/* RIGHT: hero.jpeg */}
        <div
          className="hero-visual"
          style={{
            position: "relative",
            width: "calc(100% + 4rem)",
            marginLeft: "-2rem",
            marginRight: "-2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Glowing backdrop */}
          <div
            style={{
              position: "absolute",
              inset: "-5%",
              background: "radial-gradient(ellipse at center, rgba(255,26,26,0.15) 0%, transparent 65%)",
              filter: "blur(20px)",
              borderRadius: "50%",
              pointerEvents: "none",
            }}
          />

          <div style={{
            position: "relative",
            width: "88%",
            aspectRatio: "5/6",
            marginTop: "-5%",
            WebkitMaskImage: "radial-gradient(ellipse 100% 90% at 35% 50%, black 40%, transparent 90%)",
            maskImage: "radial-gradient(ellipse 100% 90% at 35% 50%, black 40%, transparent 90%)",
          }}>
            <Image
              src="/hero.png"
              alt="AI health infrastructure 3D visualization"
              fill
              priority
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              sizes="(max-width:900px) 100vw, 50vw"
            />
          </div>

        </div>
      </div>

      <style>{`
        @media(min-width:1200px){
          .hero-grid{
            width:min(92vw, 1280px) !important;
            max-width:min(92vw, 1280px) !important;
            padding-left:0 !important;
            padding-right:0 !important;
          }
        }
        @media(max-width:900px){
          .hero-grid{
            grid-template-columns:1fr !important;
            gap: 2rem !important;
            padding: 5rem 1.25rem 2rem !important;
          }
          .hero-grid > div:last-child{ aspect-ratio:4/3; }
          .hero-visual{
            width: 100% !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
        }
        @media(max-width:560px){
          .hero-grid{
            padding-top: 4.4rem !important;
          }
        }
      `}</style>
    </section>
  );
}
