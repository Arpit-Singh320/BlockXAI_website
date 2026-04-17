import Image from "next/image";

export default function ContactSection() {
	return (
		<section
			id="contact"
			style={{
				background: "transparent",
				padding: "6rem 0",
			}}
		>
			<div style={{ maxWidth: 1360, margin: "0 auto", padding: "0 2rem" }}>
				<div
					className="contact-bento"
					style={{
						display: "grid",
						gridTemplateColumns: "1.05fr 0.95fr",
						gap: 0,
						border: "1px solid rgba(255,26,26,0.22)",
						background: "linear-gradient(135deg, rgba(12,8,10,0.94), rgba(5,5,10,0.96))",
						boxShadow: "0 30px 60px rgba(0,0,0,0.34), 0 0 0 1px rgba(255,26,26,0.06) inset",
						overflow: "hidden",
						position: "relative",
					}}
				>
					<div
						style={{
							background: "linear-gradient(160deg, rgba(22,8,10,0.92), rgba(8,6,8,0.95))",
							minHeight: "560px",
							position: "relative",
							overflow: "hidden",
							borderRight: "1px solid rgba(255,26,26,0.18)",
						}}
					>
						<div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 18% 18%, rgba(255,26,26,0.24), transparent 28%), linear-gradient(180deg, rgba(0,0,0,0.05), rgba(0,0,0,0.72))", zIndex: 1 }} />
						<Image
							src="/hero-3d.png"
							alt="Contact visual"
							fill
							sizes="(max-width: 1024px) 100vw, 52vw"
							style={{ objectFit: "cover", objectPosition: "center" }}
						/>
						<div
							style={{
								position: "absolute",
								inset: 0,
								background: "linear-gradient(180deg, rgba(7,7,7,0.1) 0%, rgba(7,7,7,0.8) 100%)",
								zIndex: 2,
							}}
						/>
						<div
							style={{
								position: "absolute",
								top: "1.4rem",
								left: "1.4rem",
								zIndex: 3,
								display: "inline-flex",
								alignItems: "center",
								gap: "0.55rem",
								padding: "0.45rem 0.8rem",
								border: "1px solid rgba(255,26,26,0.22)",
								background: "rgba(0,0,0,0.32)",
								color: "#ffffff",
								fontSize: "0.76rem",
								letterSpacing: "0.12em",
								textTransform: "uppercase",
							}}
						>
							<span style={{ width: 6, height: 6, borderRadius: 0, background: "#ff1a1a", display: "inline-block" }} />
							Contact Block
						</div>
						<div
							style={{
								position: "absolute",
								left: "1.4rem",
								right: "1.4rem",
								bottom: "1.4rem",
								color: "#ffffff",
								zIndex: 2,
							}}
						>
							<p style={{ margin: 0, color: "rgba(255,255,255,0.68)", fontSize: "0.92rem", lineHeight: 1.6, maxWidth: 460 }}>
								Tell us what you are building and we will shape a secure blockchain, Web3, or AI solution around it.
							</p>
							<div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "0.7rem", marginTop: "1rem" }}>
								<div style={{ padding: "0.8rem 0.9rem", border: "1px solid rgba(255,26,26,0.16)", background: "rgba(5,5,10,0.38)", borderRadius: 0 }}>
									<div style={{ color: "#ff4d4d", fontSize: "0.72rem", letterSpacing: "0.09em", textTransform: "uppercase" }}>Response</div>
									<div style={{ marginTop: "0.35rem", fontWeight: 700 }}>Within 24h</div>
								</div>
								<div style={{ padding: "0.8rem 0.9rem", border: "1px solid rgba(255,26,26,0.16)", background: "rgba(5,5,10,0.38)", borderRadius: 0 }}>
									<div style={{ color: "#ff4d4d", fontSize: "0.72rem", letterSpacing: "0.09em", textTransform: "uppercase" }}>Focus</div>
									<div style={{ marginTop: "0.35rem", fontWeight: 700 }}>BlockX AI</div>
								</div>
								<div style={{ padding: "0.8rem 0.9rem", border: "1px solid rgba(255,26,26,0.16)", background: "rgba(5,5,10,0.38)", borderRadius: 0 }}>
									<div style={{ color: "#ff4d4d", fontSize: "0.72rem", letterSpacing: "0.09em", textTransform: "uppercase" }}>Mode</div>
									<div style={{ marginTop: "0.35rem", fontWeight: 700 }}>Consult + Build</div>
								</div>
							</div>
						</div>
					</div>

					<div
						style={{
							background: "linear-gradient(145deg, rgba(10,8,10,0.94), rgba(6,6,8,0.96))",
							padding: "2rem",
							position: "relative",
						}}
					>
						<div
							style={{
								position: "absolute",
								left: 0,
								top: 0,
								bottom: 0,
								width: "1px",
								background: "linear-gradient(180deg, rgba(255,26,26,0.08), rgba(255,26,26,0.34), rgba(255,26,26,0.08))",
								opacity: 0.9,
							}}
						/>
						<div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.6rem" }}>
							<p style={{ margin: 0, color: "#ff4d4d", fontSize: "0.78rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 700 }}>
								Start a conversation
							</p>
							<h2 style={{ margin: 0, color: "#ffffff", fontSize: "clamp(1.8rem, 3vw, 2.35rem)", fontWeight: 700, letterSpacing: "-0.03em" }}>
								Get In Touch
							</h2>
							<p style={{ margin: 0, color: "rgba(255,255,255,0.68)", fontSize: "0.96rem", maxWidth: 460, lineHeight: 1.7 }}>
								Share your requirements and our team will reach out with a tailored plan.
							</p>
						</div>

						<form style={{ display: "grid", gap: "1rem" }}>
							<div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "0.9rem" }}>
								<label style={{ display: "grid", gap: "0.35rem" }}>
									<span style={{ color: "#ffffff", fontSize: "0.78rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>Name</span>
								<input
									type="text"
									name="name"
									placeholder="Enter your full name"
									style={{
										background: "rgba(255,255,255,0.04)",
										border: "1px solid rgba(255,26,26,0.18)",
										color: "#ffffff",
										padding: "0.78rem 0.85rem",
										outline: "none",
										borderRadius: 0,
									}}
								/>
								</label>

								<label style={{ display: "grid", gap: "0.35rem" }}>
									<span style={{ color: "#ffffff", fontSize: "0.78rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>Email</span>
								<input
									type="email"
									name="email"
									placeholder="Enter your email address"
									style={{
										background: "rgba(255,255,255,0.04)",
										border: "1px solid rgba(255,26,26,0.18)",
										color: "#ffffff",
										padding: "0.78rem 0.85rem",
										outline: "none",
										borderRadius: 0,
									}}
								/>
								</label>
							</div>

							<label style={{ display: "grid", gap: "0.35rem" }}>
								<span style={{ color: "#ffffff", fontSize: "0.78rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>Message</span>
								<textarea
									name="message"
									rows={7}
									placeholder="Tell us about your project goals"
									style={{
										background: "rgba(255,255,255,0.04)",
										border: "1px solid rgba(255,26,26,0.18)",
										color: "#ffffff",
										padding: "0.78rem 0.85rem",
										outline: "none",
										resize: "vertical",
										borderRadius: 0,
									}}
								/>
							</label>

							<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap", marginTop: "0.35rem" }}>
								<p style={{ margin: 0, color: "rgba(255,255,255,0.58)", fontSize: "0.82rem" }}>
									We typically reply within one business day.
								</p>

								<button
									type="submit"
									style={{
										border: "1px solid rgba(255,26,26,0.55)",
										background: "linear-gradient(135deg, #ff1a1a, #8b0000)",
										color: "#ffffff",
										padding: "0.9rem 1.15rem",
										fontSize: "0.9rem",
										letterSpacing: "0.08em",
										cursor: "pointer",
										borderRadius: 0,
										fontWeight: 700,
									}}
								>
									SEND MESSAGE
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>

			<style>{`
				.contact-bento {
					border-radius: 0;
				}

				.contact-bento::before {
					content: "";
					position: absolute;
					left: 0;
					right: 0;
					top: 0;
					height: 1px;
					background: linear-gradient(90deg, rgba(255,26,26,0.05), rgba(255,26,26,0.5), rgba(255,26,26,0.05));
				}

				.contact-bento input:focus,
				.contact-bento textarea:focus {
					border-color: rgba(255,26,26,0.65);
					box-shadow: 0 0 0 1px rgba(255,26,26,0.28);
				}

				.contact-bento button:hover {
					filter: brightness(1.08);
				}

				@media (max-width: 1024px) {
					.contact-bento {
						grid-template-columns: 1fr !important;
					}

					.contact-bento > div:first-child {
						min-height: 420px !important;
						border-right: none !important;
						border-bottom: 1px solid rgba(255,26,26,0.18);
					}

					.contact-bento > div:last-child > div:first-child {
						display: none;
					}

					.contact-bento form > div {
						grid-template-columns: 1fr !important;
					}
				}

				@media (max-width: 640px) {
					.contact-bento > div:first-child {
						min-height: 360px !important;
					}

					.contact-bento > div:first-child > div:last-child > div {
						grid-template-columns: 1fr !important;
					}
				}
			`}</style>
		</section>
	);
}
