import React from "react";
import { CheckCircle, Smartphone, Globe, FileText, Zap } from "lucide-react";
import { Link } from "react-router-dom";


function FeatureRow({ icon: Icon, title, text }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-none w-12 h-12 rounded-xl bg-gradient-to-br from-[#eef7ff] to-[#f3f9ff] flex items-center justify-center shadow-sm">
        <Icon className="w-6 h-6 text-[#2b7bff]" />
      </div>
      <div className="flex-1">
        <h4 className="text-md font-semibold text-slate-900">{title}</h4>
        <p className="text-sm text-slate-600 mt-1">{text}</p>
      </div>
    </div>
  );
}

function KeywordChips({ chips = [] }) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {chips.map((c, idx) => (
        <span
          key={idx}
          className="inline-block text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700"
        >
          {c}
        </span>
      ))}
    </div>
  );
}

function ServiceCard({ title, price, bullets = [], accent, keywords = [] }) {
  return (
    <article
      className={`bg-white rounded-2xl p-5 shadow-lg border ${
        accent || ""
      } h-full flex flex-col transform hover:-translate-y-2 transition`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-slate-900">{title}</h3>
          {price && (
            <div className="text-sm text-slate-500 mt-1">
              Starting at{" "}
              <span className="font-semibold text-slate-900">₹ {price}</span>
            </div>
          )}

          {/* Keyword chips under title */}
          {keywords.length > 0 && <KeywordChips chips={keywords} />}
        </div>

        <span className="inline-block text-xs px-2 py-1 rounded-full bg-[#f0f9ff] text-[#2b7bff] font-medium">
          Popular
        </span>
      </div>

      <ul className="mt-4 space-y-2 text-sm text-slate-600 flex-grow">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex items-center gap-3">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-lg bg-[#2b7bff] text-white px-4 py-2 text-sm font-semibold shadow"
        >
          Get Quote
        </a>
      </div>
    </article>
  );
}

export default function FeaturesServices() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900">
          What we build — Features & Services
        </h2>
        <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
          Full-service website solutions — responsive design, SEO-ready, and
          performance-first. Pick services a-la-carte or a complete package.
        </p>
      </div>

      {/* Ensures same-height cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {/* Left Column */}
        <div className="h-full">
          <div className="bg-white p-6 rounded-2xl shadow-lg border h-full flex flex-col">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              Key Features
            </h3>

            <div className="space-y-4 flex-grow">
              <FeatureRow
                icon={Smartphone}
                title="Responsive Design"
                text="Layouts that adapt flawlessly to phones, tablets and desktops."
              />
              <FeatureRow
                icon={Globe}
                title="SEO Friendly"
                text="Improved visibility with optimized on-page structure and speed."
              />
              <FeatureRow
                icon={FileText}
                title="Contact & Lead Forms"
                text="Optimized forms for higher conversions and lead capture."
              />
              <FeatureRow
                icon={Zap}
                title="Fast Performance"
                text="Lightweight code, optimized images and CDN-ready builds."
              />
            </div>

            <div className="mt-6 border-t pt-4 flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-500">
                  Need a custom feature?
                </div>
                <div className="font-semibold text-slate-900">
                  We’ll build it for you.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle (Popular) with extra keywords */}
        <ServiceCard
          title="Website + Design (Popular)"
          price="12,999"
          keywords={["UI/UX", "Responsive", "SEO", "Performance", "Analytics"]}
          bullets={[
            "Custom responsive design",
            "SEO basics + speed optimization",
            "Contact form & Google Analytics",
            "1 month free support",
            "Accessible & WCAG-ready components",
            "Performance budget and optimization",
          ]}
        />

        {/* Right Column with more keywords for each service */}
        <div className="h-full">
          <div className="bg-white p-6 rounded-2xl shadow-lg border h-full flex flex-col">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              Additional Services
            </h3>

            <div className="space-y-3 flex-grow">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm font-medium text-slate-900">
                    Logo Design
                  </div>
                  <div className="text-xs text-slate-500">
                    Brand identity & variations
                  </div>
                  <div className="mt-2 flex gap-2">
                    <span className="inline-block text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700">
                      Branding
                    </span>
                    <span className="inline-block text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700">
                      Vector
                    </span>
                    <span className="inline-block text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700">
                      Print-ready
                    </span>
                  </div>
                </div>
                <div className="text-sm font-semibold text-slate-900">
                  ₹ 3,999
                </div>
              </div>

              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm font-medium text-slate-900">
                    Google My Business
                  </div>
                  <div className="text-xs text-slate-500">
                    Listing + optimization
                  </div>
                  <div className="mt-2 flex gap-2">
                    <span className="inline-block text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700">
                      Local SEO
                    </span>
                    <span className="inline-block text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700">
                      Maps
                    </span>
                    <span className="inline-block text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700">
                      Citations
                    </span>
                  </div>
                </div>
                <div className="text-sm font-semibold text-slate-900">
                  ₹ 2,999
                </div>
              </div>

              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm font-medium text-slate-900">
                    Content Writing
                  </div>
                  <div className="text-xs text-slate-500">
                    SEO content & copy
                  </div>
                  <div className="mt-2 flex gap-2">
                    <span className="inline-block text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700">
                      SEO
                    </span>
                    <span className="inline-block text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700">
                      Blogs
                    </span>
                    <span className="inline-block text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700">
                      Landing copy
                    </span>
                  </div>
                </div>
                <div className="text-sm font-semibold text-slate-900">
                  ₹ 1.5k+
                </div>
              </div>

              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm font-medium text-slate-900">
                    E-commerce Setup
                  </div>
                  <div className="text-xs text-slate-500">
                    Product upload & payment
                  </div>
                  <div className="mt-2 flex gap-2">
                    <span className="inline-block text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700">
                      Shopify
                    </span>
                    <span className="inline-block text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700">
                      Payment
                    </span>
                    <span className="inline-block text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700">
                      Catalog
                    </span>
                  </div>
                </div>
                <div className="text-sm font-semibold text-slate-900">
                  ₹ 5,999
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t flex items-center justify-between">
              <div className="text-sm text-slate-600">Want a package?</div>
              <Link
                to="/buy"
                className="inline-block text-sm md:text-base bg-[#10b981] text-white 
             px-4 py-2.5 rounded-lg font-medium shadow hover:opacity-95 
             transition active:scale-[0.98]"
              >
                See Packages
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
