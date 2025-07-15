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

const Home = () => {
  const RattingImg = [
    {
      img: RattingImg1,
    },
    {
      img: RattingImg3,
    },
    {
      img: RattingImg2,
    },
  ];

  // if(window.screenY < 30){
  //   {

  // }

  return (
    <div className="flex items-center flex-col justify-center  mt-10 md:mt-16 text-white text-center ">
      {/* hero section */}
      <div className="w-full bg-[#1a5cbf] py-16 px-4 md:px-0 ">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-[1200px] max-sm:max-w-[800px] gap-3 mx-auto px-0 md:px-3 ">
          <div className=" md:text-start flex flex-col items-center md:items-start gap-4 md:gap-7 flex-1/1">
            <h1 className="text-3xl md:text-5xl  lg:text-6xl font-bold max-w-[600px]">
              Your trusted plumbing solutions in New York
            </h1>
            <p className=" max-w-[510px] text-md font-semibold text-gray-400">
              With over 20 years of experience, we have built a reputation for
              delivering top-notch plumbing solutions tailored to meet your
              needs.
            </p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-10">
              <NavLink to="/services">
                <Button
                  className="px-5 font-semibold py-3.5"
                  children="Explore our service"
                />
              </NavLink>

              <div className="flex flex-col md:flex-row  items-center justify-between gap-3 hover:opacity-50 transition duration-200">
                <div className=" hidden  md:hidden lg:flex">
                  {RattingImg.map((img) => (
                    <img
                      src={img.img}
                      alt=""
                      className="h-14 w-14 rounded-full ml-[-15px] overflow-hidden object-cover border-3 border-white  "
                    />
                  ))}
                </div>
                <div className="flex flex-col">
                  <span>
                    {[...Array(5)].map((_, index) => (
                      <span key={index} className="text-yellow-400">
                        ★
                      </span>
                    ))}
                  </span>
                  <p className="font-semibold">From 2000+ ratings</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 md:mt-0 flex-1/1 max-w-[450px]">
            <img
              src={HeroImg}
              alt=""
              className="rounded-lg shadow-lg object-cover h-[400px] md:h-[500px] "
            />
          </div>
        </div>
      </div>

      {/* get started */}
      <div className=" flex flex-col md:flex-row justify-between items-center mt-14 md:mt-30 gap-14 mb-30 max-w-[1200px] w-full mx-auto h-10 px-0 md:px-3 ">
        <div className="flex flex-col items-center justify-center group">
          <div className="w-24 h-10 flex items-center justify-center bg-[#F3E063] rounded-full">
            <img
              src={phone}
              alt=""
              className="h-14 mb-5 group-hover:mb-8 transition-all duration-300 "
            />
          </div>
          <div className="text-black mt-6">
            <span className="font-semibold text-xl">+92 (333) 8958158</span>
            <p className="max-w-[300px] opacity-50 font-semibold mt-1">
              We remain available 24/7 for any plumbing emergency.
            </p>
          </div>
        </div>
        <img src={arrow} alt="" className="lg:flex hidden" />

        <div className="flex flex-col items-center justify-center group">
          <div className="w-24 h-10 flex items-center justify-center bg-[#F3E063] rounded-full">
            <img
              src={person}
              alt=""
              className="h-14 mb-8 group-hover:mb-10 transition-all duration-300 "
            />
          </div>
          <div className="text-black mt-6">
            <span className="font-semibold text-xl">Expert evaluation</span>
            <p className="max-w-[300px] opacity-50 font-semibold mt-1">
              Our experts will evaluate the situation and look for solutions.
            </p>
          </div>
        </div>
        <img src={arrow} alt="" className="lg:flex hidden" />

        <div className="flex flex-col items-center justify-center group">
          <div className="w-24 h-10 flex items-center justify-center bg-[#F3E063] rounded-full">
            <img
              src={delivery}
              alt=""
              className="h-14 mb-5 group-hover:mb-8 transition-all duration-300 "
            />
          </div>
          <div className="text-black mt-6 ">
            <span className="font-semibold text-xl">
              We arrive in 30 minutes
            </span>
            <p className="max-w-[300px] opacity-50 font-semibold mt-1">
              Our team will arrive with all the necessary equipment.s
            </p>
          </div>
        </div>
      </div>
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
