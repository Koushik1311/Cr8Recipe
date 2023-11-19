"use client";
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

export default function IngredientForm() {
  const router = useRouter();

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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setIngredientDetails((prevIngredient) => ({
      ...prevIngredient,
      [name]: value,
    }));
  };

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

  const handleSubmit = async () => {
    try {
      createIngredientDetails(ingredientDetails, router);
    } catch (error) {
      console.error("Error in handleSubmit:", error);
    }
  };

  useEffect(() => {
    const refreshToken = decryptToken(Cookies.get("refresh_token")!);

    getRecipeId();

    if (refreshToken) {
      RefreshAccessToken(refreshToken);
    }
  }, []);
  return (
    <div>
      <input
        type="text"
        placeholder="Search for Ingredients..."
        value={searchTerm}
        onChange={handleSearch}
      />
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
      <div>
        <input
          type="number"
          placeholder="00.00"
          name="quantity"
          id="quantity"
          value={ingredientDetails.quantity}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="unit"
          name="unit"
          id="unit"
          value={ingredientDetails.unit}
          onChange={handleChange}
        />

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

        <button onClick={handleSubmit} type="submit">
          Add
        </button>
      </div>
      <Link href="/write/step">Next</Link>
    </div>
  );
}
