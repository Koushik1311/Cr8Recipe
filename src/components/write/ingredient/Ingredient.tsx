"use client";

import { useState } from "react";
import IngredientForm from "./IngredientForm";
import { FiPlus } from "react-icons/fi";

export default function Ingredient() {
  // State for model visibility
  const [showModel, setShowModel] = useState(false);
  return (
    <section>
      {/* TODO: Show the ingredients which is added*/}
      {showModel && (
        <>
          <span onClick={() => setShowModel(false)}>&times;</span>
          <IngredientForm />
        </>
      )}

      {/* Button for adding ingredient */}
      <button
        className="absolute bottom-[4rem] right-[7.4rem] bg-rose-600 p-[1rem] rounded-full hover:bg-rose-700 transition"
        onClick={() => setShowModel(true)}
      >
        <FiPlus className="text-[2rem] text-rose-200" />
      </button>
    </section>
  );
}
