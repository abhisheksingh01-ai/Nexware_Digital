// FeaturesServices.jsx
import React from "react";

function FeatureItem({ title, children }) {
  return (
    <div className="flex items-start gap-3 mb-4">
      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">●</div>
      <div>
        <div className="font-medium">{title}</div>
        <div className="text-sm text-gray-600">{children}</div>
      </div>
    </div>
  );
}

function ServiceItem({ title, price }) {
  return (
    <div className="flex items-start gap-3 mb-3">
      <div className="w-6 h-6 rounded border flex items-center justify-center">✓</div>
      <div>
        <div className="font-medium">{title}</div>
        <div className="text-sm text-gray-600">{price ? `₹ ${price}` : ""}</div>
      </div>
    </div>
  );
}

export default function FeaturesServices() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Key Features */}
      <div>
        <h4 className="text-xl font-semibold mb-4">Key Features</h4>
        <FeatureItem title="Responsive Design">Structured for desktop, tablets & mobiles</FeatureItem>
        <FeatureItem title="SEO Friendly">Optimized for search engines</FeatureItem>
        <FeatureItem title="Contact Form">Easily accessible form for users</FeatureItem>
        <FeatureItem title="Social Media Integration">Connect your website to social</FeatureItem>
      </div>

      {/* Additional Services */}
      <div>
        <h4 className="text-xl font-semibold mb-4">Additional Services</h4>
        <ServiceItem title="Logo Design" price="3,999" />
        <ServiceItem title="Google My Business" price="2,999" />
        <ServiceItem title="Content Writing" price="1.5 per+" />
        <ServiceItem title="E-commerce Setup" price="5,999" />
      </div>
    </section>
  );
}
