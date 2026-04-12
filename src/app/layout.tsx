import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Preloader } from "@/components/layout/Preloader";
import Footer4 from "@/components/blocks/footer-4";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "BlockXAI Limited — Enterprise Blockchain & AI Consultancy",
    template: "%s | BlockXAI Limited",
  },
  description:
    "BlockXAI Limited helps organisations design, integrate, and scale blockchain systems, Web3 products, crypto infrastructure, and AI-led transformation programmes.",
  keywords: [
    "blockchain consultancy",
    "AI consultancy",
    "Web3 solutions",
    "crypto services",
    "enterprise blockchain",
    "smart contracts",
    "BlockXAI",
  ],
  authors: [{ name: "BlockXAI Limited" }],
  creator: "BlockXAI Limited",
  metadataBase: new URL("https://blockxint.com"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://blockxint.com",
    siteName: "BlockXAI Limited",
    title: "BlockXAI Limited — Enterprise Blockchain & AI Consultancy",
    description:
      "Enterprise blockchain, Web3, crypto, and AI consultancy delivering secure and scalable digital transformation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BlockXAI Limited",
    description: "Enterprise Blockchain & AI Consultancy",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body className="antialiased font-sans bg-white text-[#121212] overflow-x-hidden">
        <Preloader />
        <Navbar />
        <main>{children}</main>
        <Footer4 />
      </body>
    </html>
  );
}
