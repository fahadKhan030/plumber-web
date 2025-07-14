import React from "react";
import HeroImg from "../assets/HeroImg.jpg";
import Button from "../component/Button";

const Home = () => {
  return (
    <div className="flex items-center justify-center overflow-hidden mt-16 text-white text-center">
      {/* hero section */}
      <div className="w-full bg-[#1a5cbf] py-16">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-[1200px] max-sm:max-w-[600px] gap-3 mx-auto px-3">
          <div className=" md:text-start flex flex-col items-center md:items-start gap-7 flex-1/1">
            <h1 className="text-4xl md:text-5xl  lg:text-6xl font-bold max-w-[600px]">
              Your trusted plumbing solutions in New York
            </h1>
            <p className="mt-4 max-w-[510px] text-md font-semibold text-gray-400">
              With over 20 years of experience, we have built a reputation for
              delivering top-notch plumbing solutions tailored to meet your
              needs.
            </p>
            <div className="flex  gap-4">
              <Button
                className="px-5 font-semibold py-3.5"
                children="Explore our service"
              />
              <div>
                <span>stars</span>
                <p className="font-semibold">From 2000+ ratings</p>
              </div>
            </div>
          </div>

          <div className="mt-16 md:mt-0 flex-1/1">
            <img
              src={HeroImg}
              alt=""
              className="rounded-lg shadow-lg object-cover h-[400px] md:h-[500px] "
            />
          </div>
        </div>
      </div>

      {/* get started */}
      <div></div>
      {/* About us  */}
      <div></div>
      {/* Services */}
      <div></div>
      {/* Faq */}
      <div></div>
      {/* Testimonials */}
      <div></div>
      {/* Blog */}
      <div></div>
    </div>
  );
};

export default Home;
