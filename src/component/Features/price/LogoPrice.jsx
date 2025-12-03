import Packages from "./Packages";

// Logo Design Plans Data
export const logoPlans = [
  {
    plan: "Basic Logo",
    amount: "1,499",
    currency: "₹",
    description: "Simple and clean logo for startups or personal projects.",
    features: [
      "1 initial concept",
      "2 revisions",
      "High-resolution PNG & JPG",
      "Transparent background",
    ],
    isHighlighted: false,
  },
  {
    plan: "Professional Logo",
    amount: "2,999",
    currency: "₹",
    description: "Perfect for businesses looking for a professional identity.",
    features: [
      "3 initial concepts",
      "5 revisions",
      "Vector file (AI, EPS, SVG)",
      "Color + black/white versions",
    ],
    isHighlighted: true,
  },
  {
    plan: "Premium Brand Logo",
    amount: "5,999",
    currency: "₹",
    description: "Complete brand logo package with multiple variations.",
    features: [
      "5 initial concepts",
      "Unlimited revisions",
      "Full brand guide",
      "Social media & favicon ready",
    ],
    isHighlighted: false,
  },
];

export default function LogoPrice() {
  return (
    <div>
      <Packages
        plans={logoPlans}
        title="Logo Design Packages"
        subtitle="Creative, professional, and scalable logos for your brand."
      />
    </div>
  );
}
