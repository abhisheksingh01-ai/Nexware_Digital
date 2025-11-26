import React from "react";
import { motion } from "framer-motion";
import msgImg from "../../../assets/msg.png";
import FormButton from '../Button/FormButton';

export default function ContactUsMain({onGetStarted}) {
  return (
    <section className="relative overflow-hidden bg-white pt-0 pb-10 lg:pt-0 lg:pb-14">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-24 -top-24 w-72 h-72 bg-gradient-to-tr from-[#cfe9ff] to-[#e7f0ff] rounded-full opacity-60 blur-3xl"></div>
      <div className="pointer-events-none absolute -right-24 -bottom-24 w-96 h-96 bg-gradient-to-br from-[#ffe7f0] to-[#fff2e6] rounded-full opacity-60 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div className="relative z-10">

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2b7bff] via-[#7dd3fc] to-[#8b5cf6]">
                Get in touch with our team
              </span>
            </h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.18 }}
              className="text-lg text-slate-700 max-w-xl mb-6"
            >
              Ready to start your project? Share a few details and our team will reach out with a plan, timeline and estimate.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#contact-form"
                className="inline-flex items-center gap-3 rounded-2xl bg-[#2b7bff] text-white px-5 py-3 font-semibold shadow-lg hover:shadow-2xl transform hover:-translate-y-0.5 transition"
              >
                Contact Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <a
                href="mailto:hello@yourcompany.com"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
              >
                itteams@technexwaredigital.com
              </a>
            </motion.div>

            {/* Quick Cards */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.32 }}
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md"
            >
              <div className="rounded-xl bg-white p-4 shadow-md ring-1 ring-slate-100">
                <p className="text-xs uppercase text-slate-500">Phone</p>
                <p className="font-semibold text-slate-800">+91 89290 82629</p>
                <p className="text-sm text-slate-500 mt-1">Mon - Fri, 9am - 6pm</p>
              </div>

              <div className="rounded-xl bg-white p-4 shadow-md ring-1 ring-slate-100">
                <p className="text-xs uppercase text-slate-500">Office</p>
                <p className="font-semibold text-slate-800">E Block, Noida Sector 16</p>
                <p className="text-sm text-slate-500 mt-1">Or schedule a meeting</p>
              </div>
            </motion.div>
          </div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.14 }}
            className="relative z-10 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-sm bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-2xl ring-1 ring-slate-100 hover:-translate-y-1 transition">
              <img src={msgImg} alt="Message Illustration" className="w-full h-52 object-contain mb-4" />

              <div>
                <p className="text-sm text-slate-600">Have a brief? Send us a message and we will reply within 24 hours.</p>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <a
                    href="#contact-form"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#2b7bff] text-white px-4 py-2 font-medium shadow hover:opacity-95 transition"
                  >
                    Start Conversation
                  </a>

                  <button
                    aria-label="Call"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700"
                  >
                    +91 89290 82629
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Strip */}
        <div className="mt-10 rounded-xl p-1 bg-gradient-to-r from-white to-white/0">
          <div className="rounded-lg bg-white shadow-inner px-6 py-4 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm text-slate-500">Prefer a quick chat?</p>
              <p className="font-semibold text-slate-900">Book a 15-minute call — free</p>
            </div>

            <a
              href="#book"
            >
             
              <FormButton btn="Book Now" onClick={onGetStarted} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}