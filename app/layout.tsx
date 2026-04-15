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
  metadataBase: new URL("https://www.bizaiph.com"),
  title: "BizAI PH — More Customers. Less Work. Guaranteed.",
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  description: "Stop losing customers to competitors who are online. BizAI PH builds the complete system that gets your business found, turns inquiries into customers, and grows your revenue automatically. Starting ₱3,999. Results guaranteed in 30 days.",
  keywords: "website design philippines, AI automation philippines, digital marketing filipino business, messenger bot philippines, google my business setup philippines, done for you marketing philippines, more customers philippines, online presence philippines",
  openGraph: {
    title: "BizAI PH — More Customers. Less Work. Guaranteed.",
    description: "Stop losing customers to competitors who are online. BizAI PH builds the complete system that gets your business found, turns inquiries into customers, and grows your revenue automatically. Starting ₱3,999.",
    url: "https://www.bizaiph.com",
    siteName: "BizAI PH",
    locale: "en_PH",
    type: "website",
    images: [
      {
        url: "https://www.bizaiph.com/og",
        width: 1200,
        height: 628,
        alt: "BizAI PH — More Customers. Less Work. Guaranteed.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BizAI PH — More Customers. Less Work. Guaranteed.",
    description: "Stop losing customers to competitors who are online. BizAI PH builds the complete system that gets your business found, turns inquiries into customers, and grows your revenue automatically.",
    images: ["https://www.bizaiph.com/og"],
  },
  alternates: { canonical: "https://www.bizaiph.com" },
  robots: { index: true, follow: true },
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
