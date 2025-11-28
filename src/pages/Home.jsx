import HeroSection from '../components/HeroSection.jsx'

import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/plane.jpg"; // <-- replace with your hero image

const Home = () => {
  return (
    <div className="home">

      {/* ------------------------------- HERO SECTION ------------------------------- */}
    <HeroSection/>

      {/* ------------------------------- ABOUT SECTION -------------------------------- */}
      <section style={{ padding: "60px 20px", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "20px", fontWeight: "700" }}>About Our Lab</h2>
        <p style={{ lineHeight: "1.75", fontSize: "1.1rem" }}>
          Our research group focuses on cutting-edge exploration in computational sciences,
          data-driven systems, AI, and applied technologies. We collaborate with global
          institutions to push the boundaries of innovation and empower future scientists.
        </p>
      </section>

      {/* --------------------------- FEATURED RESEARCH SECTION ------------------------- */}
      <section style={{ padding: "60px 20px", background: "#f8f9fa" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "20px", fontWeight: "700" }}>Featured Research</h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px"
          }}>
            {[
              {
                title: "AI-Assisted Smart Agriculture",
                desc: "Developing intelligent models to improve crop yield and sustainability."
              },
              {
                title: "Autonomous Drone Navigation",
                desc: "Enhancing UAV safety and accuracy with real-time motion prediction."
              },
              {
                title: "Medical Image Enhancement",
                desc: "Using deep learning to improve early detection in radiology."
              },
            ].map((item, index) => (
              <div key={index} style={{
                background: "#fff",
                borderRadius: "10px",
                padding: "20px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
              }}>
                <h3 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "10px" }}>
                  {item.title}
                </h3>
                <p style={{ lineHeight: "1.6" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------- FEATURED PUBLICATIONS SECTION --------------------- */}
      <section style={{ padding: "60px 20px", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "20px", fontWeight: "700" }}>Recent Publications</h2>

        <ul style={{ listStyle: "none", padding: 0 }}>
          {[
            "Deep Learning Models for Efficient Object Detection – IEEE, 2023",
            "Smart City IoT Framework for Real-Time Analytics – ACM, 2024",
            "Unsupervised Feature Learning in Medical Diagnosis – Springer, 2024"
          ].map((pub, i) => (
            <li key={i} style={{
              background: "#f1f1f1",
              padding: "15px 20px",
              borderRadius: "8px",
              marginBottom: "12px",
              fontSize: "1.05rem"
            }}>
              {pub}
            </li>
          ))}
        </ul>

        <Link to="/publications"
          style={{
            display: "inline-block",
            marginTop: "15px",
            textDecoration: "none",
            fontWeight: "600",
            color: "#0b5ed7"
          }}
        >
          View All Publications →
        </Link>
      </section>

      {/* -------------------------------- CTA SECTION -------------------------------- */}
      <section style={{
        padding: "60px 20px",
        background: "#0b5ed7",
        color: "white",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "700" }}>Join Our Mission</h2>
        <p style={{ marginTop: "10px", fontSize: "1.15rem" }}>
          Want to contribute to groundbreaking research? Get in touch or apply to join the lab.
        </p>

        <div style={{ marginTop: "25px" }}>
          <Link
            to="/contact"
            style={{
              background: "#fff",
              color: "#0b5ed7",
              padding: "12px 25px",
              borderRadius: "8px",
              textDecoration: "none",
              marginRight: "15px",
              fontWeight: "600"
            }}
          >
            Contact Us
          </Link>

          <Link
            to="/join"
            style={{
              background: "#ffc107",
              color: "#000",
              padding: "12px 25px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "600"
            }}
          >
            Join the Team
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
