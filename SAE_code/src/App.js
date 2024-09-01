import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Sponsors from "./components/Sponsors";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Sponsors />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
