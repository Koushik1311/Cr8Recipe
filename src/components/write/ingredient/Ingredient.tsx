"use client";

import { useState } from "react";
import IngredientForm from "./IngredientForm";

export default function Ingredient() {
  // State for model visibility
  const [showModel, setShowModel] = useState(false);
  return (
    <section>
      <button onClick={() => setShowModel(true)}>Add Ingredient</button>
      {/* TODO: Show the ingredients which is added*/}
      {showModel && (
        <>
          <span onClick={() => setShowModel(false)}>&times;</span>
          <IngredientForm />
        </>
      )}
    </section>
  );
}
