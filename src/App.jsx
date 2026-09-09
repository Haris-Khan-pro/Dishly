import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./section/HeroSection";
import About from "./section/About";
import Stats from "./section/Stats";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Stats />
    </>
  );
};

export default App;
