// FeaturesServices.jsx
import React from "react";
import { CheckCircle, Smartphone, Globe, FileText, Zap } from "lucide-react";

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

function ServiceCard({ title, price, bullets = [], accent }) {
  return (
    <article
      className={`bg-white rounded-2xl p-5 shadow-lg border ${accent ? accent : ""} transform hover:-translate-y-2 transition`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-slate-900">{title}</h3>
          {price && <div className="text-sm text-slate-500 mt-1">Starting at <span className="font-semibold text-slate-900">₹ {price}</span></div>}
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-block text-xs px-2 py-1 rounded-full bg-[#f0f9ff] text-[#2b7bff] font-medium">Popular</span>
        </div>
      </div>

      <ul className="mt-4 space-y-2 text-sm text-slate-600">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex items-center gap-3">
        <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-[#2b7bff] text-white px-4 py-2 text-sm font-semibold shadow">Get Quote</a>
        <a href="#details" className="text-sm text-slate-600 hover:underline">See details</a>
      </div>
    </article>
  );
}

export default function FeaturesServices() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900">What we build — Features & Services</h2>
        <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
          Full-service website solutions — responsive design, SEO-ready, and performance-first. Pick services a-la-carte or a complete package.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Key features (stack of feature rows) */}
        <div className="col-span-1 lg:col-span-1 space-y-4">
          <div className="bg-white p-6 rounded-2xl shadow-lg border">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Key Features</h3>

            <div className="space-y-4">
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
                <div className="text-xs text-slate-500">Need a custom feature?</div>
                <div className="font-semibold text-slate-900">We’ll build it for you.</div>
              </div>
              <a href="#contact" className="text-sm text-[#2b7bff] font-medium hover:underline">Talk to us →</a>
            </div>
          </div>
        </div>

        {/* Middle Column: Popular service card */}
        <div className="col-span-1">
          <ServiceCard
            title="Website + Design (Popular)"
            price="12,999"
            bullets={[
              "Custom responsive design",
              "SEO basics + speed optimization",
              "Contact form & Google Analytics",
              "1 month free support"
            ]}
            accent=""
          />
        </div>

        {/* Right Column: Additional services list + CTA */}
        <div className="col-span-1 space-y-4">
          <div className="bg-white p-6 rounded-2xl shadow-lg border">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Additional Services</h3>

            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm font-medium text-slate-900">Logo Design</div>
                  <div className="text-xs text-slate-500">Brand identity & variations</div>
                </div>
                <div className="text-sm font-semibold text-slate-900">₹ 3,999</div>
              </div>

              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm font-medium text-slate-900">Google My Business</div>
                  <div className="text-xs text-slate-500">Listing + optimization</div>
                </div>
                <div className="text-sm font-semibold text-slate-900">₹ 2,999</div>
              </div>

              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm font-medium text-slate-900">Content Writing</div>
                  <div className="text-xs text-slate-500">SEO content & copy</div>
                </div>
                <div className="text-sm font-semibold text-slate-900">₹ 1.5k+</div>
              </div>

              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm font-medium text-slate-900">E-commerce Setup</div>
                  <div className="text-xs text-slate-500">Product upload & payment</div>
                </div>
                <div className="text-sm font-semibold text-slate-900">₹ 5,999</div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t flex items-center justify-between">
              <div className="text-sm text-slate-600">Want a package?</div>
              <a href="#packages" className="text-sm bg-[#10b981] text-white px-3 py-2 rounded-lg font-medium shadow">See Packages</a>
            </div>
          </div>

          {/* Small CTA card */}
          <div className="bg-gradient-to-br from-[#f6fcff] to-white p-6 rounded-2xl border-dashed border-2 border-slate-100 text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-[#2b7bff] flex items-center justify-center text-white">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-slate-700">Quick Call</div>
                <div className="font-semibold text-slate-900">+91 98765 43210</div>
              </div>
            </div>
            <a href="#book" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#2b7bff] text-white font-semibold shadow">Book a 15-min call</a>
          </div>
        </div>
      </div>
    </section>
  );
}
