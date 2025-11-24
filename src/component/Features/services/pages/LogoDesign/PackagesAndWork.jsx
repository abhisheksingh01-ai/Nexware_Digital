// PackagesAndWork.jsx
import React from "react";

const PackageCard = ({ title, priceLabel, priceSmall }) => (
  <div className="border rounded-lg p-4 shadow-sm bg-white">
    <div className="text-sm text-gray-500">{title}</div>
    <div className="mt-3 font-semibold text-xl">{priceLabel}</div>
    <div className="mt-4">
      <button className="w-full py-2 rounded-md bg-blue-600 text-white">
        {priceSmall}
      </button>
    </div>
  </div>
);

export default function PackagesAndWork() {
  const logos = ["ATLAS", "Hexa", "RORN", "Peak"];

  return (
    <section className="max-w-6xl mx-auto px-6 py-8">
      {/* Packages */}
      <div>
        <h4 className="font-semibold text-lg mb-4">Packages</h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <PackageCard title="Basic Logo" priceLabel="₹1,999" priceSmall="₹199" />
          <PackageCard title="Standard Logo" priceLabel="₹4,999" priceSmall="₹4,999" />
          <PackageCard title="Premium Logo" priceLabel="₹9,999+" priceSmall="₹9,999+" />
        </div>
      </div>

      {/* Our Work */}
      <div className="mt-8">
        <h4 className="font-semibold text-lg mb-4">Our Work</h4>
        <div className="flex items-center gap-4 flex-wrap">
          {logos.map((l) => (
            <div
              key={l}
              className="border rounded-lg px-4 py-3 min-w-[90px] text-center text-sm text-gray-700"
            >
              {l}
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-8 bg-gray-50 p-6 rounded-lg flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <h5 className="font-semibold text-lg">Ready to Create Your Logo?</h5>
        </div>
        <div>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">Get Your Logo Today</button>
        </div>
      </div>
    </section>
  );
}