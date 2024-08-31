import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Events from "./components/Events";
import Blogs from "./components/Blogs";
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
      <Events />
      <Blogs />
      <Projects />
      <Sponsors />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
