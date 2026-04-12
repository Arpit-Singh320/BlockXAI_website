interface PageHeroProps {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  dark?: boolean;
}

export function PageHero({ eyebrow, title, titleAccent, subtitle, dark = true }: PageHeroProps) {
  return (
    <section
      style={{
        background: dark ? "#0b0b0d" : "#f3efe8",
        paddingTop: "clamp(120px, 18vh, 160px)",
        paddingBottom: "clamp(64px, 10vh, 96px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid texture */}
      {dark && (
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
      )}
      {/* Radial accent */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "0",
          right: "0",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: dark
            ? "radial-gradient(ellipse, rgba(223,37,49,0.1) 0%, transparent 70%)"
            : "radial-gradient(ellipse, rgba(223,37,49,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="bx-container" style={{ position: "relative", zIndex: 1 }}>
        <span className="bx-eyebrow" style={{ color: "#df2531" }}>{eyebrow}</span>
        <h1
          className="font-display"
          style={{
            margin: "16px 0 0",
            fontSize: "clamp(3.2rem, 6.5vw, 7rem)",
            lineHeight: 0.88,
            letterSpacing: "0.02em",
            color: dark ? "white" : "#0b0b0d",
          }}
        >
          {title}
          {titleAccent && (
            <>
              {" "}
              <span style={{ color: "#df2531" }}>{titleAccent}</span>
            </>
          )}
        </h1>
        {subtitle && (
          <p
            style={{
              margin: "24px 0 0",
              color: dark ? "rgba(255,255,255,0.54)" : "rgba(11,11,13,0.56)",
              fontSize: "clamp(14px, 1.5vw, 17px)",
              lineHeight: 1.7,
              maxWidth: "560px",
            }}
          >
            {subtitle}
          </p>
        )}
      </div>

      {/* Bottom border accent */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: dark
            ? "rgba(255,255,255,0.07)"
            : "rgba(11,11,13,0.07)",
        }}
      />
    </section>
  );
}
