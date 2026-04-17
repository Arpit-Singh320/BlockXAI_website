import { Inter } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://blockx.ai"),
  title: {
    default: "BlockX | AI Technology For Business",
    template: "%s | BlockX",
  },
  description:
    "BlockX helps businesses scale with practical AI solutions, automation, and modern digital infrastructure.",
  keywords: [
    "BlockX",
    "AI technology",
    "business automation",
    "digital transformation",
    "AI solutions",
    "enterprise AI",
  ],
  applicationName: "BlockX",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "BlockX | AI Technology For Business",
    description: "Scale your business with BlockX AI solutions and digital innovation.",
    url: "/",
    siteName: "BlockX",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "BlockX AI technology for business",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BlockX | AI Technology For Business",
    description: "Scale your business with BlockX AI solutions and digital innovation.",
    images: ["/hero.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body style={{ fontFamily: "var(--font-sans, 'Roobert', sans-serif)" }}>
        {children}
      </body>
    </html>
  );
}
