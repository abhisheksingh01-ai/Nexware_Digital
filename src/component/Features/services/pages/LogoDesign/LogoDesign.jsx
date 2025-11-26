import React from "react";
import Header from "./Header";
import Features from "./Features";
import LogoPrice from "../../../price/LogoPrice";



export default function LogoDesign() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      <Features />
      <LogoPrice/>
    </div>
  )
}