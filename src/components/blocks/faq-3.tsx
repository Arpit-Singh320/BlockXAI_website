"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const CATEGORIES = [
  { id: "general", label: "General" },
  { id: "services", label: "Services" },
  { id: "technology", label: "Technology" },
  { id: "about", label: "About Us" },
];

const FAQS: Record<string, { title: string; faqs: { question: string; answer: string }[] }> = {
  general: {
    title: "General",
    faqs: [
      { question: "What is BlockX AI Limited?", answer: "BlockX AI Limited is a technology consulting firm specialising in blockchain solutions, AI-driven innovations, and business development strategies. We help businesses integrate advanced technologies to enhance efficiency, security, and scalability." },
      { question: "What industries do you serve?", answer: "We provide solutions across multiple industries, including finance, healthcare, supply chain, retail, and real estate. Our customised strategies ensure businesses benefit from blockchain and AI in their specific operational contexts." },
      { question: "How long does it take to implement blockchain or AI solutions?", answer: "The timeline depends on the complexity of the solution and your business needs. Small-scale AI integrations can take a few weeks, while full-scale blockchain deployments may take several months. We work closely with you to ensure a seamless transition." },
      { question: "What are the costs involved?", answer: "Costs vary based on the complexity of the project. We provide custom pricing based on project scope, features, and integration requirements. Contact us for a detailed quote tailored to your specific needs." },
    ],
  },
  services: {
    title: "Services",
    faqs: [
      { question: "What blockchain consulting services do you offer?", answer: "We offer comprehensive blockchain strategy design, smart contract development and auditing, DeFi integration, tokenisation strategies, and end-to-end blockchain system architecture for enterprise clients." },
      { question: "Can blockchain be integrated with existing business systems?", answer: "Yes. Blockchain can seamlessly integrate into your existing infrastructure, databases, and software applications. We provide custom implementation strategies to ensure minimal disruption and maximum efficiency." },
      { question: "What AI services does BlockXAI provide?", answer: "Our AI services include custom machine learning model development, natural language processing, computer vision, predictive analytics, AI-powered automation, and strategic AI consultancy to identify high-impact opportunities in your business." },
      { question: "Do you offer training and workshops?", answer: "Yes. We provide customised training programmes for businesses and professionals looking to understand and apply blockchain and AI technologies effectively within their organisations." },
    ],
  },
  technology: {
    title: "Technology",
    faqs: [
      { question: "What are smart contracts?", answer: "Smart contracts are self-executing agreements stored on a blockchain that automatically enforce contract terms when predefined conditions are met. They reduce the need for intermediaries and enhance transaction efficiency, speed, and security." },
      { question: "How can blockchain and AI benefit my business?", answer: "Blockchain enhances security, transparency, and trust, while AI enables automation, data-driven decision-making, and predictive analytics. Together they help businesses reduce costs, improve operational efficiency, and create innovative business models." },
      { question: "Is blockchain technology secure?", answer: "Blockchain's decentralised and cryptographically secured architecture makes it highly resistant to tampering and fraud. Its immutable ledger ensures data integrity, while consensus mechanisms prevent unauthorised modifications." },
      { question: "What is Web3 and how does it apply to my business?", answer: "Web3 refers to the next evolution of the internet built on decentralised blockchain infrastructure. It enables new business models including tokenised assets, decentralised applications (dApps), NFTs, and peer-to-peer commerce without intermediaries." },
    ],
  },
  about: {
    title: "About Us",
    faqs: [
      { question: "When was BlockX AI Limited founded?", answer: "BlockX AI Limited was established in 2020 and is registered in England & Wales. We have since grown to serve over 400 companies across multiple industries and geographies." },
      { question: "Where is BlockX AI Limited based?", answer: "We are headquartered in London, England — 18 Elmstead Avenue, Wembley, HA9 8NX. While London-based, we work with clients globally and offer remote consulting engagements." },
      { question: "What makes BlockXAI different from other consultancies?", answer: "We combine deep technical blockchain expertise with AI specialisation under one roof. Our team of blockchain architects, AI specialists, and technology strategists deliver end-to-end solutions rather than siloed advice — giving clients a single trusted partner for digital transformation." },
      { question: "How can I get in touch?", answer: "You can reach us via phone at +44 7440183728, email at info@blockxint.com, or fill in the contact form on our website. We typically respond within 24 hours on weekdays." },
    ],
  },
};

