import React from 'react';

const Hero = () => {
  return (
    <section className="pt-16 pb-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Text Content */}
      <div className="order-2 md:order-1">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Digital Marketing
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-md">
          Grow your audience, traffic, and sales with online marketing
        </p>
        <button className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition duration-150">
          Get Quote Now
        </button>
      </div>

      {/* Image/Illustration */}
      <div className="order-1 md:order-2 flex justify-center md:justify-end">
        {/*  */}
        <div className="w-full max-w-sm h-64 bg-blue-50 rounded-xl flex items-center justify-center border border-blue-200">
             <svg className="w-32 h-32 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;