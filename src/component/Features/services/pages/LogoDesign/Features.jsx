// Features.jsx
import React from "react";

const OfferItem = ({ text }) => (
  <li className="flex items-start gap-3 text-gray-700">
    <svg className="w-5 h-5 text-blue-600 mt-1" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 16.2l-3.5-3.5L4 14.2 9 19.2 20 8.2 17.5 5.7z" />
    </svg>
    <span>{text}</span>
  </li>
);

export default function Features() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* What We Offer */}
        <div>
          <h3 className="font-semibold text-lg mb-4">What We Offer</h3>
          <ul className="space-y-3">
            <OfferItem text="Creative & original concepts" />
            <OfferItem text="Unlimited revisions" />
            <OfferItem text="Multiple logo formats (PNG, SVG, PDF)" />
            <OfferItem text="Full copyright & ownership" />
            <OfferItem text="Fully Quality Designs" />
            <OfferItem text="Full copyright sowner" />
            <OfferItem text="Favicon design" />
          </ul>
        </div>

        {/* Why Choose Us */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Why Choose Us</h3>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="bg-blue-50 rounded-md p-2">
                <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5" />
                </svg>
              </div>
              <div>
                <p className="font-medium">Expert Designers</p>
                <p className="text-sm text-gray-600">Brand Identity Focus</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-blue-50 rounded-md p-2">
                <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12l8-5-8-5-8 5 8 5zM12 22V12" />
                </svg>
              </div>
              <div>
                <p className="font-medium">High-Quality Design</p>
                <p className="text-sm text-gray-600">Quick Turnaround</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-blue-50 rounded-md p-2">
                <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
                </svg>
              </div>
              <div>
                <p className="font-medium">Affordable Pricing</p>
                <p className="text-sm text-gray-600">Satisfaction Guaranteed</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-blue-50 rounded-md p-2">
                <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5 12h14M12 5v14" />
                </svg>
              </div>
              <div>
                <p className="font-medium">Brand Identity Focus</p>
                <p className="text-sm text-gray-600">Expert Support</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}