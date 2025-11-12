import React from "react";
import aboutBg from "../assets/plane3.jpg"; // replace with your own image
import teamBg from "../assets/plane4.jpg";   // replace with your own image
import missionBg from "../assets/plane5.jpg"; // optional

export default function About() {
  return (
    <div className="text-white">
      {/* Hero Section */}
      <section
        className="relative h-[80vh] bg-cover bg-center bg-fixed flex justify-center items-center"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Discover who we are, what drives us, and the story behind our vision.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center bg-fixed flex items-center justify-center"
        style={{ backgroundImage: `url(${missionBg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center px-6">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="max-w-3xl mx-auto text-gray-300">
            Our mission is to deliver excellence through creativity, collaboration, and
            innovation. We aim to build a future where ideas come alive.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center bg-fixed flex items-center justify-center"
        style={{ backgroundImage: `url(${teamBg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center px-6">
          <h2 className="text-3xl font-semibold mb-4">Our Team</h2>
          <p className="max-w-3xl mx-auto text-gray-300">
            We’re a diverse group of passionate creators, engineers, and dreamers working
            together to make something truly impactful.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-black py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Our Values</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-2">Innovation</h3>
            <p className="text-gray-400">
              We constantly push boundaries and embrace new ways of thinking.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Integrity</h3>
            <p className="text-gray-400">
              Transparency and trust form the foundation of everything we do.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Excellence</h3>
            <p className="text-gray-400">
              We strive to achieve the highest standards in every project we take on.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
