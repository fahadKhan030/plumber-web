import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GetStartedItem = ({ icon, title, description }) => {
  useGSAP(() => {
    const tl = gsap.timeline(".start-wraper", {
      ScrollTrigger: {
        start: "top 80%",
      },
    });

    tl.to(".start", {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 0.6,
    });
  }, []);

  return (
    <div className="start  transform translate-y-6 start-wraper flex flex-col items-center justify-center group">
      <div className=" w-24 h-10 flex items-center justify-center bg-[#F3E063] rounded-full">
        <img
          src={icon}
          alt=""
          className="h-14 mb-5 group-hover:mb-8 transition-all duration-300"
        />
      </div>
      <div className="text-black mt-6 text-center">
        <span className="font-semibold text-xl">{title}</span>
        <p className="max-w-[300px] opacity-50 font-semibold mt-1">
          {description}
        </p>
      </div>
    </div>
  );
};

export default GetStartedItem;
