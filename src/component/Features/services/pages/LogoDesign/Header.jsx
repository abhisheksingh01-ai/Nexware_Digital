import React from "react";
import {
  PenTool,
  Layers,
  MousePointer2,
  Palette,
  ArrowRight,
} from "lucide-react";

export default function Header() {
  return (
    <header className="relative bg-white overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-3xl opacity-70"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-pink-50 rounded-full blur-3xl opacity-70"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Text */}
          <div className="flex flex-col">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              We Craft <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Iconic Identities
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-lg lg:text-lg text-gray-600 max-w-lg leading-relaxed mt-3">
              Your logo is the face of your business. Get a unique, memorable,
              and professional design that sets you apart from the competition.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
              <button className="group flex items-center justify-center bg-indigo-600 text-white px-8 py-3.5 rounded-xl font-semibold shadow-lg hover:bg-indigo-700 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200">
                Start Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center justify-center bg-white text-gray-700 border border-gray-200 px-8 py-3.5 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all duration-200">
                View Portfolio
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4 text-sm text-gray-500 font-medium mt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"
                  />
                ))}
              </div>
              <p>Trusted by 500+ Brands</p>
            </div>
          </div>

          {/* Right: Design Tool Mockup */}
          <div className="relative w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
              {/* Tool Header */}
              <div className="bg-gray-50 border-b border-gray-100 px-4 py-3 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 bg-red-400 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="h-4 w-px bg-gray-300"></div>
                  <div className="text-xs font-semibold text-gray-500 flex items-center gap-1">
                    <PenTool className="w-3 h-3" /> Untitled-1.ai
                  </div>
                </div>
                <div className="bg-indigo-600 text-white text-[10px] font-bold px-2 py-1 rounded">
                  EXPORT
                </div>
              </div>

              {/* Artboard */}
              <div className="h-80 bg-gray-50 relative flex items-center justify-center group cursor-crosshair">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "radial-gradient(#6366f1 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                ></div>

                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-xl transform rotate-45 shadow-lg group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-lg opacity-20"></div>
                  </div>

                  <div className="absolute -bottom-4 -right-4 bg-black text-white px-2 py-1 rounded text-[10px] flex items-center shadow-xl">
                    <MousePointer2 className="w-3 h-3 mr-1" /> User 1
                  </div>
                </div>

                {/* Floating Left Toolbar */}
                <div className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-lg shadow-lg border border-gray-100 flex flex-col gap-3">
                  <MousePointer2 className="w-4 h-4 text-indigo-600" />
                  <PenTool className="w-4 h-4 text-gray-400" />
                  <Layers className="w-4 h-4 text-gray-400" />
                  <div className="h-px w-full bg-gray-200"></div>
                  <div className="w-4 h-4 rounded-full bg-indigo-500 border border-gray-200"></div>
                </div>

                {/* Floating Right Palette */}
                <div className="absolute right-4 top-4 bg-white p-3 rounded-lg shadow-lg border border-gray-100 w-32">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-bold text-gray-500">
                      FILL
                    </span>
                    <Palette className="w-3 h-3 text-gray-400" />
                  </div>
                  <div className="grid grid-cols-4 gap-1">
                    {[
                      "bg-indigo-500",
                      "bg-purple-500",
                      "bg-pink-500",
                      "bg-orange-400",
                      "bg-teal-400",
                      "bg-gray-800",
                    ].map((c, i) => (
                      <div
                        key={i}
                        className={`w-5 h-5 rounded ${c} cursor-pointer hover:scale-110 transition-transform`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Floating */}
            <div className="absolute -z-10 top-10 right-10 w-full max-w-md h-full bg-indigo-600 rounded-2xl transform rotate-6 opacity-10"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
