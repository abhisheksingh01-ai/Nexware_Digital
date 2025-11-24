// Header.jsx
import React from "react";
// import heroImg from "/mnt/data/de7e9360-ff88-4dbe-a67b-e57ee1e35b10.png";
// import heroImg from "/network.gif";
import heroImg from "../../../../../assets/network.gif";

export default function Header() {
  return (
    <header className="max-w-6xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Text */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Logo Design</h1>
          <p className="text-gray-600 mb-6">
            Get a unique and memorable logo to represent your brand
          </p>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow">
            Get Started
          </button>
        </div>

        {/* Right: Illustration */}
        <div className="flex justify-center md:justify-end">
          <img
            src={heroImg}
            alt="logo-design-illustration"
            className="w-72 md:w-96 object-contain"
          />
        </div>
      </div>
    </header>
  );
}