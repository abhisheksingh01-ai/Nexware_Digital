import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import Logo from "../../../assets/Logo.png";

const menuItems = ["Home", "Pricing", "Portfolio", "About", "Contact"];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const navRef = useRef(null);

  useEffect(() => {
    function updateHeight() {
      const h = navRef.current ? navRef.current.offsetHeight : 0;
      setNavHeight(h);
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
      className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-md border-b border-gray-200 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <a href="/" className="flex items-center gap-4 group">
          <img
            src={Logo}
            alt="Logo"
            className="w-12 h-12 rounded-xl object-cover shadow-md ring-2 ring-transparent group-hover:ring-[#2b7bff] transition-all duration-300"
          />
          <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight flex flex-col leading-tight">
            <span className="">Tech Nexware</span>
            <span className="text-[#2b7bff] -mt-1">Digital</span>
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
                className="text-gray-700 font-semibold text-[16px] relative group transition-all duration-300 hover:text-[#2b7bff]"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#2b7bff] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
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
            className="text-gray-900 p-3 rounded-xl hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#2b7bff] shadow-sm"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white absolute left-0 right-0 shadow-xl flex flex-col items-center rounded-b-2xl overflow-hidden transition-all duration-300 ease-in-out`}
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
              className="w-full flex justify-between items-center px-6 py-4 text-lg font-semibold text-gray-800 hover:text-white hover:bg-[#2b7bff] transition-all duration-200 border-b border-gray-100 last:border-b-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
              <ChevronRight className="w-6 h-6 opacity-70" />
            </a>
          );
        })}
      </div>
    </nav>
  );
}
