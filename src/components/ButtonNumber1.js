import React from "react";

const ButtonNumber1 = () => {
  return (
    <button className="relative inline-flex items-center justify-center px-5 py-3 overflow-hidden font-mono font-medium tracking-tighter text-white bg-blue-500 rounded-lg group">
      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-700 rounded-full group-hover:w-56 group-hover:h-56"></span>
      <span className="absolute inset-0 w-full h-full rounded-lg opacity-30 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500"></span>
      <span className="relative">Click Me</span>
    </button>
  );
};

export default ButtonNumber1;
