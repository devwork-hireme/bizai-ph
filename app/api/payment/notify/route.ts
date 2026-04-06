import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST() {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const phtDate = new Date().toLocaleString("en-PH", {
      timeZone: "Asia/Manila",
      dateStyle: "full",
      timeStyle: "short",
    });

    await resend.emails.send({
      from: "BizAI PH <noreply@bizaiph.com>",
      to: ["hello@bizaiph.com"],
      subject: "New Payment Received — BizAI PH",
      html: `
        <div style="font-family: 'Outfit', 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #06060f; color: #eeeef8; padding: 40px; border-radius: 12px;">
          <h1 style="margin: 0 0 16px; font-size: 20px; font-weight: 900; color: #eeeef8;">
            💰 New Payment Received
          </h1>
          <p style="font-size: 14px; color: #aaaacc; margin: 0 0 24px;">
            A payment was just completed on bizaiph.com
          </p>
          <p style="font-size: 13px; color: #666688; margin: 0;">
            ${phtDate} PHT
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[notify] Error:", error);
    return NextResponse.json({ error: "Failed to send notification" }, { status: 500 });
  }
}
