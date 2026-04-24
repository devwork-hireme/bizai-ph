import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ui/ScrollProgress";

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

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bizaiph.com"),
  title: "BizAI PH — We Don't Do Marketing. We Build Revenue Machines.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  description:
    "We build AI systems that turn Philippine businesses into automated revenue machines. Starting ₱3,999. Results guaranteed in 30 days.",
  keywords:
    "revenue machine philippines, AI automation philippines, website design filipino business, messenger bot philippines, google my business setup philippines, more customers philippines, online presence philippines",
  openGraph: {
    title: "BizAI PH — We Don't Do Marketing. We Build Revenue Machines.",
    description:
      "We build AI systems that turn Philippine businesses into automated revenue machines. Starting ₱3,999.",
    url: "https://www.bizaiph.com",
    siteName: "BizAI PH",
    locale: "en_PH",
    type: "website",
    images: [
      {
        url: "https://www.bizaiph.com/og",
        width: 1200,
        height: 628,
        alt: "BizAI PH — We Don't Do Marketing. We Build Revenue Machines.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BizAI PH — We Don't Do Marketing. We Build Revenue Machines.",
    description:
      "We build AI systems that turn Philippine businesses into automated revenue machines. Starting ₱3,999.",
    images: ["https://www.bizaiph.com/og"],
  },
  alternates: { canonical: "https://www.bizaiph.com" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-PH" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="min-h-screen antialiased">
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
