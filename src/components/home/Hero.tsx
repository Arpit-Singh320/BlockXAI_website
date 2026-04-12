"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Shield, Zap, Globe, Brain } from "lucide-react";

const CAPABILITIES = [
  { icon: Shield, label: "Blockchain", sub: "Strategy & Audits" },
  { icon: Globe, label: "Web3", sub: "dApps & DeFi" },
  { icon: Zap, label: "Crypto", sub: "Wallets & Gateways" },
  { icon: Brain, label: "AI", sub: "Custom Solutions" },
];

function Counter({ target, duration = 1600 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const raf = useRef<number>(0);
  const start = useRef<number | null>(null);

  useEffect(() => {
    const step = (timestamp: number) => {
      if (!start.current) start.current = timestamp;
      const progress = Math.min((timestamp - start.current) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) raf.current = requestAnimationFrame(step);
    };
    const timeout = setTimeout(() => {
      raf.current = requestAnimationFrame(step);
    }, 600);
    return () => {
      clearTimeout(timeout);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [target, duration]);

  return <>{count}</>;
}

export function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      aria-label="Hero"
      style={{
        height: "100vh",
        minHeight: "600px",
        maxHeight: "1000px",
        background: "#0b0b0d",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "80px",
      }}
    >
      {/* Background grid texture */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          pointerEvents: "none",
        }}
      />

      {/* Red diagonal accent — top left */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-80px",
          left: "-60px",
          width: "480px",
          height: "480px",
          background: "radial-gradient(ellipse at 30% 40%, rgba(223,37,49,0.14) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="bx-container"
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "55fr 45fr",
          gap: "clamp(32px, 5vw, 72px)",
          alignItems: "center",
          zIndex: 1,
          position: "relative",
        }}
      >
        {/* ── LEFT: Copy stack ── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "clamp(16px, 2.4vh, 24px)",
          }}
        >
          {/* Eyebrow */}
          <div
            className="bx-eyebrow"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(10px)",
              transition: "opacity 0.5s ease, transform 0.5s ease",
            }}
          >
            Enterprise Blockchain &amp; AI Consultancy
          </div>

          {/* Headline — Bebas Neue, max 3 lines */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
            }}
          >
            <h1
              className="font-display"
              style={{
                margin: 0,
                lineHeight: 0.92,
                letterSpacing: "0.02em",
              }}
            >
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(3.2rem, 5.2vw, 5.2rem)",
                  color: "rgba(255,255,255,0.88)",
                }}
              >
                TRUSTED
              </span>
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(3.8rem, 6.8vw, 7rem)",
                  color: "white",
                }}
              >
                BLOCKCHAIN
              </span>
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(3.8rem, 6.8vw, 7rem)",
                  color: "#df2531",
                }}
              >
                &amp; AI
              </span>
            </h1>
          </div>

          {/* Subheadline */}
          <p
            style={{
              margin: 0,
              color: "rgba(255,255,255,0.56)",
              fontSize: "clamp(14px, 1.4vw, 16px)",
              lineHeight: 1.7,
              maxWidth: "500px",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.6s ease 0.22s, transform 0.6s ease 0.22s",
            }}
          >
            We help organisations design, integrate, and scale blockchain systems,
            Web3 products, and AI-powered automation programmes.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
              alignItems: "center",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.6s ease 0.34s, transform 0.6s ease 0.34s",
            }}
          >
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "16px 28px",
                background: "#df2531",
                color: "white",
                fontWeight: 700,
                fontSize: "15px",
                letterSpacing: "0.04em",
                borderRadius: "12px",
                textDecoration: "none",
                boxShadow: "0 12px 32px rgba(223,37,49,0.28)",
                transition: "background 0.2s, transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "#b81a26";
                el.style.transform = "translateY(-2px)";
                el.style.boxShadow = "0 16px 40px rgba(223,37,49,0.36)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "#df2531";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "0 12px 32px rgba(223,37,49,0.28)";
              }}
            >
              Book a Free Consultation
              <ArrowRight size={16} />
            </Link>

            <Link
              href="/services"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "16px 28px",
                background: "rgba(255,255,255,0.06)",
                color: "white",
                fontWeight: 700,
                fontSize: "15px",
                letterSpacing: "0.04em",
                borderRadius: "12px",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.1)",
                transition: "background 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(255,255,255,0.1)";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(255,255,255,0.06)";
                el.style.transform = "translateY(0)";
              }}
            >
              Explore Services
            </Link>
          </div>

          {/* Proof chips */}
          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 0.6s ease 0.46s, transform 0.6s ease 0.46s",
            }}
          >
            {[
              "400+ Companies Served",
              "London Registered",
              "Blockchain + AI Experts",
              "Custom Solutions",
            ].map((chip) => (
              <span
                key={chip}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "7px 14px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "999px",
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                }}
              >
                <span
                  style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#df2531", flexShrink: 0 }}
                />
                {chip}
              </span>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Editorial composition ── */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s",
            position: "relative",
          }}
        >
          <div
            style={{
              background: "#17181d",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "20px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* Top red bar */}
            <div
              style={{
                height: "4px",
                background: "linear-gradient(90deg, #df2531 0%, rgba(223,37,49,0.3) 100%)",
              }}
            />

            <div style={{ padding: "clamp(20px, 3vw, 32px)", display: "grid", gap: "20px" }}>
              {/* Counter row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  gap: "16px",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  paddingBottom: "20px",
                }}
              >
                <div>
                  <div
                    className="font-display"
                    style={{
                      fontSize: "clamp(3.6rem, 5.5vw, 5.6rem)",
                      color: "white",
                      lineHeight: 1,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    <Counter target={400} />+
                  </div>
                  <p
                    style={{
                      margin: 0,
                      color: "rgba(255,255,255,0.44)",
                      fontSize: "11px",
                      fontWeight: 800,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      marginTop: "4px",
                    }}
                  >
                    Companies Served
                  </p>
                </div>

                <div
                  style={{
                    marginLeft: "auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                    alignItems: "flex-end",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22c55e", flexShrink: 0 }} />
                    <span style={{ color: "rgba(255,255,255,0.44)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em" }}>
                      ACTIVE SINCE 2020
                    </span>
                  </div>
                  <span style={{ color: "rgba(255,255,255,0.28)", fontSize: "11px", letterSpacing: "0.1em" }}>
                    LONDON · ENGLAND
                  </span>
                </div>
              </div>

              {/* Capabilities grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                {CAPABILITIES.map(({ icon: Icon, label, sub }, i) => (
                  <div
                    key={label}
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "12px",
                      padding: "16px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                      transition: "background 0.2s, border-color 0.2s",
                      animationDelay: `${i * 80}ms`,
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = "rgba(223,37,49,0.07)";
                      el.style.borderColor = "rgba(223,37,49,0.2)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = "rgba(255,255,255,0.03)";
                      el.style.borderColor = "rgba(255,255,255,0.06)";
                    }}
                  >
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "8px",
                        background: "rgba(223,37,49,0.12)",
                        border: "1px solid rgba(223,37,49,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon size={16} color="#df2531" />
                    </div>
                    <div>
                      <p style={{ margin: 0, color: "white", fontSize: "13px", fontWeight: 700, letterSpacing: "0.06em" }}>
                        {label}
                      </p>
                      <p style={{ margin: 0, color: "rgba(255,255,255,0.4)", fontSize: "11px", marginTop: "2px" }}>
                        {sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom label */}
              <div
                style={{
                  background: "rgba(223,37,49,0.06)",
                  border: "1px solid rgba(223,37,49,0.14)",
                  borderRadius: "10px",
                  padding: "14px 16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ color: "rgba(255,255,255,0.64)", fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                  Enterprise Digital Transformation
                </span>
                <span
                  style={{
                    background: "#df2531",
                    color: "white",
                    fontSize: "10px",
                    fontWeight: 800,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    padding: "5px 10px",
                    borderRadius: "6px",
                  }}
                >
                  Est. 2020
                </span>
              </div>
            </div>
          </div>

          {/* Floating accent */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              bottom: "-16px",
              right: "-16px",
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              background: "rgba(223,37,49,0.2)",
              filter: "blur(24px)",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "28px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          opacity: visible ? 0.44 : 0,
          transition: "opacity 0.8s ease 1.2s",
        }}
      >
        <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "10px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "32px",
            background: "linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)",
            animation: "pulse 1.8s ease-in-out infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 0.44; } 50% { opacity: 1; } }
        @media (max-width: 900px) {
          section[aria-label="Hero"] > div[class="bx-container"],
          section[aria-label="Hero"] > div {
            grid-template-columns: 1fr !important;
          }
          section[aria-label="Hero"] > div > div:last-child {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
