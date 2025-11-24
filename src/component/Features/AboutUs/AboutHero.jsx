// AboutHero.jsx
import React from "react";
// import AboutImg from "../../../assets/AboutUsImg.png"
import AboutImg from "../../../assets/AboutUsImg.png";

export default function AboutHero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
      <div>
        <h1 className="text-4xl font-extrabold mb-4">About Us</h1>
        <p className="text-gray-600 max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="flex justify-center md:justify-end">
        <img
          src={AboutImg}
          alt="About illustration"
          className="w-64 h-auto object-contain"
        />
      </div>
    </section>
  );
}
