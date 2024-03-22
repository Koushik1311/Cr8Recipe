import React from "react";

export default function Hero() {
  return (
    <div className="h-screen flex flex-col items-center justify-center mx-auto space-y-7">
      {/* Background */}

      {/* Heading */}
      <h1 className="text-center text-4xl md:text-6xl lg:text-7xl w-full md:w-10/12 lg:w-[45rem] font-bold text-gray-600">
        Make your <span className="text-orange-600">kitchen</span> hours tasty
      </h1>

      {/* Sub-Heading */}
      <p className="text-center text-base text-gray-600 w-[90%] md:w-[500px] lg:w-[600px]">
        Discover the joy of cooking with our diverse range of mouthwatering
        recipes, designed to add flavor to every moment of your day. From
        breakfast to dinner, our curated collection ensures that every hour is a
        delicious experience.
      </p>

      {/* Button */}
      <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
        <button className="bg-orange-600 text-white border border-orange-600 hover:bg-white hover:text-orange-600 py-3 px-16 rounded-full font-semibold mx-auto md:mx-0 transition-all">
          Explore recipes
        </button>
        <button className="bg-white text-orange-600 border border-orange-600 hover:bg-orange-600 hover:text-white py-3 px-16 rounded-full font-semibold mx-auto md:mx-0 transition-all">
          Write a recipe
        </button>
      </div>
    </div>
  );
}
