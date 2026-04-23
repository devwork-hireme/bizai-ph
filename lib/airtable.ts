import type { LeadSubmission, LogoSubmission } from "./types";

const BASE = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}`;

async function post(
  table: string,
  fields: Record<string, string | undefined>
): Promise<void> {
  const res = await fetch(`${BASE}/${encodeURIComponent(table)}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fields }),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Airtable error (${table}): ${err}`);
  }
}

export async function saveLead(data: LeadSubmission): Promise<void> {
  await post(process.env.AIRTABLE_LEADS_TABLE ?? "Leads", {
    Name: data.name,
    WhatsApp: data.whatsapp,
    Email: data.email,
    "Business Name": data.businessName,
    "Pain Point": data.pain,
    "Business Type": data.businessType,
    "Recommended Tier": data.recommendedTier,
    Source: data.source,
    Status: "New",
    "Submitted At": new Date().toISOString(),
  });
}

export async function saveLogo(
  data: LogoSubmission,
  brief: string,
  recommendedTier: string,
  pitchScript: string
): Promise<void> {
  await post(process.env.AIRTABLE_LOGO_TABLE ?? "Free Logo Submissions", {
    "Business Name": data.bizName,
    "Business Type": data.bizType,
    Location: data.location,
    "Business Age": data.businessAge,
    "Has Website": data.hasWebsite,
    "Color Direction": data.colorDirection,
    "Logo Feel": data.logoFeel,
    "Logo Type": data.logoType,
    "Business Description": data.businessDescription,
    "Target Customers": data.targetCustomers,
    "Tagline Choice": data.taglineChoice,
    "Tagline Text": data.taglineText,
    "Additional Notes": data.additionalNotes,
    "Owner Name": data.ownerName,
    WhatsApp: data.whatsapp,
    Email: data.email,
    "Referral Source": data.referralSource,
    "Biggest Challenge": data.biggestChallenge,
    "Logo Brief": brief,
    "Recommended Tier": recommendedTier,
    "Pitch Script": pitchScript,
    Status: "New",
    "Submitted At": new Date().toISOString(),
  });
}
