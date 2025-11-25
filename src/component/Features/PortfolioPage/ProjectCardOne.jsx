import React from "react";
// import ProjectOneImg from "../../../assets/project-one.png";


export default function ProjectCardOne() {
return (
<article className="w-full sm:w-80 bg-white rounded-3xl shadow-lg border p-0 overflow-hidden transform hover:-translate-y-3 transition">
<div className="relative h-44 overflow-hidden">
{/* Replace this div with <img src={ProjectOneImg} .../> */}
<div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white flex items-center justify-center">
<div className="text-slate-300">Image Preview</div>
</div>


{/* Accent ribbon */}
<div className="absolute top-3 left-3 inline-flex items-center gap-2 bg-white/80 backdrop-blur-md rounded-full px-2 py-1 text-xs font-medium shadow">
<span className="w-2 h-2 rounded-full bg-[#2b7bff]" />
Featured
</div>


{/* Hover overlay actions */}
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition flex items-end p-4">
<div className="w-full flex items-center justify-between">
<a className="bg-white/90 text-slate-900 px-3 py-2 rounded-full text-sm font-medium shadow hover:scale-105 transition" href="#">View</a>
<a className="text-white text-sm opacity-90 hover:underline" href="#">Live</a>
</div>
</div>
</div>


<div className="p-4 text-center">
<h3 className="text-lg font-semibold text-slate-900">Project One</h3>
<p className="text-sm text-slate-500 mt-1">E‑commerce · Full website build</p>


<div className="mt-3 flex items-center justify-center gap-2">
<span className="inline-block text-xs font-medium px-2 py-1 rounded-full bg-slate-100 text-slate-700">Case Study</span>
<span className="inline-block text-xs font-medium px-2 py-1 rounded-full bg-slate-100 text-slate-700">React</span>
</div>
</div>
</article>
);
}

