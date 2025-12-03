import React from "react";

const Hero = () => {
  return (
    <section className="relative py-1 pb-2 overflow-hidden bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* 1. Text Content */}
        <div className="order-2 lg:order-1 z-10">
          <h1 className="text-4xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            Digital Marketing <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              That Drives Results
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-lg leading-relaxed">
            Grow your audience, traffic, and sales with data-driven online marketing strategies designed for modern brands.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button className="bg-blue-600 text-white font-semibold py-3 px-7 rounded-xl shadow-lg hover:bg-blue-700 hover:shadow-blue-500/30 transition-all duration-300">
              Get Quote Now
            </button>
            <button className="bg-white text-gray-700 border border-gray-200 font-semibold py-3 px-7 rounded-xl hover:bg-gray-50 transition-all duration-300">
              View Portfolio
            </button>
          </div>
        </div>

        {/* 2. Right Side */}
        <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">

          {/* Animated Background Blobs */}
          <div className="absolute top-0 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-0 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

          {/* Glass Card */}
          <div className="relative z-10 bg-white/60 backdrop-blur-xl border border-white/40 shadow-2xl rounded-2xl p-6 w-full max-w-md transform transition-all hover:scale-[1.02] duration-500">

            {/* Card Header */}
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-gray-500 text-sm font-medium">Total Revenue</h3>
                <p className="text-3xl font-bold text-gray-900">$48,290</p>
              </div>
              <div className="bg-green-100 text-green-700 px-2 py-1 rounded-lg text-sm font-bold flex items-center gap-1">
                <span>+12.5%</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                </svg>
              </div>
            </div>

            {/* Mini Chart */}
            <div className="h-40 w-full mb-4">
              <svg viewBox="0 0 400 150" className="w-full h-full">
                <defs>
                  <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#4F46E5" stopOpacity="0" />
                  </linearGradient>
                </defs>

                <path
                  fill="url(#chartGradient)"
                  stroke="none"
                  d="M0,150 L0,100 C50,120 100,40 150,60 C200,80 250,20 300,40 C350,60 400,10 400,10 V150 Z"
                />

                <path
                  fill="none"
                  stroke="#4F46E5"
                  strokeWidth="4"
                  strokeLinecap="round"
                  d="M0,100 C50,120 100,40 150,60 C200,80 250,20 300,40 C350,60 400,10"
                />

                <circle cx="300" cy="40" r="6" fill="#fff" stroke="#4F46E5" strokeWidth="3" />

                <g transform="translate(260, 0)">
                  <rect x="0" y="0" width="80" height="30" rx="8" fill="#1F2937" />
                  <text x="40" y="20" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">
                    2.4k Visits
                  </text>
                </g>
              </svg>
            </div>

            {/* Bottom Stats */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/50 rounded-xl p-3 border border-white/50">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-xs text-gray-500">New Users</span>
                </div>
                <p className="font-semibold text-gray-800">1,240</p>
              </div>

              <div className="bg-white/50 rounded-xl p-3 border border-white/50">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-xs text-gray-500">Engagement</span>
                </div>
                <p className="font-semibold text-gray-800">88%</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
