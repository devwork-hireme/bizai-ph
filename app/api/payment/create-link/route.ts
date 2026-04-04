import { NextRequest, NextResponse } from "next/server";

const plans = {
  starter: {
    name: "BizAI PH Starter Plan",
    setupAmount: 299900,
    monthlyAmount: 75000,
    regularPrice: 150000,
    description:
      "Launch price: ₱750/month (50% off ₱1,500). Monitoring, maintenance, and support.",
  },
  growth: {
    name: "BizAI PH Growth Plan",
    setupAmount: 499900,
    monthlyAmount: 150000,
    regularPrice: 299900,
    description:
      "Launch price: ₱1,500/month (50% off ₱2,999). Growth and conversion tools.",
  },
  business: {
    name: "BizAI PH Business Plan",
    setupAmount: 999900,
    monthlyAmount: 250000,
    regularPrice: 499900,
    description:
      "Launch price: ₱2,500/month (50% off ₱4,999). Full automation suite.",
  },
};

export async function POST(req: NextRequest) {
  try {
    const { plan, setupFee } = await req.json();

    const selectedPlan = plans[plan as keyof typeof plans];
    if (!selectedPlan) {
      return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
    }

    const amount = setupFee
      ? selectedPlan.setupAmount
      : selectedPlan.monthlyAmount;

    const description = setupFee
      ? `${selectedPlan.name} — One-Time Setup Fee`
      : selectedPlan.description;

    const secretKey = process.env.PAYMONGO_SECRET_KEY;
    if (!secretKey) {
      return NextResponse.json(
        { error: "Payment not configured" },
        { status: 503 }
      );
    }

    const response = await fetch("https://api.paymongo.com/v1/links", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(secretKey + ":").toString("base64")}`,
      },
      body: JSON.stringify({
        data: {
          attributes: {
            amount,
            description,
            remarks: `BizAI PH ${plan} plan — bizaiph.com`,
          },
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.errors?.[0]?.detail || "Payment link creation failed"
      );
    }

    return NextResponse.json({
      success: true,
      checkoutUrl: data.data.attributes.checkout_url,
      linkId: data.data.id,
    });
  } catch (error) {
    console.error("PayMongo error:", error);
    return NextResponse.json(
      { error: "Failed to create payment link" },
      { status: 500 }
    );
  }
}
