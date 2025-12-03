import React from "react";
import { Trophy, Users, MapPin, BarChart3, FileText, Headphones } from "lucide-react";

const features = [
  {
    icon: Trophy,
    title: "Proven Results",
    subtitle: "Consistently ranking clients in the top 3 spots.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: Users,
    title: "Experienced Team",
    subtitle: "10+ years of combined digital marketing experience.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: MapPin,
    title: "Local SEO Experts",
    subtitle: "Hyper-targeted strategies for your specific area.",
    color: "text-red-600",
    bg: "bg-red-50",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Strategy",
    subtitle: "We follow the metrics, not just gut feelings.",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    icon: FileText,
    title: "Transparent Reporting",
    subtitle: "Monthly breakdowns so you know where money goes.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    subtitle: "Direct access to your account manager, anytime.",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
            Why partner with us?
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            We don't just optimize profiles; we build digital assets that drive real revenue.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-lg ${feature.bg} ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <feature.icon className="w-6 h-6" />
              </div>

              {/* Text */}
              <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.subtitle}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
