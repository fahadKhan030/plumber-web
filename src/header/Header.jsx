import React from "react";
import Logo from "../assets/Logo.avif";
import Button from "../component/Button.jsx";
import telephone from "../assets/tele-Icon.png";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <navbar className="flex bg-[#1D65D1] items-center justify-between max-w-[1200px] text-white py-4 text-center px-2">
      <div>
        <img src={Logo} alt="" className="h-6" />
      </div>

      <ul className="flex justify-center px-3 py-2 text-white backdrop-blur-sm bg-white/10 rounded-md font- gap-4">
        <NavLink to={"/"} className="hover:text-[#F3E063]">
          Home
        </NavLink>
        <NavLink to={"/about"} className="hover:text-[#F3E063]">
          About
        </NavLink>
        <NavLink to={"/services"} className="hover:text-[#F3E063]">
          Services
        </NavLink>
        <NavLink to={"/contact"} className="hover:text-[#F3E063]">
          Contact
        </NavLink>
      </ul>

      <div className="flex items-center gap-4">
        <button className="flex items-center justify-center gap-1">
          <img src={telephone} alt="" className="h-3" />
          <span>(333) 8958158</span>
        </button>
        <Button children="Contact" />
      </div>
    </navbar>
  );
};
