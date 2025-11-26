import React, { useState } from "react";
import axios from "axios";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await axios.post(
        "https://nexware-digital-server.vercel.app/api/contact/contact-detail",
        formData
      );

      if (res.data.success === true) {
        setSuccess("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError("Something went wrong. Try again.");
      }
    } catch (err) {
      setError("Server error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 bg-white rounded-xl shadow-2xl overflow-hidden">
        
        {/* Left column */}
        <div className="lg:col-span-2 bg-gray-900 p-8 md:p-12 space-y-8 order-2 lg:order-1 text-white">
          <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
          <p className="text-gray-300">
            Reach out directly through any of the channels below.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-gray-700/50">
                <MapPin className="h-6 w-6 text-[#2b7bff]" />
              </div>
              <div>
                <strong className="block text-gray-200">Our Location</strong>
                <div className="text-gray-400">E Block</div>
                <div className="text-gray-400">Noida Sector 16</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-gray-700/50">
                <Phone className="h-6 w-6 text-[#2b7bff]" />
              </div>
              <div>
                <strong className="block text-gray-200">Give Us A Call</strong>
                <a href="tel:8929082629" className="text-gray-400 hover:text-[#2b7bff]">
                  (+91) 89290 82629
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-gray-700/50">
                <Mail className="h-6 w-6 text-[#2b7bff]" />
              </div>
              <div>
                <strong className="block text-gray-200">Email Us</strong>
                <a href="mailto:itteams@technexwaredigital.com" className="text-gray-400 hover:text-[#2b7bff]">
                  itteams@technexwaredigital.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="lg:col-span-3 p-8 md:p-12 w-full order-1 lg:order-2">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h3>

          {/* Success */}
          {success && (
            <p className="bg-green-100 text-green-700 p-3 rounded-lg mb-4">
              {success}
            </p>
          )}

          {/* Error */}
          {error && (
            <p className="bg-red-100 text-red-700 p-3 rounded-lg mb-4">
              {error}
            </p>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              <div>
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2b7bff]"
                  required
                />
              </div>

              <div>
                <input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2b7bff]"
                  required
                />
              </div>
            </div>

            <div>
              <textarea
                id="message"
                placeholder="Your Message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2b7bff]"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="inline-block bg-[#2b7bff] text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
