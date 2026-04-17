"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function PlatformSection() {
  const [activeTab, setActiveTab] = useState("blockchain");
  const [expandedIdx, setExpandedIdx] = useState(0);

  const services = {
    blockchain: {
      title: "Blockchain Consulting and Web3 Solutions",
      items: [
        {
          num: 1,
          title: "Strategy Development and Implementation",
          desc: "Crafting bespoke blockchain strategies tailored to your business needs and ensuring smooth, secure integration with existing systems.",
        },
        {
          num: 2,
          title: "Innovative Contract Development and Auditing",
          desc: "Building and auditing smart contracts with security and efficiency at the core.",
        },
        {
          num: 3,
          title: "Tokenization and dApp Development",
          desc: "Creating tokenized assets and decentralized applications tailored to your vision.",
        },
        {
          num: 4,
          title: "NFT and DeFi Solutions",
          desc: "Developing comprehensive NFT platforms and DeFi protocols.",
        },
      ],
    },
    crypto: {
      title: "Crypto Services",
      items: [
        {
          num: 1,
          title: "Secure Wallet Development",
          desc: "Building robust cryptocurrency wallets fortified with advanced security protocols to safeguard your digital assets.",
        },
        {
          num: 2,
          title: "Payment Gateway Integration",
          desc: "Seamless integration of payment solutions for your business.",
        },
        {
          num: 3,
          title: "Trading and Investment Advisory",
          desc: "Expert guidance on trading strategies and investment opportunities.",
        },
      ],
    },
    ai: {
      title: "AI Consultancy and Custom Solutions",
      items: [
        {
          num: 1,
          title: "Custom AI Development",
          desc: "Crafting tailor-made AI systems that leverage machine learning, predictive analytics, and automation to transform your operations.",
        },
        {
          num: 2,
          title: "Data Analysis and Machine Learning",
          desc: "Turning raw data into actionable insights through sophisticated data modeling and analytics.",
        },
        {
          num: 3,
          title: "Natural Language Processing and Computer Vision",
          desc: "Developing intuitive chatbots, language translation tools, and image recognition applications that enhance user engagement and operational efficiency.",
        },
      ],
    },
  };

  const tabs = [
    { key: "blockchain", label: "Our Services" },
    { key: "crypto", label: "Crypto Services" },
    { key: "ai", label: "AI Consultancy" },
  ];

  const currentService = services[activeTab];

  return (
    <section
      id="platform"
      style={{
        background: "transparent",
        position: "relative",
        overflow: "hidden",
        padding: "7rem 0",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "70%",
          height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(255,26,26,0.22), transparent)",
        }}
      />

      <div
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "0 2rem",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div className="platform-shell">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ minWidth: 0 }}
          >
            <div style={{ marginBottom: "2.2rem" }}>
              <h2
                style={{
                  fontSize: "clamp(2.2rem, 4.8vw, 4.4rem)",
                  fontWeight: 400,
                  color: "#ffffff",
                  marginBottom: "1rem",
                  lineHeight: 1.04,
                  letterSpacing: "-0.03em",
                  maxWidth: "12ch",
                }}
              >
                Build, launch, and scale with intelligent infrastructure.
              </h2>
              <p
                style={{
                  color: "rgba(255,255,255,0.74)",
                  maxWidth: "60ch",
                  fontSize: "1.02rem",
                  lineHeight: 1.7,
                  fontWeight: 400,
                }}
              >
                A premium delivery model for blockchain engineering, secure crypto platforms, and tailored AI systems that ship fast without compromising reliability.
              </p>
            </div>

            <div className="service-tabs" style={{ marginBottom: "2rem" }}>
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => {
                    setActiveTab(tab.key);
                    setExpandedIdx(0);
                  }}
                  className={activeTab === tab.key ? "tab-btn tab-btn-active" : "tab-btn"}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="services-column"
          >
            <div className="services-sticky">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.32, ease: "easeOut" }}
                className="services-panel"
              >
                <h3
                  style={{
                    color: "#ffffff",
                    fontSize: "1.35rem",
                    fontWeight: 400,
                    marginBottom: "1.2rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {currentService.title}
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                  {currentService.items.map((item, idx) => {
                    const isOpen = expandedIdx === idx;
                    return (
                      <motion.div
                        key={item.title}
                        layout
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.35, delay: idx * 0.04 }}
                        onClick={() => setExpandedIdx(isOpen ? -1 : idx)}
                        className={isOpen ? "service-card service-card-open" : "service-card"}
                      >
                        <div className="service-head">
                          <div style={{ display: "flex", alignItems: "center", gap: "0.95rem", minWidth: 0 }}>
                            <span className="service-index">{item.num}</span>
                            <h4
                              style={{
                                color: "#ffffff",
                                fontWeight: 400,
                                margin: 0,
                                fontSize: "0.98rem",
                              }}
                            >
                              {item.title}
                            </h4>
                          </div>
                          <motion.span
                            animate={{ rotate: isOpen ? 45 : 0 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            style={{ fontSize: "1.5rem", color: "#FF7A7A", fontWeight: 300 }}
                          >
                            +
                          </motion.span>
                        </div>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.p
                              initial={{ height: 0, opacity: 0, marginTop: 0 }}
                              animate={{ height: "auto", opacity: 1, marginTop: "0.85rem" }}
                              exit={{ height: 0, opacity: 0, marginTop: 0 }}
                              transition={{ duration: 0.24, ease: "easeOut" }}
                              style={{
                                color: "rgba(255,255,255,0.72)",
                                fontSize: "0.92rem",
                                lineHeight: 1.65,
                                overflow: "hidden",
                              }}
                            >
                              {item.desc}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .platform-shell {
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(320px, 0.85fr);
          gap: 2.5rem;
          align-items: start;
        }

        .service-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .tab-btn {
          padding: 0.74rem 1.25rem;
          border-radius: 12px;
          border: 1px solid rgba(255, 26, 26, 0.25);
          color: rgba(255, 255, 255, 0.86);
          background: rgba(20, 20, 20, 0.7);
          font-size: 0.9rem;
          font-weight: 400;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .tab-btn:hover {
          border-color: rgba(255, 26, 26, 0.45);
          background: rgba(30, 18, 18, 0.85);
          transform: translateY(-1px);
        }

        .tab-btn-active {
          border: 1px solid rgba(255, 125, 125, 0.4);
          background: linear-gradient(135deg, rgba(255, 26, 26, 0.85), rgba(179, 0, 0, 0.78));
          color: #ffffff;
          box-shadow: 0 12px 30px rgba(179, 0, 0, 0.28), 0 8px 26px rgba(255, 26, 26, 0.22);
        }

        .service-card {
          border-radius: 16px;
          border: 1px solid rgba(255, 26, 26, 0.22);
          background: linear-gradient(145deg, rgba(18, 12, 12, 0.88), rgba(12, 10, 10, 0.8));
          padding: 1.15rem 1.2rem;
          cursor: pointer;
          transition: border-color 0.2s ease, box-shadow 0.25s ease, transform 0.2s ease;
          backdrop-filter: blur(14px);
        }

        .service-card:hover {
          border-color: rgba(255, 26, 26, 0.4);
          box-shadow: 0 8px 24px rgba(179, 0, 0, 0.2);
          transform: translateY(-1px);
        }

        .service-card-open {
          border-color: rgba(255, 122, 122, 0.45);
          box-shadow: 0 8px 24px rgba(255, 26, 26, 0.18), 0 8px 28px rgba(179, 0, 0, 0.22);
        }

        .service-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .service-index {
          width: 34px;
          height: 34px;
          border-radius: 11px;
          background: linear-gradient(135deg, #ff1a1a, #b30000);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 400;
          font-size: 0.82rem;
          color: #ffffff;
          flex-shrink: 0;
        }

        .services-column {
          min-width: 0;
        }

        .services-sticky {
          position: sticky;
          top: 5.5rem;
          padding-left: 0.4rem;
        }

        .services-panel {
          position: relative;
          border-radius: 20px;
          border: 1px solid rgba(255, 26, 26, 0.26);
          background: linear-gradient(155deg, rgba(16, 9, 9, 0.9), rgba(10, 8, 8, 0.8));
          padding: 1rem 1rem 1.1rem;
          backdrop-filter: blur(14px);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 20px 40px rgba(6, 10, 23, 0.45);
        }

        @media (max-width: 1100px) {
          .platform-shell {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .services-sticky {
            position: relative;
            top: auto;
            max-width: 640px;
            margin-left: auto;
            margin-right: auto;
            padding-left: 0;
          }
        }

        @media (max-width: 768px) {
          .tab-btn {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
