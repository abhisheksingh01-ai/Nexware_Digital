// PricingPage.jsx
import React from "react";
import PricingHero from "./PricingHero";
import FeaturesServices from "./FeaturesServices";
import BottomLeft from "./BottomLeft";
import DigitalMarketingPlans from "../DigitalMarketingPlans";
import CodingWebsitePlans from "../CodingWebsitePlans";
import WordpressPlans from "../WordpressPlans";


export default function PricingPage() {
  return (
    <main className="bg-white min-h-screen text-gray-900">
      <PricingHero />
      <DigitalMarketingPlans/>
      <CodingWebsitePlans/>
      <WordpressPlans/>
      <FeaturesServices />
      <BottomLeft />
    </main>
  );
}
