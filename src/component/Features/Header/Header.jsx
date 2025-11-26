// HeaderSpotlight.jsx
import React from "react";
import { motion } from "framer-motion";
import FormButton from "../Button/FormButton";
import HomePage from "../../../assets/HomePage.png"; // adjust path/casing if required

export default function HeaderSpotlight({ imageUrl = HomePage, onGetStarted }) {
  return (
    <header className="bg-white py-10 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85 }}
            className="text-center lg:text-left space-y-5"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Grow Your Business
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2b7bff] via-[#7dd3fc] to-[#8b5cf6] font-semibold">
                with a Stunning Website
              </span>
            </h1>

            <p className="text-gray-600 text-sm max-w-md mx-auto lg:mx-0">
              We design modern websites and provide digital marketing solutions
              that help your business shine in the online world.
            </p>

            <div className="pt-2 flex justify-center lg:justify-start">
              <FormButton btn="Get Start Now" onClick={onGetStarted} />
            </div>
          </motion.div>

          {/* RIGHT - Spotlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center lg:justify-end relative"
          >
            <div className="relative w-64 sm:w-72 lg:w-[380px]">
              {/* Spotlight background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-80 blur-2xl rounded-3xl -z-10" />

              <div className="relative rounded-[28px] overflow-hidden border border-slate-200 shadow-2xl">
                <img
                  src={imageUrl}
                  alt="Website"
                  className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
