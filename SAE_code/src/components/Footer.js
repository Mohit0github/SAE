import React from "react";
import "./Footer.css"; // Import the CSS file

// Import social media icons
import instagramIcon from "./assets/instagram-icon.svg"; // Adjust path as needed
import facebookIcon from "./assets/facebook-icon.svg";
import linkedinIcon from "./assets/linkedin-icon.svg";
import emailIcon from "./assets/email-icon.svg";
// Import the new image
import SAEImage from "./assets/SAE.svg"; // Adjust path as needed

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-background">
        <div className="footer-overlay">
          <div className="footer-content">
            <div className="footer-left">
              {/* Replace old image with the new one */}
              <img src={SAEImage} alt="SAE Logo" className="footer-logo" />
            </div>
            <div className="social-media">
              <div className="socials-heading">Socials</div> {/* New heading */}
              <div className="social-item">
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  className="social-icon"
                />
                <span className="social-tag">Instagram</span>
              </div>
              <div className="social-item">
                <img
                  src={facebookIcon}
                  alt="Facebook"
                  className="social-icon"
                />
                <span className="social-tag">Facebook</span>
              </div>
              <div className="social-item">
                <img
                  src={linkedinIcon}
                  alt="LinkedIn"
                  className="social-icon"
                />
                <span className="social-tag">LinkedIn</span>
              </div>
              <div className="social-item">
                <img src={emailIcon} alt="E-mail" className="social-icon" />
                <span className="social-tag">E-mail</span>
              </div>
            </div>
            <div className="email-signup-section">
              <div className="stay-up-to-date">
                <h3>Stay up to date</h3>
              </div>
              <div className="email-signup">
                <input
                  type="text"
                  className="email-input"
                  placeholder="Your email address"
                />
                <button className="send-button">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
