import React from "react";
import "./About.css";
import "./assets/car2.svg";
function About() {
  return (
    <section className="about-section">
      <div className="text-content">
        <h2>
          Advancing <span className="highlight">Innovation</span> with
          Technology
        </h2>
        <p>
          The Science and Technology Council at IIT BHU is a student-run
          organization that aims to promote the understanding and application of
          Science and Technology among the IIT BHU community.
        </p>
      </div>
      <img src="./intro.svg" alt="Intro" className="intro-image" />
    </section>
  );
}

export default About;
