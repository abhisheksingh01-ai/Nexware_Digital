import React from "react";
import { motion } from "framer-motion";
import AboutImg from "../../../assets/AboutUsImg.png";
import { ArrowRight } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-white py-12 lg:py-16">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-20 -top-20 w-64 h-64 bg-gradient-to-tr from-[#e8f1ff] to-[#f5faff] rounded-full opacity-60 blur-3xl"></div>
      <div className="pointer-events-none absolute -right-20 -bottom-20 w-80 h-80 bg-gradient-to-br from-[#fff0f5] to-[#fff8f0] rounded-full opacity-60 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-12">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7"
          >
            <h1 className="inline-flex items-center gap-2 text-sm font-semibold uppercase text-[#2b7bff] tracking-widest mb-3">
              <span className="inline-block w-2 h-2 rounded-full bg-[#2b7bff] shadow-md"></span>
              Our Story & Values
            </h1>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900 mb-6">
              Building the Future of Digital Experience
            </h2>

            <p className="text-lg text-slate-700 max-w-2xl mb-8">
              At Nexware Digital, we bring together creativity, technology, and strategy to build experiences that empower businesses and inspire audiences.
            </p>

            <button className="flex items-center gap-2 px-8 py-3 bg-[#2b7bff] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-transform duration-300 hover:-translate-y-1">
              View Our Portfolio
              <ArrowRight size={20} />
            </button>
          </motion.div>

          {/* Right Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
            className="md:col-span-5 flex justify-center md:justify-end"
          >
            <div className="w-full max-w-sm lg:max-w-md bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-2xl ring-1 ring-slate-100 hover:-translate-y-1 transition-transform duration-300">
              <img
                src={AboutImg}
                alt="Team collaboration illustration"
                className="w-full h-64 object-cover rounded-xl mb-4"
              />
              <p className="text-slate-600 text-sm">
                Our expert team collaborates with modern tools to turn your vision into a digital masterpiece.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}