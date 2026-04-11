import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans, Libre_Baskerville } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import AnnouncementBar from "@/components/layout/AnnouncementBar";

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "BizAI PH",
  "description": "AI-powered done-for-you digital growth service for Filipino small and medium businesses",
  "url": "https://www.bizaiph.com",
  "email": "hello@bizaiph.com",
  "areaServed": "Philippines",
  "priceRange": "₱₱",
  "serviceType": [
    "Website Design",
    "AI Automation",
    "Social Media Management",
    "Lead Generation",
    "Google My Business Setup"
  ],
  "knowsLanguage": ["en", "fil"],
  "foundingDate": "2026",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Laguna",
    "addressCountry": "PH"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does BizAI PH do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BizAI PH is a done-for-you AI-powered digital growth service for Filipino SMBs. We build your website, set up AI automation, manage your social media, and handle your Google presence — fully done for you. Your business goes live in 3–5 days."
      }
    },
    {
      "@type": "Question",
      "name": "How much does BizAI PH cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BizAI PH starts at ₱3,999 one-time for the Basic package. Starter is ₱7,999 setup plus ₱2,999 per month. Growth is ₱14,999 setup plus ₱7,999 per month. All packages are 50% off during the April to May 2026 launch promo."
      }
    },
    {
      "@type": "Question",
      "name": "Who is BizAI PH for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BizAI PH serves Filipino small and medium business owners — salons, restaurants, repair shops, clinics, catering businesses, and retail stores. No technical knowledge required."
      }
    },
    {
      "@type": "Question",
      "name": "How long does setup take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BizAI PH sets up your complete digital presence in 3–5 business days from the time you provide your business information."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need technical knowledge?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No technical knowledge is required. BizAI PH handles everything — website, AI setup, social media, and reporting. You only need to provide basic business information like your services, photos, and contact details."
      }
    }
  ]
};

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
  title: "BizAI PH — AI-Powered Digital Growth for Filipino SMBs",
  description: "BizAI PH builds your website, automates your leads, and manages your social media — powered by AI, fully done for you. Filipino SMBs go live in 3–5 days. Starting at ₱3,999.",
  keywords: "website design philippines, AI automation philippines, digital marketing filipino business, messenger bot philippines, google my business setup philippines, done for you marketing philippines",
  openGraph: {
    title: "BizAI PH — AI-Powered Digital Growth for Filipino SMBs",
    description: "Website, AI automation, and social media — fully managed for you. Starting at ₱3,999.",
    url: "https://www.bizaiph.com",
    siteName: "BizAI PH",
    locale: "en_PH",
    type: "website",
    images: [
      {
        url: "https://www.bizaiph.com/og",
        width: 1200,
        height: 628,
        alt: "BizAI PH — AI-Powered Digital Growth for Filipino SMBs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BizAI PH — AI-Powered Digital Growth for Filipino SMBs",
    description: "Website, AI automation, and social media — fully managed for you.",
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
      <head>
        <Script
          id="schema-business"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <Script
          id="schema-faq"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <AnnouncementBar />
        {children}
      </body>
    </html>
  );
}
