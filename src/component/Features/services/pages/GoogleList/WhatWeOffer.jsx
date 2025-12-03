import React from "react";
import { CheckCircle2, Zap } from "lucide-react";

const offers = [
  "Complete Profile Optimization",
  "Business Info Updates",
  "Service & Photo Management",
  "Operating Hours Setup",
  "Review Response Management",
  "Category Optimization",
  "Proven Growth Strategies",
  "Local SEO Expertise",
  "Competitor Analysis",
  "Monthly Performance Reports",
  "24/7 Customer Support",
  "Google Maps Ranking",
];

export default function WhatWeOffer() {
  return (
    <section className="bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wide mb-2">
            <Zap className="w-3 h-3 fill-current" />
            Our Services
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
            Everything you need to <span className="text-blue-600">grow local</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            We provide a comprehensive suite of services to ensure your business stands out on Google Maps and Search.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {offers.map((item, index) => (
            <div
              key={index}
              className="group bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 flex items-center gap-3 cursor-default"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                <CheckCircle2 className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Text */}
              <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors text-sm sm:text-base">
                {item}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
