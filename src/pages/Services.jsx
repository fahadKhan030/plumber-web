import React from "react";
import drop from "../assets/dropb.png";
import fan from "../assets/fanb.png";
import plumbing from "../assets/plumbingb.png";
import tub from "../assets/tubb.png";
import wasterwater from "../assets/drainb.png";
import driver from "../assets/driverb.png";
import right from "../assets/arrowright.png";
import "../App.css";
import Button from "../component/Button";

const Services = () => {
  const serviceCard = [
    {
      id: 1,
      title: "Leak Detection",
      description:
        "24/7 emergency plumbing services to handle any urgent issues.",
      image: drop, // Replace with actual image path
    },
    {
      id: 2,
      title: "Drain Cleaning",
      description: "Advanced leak detection services to prevent water damage.",
      image: wasterwater,
    },
    {
      id: 3,
      title: "Water Heater Installation",
      description:
        "Professional drain cleaning services to keep your pipes clear.",
      image: driver,
    },
    {
      id: 4,
      title: "Bathroom & Kitchen Plumbing",
      description:
        "Professional drain cleaning services to keep your pipes clear.",
      image: tub,
    },
    {
      id: 5,
      title: "Water Filtration Systems",
      description:
        "Professional drain cleaning services to keep your pipes clear.",
      image: fan,
    },
    {
      id: 6,
      title: "Pipe Repair & Maintenance",
      description:
        "Professional pipe repair services to fix leaks and damages.",
      image: plumbing,
    },
  ];

  return (
    <div>
      <div className="relative text-white gradient-bg  h-[35vh] lg:h-[45vh] pt-20 lg:pt-36 w-full">
        <div className="flex items-center justify-center flex-col max-w-[1200px] mx-auto">
          <h1 className="text-3xl z-40 md:text-5xl lg:text-6xl font-semibold">
            Services
          </h1>
          <span className="text-center z-40 max-w-[300px] md:max-w-[500px] w-full mt-3 mb-9">
            We offer a comprehensive range of plumbing services designed to
            address all your plumbing needs.
          </span>
        </div>
      </div>

      <div className="w-full  px-4 py-20 mt-10">
        <div className="grid grid-cols- 1 md:grid-cols-2 lg:grid-cols-3 gap-1 max-w-[1200px] mx-auto ">
          {serviceCard.map((service, index) => (
            <div
              key={service.index}
              className="flex flex-col md:flex-row  gap-7 max-w-[1200px] mx-auto mt-10"
            >
              <div className="flex flex-col gap-3 md:gap-10 md: hover:scale-95 transform-all duration-300 hover:cursor-pointer text-start border-[0.1px] shadow-xl bg-[#e6eefa] border-gray-400  px-5 py-7 rounded-xl ">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-10 object-cover mb-4"
                />
                <div className="flex flex-col gap-2">
                  <h3 className="text-md md:text-xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="max-w-[350px]">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
