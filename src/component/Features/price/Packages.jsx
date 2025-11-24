import React, { useState } from "react";
import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";

// Mock QR Code Generator Link and UPI ID
const MOCK_QR_CODE_BASE_URL =
  "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=";
const MOCK_UPI_ID = "YOUR.UPI@BANK";

export default function Packages({ plans }) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [paymentForm, setPaymentForm] = useState({
    name: "",
    transactionId: "",
    phone: "",
    screenshot: null,
  });
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const openPopup = (plan) => {
    setSelectedPlan(plan);
    setPaymentForm({ name: "", transactionId: "", phone: "", screenshot: null });
    setSubmissionStatus(null);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
    setSelectedPlan(null);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setPaymentForm({ ...paymentForm, [name]: value });
  };

  const handleFileChange = (e) => {
    setPaymentForm({ ...paymentForm, screenshot: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmissionStatus("loading");

    console.log("Submitting payment for:", selectedPlan.plan, paymentForm);

    setTimeout(() => {
      setSubmissionStatus("success");
    }, 2000);
  };

  // Payment Modal Component
  const PaymentModal = () => {
    if (!openModal || !selectedPlan) return null;

    const qrCodeData = `upi://pay?pa=${MOCK_UPI_ID}&pn=MerchantName&am=${selectedPlan.amount.replace(
      /,/g,
      ""
    )}&cu=${selectedPlan.currency.replace("₹", "INR")}`;

    return (
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-md flex justify-center items-center p-4 z-50"
        onClick={closeModal}
      >
        <div
          className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl max-w-4xl w-full p-6 sm:p-8 relative animate-fadeIn border border-white/40"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 transition"
            onClick={closeModal}
          >
            <XMarkIcon className="w-8 h-8" />
          </button>

          <h3 className="text-3xl font-bold text-gray-900 border-b pb-4 mb-6">
            Complete Payment –{" "}
            <span className="text-blue-600">{selectedPlan.plan}</span>
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* LEFT: QR */}
            <div className="lg:col-span-2 bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200 flex flex-col items-center text-center shadow-inner">
              <h4 className="text-xl font-semibold text-blue-700 mb-3">
                Total: {selectedPlan.currency}
                {selectedPlan.amount}
              </h4>

              <img
                src={`${MOCK_QR_CODE_BASE_URL}${encodeURIComponent(
                  qrCodeData
                )}`}
                className="w-52 h-52 rounded-xl shadow-lg border-4 border-white"
                alt="QR Code"
              />

              <p className="text-sm text-gray-700 mt-4 font-medium">
                Scan using GPay, PhonePe, Paytm, etc.
              </p>

              <p className="mt-3 text-lg font-bold text-gray-900">UPI ID:</p>
              <p className="text-blue-700 font-semibold text-sm select-all break-all">
                {MOCK_UPI_ID}
              </p>
            </div>

            {/* RIGHT: FORM */}
            <div className="lg:col-span-3">
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">
                Confirm Your Payment
              </h4>

              {submissionStatus === "success" ? (
                <div className="text-center p-8 bg-green-50 rounded-xl border border-green-300">
                  <CheckCircleIcon className="w-12 h-12 text-green-500 mx-auto" />
                  <h5 className="text-xl font-bold mt-3 text-green-800">
                    Submitted Successfully!
                  </h5>
                  <p className="text-sm text-green-600 mt-2">
                    Verification will take up to 24 hours.
                  </p>
                  <button
                    onClick={closeModal}
                    className="mt-5 px-6 py-2 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition"
                  >
                    Okay
                  </button>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="font-medium text-gray-700">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={paymentForm.name}
                      onChange={handleFormChange}
                      required
                      className="w-full mt-1 border border-gray-300 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="font-medium text-gray-700">
                      Transaction ID
                    </label>
                    <input
                      type="text"
                      name="transactionId"
                      value={paymentForm.transactionId}
                      onChange={handleFormChange}
                      required
                      className="w-full mt-1 border border-gray-300 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., 987654321234"
                    />
                  </div>

                  <div>
                    <label className="font-medium text-gray-700">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={paymentForm.phone}
                      onChange={handleFormChange}
                      className="w-full mt-1 border border-gray-300 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-blue-500"
                      placeholder="We’ll contact only if needed"
                    />
                  </div>

                  <div>
                    <label className="font-medium text-gray-700">
                      Upload Screenshot
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      required
                      className="w-full mt-1 border p-2 border-gray-300 rounded-xl bg-white cursor-pointer"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submissionStatus === "loading"}
                    className="w-full py-3 rounded-xl text-lg font-semibold bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition flex justify-center"
                  >
                    {submissionStatus === "loading" ? "Submitting..." : "Submit Details"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
            Our Value
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-2">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the perfect plan for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {plans.map((item, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-3xl shadow-xl transition hover:-translate-y-1 hover:shadow-2xl
                ${item.isHighlighted ? "ring-4 ring-blue-500/40" : "border border-gray-200"}`}
            >
              {item.isHighlighted && (
                <span className="absolute top-3 right-3 px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
                  Popular
                </span>
              )}

              <div className="text-center">
                <h3 className="text-3xl font-bold">{item.plan}</h3>
                <p className="text-5xl font-extrabold mt-4">
                  {item.currency}
                  {item.amount}
                </p>
                <p className="text-sm font-medium text-gray-500 mb-6">
                  per month
                </p>
                <p className="text-gray-600 mb-8">{item.description}</p>
              </div>

              <ul className="space-y-3 mb-10">
                {item.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-blue-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => openPopup(item)}
                className={`w-full py-4 rounded-xl text-lg font-bold transition
                  ${
                    item.isHighlighted
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>

      <PaymentModal />
    </section>
  );
}
