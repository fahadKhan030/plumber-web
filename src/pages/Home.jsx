// Home.jsx
import React, { useState } from "react";
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
import right from "../assets/arrowright.png";
import GetStartedItem from "./GetStartedItem";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import test1 from "../assets/test1.jpg";
import test2 from "../assets/text2.jpg";
import test3 from "../assets/text3.jpg";
import test4 from "../assets/text4.jpg";
import test5 from "../assets/text5.jpg";

import blogimg1 from "../assets/blogimg1.jpg";
import blogimg2 from "../assets/blogimg2.jpg";
import blogimg3 from "../assets/blogimg3.jpg";

import "../App.css";

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

const ChecklistItem = ({ title }) => (
  <div className="flex items-center gap-3">
    <img src={cheakIcon} alt="" className="h-6" />
    <span className="text-lg font-semibold">{title}</span>
  </div>
);

const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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

  const Faq = [
    {
      id: 0,
      Q: "Are your plumbers licensed and insured?",
      Ans: "Yes, all our plumbers are fully licensed, insured, and have undergone extensive training to ensure they provide the highest quality service.",
    },
    {
      id: 1,
      Q: "Do you offer free estimates?",
      Ans: "Yes, we provide free estimates for all our services. Contact us to schedule a consultation, and we’ll provide you with a detailed quote at no obligation.",
    },
    {
      id: 2,
      Q: "What payment methods do you accept?",
      Ans: "We accept various payment methods, including cash, credit/debit cards, and checks. If you have specific payment preferences, please let us know.",
    },
    {
      id: 3,
      Q: "Do you offer financing options?",
      Ans: "Yes, we offer flexible financing options to help you manage the cost of larger projects. Contact us to learn more about our financing plans.",
    },
  ];

  const Testimonial = [
    {
      id: 1,
      img: test1,
      name: "James Miller",
      Comment:
        "Great service and friendly staff! Highly recommend this place for anyone looking for professional support.",
      reviewSite: "Google Maps",
    },
    {
      id: 2,
      img: test2,
      name: "David Lee",
      Comment:
        "Quick response time and very helpful throughout. Would definitely use their services again.",
      reviewSite: "Facebook",
    },
    {
      id: 3,
      img: test3,
      name: "Daniel Smith",
      Comment:
        "The team went above and beyond to assist me. Smooth and professional experience from start to finish.",
      reviewSite: "Trustpilot",
    },
    {
      id: 4,
      img: test4,
      name: "John Williams",
      Comment:
        "Amazing experience! Their attention to detail and customer care really stood out.",
      reviewSite: "Yelp",
    },
    {
      id: 5,
      img: test5,
      name: "Usman Tariq",
      Comment:
        "I had a fantastic experience. Everything was well-organized and the staff were incredibly polite.",
      reviewSite: "Instagram",
    },
    {
      id: 6,
      img: test5,
      name: "Usman Tariq",
      Comment:
        "I had a fantastic experience. Everything was well-organized and the staff were incredibly polite.",
      reviewSite: "Instagram",
    },
  ];

  const blogs = [
    {
      id: 0,
      img: blogimg1,
      title: "How to Identify and Fix Common Plumbing Leaks",
    },
    {
      id: 1,
      img: blogimg2,
      title: "The Benefits of Installing a Tankless Water Heater",
    },
    {
      id: 3,
      img: blogimg3,
      title: "Eco-Friendly Solutions to Reduce Your Water Bill",
    },
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero", // the section to watch
        start: "top 80%", // when the top of `.hero` hits 80% of viewport
        toggleActions: "play none none reverse", // optional
      },
    });

    // Animate heading items
    tl.to(".text, .headingItem", {
      duration: 0.9,
      y: 0,
      opacity: 1,
      stagger: 0.09,
      ease: "power3.out",
    });

    // Animate CTA items
    tl.to(".ctaItems", {
      duration: 0.5,
      y: 0,
      opacity: 1,
      stagger: 0.06,
      ease: "power3.out",
    });

    // Animate image separately with its own ScrollTrigger
    gsap.to(".headingImg", {
      scrollTrigger: {
        trigger: ".hero",
        start: "top 80%",
      },
      opacity: 1,
      duration: 0.6,
      x: 0,
      ease: "power3.out",
    });
  });

  return (
    // Home Page
    <div className="flex flex-col items-center justify-center mt-10 md:mt-16 text-white text-center">
      {/* Hero Section */}
      <div className="w-full absolute top-0 gradient-bg py-30 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-[1200px] mx-auto gap-3">
          <div className="md:text-start flex flex-col items-center md:items-start gap-4 md:gap-7 flex-1">
            <h1 className="headingItem opacity-0  transform translate-y-10 flex  justify-center  md:justify-start gap-2 md:gap-4 flex-wrap flex-row md:text-start text-center text-4xl md:text-5xl lg:text-6xl font-bold max-w-[600px]">
              <span className="text opacity-0 inline-block transform translate-y-10">
                Your
              </span>
              <span className="text opacity-0 inline-block transform translate-y-6">
                trusted
              </span>
              <span className="text opacity-0 inline-block transform translate-y-6">
                plumbing
              </span>
              <span className="text opacity-0 inline-block transform translate-y-6">
                solutions
              </span>
              <span className="text opacity-0 inline-block transform translate-y-6">
                in
              </span>
              <span className="text opacity-0 inline-block transform translate-y-6">
                New York
              </span>
            </h1>

            <p className="opacity-0 inline-block transform translate-y-10 headingItem max-w-[510px] text-md font-semibold text-gray-400">
              With over 20 years of experience, we have built a reputation for
              delivering top-notch plumbing solutions tailored to meet your
              needs.
            </p>
            <div className="opacity-0  transform translate-y-10 headingItem flex flex-col md:flex-row gap-4 md:gap-10">
              <NavLink
                to="/services"
                className="ctaItems  opacity-0  transform translate-y-10"
              >
                <Button className="px-5 font-semibold py-3.5">
                  Explore our service
                </Button>
              </NavLink>
              <div className="ctaItems  opacity-0  transform translate-y-10 flex ctaItems flex-col md:flex-row hover:cursor-pointer items-center gap-3 ">
                <RatingAvatars className="" />
                <div className="flex flex-col">
                  <StarRating className="" />
                  <p className="">From 2000+ ratings</p>
                </div>
              </div>
            </div>
          </div>
          <div className="headingImg opacity-0 transform translate-x-16 mt-16 md:mt-0 flex-1 max-w-[450px]">
            <img
              src={HeroImg}
              alt=""
              className="rounded-lg shadow-lg object-cover h-[400px] md:h-[450px] lg:h-[500px]"
            />
          </div>
        </div>
      </div>

      {/* Get Started Section */}
      <div className="w-full bg-[#E6EEFA] px-4 mt-[940px] md:mt-[620px] lg:mt-[670px] py-20">
        <div className="start-wrapper flex flex-col md:flex-row justify-between items-center gap-14 max-w-[1200px] w-full mx-auto">
          <GetStartedItem
            icon={phone}
            className=""
            title="+92 (333) 8958158"
            description="We remain available 24/7 for any plumbing emergency."
          />
          <img src={arrow} alt="" className="lg:flex hidden" />
          <GetStartedItem
            className=""
            icon={person}
            title="Expert evaluation"
            description="Our experts will evaluate the situation and look for solutions."
          />
          <img src={arrow} alt="" className="lg:flex hidden" />
          <GetStartedItem
            className=""
            icon={delivery}
            title="We arrive in 30 minutes"
            description="Our team will arrive with all the necessary equipment."
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
              className="absolute justify-center gap-4 text-center   bottom-4 font-semibold text-md  md:text-2xl group-hover:opacity-60 text-black  left-1/2 transform -translate-x-1/2  px-4 py-2 rounded-md flex items-center  transition-colors duration-300"
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
              <div className="flex flex-col gap-3 md:gap-7 hover:scale-95 transform-all duration-300 hover:cursor-pointer text-start border-[0.1px] shadow-xl border-gray-400 bg-[#1852ab] px-5 py-7 rounded-xl ">
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
      <div className="w-full px-4  mt-14 md:mt-16 lg:mt-20">
        <div className="flex flex-col md:flex-row  md:items-start  gap-3  max-w-[1200px] w-full mx-auto">
          <div className="flex md:w-1/2 flex-col mt-4 gap-2 md:gap-2 lg:gap-4">
            <h2 className="text-3xl text-start max-w-[450px] w-full font-semibold text-black md:text-4xl lg:text-6xl">
              Your questions, answered
            </h2>
            <p className="text-gray-500 max-w-[400px] w-full text-start mt-3">
              Answers to the most common questions our customers have. If you
              don’t find the information you’re looking for, feel free to
              contact us.
            </p>
            <NavLink to="/Contact" className="flex">
              <Button className="px-4  py-3 mt-6 shadow-2xl ">
                Contact Us
              </Button>
            </NavLink>
          </div>

          <div className="text-black md:w-1/2 text-start">
            {Faq.map((FaqItem, index) => (
              <div
                key={index}
                onClick={() => toggleAnswer(index)}
                className="mt-3 md:mt-7 border border-gray-400 hover:cursor-pointer px-3 py-3 md:px-4 md:py-4 lg:px-6 lg:py-4 rounded-md flex gap-4 flex-col"
              >
                <div className="flex items-center justify-between">
                  <span className="text-md font-semibold md:text-xl">
                    {FaqItem.Q}
                  </span>

                  <img
                    src={right}
                    alt=""
                    className={`h-2 md:h-4 transition-transform duration-300 ${
                      openIndex === index ? "rotate-90" : "rotate-0"
                    }`}
                  />
                </div>

                {/* Smooth answer toggle section */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? "max-h-[500px] mt-1" : "max-h-0"
                  }`}
                >
                  <p className="text-[13px] md:text-[16px] text-gray-600">
                    {FaqItem.Ans}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <Testimonials...... carousel is not complete in this section yet  work in progress/> */}
      <div className="w-full px-4 bg-[#e6eefa]   mt-14 md:mt-16 py-8 md:py-16 lg:mt-20">
        <div className=" flex items-center flex-col py-10 justify-center max-w-[1200px] overflow-hidden mx-auto">
          <div className="flex items-center justify-center flex-col">
            <h2 className="text-3xl text-start max-w-[550px] w-full font-semibold text-black md:text-4xl lg:text-5xl">
              What our customers say
            </h2>
            <p className="text-gray-500 text-start md:text-center max-w-[430px]  w-full mt-2 ">
              Our customers are at the heart of everything we do. We listen to
              your needs and tailor our services to meet them.
            </p>
          </div>

          {
            <div className="flex justify-self-start flex-nowrap gap-5 mt-16 shadow w-full overflow-hidden py-3 text-black ">
              {Testimonial.map((items, index) => (
                <div
                  className="flex flex-col justify-between gap-3  p-6 flex-[0_0_80%] md:flex-[0_0_45%] lg:flex-[0_0_30%]   rounded-2xl md:gap-6 bg-white"
                  key={index}
                >
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>

                  <p className="text-start text-gray-500">{items.Comment}</p>

                  <div className="flex gap-3 items-center">
                    <img
                      src={items.img}
                      alt=""
                      className="h-12 w-12 rounded-full border border-[] object-cover"
                    />
                    <div className="text-start">
                      <span className="font-semibold">{items.name}</span>
                      <p className="text-gray-500 font-semibold text-sm">
                        {items.reviewSite}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          }
        </div>
      </div>

      {/* <Blog /> */}
      <div className="w-full px-4  mt-14 md:mt-16 py-8 md:py-16 lg:mt-20">
        <div className="flex flex-col items-center max-w-[1200px] justify-between mx-auto">
          <div className="flex items-center justify-center flex-col">
            <h2 className="text-3xl text-start max-w-[380px] w-full font-semibold text-black md:text-4xl lg:text-5xl">
              Latest blog posts
            </h2>
            <p className="text-gray-500 text-start md:text-center max-w-[450px]  w-full mt-2 ">
              Our blog is designed to help you understand your plumbing system
              better and provide valuable insights to keep it running smoothly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-7 mt-9 justify-around">
            {blogs.map((blog, index) => (
              <NavLink
                to=""
                className={`flex gap-3 flex-col text-black ${
                  index === blogs.length - 1 ? "md:hidden lg:flex" : ""
                }`}
              >
                <div className="h-90 rounded-xl overflow-hidden ">
                  <img
                    src={blog.img}
                    alt=""
                    className="object-cover h-full w-full"
                  />
                </div>
                <h6 className="text-xl text-start font-semibold ">
                  {blog.title}
                </h6>
                <button className="text-start">
                  <a href="" className="text-[#1850A4]">
                    Read more
                  </a>
                </button>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
