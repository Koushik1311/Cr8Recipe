"use client";

// Imports
import { decryptToken } from "@/utils/TokenEncription";
import { ChangeEvent, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { RefreshAccessToken } from "@/api-calls/authentication/refreshToken";
import { useRouter } from "next/navigation";
import {
  IngredientDetailsType,
  IngredientType,
} from "@/types/write/ingredient.tye";
import {
  createIngredient,
  createIngredientDetails,
  searchIngredient,
} from "@/api-calls/write/ingredient.api-call";
import Link from "next/link";

// Define the IngredientForm React component
export default function IngredientForm() {
  const router = useRouter();

  // State variables to manage form data
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [ingredients, setIngredients] = useState<any[]>([]);
  const [newIngredient, setNewIngredient] = useState<IngredientType>({
    name: "",
  });
  const [noIngredientFound, setNoIngredientFound] = useState(false);

  const [ingredientDetails, setIngredientDetails] =
    useState<IngredientDetailsType>({
      quantity: "",
      unit: "",
      recipeId: "",
      ingredientId: "",
    });

  // Handle input change for ingredient details
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setIngredientDetails((prevIngredient) => ({
      ...prevIngredient,
      [name]: value,
    }));
  };

  // Handling ingredient search
  const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);

    if (searchValue.length > 0) {
      const result = await searchIngredient(searchValue);

      if (result && result.length > 0) {
        setIngredients(result);
        setNoIngredientFound(false);
      } else {
        setIngredients([]);
        setNoIngredientFound(false);
      }
    }
  };

  // Handle creating a new ingredient
  const handleCreateIngredient = async () => {
    if (newIngredient.name.trim() !== "") {
      const createdIngredient = await createIngredient(newIngredient);

      if (createdIngredient) {
        setIngredients([newIngredient]);
        setNoIngredientFound(false);
        setNewIngredient({
          name: "",
        });
      }
    }
  };

  // Handle selecting an ingredient form the search result
  const handleIngredientSelect = (ingredientId: string) => {
    try {
      setIngredientDetails((prevIngredientDetails) => ({
        ...prevIngredientDetails,
        ingredientId,
      }));
    } catch (error) {
      console.error("Error in handleIngredientSelect:", error);
    }
  };

  // Get recipe ID from Cookies
  const getRecipeId = () => {
    try {
      const recipeId = Cookies.get("recipe_id");

      if (recipeId) {
        setIngredientDetails((prevIngredientDetails) => ({
          ...prevIngredientDetails,
          recipeId,
        }));
      } else {
        // TODO: Handle me
        throw new Error("Recipe id Undefined");
      }
    } catch (error) {
      console.error("Error in getRecipeId:", error);
    }
  };

  // Handle form submission
  const handleSubmit = async () => {
    try {
      createIngredientDetails(ingredientDetails, router);
    } catch (error) {
      console.error("Error in handleSubmit:", error);
    }
  };

  // useEffect hook to handle side effects on component mount
  useEffect(() => {
    const refreshToken = decryptToken(Cookies.get("refresh_token")!);

    getRecipeId();

    if (refreshToken) {
      RefreshAccessToken(refreshToken);
    }
  }, []);

  // Render the component TSX
  return (
    <div className="absolute flex flex-col w-[32rem] h-[15rem] bg-rose-500 p-3 m-auto left-0 right-0 top-0 bottom-0">
      <span>Ingredients:</span>
      {/* Search input for ingredients */}
      <input
        className="border-2 border-gray-500/50 focus:outline-none focus:border-slate-600 focus:ring-1 focus:ring-slate-600 rounded-md w-[30rem]"
        type="text"
        placeholder="Search for Ingredients..."
        value={searchTerm}
        onChange={handleSearch}
      />
      {/* Render search results */}
      <div className="relative">
        <ul className="absolute bg-rose-500 w-full text-rose-100">
          {ingredients.length > 0
            ? ingredients.map((ingredient: any) => (
                <li
                  className="cursor-pointer"
                  key={ingredient.id}
                  onClick={() => handleIngredientSelect(ingredient.id)}
                >
                  {ingredient.name}
                </li>
              ))
            : noIngredientFound && (
                <div>
                  <p>No ingredient found. Would you like to create one?</p>
                  <button onClick={handleCreateIngredient}>
                    Create Ingredient
                  </button>
                </div>
              )}
        </ul>
      </div>
      {/* Form for entering ingredient details */}
      <div>
        <input
          className="border-b-2 focus:outline-none w-[15rem] bg-rose-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          type="number"
          placeholder="00.00"
          name="quantity"
          id="quantity"
          value={ingredientDetails.quantity}
          onChange={handleChange}
        />

        <input
          className="border-2 border-gray-500/50 focus:outline-none focus:border-slate-600 focus:ring-1 focus:ring-slate-600 rounded-md w-[14rem] ml-[1rem]"
          type="text"
          placeholder="unit"
          name="unit"
          id="unit"
          value={ingredientDetails.unit}
          onChange={handleChange}
        />

        {/* Hidden inputs for recipe and ingredient IDs */}
        <input
          type="hidden"
          name="recipeId"
          id="recipeId"
          value={ingredientDetails.recipeId}
          onChange={handleChange}
          readOnly
        />
        <input
          type="hidden"
          name="ingredientId"
          id="ingredientId"
          value={ingredientDetails.ingredientId}
          onChange={handleChange}
          readOnly
        />

        {/* Submit button */}
        <button onClick={handleSubmit} type="submit">
          Add
        </button>
      </div>
    </div>
  );
}
