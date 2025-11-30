import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaTwitter,
  FaLinkedin,
  FaGraduationCap
} from "react-icons/fa";
import { SiGooglescholar, SiOrcid } from "react-icons/si";

import data from "../../src/content/contact.json";

export default function Contact() {
  const pi = data.pi;

  return (
    <div className="pt-24 px-6 max-w-4xl mx-auto text-gray-800">
      
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-6">Contact</h1>

      <p className="text-lg text-gray-700 mb-10 leading-relaxed">
        {data.intro}
      </p>

      {/* Contact Card */}
      <div className="p-8 bg-gray-100 rounded-xl shadow-sm mb-14">
        <h2 className="text-2xl font-semibold mb-2">Principal Investigator</h2>

        <p className="text-lg font-medium">{pi.name}</p>
        <p className="text-gray-600 mb-6">{pi.title}</p>

        <div className="space-y-4 text-gray-700">

          {/* Email */}
          <div className="flex items-start gap-3">
            <FaEnvelope className="text-xl text-gray-600 mt-1" />
            <div>
              <strong>Email:</strong>{" "}
              <a
                href={`mailto:${pi.email}`}
                className="text-blue-600 hover:underline"
              >
                {pi.email}
              </a>
            </div>
          </div>

          {/* Office */}
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-xl text-gray-600 mt-1" />
            <div>
              <strong>Office:</strong>
              <p className="whitespace-pre-line">{pi.office.address}</p>

              <a
                href={pi.office.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm"
              >
                View on Google Maps
              </a>
            </div>
          </div>

          {/* Profiles */}
          <div className="flex items-start gap-3">
            <FaGraduationCap className="text-xl text-gray-600 mt-1" />
            <div>
              <strong>Academic Profiles:</strong>
              <div className="flex gap-4 mt-2 text-xl">

                {pi.profiles.twitter && (
                  <a
                    href={pi.profiles.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-500"
                  >
                    <FaTwitter />
                  </a>
                )}

                {pi.profiles.linkedin && (
                  <a
                    href={pi.profiles.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-600"
                  >
                    <FaLinkedin />
                  </a>
                )}

                {pi.profiles.scholar && (
                  <a
                    href={pi.profiles.scholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-purple-600"
                  >
                    <SiGooglescholar />
                  </a>
                )}

                {pi.profiles.orcid && (
                  <a
                    href={pi.profiles.orcid}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-green-600"
                  >
                    <SiOrcid />
                  </a>
                )}

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Note */}
      <p className="text-sm text-gray-500">{data.footerNote}</p>
    </div>
  );
}
