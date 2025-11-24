import React from "react";


// React functional component (RFC) - BottomCardsSection
export default function BottomCardsSection() {
return (
<section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-gray-50 p-6 rounded-lg">
<h4 className="font-semibold mb-2">Contac Information</h4>
<div className="text-sm text-gray-600">
<div className="mb-2">
<strong className="block text-gray-800">Address</strong>
<div>123 Business St., City, State 12345</div>
</div>
<div>
<strong className="block text-gray-800">Phone</strong>
<div>(123) 456-7590</div>
</div>
</div>
</div>


<div className="bg-gray-50 p-6 rounded-lg flex items-center justify-center text-gray-400">
{/* Empty card like image shows - put any additional info or keep blank */}
<div> </div>
</div>
</section>
);
}