import React from "react";
import { motion } from "framer-motion";
import msgImg from "../../../assets/msg.png";

export default function ContactUsMain() {
  return (
    <section className="relative overflow-hidden bg-white py-10 lg:py-16">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-24 -top-24 w-72 h-72 bg-gradient-to-tr from-[#cfe9ff] to-[#e7f0ff] rounded-full opacity-60 blur-3xl"></div>
      <div className="pointer-events-none absolute -right-24 -bottom-24 w-96 h-96 bg-gradient-to-br from-[#ffe7f0] to-[#fff2e6] rounded-full opacity-60 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left: Text + CTA + Info Cards */}
          <div className="relative z-10">
            <motion.h5
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="inline-flex items-center gap-3 text-sm font-semibold uppercase text-[#2b7bff] tracking-widest mb-4"
            >
              <span className="inline-block w-2 h-2 rounded-full bg-[#2b7bff] shadow-md" />
              Let's Talk
            </motion.h5>

            <motion.h2
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.12 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-4"
            >
              Get in touch with our team
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.18 }}
              className="text-lg text-slate-700 max-w-xl mb-6"
            >
              Ready to start your project? Share a few details and our team will reach out with a plan, timeline and estimate. Fast response, friendly experts.
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
                hello@yourcompany.com
              </a>
            </motion.div>

            {/* Contact quick cards */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.32 }}
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md"
            >
              <div className="rounded-xl bg-white p-4 shadow-md ring-1 ring-slate-100">
                <p className="text-xs uppercase text-slate-500">Phone</p>
                <p className="font-semibold text-slate-800">+91 98765 43210</p>
                <p className="text-sm text-slate-500 mt-1">Mon - Fri, 9am - 6pm</p>
              </div>

              <div className="rounded-xl bg-white p-4 shadow-md ring-1 ring-slate-100">
                <p className="text-xs uppercase text-slate-500">Office</p>
                <p className="font-semibold text-slate-800">123 Business Street, New Delhi</p>
                <p className="text-sm text-slate-500 mt-1">Or schedule a meeting</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Illustration card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.14 }}
            className="relative z-10 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-sm bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-2xl ring-1 ring-slate-100 transform hover:-translate-y-1 transition">
              <img
                src={msgImg}
                alt="Message Illustration"
                className="w-full h-52 object-contain mb-4"
              />

              <div className="mt-2">
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
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 0 1 2-2h3.6a1 1 0 0 1 .97.757l.7 2.8a1 1 0 0 1-.217.91L8.4 10.6a16 16 0 0 0 5 5l2.23-1.44a1 1 0 0 1 .91-.217l2.8.7A1 1 0 0 1 21 17.4V21a2 2 0 0 1-2 2H19c-9.94 0-16-6.06-16-16V5z" />
                    </svg>
                    +91 98765 43210
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Decorative border / CTA strip */}
        <div className="mt-10 rounded-xl bg-gradient-to-r from-white to-white/0 p-1">
          <div className="rounded-lg bg-white shadow-inner px-6 py-4 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm text-slate-500">Prefer a quick chat?</p>
              <p className="font-semibold text-slate-900">Book a 15-minute call — free</p>
            </div>
            <a
              href="#book"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#10b981] text-white px-4 py-2 font-medium shadow"
            >
              Book Now
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
