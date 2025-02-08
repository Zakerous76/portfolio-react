import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-white selection:text-black mx-auto">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#101010_1px)] bg-[size:20px_20px]"></div>
      </div>

      <div className="container mx-auto lg:pl-8">
        <Navbar></Navbar>
        <div className="main lg:mx-12 ">
          <Hero></Hero>
        </div>
      </div>
    </div>
  );
};

export default App;
