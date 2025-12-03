import React from "react";
import { 
  Megaphone, 
  Search, 
  Share2, 
  PenTool, 
  BarChart, 
  Filter, 
  Mail, 
  FileText 
} from "lucide-react";

const iconMap = {
  strategy: <Megaphone className="w-6 h-6 text-blue-600" />,
  ads: <Search className="w-6 h-6 text-indigo-600" />,
  social: <Share2 className="w-6 h-6 text-pink-600" />,
  content: <PenTool className="w-6 h-6 text-purple-600" />,
  campaign: <BarChart className="w-6 h-6 text-orange-600" />,
  leads: <Filter className="w-6 h-6 text-green-600" />,
  email: <Mail className="w-6 h-6 text-yellow-600" />,
  reports: <FileText className="w-6 h-6 text-teal-600" />,
};

const services = [
  { title: "Marketing Strategy", icon: iconMap.strategy, desc: "Custom roadmaps tailored to your business goals." },
  { title: "Search & Display Ads", icon: iconMap.ads, desc: "Targeted campaigns that maximize your ROI." },
  { title: "Social Media Marketing", icon: iconMap.social, desc: "Build a loyal community across all platforms." },
  { title: "Content Marketing", icon: iconMap.content, desc: "Engaging content that drives organic traffic." },
  { title: "Campaign Management", icon: iconMap.campaign, desc: "Real-time optimization for peak performance." },
  { title: "Lead Gen Funnels", icon: iconMap.leads, desc: "Convert curious visitors into paying customers." },
  { title: "Email Marketing", icon: iconMap.email, desc: "Automated flows that nurture your leads." },
  { title: "Reporting & Insights", icon: iconMap.reports, desc: "Transparent data to track your growth." },
];

export default function WhatWeOffer() {
  return (
    <section id="services" className="py-2 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            What We Offer
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            End-to-end digital marketing solutions built for growth and results.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-5 shadow-sm border border-gray-100 
                        hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center 
                              group-hover:bg-blue-50 transition-colors duration-300">
                {service.icon}
              </div>

              {/* Text */}
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mt-3">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mt-1">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
