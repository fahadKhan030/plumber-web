// components/Button.jsx
import React from "react";

export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`bg-[#F3E063]  rounded-md font-semibold text-black transition hover:cursor-pointer duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
