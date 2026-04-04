import type { Metadata, Viewport } from "next";
import { Outfit, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/components/layout/AnnouncementBar";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
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
  themeColor: "#06060f",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://bizaiph.com"),
  title: "BizAI PH — We Automate Your Business. You Grow It.",
  description:
    "BizAI PH builds and manages done-for-you AI automation systems for Philippine businesses. Messenger bots, lead capture, appointment booking, order processing — fully set up and managed for you. Starting at ₱1,500/month.",
  keywords: [
    "AI automation Philippines",
    "business automation Philippines",
    "Messenger bot Philippines",
    "lead capture automation",
    "appointment booking automation Philippines",
    "done-for-you automation",
    "BizAI PH",
  ],
  authors: [{ name: "BizAI PH" }],
  creator: "BizAI PH",
  publisher: "BizAI PH",
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: "https://bizaiph.com",
    siteName: "BizAI PH",
    title: "BizAI PH — We Automate Your Business. You Grow It.",
    description:
      "Done-for-you AI automation for Philippine businesses. Messenger bots, lead capture, appointment booking, and order processing — fully managed. Starting at ₱1,500/month.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "BizAI PH" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BizAI PH — We Automate Your Business. You Grow It.",
    description: "Done-for-you AI automation for Philippine businesses. Starting at ₱1,500/month.",
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
    <html lang="en-PH" className={`${outfit.variable} ${libreBaskerville.variable}`}>
      <body className="min-h-screen antialiased">
        <AnnouncementBar />
        {children}
      </body>
    </html>
  );
}
