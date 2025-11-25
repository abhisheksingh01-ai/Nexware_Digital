import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

export default function FormButton({ btn = "Get Started Now" }) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    alert(
      "Thank you! Your inquiry has been submitted. We will contact you shortly."
    );

    setIsSubmitting(false);
    setOpen(false);
  };

  return (
    <>
      {/* BUTTON */}
      <motion.button
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(true)}
        className="px-9 py-3 font-semibold rounded-xl bg-indigo-600 text-white shadow-[0_0_25px_rgba(99,102,241,0.5)] hover:shadow-[0_0_35px_rgba(99,102,241,0.8)] transition-all duration-300 font-sans"
      >
        {btn}
      </motion.button>

      {/* MODAL */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex justify-center items-center p-3 z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl w-full 
                         max-w-sm sm:max-w-md lg:max-w-lg 
                         relative font-sans"
            >
              {/* Close Button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-100 shadow-sm transition"
              >
                <XMarkIcon className="h-5 w-5 text-gray-700" />
              </button>

              {/* MODAL HEADER */}
              <div className="p-6 pt-10 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 rounded-t-3xl text-white text-center">
                <h2 className="text-xl sm:text-2xl font-bold">Let’s Begin</h2>
                <p className="text-indigo-100 text-sm">
                  Fill your details & get a response within 24 hours.
                </p>
              </div>

              {/* FORM */}
              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                <Input label="Full Name" type="text" required />
                <Input label="Business Email" type="email" required />
                <Input label="Phone Number" type="tel" required />

                <FloatingField label="Your Query">
                  <textarea
                    required
                    rows="3"
                    placeholder=" "
                    className="peer w-full px-4 py-3 border border-gray-300 rounded-xl 
                               focus:ring-2 focus:ring-indigo-600 outline-none transition 
                               bg-white resize-none"
                  />
                </FloatingField>

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  disabled={isSubmitting}
                  type="submit"
                  className={`w-full py-3 rounded-xl font-semibold shadow-lg transition flex items-center justify-center ${
                    isSubmitting
                      ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                      : "bg-indigo-600 text-white hover:bg-indigo-700"
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <span className="loader"></span> Sending...
                    </div>
                  ) : (
                    "Submit Request"
                  )}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* STYLES */}
      <style>
        {`
          .floating-label {
            position: absolute;
            top: 50%;
            left: 16px;
            transform: translateY(-50%);
            padding: 0 4px;
            color: #6b7280;
            transition: 0.2s ease;
            pointer-events: none;
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
          @keyframes spin { to { transform: rotate(360deg); } }
        `}
      </style>
    </>
  );
}

/* Input Component */
function Input({ label, type, required }) {
  return (
    <FloatingField label={label}>
      <input
        type={type}
        required={required}
        placeholder=" "
        className="peer w-full px-4 py-3 border border-gray-300 rounded-xl 
                   focus:ring-2 focus:ring-indigo-600 outline-none transition bg-white"
      />
    </FloatingField>
  );
}

/* Floating Label Wrapper */
function FloatingField({ label, children }) {
  return (
    <div className="relative font-sans">
      {children}
      <label className="floating-label bg-white">{label}</label>
    </div>
  );
}
