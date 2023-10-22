import Link from "next/link";
import SocialAuthentication from "./SocialAuthentication";

export default function Register() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-3">
      <div className="min-h-[100vh] sm:col-start-2 flex flex-col justify-center items-center gap-[0.7rem]">
        <Link className="absolute top-[2.5rem] right-[3rem]" href="/login">
          Login
        </Link>
        {/* TODO: Logo */}

        {/* Header */}
        <h1 className="text-2xl font-semibold">Create an account</h1>
        <p className="text-sm text-gray-500">
          Enter your email bellow to create your account
        </p>
        <form
          className="flex flex-col justify-center items-center gap-[0.5rem] w-full mt-[0.9rem]"
          action=""
        >
          <input
            className="border-[0.1rem] py-[0.5rem] px-[0.9rem] rounded-md w-[90%] sm:w-full"
            type="email"
            name="email"
            id="email"
            placeholder="name@example.com"
          />
          <input
            className="border-[0.1rem] py-[0.5rem] px-[0.9rem] rounded-md w-[90%] sm:w-full"
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
          <input
            className="border-[0.1rem] py-[0.5rem] px-[0.9rem] rounded-md w-[90%] sm:w-full"
            type="password"
            name="repeatPassword"
            id="repeatPassword"
            placeholder="confirm password"
          />
          <button
            className="bg-gray-950 text-white py-[0.6rem] border-none rounded-md text-sm font-semibold w-[90%] sm:w-full"
            type="submit"
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
