import { RecipeType } from "@/types/write/recipe.type";
import { graphQlEndpoint } from "@/utils/endpoint";
import axios from "axios";
import Cookies from "js-cookie";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const createRecipe = async (
  recipe: RecipeType,
  router: AppRouterInstance
) => {
  const endpoint = graphQlEndpoint();
  const headers = {
    "Content-Type": "application/json",
  };

  // Define GraphQL mutation with variables
  const graphqlMutation = {
    query: `
    mutation createRecipe($input: CreateRecipeInput!) {
      createRecipe(createRecipeInput: $input) {
        id
        createdAt
        updatedAt
        name
        slag
        description
        cookingTime
      }
    }
        `,
    variables: {
      input: {
        name: recipe.name,
        slag: recipe.slag,
        cookingTime: parseFloat(recipe.cookingTime),
        userId: recipe.userId,
        categoryId: recipe.categoryId,
        description: recipe.description,
        imageUrl: recipe.imageUrl,
      },
    },
  };

  try {
    // Show loading toast
    const loadingToastId = toast.loading("Creating Recipe...");
    const response = await axios.post(
      endpoint,
      JSON.stringify(graphqlMutation),
      {
        headers: headers,
      }
    );

    // Check the response from the server
    const responseData = response.data.data.createRecipe;

    // Close loading toast
    toast.dismiss(loadingToastId);

    if (responseData) {
      // Set the recipe id in the cookies
      Cookies.set("recipe_id", responseData.id);

      // Show success toast
      toast.success(`${responseData.name} Created`);
      router.push("/write/ingredient");
    } else {
      toast.error("Something went wrong!");
    }
  } catch (error) {
    // Handle errors
    console.error("Something went wrong:", error);
    return null;
  }
};
