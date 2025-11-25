import React from "react";

const stats = [
  { value: "4+", label: "Years of Experience" },
  { value: "150+", label: "Successful Projects" },
  { value: "98%", label: "Client Satisfaction" },
];

export default function AboutStats() {
  return (
    <section className="bg-white py-6 lg:py-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-6">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Why Choose Nexware Digital?
          </h2>
          <p className="text-base text-gray-500 mt-1">
            Numbers speak louder than words—our commitment to quality and growth.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 transition-transform duration-300 hover:shadow-xl hover:scale-[1.04]"
            >
              <h4 className="text-4xl font-extrabold text-[#2b7bff] mb-1">
                {stat.value}
              </h4>
              <p className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
