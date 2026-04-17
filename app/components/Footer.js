"use client";

import Image from "next/image";

const SOCIALS = [
  {
    label: "X",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.261 5.632L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm0 1.9A3.9 3.9 0 0 0 3.9 7.8v8.4A3.9 3.9 0 0 0 7.8 20.1h8.4a3.9 3.9 0 0 0 3.9-3.9V7.8a3.9 3.9 0 0 0-3.9-3.9H7.8zm8.95 1.45a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.9a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2z" />
      </svg>
    ),
  },
  {
    label: "Threads",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2.5c4.7 0 7.6 3 7.6 7.7v4.4c0 4.4-2.9 7.7-7.6 7.7-4.7 0-7.6-3.3-7.6-7.7v-4.4c0-4.7 2.9-7.7 7.6-7.7Z" stroke="currentColor" strokeWidth="1.9"/>
        <path d="M15.7 8.8c-.6-1.2-1.8-1.9-3.6-1.9-2.4 0-4 1.4-4 3.4 0 1.7 1 2.7 2.7 3.2l2.2.6c1.5.4 2.1.8 2.1 1.7 0 1-1 1.7-2.4 1.7-1.6 0-2.6-.7-3.1-2l-1.7.9c.7 1.7 2.2 2.7 4.8 2.7 2.8 0 4.6-1.4 4.6-3.5 0-1.8-1.1-2.8-3-3.3l-2.1-.5c-1.2-.3-1.8-.7-1.8-1.5 0-.9.8-1.5 2-1.5 1.2 0 2 .4 2.4 1.4l1.9-.8Z" fill="currentColor"/>
      </svg>
    ),
  },
];

const BRAND_MARK_BLOCKS = [
  { id: "mark-a", tone: "is-blue", variant: "is-cut", width: 230, height: 270 },
  { id: "mark-l", tone: "is-blue", variant: "is-l", width: 230, height: 270 },
  { id: "mark-b", tone: "is-orange", width: 230, height: 270 },
  { id: "mark-c", tone: "is-blue", variant: "is-c", width: 230, height: 270 },
   { id: "mark-d", tone: "is-orange", width: 230, height: 270 },

];

