import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";

const MOCK_QR =
  "https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=";
const MOCK_UPI = "YOUR.UPI@BANK";

// ---------------------------
// PAYMENT MODAL COMPONENT
// ---------------------------
const PaymentModal = ({
  openModal,
  closeModal,
  selectedPlan,
  paymentForm,
  setPaymentForm,
  status,
  setStatus,
}) => {
  if (!openModal || !selectedPlan) return null;

  const change = (e) =>
    setPaymentForm({ ...paymentForm, [e.target.name]: e.target.value });

  const uploadFile = (e) =>
    setPaymentForm({ ...paymentForm, screenshot: e.target.files[0] });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData();
    formData.append("name", paymentForm.name);
    formData.append("utr", paymentForm.utr);
    formData.append("phone", paymentForm.phone);
    formData.append("plan", selectedPlan.plan);
    formData.append("amount", selectedPlan.amount);
    formData.append("screenshot", paymentForm.screenshot);

    try {
      const res = await fetch(
        "https://nexware-digital-server.vercel.app/api/payment/Payment-detail",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.log(err);
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center p-4 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeModal}
      >
        <motion.div
          className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full p-8 relative border border-gray-200"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            onClick={closeModal}
          >
            <XMarkIcon className="w-7 h-7" />
          </button>

          <h3 className="text-2xl font-semibold text-gray-900 border-b pb-4 mb-6">
            Complete Payment –{" "}
            <span className="text-blue-600 font-semibold">
              {selectedPlan.plan}
            </span>
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* QR Section */}
            <div className="lg:col-span-2 bg-gray-50 p-6 rounded-xl border">
              <h4 className="text-lg font-medium text-gray-900 mb-3">
                Total: {selectedPlan.currency}
                {selectedPlan.amount}
              </h4>

              <img
                src={`${MOCK_QR}${encodeURIComponent(
                  `upi://pay?pa=${MOCK_UPI}&pn=Merchant&am=${selectedPlan.amount}&cu=INR`
                )}`}
                alt="QR Code"
                className="w-52 h-52 mx-auto border-4 border-white rounded-xl shadow"
              />

              <p className="text-sm text-gray-700 mt-4 font-medium text-center">
                Scan using GPay / PhonePe / Paytm
              </p>

              <p className="mt-4 text-sm font-medium text-gray-800">UPI ID:</p>
              <p className="text-blue-600 font-medium text-sm select-all">
                {MOCK_UPI}
              </p>
            </div>

            {/* Form Section */}
            <div className="lg:col-span-3">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Confirm Payment Details
              </h4>

              {status === "success" ? (
                <div className="text-center p-8 bg-green-50 rounded-xl border border-green-300">
                  <CheckCircleIcon className="w-12 h-12 text-green-500 mx-auto" />
                  <h5 className="text-xl font-semibold mt-3 text-green-700">
                    Submitted Successfully!
                  </h5>
                  <button
                    onClick={closeModal}
                    className="mt-5 px-6 py-2 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700"
                  >
                    Okay
                  </button>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  {/* Name */}
                  <div>
                    <label className="font-medium text-gray-700">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={paymentForm.name}
                      onChange={change}
                      placeholder="Enter full name"
                      required
                      className="w-full mt-1 border border-gray-300 rounded-xl px-4 py-2.5"
                    />
                  </div>

                  {/* UTR Number */}
                  <div>
                    <label className="font-medium text-gray-700">
                      UTR Number
                    </label>
                    <input
                      type="text"
                      name="utr"
                      value={paymentForm.utr}
                      onChange={change}
                      placeholder="e.g. 1234567890"
                      required
                      className="w-full mt-1 border border-gray-300 rounded-xl px-4 py-2.5"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={paymentForm.phone}
                      onChange={change}
                      placeholder="Enter your phone number"
                      required
                      className="w-full mt-1 border border-gray-300 rounded-xl px-4 py-2.5"
                    />
                  </div>

                  {/* Screenshot Upload */}
                  <div>
                    <label className="font-medium text-gray-700">
                      Upload Screenshot
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={uploadFile}
                      required
                      className="w-full mt-1 border border-gray-300 rounded-xl p-2"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl text-lg font-semibold bg-blue-600 text-white hover:bg-blue-700"
                  >
                    {status === "loading" ? "Submitting..." : "Submit Details"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// --------------------------------
// MAIN COMPONENT
// --------------------------------
export default function Packages({ plans }) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const [paymentForm, setPaymentForm] = useState({
    name: "",
    utr: "",
    phone: "",
    screenshot: null,
  });

  const [status, setStatus] = useState(null);

  const openPopup = (plan) => {
    setSelectedPlan(plan);
    setPaymentForm({ name: "", utr: "", phone: "", screenshot: null });
    setStatus(null);
    setOpenModal(true);
  };

  const closeModal = () => setOpenModal(false);

  const cardVariant = {
    hidden: { opacity: 0, y: 35 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.18, duration: 0.55 },
    }),
  };

  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-500 text-transparent bg-clip-text">
            Everything You Need, At the Right Price
          </h2>
          <p className="mt-3 text-lg text-gray-700 font-medium max-w-2xl mx-auto">
            Premium features. Simple pricing. Built for businesses.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md border hover:shadow-xl transition cursor-pointer"
              variants={cardVariant}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {item.plan}
                </h3>
                <p className="text-5xl font-bold mt-4">
                  {item.currency}
                  {item.amount}
                </p>
                <p className="text-sm font-medium text-gray-500 mb-6">
                  per month
                </p>
                <p className="text-gray-600 mb-6">{item.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {item.features.map((f, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-blue-600 mr-2" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => openPopup(item)}
                className="w-full py-3 rounded-xl text-lg font-semibold bg-blue-600 text-white hover:bg-blue-700"
              >
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <PaymentModal
        openModal={openModal}
        closeModal={closeModal}
        selectedPlan={selectedPlan}
        paymentForm={paymentForm}
        setPaymentForm={setPaymentForm}
        status={status}
        setStatus={setStatus}
      />
    </section>
  );
}
