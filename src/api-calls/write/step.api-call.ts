import { StepType } from "@/types/write/step.type";
import { graphQlEndpoint } from "@/utils/endpoint";
import axios from "axios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const createStep = async (step: StepType, router: AppRouterInstance) => {
  const endpoint = graphQlEndpoint();

  const headers = {
    "Content-Type": "application/json",
  };

  const graphqlMutation = {
    query: `
    mutation createStep($input: CreateStepInput!) {
        createStep(createStepInput: $input) {
          id
          order
          description
        }
      }
            `,
    variables: {
      input: {
        order: parseInt(step.order),
        description: step.description,
        recipeId: step.recipeId,
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

    const responseData = response.data.data.createStep;
  } catch (error) {
    console.error("Something went wrong: ", error);
    return null;
  }
};
