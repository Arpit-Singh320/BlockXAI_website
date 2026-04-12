import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { ARTICLES, getArticle } from "@/lib/articles";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Not Found" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const paragraphs = article.content.split("\n\n").filter(Boolean);

  return (
    <>
      {/* Article hero */}
      <section
        style={{
          background: "#0b0b0d",
          paddingTop: "clamp(80px, 12vw, 140px)",
          paddingBottom: "clamp(60px, 8vw, 100px)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(196,30,58,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="bx-container" style={{ maxWidth: "780px" }}>
          <Link
            href="/resources"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "rgba(255,255,255,0.48)",
              fontSize: "13px",
              fontWeight: 600,
              textDecoration: "none",
              marginBottom: "32px",
              letterSpacing: "0.04em",
              transition: "color 0.18s",
            }}
            className="back-link"
          >
            <ArrowLeft size={14} /> Back to Resources
          </Link>

          {/* Tags */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "24px" }}>
            {article.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                  padding: "5px 12px",
                  background: "rgba(196,30,58,0.1)",
                  border: "1px solid rgba(196,30,58,0.2)",
                  borderRadius: "6px",
                  color: "#C41E3A",
                  fontSize: "11px",
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                <Tag size={9} />
                {tag}
              </span>
            ))}
          </div>

          <h1
            style={{
              margin: "0 0 24px",
              color: "white",
              fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.18,
              letterSpacing: "0.01em",
            }}
          >
            {article.title}
          </h1>

          <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "32px" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "7px", color: "rgba(255,255,255,0.44)", fontSize: "13px" }}>
              <Calendar size={13} /> {article.date}
            </span>
            <span style={{ color: "rgba(255,255,255,0.16)" }}>·</span>
            <span style={{ display: "flex", alignItems: "center", gap: "7px", color: "rgba(255,255,255,0.44)", fontSize: "13px" }}>
              <Clock size={13} /> {article.readTime}
            </span>
          </div>

          <p
            style={{
              margin: 0,
              color: "rgba(255,255,255,0.6)",
              fontSize: "clamp(15px, 1.6vw, 17px)",
              lineHeight: 1.75,
              borderLeft: "3px solid #C41E3A",
              paddingLeft: "20px",
            }}
          >
            {article.excerpt}
          </p>
        </div>
      </section>

      {/* Article body */}
      <section style={{ background: "#111115", paddingBlock: "clamp(60px, 8vw, 100px)" }}>
        <div className="bx-container" style={{ maxWidth: "780px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {paragraphs.map((para, i) => {
              const isHeading =
                /^[0-9]+\./.test(para) ||
                /^[a-z]\. /.test(para) ||
                para === "Introduction" ||
                para === "Conclusion" ||
                (para.length < 80 && !para.includes(" — ") && !para.includes("●"));

              const isBullet = para.startsWith("●") || para.startsWith("-");

              if (isBullet) {
                return (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: "12px",
                      paddingLeft: "16px",
                    }}
                  >
                    <span style={{ color: "#C41E3A", fontSize: "18px", lineHeight: 1.5, flexShrink: 0 }}>—</span>
                    <p style={{ margin: 0, color: "rgba(255,255,255,0.7)", fontSize: "15px", lineHeight: 1.8 }}>
                      {para.replace(/^[●\-]\s*/, "")}
                    </p>
                  </div>
                );
              }

              if (isHeading && i > 0) {
                return (
                  <h2
                    key={i}
                    style={{
                      margin: "12px 0 4px",
                      color: "white",
                      fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)",
                      fontWeight: 800,
                      lineHeight: 1.3,
                      letterSpacing: "0.01em",
                    }}
                  >
                    {para}
                  </h2>
                );
              }

              return (
                <p
                  key={i}
                  style={{
                    margin: 0,
                    color: i === 0 ? "rgba(255,255,255,0.56)" : "rgba(255,255,255,0.68)",
                    fontSize: "15px",
                    lineHeight: 1.85,
                  }}
                >
                  {para}
                </p>
              );
            })}
          </div>

          {/* Author / CTA */}
          <div
            style={{
              marginTop: "64px",
              padding: "32px",
              background: "#17181d",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <p style={{ margin: 0, color: "rgba(255,255,255,0.44)", fontSize: "12px", fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase" }}>
              Published by BlockXAI Limited
            </p>
            <p style={{ margin: 0, color: "rgba(255,255,255,0.6)", fontSize: "14px", lineHeight: 1.7 }}>
              BlockXAI Limited helps organisations design, integrate, and scale blockchain systems, Web3 products, crypto infrastructure, and AI-led transformation programmes.
            </p>
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 24px",
                background: "#C41E3A",
                color: "white",
                fontSize: "14px",
                fontWeight: 700,
                textDecoration: "none",
                borderRadius: "10px",
                alignSelf: "flex-start",
              }}
            >
              Get in Touch
            </Link>
          </div>

          {/* More Articles */}
          <div style={{ marginTop: "64px" }}>
            <h3 style={{ margin: "0 0 24px", color: "rgba(255,255,255,0.44)", fontSize: "12px", fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase" }}>
              More Articles
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }} className="more-articles-grid">
              {ARTICLES.filter((a) => a.slug !== slug).slice(0, 2).map((a) => (
                <Link
                  key={a.slug}
                  href={`/resources/${a.slug}`}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    padding: "20px",
                    background: "#17181d",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "12px",
                    textDecoration: "none",
                    transition: "border-color 0.2s, background 0.2s",
                  }}
                  className="more-article-card"
                >
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                    {a.tags.slice(0, 2).map((t) => (
                      <span key={t} style={{ padding: "3px 8px", background: "rgba(196,30,58,0.1)", borderRadius: "4px", color: "#C41E3A", fontSize: "10px", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>{t}</span>
                    ))}
                  </div>
                  <p style={{ margin: 0, color: "white", fontSize: "14px", fontWeight: 700, lineHeight: 1.4 }}>{a.title}</p>
                  <span style={{ color: "rgba(255,255,255,0.36)", fontSize: "12px" }}>{a.date}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          .back-link:hover { color: white !important; }
          .more-article-card:hover { border-color: rgba(196,30,58,0.2) !important; background: #1a1b21 !important; }
          @media (max-width: 600px) { .more-articles-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>
    </>
  );
}
