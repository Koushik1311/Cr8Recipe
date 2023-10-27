import Link from "next/link";
import React from "react";
import { rightMenuItems } from "@/data/recipe/data";

export default function RightMenuBar() {
  return (
    <section className="hidden w-[10rem] ml-[3rem] md:flex md:flex-row md:max-h-[44vh] md:items-center relative">
      <ul className="fixed">
        {rightMenuItems.map((item, index) => (
          <li key={index}>
            <Link href={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
      {/* Menu */}
    </section>
  );
}
