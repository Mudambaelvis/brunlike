import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection.jsx";

// JSON
import homeData from "../../src/content/home.json";

const Home = () => {
  return (
    <div className="home">

      {/* -------------------------------- HERO -------------------------------- */}
      <HeroSection />

      {/* -------------------------------- MISSION -------------------------------- */}
      <section
        style={{
          padding: "60px 20px",
          maxWidth: "1100px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "20px" }}>
          Our Mission
        </h2>

        <p style={{ fontSize: "1.15rem", lineHeight: "1.75" }}>
          {homeData.mission}
        </p>
      </section>

      {/* --------------------------- RESEARCH PREVIEW --------------------------- */}
      <section style={{ padding: "60px 20px", background: "#f8f9fa" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "20px" }}>
            Research Areas
          </h2>

          <p style={{ marginBottom: "30px", fontSize: "1.1rem" }}>
            Explore our major research domains and ongoing projects.
          </p>

          <div
            style={{
              display: "grid",
              gap: "20px",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            }}
          >
            {homeData.researchPreview.map((topic, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  padding: "20px",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "700",
                    marginBottom: "10px",
                  }}
                >
                  {topic.title}
                </h3>
                <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                  {topic.desc}
                </p>
              </div>
            ))}
          </div>

          <Link
            to="/research"
            style={{
              display: "inline-block",
              marginTop: "30px",
              fontWeight: "600",
              color: "#0b5ed7",
              textDecoration: "none",
            }}
          >
            View All Research →
          </Link>
        </div>
      </section>

      {/* -------------------------------- TEAM PREVIEW -------------------------------- */}
      <section
        style={{
          padding: "60px 20px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <h2 style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "20px" }}>
          Meet the Team
        </h2>

        <p style={{ fontSize: "1.1rem", lineHeight: "1.75", marginBottom: "25px" }}>
          {homeData.teamIntro}
        </p>

        <div>
          <Link
            to="/people"
            style={{
              background: "#0b5ed7",
              color: "white",
              padding: "12px 25px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            Meet the Group →
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
