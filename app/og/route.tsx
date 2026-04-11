import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "628px",
          display: "flex",
          background: "#0A1628",
          position: "relative",
          overflow: "hidden",
          fontFamily: "sans-serif",
        }}
      >
        {/* Dot grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(245,197,24,0.10) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
            display: "flex",
          }}
        />

        {/* Navy overlay fade — right edge */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 90% 90% at 50% 50%, transparent 40%, #0A1628 100%)",
            display: "flex",
          }}
        />

        {/* Gold accent bar — left */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "6px",
            background: "linear-gradient(180deg, #F5C518 0%, #FFD94A 100%)",
            display: "flex",
          }}
        />

        {/* Gold glow top-left */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            left: "-80px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(245,197,24,0.06)",
            filter: "blur(80px)",
            display: "flex",
          }}
        />

        {/* Content wrapper */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "60px 70px 60px 80px",
            gap: "60px",
          }}
        >
          {/* LEFT — main content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              gap: "0px",
            }}
          >
            {/* Badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "6px 16px",
                  background: "rgba(245,197,24,0.10)",
                  border: "1px solid rgba(245,197,24,0.30)",
                  borderRadius: "100px",
                }}
              >
                <div
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "#22C55E",
                    display: "flex",
                  }}
                />
                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#F5C518",
                    letterSpacing: "0.10em",
                    textTransform: "uppercase",
                  }}
                >
                  AI-Powered · Done For You
                </span>
              </div>
            </div>

            {/* Logo / Brand */}
            <div
              style={{
                fontSize: "80px",
                fontWeight: 800,
                color: "#FFFFFF",
                lineHeight: 1.0,
                letterSpacing: "-0.03em",
                marginBottom: "4px",
                display: "flex",
              }}
            >
              BizAI{" "}
              <span style={{ color: "#F5C518", marginLeft: "16px" }}>PH</span>
            </div>

            {/* Tagline */}
            <div
              style={{
                fontSize: "20px",
                color: "rgba(255,255,255,0.60)",
                lineHeight: 1.6,
                fontWeight: 400,
                maxWidth: "520px",
                marginTop: "20px",
                marginBottom: "40px",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              We build your website, automate your leads, and manage your social
              media — fully powered by AI.
            </div>

            {/* Bottom strip */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "24px",
              }}
            >
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#F5C518",
                  letterSpacing: "0.02em",
                }}
              >
                bizaiph.com
              </span>
              <div
                style={{
                  width: "1px",
                  height: "18px",
                  background: "rgba(255,255,255,0.2)",
                  display: "flex",
                }}
              />
              <span style={{ fontSize: "16px", color: "rgba(255,255,255,0.50)" }}>
                From ₱3,999
              </span>
              <div
                style={{
                  width: "1px",
                  height: "18px",
                  background: "rgba(255,255,255,0.2)",
                  display: "flex",
                }}
              />
              <span style={{ fontSize: "16px", color: "rgba(255,255,255,0.50)" }}>
                Live in 3–5 Days
              </span>
            </div>
          </div>

          {/* RIGHT — feature pills */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              flexShrink: 0,
            }}
          >
            {[
              { label: "Professional Website", icon: "🌐" },
              { label: "24/7 AI Messenger Bot", icon: "🤖" },
              { label: "Google My Business", icon: "📍" },
              { label: "Automated FB Posts", icon: "📱" },
            ].map((f) => (
              <div
                key={f.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "16px 24px",
                  background: "rgba(15,30,53,0.90)",
                  border: "1px solid rgba(26,58,107,0.80)",
                  borderRadius: "12px",
                  minWidth: "280px",
                }}
              >
                <span style={{ fontSize: "22px" }}>{f.icon}</span>
                <span
                  style={{
                    fontSize: "17px",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.85)",
                  }}
                >
                  {f.label}
                </span>
              </div>
            ))}

            {/* Gold CTA pill */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px 24px",
                background: "#F5C518",
                borderRadius: "12px",
                marginTop: "4px",
              }}
            >
              <span
                style={{
                  fontSize: "17px",
                  fontWeight: 700,
                  color: "#0A1628",
                  letterSpacing: "0.01em",
                }}
              >
                Book Free Session →
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 628,
    }
  );
}
