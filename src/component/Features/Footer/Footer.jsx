import React from "react";
import Logo from "../../../assets/Logo.jpg";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16 pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* LEFT – LOGO + ABOUT */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <img src={Logo} alt="Nexware Digital" className="w-11 h-11 rounded-md" />
            <h2 className="text-xl font-bold text-gray-800">Nexware Digital</h2>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">
            Nexware Digital delivers clean UI/UX, powerful websites, and
            high-performance digital marketing solutions built for growth.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="text-gray-600 hover:text-blue-600 transition">Home</a></li>
            <li><a href="/services" className="text-gray-600 hover:text-blue-600 transition">Services</a></li>
            <li><a href="/pricing" className="text-gray-600 hover:text-blue-600 transition">Pricing</a></li>
            <li><a href="/portfolio" className="text-gray-600 hover:text-blue-600 transition">Portfolio</a></li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="text-gray-600 hover:text-blue-600 transition">About Us</a></li>
            <li><a href="/careers" className="text-gray-600 hover:text-blue-600 transition">Careers</a></li>
            <li><a href="/blog" className="text-gray-600 hover:text-blue-600 transition">Blog</a></li>
            <li><a href="/contact" className="text-gray-600 hover:text-blue-600 transition">Contact</a></li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Newsletter</h4>
          <p className="text-gray-600 text-sm">
            Subscribe to get updates, offers & the latest news.
          </p>

          <div className="flex mt-4">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-4 rounded-r-md hover:bg-blue-700 transition">
              ➤
            </button>
          </div>
        </div>
      </div>

      {/* COPYRIGHT CENTERED */}
      <div className="text-center mt-10 pt-6 border-t border-gray-200">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Nexware Digital. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
