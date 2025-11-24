import React from "react";
import { CheckCircle } from "lucide-react";

const offers = [
  "Marketing Strategy",
  "Search Ads & Display Ads",
  "Social Media Marketing",
  "Content Marketing",
  "Effective Campaign Management",
  "Lead Generation Funnels",
  "Email Marketing",
  "Monthly Reporting & Insights",
];

export default function WhatWeOffer() {
  const col1 = offers.slice(0, 4);
  const col2 = offers.slice(4);

  return (
    <section id="services" className="py-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900 mb-3">
          What We Offer
        </h2>
        <p className="text-gray-600 text-lg mb-10">
          End-to-end digital marketing solutions built for growth.
        </p>

        {/* Offer Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-6 text-lg text-gray-700">

          {[col1, col2].map((column, colIndex) => (
            <ul key={colIndex} className="space-y-4">
              {column.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer"
                >
                  <CheckCircle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ))}

        </div>
      </div>
    </section>
  );
}
