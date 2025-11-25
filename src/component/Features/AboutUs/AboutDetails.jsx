// About us Page
import React from "react";
import { Target, Lightbulb, TrendingUp, CheckCircle, Star } from "lucide-react";

// Reusable component with enhanced design
function SectionBlock({ title, children, icon: IconComponent }) {
  return (
    <div className="bg-white p-5 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-2">
        <IconComponent className="w-7 h-7 text-[#2b7bff] mr-3" />
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>

      <div className="text-gray-600 leading-relaxed text-sm">
        {children}
      </div>
    </div>
  );
}

export default function AboutDetails() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-4 lg:py-6">

      <div className="text-center mb-6">
        <h2 className="text-3xl font-extrabold text-gray-900">Our Core Pillars</h2>
        <p className="text-base text-gray-500 mt-1">The principles that guide every decision we make.</p>
      </div>

      {/* Structured Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Mission */}
        <SectionBlock title="Our Mission" icon={Target}>
          <p className="mb-3 font-semibold text-gray-700">We empower businesses through:</p>

          <ul className="space-y-3">
            <li className="flex items-start">
              <Star className="w-4 h-4 mr-2 mt-1 text-[#2b7bff]" />
              <div><strong>High-Impact Solutions:</strong> Digital tools that simplify challenges.</div>
            </li>

            <li className="flex items-start">
              <Star className="w-4 h-4 mr-2 mt-1 text-[#2b7bff]" />
              <div><strong>Measurable Results:</strong> Growth driven by data & performance.</div>
            </li>

            <li className="flex items-start">
              <Star className="w-4 h-4 mr-2 mt-1 text-[#2b7bff]" />
              <div><strong>Core Values:</strong> Excellence, innovation, efficiency.</div>
            </li>
          </ul>
        </SectionBlock>

        {/* Vision */}
        <SectionBlock title="Our Vision" icon={Lightbulb}>
          <p className="mb-3 font-semibold text-gray-700">We aim to become:</p>

          <ul className="space-y-3">
            <li className="flex items-start">
              <Star className="w-4 h-4 mr-2 mt-1 text-[#2b7bff]" />
              <div><strong>A Global Leader:</strong> Trusted partner worldwide.</div>
            </li>

            <li className="flex items-start">
              <Star className="w-4 h-4 mr-2 mt-1 text-[#2b7bff]" />
              <div><strong>Industry Standard Setters:</strong> World-class digital products.</div>
            </li>

            <li className="flex items-start">
              <Star className="w-4 h-4 mr-2 mt-1 text-[#2b7bff]" />
              <div><strong>Client Success Focused:</strong> Innovation & long-term growth.</div>
            </li>
          </ul>
        </SectionBlock>

        {/* Approach */}
        <SectionBlock title="Our Approach" icon={TrendingUp}>
          <p className="mb-3 font-semibold text-gray-700">Built on agile & user-first mindset:</p>

          <ol className="space-y-3">
            <li className="flex items-start">
              <span className="w-5 h-5 mr-2 text-white bg-[#2b7bff] rounded-full flex items-center justify-center text-xs">1</span>
              <div><strong>Deep Discovery:</strong> Understanding your brand, goals, audience.</div>
            </li>

            <li className="flex items-start">
              <span className="w-5 h-5 mr-2 text-white bg-[#2b7bff] rounded-full flex items-center justify-center text-xs">2</span>
              <div><strong>Rapid Prototyping:</strong> Turning ideas into visual reality quickly.</div>
            </li>

            <li className="flex items-start">
              <span className="w-5 h-5 mr-2 text-white bg-[#2b7bff] rounded-full flex items-center justify-center text-xs">3</span>
              <div><strong>Iterative Refinement:</strong> Improving based on real user feedback.</div>
            </li>

            <li className="pt-2 border-t border-gray-100 flex items-start text-xs">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              <span>Ensuring speed, quality & measurable results — every time.</span>
            </li>
          </ol>
        </SectionBlock>

      </div>
    </section>
  );
}
