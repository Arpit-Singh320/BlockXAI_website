"use client";
import Image from "next/image";

const FEATURES = [
  {
    id: "assessments",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        <circle cx="28" cy="28" r="28" fill="rgba(255,26,26,0.08)"/>
        {/* Bar chart icon matching reference style */}
        <rect x="14" y="32" width="6" height="12" rx="2" fill="#FF1A1A"/>
        <rect x="23" y="24" width="6" height="20" rx="2" fill="#FF6666"/>
        <rect x="32" y="18" width="6" height="26" rx="2" fill="#FF1A1A"/>
        <circle cx="40" cy="16" r="4" fill="#FF6666"/>
        <path d="M18 28 L26 20 L34 14 L40 12" stroke="#FF8888" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Personalized Measurable Assessments",
    desc: "At NeuralMed, we empower individuals by using cutting-edge physiological data to craft personalized plans for vitamins, supplements, diet, and lifestyle. This ensures every recommendation is tailored to your unique needs, driving more effective and measurable health outcomes.",
  },
  {
    id: "monitoring",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        <circle cx="28" cy="28" r="28" fill="rgba(255,26,26,0.08)"/>
        {/* Search/monitoring icon */}
        <circle cx="26" cy="26" r="10" stroke="#FF1A1A" strokeWidth="2.5" fill="rgba(255,26,26,0.08)"/>
        <path d="M33 33 L42 42" stroke="#FF1A1A" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="26" cy="26" r="5" fill="#FF6666" fillOpacity="0.3"/>
        <circle cx="26" cy="26" r="2" fill="#FF1A1A"/>
      </svg>
    ),
    title: "Accurate Monitoring",
    desc: "Our advanced technology enables precise tracking of your health and progress. With clear insights derived from your physiology, we help you stay on top of your wellness journey, refining strategies to align with your evolving goals.",
  },
  {
    id: "insights",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        <circle cx="28" cy="28" r="28" fill="rgba(255,26,26,0.08)"/>
        {/* DNA/bio icon */}
        <circle cx="28" cy="16" r="5" fill="rgba(255,26,26,0.2)" stroke="#FF1A1A" strokeWidth="2"/>
        <path d="M28 21 L28 35" stroke="#FF1A1A" strokeWidth="2" strokeLinecap="round"/>
        <path d="M20 28 L36 28" stroke="#FF6666" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="20" cy="35" r="4" fill="rgba(255,26,26,0.15)" stroke="#FF6666" strokeWidth="1.5"/>
        <circle cx="36" cy="35" r="4" fill="rgba(255,26,26,0.15)" stroke="#FF6666" strokeWidth="1.5"/>
        <path d="M28 35 L24 40 M28 35 L32 40" stroke="#FF1A1A" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Objective Measures of Biological Processes",
    desc: "We transform complex biological data into actionable insights, giving you an objective understanding of how your body operates. This approach ensures clarity, enabling you to make informed decisions that lead to meaningful and measurable improvements in your health.",
  },
];

