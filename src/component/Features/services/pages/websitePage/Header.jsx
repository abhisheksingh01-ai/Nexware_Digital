import React from "react";
import WebDevImg from '../../../../../assets/WebDevImg.png';

export default function Header({
  imageUrl = WebDevImg,
  onGetStarted,
}) {
  return (
    <header className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-20">

          {/* LEFT SECTION */}
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Website <br />
              <span className="text-indigo-600">Development</span>
            </h1>

            <p className="text-gray-600 text-base max-w-md mx-auto lg:mx-0">
              Grow your business with a fast, modern and mobile-friendly website
              designed to convert visitors into customers.
            </p>

            <div className="pt-4 flex justify-center lg:justify-start">
              <button
                onClick={onGetStarted}
                className="px-8 py-3 rounded-xl font-semibold bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Get Quote Now
              </button>
            </div>
          </div>

          {/* RIGHT SECTION (Zoom + Soft Rotate Effect) */}
          <div className="flex justify-center lg:justify-end relative">
            <div className="relative w-72 sm:w-80 lg:w-[430px]">

              <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-gray-200">
                <img
                  src={imageUrl}
                  alt="Website Design"
                  className="
                    w-full 
                    h-auto 
                    object-cover 
                    rounded-3xl
                    transition-all 
                    duration-700 
                    hover:scale-110 
                    hover:rotate-[1.5deg]
                  "
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
