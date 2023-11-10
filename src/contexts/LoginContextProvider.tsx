"use client";

import { Dispatch, SetStateAction, createContext, useState } from "react";

type LoginContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
};

type LoginContextProviderProps = {
  children: React.ReactNode;
};

export const LoginContext = createContext<LoginContextType | null>(null);

export default function LoginContextProvider({
  children,
}: LoginContextProviderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <LoginContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}
