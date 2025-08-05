// src/pages/Blog.jsx
import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

import blogimg1 from "../assets/blog1.avif";
import blogimg2 from "../assets/blog2.avif";
import blogimg3 from "../assets/blog3.avif";
import blogimg4 from "../assets/blog4.avif";
import blogimg5 from "../assets/blog5.webp";
import blogimg6 from "../assets/blog6.webp";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      img: blogimg1,
      date: "2023-06-01",
      title: "Understanding Plumbing Systems",
      description:
        "A comprehensive guide to the components and functions of plumbing systems.",
    },
    {
      id: 2,
      img: blogimg2,
      date: "2023-07-10",
      title: "Common Plumbing Issues",
      description:
        "An overview of common plumbing problems and how to fix them.",
    },
    {
      id: 3,
      img: blogimg3,
      date: "2023-08-20",
      title: "Choosing the Right Plumber",
      description: "Tips for selecting a qualified plumber for your needs.",
    },
    {
      id: 4,
      img: blogimg4,
      date: "2023-09-15",
      title: "Preventative Plumbing Maintenance",
      description: "How to keep your plumbing system in top shape.",
    },
    {
      id: 5,
      img: blogimg5,
      date: "2023-09-30",
      title: "Eco-Friendly Plumbing Solutions",
      description: "Sustainable practices for modern plumbing.",
    },
    {
      id: 6,
      img: blogimg6,
      date: "2023-10-01",
      title: "The Future of Plumbing Technology",
      description: "Innovations shaping the future of plumbing.",
    },
  ];

  return (
    <div>
      <div className="relative text-white gradient-bg h-[35vh] lg:h-[45vh] pt-20 lg:pt-36 w-full">
        <div className="flex items-center justify-center flex-col max-w-[1200px] mx-auto">
          <h1 className="text-3xl z-40 md:text-5xl lg:text-6xl font-semibold">
            Blogs
          </h1>
          <span className="text-center z-40 max-w-[300px] md:max-w-[500px] w-full mt-3 mb-9">
            Our blog is designed to help you understand your plumbing system
            better and provide valuable insights to keep it running smoothly.
          </span>
        </div>
      </div>

      <div className="w-full flex items-center justify-center my-16">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogs.map((blog) => (
            <div key={blog.id} className="hover:cursor-pointer group">
              <div className="w-full h-[200px] rounded-xl md:h-[250px] lg:h-[300px] mb-4 overflow-hidden">
                <img
                  src={blog.img}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div>
                <span className="font-semibold text-gray-400">{blog.date}</span>
                <h4 className="text-xl font-semibold">{blog.title}</h4>
                <NavLink
                  to={`/blog/${blog.id}`}
                  className="text-blue-500 hover:underline"
                >
                  Read More
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
