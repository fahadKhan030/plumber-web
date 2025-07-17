// Home.jsx
import React from "react";
import HeroImg from "../assets/HeroImg.jpg";
import Button from "../component/Button";
import { NavLink } from "react-router-dom";
import RattingImg1 from "../assets/rattingImg-1.png";
import RattingImg2 from "../assets/rattingImg-2.png";
import RattingImg3 from "../assets/rattingImg-3.png";
import phone from "../assets/phone.png";
import arrow from "../assets/arrow_right.png";
import person from "../assets/person.png";
import delivery from "../assets/delivery.png";
import ABoutImg from "../assets/aboutmg.jpg";
import cheakIcon from "../assets/cheakicon.png";
import rightarrow from "../assets/right-arrow.png";
import drop from "../assets/drop.png";
import fan from "../assets/fan.png";
import plumbing from "../assets/plumbing.png";
import tub from "../assets/tub.png";
import wasterwater from "../assets/waste-water.png";
import driver from "../assets/driver.png";

import "../App.css"; // Assuming you have a global CSS file for styles

const RatingAvatars = () => {
  const images = [RattingImg1, RattingImg3, RattingImg2];
  return (
    <div className="hidden md:hidden lg:flex">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt=""
          className="h-14 w-14 rounded-full ml-[-15px] overflow-hidden object-cover border-3 border-white"
        />
      ))}
    </div>
  );
};

const StarRating = () => (
  <span>
    {[...Array(5)].map((_, index) => (
      <span key={index} className="text-yellow-400">
        ★
      </span>
    ))}
  </span>
);

const GetStartedItem = ({ icon, title, description }) => (
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
);

const ChecklistItem = ({ title }) => (
  <div className="flex items-center gap-3">
    <img src={cheakIcon} alt="" className="h-6" />
    <span className="text-lg font-semibold">{title}</span>
  </div>
);

const Home = () => {
  const aboutPoints = [
    "Experienced and certified plumbers",
    "High-quality materials and equipment",
    "Customer satisfaction guarantee",
  ];

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
    <div className="flex flex-col items-center justify-center mt-10 md:mt-16 text-white text-center">
      {/* Hero Section */}
      <div className="w-full bg-[#1a5cbf] py-16 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-[1200px] mx-auto gap-3">
          <div className="md:text-start flex flex-col items-center md:items-start gap-4 md:gap-7 flex-1">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold max-w-[600px]">
              Your trusted plumbing solutions in New York
            </h1>
            <p className="max-w-[510px] text-md font-semibold text-gray-400">
              With over 20 years of experience, we have built a reputation for
              delivering top-notch plumbing solutions tailored to meet your
              needs.
            </p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-10">
              <NavLink to="/services">
                <Button className="px-5 font-semibold py-3.5">
                  Explore our service
                </Button>
              </NavLink>
              <div className="flex flex-col md:flex-row items-center gap-3 hover:opacity-50 transition duration-200">
                <RatingAvatars />
                <div className="flex flex-col">
                  <StarRating />
                  <p className="font-semibold">From 2000+ ratings</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 md:mt-0 flex-1 max-w-[450px]">
            <img
              src={HeroImg}
              alt=""
              className="rounded-lg shadow-lg object-cover h-[400px] md:h-[450px] lg:h-[500px]"
            />
          </div>
        </div>
      </div>

      {/* Get Started Section */}
      <div className="w-full bg-[#E6EEFA] px-4 py-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-14 max-w-[1200px] w-full mx-auto">
          <GetStartedItem
            icon={phone}
            title="+92 (333) 8958158"
            description="We remain available 24/7 for any plumbing emergency."
          />
          <img src={arrow} alt="" className="lg:flex hidden" />
          <GetStartedItem
            icon={person}
            title="Expert evaluation"
            description="Our experts will evaluate the situation and look for solutions."
          />
          <img src={arrow} alt="" className="lg:flex hidden" />
          <GetStartedItem
            icon={delivery}
            title="We arrive in 30 minutes"
            description="Our team will arrive with all the necessary equipments."
          />
        </div>
      </div>

      {/* About Section */}
      <div className="w-full px-4 mt-20">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-[1200px] mx-auto gap-10 text-black">
          <div className="flex-1 w-full relative group">
            <img
              src={ABoutImg}
              alt=""
              className="rounded-lg shadow-lg object-cover h-[400px] w-full md:h-[450px] lg:h-[500px] group-hover:opacity-50 transition-opacity duration-300"
            />
            <NavLink
              to="/about"
              className="absolute justify-center gap-4 text-center  opacity-0  bottom-4 font-semibold text-md  md:text-2xl group-hover:opacity-60 text-black  left-1/2 transform -translate-x-1/2  px-4 py-2 rounded-md flex items-center  transition-colors duration-300"
            >
              Learn more <img src={rightarrow} alt="" className="inline h-10" />
            </NavLink>
          </div>

          <div className="flex-1 text-start">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
              Plumbing solutions tailored to your needs
            </h2>
            <p className="text-gray-600 max-w-[600px] mx-auto mb-6">
              We are a team of experienced plumbers dedicated to providing
              top-notch services to our clients. With over 20 years of
              experience, we have built a reputation for delivering quality
              plumbing solutions tailored to meet your needs.
            </p>
            <div className="flex flex-col gap-6">
              {aboutPoints.map((title, index) => (
                <ChecklistItem title={title} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* <Services /> */}
      <div className="gradient-bg w-full  px-4 py-20 mt-20">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="max-w-[500px] mx-auto ">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
              Our Services
            </h2>
            <span className="text-gray-300 font-semibold text-md mx-auto">
              We offer a comprehensive range of plumbing services designed to
              address all your plumbing needs.
            </span>
          </div>
        </div>

        <div className="grid grid-cols- 1 md:grid-cols-2 lg:grid-cols-3 gap-1 max-w-[1200px] mx-auto ">
          {serviceCard.map((service, index) => (
            <div
              key={service.index}
              className="flex flex-col md:flex-row  gap-6 max-w-[1200px] mx-auto mt-10"
            >
              <div className="flex flex-col gap-3 md:gap-7 hover:scale-95 transform-all duration-300 hover:cursor-pointer text-start border-[0.1px] shadow-xl border-white bg-[#1852ab] px-5 py-7 rounded-xl ">
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
        <div className="mt-20">
          <h3 className="text-2xl md:text-4xl">Have a plumbing emergency?</h3>
          <NavLink to="/Contact">
            <Button className="px-4 py-3 mt-6 "> Contact Us</Button>
          </NavLink>
        </div>
      </div>
      {/* <Faq /> */}
      {/* <Testimonials /> */}
      {/* <Blog /> */}
    </div>
  );
};

export default Home;
