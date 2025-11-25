import React from "react";
import PricingIllustration from "../../../../assets/project_01.png"; // replace with your image

export default function PricingHero() {
  return (
    <section className="relative overflow-hidden bg-white py-10 lg:py-16">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-24 -top-24 w-72 h-72 bg-gradient-to-tr from-[#e6f6ff] to-[#f0f9ff] rounded-full opacity-60 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 w-96 h-96 bg-gradient-to-br from-[#fff7f0] to-[#fffaf7] rounded-full opacity-60 blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-8">

        {/* Left: Text */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="inline-block w-2 h-2 rounded-full bg-[#2b7bff] shadow-md" />
            <span className="text-sm font-semibold uppercase text-[#2b7bff] tracking-widest">Pricing</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            Choose the perfect plan for your business
          </h1>

          <p className="text-lg text-slate-700 max-w-xl mb-6">
            Simple, transparent pricing designed to scale with you — from startup to enterprise. Pick what fits and we’ll handle the rest.
          </p>

          <div className="flex flex-wrap gap-3 items-center">
            <a href="#pricing" className="inline-flex items-center gap-2 rounded-2xl bg-[#2b7bff] text-white px-5 py-3 font-semibold shadow-lg hover:shadow-2xl transition">Get Started</a>
            <a href="#compare" className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 transition">Compare Plans</a>
          </div>

          {/* Quick highlights */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-md">
            <div className="rounded-xl bg-white p-3 shadow ring-1 ring-slate-100 text-center">
              <p className="text-xs text-slate-500">SLA</p>
              <p className="font-semibold text-slate-900">99.9% Uptime</p>
            </div>
            <div className="rounded-xl bg-white p-3 shadow ring-1 ring-slate-100 text-center">
              <p className="text-xs text-slate-500">Support</p>
              <p className="font-semibold text-slate-900">Priority Email</p>
            </div>
            <div className="rounded-xl bg-white p-3 shadow ring-1 ring-slate-100 text-center">
              <p className="text-xs text-slate-500">Payment</p>
              <p className="font-semibold text-slate-900">Flexible Billing</p>
            </div>
          </div>
        </div>

        {/* Right: Illustration Card */}
        <div className="relative z-10 flex justify-center md:justify-end">
          <div className="w-full max-w-sm bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-2xl ring-1 ring-slate-100 transform hover:-translate-y-1 transition">
            <img src={PricingIllustration} alt="Pricing illustration" className="w-full h-52 object-contain mb-4" />

            <div className="text-center">
              <p className="text-sm text-slate-600">Start with our most popular plan</p>
              <div className="mt-3 flex items-center justify-center gap-3">
                <div className="text-2xl font-extrabold">₹12,999</div>
                <div className="text-sm text-slate-500">/ one-time</div>
              </div>

              <div className="mt-4 flex items-center gap-3 justify-center">
                <a href="#buy" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#10b981] text-white px-4 py-2 font-medium shadow">Buy Now</a>
                <a href="#demo" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700">Request Demo</a>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom CTA strip */}
      <div className="mt-10 rounded-xl p-1 bg-gradient-to-r from-white to-white/60">
        <div className="rounded-lg bg-white shadow-inner px-6 py-4 flex items-center justify-between gap-4 max-w-6xl mx-auto">
          <div>
            <p className="text-sm text-slate-500">Not sure which plan fits?</p>
            <p className="font-semibold text-slate-900">Book a quick consult — 15 mins</p>
          </div>
          <a href="#book" className="inline-flex items-center gap-2 rounded-2xl bg-[#2b7bff] text-white px-4 py-2 font-medium shadow">Book Now</a>
        </div>
      </div>
    </section>
  );
}
