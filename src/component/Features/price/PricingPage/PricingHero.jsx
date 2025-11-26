import React, { useState } from "react";
import PricingIllustration from "../../../../assets/PricingPage.jpg"; // confirm path
import FormButton from "../../Button/FormButton";
import { Link } from "react-router-dom";
import GoogleAdsPage from "../Price";


// Small config / constants so it's easy to update later
const PRICE = "9,999";
const CURRENCY = "₹";
const BILLING_TERM = "/ one-time";

export default function PricingHero({ onGetStarted }) {
  const [imgError, setImgError] = useState(false);

  // fallback svg base64 (small neutral placeholder) to avoid broken image UI
  const fallback =
    "data:image/svg+xml;base64," +
    btoa(
      `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='720' viewBox='0 0 1200 720' preserveAspectRatio='xMidYMid slice'>
         <rect width='100%' height='100%' fill='#F8FAFC'/>
         <g fill='#E2E8F0'><rect x='80' y='120' width='1040' height='480' rx='20'/></g>
         <text x='50%' y='52%' dominant-baseline='middle' text-anchor='middle' fill='#CBD5E1' font-size='22'>Illustration unavailable</text>
       </svg>`
    );

  return (
    <section
      aria-labelledby="pricing-hero-title"
      className="relative overflow-hidden bg-white py-10 lg:py-16"
    >
      {/* Decorative blobs (purely visual, pointer-events-none) */}
      <div className="pointer-events-none absolute -left-24 -top-24 w-72 h-72 bg-gradient-to-tr from-[#e6f6ff] to-[#f0f9ff] rounded-full opacity-60 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 w-96 h-96 bg-gradient-to-br from-[#fff7f0] to-[#fffaf7] rounded-full opacity-60 blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Left: Text content */}
        <header className="relative z-10">
          <h2 id="pricing-hero-title" className="sr-only">
            Pricing — Choose the perfect plan for your business
          </h2>

          <div className="mb-3">
            {/* Reserved for micro-label if needed */}
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2b7bff] via-[#7dd3fc] to-[#8b5cf6]">
              Choose the perfect plan for your business
            </span>
          </h1>

          <p className="text-lg text-slate-700 max-w-xl mb-6">
            Simple, transparent pricing designed to scale with you — from startup
            to enterprise. Pick what fits and we’ll handle the rest.
          </p>

          <div className="flex flex-wrap gap-3 items-center">
            {/* <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#2b7bff] text-white px-5 py-3 font-semibold shadow-lg hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2b7bff] transition"
            >
              Get Started
            </a> */}
            <Link
                  to="/buy"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#2b7bff] text-white px-5 py-3 font-semibold shadow-lg hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2b7bff] transition"
                >
                  Buy Now
                </Link>

            {/* <a
              href="#compare"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-200"
            >
              Compare Plans
            </a> */}
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
        </header>

        {/* Right: Illustration card */}
        <figure className="relative z-10 flex justify-center md:justify-end">
          <div className="w-full max-w-sm bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-2xl ring-1 ring-slate-100 transform hover:-translate-y-1 transition">
            <picture>
              {/* If you later add multiple sizes, add <source srcSet=... media=... /> here */}
              <img
                src={imgError ? fallback : PricingIllustration}
                alt="Illustration showing pricing and plans"
                className="w-full h-52 object-contain mb-4"
                loading="lazy"
                decoding="async"
                onError={() => setImgError(true)}
                // sizes attribute helps browser pick the right image when srcSet is used
                sizes="(max-width: 768px) 90vw, 320px"
              />
            </picture>

            <figcaption className="text-center">
              <p className="text-sm text-slate-600">Start with our most popular plan</p>

              <div className="mt-3 flex items-center justify-center gap-3">
                <div className="text-2xl font-extrabold" aria-hidden>
                  {CURRENCY}
                  {PRICE}
                </div>
                <div className="text-sm text-slate-500">{BILLING_TERM}</div>
              </div>

              <div className="mt-4 flex items-center gap-3 justify-center">
                <Link
                  to="/buy"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#10b981] text-white px-4 py-2 font-medium shadow hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#10b981]"
                >
                  Buy Now
                </Link>

                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-200"
                >
                  View Demo
                </Link>

              </div>
            </figcaption>
          </div>
        </figure>
      </div>

      {/* Bottom CTA strip */}
      <div className="mt-10 rounded-xl p-1 bg-gradient-to-r from-white to-white/60">
        <div className="rounded-lg bg-white shadow-inner px-6 py-4 flex items-center justify-between gap-4 max-w-6xl mx-auto">
          <div>
            <p className="text-sm text-slate-500">Not sure which plan fits?</p>
            <p className="font-semibold text-slate-900">Book a quick consult — 15 mins</p>
          </div>
          <a
            // href="#book"
          // className="inline-flex items-center gap-2 rounded-2xl bg-[#2b7bff] text-white px-4 py-2 font-medium shadow hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2b7bff]"
          >
            {/* Book Now */}
            <FormButton btn="Book Now" onClick={onGetStarted} />
          </a>
        </div>
      </div>
    </section>
  );
}