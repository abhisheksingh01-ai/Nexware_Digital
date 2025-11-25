import React from "react";

export default function Hero() {
  return (
    <section className="max-w-3xl mx-auto text-center py-10 px-6">
      <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2b7bff] via-[#7dd3fc] to-[#8b5cf6]">
          Portfolio
        </span>
      </h2>

      <p className="text-slate-600 text-sm md:text-base max-w-xl mx-auto">
        A curated showcase of our latest work — beautiful interfaces, fast
        delivery and measurable business impact.
      </p>

      {/* Decorative underline with subtle animation */}
      <div className="mt-6 flex justify-center">
        <div className="w-24 h-1 rounded-full bg-gradient-to-r from-[#2b7bff] via-[#7dd3fc] to-[#8b5cf6] shadow-sm animate-pulse-slow" />
      </div>
    </section>
  );
}
