import React from "react";

export default function BottomLeft() {
  return (
    <section className="relative overflow-hidden bg-white py-6 px-6 max-w-6xl mx-auto">

      {/* Decorative background accents */}
      <div className="pointer-events-none absolute -top-16 -left-16 w-56 h-56 bg-gradient-to-tr from-blue-100 to-blue-50 rounded-full blur-3xl opacity-60"></div>
      <div className="pointer-events-none absolute -bottom-16 -right-16 w-64 h-64 bg-gradient-to-br from-purple-100 to-blue-50 rounded-full blur-3xl opacity-60"></div>

      <div className="relative z-10">
        <h3 className="text-2xl font-extrabold text-slate-900 mb-6">
          Payment & Project Terms
        </h3>

        {/* Two Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Payment Card */}
          <div className="p-5 bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl border border-slate-100 hover:shadow-2xl transition">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 text-xl font-bold shadow-sm">
                ₹
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-900">
                  Payment Schedule
                </h4>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                  50% upfront and remaining 50% on project completion.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Card */}
          <div className="p-5 bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl border border-slate-100 hover:shadow-2xl transition">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700 text-xl font-bold shadow-sm">
                ⏳
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-900">
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
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-5 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
          
          <div>
            <p className="text-white text-xl font-semibold">
              Ready to start your project?
            </p>
            <p className="text-blue-100 text-sm">
              Let’s build something exceptional together.
            </p>
          </div>

          <button className="bg-white text-blue-600 font-semibold px-6 py-2.5 rounded-xl shadow hover:bg-blue-50 transition">
            Get In Touch
          </button>

        </div>
      </div>
    </section>
  );
}
