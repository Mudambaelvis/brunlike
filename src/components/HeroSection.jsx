import backgroundImage from '../assets/books.jpg'; // Adjust the path as necessary

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen bg-cover bg-center bg-fixed flex flex-col justify-center items-center text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-80"></div> {/* dark overlay */}
      
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to our Research Lab</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">


                     Advancing knowledge through innovation, collaboration, and scientific excellence.

        </p>
      </div>
    </section>
  );
}
