import React from "react";
import DigitalMarImg from "../../../../../assets/DigitalMarImg.png"; // path/name unchanged

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
        {/* Outer wrapper that holds the animated gradient border */}
        <div className="relative w-full max-w-sm h-64 rounded-xl group">

          {/* Animated gradient border (acts like a 2px border) */}
          <div
            aria-hidden="true"
            className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500
                       opacity-0 transform scale-95 transition-all duration-600 ease-out
                       group-hover:opacity-100 group-hover:scale-100 blur-[6px] pointer-events-none"
          />

          {/* Solid backing so gradient border reads as border and doesn't bleed through */}
          <div className="absolute inset-1 rounded-lg bg-white/95 pointer-events-none"></div>

          {/* Image card (inner) */}
          <div
            className="relative z-10 h-full rounded-lg overflow-hidden
                       shadow-md transition-all duration-500 ease-out
                       group-hover:shadow-2xl group-hover:-translate-y-1"
          >
            <img
              src={DigitalMarImg}
              alt="Digital marketing illustration"
              loading="lazy"
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out
                         group-hover:scale-105"
            />
          </div>

          {/* Subtle inner border glow that animates on hover (keeps things soft) */}
          <div
            aria-hidden="true"
            className="absolute inset-2 rounded-lg border border-white/40 opacity-0 transition-opacity duration-500
                       group-hover:opacity-100 pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
