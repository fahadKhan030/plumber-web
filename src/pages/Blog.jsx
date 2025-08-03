import React from "react";
import "../App.css";

const Blog = () => {
  return (
    <div>
      <div className="relative text-white gradient-bg  h-[35vh] lg:h-[45vh] pt-20 lg:pt-36 w-full">
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

      <div className="w-full flex items-center justify-center">
        <div className="max-w-[1200px]  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"></div>
      </div>
    </div>
  );
};

export default Blog;
