// About us Page
import React from "react";
// Using the same icons for visual consistency. Plus a star icon for mission/vision bullets.
import { Target, Lightbulb, TrendingUp, CheckCircle, Star } from "lucide-react"; 

// Reusable component with enhanced design
function SectionBlock({ title, children, icon: IconComponent }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-3">
        {/* Icon in accent color */}
        <IconComponent className="w-8 h-8 text-[#2b7bff] mr-3" />
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
      </div>
      <div className="text-gray-600 leading-relaxed">{children}</div> {/* Children wrapped in div for consistent styling */}
    </div>
  );
}

export default function AboutDetails() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
      
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900">Our Core Pillars</h2>
        <p className="text-lg text-gray-500 mt-2">The principles that guide every decision we make.</p>
      </div>

      {/* Structured Grid Layout for Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Our Mission - REVISED WITH BULLETED POINTS */}
        <SectionBlock title="Our Mission" icon={Target}>
          <p className="mb-4 font-semibold text-gray-700">We empower businesses through:</p>
          
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <Star className="flex-shrink-0 w-5 h-5 mr-3 mt-1 text-[#2b7bff]" />
              <div>
                <strong className="text-gray-900">High-Impact Solutions:</strong> Delivering digital tools that simplify complex challenges and amplify growth.
              </div>
            </li>
            <li className="flex items-start">
              <Star className="flex-shrink-0 w-5 h-5 mr-3 mt-1 text-[#2b7bff]" />
              <div>
                <strong className="text-gray-900">Measurable Results:</strong> Focusing on outcomes and quantifiable growth for every client.
              </div>
            </li>
            <li className="flex items-start">
              <Star className="flex-shrink-0 w-5 h-5 mr-3 mt-1 text-[#2b7bff]" />
              <div>
                <strong className="text-gray-900">Core Values:</strong> Ensuring *excellence, **innovation, and **efficiency* in every single project.
              </div>
            </li>
          </ul>
        </SectionBlock>

        {/* Our Vision - REVISED WITH BULLETED POINTS */}
        <SectionBlock title="Our Vision" icon={Lightbulb}>
          <p className="mb-4 font-semibold text-gray-700">We are committed to becoming:</p>

          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <Star className="flex-shrink-0 w-5 h-5 mr-3 mt-1 text-[#2b7bff]" />
              <div>
                <strong className="text-gray-900">A Global Leader:</strong> A trusted digital partner recognized worldwide for our results and creativity.
              </div>
            </li>
            <li className="flex items-start">
              <Star className="flex-shrink-0 w-5 h-5 mr-3 mt-1 text-[#2b7bff]" />
              <div>
                <strong className="text-gray-900">Industry Standard Setters:</strong> Building world-class websites and digital products that raise the bar for performance.
              </div>
            </li>
            <li className="flex items-start">
              <Star className="flex-shrink-0 w-5 h-5 mr-3 mt-1 text-[#2b7bff]" />
              <div>
                <strong className="text-gray-900">Client Success Focused:</strong> Prioritizing innovation and success in every partnership we form.
              </div>
            </li>
          </ul>
        </SectionBlock>

        {/* Our Approach - KEPT AS IS (Numbered Steps) */}
        <SectionBlock title="Our Approach" icon={TrendingUp}>
          <p className="mb-4 font-semibold text-gray-700">We follow a human-centric, agile methodology:</p>
          
          <ol className="space-y-4 text-gray-700">
            {/* Step 1 */}
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 mr-3 text-white bg-[#2b7bff] rounded-full flex items-center justify-center font-bold text-sm shadow-md">1</span>
              <div>
                <strong className="text-gray-900">Deep Discovery:</strong> We start by deeply understanding your business, audience, and goals.
              </div>
            </li>
            
            {/* Step 2 */}
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 mr-3 text-white bg-[#2b7bff] rounded-full flex items-center justify-center font-bold text-sm shadow-md">2</span>
              <div>
                <strong className="text-gray-900">Rapid Prototyping:</strong> We create fast prototypes and minimum viable products (MVPs) to bring ideas to life quickly.
              </div>
            </li>
            
            {/* Step 3 */}
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 mr-3 text-white bg-[#2b7bff] rounded-full flex items-center justify-center font-bold text-sm shadow-md">3</span>
              <div>
                <strong className="text-gray-900">Iterative Refinement:</strong> We collect real user feedback and iterate rapidly until the solution is perfect.
              </div>
            </li>
            
            {/* Conclusion */}
            <li className="mt-4 pt-2 border-t border-gray-100 flex items-start text-sm">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                <span className="text-gray-600">Our approach ensures *speed, quality, and measurable results*—every single time.</span>
            </li>
          </ol>
        </SectionBlock>
        
      </div>
    </section>
  );
}