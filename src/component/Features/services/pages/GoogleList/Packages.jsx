// Packages.jsx
import React, { useState } from "react";
import { CheckCircleIcon } from '@heroicons/react/24/solid'; // Assumes you have @heroicons/react installed
import { XMarkIcon } from '@heroicons/react/24/outline'; // Assumes you have @heroicons/react installed

// --- Updated Data Structure for better UI ---
const googleplan = [
  {
    plan: "Google Listing",
    amount: "4,999",
    company: "Standard Listing",
    isPopular: false,
    features: [
      "Basic Google My Business Setup",
      "One-time optimization",
      "Limited support",
      "Monthly performance report"
    ],
  },
  {
    plan: "Advanced Listing",
    amount: "9,999",
    company: "Recommended Choice",
    isPopular: true, // New field for highlighting
    features: [
      "Everything in Basic",
      "Advanced SEO optimization",
      "Quarterly updates & review",
      "Priority email support"
    ],
  },
  {
    plan: "Premium Listing",
    amount: "14,999+",
    company: "Full Service",
    isPopular: false,
    features: [
      "Everything in Advanced",
      "Dedicated account manager",
      "Custom strategy development",
      "24/7 Phone & Chat Support"
    ],
  },
];

export default function Packages() {
  const [open, setOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleOpen = (plan) => {
    setSelectedPlan(plan);
    setOpen(true);
  };

  return (
    <>
      {/* MAIN SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-4">
            Our Pricing Packages
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Choose the best plan for your business growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            {googleplan.map((item, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-xl flex flex-col transition-all duration-300 transform hover:scale-[1.03] ${
                  item.isPopular ? "border-4 border-blue-600 ring-4 ring-blue-100" : "border border-gray-200"
                }`}
              >
                {/* Popular Tag */}
                {item.isPopular && (
                  <span className="self-center bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                    Most Popular
                  </span>
                )}
                
                <h3 className="font-bold text-gray-900 text-2xl text-center mb-1">{item.plan}</h3>
                <p className="text-sm text-gray-500 text-center mb-6">{item.company}</p>

                {/* Price */}
                <p className="text-5xl font-extrabold text-blue-600 text-center border-b pb-6">
                  ₹ {item.amount}
                </p>

                {/* Features List */}
                <ul className="mt-6 space-y-3 flex-grow">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                      <span className="ml-3 text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button
                  onClick={() => handleOpen(item.plan)}
                  className={`mt-8 w-full font-semibold py-3 rounded-xl shadow-md transition ${
                    item.isPopular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-100 text-blue-600 border border-blue-600 hover:bg-blue-50"
                  }`}
                >
                  Start with {item.plan}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL POPUP - Redesigned for two-step payment visualization */}
      {open && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center p-4 z-50 transition-opacity duration-300">
          <div className="bg-white w-full max-w-4xl rounded-xl shadow-2xl p-8 relative transform transition-transform duration-300 scale-100">

            {/* CLOSE BTN */}
            <button
              className="absolute top-4 right-4 p-1 text-gray-400 hover:text-gray-900 transition"
              onClick={() => setOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
              Payment for: <span className="text-blue-600">{selectedPlan}</span>
            </h2>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* LEFT: STEP 1 - SCAN & PAY */}
              <div className="p-6 rounded-xl border-4 border-dashed border-blue-200 bg-blue-50 flex flex-col items-center text-center">
                <div className="flex items-center text-lg font-semibold text-blue-800 mb-4">
                  <span className="bg-blue-600 text-white h-8 w-8 rounded-full flex items-center justify-center mr-3">1</span>
                  Scan & Pay via UPI
                </div>

                {/* QR IMAGE */}
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=upi-payment"
                  alt="QR Code for UPI Payment"
                  className="w-56 h-56 rounded-lg shadow-lg"
                />

                <p className="mt-4 text-sm text-gray-600">
                  Use any UPI app (Paytm, Google Pay, PhonePe) to scan and complete the payment.
                </p>
              </div>

              {/* RIGHT: STEP 2 - PAYMENT DETAILS FORM */}
              <div className="p-6 rounded-xl bg-gray-50 border border-gray-200">
                 <div className="flex items-center text-lg font-semibold text-gray-800 mb-6">
                    <span className="bg-gray-400 text-white h-8 w-8 rounded-full flex items-center justify-center mr-3">2</span>
                    Confirm Your Payment
                </div>

                <form className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Full Name (As per transaction)"
                    className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-blue-500 focus:border-blue-500"
                    required
                  />

                  <input
                    type="text"
                    placeholder="Transaction ID (UTR/Ref No.)"
                    className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                  
                  <label className="block">
                      <span className="text-gray-700 text-sm font-medium mb-1 block">Upload Payment Screenshot (Optional but recommended)</span>
                      <input
                          type="file"
                          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                      />
                  </label>


                  <button
                    type="submit"
                    className="mt-4 bg-green-600 text-white py-3 rounded-lg font-bold shadow-lg hover:bg-green-700 transition"
                  >
                    Confirm & Submit Details
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}