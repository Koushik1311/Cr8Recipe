"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import Btn from "../Shared/Btn";
import { navLinks } from "@/data/navbar/data";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import useLoginContext from "@/hooks/LoginContext";
import { onLogout } from "@/api-calls/authentication/logout";
import { GiChefToque } from "react-icons/gi";

export default function NavBar() {
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
    <section className="mt-[1rem] mx-[7rem] flex items-center justify-between">
      <div className="flex items-center justify-center space-x-6">
        {/* Logo */}
        <h1 className="text-orange-600 font-semibold text-[1.5rem]">
          Cr8Recipe
        </h1>
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

      {/* Search Bar */}
      <div className="relative focus-within:text-orange-600">
        <input
          className="border text-sm border-orange-600 outline-none rounded-full w-80 px-9 py-3"
          type="text"
          name="search"
          id="search"
          placeholder="Search"
        />
        <GiChefToque className="absolute text-2xl top-3 left-2 text-orange-600" />
      </div>

      {/* Login/Register */}
      <>
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
      </>
    </section>
  );
}
