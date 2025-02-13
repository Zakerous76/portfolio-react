import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-white selection:text-black mx-auto">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(250,119,200,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="container mx-auto lg:pl-8 px-4">
        <Navbar />
        <div className="main lg:mx-12 ">
          <Hero />
          <About />
          <Technologies />
          <Experience />
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default App;
