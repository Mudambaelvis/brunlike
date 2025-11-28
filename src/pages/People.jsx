export default function People() {
  return (
    <div className="pt-24 px-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-gray-800">Our Team</h1>

      <p className="text-lg text-gray-700 mb-12">
        Meet the members of our research group. Each team member contributes unique expertise 
        across polymer chemistry, materials science, and sustainability-driven research.
      </p>

      {/* Principal Investigator */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Principal Investigator</h2>

        <div className="bg-gray-100 p-6 rounded-xl shadow-sm flex items-start gap-6">
          <div className="w-28 h-28 bg-gray-300 rounded-lg"></div>

          <div>
            <h3 className="text-xl font-semibold">Prof. Dr. Jane Doe</h3>
            <p className="text-gray-600">Head of Research Group</p>
            <p className="text-sm text-gray-600 mt-2">
              Focus: Sustainable polymers, functional materials, advanced polymerization techniques.
            </p>
          </div>
        </div>
      </section>

      {/* Current Team Members */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Current Members</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Member 1 */}
          <div className="bg-white border rounded-lg p-6 shadow-sm">
            <div className="w-full h-40 bg-gray-200 rounded-md mb-4"></div>
            <h3 className="text-lg font-semibold">Alice Müller</h3>
            <p className="text-gray-600 text-sm">PhD Candidate</p>
            <p className="text-gray-500 text-sm mt-2">
              Focus: Bio-based polymers and material degradation pathways.
            </p>
          </div>

          {/* Member 2 */}
          <div className="bg-white border rounded-lg p-6 shadow-sm">
            <div className="w-full h-40 bg-gray-200 rounded-md mb-4"></div>
            <h3 className="text-lg font-semibold">Tom Becker</h3>
            <p className="text-gray-600 text-sm">Postdoctoral Researcher</p>
            <p className="text-gray-500 text-sm mt-2">
              Focus: Polymer functionalization & advanced spectroscopy.
            </p>
          </div>

          {/* Member 3 */}
          <div className="bg-white border rounded-lg p-6 shadow-sm">
            <div className="w-full h-40 bg-gray-200 rounded-md mb-4"></div>
            <h3 className="text-lg font-semibold">Sara Khan</h3>
            <p className="text-gray-600 text-sm">Research Assistant</p>
            <p className="text-gray-500 text-sm mt-2">
              Focus: Lab automation and analytical chemistry.
            </p>
          </div>

          {/* Member 4 */}
          <div className="bg-white border rounded-lg p-6 shadow-sm">
            <div className="w-full h-40 bg-gray-200 rounded-md mb-4"></div>
            <h3 className="text-lg font-semibold">David Schmidt</h3>
            <p className="text-gray-600 text-sm">Master's Student</p>
            <p className="text-gray-500 text-sm mt-2">
              Focus: Novel polymer synthesis pathways.
            </p>
          </div>

          {/* Member 5 */}
          <div className="bg-white border rounded-lg p-6 shadow-sm">
            <div className="w-full h-40 bg-gray-200 rounded-md mb-4"></div>
            <h3 className="text-lg font-semibold">Julia Weber</h3>
            <p className="text-gray-600 text-sm">Master's Student</p>
            <p className="text-gray-500 text-sm mt-2">
              Focus: Material lifecycle assessment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
