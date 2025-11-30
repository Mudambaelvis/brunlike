import React from "react";
import peopleData from "../../src/content/team.json";

export default function People() {
  const { principalInvestigator, members } = peopleData;

  return (
    <div className="pt-24 px-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-gray-800">Our Team</h1>

      <p className="text-lg text-gray-700 mb-12">
        Meet the members of our research group. Each team member contributes
        unique expertise across polymer chemistry, materials science, and
        sustainability-driven research.
      </p>

      {/* Principal Investigator */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Principal Investigator
        </h2>

        <div className="bg-gray-100 p-6 rounded-xl shadow-sm flex items-start gap-6">
          <div className="w-28 h-28 bg-gray-300 rounded-lg overflow-hidden">
            {principalInvestigator.image && (
              <img
                src={principalInvestigator.image}
                alt={principalInvestigator.name}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              {principalInvestigator.name}
            </h3>
            <p className="text-gray-600">{principalInvestigator.role}</p>
            <p className="text-sm text-gray-600 mt-2">
              Focus: {principalInvestigator.focus}
            </p>
          </div>
        </div>
      </section>

      {/* Current Members */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Current Members
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg p-6 shadow-sm"
            >
              <div className="w-full h-40 bg-gray-200 rounded-md mb-4 overflow-hidden">
                {member.image && (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-600 text-sm">{member.role}</p>
              <p className="text-gray-500 text-sm mt-2">
                Focus: {member.focus}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
