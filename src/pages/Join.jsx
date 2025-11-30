import React from "react";
import data from "../../src/content/join.json";

export default function Join() {
  return (
    <div className="pt-24 px-6 max-w-5xl mx-auto text-gray-800">
      
      <h1 className="text-4xl font-bold mb-8">Join the Team</h1>

      {/* Intro */}
      <p className="text-lg text-gray-700 leading-relaxed mb-10">
        {data.intro}
      </p>

      {/* Open Positions */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-6">Open Positions</h2>

        <div className="space-y-6">
          {data.positions.map((p, i) => (
            <div key={i} className="p-6 bg-gray-100 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-gray-600 mt-2">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How to Apply */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-4">How to Apply</h2>

        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          {data.howToApply.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <p className="mt-6">
          Applications and inquiries can be sent to:{" "}
          <strong>{data.email}</strong>
        </p>
      </section>
    </div>
  );
}
