import HeroSection from "../components/HeroSection";
import bg1 from "../assets/plane.jpg";
import bg2 from "../assets/plane3.jpg";
import bg3 from "../assets/plane4.jpg";

export default function Home() {
  return (
    <div className="text-white">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-center px-6">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="max-w-2xl text-lg text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          amet officiis autem! A simple placeholder for your company's story.
        </p>
      </section>

      {/* Services Section with background image */}
      <section
        className="relative min-h-screen bg-fixed bg-cover bg-center flex flex-col justify-center items-center text-center"
        style={{
          backgroundImage: `url(${bg1})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 px-6">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="max-w-2xl text-lg text-gray-300 mx-auto">
            Placeholder for services offered. Background image stays fixed while you scroll.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-gray-800 text-center px-6">
        <h2 className="text-4xl font-bold mb-4">Our Projects</h2>
        <p className="max-w-2xl text-lg text-gray-300">
          Showcase your work here. This section scrolls normally.
        </p>
      </section>

      {/* Another image section */}
      <section
        className="relative min-h-screen bg-fixed bg-cover bg-center flex flex-col justify-center items-center text-center"
        style={{
          backgroundImage: `url(${bg2})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 px-6">
          <h2 className="text-4xl font-bold mb-4">Our Vision</h2>
          <p className="max-w-2xl text-lg text-gray-300 mx-auto">
            Another parallax section to keep the page visually engaging.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-center px-6">
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <p className="max-w-2xl text-lg text-gray-300">
          Email: info@example.com <br /> Phone: +123 456 789
        </p>
      </section>

      {/* Footer */}
      
    </div>
  );
}
