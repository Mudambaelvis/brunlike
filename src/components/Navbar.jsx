import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-black z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Company</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 font-medium">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu with Smooth Slide */}
      <div
        className={`md:hidden bg-black text-white flex flex-col items-center overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 py-6 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="hover:text-gray-300 text-lg py-2"
        >
          Home
        </Link>
        <Link
          to="/about"
          onClick={() => setIsOpen(false)}
          className="hover:text-gray-300 text-lg py-2"
        >
          About
        </Link>
        <Link
          to="/services"
          onClick={() => setIsOpen(false)}
          className="hover:text-gray-300 text-lg py-2"
        >
          Services
        </Link>
        <Link
          to="/contact"
          onClick={() => setIsOpen(false)}
          className="hover:text-gray-300 text-lg py-2"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