export default function FeaturesSection() {
  return (
    <>
      {/* "Why Choose NeuralMed?" sub-header */}
      <section
        style={{
          background: "#F3F4F6",
          padding: "5rem 0",
          position: "relative",
        }}
      >
        <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 2rem" }}>
          {/* Section heading — matches reference */}
          <h2
            style={{
              fontFamily:"var(--font-display,'Space Grotesk',sans-serif)",
              fontSize:"clamp(1.75rem,3.5vw,2.5rem)",
              fontWeight:700,
              color:"#111827",
              textAlign:"center",
              marginBottom:"4rem",
              letterSpacing:"-0.015em",
            }}
          >
            Why Choose{" "}
            <span style={{
              background:"linear-gradient(135deg,#FF4444,#B30000)",
              WebkitBackgroundClip:"text",
              WebkitTextFillColor:"transparent",
              backgroundClip:"text",
            }}>
              NeuralMed?
            </span>
          </h2>

          {/* 3-column icon grid */}
          <div
            style={{
              display:"grid",
              gridTemplateColumns:"repeat(3,1fr)",
              gap:"3rem",
            }}
            className="features-cols"
          >
            {FEATURES.map((f)=>(
              <div
                key={f.id}
                id={`feature-${f.id}`}
                style={{
                  display:"flex",
                  flexDirection:"column",
                  alignItems:"center",
                  textAlign:"center",
                }}
              >
                {/* Icon */}
                <div style={{ marginBottom:"1.5rem" }}>
                  {f.icon}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily:"var(--font-display,'Space Grotesk',sans-serif)",
                    fontSize:"1.05rem",
                    fontWeight:700,
                    color:"#111827",
                    marginBottom:"1rem",
                    lineHeight:1.35,
                  }}
                >
                  {f.title}
                </h3>

                {/* Body — matching reference: some words highlighted in red */}
                <p
                  style={{
                    fontSize:"0.9rem",
                    lineHeight:1.75,
                    color:"#6B7280",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: f.desc
                      .replace(/(cutting-edge|precise tracking|biological data|actionable insights)/gi,
                        '<span style="color:#CC0000;font-weight:500">$1</span>')
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / 3D Block section — image 4 from reference */}
      <section
        id="features-visual"
        style={{
          background: "#1b1719",
          padding: "0",
          position: "relative",
          overflow: "hidden",
          minHeight: "68.4vh",
          display: "flex",
          alignItems: "stretch",
        }}
      >
        <div
          style={{
            maxWidth:"100%",
            margin:"0",
            width:"100%",
            background: "#1b1719",
            display:"grid",
            gridTemplateColumns:"1fr 1fr",
            alignItems:"center",
            minHeight: "clamp(460px, 68vh, 820px)",
          }}
          className="newsletter-inner"
        >
          {/* Left: 3dblock.png (moved to left, with gradient blend) */}
          <div style={{ position:"relative", height:"100%", minHeight:"clamp(360px, 55vh, 760px)", display: "flex", alignItems: "stretch" }}>
            <div style={{
              position: "relative",
              width: "100%",
              height: "100%",
              minHeight: "clamp(360px, 55vh, 760px)",
              overflow: "hidden",
              background: "#1b1719",
            }}>
              <div
                className="block-image-inner"
                style={{
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  width: "90%",
                  height: "90%",
                }}
              >
                <Image
                  src="/3dblock.png"
                  alt="3D geometric block abstract visualization"
                  fill
                  style={{
                    objectFit: "contain",
                    objectPosition: "left center",
                    filter: "saturate(0.9) brightness(0.98)",
                  }}
                  sizes="50vw"
                />
              </div>
            </div>
          </div>

          {/* Right: Subscribe text */}
          <div style={{ padding:"clamp(2rem, 4vw, 4rem) clamp(1.25rem, 3vw, 3rem)" }}>
            <h2 style={{
              fontFamily:"var(--font-display,'Space Grotesk',sans-serif)",
              fontSize:"clamp(2rem,4vw,3rem)",
              fontWeight:800,
              color:"#ffffff",
              lineHeight:1.15,
              marginBottom:"1.25rem",
              letterSpacing:"-0.02em",
            }}>
              Subscribe to
              <br/>
              <span style={{
                background:"linear-gradient(135deg,#FF4444,#FF1A1A)",
                WebkitBackgroundClip:"text",
                WebkitTextFillColor:"transparent",
                backgroundClip:"text",
              }}>
                Our Newsletter
              </span>
            </h2>
            <p style={{
              color:"rgba(255,255,255,0.55)",
              fontSize:"1rem",
              lineHeight:1.7,
              marginBottom:"2rem",
              maxWidth:340,
            }}>
              Stay informed with the latest updates, insights, and exclusive offers by subscribing to our newsletter.
            </p>
            <div style={{ display:"flex", gap:"0.75rem", flexWrap:"wrap" }}>
              <input
                id="newsletter-email-feat"
                type="email"
                placeholder="Enter your email"
                style={{
                  flex:1,
                  minWidth:180,
                  padding:"0.9rem 1.1rem",
                  background:"rgba(255,255,255,0.07)",
                  border:"1px solid rgba(255,255,255,0.12)",
                  borderRadius:8,
                  color:"#ffffff",
                  fontSize:"0.9rem",
                  outline:"none",
                }}
              />
              <button
                id="newsletter-submit-feat"
                style={{
                  padding:"0.9rem 1.5rem",
                  background:"linear-gradient(90deg,#FF1A1A,#B30000)",
                  border:"none",
                  borderRadius:8,
                  color:"#ffffff",
                  fontWeight:700,
                  fontSize:"0.9rem",
                  cursor:"pointer",
                  boxShadow:"0 4px 16px rgba(255,26,26,0.4)",
                  transition:"box-shadow 0.25s ease, transform 0.25s ease",
                  display:"flex",
                  alignItems:"center",
                  gap:"0.4rem",
                  whiteSpace:"nowrap",
                }}
                onMouseEnter={e=>{e.currentTarget.style.boxShadow="0 6px 24px rgba(255,26,26,0.6)"; e.currentTarget.style.transform="translateY(-1px)";}}
                onMouseLeave={e=>{e.currentTarget.style.boxShadow="0 4px 16px rgba(255,26,26,0.4)"; e.currentTarget.style.transform="translateY(0)";}}
              >
                Subscribe
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <style>{`
          @media(max-width:980px){
            .features-cols{ grid-template-columns:repeat(2,1fr) !important; gap:2rem !important; }
            .newsletter-inner{ grid-template-columns:1fr !important; }
            .newsletter-inner > div:first-child,
            .newsletter-inner > div:first-child > div{
              min-height:340px !important;
            }
            .block-image-inner{
              width: 100% !important;
              height: 100% !important;
            }
          }
          @media(max-width:768px){
            .features-cols{ grid-template-columns:1fr !important; }
            #features-visual,
            .newsletter-inner,
            .newsletter-inner > div:first-child,
            .newsletter-inner > div:first-child > div{
              min-height:unset !important;
            }
            .newsletter-inner{ grid-template-columns:1fr !important; }
            .newsletter-inner > div:first-child{ min-height:300px !important; }
            .newsletter-inner > div:first-child > div{ min-height:300px !important; }
            .block-image-inner{ width:95% !important; height:95% !important; }
          }
        `}</style>
      </section>
    </>
  );
}
