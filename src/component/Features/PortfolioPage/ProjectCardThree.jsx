// ProjectCardThree.jsx
import React from "react";

export default function ProjectCardThree() {
  return (
    <div className="w-full sm:w-80 bg-white rounded-lg shadow-sm border p-4">
      {/* Image placeholder - replace with your <img src={...} /> or background */}
      <div className="rounded-md overflow-hidden bg-gray-50 h-44 flex items-center justify-center">
        <div className="text-gray-400">Image Preview</div>
      </div>

      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold text-gray-900">Project Three</h3>
        <p className="text-sm text-gray-500 mt-1">Real Estate · Website</p>
      </div>
    </div>
  );
}