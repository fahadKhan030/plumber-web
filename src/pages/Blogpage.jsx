// src/pages/Blogpage.jsx
import React from "react";
import { useParams } from "react-router-dom";

import blogimg1 from "../assets/blog1.avif";
import blogimg2 from "../assets/blog2.avif";
import blogimg3 from "../assets/blog3.avif";
import blogimg4 from "../assets/blog4.avif";
import blogimg5 from "../assets/blog5.webp";
import blogimg6 from "../assets/blog6.webp";

const blogs = [
  {
    id: 1,
    img: blogimg1,
    date: "2023-06-01",
    title: "Understanding Plumbing Systems",
    heading: "Understanding Plumbing Systems",
    subheading: "A Comprehensive Guide to Plumbing Components",
    content:
      "This article provides an in-depth look at the various components of plumbing systems...",
  },
  {
    id: 2,
    img: blogimg2,
    date: "2023-07-10",
    title: "Common Plumbing Issues",
    heading: "Common Plumbing Issues",
    subheading: "How to Fix Common Plumbing Problems",
    content:
      "This article discusses frequent plumbing issues such as leaks, clogs, and low water pressure...",
  },
  {
    id: 3,
    img: blogimg3,
    date: "2023-08-20",
    title: "Choosing the Right Plumber",
    heading: "Choosing the Right Plumber",
    subheading: "Tips for Selecting a Qualified Plumber",
    content:
      "This article offers guidance on how to choose a reliable and skilled plumber...",
  },
  {
    id: 4,
    img: blogimg4,
    date: "2023-09-15",
    title: "Preventative Plumbing Maintenance",
    heading: "Preventative Plumbing Maintenance",
    subheading: "Keeping Your Plumbing System in Top Shape",
    content:
      "This article provides essential tips and best practices for maintaining your plumbing system...",
  },
  {
    id: 5,
    img: blogimg5,
    date: "2023-09-30",
    title: "Eco-Friendly Plumbing Solutions",
    heading: "Eco-Friendly Plumbing Solutions",
    subheading: "Sustainable Practices for Modern Plumbing",
    content:
      "This article explores eco-friendly plumbing solutions that help conserve water...",
  },
  {
    id: 6,
    img: blogimg6,
    date: "2023-10-01",
    title: "The Future of Plumbing Technology",
    heading: "The Future of Plumbing Technology",
    subheading: "Innovations Shaping the Future of Plumbing",
    content:
      "This article explores the latest advancements in plumbing technology...",
  },
];

const Blogpage = () => {
  const { id } = useParams();
  const blog = blogs.find((item) => item.id === parseInt(id));

  if (!blog) {
    return <h1 className="text-center py-20 text-xl">Blog Not Found</h1>;
  }

  return (
    <div className="max-w-[1000px] mx-auto px-4 py-16">
      <img
        src={blog.img}
        alt={blog.title}
        className="w-full h-[300px] object-cover rounded-xl mb-6"
      />
      <span className="text-gray-400">{blog.date}</span>
      <h1 className="text-4xl font-bold mt-2 mb-4">{blog.heading}</h1>
      <h2 className="text-xl font-semibold mb-4">{blog.subheading}</h2>
      <p className="text-lg text-gray-700 leading-7">{blog.content}</p>
    </div>
  );
};

export default Blogpage;
