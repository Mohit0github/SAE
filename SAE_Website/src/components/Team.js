import React from "react";
import photo1 from "./assets/photo1.svg"; // Adjust the path as needed
import photo2 from "./assets/photo2.svg";
import photo3 from "./assets/photo3.svg";
import "./Team.css"; // Import the CSS file

function Team() {
  return (
    <section className="team-section">
      <div className="team-left">
        <h2>Meet Our Team</h2>
        <ul className="team-list">
          <li>
            <button className="team-button">Helm</button>
          </li>
          <li>
            <button className="team-button">Aerodynamics</button>
          </li>
          <li>
            <button className="team-button">Vehicle Dynamics</button>
          </li>
          <li>
            <button className="team-button">Structures</button>
          </li>
          <li>
            <button className="team-button">Marketing</button>
          </li>
          <li>
            <button className="team-button">Web Team</button>
          </li>
        </ul>
      </div>
      <div className="team-right">
        <img src={photo1} alt="Photo 1" className="team-photo" />
        <img src={photo2} alt="Photo 2" className="team-photo" />
        <img src={photo3} alt="Photo 3" className="team-photo" />
      </div>
    </section>
  );
}

export default Team;
