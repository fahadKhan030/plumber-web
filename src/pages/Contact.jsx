import React from "react";
import "../App.css";
import { Form } from "react-router-dom";
import Button from "../component/Button";
import phone from "../assets/telephone.png";
import addresss from "../assets/pin.png";
import mail from "../assets/email.png";

const Contact = () => {
  const address = [
    {
      icon: phone,
      details: "(595) 555-0123",
    },
    {
      icon: addresss,
      details: "5th Avenue, New York City",
    },
    {
      icon: mail,
      details: "info@plumbing.com",
    },
  ];
  return (
    <div className="text-black w-full">
      <div className="relative text-white gradient-bg h-[35vh] flex items-center justify-center flex-col lg:h-[45vh] pt-20 lg:pt-36 w-full">
        <h1 className="text-3xl z-40 md:text-5xl lg:text-6xl font-semibold">
          Contact Us
        </h1>
        <p className="text-center z-40 max-w-[300px] md:max-w-[500px] w-full mt-3 mb-9">
          Contact Plumbing today and take the first step towards reliable and
          professional plumbing solutions.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 mx-auto max-w-[1200px] px-4 py-8">
        <div>
          <div className="max-w-[550px]">
            <h2 className="text-3xl md:text-4xl  lg:text-5xl font-semibold mb-4">
              Let's get in touch and work together!
            </h2>
            <p className="text-gray-400 ">
              Whether you’re dealing with an emergency, need routine
              maintenance, or have a question about our services, our team at
              Plumbing is ready to assist you.
            </p>
          </div>

          <div className="flex flex-col gap-2 mt-7">
            {address.map((items) => (
              <div className="flex gap-2 items-center">
                <div className="bg-[#194fa0] p-[6px] rounded-full">
                  <img src={items.icon} alt="" className="h-4" />
                </div>
                <p>{items.details}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#e7effa] shadow-xl text-center p-5 rounded-xl w-full md:flex-1/2">
          <h4 className="text-xl font-semibold">Send us a message</h4>

          <Form className="flex flex-col gap-4 px-4 mt-5">
            <input
              type="text"
              placeholder="Your name"
              className="bg-white px-3 py-3 rounded-xl border-0 focus:outline-1 outline-[#1D65D1]"
            />
            <input
              type="Email"
              placeholder="Email"
              className="bg-white px-3 py-3 rounded-xl border-0 focus:outline-1  outline-[#1D65D1]"
            />
            <select
              name="service"
              id=""
              className="bg-white px-3 py-3 rounded-xl border-0"
            >
              <option value="Residential Plumbing">Residential Plumbing</option>
              <option value="Commercial Plumbing">Commercial Plumbing</option>
            </select>
            <textarea
              className="bg-white h-[150px]  px-3 py-2 rounded-xl border-0 focus:outline-1 outline-[#1D65D1]"
              placeholder="Your message"
            />

            <input
              type="button"
              value="submit"
              className="bg-[#f2e062]  rounded-xl py-2"
            />
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
