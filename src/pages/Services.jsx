import React from "react";
import drop from "../assets/dropb.png";
import fan from "../assets/fanb.png";
import plumbing from "../assets/plumbingb.png";
import tub from "../assets/tubb.png";
import wasterwater from "../assets/drainb.png";
import driver from "../assets/driverb.png";
import "../App.css";
import Button from "../component/Button";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const serviceCard = [
  {
    id: 1,
    title: "Leak Detection",
    description:
      "24/7 emergency plumbing services to handle any urgent issues.",
    image: drop,
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
    description: "Professional pipe repair services to fix leaks and damages.",
    image: plumbing,
  },
];

const Services = () => {
  useGSAP(() => {
    gsap.to(".serviesCard", {
      y: 0, // start further down for smooth motion
      opacity: 1,
      duration: 1.2,
      stagger: 0.25,
      // ease: "back.out(1.7)", // smoother bounce-like easing
    });
  }, []);

  return (
    <div>
      <div className="relative text-white gradient-bg h-[35vh] lg:h-[45vh] pt-20 lg:pt-36 w-full">
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

      <div className="w-full px-4 py-20 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-[1200px] mx-auto">
          {serviceCard.map((service) => (
            <div
              key={service.id}
              className="serviesCard transform translate-y-11 opacity-0 mt-10"
            >
              <div className=" flex flex-col gap-3 md:gap-10 hover:scale-95 transition-transform duration-300 hover:cursor-pointer text-start border-[0.1px] shadow-xl bg-[#e6eefa] border-gray-400 px-5 py-7 rounded-xl">
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
