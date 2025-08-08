import React from "react";
import "../App.css";
import Button from "../component/Button";
import Logo from "../assets/blackLogo.avif";
import { Link } from "react-router-dom";
import facebook from "../assets/facebook.png";
import insta from "../assets/insta.png";
import twitter from "../assets/twitter.png";
import youtube from "../assets/youtube.png";

import footerimg1 from "../assets/footerimg1.png";
import footerimg2 from "../assets/footerimg2.png";
import footerimg3 from "../assets/footerimg3.png";
import footerimg4 from "../assets/footerimg4.png";
import footerimg5 from "../assets/footerimg5.png";
import footerimg6 from "../assets/footerimg6.png";

const Footer = () => {
  const socialLinks = [
    { id: 1, icon: facebook, url: "#" },
    { id: 2, icon: insta, url: "#" },
    { id: 3, icon: twitter, url: "#" },
    { id: 4, icon: youtube, url: "#" },
  ];

  const footerImages = [
    footerimg1,
    footerimg2,
    footerimg3,
    footerimg4,
    footerimg5,
    footerimg6,
  ];

  return (
    <div className="text-white w-full text-center">
      {/* Call to Action */}
      <div className="gradient-bg py-4 px-3">
        <div className="max-w-[1200px] mx-auto flex-col md:flex-row gap-8 flex items-center py-10 md:py-14 lg:py-20 justify-between">
          <h2 className="text-2xl md:text-5xl font-semibold">
            Need a plumber fast?
          </h2>
          <Button children="Call Us 555-0123" className="py-3 px-4" />
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-[1200px] mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-3 py-10 md:py-14 lg:py-20 items-center">
        {/* Logo & Social */}
        <div className="w-full">
          <img src={Logo} alt="Company Logo" className="h-6" loading="lazy" />
          <p className="text-gray-400 text-start mt-2">
            Top-notch residential and commercial plumbing service
          </p>
          <div className="flex items-center gap-4 mt-3">
            {socialLinks.map((icon) => (
              <a href={icon.url} key={icon.id} aria-label="Social Link">
                <img
                  src={icon.icon}
                  alt=""
                  loading="lazy"
                  className="h-4 md:h-6 hover:scale-110 transition-transform duration-300"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="grid max-w-[300px] w-full grid-rows-2 grid-cols-3 gap-2">
          {footerImages.map((img, idx) => (
            <div
              key={idx}
              className="aspect-square bg-gray-200 rounded-md overflow-hidden"
            >
              <img
                src={img}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover opacity-0 transition-opacity duration-500"
                onLoad={(e) => (e.target.style.opacity = 1)}
              />
            </div>
          ))}
        </div>

        {/* Manhattan Location */}
        <div className="text-black text-start flex flex-col gap-3 lg:gap-6">
          <h5 className="font-semibold text-[24px]">Manhattan</h5>
          <span className="text-gray-500 font-semibold">
            1234 Broadway New York, NY 1001
          </span>
          <p>Stop by and meet our team – we're happy to help!</p>
        </div>

        {/* Brooklyn Location */}
        <div className="text-black text-start flex flex-col gap-3 lg:gap-6">
          <h5 className="font-semibold text-[24px]">Brooklyn</h5>
          <span className="text-gray-500 font-semibold">
            1234 Broadway New York, NY 1001
          </span>
          <p>Open Monday to Saturday, 9:00 AM – 6:00 PM</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
