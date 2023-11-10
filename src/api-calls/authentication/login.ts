import axios from "axios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { encryptToken } from "@/utils/TokenEncription";

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
          id
          email
        }
        access_token
        refresh_token
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
    console.log(responseData);
    if (responseData) {
      const { user, access_token, refresh_token } = responseData;

      // Encrypt the tokens before storing them in respective storages
      const encryptedAccessToken = encryptToken(access_token);
      const encryptedRefreshToken = encryptToken(refresh_token);
      const encryptedUserId = encryptToken(user.id);

      Cookies.set("access_token", encryptedAccessToken, {
        expires: 1,
      }); // Set an expiry for the cookie
      Cookies.set("refresh_token", encryptedRefreshToken, { expires: 28 }); // Set an expiry for the cookie
      Cookies.set("user_id", encryptedUserId, { expires: 28 });

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
