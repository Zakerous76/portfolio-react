import React from "react";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-white selection:text-black">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#101010_1px)] bg-[size:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-2">
        <Navbar></Navbar>
      </div>
    </div>
  );
};

export default App;
