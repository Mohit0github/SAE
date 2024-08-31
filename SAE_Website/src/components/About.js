import React from "react";
import CarSVG from "./assets/car.svg"; // Adjust the path based on where your SVG is located
import "./About.css"; // Import the CSS file for styling

function About() {
  return (
    <section className="about-section">
      <div className="content">
        <h2>
          Advancing <span className="highlight">Innovation</span> with
          Technology
        </h2>
        <p>
          The Science and Technology Council at IIT BHU is a student-run
          organization that aims to promote the understanding and application of
          Science and Technology among the IIT BHU community.
        </p>
        <h3>Benefits of Contribution</h3>
        <ul>
          <li>Exposure</li>
          <li>R&D and Innovation</li>
          <li>Networking</li>
        </ul>
      </div>
      <CarSVG className="car-svg" />
    </section>
  );
}

export default About;
