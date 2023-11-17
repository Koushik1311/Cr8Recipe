"use client";
import { RefreshAccessToken } from "@/api-calls/authentication/refreshToken";
import Form from "@/components/write/recipe/Form";
import { decryptToken } from "@/utils/TokenEncription";
import { useEffect } from "react";
import Cookies from "js-cookie";

export default function Write() {
  useEffect(() => {
    const refreshToken = decryptToken(Cookies.get("refresh_token")!);

    if (refreshToken) {
      RefreshAccessToken(refreshToken);
    }
  }, []);
  return (
    <>
      <Form />
    </>
  );
}
