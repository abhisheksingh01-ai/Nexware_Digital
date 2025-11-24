import React, { useState } from "react";
import { Menu, X } from "lucide-react"; 
import Logo from "../../../assets/Logo.jpg";


const menuItems = ["Home", "Pricing", "Portfolio", "About", "Contact"];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="relative w-full bg-gradient-to-b from-white to-gray-50 border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Brand */}
        <a href="/" className="flex items-center gap-3 group">
          <img 
            src={Logo} 
            alt="Nexware Digital Logo" 
            className="w-9 h-9 rounded-md object-cover group-hover:opacity-90 transition-opacity" 
          />
          <h2 className="text-xl font-bold text-gray-800">Nexware Digital</h2>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {menuItems.map((item) => {
            const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;

            return (
              <a
                key={item}
                href={path}
                className="text-gray-600 font-medium transition-all hover:text-[#2b7bff] hover:-translate-y-0.5"
              >
                {item}
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
            className="text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#2b7bff] focus:ring-offset-2 rounded-md p-1 transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg flex flex-col items-center overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        {menuItems.map((item) => {
          const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;

          return (
            <a
              key={item}
              href={path}
              className="w-full text-center py-2 text-lg font-medium text-gray-700 hover:text-[#2b7bff] hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
