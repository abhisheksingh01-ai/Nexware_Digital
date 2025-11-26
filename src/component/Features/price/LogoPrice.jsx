import Packages from "./Packages";

const logoDesignPlans = [
  {
    plan: "Basic Logo",
    amount: "1,999",
    currency: "₹",
    description: "Best for startups needing a simple identity.",
    features: [
      "2 logo concepts",
      "1 revision",
      "PNG + JPG files",
      "Delivery in 2 days",
    ],
    isHighlighted: false,
  },
  {
    plan: "Professional Logo",
    amount: "4,999",
    currency: "₹",
    description: "Perfect for growing brands with quality needs.",
    features: [
      "4 logo concepts",
      "Unlimited revisions",
      "PNG + JPG + PDF",
      "Brand color palette",
      "Priority delivery",
    ],
    isHighlighted: true,
  },
  {
    plan: "Premium Brand Kit",
    amount: "7,499",
    currency: "₹",
    description: "Full branding solution for established companies.",
    features: [
      "6 premium logo concepts",
      "Unlimited revisions",
      "Source files (AI, EPS, SVG)",
      "Business card design",
      "Social media kit",
      "Brand guideline PDF",
    ],
    isHighlighted: false,
  },
];

export default function LogoPrice() {
  return <Packages plans={logoDesignPlans} />;
}