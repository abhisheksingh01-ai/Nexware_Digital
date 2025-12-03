import Packages from "./Packages";

// Google Listing Plans Data
export const googleListingPlans = [
  {
    plan: "Basic Local SEO",
    amount: "1,499",
    currency: "₹",
    description: "Improve visibility and optimize your Google Business Profile.",
    features: [
      "Business profile optimization",
      "Category & service setup",
      "Photo & media upload",
      "Basic keyword setup",
    ],
    isHighlighted: false,
  },
  {
    plan: "Advanced Google Listing",
    amount: "2,999",
    currency: "₹",
    description: "Boost ranking and attract more local customers.",
    features: [
      "Full profile optimization",
      "10 posts/month",
      "Keyword-rich descriptions",
      "Basic review strategy",
    ],
    isHighlighted: true,
  },
  {
    plan: "Premium Local Growth",
    amount: "5,999",
    currency: "₹",
    description: "Complete Google Maps ranking strategy for maximum visibility.",
    features: [
      "Advanced SEO optimization",
      "20 posts/month",
      "Review management strategy",
      "Monthly performance report",
    ],
    isHighlighted: false,
  },
];

export default function GoogleListingPrice() {
  return (
    <div>
      <Packages
        plans={googleListingPlans}
        title="Google Listing Packages"
        subtitle="Rank higher on Google Maps and attract more local customers."
      />
    </div>
  );
}
