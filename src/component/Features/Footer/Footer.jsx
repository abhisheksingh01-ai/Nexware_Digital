import React from "react";
import Logo from "../../../assets/Logo.jpg";
import { Mail, MapPin, Phone } from "lucide-react"; // Added icons for contact info

export default function Footer() {
  return (
    // Softer background and clearer top border
    <footer className="bg-gray-50 border-t border-gray-200 mt-20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* LEFT – LOGO + ABOUT - Increased visual weight */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src={Logo}
              alt="Nexware Digital"
              className="w-12 h-12 rounded-lg object-cover shadow-md"
            />
            <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
              Nexware<span className="text-[#2b7bff]">Digital</span>
            </h2>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
            Nexware Digital delivers clean UI/UX, powerful websites, and
            high-performance digital marketing solutions built for growth.
          </p>
          
          {/* Fictional Contact Info */}
          <div className="mt-6 space-y-3 text-sm">
            <div className="flex items-start gap-2 text-gray-600">
              <MapPin className="w-5 h-5 text-gray-500 flex-shrink-0" />
              <span>123 Tech Avenue, Silicon City, 10001</span>
            </div>
            <div className="flex items-start gap-2 text-gray-600">
              <Phone className="w-5 h-5 text-gray-500 flex-shrink-0" />
              <a href="tel:+1234567890" className="hover:text-[#2b7bff] transition">+1 (234) 567-890</a>
            </div>
            <div className="flex items-start gap-2 text-gray-600">
              <Mail className="w-5 h-5 text-gray-500 flex-shrink-0" />
              <a href="mailto:info@nexwaredigital.com" className="hover:text-[#2b7bff] transition">info@nexwaredigital.com</a>
            </div>
          </div>
        </div>

        {/* QUICK LINKS & COMPANY - Clearer headings and consistent hover */}
        {renderLinkSection("Quick Links", [
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Pricing", href: "/pricing" },
          { name: "Portfolio", href: "/portfolio" },
        ])}

        {renderLinkSection("Company", [
          { name: "About Us", href: "/about" },
          { name: "Careers", href: "/careers" },
          { name: "Blog", href: "/blog" },
          { name: "Contact", href: "/contact" },
          { name: "Privacy Policy", href: "/privacy" },
        ])}

        {/* NEWSLETTER - Modern and clear CTA */}
        <div>
          <h4 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-[#2b7bff] inline-block pb-1">
            Stay Updated
          </h4>
          <p className="text-gray-600 text-sm mb-4">
            Subscribe to get exclusive insights, latest offers, and news from our team.
          </p>

          <div className="flex mt-4 shadow-md rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 border-none"
              aria-label="Email for newsletter subscription"
            />
            <button 
              className="bg-[#2b7bff] text-white px-5 text-lg font-semibold hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Subscribe"
            >
              ➤
            </button>
          </div>
        </div>
      </div>

      {/* COPYRIGHT CENTERED - Subtler divider */}
      <div className="text-center mt-12 pt-8 border-t border-gray-200">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Nexware Digital. All rights reserved. Crafted with 💙.
        </p>
      </div>
    </footer>
  );
}

// Helper function for rendering link sections
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
                        className="text-gray-600 hover:text-[#2b7bff] transition duration-200 relative group block"
                    >
                        {link.name}
                        {/* Subtle left-side indicator on hover */}
                        <span className="absolute left-[-15px] top-1/2 -translate-y-1/2 w-1 h-1 bg-[#2b7bff] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    </a>
                </li>
            ))}
        </ul>
    </div>
);