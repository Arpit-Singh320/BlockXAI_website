"use client";

export default function Navbar() {
  const navItems = [
   
    { label: "ABOUT", href: "#mission" },
    { label: "SERVICES", href: "#platform", hasChevron: true },
    { label: "PAY YOUR INVOICE", href: "#newsletter" },
    { label: "CONTACT", href: "#footer" },
  ];

  return (
    <header
      id="navbar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "rgba(0, 0, 0, 0.35)",
        borderBottom: "none",
        boxShadow: "none",
      }}
    >
      <div
        className="nav-inner"
        style={{
          position: "relative",
          maxWidth: 1400,
          margin: "0 auto",
          padding: "0 2.5rem",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginLeft: 10 }}>
          <img src="/logo.png" alt="BlockX" style={{ height: 26, width: "auto" }} />
        </div>

        {/* Centered Navigation */}
        <nav className="nav-links" aria-label="Main navigation" style={{ display: "flex", alignItems: "center", gap: "2.8rem", position: "absolute", left: "50.4%", transform: "translateX(-50%)" }}>
          {navItems.map(item => (
            <a
              key={item.label}
              href={item.href}
              style={{
                color: "#ffffff",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "0.75rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                opacity: 0.95,
                transition: "opacity 0.2s ease, color 0.2s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.color = "#FF4A4A";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.opacity = "0.95";
                e.currentTarget.style.color = "#ffffff";
              }}
            >
              {item.label}
              {item.hasChevron && (
                <span style={{ fontSize: "0.6rem", lineHeight: 1 }}>▼</span>
              )}
            </a>
          ))}
        </nav>
      </div>

      <style>{`
        @media (max-width: 1000px) {
          .nav-links {
            gap: 1.8rem !important;
          }
          .nav-links a {
            font-size: 0.7rem !important;
          }
        }
        @media (max-width: 768px) {
          .nav-inner {
            padding: 0 1.75rem !important;
            height: 60px !important;
          }
          .nav-links {
            gap: 1.2rem !important;
            position: static !important;
            transform: none !important;
            margin-left: auto !important;
          }
          .nav-links a {
            font-size: 0.65rem !important;
          }
        }
        @media (max-width: 560px) {
          .nav-inner {
            padding: 0 1.25rem !important;
            height: 56px !important;
          }
          .nav-links {
            gap: 0.8rem !important;
            justify-content: center !important;
          }
          .nav-links a {
            font-size: 0.6rem !important;
            letter-spacing: 0.08em !important;
          }
          img {
            height: 22px !important;
          }
        }
      `}</style>
    </header>
  );
}
