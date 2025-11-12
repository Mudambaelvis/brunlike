export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <p className="max-w-xl mx-auto text-gray-600 mb-8">
        Have questions or want to get in touch? Send us a message below.
      </p>
      <form className="max-w-md mx-auto">
        <input type="text" placeholder="Your Name" className="w-full p-3 mb-4 border rounded" />
        <input type="email" placeholder="Your Email" className="w-full p-3 mb-4 border rounded" />
        <textarea placeholder="Message" className="w-full p-3 mb-4 border rounded h-32"></textarea>
        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">Send Message</button>
      </form>
    </section>
  );
}
