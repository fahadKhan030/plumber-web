import React from "react";
import Logo from "../assets/Logo.png";
export const Header = () => {
  return (
    <div className="flex  justify-between max-w-[1200px] bg-gray-800 text-white py-4 text-center">
      <div>
        <img src={Logo} alt="Logo" className="h-5" />
      </div>

      <ul className="flex justify-center gap-4">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>

      <div className="flex itmems-center gap-4">
        <button>Menu</button>
        <button>Contact</button>
      </div>
    </div>
  );
};
