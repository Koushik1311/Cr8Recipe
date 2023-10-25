"use client";

// external import
import { FaAngleLeft } from "react-icons/fa6";

// local import
import BackBtn from "../Shared/BackBtn";
import SocialAuthentication from "./SocialAuthentication";
import Link from "next/link";
import { onLogin } from "@/api-calls/authentication/login";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    await onLogin(user, router);
  };

  return (
    <section className="grid grid-cols-1 sm:grid-cols-3">
      <div className="min-h-[100vh] sm:col-start-2 flex flex-col justify-center items-center gap-[0.7rem]">
        {/* Back button */}
        <div className="absolute top-[2.5rem] left-[3rem]">
          <BackBtn>
            <FaAngleLeft />
          </BackBtn>
        </div>
        {/* TODO: Logo */}

        {/* Header */}
        <h1 className="text-2xl font-semibold">Welcome back</h1>
        <p className="text-sm px-[0.9rem] sm:px-0 text-gray-500 text-center">
          Enter your email and password to sign in to your account
        </p>
        <form className="flex flex-col justify-center items-center gap-[0.5rem] w-full mt-[0.9rem]">
          <input
            className="border-[0.1rem] py-[0.5rem] px-[0.9rem] rounded-md w-[90%] sm:w-full"
            type="email"
            name="email"
            id="email"
            placeholder="name@example.com"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <input
            className="border-[0.1rem] py-[0.5rem] px-[0.9rem] rounded-md w-[90%] sm:w-full"
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <button
            className="bg-gray-950 text-white py-[0.6rem] border-none rounded-md text-sm font-semibold w-[90%] sm:w-full"
            type="button"
            onClick={handleLogin}
          >
            Sign In with Email
          </button>
        </form>

        <div className="mt-[0.7rem] w-full relative">
          <hr className="w-full absolute top-[0.66rem] -z-10" />
          <span className="flex justify-center">
            <p className="uppercase text-sm font-light bg-gray-50 text-gray-500 px-[1rem]">
              Or Continue with
            </p>
          </span>
        </div>
        <div className="mt-[0.8rem]">
          <SocialAuthentication />
        </div>
        <Link
          className="text-sm text-gray-500 underline underline-offset-[0.25rem]"
          href="/register"
        >
          Don&apos;t have an account? Sign Up
        </Link>
      </div>
    </section>
  );
}
