import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Professional Logo for Your Filipino Business — BizAI PH",
  description: "Get a professional logo for your business — completely free. Delivered via WhatsApp within 24 hours. Any Philippine business. No payment. No hidden charges.",
};

export default function FreeLogoPage() {
  return (
    <iframe
      src="/free-logo.html"
      style={{
        width: "100%",
        height: "100vh",
        border: "none",
        display: "block",
      }}
    />
  );
}
