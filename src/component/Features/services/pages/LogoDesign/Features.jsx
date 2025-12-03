import React from "react";
// Ensure you have lucide-react installed: npm install lucide-react
import { CheckCircle2, Zap, ShieldCheck, Award, Users, DollarSign } from "lucide-react";

const offers = [
  "Creative & original concepts",
  "Unlimited revisions",
  "Multiple formats (PNG, SVG, PDF)",
  "Full copyright & ownership",
  "High-Quality Vector Designs",
  "Favicon design included",
];

const features = [
  {
    title: "Expert Designers",
    desc: "Top-tier creative talent",
    icon: <Users className="w-5 h-5 text-indigo-600" />,
  },
  {
    title: "Quick Turnaround",
    desc: "First draft in 24 hours",
    icon: <Zap className="w-5 h-5 text-indigo-600" />,
  },
  {
    title: "Affordable Pricing",
    desc: "No hidden fees",
    icon: <DollarSign className="w-5 h-5 text-indigo-600" />,
  },
  {
    title: "Satisfaction Guarantee",
    desc: "100% money back policy",
    icon: <ShieldCheck className="w-5 h-5 text-indigo-600" />,
  },
];

export default function Features() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6 lg:py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-stretch">
        
        {/* Left: What We Offer (List Style) */}
        <div className="bg-indigo-50/60 rounded-2xl p-6 sm:p-8 border border-indigo-100 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Award className="w-6 h-6 text-indigo-600" />
            What We Offer
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
            {offers.map((text, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                <span className="text-gray-700 font-medium text-sm sm:text-base">
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Why Choose Us (Grid Cards) */}
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 px-2">
            Why Choose Us?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group p-4 rounded-xl border border-gray-100 hover:border-indigo-100 bg-white hover:bg-white hover:shadow-lg transition-all duration-200 flex items-start gap-4"
              >
                <div className="bg-indigo-50 p-2.5 rounded-lg group-hover:bg-indigo-600 transition-colors duration-200">
                  
                  <div className="group-hover:text-white transition-colors duration-200">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}