// PricingPlans.jsx
import React from "react";

function PlanCard({ title, price, desc, highlight }) {
  return (
    <div className={`border rounded-lg p-4 text-center ${highlight ? "border-blue-400 shadow-sm" : "border-gray-200"}`}>
      <h4 className="font-semibold mb-2">{title}</h4>
      <div className="text-2xl font-bold mb-1">₹ {price}</div>
      <div className="text-sm text-gray-500">{desc}</div>
    </div>
  );
}

export default function PricingPlans() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-6">
      <h3 className="text-lg font-medium mb-4">Pricing Plans</h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <PlanCard title="Starter Plan" price="4,999" desc="For basic websites" />
        <PlanCard title="Standard Plan" price="9,999" desc="For advanced websites" highlight />
        <PlanCard title="Premium Plan" price="14,999+" desc="For custom, feature rich webs" />
      </div>
    </section>
  );
}
