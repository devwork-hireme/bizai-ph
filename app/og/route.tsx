import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs";

export async function GET() {
  const logoData = readFileSync(join(process.cwd(), "public", "logo.png"));
  const logoBase64 = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "628px",
          background: "#0A1628",
          display: "flex",
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
              "radial-gradient(circle, rgba(245,197,24,0.12) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            display: "flex",
          }}
        />

        {/* Gold radial glow — top-right */}
        <div
          style={{
            position: "absolute",
            top: "-160px",
            right: "-120px",
            width: "520px",
            height: "520px",
            borderRadius: "50%",
            background: "rgba(245,197,24,0.10)",
            filter: "blur(80px)",
            display: "flex",
          }}
        />

        {/* Gold radial glow — bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: "-140px",
            left: "-100px",
            width: "420px",
            height: "420px",
            borderRadius: "50%",
            background: "rgba(245,197,24,0.05)",
            filter: "blur(60px)",
            display: "flex",
          }}
        />

        {/* Left gold accent bar */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "6px",
            background:
              "linear-gradient(180deg, transparent 0%, #F5C518 25%, #F5C518 75%, transparent 100%)",
            display: "flex",
          }}
        />

        {/* LEFT COLUMN */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px 50px 60px 80px",
            width: "680px",
            gap: "22px",
            position: "relative",
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(245,197,24,0.10)",
              border: "1px solid rgba(245,197,24,0.30)",
              borderRadius: "100px",
              padding: "8px 20px",
              width: "fit-content",
            }}
          >
            <div
              style={{
                width: "7px",
                height: "7px",
                background: "#F5C518",
                borderRadius: "50%",
                display: "flex",
              }}
            />
            <span
              style={{
                fontSize: "14px",
                fontWeight: 700,
                color: "#F5C518",
                letterSpacing: "0.10em",
                textTransform: "uppercase",
              }}
            >
              AI-Powered · Done For You
            </span>
          </div>

          {/* Logo row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logoBase64}
              width={72}
              height={72}
              style={{ borderRadius: "14px" }}
              alt="BizAI PH logo"
            />
            <span
              style={{
                fontSize: "68px",
                fontWeight: 800,
                color: "#FFFFFF",
                letterSpacing: "-0.03em",
                lineHeight: 1,
                display: "flex",
              }}
            >
              Biz
              <span style={{ color: "#F5C518" }}>AI</span>
              {" PH"}
            </span>
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: "21px",
              color: "rgba(255,255,255,0.62)",
              lineHeight: 1.65,
              maxWidth: "530px",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            We build your website, automate your leads, and manage your social
            media —{" "}
            <span
              style={{
                color: "rgba(255,255,255,0.90)",
                fontWeight: 600,
                marginLeft: "5px",
              }}
            >
              fully powered by AI.
            </span>
          </div>

          {/* Bottom badges row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              marginTop: "4px",
            }}
          >
            <span
              style={{
                fontSize: "18px",
                color: "#F5C518",
                fontWeight: 600,
              }}
            >
              bizaiph.com
            </span>

            <div
              style={{
                width: "4px",
                height: "4px",
                background: "rgba(255,255,255,0.25)",
                borderRadius: "50%",
                display: "flex",
              }}
            />

            <div
              style={{
                background: "rgba(245,197,24,0.12)",
                border: "1px solid rgba(245,197,24,0.40)",
                borderRadius: "8px",
                padding: "6px 14px",
                fontSize: "15px",
                fontWeight: 700,
                color: "#F5C518",
                display: "flex",
              }}
            >
              From ₱3,999
            </div>

            <div
              style={{
                width: "4px",
                height: "4px",
                background: "rgba(255,255,255,0.25)",
                borderRadius: "50%",
                display: "flex",
              }}
            />

            <div
              style={{
                background: "rgba(34,197,94,0.12)",
                border: "1px solid rgba(34,197,94,0.40)",
                borderRadius: "8px",
                padding: "6px 14px",
                fontSize: "15px",
                fontWeight: 700,
                color: "#22C55E",
                display: "flex",
              }}
            >
              Live in 3–5 Days
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN — feature cards */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "12px",
            padding: "60px 60px 60px 10px",
            flex: 1,
            position: "relative",
          }}
        >
          {(
            [
              {
                icon: "🌐",
                title: "Professional Website",
                sub: "Live in 3–5 days",
                highlight: false,
              },
              {
                icon: "🤖",
                title: "AI Messenger Bot",
                sub: "Answers 24/7 automatically",
                highlight: true,
              },
              {
                icon: "📍",
                title: "Google My Business",
                sub: "Found on Maps & Search",
                highlight: false,
              },
              {
                icon: "📱",
                title: "Auto Facebook Posts",
                sub: "3x per week, done for you",
                highlight: false,
              },
            ] as { icon: string; title: string; sub: string; highlight: boolean }[]
          ).map((f, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                background: f.highlight
                  ? "rgba(245,197,24,0.06)"
                  : "rgba(255,255,255,0.04)",
                border: `1px solid ${
                  f.highlight
                    ? "rgba(245,197,24,0.30)"
                    : "rgba(245,197,24,0.20)"
                }`,
                borderRadius: "12px",
                padding: "14px 18px",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  background: "rgba(245,197,24,0.10)",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                  flexShrink: 0,
                }}
              >
                {f.icon}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2px",
                }}
              >
                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#FFFFFF",
                  }}
                >
                  {f.title}
                </span>
                <span
                  style={{
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.45)",
                  }}
                >
                  {f.sub}
                </span>
              </div>
            </div>
          ))}

          {/* Philippines tag */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              marginTop: "8px",
              fontSize: "13px",
              color: "rgba(255,255,255,0.30)",
            }}
          >
            🇵🇭 For Filipino SMBs
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 628 }
  );
}
