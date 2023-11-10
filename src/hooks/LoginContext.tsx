import { LoginContext } from "@/contexts/LoginContextProvider";
import { useContext } from "react";

export default function useLoginContext() {
  const context = useContext(LoginContext);

  if (!context) {
    throw new Error("useUserContext must be used within a UserConextProvider");
  }

  return context;
}
