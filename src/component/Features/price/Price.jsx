import Packages from "./Packages";

const googleMarketingPlans = [
  {
    plan: "Starter Plan",
    amount: "3,999",
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
    plan: "Growth Plan",
    amount: "4,999",
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
    plan: "Enterprise Plan",
    amount: "9,999",
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
  return <Packages plans={googleMarketingPlans} />;
}

