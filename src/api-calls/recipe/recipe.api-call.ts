import { graphQlEndpoint } from "@/utils/endpoint";
import axios from "axios";

export const getAllRecipe = async () => {
  const endpoint = graphQlEndpoint();
  const headers = {
    "Content-Type": "application/json",
  };

  const graphqlQuery = {
    query: `
        query 
        `,
  };

  try {
    const response = await axios.post(endpoint, JSON.stringify(graphqlQuery), {
      headers: headers,
    });

    const responseData = response.data.data;
    return responseData;
  } catch (error) {
    // Handle errors
    // TODO: console.log
    console.error("Something went wrong:", error);
    return null;
  }
};
