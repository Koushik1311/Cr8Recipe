import React from "react";
import { PiMagnifyingGlassThin } from "react-icons/pi";

export default function SearchBar() {
  return (
    <div className="relative">
      <PiMagnifyingGlassThin className="absolute left-5 top-[17px] text-xl text-gray-500" />
      <input
        type="text"
        placeholder="Search"
        className="w-screen lg:w-[37rem] border rounded-full py-4 pl-12 pr-3 outline-none focus:ring-1 focus:ring-orange-500 text-sm"
      />
    </div>
  );
}
