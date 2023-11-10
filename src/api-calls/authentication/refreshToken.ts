import { decryptToken, encryptToken } from "@/utils/TokenEncription";
import axios from "axios";
import Cookies from "js-cookie";

export const RefreshAccessToken = async (refreshToken: string) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const endpoint = apiUrl + "/graphql"; // GraphQL server endpoint
  const headers = {
    "Content-Type": "application/json",
    authorization: `Bearer ${refreshToken}`,
  };

  // Define GraphQL mutation with variables
  const graphqlMutation = {
    query: `
    mutation refreshJwtToken {
      refreshJwtToken {
        message
        access_token
      }
    }
      `,
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
    const responseData = response.data.data.refreshJwtToken;
    if (responseData) {
      const { message, access_token } = responseData;

      // Encrypt the tokens before storing them in respective storages
      const encryptedAccessToken = encryptToken(access_token);

      Cookies.set("access_token", encryptedAccessToken, {
        expires: 15 / (24 * 60),
      }); // Set an expiry for the cookie
    }
  } catch (error) {
    console.error("Error refreshing access token:", error);
  }
};
