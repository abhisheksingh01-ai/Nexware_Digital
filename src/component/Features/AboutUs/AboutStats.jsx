import React from "react";

const stats = [
  { value: "4+", label: "Years of Experience" },
  { value: "150+", label: "Successful Projects" },
  { value: "98%", label: "Client Satisfaction" },
];

export default function AboutStats() {
  return (
    // Contrasting section background for visual break
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold text-gray-900">Why Choose Nexware Digital?</h2>
            <p className="text-lg text-gray-500 mt-2">Numbers speak louder than words—our commitment to quality and growth.</p>
        </div>

        {/* Highlighted Stats Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="p-8 bg-white rounded-xl shadow-lg border border-gray-100 transition-transform duration-300 hover:shadow-xl hover:scale-[1.05]"
            >
              <h4 className="text-5xl font-extrabold text-[#2b7bff] mb-2">
                {stat.value}
              </h4>
              <p className="text-lg font-semibold text-gray-700 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}