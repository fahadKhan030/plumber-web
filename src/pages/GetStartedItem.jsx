import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GetStartedItem = ({ icon, title, description }) => {
  const itemRef = useRef(null);

  useGSAP(() => {
    gsap.to(
      ".start", // initial state
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        scrollTrigger: {
          trigger: itemRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div className="start opacity-0 transform translate-y-10 flex flex-col items-center justify-center group">
      <div className="flex flex-col items-center justify-center group">
        <div className="w-24 h-10 flex items-center justify-center bg-[#F3E063] rounded-full">
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
    </div>
  );
};

export default GetStartedItem;
