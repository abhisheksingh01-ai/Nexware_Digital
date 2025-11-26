import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function FormButton({ btn = "Get Started Now" }) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form Inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch(
        "https://nexware-digital-server.vercel.app/api/contact/contact-detail",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (res.ok) {
        alert("Thank you! Your inquiry has been submitted.");
        setFormData({ name: "", email: "", message: "" });
        setOpen(false);
      } else {
        alert(data.error || "Something went wrong. Try again!");
      }
    } catch (error) {
      console.error(error);
      alert("Server error! Please try again later.");
    }

    setIsSubmitting(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="relative px-9 py-3 font-semibold rounded-xl bg-indigo-600 text-white shadow-[0_0_25px_rgba(99,102,241,0.5)] hover:shadow-[0_0_35px_rgba(99,102,241,0.7)] transition-all duration-300 hover:scale-105"
      >
        <span className="relative z-10">{btn}</span>
      </button>

      {open && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex justify-center items-center p-4 z-50 animate-fadeIn"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl w-full max-w-md relative animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 p-2 rounded-full bg-white/50 hover:bg-white border border-gray-100 text-gray-700 shadow-sm transition z-10"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>

            <div className="p-6 pt-10 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 rounded-t-3xl text-white text-center shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
              <h2 className="text-2xl font-bold mb-1">Let’s Begin</h2>
              <p className="text-indigo-100 text-sm">
                Fill your details & get a response within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              <Input
                label="Full Name"
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
              />

              <Input
                label="Business Email"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />

              <div className="relative">
                <textarea
                  name="message"
                  required
                  rows="3"
                  placeholder=" "
                  value={formData.message}
                  onChange={handleChange}
                  className="peer w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none transition bg-white"
                ></textarea>
                <label className="floating-label bg-white">Your Query</label>
              </div>

              <button
                type="submit"
                className={`w-full py-3 rounded-xl font-semibold shadow-lg transition duration-300 flex items-center justify-center ${
                  isSubmitting
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-indigo-600 text-white hover:bg-indigo-700"
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <span className="loader"></span> Sending...
                  </div>
                ) : (
                  "Submit Request"
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      <style>
        {`
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out;
          }
          .animate-scaleIn {
            animation: scaleIn 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes scaleIn {
            0% { transform: scale(0.9); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }

          .floating-label {
            position: absolute;
            top: 50%;
            left: 16px;
            transform: translateY(-50%);
            padding: 0 4px;
            color: #6b7280;
            transition: 0.2s ease;
            pointer-events: none;
            line-height: 1;
          }
          textarea:focus + .floating-label,
          textarea:not(:placeholder-shown) + .floating-label,
          input:focus + .floating-label,
          input:not(:placeholder-shown) + .floating-label {
            top: -8px;
            font-size: 12px;
            color: #4f46e5;
            background-color: white;
          }

          .loader {
            border: 3px solid rgba(255,255,255,0.4);
            border-top: 3px solid white;
            border-radius: 50%;
            width: 16px;
            height: 16px;
            animation: spin 0.8s linear infinite;
          }
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </>
  );
}

function Input({ label, type, name, required, value, onChange }) {
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        required={required}
        placeholder=" "
        value={value}
        onChange={onChange}
        className="peer w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none transition bg-white"
      />
      <label className="floating-label bg-white">{label}</label>
    </div>
  );
}
