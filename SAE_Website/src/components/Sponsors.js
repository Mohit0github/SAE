import React from "react";
import sponsor1 from "./assets/sponsor1.svg"; // Adjust the path as needed
import sponsor2 from "./assets/sponsor2.svg";
import sponsor3 from "./assets/sponsor3.svg";
import "./Sponsors.css";

function Sponsors() {
  return (
    <section className="sponsors-section">
      <h2>Our Sponsors</h2>
      <div className="sponsor-logos">
        <img src={sponsor1} alt="Sponsor 1" className="sponsor-logo" />
        <img src={sponsor2} alt="Sponsor 2" className="sponsor-logo" />
        <img src={sponsor3} alt="Sponsor 3" className="sponsor-logo" />
      </div>
    </section>
  );
}

export default Sponsors;
