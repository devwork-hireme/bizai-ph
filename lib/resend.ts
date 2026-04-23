import { Resend } from "resend";
import type { LeadSubmission, LogoSubmission, SalesIntelligence } from "./types";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}
const NOTIFY_EMAIL = "hello@bizaiph.com";
const WA = process.env.NEXT_PUBLIC_WA_NUMBER ?? "639602104478";

export async function sendLeadNotification(
  data: LeadSubmission
): Promise<void> {
  const waLink = `https://wa.me/${WA}`;
  await getResend().emails.send({
    from: "BizAI PH <noreply@bizaiph.com>",
    to: NOTIFY_EMAIL,
    subject: `🔥 New Lead — ${data.businessName} (${data.recommendedTier})`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0a0a;color:#fff;padding:32px;border-radius:12px;">
        <h2 style="color:#e8b84b;margin:0 0 24px;">🔥 New Lead</h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:8px 0;color:#888;width:140px;">Name</td><td style="padding:8px 0;font-weight:600;">${data.name}</td></tr>
          <tr><td style="padding:8px 0;color:#888;">WhatsApp</td><td style="padding:8px 0;"><a href="https://wa.me/${data.whatsapp}" style="color:#e8b84b;">${data.whatsapp}</a></td></tr>
          <tr><td style="padding:8px 0;color:#888;">Email</td><td style="padding:8px 0;">${data.email ?? "—"}</td></tr>
          <tr><td style="padding:8px 0;color:#888;">Business</td><td style="padding:8px 0;font-weight:600;">${data.businessName}</td></tr>
          <tr><td style="padding:8px 0;color:#888;">Pain Point</td><td style="padding:8px 0;">${data.pain}</td></tr>
          <tr><td style="padding:8px 0;color:#888;">Business Type</td><td style="padding:8px 0;">${data.businessType}</td></tr>
          <tr><td style="padding:8px 0;color:#888;">Recommended Tier</td><td style="padding:8px 0;color:#e8b84b;font-weight:700;">${data.recommendedTier}</td></tr>
        </table>
        <div style="margin-top:32px;">
          <a href="${waLink}" style="display:inline-block;padding:14px 28px;background:#25D366;color:#fff;border-radius:8px;text-decoration:none;font-weight:700;">Message on WhatsApp →</a>
        </div>
      </div>
    `,
  });
}

export async function sendLogoNotification(
  data: LogoSubmission,
  brief: string,
  salesIntel: SalesIntelligence
): Promise<void> {
  const waText = encodeURIComponent(
    `Hi BizAI PH! I just submitted my free logo request.\nBusiness: ${data.bizName}\nType: ${data.bizType} — ${data.location}\nStyle: ${data.logoFeel}\nColors: ${data.colorDirection}`
  );
  await getResend().emails.send({
    from: "BizAI PH <noreply@bizaiph.com>",
    to: NOTIFY_EMAIL,
    subject: `🎨 Free Logo Request — ${data.bizName} (${data.bizType})`,
    html: `
      <div style="font-family:sans-serif;max-width:640px;margin:0 auto;background:#0a0a0a;color:#fff;padding:32px;border-radius:12px;">
        <h2 style="color:#e8b84b;margin:0 0 8px;">🎨 Free Logo Request</h2>
        <p style="color:#888;margin:0 0 24px;">New submission from ${data.bizName}</p>

        <h3 style="color:#e8b84b;margin:0 0 12px;font-size:0.9rem;letter-spacing:0.1em;text-transform:uppercase;">Contact</h3>
        <table style="width:100%;border-collapse:collapse;margin-bottom:28px;">
          <tr><td style="padding:6px 0;color:#888;width:140px;">Name</td><td style="padding:6px 0;font-weight:600;">${data.ownerName}</td></tr>
          <tr><td style="padding:6px 0;color:#888;">WhatsApp</td><td style="padding:6px 0;"><a href="https://wa.me/${data.whatsapp}" style="color:#e8b84b;">${data.whatsapp}</a></td></tr>
          <tr><td style="padding:6px 0;color:#888;">Email</td><td style="padding:6px 0;">${data.email}</td></tr>
          <tr><td style="padding:6px 0;color:#888;">Business</td><td style="padding:6px 0;font-weight:600;">${data.bizName} · ${data.bizType}</td></tr>
          <tr><td style="padding:6px 0;color:#888;">Location</td><td style="padding:6px 0;">${data.location}</td></tr>
        </table>

        <div style="background:#0f1a0f;border:1px solid #1a3a1a;border-radius:10px;padding:20px;margin-bottom:28px;">
          <h3 style="color:#3dba6e;margin:0 0 12px;font-size:0.9rem;letter-spacing:0.1em;text-transform:uppercase;">🔒 Sales Intelligence</h3>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:6px 0;color:#888;width:160px;">Priority</td><td style="padding:6px 0;font-weight:600;">${salesIntel.priority}</td></tr>
            <tr><td style="padding:6px 0;color:#888;">Tier to Pitch</td><td style="padding:6px 0;color:#e8b84b;font-weight:700;">${salesIntel.tierToPitch} — ${salesIntel.price}</td></tr>
            <tr><td style="padding:6px 0;color:#888;">Pitch Angle</td><td style="padding:6px 0;">${salesIntel.pitchAngle}</td></tr>
            <tr><td style="padding:6px 0;color:#888;">Approach</td><td style="padding:6px 0;">${salesIntel.approach}</td></tr>
          </table>
          <div style="margin-top:16px;padding:12px;background:#0a0a0a;border-radius:8px;">
            <p style="color:#3dba6e;font-size:0.8rem;font-weight:700;margin:0 0 4px;">RECOMMENDED ACTION</p>
            <p style="color:#fff;margin:0;">${salesIntel.recommendedOffer}</p>
            <p style="color:#e8b84b;font-size:0.85rem;font-style:italic;margin:8px 0 0;">"${salesIntel.pitchScript}"</p>
          </div>
        </div>

        <h3 style="color:#e8b84b;margin:0 0 12px;font-size:0.9rem;letter-spacing:0.1em;text-transform:uppercase;">Logo Brief</h3>
        <pre style="background:#111;border:1px solid rgba(255,255,255,0.08);border-radius:8px;padding:16px;font-size:0.82rem;color:#c8c4bc;white-space:pre-wrap;margin-bottom:28px;">${brief}</pre>

        <a href="https://wa.me/${WA}?text=${waText}" style="display:inline-block;padding:14px 28px;background:#25D366;color:#fff;border-radius:8px;text-decoration:none;font-weight:700;">Message on WhatsApp →</a>
      </div>
    `,
  });
}

export async function sendLogoConfirmation(
  name: string,
  email: string,
  bizName: string
): Promise<void> {
  await getResend().emails.send({
    from: "BizAI PH <noreply@bizaiph.com>",
    to: email,
    subject: "🎨 Your BizAI PH logo request is confirmed!",
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;background:#0a0a0a;color:#fff;padding:32px;border-radius:12px;">
        <h2 style="color:#e8b84b;margin:0 0 16px;">Hi ${name}! 🎨</h2>
        <p style="color:#c8c4bc;line-height:1.7;margin:0 0 16px;">Your free logo request for <strong style="color:#fff;">${bizName}</strong> is confirmed. We're designing it now and will send it to your WhatsApp within 24 hours.</p>
        <p style="color:#c8c4bc;line-height:1.7;margin:0 0 24px;">Your logo will be delivered as PNG + SVG — ready to use everywhere.</p>
        <p style="color:#888;font-size:0.85rem;margin:0;">— BizAI PH Team<br>hello@bizaiph.com</p>
      </div>
    `,
  });
}
