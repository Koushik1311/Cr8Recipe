"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import Btn from "../Shared/Btn";
import { navLinks } from "@/data/navbar/data";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import useLoginContext from "@/hooks/LoginContext";
import { onLogout } from "@/api-calls/authentication/logout";
import { HiMagnifyingGlass } from "react-icons/hi2";

export default function BigDeviceNavBar() {
  const { isLoggedIn, setIsLoggedIn } = useLoginContext();
  const router = useRouter();

  const handleLogout = () => {
    onLogout(router, setIsLoggedIn);
  };

  useEffect(() => {
    // Check if the JWT token exists in local storage on component mount
    const token = Cookies.get("access_token");

    // Update the login status based on the token's presence
    if (token) {
      setIsLoggedIn(true); // User is logged in if the token exists
    } else {
      setIsLoggedIn(false); // User is not logged in if the token doesn't exist
    }
  }, []);

  return (
    <div className="mt-[1rem] flex items-center justify-between mx-12">
      <div className="flex items-center justify-center space-x-6">
        {/* Logo */}
        <h1 className="text-orange-600 font-semibold text-2xl">Cr8Recipe</h1>
        {/* Navlinks */}
        <ul className="flex gap-[2rem]">
          {navLinks.map((link, index) => (
            <li
              className="text-gray-400 text-sm font-medium hover:text-orange-600 transition-colors delay-75 duration-150 ease-in-out"
              key={index}
            >
              <Link href={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Login/Register */}
      <div className="flex items-center space-x-7">
        <Link href="/recipe">
          <HiMagnifyingGlass className="text-xl cursor-pointer text-gray-500" />
        </Link>
        {isLoggedIn ? ( // If the user is logged in
          <div>
            <Link className="mr-4" href="/write/recipe">
              Write
            </Link>
            <button onClick={handleLogout}>Log Out</button>
          </div>
        ) : (
          // If the user is not logged in
          <Btn goTo="/login">Log In</Btn>
        )}
      </div>
    </div>
  );
}
