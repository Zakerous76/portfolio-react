import React from "react";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-5xl">
        About
        <span className="text-purple-600 "> Me</span>
      </h1>
      <div className="flex flex-wrap">
        {/* Image Container */}
        <div className="w-full lg:w-1/2 lg:p-8 flex justify-center items-center">
          <img className="rounded-2xl px-2" src={aboutImg} alt="about" />
        </div>

        {/* Text Container */}
        <div className="w-full lg:w-1/2 lg:flex items-center">
          <div className="flex justify-center lg:justify-start tracking-tighter text-justify">
            <p className="my-2 max-w-xl py-6 font-light">{ABOUT_TEXT}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
