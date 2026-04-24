export interface LeadSubmission {
  name: string;
  whatsapp: string;
  email?: string;
  businessName: string;
  pain: string;
  businessType: string;
  recommendedTier: string;
  source: string;
}

export interface LogoSubmission {
  bizName: string;
  bizType: string;
  location: string;
  businessAge: string;
  hasWebsite: string;
  colorDirection: string;
  logoFeel: string;
  logoType: string;
  businessDescription: string;
  targetCustomers: string;
  taglineChoice: string;
  taglineText: string;
  additionalNotes: string;
  ownerName: string;
  whatsapp: string;
  email: string;
  referralSource: string;
  biggestChallenge: string;
}

export interface SalesIntelligence {
  priority: string;
  tierToPitch: string;
  price: string;
  pitchScript: string;
  pitchAngle: string;
  approach: string;
  recommendedOffer: string;
}

export interface LogoSubmissionResult {
  brief: string;
  salesIntel: SalesIntelligence;
}

export interface Recommendation {
  tier: string;
  price: string;
  reason: string;
}

export interface SystemCardProps {
  number: string;
  badge: string;
  badgeVariant: "start" | "unlock" | "complete";
  problem: string;
  headline: string;
  description: string;
  features: string[];
  result: string;
  resultStat: string;
  ctaText: string;
  ctaTier: string;
  isComingSoon?: boolean;
}
