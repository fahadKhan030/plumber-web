import React from "react";
import bg from "../assets/aboutBG.jpg";
import cheaklist from "../assets/cheakicon.png";
import safety from "../assets/safety.jpg";
import sustanibility from "../assets/sustanibility.jpg";
import workshop from "../assets/workshops.jpg";

import ryan from "../assets/Ryan.avif";
import michael from "../assets/michael.avif";
import daniel from "../assets/daniel.avif";
import david from "../assets/david.avif";
import john from "../assets/john.avif";
import kevin from "../assets/kevin.avif";
import robert from "../assets/robert.avif";
import mark from "../assets/mark.avif";

import "../App.css";

const About = () => {
  const aboutPoints = [
    {
      data: "Transparency",
    },
    {
      data: "Excellence",
    },
    {
      data: "Sustainability",
    },
    {
      data: "Customer focus",
    },
  ];

  const training = [
    {
      id: 1,
      img: safety,
      title: "Safety training",
      aboutTranning:
        "Our new employees receive detailed training on safety protocols to ensure they can perform their duties safely.",
    },
    {
      id: 2,
      img: sustanibility,
      title: "Regular workshops",
      aboutTranning:
        "We host regular workshops and seminars. These sessions cover the latest advancements in plumbing technology.",
    },
    {
      id: 3,
      img: workshop,
      title: "Sustainability",
      aboutTranning:
        "We provide training on sustainable practices, including water conservation and efficient systems.",
    },
  ];

  const team = [
    {
      img: ryan,
      post: "Owner & Master Plumber",
      name: "Ryan Johnson",
    },
    {
      img: michael,
      post: "Lead Technician",
      name: "Michael Brown",
    },
    {
      img: daniel,
      post: "Senior Plumber",
      name: "Daniel Smith",
    },
    {
      img: david,
      post: "Pipe Installation Specialist",
      name: "David Lee",
    },
    {
      img: john,
      post: "Drainage Expert",
      name: "John Carter",
    },
    {
      img: kevin,
      post: "Water Heater Technician",
      name: "Kevin Harris",
    },
    {
      img: robert,
      post: "Emergency Service Plumber",
      name: "Robert Wilson",
    },
    {
      img: mark,
      post: "Customer Service Manager",
      name: "Mark Thompson",
    },
  ];

  return (
    <div className="text-black w-full">
      <div className="relative text-white bg-black h-[35vh] lg:h-[45vh] pt-20 lg:pt-36 w-full">
        <div className="flex items-center justify-center flex-col max-w-[1200px] mx-auto">
          <img
            className="absolute opacity-50 top-0 right-0 h-full object-cover w-full"
            src={bg}
            alt=""
          />
          <h1 className="text-3xl z-40 md:text-5xl lg:text-6xl font-semibold">
            About Us
          </h1>
          <span className="text-center z-40 max-w-[300px] md:max-w-[500px] w-full mt-3 mb-9">
            We offer a comprehensive range of plumbing services designed to
            address all your plumbing needs.
          </span>
        </div>
      </div>

      <div className="w-full px-4 mt-20">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-[1200px] mx-auto gap-10 text-black">
          <div className="flex-1 w-full relative group">
            <img
              src={bg}
              alt=""
              className="rounded-lg shadow-lg object-cover h-[400px] w-full md:h-[450px] lg:h-[500px]"
            />
          </div>

          <div className="flex-1 text-start ">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
              Plumbing began with a simple mission
            </h2>
            <p className="text-gray-600  max-w-[600px] mx-auto mb-6">
              Over the years, we have grown from a small local business to a
              leading plumbing service provider. We aim to provide solutions
              that are not only effective but also sustainable.
            </p>
            <div className="grid grdi-col-1  md:grid-cols-2 gap-3 ">
              {aboutPoints.map((items) => (
                <div className="flex items-center  gap-3">
                  <img src={cheaklist} alt="" className="h-6" />
                  <span className="text-xl font-semibold">{items.data}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#E7EEFB] px-4 mt-20">
        <div className="flex flex-col items-center justify-between py-20 max-w-[1200px] mx-auto gap-10 text-black">
          <div className="flex gap-3 md:gap-6 lg:gap-10 flex-col md:flex-row items-center">
            <h2 className="text-3xl max-w-[500px] w-full md:text-4xl lg:text-5xl font-semibold mb-4">
              We invest in continuous training
            </h2>
            <p className="max-w-[500px] w-full">
              We are dedicated to maintaining the highest standards of quality
              in everything we do. From the materials we use to the techniques
              we employ, excellence is our benchmark.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {training.map((items, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index === training.length - 1 ? "md:hidden  lg:flex" : ""
                }`}
              >
                <div className="rounded-t-2xl overflow-hidden h-60">
                  <img
                    src={items.img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-around gap-2 min-h-40 flex-col bg-white py-4 rounded-b-xl px-3">
                  <h5 className="text-xl font-semibold">{items.title}</h5>
                  <p className="text-black">{items.aboutTranning}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full text-black mt-20 px-4">
        <div className="max-w-[1200px]  w-full mx-auto">
          <div className="flex items-center flex-col justify-center">
            <h2 className="text-4xl font-semibold">Meet the team </h2>
            <p className="text-gray-500 max-w-[500px] text-center mt-2">
              Our success is built on the expertise and dedication of our team.
              Each member of Plumbing is a certified professional.
            </p>
          </div>

          <div className="mt-10 mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {team.map((items) => (
              <div>
                <div className="h-60 w-50 overflow-hidden rounded-xl">
                  <img
                    src={items.img}
                    alt=""
                    className="h-full w-full hover:scale-105 transform-all duration-150 object-cover   "
                  />
                </div>
                <span className="text-gray-400">{items.post}</span>
                <p className="text-xl font-semibold">{items.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
