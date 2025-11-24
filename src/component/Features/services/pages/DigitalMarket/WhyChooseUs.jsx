import React from "react";
import { Users, CheckCircle, Megaphone, Lightbulb, CalendarDays, RefreshCcw } from "lucide-react";

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
    <section className="py-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-10">
        Why Choose Us
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">

        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 p-4 rounded-xl hover:shadow-lg transition-shadow cursor-pointer"
          >
            {/* Icon */}
            <div className="w-14 h-14 flex items-center justify-center bg-blue-50 text-blue-600 rounded-xl text-2xl shadow-sm">
              {feature.icon}
            </div>

            {/* Content */}
            <div>
              <p className="font-semibold text-gray-900 text-lg">{feature.title}</p>
              <p className="text-gray-500 text-sm mt-1">{feature.subtitle}</p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
