import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await req.json();
    const { firstName, lastName, email, businessName, businessType, challenge, message } = body;

    if (!firstName || !lastName || !email || !businessName || !businessType || !challenge) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    // PHT timestamp
    const phtDate = new Date().toLocaleString("en-PH", {
      timeZone: "Asia/Manila",
      dateStyle: "full",
      timeStyle: "short",
    });

    const challengeLabels: Record<string, string> = {
      "slow-response": "Slow response to customer messages",
      "losing-leads": "Losing leads to late follow-up",
      "manual-orders": "Manual order processing",
      "no-booking": "No appointment booking system",
      "admin-time": "Too much time on admin tasks",
      "no-visibility": "No visibility on daily performance",
      other: "Other",
    };

    const businessTypeLabels: Record<string, string> = {
      restaurant: "Restaurant / Food Service",
      salon: "Salon / Spa / Beauty",
      "online-seller": "Online Seller — Shopee / Lazada",
      "real-estate": "Real Estate",
      clinic: "Clinic / Healthcare",
      coach: "Coach / Consultant",
      agency: "Marketing Agency",
      other: "Other",
    };

    await resend.emails.send({
      from: "BizAI PH Contact <noreply@bizaiph.com>",
      to: ["hello@bizaiph.com"],
      replyTo: email,
      subject: `New Audit Request — ${firstName} ${lastName} (${businessName})`,
      html: `
        <div style="font-family: 'Outfit', 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #06060f; color: #eeeef8; padding: 40px; border-radius: 12px;">
          <div style="margin-bottom: 32px; padding-bottom: 24px; border-bottom: 1px solid rgba(82,130,255,0.15);">
            <h1 style="margin: 0 0 8px; font-size: 22px; font-weight: 900; letter-spacing: -0.03em; color: #eeeef8;">
              New Automation Audit Request
            </h1>
            <p style="margin: 0; font-size: 13px; color: #666688;">${phtDate} PHT</p>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 28px;">
            ${[
              ["Name", `${firstName} ${lastName}`],
              ["Email", email],
              ["Business Name", businessName],
              ["Business Type", businessTypeLabels[businessType] || businessType],
              ["Biggest Challenge", challengeLabels[challenge] || challenge],
            ]
              .map(
                ([label, value]) => `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(82,130,255,0.1); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #666688; width: 38%;">${label}</td>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(82,130,255,0.1); font-size: 14px; color: #eeeef8;">${value}</td>
              </tr>
            `
              )
              .join("")}
          </table>

          ${
            message
              ? `
            <div style="background: #10102a; border: 1px solid rgba(82,130,255,0.12); border-radius: 10px; padding: 20px; margin-bottom: 28px;">
              <p style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #666688; margin: 0 0 10px;">Additional Message</p>
              <p style="font-size: 14px; color: #aaaacc; line-height: 1.7; margin: 0;">${message}</p>
            </div>
          `
              : ""
          }

          <div style="background: rgba(61,111,255,0.08); border: 1px solid rgba(82,130,255,0.2); border-radius: 10px; padding: 16px 20px;">
            <p style="margin: 0; font-size: 13px; color: #6B93FF;">
              Reply directly to this email to contact <strong>${firstName}</strong> at <strong>${email}</strong>
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[contact] Error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
