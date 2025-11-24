// BottomLeft.jsx
import React from "react";

export default function BottomLeft() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      
      <h5 className="font-semibold mb-6">Payment & Terms</h5>

      {/* Row: Payment Schedule + Timeline (side-by-side on md+) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Payment schedule */}
        <div className="flex items-start gap-4">
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 font-semibold">
            ₿
          </div>
          <div>
            <div className="font-medium">Payment Schedule</div>
            <div className="text-sm text-gray-600">
              Advance 50% upfront, remaining on completion
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="flex items-start gap-4">
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 font-semibold">
            ⏱
          </div>
          <div>
            <div className="font-medium">Timeline</div>
            <div className="text-sm text-gray-600">
              Project completes in 5–6 weeks (depends on complexity)
            </div>
          </div>
        </div>

      </div>

      {/* CTA */}
      <div className="mt-12">
        <div className="text-lg font-semibold mb-3">
          Ready to Start Your Project?
        </div>
        <button className="bg-blue-600 text-white px-5 py-2 rounded">
          Get In Touch
        </button>
      </div>

    </section>
  );
}
