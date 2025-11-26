import React from "react";
import { Clock } from "lucide-react";
import MapImage from "../../../assets/googleMap.jpg"; 

export default function BottomCardsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-6">
      <h3 className="text-3xl font-bold text-gray-900 text-center mb-6">
        Find Our Office
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

        {/* Left Column: Operating Hours */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <div className="flex items-center mb-4">
            <Clock className="w-7 h-7 text-[#2b7bff] mr-3" />
            <h4 className="text-xl font-bold text-gray-900">Operating Hours</h4>
          </div>

          <div className="text-md text-gray-700 space-y-2">
            <div className="flex justify-between border-b border-gray-200 pb-1">
              <strong className="text-gray-800">Monday - Friday:</strong>
              <span>10:00 AM - 6:00 PM</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-1">
              <strong className="text-gray-800">Saturday:</strong>
              <span>By Appointment Only</span>
            </div>
            <div className="flex justify-between">
              <strong className="text-gray-800">Sunday:</strong>
              <span className="text-red-500">Closed</span>
            </div>
          </div>
        </div>

        {/* Right Column: Google Map Image */}
        <div className="lg:col-span-3 bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 min-h-[300px]">
          <img
            src={MapImage}
            alt="Google Map Location"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}