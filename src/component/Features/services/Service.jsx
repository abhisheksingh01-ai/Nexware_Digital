import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import webIcon from "../../../assets/web-design.gif";
import digitalIcon from "../../../assets/social-marketing.gif";
import logoIcon from "../../../assets/logo-design.gif";
import googleIcon from "../../../assets/network.gif";

export default function Service() {
  const navigate = useNavigate();

  const services = [
    {
      icon: webIcon,
      title: "Website Development",
      desc: "Creative business websites tailored to your services",
      link: "/website",
    },
    {
      icon: digitalIcon,
      title: "Digital Marketing",
      desc: "Comprehensive online marketing solutions",
      link: "/digital",
    },
    {
      icon: googleIcon,
      title: "Google Listing",
      desc: "Optimize your Google My Business profile",
      link: "/listing",
    },
    {
      icon: logoIcon,
      title: "Logo Design",
      desc: "Unique and memorable logo designs",
      link: "/logo",
    },
  ];

  return (
    <section className="w-full py-24 bg-white font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Gradient Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-2"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r 
          from-[#2b7bff] via-[#7dd3fc] to-[#8b5cf6]">
            Our Services
          </span>
        </motion.h2>

        {/* Decorative Underline */}
        <div className="mt-1 flex justify-center mb-8">
          <div className="w-20 h-1 rounded-full bg-gradient-to-r 
          from-[#2b7bff] via-[#7dd3fc] to-[#8b5cf6]" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">

          {services.map((item, index) => (
            <motion.div
              key={index}
              onClick={() => navigate(item.link)}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white rounded-3xl border border-gray-200 shadow-lg
              hover:shadow-2xl cursor-pointer p-6 flex flex-col items-center 
              justify-center transition-all duration-300 group"
              style={{ width: "260px", height: "260px" }}
            >
              <motion.img
                src={item.icon}
                alt={item.title}
                className="w-20 h-20 object-contain mb-3"
                whileHover={{ rotate: 8 }}
                transition={{ type: "spring", stiffness: 200 }}
              />

              <h3 className="text-lg font-bold text-gray-900 mb-1 text-center">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm text-center leading-relaxed px-2">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
