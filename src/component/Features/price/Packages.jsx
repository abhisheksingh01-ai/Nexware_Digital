import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";

const MOCK_QR =
  "https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=";
const MOCK_UPI = "YOUR.UPI@BANK";

// ---------------------------
// PAYMENT MODAL COMPONENT (UPDATED)
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

  // FIXED UPDATE FUNCTION (Prevents Blinking)
  const change = (e) => {
    const { name, value } = e.target;
    setPaymentForm((prev) => ({ ...prev, [name]: value }));
  };

  // FILE UPLOAD FIX
  const uploadFile = (e) => {
    setPaymentForm((prev) => ({ ...prev, screenshot: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData();
    formData.append("name", paymentForm.name);
    formData.append("utr", paymentForm.utr);
    formData.append("phone", paymentForm.phone);
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
        className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center p-4 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeModal}
      >
        <motion.div
          className="bg-white rounded-2xl shadow-2xl max-w-full sm:max-w-lg lg:max-w-4xl w-full p-4 sm:p-6 lg:p-8 relative border border-gray-200 overflow-y-auto max-h-[90vh]"
          initial={{ scale: 0.9, y: 50, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 50, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-800 transition duration-150"
            onClick={closeModal}
          >
            <XMarkIcon className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>

          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 border-b pb-4 mb-6">
            Complete Payment –{" "}
            <span className="text-blue-600 font-extrabold">
              {selectedPlan.plan}
            </span>
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* QR Section */}
            <div className="lg:col-span-2 bg-gray-50 p-6 rounded-xl border flex flex-col items-center">
              <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">
                Total Amount:{" "}
                <span className="text-red-600">
                  {selectedPlan.currency}
                  {selectedPlan.amount}
                </span>
              </h4>

              <img
                src={`${MOCK_QR}${encodeURIComponent(
                  `upi://pay?pa=${MOCK_UPI}&pn=Merchant&am=${selectedPlan.amount}&cu=INR`
                )}`}
                alt="QR Code"
                className="w-48 h-48 sm:w-52 sm:h-52 mx-auto border-4 border-white rounded-xl shadow-lg"
              />

              <p className="text-base text-gray-700 mt-4 font-semibold text-center">
                Scan using GPay / PhonePe / Paytm
              </p>

              <div className="mt-4 p-3 bg-white border rounded-lg w-full text-center">
                <p className="text-sm font-medium text-gray-800">
                  UPI ID (Tap to Copy):
                </p>
                <p
                  className="text-blue-600 font-bold text-base select-all cursor-pointer"
                  onClick={() => navigator.clipboard.writeText(MOCK_UPI)}
                  title="Click to copy UPI ID"
                >
                  {MOCK_UPI}
                </p>
              </div>
            </div>

            {/* Form Section */}
            <div className="lg:col-span-3">
              <h4 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">
                Confirm Payment Details
              </h4>

              {status === "success" ? (
                <div className="text-center p-8 bg-green-50 rounded-xl border border-green-300">
                  <CheckCircleIcon className="w-14 h-14 text-green-600 mx-auto" />
                  <h5 className="text-2xl font-bold mt-4 text-green-800">
                    Payment Submission Successful!
                  </h5>
                  <p className="text-gray-600 mt-2">
                    Your details have been submitted. We will verify the payment
                    shortly.
                  </p>
                  <button
                    onClick={closeModal}
                    className="mt-6 px-8 py-2.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition duration-200 shadow-md"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  {/* Name */}
                  <div>
                    <label className="font-medium text-gray-700 block mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={paymentForm.name}
                      onChange={change}
                      placeholder="Enter full name"
                      required
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* UTR Number */}
                  <div>
                    <label className="font-medium text-gray-700 block mb-1">
                      UTR / Transaction ID
                    </label>
                    <input
                      type="text"
                      name="utr"
                      value={paymentForm.utr}
                      onChange={change}
                      placeholder="e.g. 1234567890"
                      required
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="font-medium text-gray-700 block mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={paymentForm.phone}
                      onChange={change}
                      placeholder="Enter your phone number"
                      required
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Screenshot */}
                  <div>
                    <label className="font-medium text-gray-700 block mb-1">
                      Payment Screenshot
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={uploadFile}
                      required
                      className="w-full border border-gray-300 rounded-xl p-3 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl text-lg font-bold bg-blue-600 text-white hover:bg-blue-700 transition duration-200 shadow-lg disabled:bg-gray-400"
                    disabled={status === "loading"}
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
    setPaymentForm({
      name: "",
      utr: "",
      phone: "",
      screenshot: null,
    });
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
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-500 text-transparent bg-clip-text sm:text-4xl">
            Everything You Need, At the Right Price
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-700 font-medium max-w-2xl mx-auto">
            Premium features. Simple pricing. Built for businesses.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-md border hover:shadow-xl transition cursor-pointer flex flex-col h-full"
              variants={cardVariant}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              <div className="text-center flex-grow">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {item.plan}
                </h3>
                <p className="text-4xl sm:text-5xl font-extrabold mt-4">
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
                  <li key={i} className="flex items-start text-sm sm:text-base">
                    <CheckCircleIcon className="w-5 h-5 text-blue-600 mr-2" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => openPopup(item)}
                className="w-full py-3 rounded-xl text-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition duration-200"
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
