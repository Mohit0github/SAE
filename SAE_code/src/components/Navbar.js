import React from "react";
import "./Navbar.css"; // Import the CSS file
import logo from "./assets/logo.svg"; // Adjust the path as needed

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />
      <ul className="navbar-links">
        <li>Home</li>
        <li>About</li>
        <li>Events</li>
        <li>Blogs</li>
        <li>Projects</li>
      </ul>
      <button className="navbar-button">Trident</button>
    </nav>
  );
}

export default Navbar;
