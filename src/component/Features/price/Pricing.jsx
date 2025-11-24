import React from "react";

export default function Pricing() {
  const plans = [
    {
      plan: "Starter Plan",
      price: "3,999",
      desc: "A basic website with essential features",
      highlight: false,
    },
    {
      plan: "Standard Plan",
      price: "6,999",
      desc: "An advanced website with additional features",
      highlight: true,
    },
    {
      plan: "Premium Plan",
      price: "14,999+",
      desc: "A fully customized website with premium features",
      highlight: false,
    },
  ];

  return (
    <section className="w-full py-24 **bg-white**">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-14 text-center">
          Pricing
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {plans.map((item, index) => (
            <div
              key={index}
              className={`relative p-10 rounded-3xl border shadow-xl transition-all duration-300 bg-white hover:shadow-2xl hover:-translate-y-2 ${
                item.highlight
                  ? "border-indigo-600 shadow-indigo-200 scale-105"
                  : "border-gray-200"
              }`}
            >
              {item.highlight && (
                <span className="absolute top-5 right-5 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  Popular
                </span>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {item.plan}
              </h3>
              <p className="text-5xl font-extrabold text-indigo-600 mb-4">
                ₹{item.price}
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                {item.desc}
              </p>
              <button className={`w-full py-3 mt-2 rounded-xl font-semibold transition-all duration-300 
                ${item.highlight 
                  ? "bg-indigo-600 text-white hover:bg-indigo-700" 
                  : "bg-gray-900 text-white hover:bg-gray-800"
                }`}>
                Choose Plan
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}