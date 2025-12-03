import Packages from "./Packages";

const googleMarketingPlans = [
  {
    plan: "Basic Plan",
    amount: "4,999",
    currency: "₹",
    description: "Perfect for small businesses.",
    features: [
      "Basic campaign setup",
      "Google Ads only",
      "Monthly reporting",
      "Standard support",
    ],
    isHighlighted: false,
  },
  {
    plan: "Standard Plan",
    amount: "7,999",
    currency: "₹",
    description: "Balanced solution for growing companies.",
    features: [
      "Advanced analytics",
      "Google + Meta Ads",
      "Bi-weekly review",
      "Priority support",
    ],
    isHighlighted: true,
  },
  {
    plan: "Periminum E-Commerce",
    amount: "13,999",
    currency: "₹",
    description: "Dedicated assistance for scaling brands.",
    features: [
      "Custom strategy",
      "Dedicated manager",
      "Full-scale campaigns",
      "24/7 support",
    ],
    isHighlighted: false,
  },
];



export default function GoogleAdsPage() {
  return (
    <Packages
      plans={googleMarketingPlans}
      title="Everything You Need, At the Right Price"
      subtitle="Premium features. Simple pricing. Built for businesses."
    />
  );
}

