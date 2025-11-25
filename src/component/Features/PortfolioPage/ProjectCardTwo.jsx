import React from "react";
// import ProjectTwoImg from "../../../assets/project-two.png";


export default function ProjectCardTwo() {
return (
<article className="w-full sm:w-80 bg-white rounded-3xl shadow-lg border p-0 overflow-hidden transform hover:-translate-y-3 transition">
<div className="relative h-44 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white flex items-center justify-center">
<div className="text-slate-300">Image Preview</div>
</div>


<div className="absolute top-3 right-3 inline-flex items-center gap-2 bg-white/80 backdrop-blur-md rounded-full px-2 py-1 text-xs font-medium shadow">
HIPAA
</div>


<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition flex items-end p-4">
<div className="w-full flex items-center justify-between">
<a className="bg-white/90 text-slate-900 px-3 py-2 rounded-full text-sm font-medium shadow hover:scale-105 transition" href="#">View</a>
<a className="text-white text-sm opacity-90 hover:underline" href="#">Live</a>
</div>
</div>
</div>


<div className="p-4 text-center">
<h3 className="text-lg font-semibold text-slate-900">Project Two</h3>
<p className="text-sm text-slate-500 mt-1">Healthcare · Web platform</p>


<div className="mt-3 flex items-center justify-center gap-2">
<span className="inline-block text-xs font-medium px-2 py-1 rounded-full bg-slate-100 text-slate-700">HIPAA Friendly</span>
<span className="inline-block text-xs font-medium px-2 py-1 rounded-full bg-slate-100 text-slate-700">UX</span>
</div>
</div>
</article>
);
}