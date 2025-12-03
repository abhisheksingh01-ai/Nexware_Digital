import React from "react";
import {
  Users,
  CheckCircle,
  Megaphone,
  Lightbulb,
  CalendarDays,
  RefreshCcw,
  ArrowRight,
} from "lucide-react";

const features = [
  { icon: <Users />, title: "Experienced Team", subtitle: "Skilled professionals with industry expertise" },
  { icon: <CheckCircle />, title: "Proven Results", subtitle: "High-performing campaigns and ROI growth" },
  { icon: <Megaphone />, title: "Effective Campaigns", subtitle: "Strategic planning with a dedicated manager" },
  { icon: <Lightbulb />, title: "Smart Management", subtitle: "Data-driven decision making" },
  { icon: <CalendarDays />, title: "Monthly Reports", subtitle: "Clear insights and performance tracking" },
  { icon: <RefreshCcw />, title: "Ongoing Optimization", subtitle: "Continuous improvements for better results" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Why Partner With Us?
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 mt-3">
            We create long-term growth engines through strategy, creativity, and constant optimization.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-7 rounded-2xl border border-gray-200 shadow-md
                         hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-out
                         hover:border-blue-500/30"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center
                              shadow-inner group-hover:bg-blue-600 transition-all duration-300">
                <div className="text-blue-600 group-hover:text-white transition-colors duration-300">
                  {React.cloneElement(feature.icon, { size: 30 })}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mt-5">
                {feature.title}
              </h3>

              {/* Subtitle */}
              <p className="text-gray-600 leading-relaxed mt-1">
                {feature.subtitle}
              </p>

              {/* Arrow CTA */}
              <div className="flex items-center text-blue-600 font-medium text-sm opacity-0
                              -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0
                              transition-all duration-300 mt-4">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
