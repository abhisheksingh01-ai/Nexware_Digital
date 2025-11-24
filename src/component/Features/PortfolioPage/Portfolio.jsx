// Portfolio.jsx
import React from "react";
import Hero from "./Hero";
import ProjectCardOne from "../PortfolioPage/ProjectCardOne";
import ProjectCardTwo from "../PortfolioPage/ProjectCardTwo";
import ProjectCardThree from "../PortfolioPage/ProjectCardThree";
import BottomCTA from "../PortfolioPage/BottomCTA";


export default function Portfolio() {
  return (
    <div className="bg-white text-gray-900">
      <Hero />

      <section className="max-w-5xl mx-auto px-6 py-6">
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-start">
          <ProjectCardOne />
          <ProjectCardTwo />
          <ProjectCardThree />
        </div>
      </section>

      <BottomCTA />
    </div>
  );
}