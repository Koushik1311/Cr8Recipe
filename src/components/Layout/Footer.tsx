import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <section className="flex flex-col mt-24">
      <div className="flex flex-col space-y-5 items-center lg:space-y-0 lg:flex-row lg:justify-center lg:space-x-80 lg:items-center">
        {/* TODO: Logo */}
        <h1 className="text-orange-600 font-semibold text-[1.5rem]">
          Cr8Recipe
        </h1>
        {/* About, links etc... */}
        <div className="text-sm text-gray-900 font-medium flex flex-wrap justify-center space-x-5 lg:space-x-14 mx-6">
          {/* TODO: Links */}
          <Link href="/recipe">Recipe</Link>
          {/* <Link href="/">Pricing</Link> */}
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>

        {/* Icons */}
        <div className="flex flex-row">
          <a href="https://github.com/Koushik1311/Cr8Recipe" target="_blank">
            <FaGithub className="text-2xl" />
          </a>
        </div>
      </div>

      <div className="text-sm text-gray-500 mb-6 mx-6 mt-16 flex flex-col items-center lg:flex-row lg:justify-center lg:space-x-[577px]">
        {/* Copyright */}
        {/* TODO: Links */}
        <div className="flex flex-wrap justify-center space-x-5 lg:space-x-14">
          <p>&copy; 2024 Cr8Recipe.</p>
          <Link href="/">Terns</Link>
          <Link href="/">Privacy</Link>
          <Link href="/">Cookies</Link>
        </div>
        <div className="flex flex-row justify-center">
          <p>All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
