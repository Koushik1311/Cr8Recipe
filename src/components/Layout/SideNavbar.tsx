import { navLinks } from "@/data/navbar/data";
import Link from "next/link";
import React from "react";
import Btn from "../Shared/Btn";

export default function SideNavbar() {
  return (
    <section className="fixed h-[100vh] flex flex-col justify-between bg-slate-900">
      {/* Logo */}
      <h1 className="text-white">SaR</h1>
      {/* Navlinks */}
      <ul className="text-white ml-[2rem]">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link href={link.link}>{link.name}</Link>
          </li>
        ))}
      </ul>
      <>
        <Btn goTo="/login">Log In</Btn>
      </>
    </section>
  );
}
