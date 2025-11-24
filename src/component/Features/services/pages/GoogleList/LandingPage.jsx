import React from 'react';
import Header from './Header';
import WhatWeOffer from './WhatWeOffer';
import WhyChooseUs from './WhyChooseUs';
// import Packages from './Packages';
import DevelopmentPlans from "../../../price/Price";



const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <main>
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
          <WhatWeOffer />
          <WhyChooseUs />
        </div>
        {/* <Packages /> */}
        <DevelopmentPlans/>
      </main>
    </div>
  );
};

export default LandingPage;