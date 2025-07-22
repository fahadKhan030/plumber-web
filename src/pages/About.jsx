import React from "react";
import bg from "../assets/aboutBG.jpg";
import "../App.css";

const About = () => {
  return (
    <div className="text-black w-full">
      <div className="relative text-white bg-black h-[35vh] lg:h-[45vh] pt-20 lg:pt-36 w-full">
        <div className="flex items-center justify-center flex-col max-w-[1200px] mx-auto">
          <img
            className="absolute opacity-50 top-0 right-0 h-full object-cover w-full"
            src={bg}
            alt=""
          />
          <h1 className="text-3xl z-50 md:text-5xl lg:text-6xl font-semibold">
            About Us
          </h1>
          <span className="text-center z-50 max-w-[300px] md:max-w-[500px] w-full mt-3 mb-9">
            We offer a comprehensive range of plumbing services designed to
            address all your plumbing needs.
          </span>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default About;
