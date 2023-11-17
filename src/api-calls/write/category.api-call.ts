import { graphQlEndpoint } from "@/utils/endpoint";
import axios from "axios";
import toast from "react-hot-toast";

export const searchCategory = async (searchTerm: string) => {
  const endpoint = graphQlEndpoint();
  const headers = {
    "Content-Type": "application/json",
  };

  // Define GraphQL mutation with variables
  const graphqlMutation = {
    query: `
      query categoriesByPartialTitle($input: String!) {
        categoriesByPartialTitle(partialTitle: $input) {
            id
            title
        }
      }
        `,
    variables: {
      input: searchTerm,
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

    // Check the response from the server
    const responseData = response.data.data.categoriesByPartialTitle;
    return responseData;
  } catch (error) {
    // Handle errors
    // TODO: console.log
    console.error("Something went wrong:", error);
    return null;
  }
};

export const createCategory = async (newCategory: {
  title: string;
  description: string;
}) => {
  const endpoint = graphQlEndpoint();

  const headers = {
    "Content-Type": "application/json",
  };

  // Define GraphQL mutation with variables
  const graphqlMutation = {
    query: `
        mutation createCategory($input: CreateCategoryInput!) {
            createCategory(createCategoryInput: $input) {
              title
            }
          }
            `,
    variables: {
      input: {
        title: newCategory.title,
        description: newCategory.description,
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

    // Check the response from the server
    const responseData = response.data.data.createCategory;
    const { title } = responseData;
    toast.success(`${title} Created`);
    return title;
  } catch (error) {
    // Handle errors
    console.error("Something went wrong:", error);
    return null;
  }
};
