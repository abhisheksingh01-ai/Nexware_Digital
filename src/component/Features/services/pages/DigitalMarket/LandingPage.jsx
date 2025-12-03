import React from 'react';
import Hero from './Hero';
import WhatWeOffer from './WhatWeOffer';
import WhyChooseUs from './WhyChooseUs';
import DigitalMarketing from '../../../price/DigitalMarketingPlans';
import Portfolio from './Portfolio';
import FAQ from './FAQ';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans">

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-0 sm:px-0 lg:px-0 py-0">
        <Hero />
      </main>

      {/* What We Offer + Why Choose Us */}
      <div className="max-w-7xl mx-auto px-0 sm:px-0 lg:px-0 py-0 space-y-0">
        <WhatWeOffer />
        <WhyChooseUs />
      </div>

      {/* Pricing Section */}
      <DigitalMarketing />

      {/* Portfolio + FAQ */}
      <div className="max-w-7xl mx-auto px-0 sm:px-0 lg:px-0 py-0 space-y-0">
        <Portfolio />
        <FAQ />
      </div>

    </div>
  );
};

export default LandingPage;
