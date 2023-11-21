"use client";

import React, { useState, useEffect } from "react";
import AddCategory from "./AddCategory";
import Cookies from "js-cookie";
import { FaArrowRight } from "react-icons/fa6";
import { createRecipe } from "@/api-calls/write/recipe.api-call";
import { decryptToken } from "@/utils/TokenEncription";
import { RecipeType } from "@/types/write/recipe.type";
import { useRouter } from "next/navigation";

// Recipe component
export default function Recipe() {
  const router = useRouter();
  // State to hold the recipe object
  const [recipe, setRecipe] = useState<RecipeType>({
    userId: "",
    categoryId: "",
    name: "",
    slag: "",
    cookingTime: "",
    description: "",
  });

  // Fetch the user ID once when the component mounts
  useEffect(() => {
    getUserId();
  }, []); // Run once on component mount

  // Handle changes in input fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Update the recipe state
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));

    // Update the slag if the name field changes
    if (name === "name") {
      getSlag(value);
    }
  };

  // Fetch the user ID from cookies
  const getUserId = () => {
    try {
      const userId = Cookies.get("user_id");

      if (userId) {
        const getId = decryptToken(userId);
        setRecipe((prevRecipe) => ({ ...prevRecipe, userId: getId }));
      } else {
        throw new Error("User id Undefined");
      }
    } catch (error) {
      console.error("Error in getUserId:", error);
    }
  };

  // Generate slag based on the name
  const getSlag = (name: string) => {
    try {
      const slag = name.toLowerCase().replace(/\s+/g, "-");
      setRecipe((prevRecipe) => ({ ...prevRecipe, slag }));
    } catch (error) {
      console.error("Error in getSlag:", error);
    }
  };

  // Handle category selection
  const handleCategorySelect = (categoryId: string) => {
    setRecipe((prevRecipe) => ({ ...prevRecipe, categoryId }));
  };

  // Handle form submission
  const handleSubmit = async () => {
    try {
      createRecipe(recipe, router);
    } catch (error) {
      console.error("Error in handleSubmit:", error);
    }
  };

  // Render the component
  return (
    <section className="h-[100vh] flex flex-col gap-[1.1rem] justify-center">
      {/* Name Input */}
      <div className="flex flex-col">
        <span>Recipe Name:</span>
        <input
          className="border-2 border-gray-500/50 focus:outline-none focus:border-slate-600 focus:ring-1 focus:ring-slate-600 rounded-md w-[30rem]"
          type="text"
          placeholder="Recipe name..."
          name="name"
          id="recipe"
          value={recipe.name}
          onChange={handleChange}
        />
      </div>
      {/* Slag Input (Read-only, Hidden) */}
      <input type="hidden" name="slag" id="slag" value={recipe.slag} readOnly />
      {/* Cooking Time Input */}
      <div className="flex flex-col">
        <span>Cooking Time</span>
        <input
          className="border-2 border-gray-500/50 focus:outline-none focus:border-slate-600 focus:ring-1 focus:ring-slate-600 rounded-md w-[30rem] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          type="number"
          placeholder="Cooking time"
          name="cookingTime"
          id="cookingTime"
          value={recipe.cookingTime}
          onChange={handleChange}
        />
      </div>
      {/* Description Input */}
      <div className="flex flex-col">
        <span>Description</span>
        <input
          className="border-2 border-gray-500/50 focus:outline-none focus:border-slate-600 focus:ring-1 focus:ring-slate-600 rounded-md w-[30rem]"
          type="text"
          placeholder="Description..."
          name="description"
          id="description"
          value={recipe.description}
          onChange={handleChange}
        />
      </div>
      {/* Category Selector */}
      <div>
        <span>Category:</span>
        <AddCategory onCategorySelect={handleCategorySelect} />
      </div>
      {/* User ID Input (Read-only, Hidden) */}

      <input
        type="hidden"
        name="userId"
        id="userId"
        value={recipe.userId}
        onChange={handleChange}
        readOnly
      />
      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          className="group hover:text-rose-600 flex items-center justify-center gap-1"
          onClick={handleSubmit}
        >
          <span className="group-hover:-translate-x-1 transition-all">
            Next
          </span>
          <FaArrowRight className="group-hover:translate-x-1 transition-all" />
        </button>
      </div>
    </section>
  );
}
