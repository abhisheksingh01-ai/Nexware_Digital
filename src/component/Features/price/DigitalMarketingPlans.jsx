import Packages from "./Packages";

export const digitalMarketingPlans = [
  {
    plan: "Basic Plan",
    amount: "4,999",
    currency: "₹",
    description: "Ideal for small and emerging businesses.",
    features: [
      "Basic campaign setup",
      "Google Ads (Search/Display)",
      "Monthly performance reporting",
      "Standard support",
    ],
    isHighlighted: false,
  },
  {
    plan: "Standard Plan",
    amount: "7,999",
    currency: "₹",
    description: "A balanced plan for growing brands.",
    features: [
      "Advanced analytics",
      "Google + Meta Ads",
      "Bi-weekly performance review",
      "Priority support",
    ],
    isHighlighted: true,
  },
  {
    plan: "Premium E-Commerce",
    amount: "11,999",
    currency: "₹",
    description: "Full-scale marketing suite for e-commerce brands.",
    features: [
      "Custom marketing strategy",
      "Dedicated campaign manager",
      "Full-funnel ad campaigns",
      "24×7 premium support",
    ],
    isHighlighted: false,
  },
];

export default function DigitalMarketingPlans() {
  return (
    <div>
      <Packages
        plans={digitalMarketingPlans}
        title="Digital Marketing Plans"
        subtitle="Premium features. Simple pricing. Designed for business growth."
      />
    </div>
  );
}
