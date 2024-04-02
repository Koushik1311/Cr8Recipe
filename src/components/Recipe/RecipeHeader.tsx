import React from "react";

export default function RecipeHeader() {
  return (
    <div className="flex flex-col w-auto max-w-[1100px] space-y-10">
      {/* Heading */}
      <h1 className="text-6xl text-center leading-tight">
        Explore the World&apos;s Most Innovative Culinary Minds & Creatives
      </h1>
      <p className="text-base text-center font-normal lg:mx-40 text-gray-600">
        Cr8Recipe: Where Culinary Creativity Thrives - Share and Discover
        Delicious Recipes from Top Creators Worldwide
      </p>
    </div>
  );
}
