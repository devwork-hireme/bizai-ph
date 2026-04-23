import { NextRequest, NextResponse } from "next/server";
import { saveLead } from "@/lib/airtable";
import { sendLeadNotification } from "@/lib/resend";
import type { LeadSubmission } from "@/lib/types";

export async function POST(req: NextRequest) {
  const body = (await req.json()) as LeadSubmission;

  const results = await Promise.allSettled([
    saveLead(body),
    sendLeadNotification(body),
  ]);

  const errors = results
    .filter((r) => r.status === "rejected")
    .map((r) => (r as PromiseRejectedResult).reason?.message ?? "unknown");

  return NextResponse.json(
    { ok: true, errors: errors.length ? errors : undefined },
    { status: 200 }
  );
}
