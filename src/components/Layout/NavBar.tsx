import Link from "next/link";
import React from "react";
import Btn from "../Shared/Btn";

export default function NavBar() {
  return (
    <section className="mt-[1rem] flex items-center justify-between">
      {/* Logo */}
      <h1>SaR</h1>
      {/* Navlinks */}
      <ul className="flex gap-[2rem]">
        <Link href="/">Home</Link>
        <Link href="/recipe">Recipe</Link>
        <Link href="/about">About</Link>
        <Link href="contact">Contact</Link>
      </ul>

      {/* Login/Register */}
      <>
        <Btn goTo="/login">Log In</Btn>
      </>
    </section>
  );
}
