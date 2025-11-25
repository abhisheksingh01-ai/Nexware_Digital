import React from "react";
import { motion } from "framer-motion";
import FormButton from "../Button/FormButton";

export default function Header({
  imageUrl = "https://assets.designhill.com/design-blog/wp-content/uploads/2019/03/Are-You-Ready-To-Start-Your-Own-Business-1.jpg",
  onGetStarted,
}) {
  return (
    <header className="bg-white py-10 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

          {/* LEFT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center lg:text-left space-y-5"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Grow Your Business
              <br />
              <span
                className="bg-clip-text text-transparent bg-gradient-to-r 
                from-[#2b7bff] via-[#7dd3fc] to-[#8b5cf6]
                font-semibold text-3xl sm:text-4xl lg:text-5xl"
              >
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

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center lg:justify-end relative"
          >
            <div className="relative w-64 sm:w-72 lg:w-[380px]">

              {/* white glow behind image */}
              <div className="absolute -inset-4 bg-white blur-3xl opacity-60 rounded-3xl animate-pulse"></div>

              <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-gray-200">
                <img
                  src={imageUrl}
                  alt="Website Design"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </header>
  );
}
