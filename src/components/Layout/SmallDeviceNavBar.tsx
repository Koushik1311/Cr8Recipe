"use client";

import React, { useEffect, useState } from "react";
import { onLogout } from "@/api-calls/authentication/logout";
import useLoginContext from "@/hooks/LoginContext";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { RxHamburgerMenu } from "react-icons/rx";
import { navLinks } from "@/data/navbar/data";
import Link from "next/link";

export default function SmallDeviceNavBar() {
  const { isLoggedIn, setIsLoggedIn } = useLoginContext();
  const [isOpen, setIsOpen] = useState(false);

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
    <div className="relative">
      <div className="mt-2 flex flex-row items-center ml-3 space-x-3">
        {/* Toggle Button */}
        <button onClick={() => setIsOpen(!isOpen)}>
          <RxHamburgerMenu className="text-xl text-gray-400" />
        </button>

        {/* Logo */}

        <h1 className="text-orange-600 font-semibold text-2xl">Cr8Recipe</h1>
      </div>

      {/* Hidden */}
      <ul
        className={`absolute bg-white z-20 h-screen w-[70%] ${
          isOpen ? "" : ""
        }`}
      >
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link href={link.link}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
