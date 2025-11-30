import React from "react";
import data from "../../src/content/collaborations.json";

export default function Collaboration() {
  return (
    <div className="pt-24 px-6 max-w-6xl mx-auto">

      <h1 className="text-4xl font-bold mb-8 text-gray-800">
        Research Consortia & Collaborations
      </h1>

      {/* Intro */}
      <p className="text-lg text-gray-700 mb-10 leading-relaxed">
        {data.intro}
      </p>

      {/* Institutional Collaborations */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Institutional Collaborations
        </h2>

        <div className="space-y-4">
          {data.institutionalCollaborations.map((inst, i) => (
            <div key={i} className="p-5 bg-gray-100 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg">{inst.name}</h3>
              <p className="text-gray-600 text-sm">{inst.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Research Consortia */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Research Consortia
        </h2>

        <ul className="space-y-4">
          {data.researchConsortia.map((item, i) => (
            <li key={i} className="p-5 bg-gray-100 rounded-lg shadow-sm">
              <strong>{item}</strong>
            </li>
          ))}
        </ul>
      </section>

      {/* Funding Sources */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Funding Sources
        </h2>

        <div className="space-y-4">
          {data.fundingSources.map((fund, i) => (
            <div key={i} className="p-5 bg-gray-100 rounded-lg shadow-sm">
              <strong>{fund}</strong>
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
}
