import React, { useState } from "react";
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const googleplan = [
  {
    plan: "Starter Plan",
    amount: "9,999",
    currency: "₹",
    description: "Ideal for basic online presence.",
    features: [
      "Basic campaign setup",
      "Single platform focus",
      "Monthly performance report",
      "Standard support"
    ],
    isHighlighted: false,
  },
  {
    plan: "Standard Plan",
    amount: "14,999",
    currency: "₹",
    description: "The perfect balance for growth.",
    features: [
      "Advanced tracking & analytics",
      "Multiple platform marketing",
      "Bi-weekly performance review",
      "Priority email support"
    ],
    isHighlighted: true,
  },
  {
    plan: "Premium Plan",
    amount: "19,999+",
    currency: "₹",
    description: "Full-scale marketing with dedicated partnership.",
    features: [
      "Custom strategy development",
      "Dedicated account manager",
      "Full-scale marketing campaigns",
      "24/7 Phone & Chat support"
    ],
    isHighlighted: false,
  },
];

export default function Packages() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const openPopup = (plan) => {
    setSelectedPlan(plan);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
    setSelectedPlan(null);
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Our Value
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-2">
            Simple, Transparent Pricing
          </h2>

          <p className="mt-4 text-xl text-gray-600">
            Choose the plan that best fits your business goals.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-10">
          {googleplan.map((item, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 ${
                item.isHighlighted
                  ? "ring-4 ring-blue-500/40 shadow-blue-500/20 relative"
                  : "border border-gray-200"
              }`}
            >
              {item.isHighlighted && (
                <span className="absolute top-0 right-0 -mt-3 -mr-3 px-3 py-1 bg-blue-600 text-white text-xs font-bold uppercase rounded-full shadow">
                  Recommended
                </span>
              )}

              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-900">{item.plan}</h3>

                <p className="text-5xl font-extrabold text-gray-900 mt-4">
                  {item.currency}{item.amount}
                </p>

                <p className="text-sm font-medium text-gray-500 mb-6">per month</p>

                <p className="text-gray-600 mb-8">{item.description}</p>
              </div>

              <ul className="space-y-3 mb-10">
                {item.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-gray-700">
                    <CheckCircleIcon className="w-6 h-6 text-blue-500 mr-2 mt-1" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => openPopup(item)}
                className={`w-full py-4 rounded-xl text-lg font-bold transition duration-200 shadow-md ${
                  item.isHighlighted
                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-blue-500/40"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {openModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center p-4 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-3xl"
              onClick={closeModal}
            >
              &times;
            </button>

            <h3 className="text-3xl font-bold text-gray-900 border-b pb-4 mb-6">
              Payment Details –{" "}
              <span className="text-blue-600">{selectedPlan?.plan}</span>
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

              {/* LEFT SIDE */}
              <div className="lg:col-span-2 bg-blue-50 p-5 rounded-xl border border-blue-200 flex flex-col items-center">
                <h4 className="text-xl font-semibold text-blue-700 mb-3">
                  Total Due: {selectedPlan?.currency}{selectedPlan?.amount}
                </h4>

                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=UPI-PAYMENT"
                  className="w-52 h-52 border-4 border-white rounded-xl shadow"
                  alt="QR Code"
                />

                <p className="text-sm text-gray-700 mt-4">
                  Scan to pay via UPI
                </p>

                <p className="mt-3 text-lg font-bold text-gray-900">UPI ID:</p>
                <p className="text-blue-600 font-semibold select-all">
                  YOUR.UPI@BANK
                </p>
              </div>

              {/* RIGHT SIDE */}
              <div className="lg:col-span-3">
                <h4 className="text-2xl font-semibold text-gray-800 mb-4">
                  Confirm Your Payment
                </h4>

                <form className="space-y-5">

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Transaction ID (UTR/Ref No.)
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Enter transaction ID"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Upload Payment Screenshot
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      className="w-full border border-gray-300 rounded-lg p-2 cursor-pointer
                        file:bg-blue-50 file:px-4 file:py-2 file:rounded-lg
                        file:text-blue-700 file:font-semibold hover:file:bg-blue-100"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 shadow-lg shadow-blue-500/40"
                  >
                    Confirm & Submit Details
                  </button>

                  <p className="text-center text-xs text-gray-500">
                    Account activation within 24 hours after verification.
                  </p>

                </form>
              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
}
