"use client";
import Link from "next/link";
import SocialAuthentication from "./SocialAuthentication";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { onRegister } from "@/api-calls/authentication/register";

export default function Register() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirm_password: "",
  });

  const isPasswordValid = (password: string) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleRegister = async () => {
    if (user.password !== user.confirm_password) {
      console.log("Passwords do not match");
      return;
    }
    if (!isPasswordValid(user.password)) {
      console.log("Password does not meet the criteria");
      return;
    }
    await onRegister(user, router);
  };

  return (
    <section className="grid grid-cols-1 sm:grid-cols-3">
      <div className="min-h-[100vh] sm:col-start-2 flex flex-col justify-center items-center gap-[0.7rem]">
        <Link
          className="absolute top-[2.5rem] right-[3rem] text-sm"
          href="/login"
        >
          Login
        </Link>
        {/* TODO: Logo */}

        {/* Header */}
        <h1 className="text-2xl font-semibold">Create an account</h1>
        <p className="text-sm text-gray-500">
          Enter your email bellow to create your account
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
          <input
            className="border-[0.1rem] py-[0.5rem] px-[0.9rem] rounded-md w-[90%] sm:w-full"
            type="password"
            name="repeatPassword"
            id="repeatPassword"
            placeholder="confirm password"
            value={user.confirm_password}
            onChange={(e) =>
              setUser({ ...user, confirm_password: e.target.value })
            }
          />
          <button
            className="bg-gray-950 text-white py-[0.6rem] border-none rounded-md text-sm font-semibold w-[90%] sm:w-full"
            type="button"
            onClick={handleRegister}
          >
            Sign Up with Email
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
        {/* Terms of Service and Privacy Policy */}
      </div>
    </section>
  );
}
