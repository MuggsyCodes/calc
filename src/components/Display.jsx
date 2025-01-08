import React from "react";

// props value - object that contains all the properites
const Display = ({ display, equation }) => {
  // destructure
  return (
    <div
      className="flex flex-row bg-gradient-to-br from-gray-500 via-gray-400 to-gray-500 w-full h-24 rounded-xl p-4 
      justify-end text-end items-center text-4xl font-semibold border-8 border-gray-700 relative text-base-300"
    >
      <p className="text-sm absolute top-1 right-4">{equation}</p>
      <h1>{display}</h1>
    </div>
  );
};

export default Display;
