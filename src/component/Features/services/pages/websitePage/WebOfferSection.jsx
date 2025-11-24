import React from "react";
import {
  ShieldCheck,
  Bolt,
  Wand2,
  Smartphone,
  RefreshCw,
  Search,
} from "lucide-react";
import Portfolio from "../../../portfolio/Portfolio";


export default function WebOfferSection() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 text-gray-900 overflow-x-hidden">

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-10">

        {/* LEFT SIDE */}
        <div className="min-w-0">

          <h2 className="text-xl font-bold mb-3">Website Development Includes:</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 text-sm gap-y-2">
            <p>• Responsive design</p>
            <p>• Modern UI/UX</p>
            <p>• Fast loading website</p>
            <p>• Business-focused layout</p>
            <p>• SEO-friendly structure</p>
            <p>• Contact forms</p>
            <p>• WhatsApp CTA</p>

            <p className="col-span-2">
              • Custom pages (Home, About, Services, Pricing, etc.)
            </p>
          </div>

          {/* PACKAGES */}
          <h2 className="text-xl font-bold mt-8 mb-3">Packages</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="border rounded-xl p-4 shadow-sm text-center">
              <p className="font-semibold">Starter Website</p>
              <p className="text-2xl font-bold">₹ 4,999</p>
              <p className="text-xs text-gray-600 mt-2">
                A basic website with essential features
              </p>
            </div>

            <div className="border rounded-xl p-4 shadow-sm text-center">
              <p className="font-semibold">Standard Website</p>
              <p className="text-2xl font-bold">₹ 9,999</p>
              <p className="text-xs text-gray-600 mt-2">
                We Design UI • Modern Design
              </p>
            </div>
          </div>

          {/* HOW IT WORKS */}
          <h2 className="text-xl font-bold mt-10 mb-3">How It Works</h2>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs">
                1
              </span>
              Book a Call
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs">
                2
              </span>
              Share Requirements
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs">
                3
              </span>
              We Design UI
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs">
                4
              </span>
              Development Starts
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="min-w-0">

          <h2 className="text-xl font-bold mb-5">Why Choose Us</h2>

          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Bolt className="w-5 h-5 text-blue-600" />
              Fast Delivery — 3–5 days
            </li>
            <li className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
              Secure & Reliable
            </li>
            <li className="flex items-center gap-3">
              <Wand2 className="w-5 h-5 text-blue-600" />
              Custom UI • Modern Design
            </li>
            <li className="flex items-center gap-3">
              <Smartphone className="w-5 h-5 text-blue-600" />
              Fully Mobile Friendly
            </li>
            <li className="flex items-center gap-3">
              <RefreshCw className="w-5 h-5 text-blue-600" />
              Easy to Update
            </li>
            <li className="flex items-center gap-3">
              <Search className="w-5 h-5 text-blue-600" />
              SEO Optimized
            </li>
          </ul>

          <h2 className="text-xl font-bold mt-10 mb-5">How It Works</h2>

          <ol className="space-y-4 text-sm">
            <li className="flex gap-2">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 text-xs">
                1
              </span>
              Book a Call
            </li>
            <li className="flex gap-2">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 text-xs">
                2
              </span>
              Share Requirements
            </li>
            <li className="flex gap-2">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 text-xs">
                3
              </span>
              We Design UI
            </li>
            <li className="flex gap-2">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 text-xs">
                4
              </span>
              Development Starts
            </li>
            <li className="flex gap-2">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 text-xs">
                5
              </span>
              Final Delivery
            </li>
          </ol>
        </div>
      </div>
      <Portfolio/>
      {/* CTA BUTTON */}
      <div className="flex justify-center mt-12">
        <button className="px-10 py-3 bg-blue-600 text-white text-lg rounded-xl shadow hover:bg-blue-700 transition">
          Start Your Website Today
        </button>
      </div>
    </div>
  );
}
