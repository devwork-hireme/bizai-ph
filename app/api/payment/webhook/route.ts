import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const event = body.data;

    if (event.attributes.type === "link.payment.paid") {
      const paymentData = event.attributes.data;

      console.log("Payment received:", {
        amount: paymentData.attributes.amount,
        description: paymentData.attributes.description,
        status: paymentData.attributes.status,
      });
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json({ error: "Webhook failed" }, { status: 500 });
  }
}
