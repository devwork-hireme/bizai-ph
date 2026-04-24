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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "BizAI PH",
              "description": "AI-powered revenue machines for Philippine businesses. One system that finds customers, answers every inquiry, and grows your revenue automatically.",
              "url": "https://bizaiph.com",
              "telephone": "+639602104478",
              "email": "hello@bizaiph.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Taguig City",
                "addressRegion": "Metro Manila",
                "addressCountry": "PH"
              },
              "areaServed": "Philippines",
              "priceRange": "₱₱",
              "sameAs": ["https://bizaiph.com"]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is the difference between Get Found and Get Customers?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Get Found puts your business on Google Maps and Search so customers can find you. Get Customers adds AI that replies to every inquiry in seconds, 24/7, and follows up automatically for 3 days so no lead ever goes cold."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How fast will I see results?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Your website and Google listing go live within 24 hours. Most clients see their first online inquiry within the first week."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What if it does not generate revenue?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "If your revenue machine does not deliver measurable results in 30 days, we rebuild the entire system at zero cost. No fine print. No conditions."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I have to sign a long-term contract?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. All plans are month-to-month. Cancel anytime."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much does it cost?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Get Found starts at ₱3,999 one-time. Get Customers is ₱2,999 per month. Get Sales is ₱7,999 per month."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
