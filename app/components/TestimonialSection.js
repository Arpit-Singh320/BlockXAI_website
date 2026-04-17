"use client";

import { motion } from "framer-motion";

const testimonials = [
	{
		company: "Elite Properties Group",
		review:
			"Real estate transactions require high levels of security and transparency. BlockX AI Limited's blockchain solution has streamlined our property verification process, preventing fraud and ensuring seamless transactions. Their AI market analysis tools have also improved our investment decisions.",
	},
	{
		company: "Future Learning Academy",
		review:
			"Credential fraud was a growing challenge in our institution, but with BlockX AI Limited's blockchain-powered academic record management system, we now issue verifiable, tamper-proof certificates. Their AI-driven personalized learning solutions have helped us enhance student outcomes.",
	},
	{
		company: "Nova Trade Ventures",
		review:
			"From secure smart contract workflows to predictive analytics, the team delivered a complete stack that improved operational speed and investor confidence. The onboarding experience was smooth and highly professional.",
	},
	{
		company: "Vertex Fintech Labs",
		review:
			"We needed trusted automation and compliance-ready data pipelines. BlockX AI Limited delivered both with precision. Their execution quality and responsiveness stood out from day one.",
	},
];

export default function TestimonialSection() {
	return (
		<section className="testimonial-section">
			<div className="testimonial-heading-wrap">
				<p className="testimonial-kicker">TESTIMONIALS</p>
				<h2 className="testimonial-heading">Over 400 companies have already Tried</h2>
			</div>

			<motion.div
				className="testimonial-shell"
				initial={{ opacity: 0, y: 24 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.25 }}
				transition={{ duration: 0.55, ease: "easeOut" }}
			>
				<div className="testimonial-fade testimonial-fade-left" />
				<div className="testimonial-fade testimonial-fade-right" />

				<div className="testimonial-track">
					{[...testimonials, ...testimonials].map((item, idx) => (
						<article key={`${item.company}-${idx}`} className="testimonial-card">
							<div className="testimonial-card-top">
								<p>{item.company}</p>
								<span>{"★".repeat(5)}</span>
							</div>
							<p className="testimonial-card-body">{item.review}</p>
						</article>
					))}
				</div>
			</motion.div>

			<style>{`
				.testimonial-section {
					background: transparent;
					padding: 4.5rem 0 6rem;
					overflow: hidden;
				}

				.testimonial-heading-wrap {
					max-width: 1760px;
					margin: 1.8rem auto 1.25rem;
					padding: 0 1rem;
					text-align: center;
				}

				.testimonial-kicker {
					margin: 0 0 0.6rem;
					color: #ff1a1a;
					font-size: 0.78rem;
					font-weight: 700;
					letter-spacing: 0.12em;
				}

				.testimonial-heading {
					margin: 0;
					color: #ffffff;
					font-size: clamp(1.7rem, 3.2vw, 2.8rem);
					font-weight: 500;
					letter-spacing: -0.02em;
				}

				.testimonial-shell {
					max-width: 1760px;
					margin: 0 auto;
					position: relative;
					overflow: hidden;
					padding: 0.8rem 0;
				}

				.testimonial-fade {
					position: absolute;
					top: 0;
					bottom: 0;
					width: 10%;
					z-index: 2;
					pointer-events: none;
				}

				.testimonial-fade-left {
					left: 0;
					background: linear-gradient(90deg, rgba(1, 1, 13, 0.96), rgba(1, 1, 13, 0.5), transparent);
				}

				.testimonial-fade-right {
					right: 0;
					background: linear-gradient(270deg, rgba(1, 1, 13, 0.96), rgba(1, 1, 13, 0.5), transparent);
				}

				.testimonial-track {
					width: max-content;
					display: flex;
					gap: 1.6rem;
					padding: 0 1.8rem;
					animation: testimonialSlide 36s linear infinite;
					will-change: transform;
				}

				.testimonial-card {
					width: min(516px, 82vw);
					min-height: 264px;
					border-radius: 18px;
					background: linear-gradient(150deg, #5a0002 0%, #450003 100%);
					padding: 1.45rem 1.55rem;
					border: 1px solid rgba(255, 120, 120, 0.18);
					display: flex;
					flex-direction: column;
					justify-content: space-between;
				}

				.testimonial-card-top {
					display: flex;
					align-items: center;
					justify-content: space-between;
					gap: 1rem;
				}

				.testimonial-card-top p {
					margin: 0;
					color: #ffffff;
					font-size: clamp(1rem, 1.5vw, 1.35rem);
					font-weight: 600;
					letter-spacing: -0.02em;
				}

				.testimonial-card-top span {
					color: #ffb43f;
					font-size: clamp(0.95rem, 1.3vw, 1.2rem);
					letter-spacing: 0.18em;
					flex-shrink: 0;
				}

				.testimonial-card-body {
					margin: 0.95rem 0 0;
					color: rgba(255, 255, 255, 0.95);
					font-size: clamp(0.98rem, 1.25vw, 1.2rem);
					line-height: 1.45;
					letter-spacing: -0.02em;
					font-weight: 500;
					max-width: 97%;
				}

				@keyframes testimonialSlide {
					from {
						transform: translateX(-50%);
					}

					to {
						transform: translateX(0);
					}
				}

				@media (max-width: 1024px) {
					.testimonial-card {
						min-height: 240px;
						padding: 1.2rem 1.25rem;
					}
				}

				@media (max-width: 768px) {
					.testimonial-section {
						padding: 3.25rem 0 4rem;
					}

					.testimonial-shell {
						padding: 0.7rem 0;
					}

					.testimonial-track {
						gap: 1rem;
						padding: 0 1rem;
					}

					.testimonial-card {
						width: min(92vw, 500px);
						min-height: 230px;
						border-radius: 18px;
					}
				}
			`}</style>
		</section>
	);
}
