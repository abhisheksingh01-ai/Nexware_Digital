// PricingHero.jsx
import React from "react";

export default function PricingHero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
      <div>
        <h1 className="text-4xl font-extrabold mb-4">Pricing</h1>
        <p className="text-2xl font-semibold mb-2">Choose the Right Plan for Your Website</p>
        <p className="text-gray-600 mb-6 max-w-lg">
          We offer three packages to suit your budget and business needs.
        </p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Get Started</button>
      </div>

      <div className="flex justify-center md:justify-end">
        <img
          src={"/mnt/data/1f67cd7b-7761-40dc-9a17-87b85a992c96.png"}
          alt="Pricing illustration"
          className="w-64 h-auto object-contain"
        />
      </div>
    </section>
  );
}
