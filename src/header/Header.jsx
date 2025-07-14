import React from "react";
import Logo from "../assets/Logo.avif";
import Button from "../component/Button.jsx";
import telephone from "../assets/tele-Icon.png";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="fixed top-0 w-screen bg-[#1a5cbf] text-white py-4 px-3 z-50">
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-between w-full max-w-[1200px]">
          {/* Logo */}
          <div>
            <img src={Logo} alt="Logo" className="h-7" />
          </div>

          {/* Large screen links */}
          <ul className="hidden lg:flex justify-center lg:text-[18px] px-3 py-2 backdrop-blur-sm bg-white/10 rounded-md gap-4">
            <NavLink to="/" className="hover:text-[#F3E063]">
              Home
            </NavLink>
            <NavLink to="/about" className="hover:text-[#F3E063]">
              About
            </NavLink>
            <NavLink to="/services" className="hover:text-[#F3E063]">
              Services
            </NavLink>
            <NavLink to="/contact" className="hover:text-[#F3E063]">
              Contact
            </NavLink>
          </ul>

          {/* Mid screen links and buttons */}
          <div className="flex items-center gap-4">
            <ul className="hidden md:flex lg:hidden justify-center md:text-md px-3 py-2 backdrop-blur-sm bg-white/10 rounded-md gap-4">
              <NavLink to="/" className="hover:text-[#F3E063]">
                Home
              </NavLink>
              <NavLink to="/about" className="hover:text-[#F3E063]">
                About
              </NavLink>
              <NavLink to="/services" className="hover:text-[#F3E063]">
                Services
              </NavLink>
              <NavLink to="/contact" className="hover:text-[#F3E063]">
                Contact
              </NavLink>
            </ul>
            <button className="items-center hidden lg:flex justify-center gap-1">
              <img src={telephone} alt="Phone" className="h-3" />
              <span>(333) 8958158</span>
            </button>
            <Button>Contact</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
