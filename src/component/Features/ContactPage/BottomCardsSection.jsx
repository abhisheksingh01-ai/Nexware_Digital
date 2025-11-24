import React from "react";
import { Clock,MapPin } from "lucide-react"; 



// React functional component (RFC) - BottomCardsSection
export default function BottomCardsSection() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-8">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Find Our Office</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                
                {/* Left Column: Operating Hours Card (Takes 2/5 width) */}
                <div className="lg:col-span-2 bg-gray-50 p-8 rounded-xl shadow-md border border-gray-100">
                    <div className="flex items-center mb-4">
                        <Clock className="w-7 h-7 text-[#2b7bff] mr-3" />
                        <h4 className="text-xl font-bold text-gray-900">Operating Hours</h4>
                    </div>

                    <div className="text-md text-gray-700 space-y-2">
                        <div className="flex justify-between border-b border-gray-200 pb-1">
                            <strong className="text-gray-800">Monday - Friday:</strong>
                            <span>9:00 AM - 5:00 PM</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-200 pb-1">
                            <strong className="text-gray-800">Saturday:</strong>
                            <span>By Appointment Only</span>
                        </div>
                        <div className="flex justify-between">
                            <strong className="text-gray-800">Sunday:</strong>
                            <span className="text-red-500">Closed</span>
                        </div>
                    </div>
                </div>

                {/* Right Column: Embedded Map Placeholder (Takes 3/5 width) */}
                <div className="lg:col-span-3 bg-gray-100 rounded-xl overflow-hidden shadow-lg border border-gray-200 min-h-[300px] flex items-center justify-center">
                    {/* Placeholder for an embedded Google Map or similar */}
                    <div className="text-gray-500 text-center p-6">
                        <MapPin className="w-10 h-10 mx-auto mb-2" />
                        <p className="font-medium">Map Placeholder</p>
                        <p className="text-sm">Embed your interactive map here for easy navigation.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}