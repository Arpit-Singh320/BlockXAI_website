"use client";
import { useState } from "react";

const INDUSTRY_OPTIONS = [
  { id: "fitness", label: "Fitness, Personal Training, and Nutrition", icon: "↗" },
  { id: "holistic", label: "Holistic Health", icon: "♥" },
  { id: "hospital", label: "Hospital Systems", icon: "🏥" },
  { id: "research", label: "Research Institutions", icon: "🧪" },
  { id: "pharma", label: "Pharma & Biotech", icon: "💊" },
  { id: "insurance", label: "Health Insurance", icon: "📋" },
  { id: "corporate", label: "Corporate Wellness", icon: "🏢" },
];

const STEPS = 7;

export default function IndustrySection() {
  const [selected, setSelected] = useState(null);
  const [step, setStep] = useState(0);

  return (
    <section
      id="industry"
      style={{
        background: "#F9FAFB",
        padding: "5rem 0",
        position: "relative",
      }}
    >
      {/* Top border line */}
      <div style={{
        position:"absolute", top:0, left:0, right:0, height:3,
        background:"linear-gradient(90deg,#FF1A1A,#B30000,transparent)",
      }}/>

      <div style={{ maxWidth:700, margin:"0 auto", padding:"0 2rem", textAlign:"center" }}>
        {/* Heading */}
        <h2 style={{
          fontFamily:"var(--font-display,'Space Grotesk',sans-serif)",
          fontSize:"clamp(1.5rem,3vw,2rem)",
          fontWeight:600,
          color:"#111827",
          marginBottom:"2rem",
          letterSpacing:"-0.015em",
        }}>
          What industry applies to you?
        </h2>

        {/* Two primary option cards — matching reference layout */}
        <div
          style={{
            display:"grid",
            gridTemplateColumns:"1fr 1fr",
            gap:"0.75rem",
            marginBottom:"1.25rem",
          }}
          className="industry-cards"
        >
          {INDUSTRY_OPTIONS.slice(0,2).map((opt)=>(
            <button
              key={opt.id}
              id={`industry-${opt.id}`}
              onClick={()=>setSelected(opt.id)}
              style={{
                display:"flex",
                alignItems:"center",
                gap:"0.75rem",
                padding:"1rem 1.25rem",
                borderRadius:12,
                border: selected===opt.id
                  ? "2px solid #FF1A1A"
                  : "1.5px solid #E5E7EB",
                background: selected===opt.id
                  ? "rgba(255,26,26,0.05)"
                  : "#ffffff",
                color: selected===opt.id ? "#CC0000" : "#374151",
                fontWeight: selected===opt.id ? 700 : 500,
                fontSize:"0.95rem",
                cursor:"pointer",
                textAlign:"left",
                boxShadow: selected===opt.id
                  ? "0 4px 18px rgba(255,26,26,0.12)"
                  : "0 1px 4px rgba(0,0,0,0.05)",
                transition:"all 0.2s ease",
              }}
              aria-pressed={selected===opt.id}
            >
              <span style={{
                fontFamily:"monospace",
                fontSize:"1rem",
                color: selected===opt.id ? "#FF1A1A" : "#9CA3AF",
                flexShrink:0,
              }}>
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
          className="industry-more"
        >
          {INDUSTRY_OPTIONS.slice(2).map((opt)=>(
            <button
              key={opt.id}
              id={`industry-${opt.id}`}
              onClick={()=>setSelected(opt.id)}
              style={{
                padding:"0.7rem 0.75rem",
                borderRadius:10,
                border: selected===opt.id
                  ? "2px solid #FF1A1A"
                  : "1.5px solid #E5E7EB",
                background: selected===opt.id
                  ? "rgba(255,26,26,0.05)"
                  : "#ffffff",
                color: selected===opt.id ? "#CC0000" : "#6B7280",
                fontWeight: selected===opt.id ? 600 : 400,
                fontSize:"0.82rem",
                cursor:"pointer",
                transition:"all 0.2s ease",
                boxShadow: selected===opt.id
                  ? "0 2px 12px rgba(255,26,26,0.1)"
                  : "none",
              }}
              aria-pressed={selected===opt.id}
            >
              {opt.icon} {opt.label}
            </button>
          ))}
        </div>

        {/* Next button — exactly like reference: full-width red/dark */}
        <button
          id="industry-next"
          onClick={()=>setStep(s=>Math.min(s+1, STEPS-1))}
          style={{
            width:"100%",
            padding:"1.1rem",
            background: "linear-gradient(90deg,#FF1A1A,#B30000)",
            border:"none",
            borderRadius:10,
            color:"#ffffff",
            fontWeight:700,
            fontSize:"1rem",
            cursor:"pointer",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            gap:"0.5rem",
            boxShadow:"0 4px 20px rgba(255,26,26,0.35)",
            marginBottom:"1.5rem",
            transition:"box-shadow 0.25s ease, transform 0.25s ease",
          }}
          onMouseEnter={e=>{e.currentTarget.style.boxShadow="0 6px 30px rgba(255,26,26,0.55)"; e.currentTarget.style.transform="translateY(-1px)";}}
          onMouseLeave={e=>{e.currentTarget.style.boxShadow="0 4px 20px rgba(255,26,26,0.35)"; e.currentTarget.style.transform="translateY(0)";}}
        >
          Next
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Step dots — exactly like reference */}
        <div style={{ display:"flex", justifyContent:"center", gap:"0.45rem" }}>
          {Array.from({length:STEPS}).map((_,i)=>(
            <button
              key={i}
              id={`step-dot-${i}`}
              onClick={()=>setStep(i)}
              style={{
                width: i===step ? 20 : 8,
                height:8,
                borderRadius:4,
                background: i===step ? "#FF1A1A" : "#D1D5DB",
                border:"none",
                cursor:"pointer",
                transition:"all 0.3s ease",
                padding:0,
              }}
              aria-label={`Step ${i+1}`}
            />
          ))}
        </div>

        {selected && (
          <p style={{ marginTop:"1rem", fontSize:"0.85rem", color:"#9CA3AF" }}>
            Selected: <strong style={{ color:"#CC0000" }}>{INDUSTRY_OPTIONS.find(o=>o.id===selected)?.label}</strong>
          </p>
        )}
      </div>

      <style>{`
        @media(max-width:600px){
          .industry-cards{ grid-template-columns:1fr !important; }
          .industry-more{ grid-template-columns:repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  );
}
