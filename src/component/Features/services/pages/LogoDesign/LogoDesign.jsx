import React from "react";
import Header from "./Header";
import Features from "./Features";
import PackagesAndWork from "./PackagesAndWork";



export default function LogoDesign() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      <Features />
      <PackagesAndWork />
      <footer className="mt-8 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Your Agency
      </footer>
    </div>
  )
}