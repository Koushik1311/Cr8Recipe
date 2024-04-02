import React from "react";
import { IoFilterSharp } from "react-icons/io5";

export default function Filters() {
  return (
    <div>
      <button className="border rounded-full text-sm font-medium py-2 px-4 mt-3 flex items-center justify-center space-x-3">
        <IoFilterSharp />
        <span>Filters</span>
      </button>
    </div>
  );
}
