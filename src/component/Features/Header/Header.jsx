import React from "react";
import FormButton from "../Button/FormButton";


export default function Header({
  imageUrl =
    "https://assets.designhill.com/design-blog/wp-content/uploads/2019/03/Are-You-Ready-To-Start-Your-Own-Business-1.jpg",
  onGetStarted,
}) {
  return (
    <header className="**bg-white** py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">

          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Grow Your Business
              <br />
              <span className="text-indigo-600">with a Stunning Website</span>
            </h1>

            <p className="text-gray-600 text-sm max-w-md mx-auto lg:mx-0">
              We design modern websites and provide digital marketing solutions
              that help your business shine in the online world.
            </p>

            <div className="pt-4 flex justify-center lg:justify-start">
              <FormButton btn="Get Start Now" />
            </div>
          </div>

        
          <div className="flex justify-center lg:justify-end relative">
            <div className="relative w-72 sm:w-80 lg:w-[420px]">

              <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-gray-200">
                <img
                  src={imageUrl}
                  alt="Website Design"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}