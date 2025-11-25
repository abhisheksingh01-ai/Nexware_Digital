import React from "react";
import Logo from "../../../assets/Logo.png";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* LEFT – LOGO + ABOUT */}
        <div>
          <div className="flex items-center gap-4 mb-5 group">
            <img
              src={Logo}
              alt="Tech Nexware Digital"
              className="w-12 h-12 rounded-xl object-cover shadow-md ring-2 ring-transparent group-hover:ring-[#2b7bff] transition-all duration-300"
            />
            <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight flex flex-col leading-tight">
            <span className="">Tech Nexware</span>
            <span className="text-[#2b7bff] -mt-1">Digital</span>
          </h2>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
            Tech Nexware Digital delivers clean UI/UX, powerful websites, and
            high-performance digital marketing solutions built for growth.
          </p>

          {/* Contact */}
          <div className="mt-6 space-y-3 text-sm">
            <div className="flex items-start gap-2 text-gray-600">
              <MapPin className="w-5 h-5 text-gray-500" />
              <span>Noida Sector 16 E Block</span>
            </div>
            <div className="flex items-start gap-2 text-gray-600">
              <Phone className="w-5 h-5 text-gray-500" />
              <a href="tel:+918929082629" className="hover:text-[#2b7bff] transition">+91 8929082629</a>
            </div>
            <div className="flex items-start gap-2 text-gray-600">
              <Mail className="w-5 h-5 text-gray-500" />
              <a href="mailto:itteams@technexwaredigital.in" className="hover:text-[#2b7bff] transition">itteams@technexwaredigital.in</a>
            </div>
          </div>
        </div>

        {renderLinkSection("Quick Links", [
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Pricing", href: "/pricing" },
          { name: "Portfolio", href: "/portfolio" },
        ])}

        {renderLinkSection("Company", [
          { name: "About Us", href: "/about" },
          // { name: "Careers", href: "/careers" },
          // { name: "Blog", href: "/blog" },
          { name: "Contact", href: "/contact" },
          { name: "Privacy Policy", href: "/privacy" },
        ])}

        {/* Newsletter */}
        <div>
          <h4 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-[#2b7bff] inline-block pb-1">
            Stay Updated
          </h4>
          <p className="text-gray-600 text-sm mb-4">
            Subscribe to get exclusive insights, latest offers, and news from our team.
          </p>
          {/* <div className="flex mt-4 shadow-md rounded-xl overflow-hidden ring-1 ring-gray-200 focus-within:ring-[#2b7bff] transition-all duration-300">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 text-sm text-gray-700 focus:outline-none"
            />
            <button className="bg-[#2b7bff] text-white px-5 text-lg font-semibold hover:bg-blue-700 transition">
              ➤
            </button>
          </div> */}
        </div>
      </div>

      <div className="text-center mt-8 pt-6 border-t border-gray-200">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Tech Nexware Digital. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

const renderLinkSection = (title, links) => (
  <div>
    <h4 className="text-xl font-bold text-gray-900 mb-5 border-b-2 border-[#2b7bff] inline-block pb-1">
      {title}
    </h4>
    <ul className="space-y-3 text-sm">
      {links.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            className="text-gray-600 hover:text-[#2b7bff] transition relative pl-3 group block"
          >
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#2b7bff] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);
