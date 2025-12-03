import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  Star,
  MapPin,
  Phone,
  Globe,
} from "lucide-react";

const Header = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-start text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Rank #1 on <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Google Maps
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-base text-gray-600 max-w-lg mt-1">
              Optimize your profile, manage reviews, and attract local customers
              effortlessly.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-4">
              <button className="flex items-center justify-center bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-200">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <button className="flex items-center justify-center bg-white text-gray-700 border border-gray-200 font-semibold py-3 px-6 rounded-lg hover:bg-gray-50 transition-all duration-200">
                Live Demo
              </button>
            </div>

            <div className="flex items-center gap-4 text-sm font-medium text-gray-500 mt-4">
              <div className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                <span>No credit card req.</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                <span>14-day free trial</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500">
              {/* Fake Browser Header */}
              <div className="bg-gray-50 border-b border-gray-100 px-4 py-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                <div className="bg-white border border-gray-200 rounded text-[10px] text-gray-400 px-2 py-0.5 ml-4 flex-1 truncate">
                  google.com/maps/your-business
                </div>
              </div>

              {/* Google Listing Mockup */}
              <div className="p-5">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Your Business Name
                    </h3>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-orange-400 font-bold text-sm">
                        5.0
                      </span>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star
                            key={i}
                            className="w-3 h-3 text-orange-400 fill-current"
                          />
                        ))}
                      </div>
                      <span className="text-gray-400 text-xs ml-1">
                        (128 reviews)
                      </span>
                    </div>
                    <p className="text-gray-500 text-xs mt-1">
                      Software Company • Open 24 Hours
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                    B
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-3 gap-2 mt-2">
                  <div className="border border-blue-100 rounded-lg p-2 flex flex-col items-center justify-center cursor-pointer hover:bg-blue-50">
                    <Globe className="w-5 h-5 text-blue-600 mb-1" />
                    <span className="text-[10px] text-blue-600 font-medium">
                      Website
                    </span>
                  </div>
                  <div className="border border-blue-100 rounded-lg p-2 flex flex-col items-center justify-center cursor-pointer hover:bg-blue-50">
                    <Phone className="w-5 h-5 text-blue-600 mb-1" />
                    <span className="text-[10px] text-blue-600 font-medium">
                      Call
                    </span>
                  </div>
                  <div className="border border-blue-100 rounded-lg p-2 flex flex-col items-center justify-center cursor-pointer hover:bg-blue-50">
                    <MapPin className="w-5 h-5 text-blue-600 mb-1" />
                    <span className="text-[10px] text-blue-600 font-medium">
                      Directions
                    </span>
                  </div>
                </div>

                {/* Fake Map */}
                <div className="w-full h-24 bg-gray-100 rounded-lg relative overflow-hidden flex items-center justify-center border border-gray-200 mt-2">
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "radial-gradient(#4b5563 1px, transparent 1px)",
                      backgroundSize: "10px 10px",
                    }}
                  ></div>
                  <div className="bg-red-500 text-white p-1 rounded shadow-lg z-10 animate-bounce">
                    <MapPin className="w-4 h-4 fill-current" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 lg:-left-8 bg-white p-3 rounded-lg shadow-xl border border-gray-100 flex items-center gap-3 animate-pulse">
              <div className="bg-green-100 p-1.5 rounded-full">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-800">
                  Profile Verified
                </p>
                <p className="text-[10px] text-gray-500">Just now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
