import React from "react";
import { PiForkKnife } from "react-icons/pi";
import Rating from "../Shared/Rating";

export default function Explore() {
  return (
    <section className="mt-[8rem] mx-[7rem]">
      {/* Header */}
      <h2 className="text-[2rem] font-semibold mb-[1.5rem]">Explore Recipe</h2>
      {/* Category */}

      {/* View All Button */}

      {/* Recipes */}
      <ul className="grid grid-cols-4 grid-rows-2 relative">
        <li>
          <div className="relative">
            {/* Image */}
            <img
              className="w-full object-cover h-[12rem] rounded-t-3xl z-0"
              src="https://images.pexels.com/photos/7441761/pexels-photo-7441761.jpeg?auto=compress&cs=tinysrgb&w=600"
            />

            {/* Title and Details */}
            <div className="absolute -bottom-10 left-0 w-full">
              <div className="bg-white rounded-3xl px-4 py-2">
                <p>Delicious Bread</p>
                <p>J.K. Roy</p>
                {/* Add Rating and Open Button here */}
                <div className="flex justify-between items-center">
                  <div>
                    <Rating />
                  </div>
                  <button className="group bg-[#83A180] rounded-full hover:bg-[#3C6E38] transition-all">
                    <PiForkKnife className="text-white w-[1.3rem] h-[1.3rem] m-[0.8rem] group-hover:rotate-90 transition-all" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
