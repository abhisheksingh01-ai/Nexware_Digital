import React from "react";
import { CheckCircle } from "lucide-react";

const offers = [
  "Profile optimization",
  "Business info update",
  "Add services & photos",
  "Set operating hours",
  "Customer reviews management",
  "Primary & secondary categories",
  "Proven Is#r,ssulting",
  "Local SEO Expertise",
  "Proven Strategies",
  "Monthly Reporting",
  "Customer Support",
];

export default function WhatWeOffer() {
  const column1 = offers.slice(0, 6);
  const column2 = offers.slice(6);

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        What We Offer
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* COLUMN 1 */}
        <ul className="space-y-4">
          {column1.map((item, index) => (
            <li
              key={index}
              className="flex items-start bg-white shadow-sm p-4 rounded-xl hover:shadow-md transition"
            >
              <CheckCircle className="text-blue-600 w-6 h-6 mr-3 mt-1" />
              <span className="text-gray-800 text-lg">{item}</span>
            </li>
          ))}
        </ul>

        {/* COLUMN 2 */}
        <ul className="space-y-4">
          {column2.map((item, index) => (
            <li
              key={index}
              className="flex items-start bg-white shadow-sm p-4 rounded-xl hover:shadow-md transition"
            >
              <CheckCircle className="text-blue-600 w-6 h-6 mr-3 mt-1" />
              <span className="text-gray-800 text-lg">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
