import React from "react";

const Join = () => {
  return (
    <div className="page">
      <h1>Join the Team</h1>
      <p>
        Interested in joining our research group? Open positions will be posted
        here, including PhD, Postdoctoral, and Internship opportunities.
      </p>

      {/* Section: Open Positions */}
      <section className="section">
        <h2>Open Positions</h2>

        {/* Example Placeholder */}
        <div className="placeholder-box">
          <h3>PhD Position in Molecular Research</h3>
          <p>
            A short description of the PhD opportunity will appear here. This
            is a placeholder section for future updates.
          </p>
        </div>

        <div className="placeholder-box">
          <h3>Postdoctoral Researcher</h3>
          <p>
            Placeholder text for a Postdoc position. Details about requirements,
            responsibilities, and application procedures will go here.
          </p>
        </div>

        <div className="placeholder-box">
          <h3>Undergraduate / Internship Opportunities</h3>
          <p>
            Space for listing internship roles and general instructions for
            undergraduate involvement.
          </p>
        </div>
      </section>

      {/* Section: Application Instructions */}
      <section className="section">
        <h2>How to Apply</h2>
        <p>
          Candidates may be asked to send a CV, cover letter, transcripts, and
          contact information for references. These instructions will be
          customizable once real details are provided.
        </p>
      </section>
    </div>
  );
};

export default Join;
