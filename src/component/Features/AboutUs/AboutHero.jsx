import React from "react";
// import AboutImg from "../../../assets/AboutUsImg.png"
import AboutImg from "../../../assets/AboutUsImg.png";
import { ArrowRight } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
      <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-12">
        
        {/* LEFT COLUMN: Text Content - Takes up 7/12 width */}
        <div className="md:col-span-7">
          <h1 className="text-sm font-semibold uppercase text-[#2b7bff] tracking-widest mb-3">
            Our Story & Values
          </h1>
          <h2 className="text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
            Building the Future of Digital Experience.
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mb-8">
            At Nexware Digital, we combine cutting-edge design with powerful technology to create solutions that drive growth and captivate audiences.
          </p>
          
          <button className="flex items-center gap-2 px-8 py-3 bg-[#2b7bff] text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-[1.02]">
            View Our Portfolio
            <ArrowRight size={20} />
          </button>
        </div>

        {/* RIGHT COLUMN: Image - Takes up 5/12 width */}
        <div className="md:col-span-5 flex justify-center md:justify-end">
          <img
            src={AboutImg}
            alt="Team collaboration illustration"
            // Stylish, larger image with subtle shadow and border radius
            className="w-full max-w-sm lg:max-w-md h-auto object-cover rounded-xl shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
          />
        </div>
      </div>
    </section>
  );
}