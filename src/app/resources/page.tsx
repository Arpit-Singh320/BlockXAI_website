import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { ARTICLES } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Insights, analysis, and research from BlockXAI Limited on blockchain, AI, Web3, and enterprise digital transformation.",
};

const FEATURED = ARTICLES[0];
const REST = ARTICLES.slice(1);

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources & Insights"
        title="BLOCKCHAIN & AI"
        titleAccent="INTELLIGENCE"
        subtitle="Thought leadership, market analysis, and practical guides for organisations navigating blockchain and AI transformation."
      />

      <section className="bx-section" style={{ background: "#f3efe8" }}>
        <div className="bx-container">
          {/* Featured article */}
          <div style={{ marginBottom: "56px" }}>
            <span className="bx-eyebrow" style={{ marginBottom: "20px", display: "inline-flex" }}>Featured Article</span>
            <Link
              href={`/resources/${FEATURED.slug}`}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "48px",
                background: "#0b0b0d",
                borderRadius: "20px",
                padding: "44px",
                textDecoration: "none",
                marginTop: "16px",
                position: "relative",
                overflow: "hidden",
                transition: "transform 0.22s",
              }}
              className="featured-article"
            >
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  top: "-60px",
                  right: "-60px",
                  width: "300px",
                  height: "300px",
                  borderRadius: "50%",
                  background: "radial-gradient(ellipse, rgba(223,37,49,0.16) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "24px" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.44)", fontSize: "12px" }}><Calendar size={12} />{FEATURED.date}</span>
                    <span style={{ display: "flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.32)", fontSize: "12px" }}><Clock size={12} />{FEATURED.readTime}</span>
                  </div>
                  <h2 style={{ margin: 0, color: "white", fontSize: "clamp(1.4rem, 2.2vw, 2rem)", fontWeight: 800, lineHeight: 1.25, letterSpacing: "0.01em" }}>
                    {FEATURED.title}
                  </h2>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#df2531", fontSize: "14px", fontWeight: 700 }}>
                  Read Article <ArrowRight size={14} />
                </div>
              </div>
              <div>
                <p style={{ color: "rgba(255,255,255,0.58)", fontSize: "15px", lineHeight: 1.75, margin: "0 0 24px" }}>
                  {FEATURED.excerpt}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {FEATURED.tags.map((t) => (
                    <span key={t} style={{
                      padding: "5px 12px",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "6px",
                      color: "rgba(255,255,255,0.44)",
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            </Link>
          </div>

          {/* Articles grid */}
          <span className="bx-eyebrow" style={{ marginBottom: "20px", display: "inline-flex" }}>Recent Articles</span>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "16px",
              marginTop: "16px",
            }}
            className="articles-grid"
          >
            {REST.map((article) => (
              <Link
                key={article.title}
                href={`/resources/${article.slug}`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  background: "white",
                  border: "1px solid rgba(11,11,13,0.08)",
                  borderRadius: "16px",
                  padding: "28px",
                  textDecoration: "none",
                  transition: "transform 0.22s, box-shadow 0.22s, border-color 0.22s",
                }}
                className="article-card"
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "5px", color: "rgba(11,11,13,0.44)", fontSize: "12px" }}><Calendar size={11} />{article.date}</span>
                  <span style={{ display: "flex", alignItems: "center", gap: "5px", color: "rgba(11,11,13,0.32)", fontSize: "12px" }}><Clock size={11} />{article.readTime}</span>
                </div>
                <h3 style={{ margin: 0, color: "#0b0b0d", fontSize: "16px", fontWeight: 800, lineHeight: 1.35, letterSpacing: "0.01em" }}>
                  {article.title}
                </h3>
                <p style={{ margin: 0, color: "rgba(11,11,13,0.6)", fontSize: "13px", lineHeight: 1.7, flex: 1 }}>
                  {article.excerpt.substring(0, 160)}…
                </p>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", borderTop: "1px solid rgba(11,11,13,0.07)", paddingTop: "16px" }}>
                  {article.tags.slice(0, 3).map((t) => (
                    <span key={t} style={{
                      padding: "4px 10px",
                      background: "rgba(223,37,49,0.06)",
                      border: "1px solid rgba(223,37,49,0.12)",
                      borderRadius: "5px",
                      color: "#df2531",
                      fontSize: "10px",
                      fontWeight: 800,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                    }}>{t}</span>
                  ))}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#df2531", fontSize: "13px", fontWeight: 700 }}>
                  Read More <ArrowRight size={13} />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <style>{`
          .featured-article { transition: transform 0.22s; }
          .featured-article:hover { transform: translateY(-3px); }
          .article-card { transition: transform 0.22s, box-shadow 0.22s, border-color 0.22s; }
          .article-card:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(11,11,13,0.08); border-color: rgba(223,37,49,0.18) !important; }
          @media (max-width: 800px) {
            .featured-article { grid-template-columns: 1fr !important; padding: 28px !important; }
            .articles-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Newsletter / CTA */}
      <section style={{ background: "#0b0b0d", paddingBlock: "80px" }}>
        <div className="bx-container" style={{ textAlign: "center" }}>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(2.2rem, 4vw, 4.4rem)",
              lineHeight: 0.9,
              letterSpacing: "0.02em",
              color: "white",
              marginBottom: "20px",
            }}
          >
            STAY AHEAD OF THE <span style={{ color: "#df2531" }}>CURVE</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.52)", fontSize: "15px", maxWidth: "440px", margin: "0 auto 32px", lineHeight: 1.7 }}>
            Get the latest insights on blockchain, AI, and enterprise digital transformation delivered directly to your inbox.
          </p>
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "16px 32px",
              background: "#df2531",
              color: "white",
              fontSize: "15px",
              fontWeight: 700,
              textDecoration: "none",
              borderRadius: "12px",
              boxShadow: "0 8px 24px rgba(223,37,49,0.24)",
            }}
          >
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
