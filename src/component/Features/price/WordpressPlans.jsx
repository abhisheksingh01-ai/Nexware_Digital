import Packages from "./Packages";

export const wordpressPlans = [
  {
    plan: "Basic WP Website",
    amount: "8,999",
    currency: "₹",
    description: "Perfect for simple business presentation websites.",
    features: [
      "5-page setup",
      "Premium theme",
      "Basic SEO setup",
      "Security plugins installed",
    ],
    isHighlighted: false,
  },
  {
    plan: "Advanced WP Website",
    amount: "15,999",
    currency: "₹",
    description: "Best for service companies that need custom sections.",
    features: [
      "Up to 10 pages",
      "Custom UI sections",
      "Speed optimization",
      "Analytics + tracking setup",
    ],
    isHighlighted: true,
  },
  {
    plan: "WP E-Commerce Store",
    amount: "29,999",
    currency: "₹",
    description: "Full-featured WooCommerce store for online selling.",
    features: [
      "WooCommerce store setup",
      "Payment gateway configuration",
      "Product management dashboard",
      "Coupon + cart features",
    ],
    isHighlighted: false,
  },
];

export default function WordpressPlans() {
  return (
    <div>
      <Packages
        plans={wordpressPlans}
        title="WordPress Website Plans"
        subtitle="Fast delivery. Professional designs. Optimized for performance."
      />
    </div>
  );
}
