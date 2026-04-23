import { NextRequest, NextResponse } from "next/server";
import { saveLogo } from "@/lib/airtable";
import {
  sendLogoNotification,
  sendLogoConfirmation,
} from "@/lib/resend";
import { getSalesIntelligence } from "@/lib/recommendations";
import type { LogoSubmission } from "@/lib/types";

function buildBrief(data: LogoSubmission): string {
  return [
    `Business: ${data.bizName} (${data.bizType})`,
    `Location: ${data.location}`,
    `Age: ${data.businessAge}`,
    `Has Website: ${data.hasWebsite}`,
    `Color Direction: ${data.colorDirection}`,
    `Logo Feel: ${data.logoFeel}`,
    `Logo Type: ${data.logoType}`,
    `Description: ${data.businessDescription}`,
    `Target Customers: ${data.targetCustomers}`,
    `Tagline: ${data.taglineChoice === "Write my own" ? data.taglineText : data.taglineChoice}`,
    data.additionalNotes ? `Notes: ${data.additionalNotes}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}

export async function POST(req: NextRequest) {
  const body = (await req.json()) as LogoSubmission;

  const brief = buildBrief(body);
  const salesIntel = getSalesIntelligence(
    body.hasWebsite,
    body.biggestChallenge,
    body.businessAge
  );

  await Promise.allSettled([
    saveLogo(body, brief, salesIntel.tierToPitch, salesIntel.pitchScript),
    sendLogoNotification(body, brief, salesIntel),
    body.email
      ? sendLogoConfirmation(body.ownerName, body.email, body.bizName)
      : Promise.resolve(),
  ]);

  return NextResponse.json({ brief, salesIntel }, { status: 200 });
}
