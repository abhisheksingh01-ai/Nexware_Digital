// PricingPage.jsx
import React from "react";
import PricingHero from "./PricingHero";
import FeaturesServices from "./FeaturesServices";
import BottomLeft from "./BottomLeft";
import GoogleAdsPage from "../Price";

export default function PricingPage() {
  return (
    <main className="bg-white min-h-screen text-gray-900">
      <PricingHero />
      <GoogleAdsPage/>
      <FeaturesServices />
      <BottomLeft />
    </main>
  );
}
