import React from 'react';
import Hero from './Hero';
import WhatWeOffer from './WhatWeOffer';
import WhyChooseUs from './WhyChooseUs';
import GoogleAdsPage from "../../../price/Price";
import Portfolio from './Portfolio';
import FAQ from './FAQ';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
      </main>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        <WhatWeOffer />
        <WhyChooseUs />
      </div>

      {/* Pricing Section often spans full width or has unique background */}
      {/* <Packages /> */}
      <GoogleAdsPage/>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        <Portfolio />
        <FAQ />
      </div>

      {/* You would add a Footer component here */}
    </div>
  );
};

export default LandingPage;