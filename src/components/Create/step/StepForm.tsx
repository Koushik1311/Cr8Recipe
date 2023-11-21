"use client";

import Cookies from "js-cookie";
import { StepType } from "@/types/write/step.type";
import { ChangeEvent, useEffect, useState } from "react";
import { createStep } from "@/api-calls/write/step.api-call";
import { useRouter } from "next/navigation";

export default function StepForm() {
  const router = useRouter();
  const [step, setStep] = useState<StepType>({
    order: "",
    description: "",
    recipeId: "",
  });

  const getRecipeId = () => {
    try {
      const recipeId = Cookies.get("recipe_id");

      if (recipeId) {
        setStep((prevStep) => ({
          ...prevStep,
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setStep((prevStep) => ({
      ...prevStep,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      createStep(step, router);
    } catch (error) {
      console.error("Wrror in handleSubmit:", error);
    }
  };

  useEffect(() => {
    // TODO: make access token
    getRecipeId();
  }, []);
  return (
    <div>
      <input
        type="number"
        name="order"
        id="order"
        placeholder="1"
        value={step.order}
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        id="description"
        placeholder="Cut the ingredients"
        value={step.description}
        onChange={handleChange}
      />
      <input
        type="hidden"
        name="recipeId"
        id="recipeId"
        value={step.recipeId}
        onChange={handleChange}
        readOnly
      />
      <button type="submit" onClick={handleSubmit}></button>
    </div>
  );
}