export default function Footer() {
  return (
    <footer
      id="footer"
      style={{
        background: "transparent",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 8% 72%, rgba(255,26,26,0.2), transparent 28%), radial-gradient(circle at 80% 16%, rgba(255,26,26,0.08), transparent 24%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1360,
          margin: "0 auto",
          padding: "6rem 2rem 4rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="footer-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "1.7rem" }}>
              <Image src="/logo.png" alt="BlockX" width={149} height={36} priority />
            </div>

            <p
              style={{
                margin: 0,
                color: "rgba(245,236,236,0.72)",
                maxWidth: 620,
                fontSize: "1.04rem",
                lineHeight: 1.72,
              }}
            >
              Blockchain Solutions pioneers secure, decentralized technology for seamless transactions and smart
              contract automation. Empowering businesses with trust, transparency, and innovation.
            </p>

            <div style={{ display: "flex", gap: "0.95rem", marginTop: "2.6rem" }}>
              {SOCIALS.map((social) => (
                <a key={social.label} href="#" aria-label={social.label} className="footer-social-btn">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-divider" aria-hidden="true" />

          <div className="footer-contact-col">
            <h3
              style={{
                margin: 0,
                color: "#ffffff",
                fontSize: "2.15rem",
                fontWeight: 700,
                letterSpacing: "0.03em",
              }}
            >
              CONTACT
            </h3>

            <p style={{ margin: "1.7rem 0 0", color: "rgba(235,214,214,0.64)", fontSize: "0.9rem", lineHeight: 1.6 }}>
              18 Elmstead Avenue, Wembley, England, HA9 8NX
            </p>
            <p style={{ margin: "0.7rem 0 0", color: "#ffffff", fontWeight: 700, fontSize: "1.45rem", lineHeight: 1.2 }}>
              Call Us: +44 7440183728
            </p>
            <p style={{ margin: "0.35rem 0 0", color: "#ffffff", fontWeight: 700, fontSize: "1.25rem", lineHeight: 1.2 }}>
              info@blockxai.xyz
            </p>

            <p style={{ margin: "3.2rem 0 0", color: "#ffffff", fontWeight: 700, fontSize: "1.15rem" }}>
              blockxint &copy; 2025. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          padding: "1.1rem 1rem 2.4rem",
          display: "flex",
          justifyContent: "center",
          position: "relative",
          overflow: "visible",
        }}
      >
        <div className="brand-mark-row" aria-label="BlockX stylized geometric mark" role="img">
          {BRAND_MARK_BLOCKS.map((block) => (
            <div
              key={block.id}
              className={`brand-mark-block ${block.tone} ${block.variant ?? ""}`}
              style={{ "--block-w": `${block.width}px`, "--block-h": `${block.height}px` }}
            />
          ))}
          <div className="brand-mark-x" aria-hidden="true" />
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 1px minmax(420px, 0.9fr);
          gap: 3.2rem;
          align-items: start;
        }

        .footer-divider {
          width: 1px;
          min-height: 270px;
          background: linear-gradient(180deg, rgba(255,26,26,0.04), rgba(255,26,26,0.35), rgba(255,26,26,0.04));
          justify-self: center;
          margin-top: 0.2rem;
        }

        .footer-contact-col {
          text-align: center;
          max-width: 620px;
          justify-self: center;
        }

        .footer-social-btn {
          width: 3.55rem;
          height: 3.55rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.9);
          background: rgba(255,26,26,0.08);
          border: 1px solid rgba(255,26,26,0.16);
          text-decoration: none;
          transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
        }

        .footer-social-btn:hover {
          background: rgba(255,26,26,0.2);
          border-color: rgba(255,26,26,0.5);
          transform: translateY(-1px);
        }

        .brand-mark-row {
          --mark-scale: 0.9;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: nowrap;
          gap: 12px;
          width: 100%;
          max-width: 1280px;
          overflow: visible;
        }

        .brand-mark-block {
          position: relative;
          width: calc(var(--block-w) * var(--mark-scale));
          height: calc(var(--block-h) * var(--mark-scale));
          flex: 0 0 auto;
          border: none;
          border-radius: 14px;
          box-shadow: 0 10px 24px rgba(139, 0, 0, 0.22);
          transition: transform 420ms ease, box-shadow 420ms ease, background-color 420ms ease, filter 420ms ease;
          overflow: hidden;
        }

        .brand-mark-block::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #FF1A1A, #8B0000);
          opacity: 0;
          transition: opacity 420ms ease;
          pointer-events: none;
        }

        .brand-mark-block::before {
          content: "";
          position: absolute;
          inset: 2px 2px auto 2px;
          height: 36%;
          border-radius: 14px;
          background: linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0));
          opacity: 0.45;
          pointer-events: none;
        }

        .brand-mark-block.is-blue { background-color: #2a0a0f; }
        .brand-mark-block.is-navy { background-color: #0a0514; }
        .brand-mark-block.is-orange { background-color: #8b0000; }

        .brand-mark-block.is-cut {
          clip-path: polygon(0 0, 40% 0, 40% 26%, 100% 26%, 100% 100%, 0 100%);
          border-radius: 16px;
        }

        .brand-mark-block.is-l {
          clip-path: polygon(0 0, 36% 0, 36% 68%, 100% 68%, 100% 100%, 0 100%);
          border-radius: 16px;
        }

        .brand-mark-block.is-c {
          clip-path: polygon(0 0, 100% 0, 100% 18%, 30% 18%, 30% 82%, 100% 82%, 100% 100%, 0 100%);
          border-radius: 16px;
        }

        .brand-mark-block.is-k {
          clip-path: polygon(0 0, 34% 0, 34% 42%, 100% 0, 100% 20%, 58% 50%, 100% 80%, 100% 100%, 34% 58%, 34% 100%, 0 100%);
          border-radius: 16px;
        }

        .brand-mark-x {
          position: relative;
          width: calc(150px * var(--mark-scale));
          height: calc(176px * var(--mark-scale));
          flex: 0 0 auto;
          align-self: flex-end;
          filter: drop-shadow(0 0 16px rgba(255, 26, 26, 0.35));
        }

        .brand-mark-x::before,
        .brand-mark-x::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 116%;
          height: calc(18px * var(--mark-scale));
          background: linear-gradient(90deg, #730000, #FF1A1A 52%, #730000);
          clip-path: polygon(0 14%, 80% 14%, 100% 50%, 80% 86%, 0 86%);
          -webkit-mask-image: linear-gradient(90deg, #000 0%, #000 70%, rgba(0,0,0,0.45) 88%, transparent 100%);
          mask-image: linear-gradient(90deg, #000 0%, #000 70%, rgba(0,0,0,0.45) 88%, transparent 100%);
          transform-origin: center;
          box-shadow: 0 0 14px rgba(255, 26, 26, 0.45), 16px 0 16px rgba(255, 26, 26, 0.25);
        }

        .brand-mark-x::before {
          transform: translate(-50%, -50%) rotate(45deg);
        }

        .brand-mark-x::after {
          transform: translate(-50%, -50%) rotate(-45deg);
        }

        .brand-mark-block:hover {
          transform: translateY(-6px) scale(1.03);
          box-shadow: 0 0 20px rgba(255,26,26,0.42), 0 14px 26px rgba(0,0,0,0.32);
          filter: saturate(1.07);
        }

        .brand-mark-block:hover::after {
          opacity: 0.92;
        }

        .brand-mark-block.is-blue:hover {
          background-color: #8B0000;
        }

        .brand-mark-block.is-orange:hover {
          background-color: #ff1a1a;
        }

        .brand-mark-block.is-navy:hover {
          background: linear-gradient(135deg, #250000, #8B0000);
        }

        @media (max-width: 1100px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2.1rem;
          }

          .footer-divider {
            width: 100%;
            min-height: 1px;
            height: 1px;
            margin: 0.4rem 0;
          }

          .footer-contact-col {
            justify-self: start;
            text-align: left;
            max-width: 100%;
          }
        }

        @media (max-width: 900px) {
          .brand-mark-row {
            --mark-scale: 0.34;
            gap: 6px;
            max-width: 100%;
          }
        }

        @media (max-width: 600px) {
          .brand-mark-row {
            --mark-scale: 0.18;
            gap: 2px;
            justify-content: center;
            max-width: 100%;
          }

          .footer-contact-col h3 {
            font-size: 1.8rem !important;
          }

          .footer-contact-col p {
            font-size: 0.98rem !important;
          }

          .footer-social-btn {
            width: 3.1rem;
            height: 3.1rem;
          }
        }
      `}</style>
    </footer>
  );
}
