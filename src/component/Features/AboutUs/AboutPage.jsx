// AboutPage.jsx
import React from "react";
import AboutHero from "./AboutHero";
import AboutDetails from "./AboutDetails";

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen text-gray-900">
      <AboutHero />
      <AboutDetails />
    </main>
  );
}
