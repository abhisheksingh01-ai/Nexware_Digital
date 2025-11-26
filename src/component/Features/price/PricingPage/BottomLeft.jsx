import React from "react";
import FormButton from "../../Button/FormButton";

export default function BottomLeft({ onGetStarted }) {
  return (
    <section className="relative overflow-hidden bg-white py-8 px-4 sm:px-6 max-w-6xl mx-auto">

      {/* Decorative Background */}
      <div className="pointer-events-none absolute -top-20 -left-12 w-60 sm:w-72 h-60 sm:h-72 bg-gradient-to-tr from-blue-50 to-blue-100 rounded-full blur-3xl opacity-60"></div>
      <div className="pointer-events-none absolute -bottom-24 -right-10 w-64 sm:w-80 h-64 sm:h-80 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-full blur-3xl opacity-50"></div>

      <div className="relative z-10">
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-6">
          Payment & Project Terms
        </h3>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">

          {/* Payment Card */}
          <div className="p-5 sm:p-6 bg-white/90 backdrop-blur-sm shadow-md rounded-2xl border border-slate-100 hover:shadow-2xl transition transform hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-blue-700 text-lg sm:text-xl font-bold shadow-sm">
                ₹
              </div>

              <div>
                <h4 className="text-base sm:text-lg font-semibold text-slate-900">
                  Payment Schedule
                </h4>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                  50% upfront and remaining 50% on project completion.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Card */}
          <div className="p-5 sm:p-6 bg-white/90 backdrop-blur-sm shadow-md rounded-2xl border border-slate-100 hover:shadow-2xl transition transform hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50 flex items-center justify-center text-indigo-700 text-lg sm:text-xl font-bold shadow-sm">
                ⏳
              </div>

              <div>
                <h4 className="text-base sm:text-lg font-semibold text-slate-900">
                  Project Timeline
                </h4>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                  Project typically completes in 5–6 weeks depending on features.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-8 rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 md:gap-4 shadow-xl bg-gradient-to-r from-white/60 to-white/50 ring-1 ring-blue-100 border border-transparent">

          {/* Left Content */}
          <div className="flex items-start md:items-center gap-4 w-full md:w-auto">
            <div className="hidden md:flex w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 items-center justify-center text-white text-xl shadow-lg">
              🚀
            </div>

            <div>
              <p className="text-slate-900 text-lg sm:text-xl font-semibold leading-snug">
                Ready to start your project?
              </p>
              <p className="text-slate-600 text-sm mt-1">
                Let’s build something exceptional together — quick kickoff, transparent terms.
              </p>
            </div>
          </div>

          {/* Right Button */}
          <div className="flex justify-start md:justify-end w-full md:w-auto">
            <div className="rounded-xl bg-gradient-to-r from-white to-white/95 p-[2px] shadow-md w-full md:w-auto">
              <FormButton btn="Book Now" onClick={onGetStarted} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
