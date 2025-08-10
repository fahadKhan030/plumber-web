import React, { useMemo } from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

import blogimg1 from "../assets/blog1.avif";
import blogimg2 from "../assets/blog2.avif";
import blogimg3 from "../assets/blog3.avif";
import blogimg4 from "../assets/blog4.avif";
import blogimg5 from "../assets/blog5.webp";
import blogimg6 from "../assets/blog6.webp";

const Blog = React.memo(() => {
  const blogs = useMemo(
    () => [
      {
        id: 1,
        img: blogimg1,
        date: "2023-06-01",
        title: "Understanding Plumbing Systems",
      },
      {
        id: 2,
        img: blogimg2,
        date: "2023-07-10",
        title: "Common Plumbing Issues",
      },
      {
        id: 3,
        img: blogimg3,
        date: "2023-08-20",
        title: "Choosing the Right Plumber",
      },
      {
        id: 4,
        img: blogimg4,
        date: "2023-09-15",
        title: "Preventative Plumbing Maintenance",
      },
      {
        id: 5,
        img: blogimg5,
        date: "2023-09-30",
        title: "Eco-Friendly Plumbing Solutions",
      },
      {
        id: 6,
        img: blogimg6,
        date: "2023-10-01",
        title: "The Future of Plumbing Technology",
      },
    ],
    []
  );

  return (
    <div>
      {/* Hero Section */}
      <div className="relative text-white gradient-bg h-[35vh] lg:h-[45vh] pt-20 lg:pt-36 w-full">
        <div className="flex items-center justify-center flex-col max-w-[1200px] mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold">
            Blogs
          </h1>
          <span className="text-center max-w-[500px] mt-3 mb-9">
            Our blog is designed to help you understand your plumbing system
            better and provide valuable insights to keep it running smoothly.
          </span>
        </div>
      </div>

      {/* Blog Cards */}
      <div className="w-full flex items-center px-3 justify-center my-16">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="hover:cursor-pointer group focus-within:ring-2 ring-blue-400 rounded-lg"
            >
              {/* Image with placeholder */}
              <div className="aspect-[4/3] rounded-xl mb-4 overflow-hidden bg-gray-200">
                <img
                  src={blog.img}
                  alt={blog.title}
                  loading="lazy"
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110 opacity-0 transition-opacity"
                  onLoad={(e) => (e.target.style.opacity = 1)}
                />
              </div>

              {/* Text Content */}
              <div>
                <span className="font-semibold text-gray-400 block">
                  {blog.date}
                </span>
                <h4 className="text-xl font-semibold">{blog.title}</h4>
                <NavLink
                  to={`/blog/${blog.id}`}
                  className="text-blue-500 hover:underline inline-block mt-1"
                >
                  Read More
                </NavLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Blog;
