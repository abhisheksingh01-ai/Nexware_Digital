import React from "react";
import { Mail, MapPin, Phone } from "lucide-react"; // Imported icons for a modern look

// React functional component (RFC) - ContactFormSection
export default function ContactFormSection() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 bg-white rounded-xl shadow-2xl overflow-hidden">
                
                {/* Left column - Contact Information (Takes 2/5 width) */}
                <div className="lg:col-span-2 bg-gray-900 p-8 md:p-12 space-y-8 order-2 lg:order-1 text-white">
                    <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
                    <p className="text-gray-300">
                        Reach out directly through any of the channels below. We look forward to hearing from you!
                    </p>

                    <div className="space-y-6">
                        {/* Address */}
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-gray-700/50">
                                <MapPin className="h-6 w-6 text-[#2b7bff]" />
                            </div>
                            <div>
                                <strong className="block text-gray-200">Our Location</strong>
                                <div className="text-gray-400">123 Business St.</div>
                                <div className="text-gray-400">City, State 12345</div>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-gray-700/50">
                                <Phone className="h-6 w-6 text-[#2b7bff]" />
                            </div>
                            <div>
                                <strong className="block text-gray-200">Give Us A Call</strong>
                                <a href="tel:1234567890" className="text-gray-400 hover:text-[#2b7bff] transition duration-200">(123) 456-7890</a>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-gray-700/50">
                                <Mail className="h-6 w-6 text-[#2b7bff]" />
                            </div>
                            <div>
                                <strong className="block text-gray-200">Email Us</strong>
                                <a href="mailto:info@nexwaredigital.com" className="text-gray-400 hover:text-[#2b7bff] transition duration-200">info@nexwaredigital.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right column - Message Form (Takes 3/5 width) */}
                <div className="lg:col-span-3 p-8 md:p-12 w-full order-1 lg:order-2">
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h3>

                    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="sr-only">Name</label>
                                <input id="name" type="text" placeholder="Your Name" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2b7bff] focus:border-transparent transition-all" required />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input id="email" type="email" placeholder="Your Email" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2b7bff] focus:border-transparent transition-all" required />
                            </div>
                        </div>

                        {/* Subject */}
                        <div>
                            <label htmlFor="subject" className="sr-only">Subject</label>
                            <input id="subject" type="text" placeholder="Subject" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2b7bff] focus:border-transparent transition-all" required />
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="sr-only">Message</label>
                            <textarea id="message" placeholder="Your Message" rows={6} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2b7bff] focus:border-transparent transition-all" required />
                        </div>

                        <div>
                            <button 
                                type="submit" 
                                className="inline-block bg-[#2b7bff] text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-[1.01]"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}