import React from "react";
// import msgImg from "../../../assets/msg.png"; 
import msgImg from "../../../assets/msg.png";

export default function ContactUsMain() {
    return (
        <>
            <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-gray-600 text-lg">Get in touch with us for a free consultation</p>
                </div>


                <div className="flex justify-center md:justify-end">
                    <img
                        src={msgImg} 
                        alt="Message Illustration"
                        className="w-56 h-56 object-contain"
                    />
                </div>
            </section>
        </>
    )
}
