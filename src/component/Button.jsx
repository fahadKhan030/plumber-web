// components/Button.jsx
import React from "react";

export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-4 py-2 bg-[#F3E063]  rounded-md font-semibold text-black transition hover:cursor-pointer duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
