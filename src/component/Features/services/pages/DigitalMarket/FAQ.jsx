import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: "How long does it take to see results?",
      answer:
        "Most clients start seeing visible improvements within 2–4 weeks, depending on the campaign type, audience size, and marketing budget.",
    },
    {
      question: "Which platforms should I advertise on?",
      answer:
        "We recommend platforms based on your target audience. Popular options include Google Ads for intent-based traffic and Meta Ads (Facebook & Instagram) for brand awareness.",
    },
    {
      question: "Can you manage advertising alone?",
      answer:
        "Yes, we handle everything — strategy, creatives, optimization, tracking setup, and reporting — so you can focus on your business.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Frequently Asked Questions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="border-b border-gray-200 pb-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            {/* Question Row */}
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium text-gray-800">
                {item.question}
              </p>

              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600" />
              )}
            </div>

            {/* Answer */}
            <div
              className={`mt-2 text-gray-600 text-sm leading-6 transition-all duration-300 ${
                openIndex === index
                  ? "opacity-100 max-h-40"
                  : "opacity-0 max-h-0 overflow-hidden"
              }`}
            >
              {item.answer}
            </div>
          </div>
        ))}
        <div className="hidden md:block"></div>
      </div>
    </section>
  );
}
