import React from "react";
import "./Projects.css"; // Import the CSS file for styling

// Example imports for images (adjust paths as necessary)
import Photo1 from "./assets/photoA.svg";
import Photo2 from "./assets/photoB.svg";
import Photo3 from "./assets/photoC.svg";
import Photo4 from "./assets/photoD.svg";
import Photo5 from "./assets/photoE.svg";
import Photo6 from "./assets/photoF.svg";

function Projects() {
  return (
    <section className="projects-section">
      <h2 className="main-heading">Benefits of Contribution</h2>
      <div className="projects-container">
        <div className="project-item">
          <img src={Photo1} alt="Exposure" className="project-photo" />
          <h3>Exposure</h3>
          <p>
            Our advanced spyware detection engine can identify if a device
            contains spyware or bugging software.
          </p>
        </div>
        <div className="project-item">
          <img
            src={Photo2}
            alt="R&D and Innovation"
            className="project-photo"
          />
          <h3>R&D and Innovation</h3>
          <p>
            Find malicious keyboards installed on your device that could allow
            someone to record things you type (e.g. passwords).
          </p>
        </div>
        <div className="project-item">
          <img src={Photo3} alt="Networking" className="project-photo" />
          <h3>Networking</h3>
          <p>
            Check which apps can access your location, microphone or camera. Get
            alerted if a known tracking app is installed.
          </p>
        </div>
        <div className="project-item">
          <img
            src={Photo4}
            alt="Enhancing Projects and Education"
            className="project-photo"
          />
          <h3>Enhancing Projects and Education</h3>
          <p>
            Analyze your operating system for signs of tampering that could
            compromise security, such as Jailbreaking.
          </p>
        </div>
        <div className="project-item">
          <img src={Photo5} alt="Opportunities" className="project-photo" />
          <h3>Opportunities</h3>
          <p>
            Our intelligent scan will either safely remove threats for you or
            provide easy-to-follow instructions.
          </p>
        </div>
        <div className="project-item">
          <img
            src={Photo6}
            alt="Practical Applications"
            className="project-photo"
          />
          <h3>Practical Applications</h3>
          <p>
            We create easy-to-use apps that can check your device for
            vulnerabilities in a matter of minutes.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
