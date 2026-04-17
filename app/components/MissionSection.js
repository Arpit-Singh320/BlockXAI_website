"use client";

export default function MissionSection() {
  return (
    <section
      id="mission"
      style={{
        background: "transparent",
        padding: "6rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background figure silhouette (like reference) */}
      <div
        style={{
          position: "absolute",
          right: "6%",
          top: "50%",
          transform: "translateY(-50%)",
          pointerEvents: "none",
          opacity: 0.06,
        }}
      >
        <svg width="340" height="420" viewBox="0 0 340 420" fill="none">
          {/* Person silhouette like the reference */}
          <circle cx="170" cy="60" r="55" fill="#FF1A1A"/>
          <path d="M60 200 C60 130 280 130 280 200 L310 420 L30 420 Z" fill="#FF1A1A"/>
          <path d="M70 220 L10 380 M270 220 L330 380" stroke="#FF1A1A" strokeWidth="60" strokeLinecap="round"/>
        </svg>
      </div>

      {/* Decorative circles */}
      <div style={{ position:"absolute", inset:0, pointerEvents:"none" }}>
        <div style={{
          position:"absolute", bottom:"-8%", left:"-4%",
          width:220, height:220, borderRadius:"50%",
          border:"1px solid rgba(255,26,26,0.12)",
        }}/>
        <div style={{
          position:"absolute", bottom:"-4%", left:"-2%",
          width:160, height:160, borderRadius:"50%",
          border:"1px solid rgba(255,26,26,0.08)",
        }}/>
        <div style={{
          position:"absolute", top:"10%", right:"3%",
          width:150, height:150, borderRadius:"50%",
          border:"1px solid rgba(255,26,26,0.06)",
        }}/>
        {/* Glow */}
        <div style={{
          position:"absolute", left:"30%", top:"30%",
          width:500, height:300,
          background:"radial-gradient(ellipse, rgba(139,0,0,0.15) 0%, transparent 70%)",
          filter:"blur(40px)",
        }}/>
      </div>

      <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 2rem", position:"relative", zIndex:2 }}>
        {/* WHO WE ARE tag */}
        <div style={{
          display:"inline-flex", alignItems:"center", gap:6,
          color:"rgba(255,100,100,0.75)",
          fontSize:"0.72rem",
          fontWeight:700,
          letterSpacing:"0.14em",
          textTransform:"uppercase",
          marginBottom:"1.25rem",
        }}>
          <span style={{ width:6, height:6, borderRadius:"50%", background:"#FF6666", display:"inline-block" }}/>
          Who We Are
        </div>

        {/* Two-column: heading left, body right */}
        <div
          style={{
            display:"grid",
            gridTemplateColumns:"1fr 1.3fr",
            gap:"5rem",
            alignItems:"start",
          }}
          className="mission-grid"
        >
          {/* Left: Big heading */}
          <div>
            <h2 style={{
              fontFamily:"var(--font-display,'Space Grotesk',sans-serif)",
              fontSize:"clamp(3rem,6vw,5.5rem)",
              fontWeight:800,
              lineHeight:1.05,
              letterSpacing:"-0.025em",
              color:"#ffffff",
              marginBottom:"1rem",
            }}>
              BlockX AI
              <br/>
              <span style={{
                background:"linear-gradient(135deg,#FF4444,#FF1A1A,#B30000)",
                WebkitBackgroundClip:"text",
                WebkitTextFillColor:"transparent",
                backgroundClip:"text",
              }}>
                Limited
              </span>
            </h2>
          </div>

          {/* Right: Body paragraphs */}
          <div style={{ paddingTop:"0.5rem" }}>
            <p style={{
              fontSize:"1.15rem",
              lineHeight:1.8,
              color:"rgba(255,255,255,0.72)",
              fontWeight:300,
            }}>
              We are a forward-thinking technology firm dedicated to bridging the gap between emerging digital innovations and practical business applications. With deep expertise in blockchain consulting, Web3 development, crypto services, and AI consultancy, our team is committed to delivering customized solutions that drive real-world impact. Whether you're looking to modernize your infrastructure or explore new revenue streams, we're here to guide your digital transformation every step of the way.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          .mission-grid{ grid-template-columns:1fr !important; gap:2rem !important; }
        }
      `}</style>
    </section>
  );
}
