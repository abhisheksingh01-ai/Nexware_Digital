import React from "react";
import { motion } from "framer-motion";
import AboutPage from "../../../assets/AboutPage.jpg";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";


export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-0 pb-3 lg:pt-0 lg:pb-6">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-20 -top-20 w-64 h-64 bg-gradient-to-tr from-[#e8f1ff] to-[#f5faff] rounded-full opacity-60 blur-3xl"></div>
      <div className="pointer-events-none absolute -right-20 -bottom-20 w-80 h-80 bg-gradient-to-br from-[#fff0f5] to-[#fff8f0] rounded-full opacity-60 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-10">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2b7bff] via-[#7dd3fc] to-[#8b5cf6]">
                Building the Future of Digital Experience
              </span>
            </h2>

            <p className="text-lg text-slate-700 max-w-2xl mb-6">
              At Nexware Digital, we help businesses unlock their true digital
              potential. From crafting visually stunning websites to delivering
              seamless UI/UX experiences, we build smart, scalable solutions
              that drive real growth. Backed by innovation and modern
              technology, we empower brands to stand out and succeed in a
              digital-first world.
            </p>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#2b7bff] text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 active:scale-95"
            >
              View Our Portfolio
              <ArrowRight size={20} className="mt-[1px]" />
            </Link>
          </motion.div>

          {/* Right Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
            className="md:col-span-5 flex justify-center md:justify-end"
          >
            <div className="w-full max-w-sm lg:max-w-md bg-white/80 backdrop-blur-sm rounded-3xl p-5 shadow-2xl ring-1 ring-slate-100 hover:-translate-y-1 transition-transform duration-300">
              <img
                src={AboutPage}
                alt="Team collaboration illustration"
                className="w-full h-64 object-cover rounded-xl mb-3"
              />
              <p className="text-slate-600 text-sm">
                Our expert team collaborates with modern tools to turn your
                vision into a digital masterpiece.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
