import axios from "axios";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import CryptoJS from "crypto-js";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { decryptToken } from "@/utils/TokenEncription";

export const onLogout = async (
  router: AppRouterInstance,
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const endpoint = apiUrl + "/graphql"; // GraphQL server endpoint

  const access_token = decryptToken(Cookies.get("access_token")!);
  const headers = {
    authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  // Define GraphQL mutation with variables
  const graphqlMutation = {
    query: `
    mutation logout {
        logout {
          message
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
    Cookies.remove("access_token");
    Cookies.remove("refresh_token");
    Cookies.remove("user_id");
    setIsLoggedIn(false);

    // Check the response from the server
    const responseData = response.data.data.logout;

    const { message } = responseData;

    router.push("/");
    toast.success(message);
  } catch (error) {
    // Handle errors
    console.error("Error during logout:", error);
  }
};
