import {
  IngredientDetailsType,
  IngredientType,
} from "@/types/write/ingredient.tye";
import { graphQlEndpoint } from "@/utils/endpoint";
import axios from "axios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";

export const searchIngredient = async (searchTerm: string) => {
  const endpoint = graphQlEndpoint();
  const headers = {
    "Content-Type": "application/json",
  };

  const graphqlQuery = {
    query: `
        query ingredientsByPartialName($input: String!) {
            ingredientsByPartialName(partialName: $input) {
              id
              name
            }
          }
        `,
    variables: {
      input: searchTerm,
    },
  };

  try {
    const response = await axios.post(endpoint, JSON.stringify(graphqlQuery), {
      headers: headers,
    });

    const responseData = response.data.data.ingredientsByPartialName;
    return responseData;
  } catch (error) {
    // TODO: console.log
    console.error("Something went wrong: ", error);
    return null;
  }
};

export const createIngredient = async (newIngredient: IngredientType) => {
  const endpoint = graphQlEndpoint();

  const headers = {
    "Content-Type": "application/json",
  };

  const graphqlMutation = {
    query: `
        mutation createIngredient($input: CreateIngredientInput!) {
            createIngredient(createIngredientInput: $input) {
              id
              name
            }
          }
        `,
    variables: {
      input: {
        name: newIngredient.name,
      },
    },
  };

  try {
    const response = await axios.post(
      endpoint,
      JSON.stringify(graphqlMutation),
      {
        headers: headers,
      }
    );

    const responseData = response.data.data.createIngredient;
    const { name } = responseData;
    toast.success(`${name} Created`);
    return name;
  } catch (error) {
    console.error("Something went wrong: ", error);
    return null;
  }
};

export const createIngredientDetails = async (
  ingredientDetails: IngredientDetailsType,
  router: AppRouterInstance
) => {
  const endpoint = graphQlEndpoint();

  const headers = {
    "Content-Type": "application/json",
  };

  const graphqlMutation = {
    query: `
      mutation createRecipeIngredient($input: CreateRecipeingredientInput!) {
        createRecipeingredient(createRecipeingredientInput: $input) {
          id
          quantity
          unit
        }
      }
          `,
    variables: {
      input: {
        quantity: parseFloat(ingredientDetails.quantity),
        unit: ingredientDetails.unit,
        recipeId: ingredientDetails.recipeId,
        ingredientId: ingredientDetails.ingredientId,
      },
    },
  };

  try {
    const response = await axios.post(
      endpoint,
      JSON.stringify(graphqlMutation),
      {
        headers: headers,
      }
    );

    const responseData = response.data.data.createRecipeIngredient;
  } catch (error) {
    console.error("Something went wrong: ", error);
    return null;
  }
};
