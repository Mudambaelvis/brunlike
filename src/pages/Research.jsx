import React from "react";
import researchAreas from "../../src/content/research.json";

export default function Research() {
  return (
    <div className="text-slate-900">

      {/* ------------------------------- MAIN SECTION ------------------------------- */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Page Title */}
          <h1 className="text-3xl font-semibold mb-6">Research</h1>

          {/* Intro paragraph */}
          <p className="text-slate-600 mb-10 leading-relaxed">
            Our research spans several interdisciplinary fields focused on
            computational methods, biological systems, machine learning, and
            collaborative scientific innovation. Below you will find the major
            thematic areas our group is dedicated to. Each section expands to
            provide space for more detailed descriptions.
          </p>

          {/* Research Areas */}
          <div className="grid md:grid-cols-2 gap-6">
            {researchAreas.map((area) => (
              <details
                key={area.id}
                className="bg-white border rounded-lg p-5 shadow-sm"
              >
                <summary className="cursor-pointer font-semibold text-lg">
                  {area.title}
                </summary>

                <div className="mt-3 text-slate-700 leading-relaxed">
                  <p className="mb-2">{area.summary}</p>
                  <p>{area.details}</p>
                </div>
              </details>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
