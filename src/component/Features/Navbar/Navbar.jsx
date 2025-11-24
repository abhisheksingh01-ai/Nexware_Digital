import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import Logo from "../../../assets/Logo.jpg";

const menuItems = ["Home", "Pricing", "Portfolio", "About", "Contact"];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const navRef = useRef(null);

  // Measure navbar height & apply body padding
  useEffect(() => {
    function updateHeight() {
      const h = navRef.current ? navRef.current.offsetHeight : 0;
      setNavHeight(h);

      // FIXED: Correct template literal
      document.body.style.paddingTop = `${h}px`;
    }

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
      document.body.style.paddingTop = "";
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 bg-white shadow-lg/5 border-b border-gray-100 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <img
            src={Logo}
            alt="Nexware Digital Logo"
            className="w-10 h-10 rounded-lg object-cover ring-2 ring-transparent group-hover:ring-[#2b7bff] transition-all duration-300"
          />
          <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
            Nexware<span className="text-[#2b7bff]">Digital</span>
          </h2>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 items-center">
          {menuItems.map((item) => {
            const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
            return (
              <a
                key={item}
                href={path}
                className="text-gray-700 font-semibold text-[15px] relative group transition-colors duration-300 hover:text-[#2b7bff]"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#2b7bff] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
            className="text-gray-900 p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#2b7bff]"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white absolute left-0 right-0 shadow-xl flex flex-col items-center overflow-hidden transition-all duration-300 ease-in-out`}
        style={{
          top: navHeight,
          maxHeight: isMobileMenuOpen ? "500px" : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
          paddingTop: isMobileMenuOpen ? "0.5rem" : 0,
          paddingBottom: isMobileMenuOpen ? "0.5rem" : 0,
        }}
      >
        {menuItems.map((item) => {
          const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;

          return (
            <a
              key={item}
              href={path}
              className="w-full flex justify-between items-center px-6 py-3 text-lg font-semibold text-gray-800 hover:text-white hover:bg-[#2b7bff] transition-colors duration-200 border-b border-gray-100 last:border-b-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
              <ChevronRight className="w-5 h-5 opacity-70" />
            </a>
          );
        })}
      </div>
    </nav>
  );
}
