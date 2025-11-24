import React from "react";
import { useNavigate } from "react-router-dom";
import webIcon from "../../../assets/web-design.gif";
import digitalIcon from "../../../assets/social-marketing.gif";
import logoIcon from "../../../assets/logo-design.gif";
import googleIcon from "../../../assets/network.gif"

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
    <section className="w-full py-24 **bg-white**">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-16 text-center">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center">
          {services.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(item.link)}
              className="bg-white rounded-3xl border border-gray-200 shadow-lg 
              hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer 
              p-6 flex flex-col items-center justify-center"
              style={{
                width: "280px",
                height: "280px",
              }}
            >
 
              <img
                src={item.icon}
                alt={item.title}
                className="w-24 h-24 object-contain mb-4 transition-transform duration-300 group-hover:scale-110"
              />

              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm text-center leading-relaxed px-3">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}