import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/components/layout/AnnouncementBar";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-baskerville",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A1628",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://bizaiph.com"),
  title: "BizAI PH — Done-For-You Digital Growth for Filipino SMBs",
  description:
    "BizAI PH builds your website, automates your leads, and manages your social media — 100% done for you. Serving Philippine SMBs. Launch promo: 50% off April to May 2026.",
  keywords: [
    "digital growth philippines",
    "website design philippines",
    "AI automation philippines",
    "Filipino SMB digital marketing",
    "done for you marketing philippines",
    "BizAI PH",
    "business website Philippines",
    "lead automation Philippines",
  ],
  authors: [{ name: "BizAI PH" }],
  creator: "BizAI PH",
  publisher: "BizAI PH",
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: "https://bizaiph.com",
    siteName: "BizAI PH",
    title: "BizAI PH — Done-For-You Digital Growth for Filipino SMBs",
    description:
      "BizAI PH builds your website, automates your leads, and manages your social media — 100% done for you. Serving Philippine SMBs. Launch promo: 50% off April to May 2026.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "BizAI PH — Done-For-You Digital Growth" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BizAI PH — Done-For-You Digital Growth for Filipino SMBs",
    description:
      "Website, AI automation, leads, and social media — fully set up and managed for you. Launch promo: 50% off April to May 2026.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://bizaiph.com" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-PH" className={`${syne.variable} ${dmSans.variable} ${libreBaskerville.variable}`}>
      <body className="min-h-screen antialiased">
        <AnnouncementBar />
        {children}
      </body>
    </html>
  );
}
