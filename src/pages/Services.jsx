export default function Services() {
  return (
    <section id="services" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {[1, 2, 3].map(i => (
          <div key={i} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Service {i}</h3>
            <p className="text-gray-600">Short description of what the service entails.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
