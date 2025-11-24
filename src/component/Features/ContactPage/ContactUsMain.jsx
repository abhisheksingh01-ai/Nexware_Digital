import React from "react";
// import msgImg from "../../../assets/msg.png"; 
import msgImg from "../../../assets/msg.png";

export default function ContactUsMain() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                
                {/* Text Content */}
                <div>
                    <h1 className="text-sm font-semibold uppercase text-[#2b7bff] tracking-widest mb-3">
                        Let's Talk
                    </h1>
                    <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
                        Get in touch with our team.
                    </h2>
                    <p className="text-xl text-gray-700 max-w-lg">
                        We are ready to discuss your project, answer your questions, and start building your digital future.
                    </p>
                </div>

                {/* Illustration */}
                <div className="flex justify-center md:justify-end">
                    <img
                        src={msgImg} 
                        alt="Message Illustration"
                        // Increased size and added subtle styling for professionalism
                        className="w-full max-w-xs h-auto object-contain rounded-xl transition-transform duration-500 hover:scale-[1.02]"
                    />
                </div>
            </div>
        </section>
    )
}