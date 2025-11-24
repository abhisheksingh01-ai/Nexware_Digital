// AboutDetails.jsx
import React from "react";

function SectionBlock({ title, children }) {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 max-w-3xl">{children}</p>
    </div>
  );
}

export default function AboutDetails() {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-16">
      <div className="mt-6">
        <SectionBlock title="Who We Are">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leduc ipsum
          veli quivussae, pulvinar ac risus in luctus, arcu.
        </SectionBlock>

        <SectionBlock title="Our Mission">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leduc ipsum
          veli quis uisase, pulvinar egestas metus nec lacus.
        </SectionBlock>

        <SectionBlock title="Our Approach">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leduc ipsum
          veli quis uisase, pulvinar eget euismod auctor.
        </SectionBlock>
      </div>

      {/* three column summary row */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div>
          <h4 className="font-semibold mb-2">Our Approach</h4>
          <p className="text-gray-600 text-sm">Lorem ipsum dolor risus dolor</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Our Values</h4>
          <p className="text-gray-600 text-sm">Lorem ipsum dolor ipsum dolor</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Our Team</h4>
          <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet</p>
        </div>
      </div>
    </section>
  );
}
