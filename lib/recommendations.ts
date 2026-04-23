import type { Recommendation } from "./types";

export function getRecommendation(pain: string): Recommendation {
  if (pain.includes("Google") || pain.includes("find")) {
    return {
      tier: "Get Found",
      price: "₱3,999 one-time",
      reason:
        "You need to get on Google first. Website + Google Business Profile + Maps. Live in 24 hours.",
    };
  }
  if (pain.includes("messages") || pain.includes("Leads disappear")) {
    return {
      tier: "Get Customers",
      price: "₱7,999 + ₱2,999/mo",
      reason:
        "AI that replies in seconds — even at 2AM. No inquiry ever goes unanswered again.",
    };
  }
  return {
    tier: "Get Sales",
    price: "₱14,999 + ₱7,999/mo",
    reason:
      "We remove you as the bottleneck entirely. The AI sells. You just deliver.",
  };
}

export function getSalesIntelligence(
  hasWebsite: string,
  biggestChallenge: string,
  businessAge: string
) {
  let priority = "";
  let tierToPitch = "";
  let price = "";
  let pitchScript = "";
  let pitchAngle = "";

  if (hasWebsite === "No Website") {
    priority = "🔴 HIGH PRIORITY";
    tierToPitch = "Get Found";
    price = "₱3,999 one-time";
    pitchScript =
      "Your logo is ready. Now let's get your business found on Google. Live in 24 hours.";
  } else if (hasWebsite === "Facebook Only") {
    priority = "🟡 MEDIUM PRIORITY";
    tierToPitch = "Get Found";
    price = "₱3,999 one-time";
    pitchScript =
      "You have a logo and Facebook. Next step: real website + Google presence.";
  } else {
    priority = "🟢 WARM LEAD";
    tierToPitch = "Get Customers";
    price = "₱7,999 + ₱2,999/mo";
    pitchScript =
      "Since you're online, the next unlock is automating your inquiries.";
  }

  if (biggestChallenge.includes("Customers")) {
    pitchAngle = "Get Found — discovery angle: customers can't find you";
  } else if (biggestChallenge.includes("Online")) {
    pitchAngle = "Get Found — visibility angle: you're not showing up on Google";
  } else if (biggestChallenge.includes("Replies")) {
    pitchAngle = "Get Customers — bot angle: AI replies in seconds 24/7";
  } else {
    pitchAngle = "Get Customers — automation angle: free up your time completely";
  }

  let approach = "";
  if (businessAge === "Just Starting") {
    approach = "Supportive: Let's build this right from the start.";
  } else if (businessAge === "1–3 Years") {
    approach = "Growth: You've proven it. Now scale it.";
  } else {
    approach =
      "ROI: Every month without this system is revenue left behind.";
  }

  const recommendedOffer = `Pitch ${tierToPitch} — ${price}`;

  return {
    priority,
    tierToPitch,
    price,
    pitchScript,
    pitchAngle,
    approach,
    recommendedOffer,
  };
}
