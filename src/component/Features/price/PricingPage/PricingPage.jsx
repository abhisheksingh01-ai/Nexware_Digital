// PricingPage.jsx
import React from "react";
import PricingHero from "./PricingHero";
import PricingPlans from "./PricingPlans";
import FeaturesServices from "./FeaturesServices";
import BottomLeft from "./BottomLeft";

export default function PricingPage() {
  return (
    <main className="bg-white min-h-screen text-gray-900">
      <PricingHero />
      <PricingPlans />
      <FeaturesServices />
      <BottomLeft />
    </main>
  );
}
