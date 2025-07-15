import React, { useState } from "react";
import Logo from "../assets/Logo.avif";
import Button from "../component/Button.jsx";
import telephone from "../assets/tele-Icon.png";
import { NavLink } from "react-router-dom";
import MobilNavIcon from "../assets/menuIcon.png";
import closeIcon from "../assets/closeIcon.png";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

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
          <div className="flex items-center gap-2 md:gap-4">
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
            <button className=" md:hidden bg-[#222222]/30 backdrop-blur-2xl px-3 py-2 rounded-md">
              {isOpen ? (
                <img
                  src={closeIcon}
                  alt="Close"
                  onClick={toggleMenu}
                  className="h-6"
                />
              ) : (
                <img
                  src={MobilNavIcon}
                  alt="Menu"
                  onClick={toggleMenu}
                  className="h-6"
                />
              )}
            </button>
            <Button children="Contact" className="px-2 py-2" />
          </div>
        </div>
        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-16 left-1/2 max-w-[360px] transform -translate-x-1/2 w-full bg-white text-black py-8 lg:hidden rounded-4xl shadow-md">
            <ul className="flex flex-col items-center gap-4">
              <NavLink to="/" onClick={toggleMenu}>
                Home
              </NavLink>
              <NavLink to="/about" onClick={toggleMenu}>
                About
              </NavLink>
              <NavLink to="/services" onClick={toggleMenu}>
                Services
              </NavLink>
              <NavLink to="/contact" onClick={toggleMenu}>
                Contact
              </NavLink>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
