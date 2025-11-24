import React from "react";
import AboutHero from "./AboutHero";
import AboutDetails from "./AboutDetails";
import AboutStats from "./AboutStats"; // NEW component for the 3-column summary

export default function AboutPage() {
  return (
    // Added padding for components like Navbar/Footer that aren't fixed
    <main className="bg-white min-h-screen text-gray-900 pt-16 sm:pt-20"> 
      <AboutHero />
      <div className="w-full h-px bg-gray-100 max-w-7xl mx-auto my-12" aria-hidden="true" /> {/* Visual separator */}
      <AboutDetails />
      <AboutStats /> 
    </main>
  );
}