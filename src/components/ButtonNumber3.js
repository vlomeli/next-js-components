import React from "react";

const ButtonNumber3 = () => {
  return (
    <button className="relative inline-flex items-center justify-center px-6 py-3 font-bold text-white transition-transform transform bg-gray-500 border-2 border-transparent rounded-lg hover:bg-black group">
      <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-in-out transform translate-x-0 translate-y-0 bg-blue-600 rounded-lg opacity-80 group-hover:translate-x-1 group-hover:translate-y-1"></span>
      <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 opacity-0 rounded-lg group-hover:opacity-100 group-hover:blur-md"></span>
      <span className="relative">Click Me</span>
    </button>
  );
};

export default ButtonNumber3;
