"use client";

import React, { ChangeEvent, useState } from "react";

export default function FilterBar() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [isActive, setIsActive] = useState<boolean>(false);
  const [showOptions, setShowOptions] = useState<boolean>(false);

  return (
    <div className="relative">
      <div
        onClick={() => setShowOptions(!showOptions)}
        className="cursor-pointer border rounded-lg text-sm font-medium py-2 px-4 mt-3"
      >
        {selectedFilter}
        <svg
          className="w-4 h-4 inline-block ml-2 -mr-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {showOptions && (
        <div className="absolute border rounded-lg text-sm font-medium py-4 px-7 mt-4 bg-white w-auto flex flex-col space-y-5 text-gray-600">
          <div
            onClick={() => {
              setSelectedFilter("All");
              setShowOptions(false);
            }}
            className="cursor-pointer"
          >
            All
          </div>
          <div
            onClick={() => {
              setSelectedFilter("New");
              setShowOptions(false);
            }}
            className="cursor-pointer"
          >
            New
          </div>
          <div
            onClick={() => {
              setSelectedFilter("Trending");
              setShowOptions(false);
            }}
            className="cursor-pointer"
          >
            Trending
          </div>
          <div
            onClick={() => {
              setSelectedFilter("Featured");
              setShowOptions(false);
            }}
            className="cursor-pointer"
          >
            Featured
          </div>
        </div>
      )}
    </div>
  );
}
