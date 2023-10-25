import axios from "axios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const onRegister = async (
  user: { email: string; password: string },
  router: AppRouterInstance
) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const endpoint = apiUrl + "/graphql"; // GraphQL server endpoint
  const headers = {
    "Content-Type": "application/json",
  };

  // Define GraphQL mutation with variables
  const graphqlMutation = {
    query: `
        mutation signup($input: LoginUserInput!) {
          signup(loginUserInput: $input) {
            id
            email
          }
        }
      `,
    variables: {
      input: {
        email: user.email,
        password: user.password,
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
    if (response.data.data.signup) {
      // Registration successful
      router.push("/login");
    } else {
      // Handle registration failure
      console.error("Registration failed.");
    }
  } catch (error) {
    // Handle errors
    console.error("Error during registration:", error);
  }
};
