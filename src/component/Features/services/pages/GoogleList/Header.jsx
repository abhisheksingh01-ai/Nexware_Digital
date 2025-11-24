import React from 'react';

const Header = () => {
  return (
    <section className="bg-white pt-12 pb-16 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Google Listing
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-md">
            Optimize your Google My Business profile to improve visibility online & attract more customers.
          </p>
          <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-150">
            Get Quote Now
          </button>
        </div>

        {/* Image/Illustration (Mockup) */}
        <div className="flex justify-center md:justify-end">
          {/*  */}
          <div className="w-full max-w-md h-64 bg-blue-100 rounded-xl flex items-center justify-center border-4 border-blue-500 text-blue-500 font-bold text-lg">
                      </div>
        </div>
      </div>
    </section>
  );
};

export default Header;