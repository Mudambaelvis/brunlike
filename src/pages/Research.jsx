import React from 'react'


const areas = Array.from({length:6}).map((_,i)=>({
id:i+1,
title:`Research Area ${i+1}`,
summary:'Short description placeholder for the research area.'
}))


export default function Research(){
return (
<div className="text-slate-900">
<section className="bg-white py-20">
<div className="container">
<h1 className="text-2xl font-semibold mb-6">Research</h1>
<p className="text-slate-600 mb-8">Placeholder intro about research lines. Replace with real content.</p>


<div className="grid md:grid-cols-2 gap-6">
{areas.map(a=> (
<details key={a.id} className="bg-white border rounded p-4">
<summary className="cursor-pointer font-medium">{a.title}</summary>
<div className="mt-2 text-slate-600">{a.summary} Additional details will go here when available.</div>
</details>
))}
</div>
</div>
</section>
</div>
)
}