import React from 'react';
import Header from './Header';
import WhatWeOffer from './WhatWeOffer';
import WhyChooseUs from './WhyChooseUs';
import GoogleListingPrice from '../../../price/GoogleListingPrice';


const LandingPage = () => {
  return (
    <div className="bg-white font-sans">
      <main>
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <WhatWeOffer />
          <WhyChooseUs />
        </div>
        <GoogleListingPrice />
      </main>
    </div>
  );
};

export default LandingPage;
