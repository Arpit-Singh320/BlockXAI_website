"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export function Preloader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setVisible(true);
    setFadeOut(false);

    const fadeTimer = setTimeout(() => setFadeOut(true), 800);
    const hideTimer = setTimeout(() => setVisible(false), 1200);

    return () => { clearTimeout(fadeTimer); clearTimeout(hideTimer); };
  }, [pathname]);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#0b0b0d",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "32px",
        transition: "opacity 0.45s ease",
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? "none" : "all",
      }}
    >
      {/* Logo */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
          animation: "preload-rise 0.6s cubic-bezier(0.22,1,0.36,1) both",
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "16px",
            padding: "14px 24px",
          }}
        >
          <Image
            src="/logo-white.png"
            alt="BlockXAI"
            width={140}
            height={36}
            priority
            style={{ height: "36px", width: "auto" }}
          />
        </span>
        <span
          style={{
            color: "rgba(255,255,255,0.32)",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
          }}
        >
          Enterprise Blockchain &amp; AI
        </span>
      </div>

      {/* Progress bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "2px",
          background: "rgba(255,255,255,0.06)",
          width: "100%",
        }}
      >
        <div
          style={{
            height: "100%",
            background: "#C41E3A",
            animation: "preload-bar 1.5s cubic-bezier(0.4,0,0.2,1) forwards",
          }}
        />
      </div>

      <style>{`
        @keyframes preload-rise {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes preload-bar {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  );
}
