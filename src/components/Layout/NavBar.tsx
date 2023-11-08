import Link from "next/link";
import React from "react";
import Btn from "../Shared/Btn";
import { navLinks } from "@/data/navbar/data";

export default function NavBar() {
  const isLoggedIn = () => {
    const token = localStorage.getItem("access_token");
    return token ? true : false;
  };
  return (
    <section className="mt-[1rem] flex items-center justify-between">
      {/* Logo */}
      <h1>SaR</h1>
      {/* Navlinks */}
      <ul className="flex gap-[2rem]">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link href={link.link}>{link.name}</Link>
          </li>
        ))}
      </ul>

      {/* Login/Register */}
      <>
        {isLoggedIn() ? (
          <button
            onClick={() => {
              localStorage.removeItem("access_token");
              localStorage.removeItem("refresh_token");
            }}
          >
            Log Out
          </button>
        ) : (
          <Btn goTo="/login">Log In</Btn>
        )}
      </>
    </section>
  );
}
