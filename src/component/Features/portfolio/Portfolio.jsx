import React from "react";

import project_01 from "../../../assets/project_01.png";
import project_02 from "../../../assets/project_02.png";
import project_03 from "../../../assets/project_03.png";


export default function Portfolio() {
  const projects = [
    {
      id: 1,
      image: project_01, 
      title: "E-Commerce Design",
      demo: "https://e-commerce-tech-nexware.netlify.app/",
    },
    {
      id: 2,
      image: project_02,
      title: "GYM Design",
      demo: "https://gym-tech-nexware.netlify.app/",
    },
    {
      id: 3,
      image: project_03,
      title: "Travelling Design",
      demo: "https://travel-tech-nexware-01.netlify.app/",
    },
  ];

  return (
    <div className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition bg-white border border-gray-100"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold text-gray-700 mb-3">
                {project.title}
              </h3>

              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
              >
                View Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
