import React from "react";
import Logo from "../assets/Logo.avif";
import Button from "../component/Button.jsx";
import telephone from "../assets/tele-Icon.png";

export const Header = () => {
  return (
    <div className="flex bg-[#1D65D1] items-center justify-between max-w-[1200px] text-white py-4 text-center px-2">
      <div>
        <img src={Logo} alt="" className="h-6" />
      </div>

      <ul className="flex justify-center px-3 py-2 text-white backdrop-blur-sm bg-white/10 rounded-md font- gap-4">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>

      <div className="flex items-center gap-4">
        <button className="flex items-center justify-center gap-1">
          <img src={telephone} alt="" className="h-4" />
          <span>(333) 8958158</span>
        </button>
        <Button text="Contact" />
      </div>
    </div>
  );
};
