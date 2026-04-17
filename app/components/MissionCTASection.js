"use client";

export default function MissionCTASection() {
  return (
    <section
      id="mission-cta"
      style={{
        background: "linear-gradient(135deg, #0D0005 0%, #1A0000 40%, #0A000F 100%)",
        padding: "6rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative abstract shapes — left side */}
      <div style={{ position:"absolute", left:0, top:0, bottom:0, width:"38%", pointerEvents:"none" }}>
        {/* Large square-ish shape */}
        <div style={{
          position:"absolute",
          left:"-5%",
          top:"15%",
          width:180,
          height:180,
          background:"rgba(255,26,26,0.12)",
          borderRadius:20,
          transform:"rotate(-15deg)",
        }}/>
        <div style={{
          position:"absolute",
          left:"12%",
          top:"35%",
          width:140,
          height:140,
          background:"rgba(139,0,0,0.15)",
          borderRadius:20,
          transform:"rotate(10deg)",
        }}/>
        <div style={{
          position:"absolute",
          left:"-2%",
          bottom:"10%",
          width:200,
          height:200,
          background:"rgba(255,26,26,0.06)",
          borderRadius:"50%",
        }}/>
        {/* Faint 3D corner shape */}
        <div style={{
          position:"absolute",
          right:"5%",
          top:"10%",
          width:"60%",
          height:"80%",
          background:"radial-gradient(ellipse at 30% 50%, rgba(139,0,0,0.2) 0%, transparent 70%)",
          filter:"blur(30px)",
        }}/>
      </div>

      {/* Decorative circle — right side */}
      <div style={{
        position:"absolute",
        right:"-5%",
        top:"50%",
        transform:"translateY(-50%)",
        width:300,
        height:300,
        borderRadius:"50%",
        border:"1px solid rgba(255,26,26,0.1)",
        pointerEvents:"none",
      }}/>
      <div style={{
        position:"absolute",
        right:"3%",
        top:"50%",
        transform:"translateY(-50%)",
        width:200,
        height:200,
        borderRadius:"50%",
        border:"1px solid rgba(255,26,26,0.07)",
        pointerEvents:"none",
      }}/>

      <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 2rem", position:"relative", zIndex:2 }}>
        <div
          style={{
            display:"grid",
            gridTemplateColumns:"1fr 1.2fr",
            gap:"4rem",
            alignItems:"center",
          }}
          className="cta-grid"
        >
          {/* Left: spacer / decorative visual area */}
          <div style={{ height:300 }}/>

          {/* Right: text content */}
          <div>
            <p style={{
              fontSize:"clamp(1.5rem,3.5vw,2.5rem)",
              lineHeight:1.45,
              color:"rgba(255,255,255,0.85)",
              fontWeight:300,
              marginBottom:"2.5rem",
            }}>
              This leads to{" "}
              <span style={{
                display:"inline-block",
                padding:"0.05em 0.6em",
                background:"rgba(255,26,26,0.22)",
                border:"1px solid rgba(255,26,26,0.4)",
                borderRadius:8,
                color:"#FF8888",
                fontWeight:600,
                fontStyle:"italic",
              }}>
                better outcomes
              </span>{" "}
              and a greater sense of control over their own health.
            </p>

            {/* CTA — matches reference: text + round yellow-ish button (we use red) */}
            <div style={{ display:"flex", alignItems:"center", gap:"1.25rem" }}>
              <span style={{
                color:"rgba(255,255,255,0.55)",
                fontSize:"0.95rem",
                fontWeight:500,
              }}>
                Sign Me Up
              </span>
              <a
                href="#newsletter"
                id="missioncta-btn"
                aria-label="Sign Me Up"
                style={{
                  width:52,
                  height:52,
                  borderRadius:"50%",
                  background:"linear-gradient(135deg,#FF1A1A,#B30000)",
                  display:"flex",
                  alignItems:"center",
                  justifyContent:"center",
                  boxShadow:"0 0 24px rgba(255,26,26,0.45)",
                  textDecoration:"none",
                  transition:"transform 0.25s ease, box-shadow 0.25s ease",
                  flexShrink:0,
                }}
                onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.1)"; e.currentTarget.style.boxShadow="0 0 40px rgba(255,26,26,0.65)";}}
                onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)"; e.currentTarget.style.boxShadow="0 0 24px rgba(255,26,26,0.45)";}}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5v14M5 12h14" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          .cta-grid{ grid-template-columns:1fr !important; }
          .cta-grid>div:first-child{ display:none !important; }
        }
      `}</style>
    </section>
  );
}
