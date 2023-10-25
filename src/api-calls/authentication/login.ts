import axios from "axios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";

export const onLogin = async (
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
        mutation login($input: LoginUserInput!) {
            login(loginUserInput: $input) {
                user {
                    email
                }
                access_token
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
    const responseData = response.data.data.login;
    if (responseData) {
      const { user, access_token } = responseData;

      // Save the access token in localStorage
      localStorage.setItem("access_token", access_token);

      // Redirect to the home page or do any other post-login actions
      router.push("/");
      toast.success("Login successful.");
    } else {
      // Handle login failure
      console.error("Login failed.");
      toast.error("Login failed.");
    }
  } catch (error) {
    // Handle errors
    console.error("Error during login:", error);
    toast.error("Login failed.");
  }
};
