import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await req.json();
    const {
      fullName,
      whatsapp,
      businessName,
      businessType,
      packageInterest,
      preferredSchedule,
      message,
    } = body;

    if (!fullName || !whatsapp || !businessName || !businessType || !packageInterest) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const phtDate = new Date().toLocaleString("en-PH", {
      timeZone: "Asia/Manila",
      dateStyle: "full",
      timeStyle: "short",
    });

    const businessTypeLabels: Record<string, string> = {
      salon: "Salon / Barbershop",
      restaurant: "Restaurant / Food Business",
      repair: "Repair Shop",
      clinic: "Clinic / Medical",
      catering: "Catering",
      retail: "Retail Store",
      service: "Service Business",
      other: "Other",
    };

    const packageLabels: Record<string, string> = {
      basic: "Basic — ₱3,999 launch (was ₱7,999)",
      starter: "Starter — ₱7,999 launch + ₱2,999/mo (was ₱15,999 + ₱5,999/mo)",
      growth: "Growth — Coming Soon Waitlist",
      unsure: "Not sure yet",
    };

    await resend.emails.send({
      from: "BizAI PH Booking <noreply@bizaiph.com>",
      to: ["hello@bizaiph.com"],
      subject: `New 30-Min Session Request — ${fullName} (${businessName})`,
      html: `
        <div style="font-family: 'DM Sans', 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #0A1628; color: #FFFFFF; padding: 40px; border-radius: 12px;">
          <div style="margin-bottom: 32px; padding-bottom: 24px; border-bottom: 1px solid rgba(245,197,24,0.2);">
            <h1 style="margin: 0 0 8px; font-size: 22px; font-weight: 900; letter-spacing: -0.03em; color: #FFFFFF;">
              New Free 30-Min Session Request
            </h1>
            <p style="margin: 0; font-size: 13px; color: #6B7A99;">${phtDate} PHT</p>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 28px;">
            ${[
              ["Full Name", fullName],
              ["WhatsApp Number", whatsapp],
              ["Business Name", businessName],
              ["Business Type", businessTypeLabels[businessType] || businessType],
              ["Package Interest", packageLabels[packageInterest] || packageInterest],
              ["Preferred Schedule", preferredSchedule || "Not specified"],
            ]
              .map(
                ([label, value]) => `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(245,197,24,0.1); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #6B7A99; width: 38%;">${label}</td>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(245,197,24,0.1); font-size: 14px; color: #FFFFFF;">${value}</td>
              </tr>
            `
              )
              .join("")}
          </table>

          ${
            message
              ? `
            <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(245,197,24,0.15); border-radius: 10px; padding: 20px; margin-bottom: 28px;">
              <p style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #6B7A99; margin: 0 0 10px;">About Their Business</p>
              <p style="font-size: 14px; color: rgba(255,255,255,0.75); line-height: 1.7; margin: 0;">${message}</p>
            </div>
          `
              : ""
          }

          <div style="background: rgba(245,197,24,0.08); border: 1px solid rgba(245,197,24,0.25); border-radius: 10px; padding: 16px 20px;">
            <p style="margin: 0; font-size: 13px; color: #F5C518;">
              Reply to WhatsApp <strong>${whatsapp}</strong> to confirm the session with <strong>${fullName}</strong>.
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[booking] Error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
