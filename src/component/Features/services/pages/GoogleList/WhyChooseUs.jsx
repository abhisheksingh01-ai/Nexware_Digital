import React from "react";

const features = [
  { icon: "⚙️", title: "Proven Results", subtitle: "Focused on the best" },
  { icon: "📈", title: "Experienced Team", subtitle: "Expert professionals" },
  { icon: "📍", title: "Local SEO Expertise", subtitle: "Targeting your audience" },
  { icon: "📊", title: "Proven Strategies", subtitle: "Data-driven approach" },
  { icon: "📅", title: "Monthly Reporting", subtitle: "Transparent insights" },
  { icon: "📞", title: "Customer Support", subtitle: "Dedicated assistance" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
        Why Choose Us
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-start p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition border border-gray-100"
          >
            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center text-2xl bg-blue-100 text-blue-700 rounded-xl shadow-sm">
              {feature.icon}
            </div>

            {/* Text */}
            <div className="ml-4">
              <p className="font-semibold text-gray-900 text-lg">
                {feature.title}
              </p>
              <p className="text-sm text-gray-600 mt-1">{feature.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
