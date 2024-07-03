import React from "react";

const ButtonNumber2 = () => {
  return (
    <button className="relative inline-flex items-center justify-center px-6 py-3 font-bold text-white transition-all duration-300 bg-gradient-to-r from-pink-500 to-purple-500 border-2 border-transparent rounded-lg overflow-hidden group">
      <span className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 opacity-0 group-hover:opacity-100"></span>
      <span className="relative z-10">Click Me</span>
      <svg
        className="absolute top-0 right-0 bottom-0 left-0 z-0 transform rotate-45 scale-0 translate-x-0 translate-y-0 text-yellow-400 opacity-0 group-hover:scale-100 group-hover:rotate-0 group-hover:translate-x-2 group-hover:translate-y-2"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>
  );
};

export default ButtonNumber2;
