import React from "react";


// React functional component (RFC) - ContactFormSection
export default function ContactFormSection() {
return (
<section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
{/* Left column - Contact Information */}
<div className="space-y-6 w-full order-2 md:order-1">
<h2 className="text-xl font-semibold">Contact Information</h2>


<div className="space-y-4">
<div className="flex items-start gap-4">
<div className="p-3 rounded-lg bg-gray-100">
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 12.414M9.172 6.828l4.243 4.243" /></svg>
</div>
<div>
<div className="text-sm text-gray-500">123 Business St.</div>
<div className="text-sm text-gray-500">City, State 12345</div>
</div>
</div>


<div className="flex items-start gap-4">
<div className="p-3 rounded-lg bg-gray-100">
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m0 4v8m0 0h6a2 2 0 002-2V7a2 2 0 00-2-2H9z" /></svg>
</div>
<div>
<div className="text-sm text-gray-500">(123) 456-7890</div>
</div>
</div>


<div className="flex items-start gap-4">
<div className="p-3 rounded-lg bg-gray-100">
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 4H8m2-8H8m13 2V7a2 2 0 00-2-2h-2l-2-2H8a2 2 0 00-2 2v2H4a2 2 0 00-2 2v8a2 2 0 002 2h16a2 2 0 002-2v-6z" /></svg>
</div>
<div>
<div className="text-sm text-gray-500">info@nexwaredigital.com</div>
</div>
</div>
</div>
</div>


{/* Right column - Message Form */}
<div className="bg-white p-6 rounded-lg shadow-sm w-full order-1 md:order-2">
<h3 className="text-lg font-medium mb-4">Send Us a Message</h3>


<form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
<div>
<label className="sr-only">Name</label>
<input type="text" placeholder="Name" className="w-full border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" />
</div>


<div>
<label className="sr-only">Email</label>
<input type="email" placeholder="Email" className="w-full border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" />
</div>


<div>
<label className="sr-only">Subject</label>
<input type="text" placeholder="Subject" className="w-full border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" />
</div>


<div>
<label className="sr-only">Message</label>
<textarea placeholder="Message" rows={5} className="w-full border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" />
</div>


<div>
<button type="submit" className="inline-block bg-blue-600 text-white px-5 py-2 rounded shadow">Send Message</button>
</div>
</form>
</div>
</section>
);
}

