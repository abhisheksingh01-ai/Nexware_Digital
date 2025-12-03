import Packages from "./Packages";

export const codingWebsitePlans = [
  {
    plan: "Starter Website",
    amount: "14,999",
    currency: "₹",
    description: "Suitable for individual portfolios or small profiles.",
    features: [
      "3–5 custom pages",
      "Fully responsive UI",
      "Basic SEO setup",
      "Contact form + WhatsApp integration",
    ],
    isHighlighted: false,
  },
  {
    plan: "Business Website",
    amount: "24,999",
    currency: "₹",
    description: "Built for professional service-based companies.",
    features: [
      "6–10 custom pages",
      "Advanced UI/UX design",
      "Lead forms + CRM/API integrations",
      "Speed optimization",
    ],
    isHighlighted: true,
  },
  {
    plan: "Premium Web App",
    amount: "49,999",
    currency: "₹",
    description: "High-end scalable web application for startups.",
    features: [
      "Custom dashboard",
      "Admin panel",
      "API integrations",
      "Advanced backend architecture",
    ],
    isHighlighted: false,
  },
];

export default function CodingWebsitePlans() {
  return (
    <div>
      <Packages
        plans={codingWebsitePlans}
        title="Custom Website Development"
        subtitle="Modern designs. High-performance UI. Scalable architecture."
      />
    </div>
  );
}
