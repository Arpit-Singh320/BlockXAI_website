"use client";
import { useState } from "react";

const INDUSTRY_OPTIONS = [
  { id: "fitness2", label: "Fitness, Personal Training, and Nutrition", icon: "↗" },
  { id: "holistic2", label: "Holistic Health", icon: "♥" },
  { id: "hospital2", label: "Hospital Systems", icon: "🏥" },
  { id: "research2", label: "Research Institutions", icon: "🧪" },
  { id: "pharma2", label: "Pharma & Biotech", icon: "💊" },
  { id: "insurance2", label: "Health Insurance", icon: "📋" },
  { id: "corporate2", label: "Corporate Wellness", icon: "🏢" },
];

export default function HowItHelpsSection() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="how-it-helps"
      style={{
        background: "#ffffff",
        padding: "5rem 0",
        position: "relative",
      }}
    >
      <div style={{ maxWidth:700, margin:"0 auto", padding:"0 2rem", textAlign:"center" }}>
        {/* Main heading — exact reference copy */}
        <h2
          style={{
            fontFamily:"var(--font-display,'Space Grotesk',sans-serif)",
            fontSize:"clamp(2rem,4vw,3rem)",
            fontWeight:700,
            color:"#111827",
            marginBottom:"0.75rem",
            letterSpacing:"-0.02em",
          }}
        >
          How NeuralMed helps
        </h2>

        <p style={{
          color:"#9CA3AF",
          fontSize:"1rem",
          marginBottom:"2.5rem",
        }}>
          What industry applies to you?
        </p>

        {/* Two primary cards */}
        <div
          style={{
            display:"grid",
            gridTemplateColumns:"1fr 1fr",
            gap:"0.75rem",
            marginBottom:"1rem",
          }}
          className="helps-cards"
        >
          {INDUSTRY_OPTIONS.slice(0,2).map((opt)=>(
            <button
              key={opt.id}
              id={`helps-${opt.id}`}
              onClick={()=>setSelected(opt.id)}
              style={{
                display:"flex",
                alignItems:"center",
                gap:"0.75rem",
                padding:"1rem 1.25rem",
                borderRadius:12,
                border: selected===opt.id ? "2px solid #FF1A1A" : "1.5px solid #E5E7EB",
                background: selected===opt.id ? "rgba(255,26,26,0.04)" : "#ffffff",
                color: selected===opt.id ? "#CC0000" : "#374151",
                fontWeight: selected===opt.id ? 700 : 500,
                fontSize:"0.95rem",
                cursor:"pointer",
                textAlign:"left",
                boxShadow: selected===opt.id ? "0 4px 18px rgba(255,26,26,0.1)" : "0 1px 4px rgba(0,0,0,0.05)",
                transition:"all 0.2s ease",
              }}
              aria-pressed={selected===opt.id}
            >
              <span style={{ color: selected===opt.id ? "#FF1A1A" : "#9CA3AF", flexShrink:0 }}>
                {opt.icon}
              </span>
              {opt.label}
            </button>
          ))}
        </div>

        {/* More options */}
        <div
          style={{
            display:"grid",
            gridTemplateColumns:"repeat(3,1fr)",
            gap:"0.6rem",
            marginBottom:"1.75rem",
          }}
          className="helps-more"
        >
          {INDUSTRY_OPTIONS.slice(2).map((opt)=>(
            <button
              key={opt.id}
              id={`helps-${opt.id}`}
              onClick={()=>setSelected(opt.id)}
              style={{
                padding:"0.7rem 0.75rem",
                borderRadius:10,
                border: selected===opt.id ? "2px solid #FF1A1A" : "1.5px solid #E5E7EB",
                background: selected===opt.id ? "rgba(255,26,26,0.04)" : "#ffffff",
                color: selected===opt.id ? "#CC0000" : "#6B7280",
                fontWeight: selected===opt.id ? 600 : 400,
                fontSize:"0.82rem",
                cursor:"pointer",
                transition:"all 0.2s ease",
              }}
              aria-pressed={selected===opt.id}
            >
              {opt.icon} {opt.label}
            </button>
          ))}
        </div>

        {/* Next CTA */}
        <a
          href="#newsletter"
          id="helps-next"
          style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            gap:"0.5rem",
            width:"100%",
            padding:"1.1rem",
            background:"linear-gradient(90deg,#FF1A1A,#B30000)",
            border:"none",
            borderRadius:10,
            color:"#ffffff",
            fontWeight:700,
            fontSize:"1rem",
            cursor:"pointer",
            textDecoration:"none",
            boxShadow:"0 4px 20px rgba(255,26,26,0.35)",
            transition:"box-shadow 0.25s ease, transform 0.25s ease",
          }}
          onMouseEnter={e=>{e.currentTarget.style.boxShadow="0 6px 28px rgba(255,26,26,0.55)"; e.currentTarget.style.transform="translateY(-1px)";}}
          onMouseLeave={e=>{e.currentTarget.style.boxShadow="0 4px 20px rgba(255,26,26,0.35)"; e.currentTarget.style.transform="translateY(0)";}}
        >
          Get Started
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      <style>{`
        @media(max-width:600px){
          .helps-cards{ grid-template-columns:1fr !important; }
          .helps-more{ grid-template-columns:repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  );
}
