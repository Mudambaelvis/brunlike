import backgroundImage from '../assets/plane2.jpg'; // Adjust the path as necessary

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen bg-cover bg-center bg-fixed flex flex-col justify-center items-center text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div> {/* dark overlay */}
      
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">BRUNS GROUP</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Sustainable Functional Polymers Research Group at the Technical University of Darmstadt
        </p>
      </div>
    </section>
  );
}
