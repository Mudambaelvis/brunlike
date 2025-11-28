export default function Collaboration() {
  return (
    <div className="pt-24 px-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Research Consortia & Collaborations</h1>

      <p className="text-lg text-gray-700 mb-10">
        Our research group collaborates with a number of academic institutions, research networks, and 
        funding organizations. This page provides a structured overview of our major partnerships.
      </p>

      {/* Section: Institutional Collaborations */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Institutional Collaborations</h2>
        <div className="space-y-4">
          <div className="p-5 bg-gray-100 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg">Technical University of Darmstadt</h3>
            <p className="text-gray-600 text-sm">
              Department of Chemistry – Joint projects in polymer synthesis and sustainability.
            </p>
          </div>

          <div className="p-5 bg-gray-100 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg">Max Planck Institute for Polymer Research</h3>
            <p className="text-gray-600 text-sm">
              Collaboration on advanced material characterization.
            </p>
          </div>

          <div className="p-5 bg-gray-100 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg">Fraunhofer Institute for Materials</h3>
            <p className="text-gray-600 text-sm">
              Sustainable materials and industrial-scale polymer applications.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Research Consortia */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Research Consortia</h2>
        <ul className="space-y-4">
          <li className="p-5 bg-gray-100 rounded-lg shadow-sm">
            <strong>CONSORTIUM A:</strong> Circular Materials Innovation Network
          </li>

          <li className="p-5 bg-gray-100 rounded-lg shadow-sm">
            <strong>CONSORTIUM B:</strong> Green Polymers European Initiative
          </li>

          <li className="p-5 bg-gray-100 rounded-lg shadow-sm">
            <strong>CONSORTIUM C:</strong> Collaborative Research Center for Functional Materials
          </li>
        </ul>
      </section>

      {/* Section: Funding Sources */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Funding Sources</h2>
        <div className="space-y-4">
          <div className="p-5 bg-gray-100 rounded-lg shadow-sm">
            <strong>DFG – German Research Foundation</strong>
          </div>
          <div className="p-5 bg-gray-100 rounded-lg shadow-sm">
            <strong>European Research Council (ERC)</strong>
          </div>
          <div className="p-5 bg-gray-100 rounded-lg shadow-sm">
            <strong>Federal Ministry of Education and Research (BMBF)</strong>
          </div>
        </div>
      </section>
    </div>
  );
}
