import React, { useState, useEffect } from "react";
import AddCategory from "./AddCategory";
import Cookies from "js-cookie";
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
    <section>
      <ul>
        {/* Name Input */}
        <li>
          <span>Name</span>
          <input
            type="text"
            name="name"
            id="recipe"
            value={recipe.name}
            onChange={handleChange}
          />
        </li>
        {/* Slag Input (Read-only, Hidden) */}
        <li>
          <input
            type="hidden"
            name="slag"
            id="slag"
            value={recipe.slag}
            readOnly
          />
        </li>
        {/* Cooking Time Input */}
        <li>
          <span>Cooking Time</span>
          <input
            type="number"
            name="cookingTime"
            id="cookingTime"
            value={recipe.cookingTime}
            onChange={handleChange}
          />
        </li>
        {/* Description Input */}
        <li>
          <span>Description</span>
          <input
            type="text"
            name="description"
            id="description"
            value={recipe.description}
            onChange={handleChange}
          />
        </li>
        {/* Category Selector */}
        <li>
          <AddCategory onCategorySelect={handleCategorySelect} />
        </li>
        {/* User ID Input (Read-only, Hidden) */}
        <li>
          <input
            type="hidden"
            name="userId"
            id="userId"
            value={recipe.userId}
            onChange={handleChange}
            readOnly
          />
        </li>
        {/* Submit Button */}
        <li>
          <button onClick={handleSubmit}>Create</button>
        </li>
      </ul>
    </section>
  );
}