export default function FAQ3() {
  const [selectedCategory, setSelectedCategory] = useState("general");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const current = FAQS[selectedCategory];

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);
  const changeCategory = (id: string) => { setSelectedCategory(id); setOpenIndex(null); };

  return (
    <section style={{ background: "#111115", display: "flex", flexDirection: "column", minHeight: "600px" }}>
      {/* Top — title + category tabs */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "64px 0 40px" }}>
        <div className="bx-container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display"
            style={{ fontSize: "clamp(2.4rem, 5vw, 5rem)", lineHeight: 0.9, letterSpacing: "0.02em", color: "white", marginBottom: "36px" }}
          >
            FREQUENTLY ASKED <span style={{ color: "#C41E3A" }}>QUESTIONS</span>
          </motion.h2>

          <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
            {CATEGORIES.map((cat, i) => (
              <motion.button
                key={cat.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.08 * i }}
                onClick={() => changeCategory(cat.id)}
                style={{
                  padding: "10px 22px",
                  border: selectedCategory === cat.id ? "1px solid #C41E3A" : "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "999px",
                  background: selectedCategory === cat.id ? "rgba(196,30,58,0.1)" : "transparent",
                  color: selectedCategory === cat.id ? "#C41E3A" : "rgba(255,255,255,0.6)",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase" as const,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom — sticky label + accordion */}
      <div style={{ flex: 1, padding: "56px 0" }}>
        <div className="bx-container">
          <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: "clamp(32px, 5vw, 80px)", alignItems: "flex-start" }} className="faq-grid">
            <div style={{ position: "sticky", top: "100px" }}>
              <motion.h3
                key={selectedCategory}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35 }}
                className="font-display"
                style={{ fontSize: "clamp(1.6rem, 2.4vw, 2.4rem)", lineHeight: 0.92, letterSpacing: "0.04em", color: "white", margin: 0 }}
              >
                {current.title}
              </motion.h3>
            </div>

            <div>
              {current.faqs.map((faq, i) => (
                <div key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  <button
                    onClick={() => toggle(i)}
                    style={{
                      width: "100%", padding: "24px 0", display: "flex", alignItems: "flex-start",
                      justifyContent: "space-between", gap: "20px", background: "none", border: "none",
                      cursor: "pointer", textAlign: "left",
                    }}
                  >
                    <span style={{ fontSize: "15px", fontWeight: 700, color: openIndex === i ? "white" : "rgba(255,255,255,0.78)", lineHeight: 1.4, flex: 1, transition: "color 0.2s" }}>
                      {faq.question}
                    </span>
                    <div style={{ width: "28px", height: "28px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px", background: openIndex === i ? "rgba(196,30,58,0.1)" : "transparent", borderColor: openIndex === i ? "rgba(196,30,58,0.3)" : "rgba(255,255,255,0.12)", transition: "all 0.2s" }}>
                      {openIndex === i ? <Minus size={13} color="#C41E3A" /> : <Plus size={13} color="rgba(255,255,255,0.5)" />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ height: { duration: 0.28, ease: [0.4, 0, 0.2, 1] }, opacity: { duration: 0.2 } }}
                        style={{ overflow: "hidden" }}
                      >
                        <p style={{ margin: "0 0 24px", color: "rgba(255,255,255,0.52)", fontSize: "14px", lineHeight: 1.8, paddingRight: "48px" }}>
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) { .faq-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
