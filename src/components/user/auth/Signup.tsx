"use client";
import React, { useState, useEffect, FormEvent } from "react";
import Cpage from "./Cpage";
import { useRouter } from "next/navigation";
import config from "@/app/config";
import Head from "next/head";
import Link from "next/link";

const SignUp = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [paramsCode, setParamsCode] = useState("");
  // Function to extract and validate refer code from URL
  const extractReferCode = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("ref") || "";
  };

  useEffect(() => {
    const referCodeFromUrl = extractReferCode();
    // Set refer code from URL to state
    setParamsCode(referCodeFromUrl);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    // const confirmPassword = formData.get("confirmPassword");
    let referCode = formData.get("referCode");
    // if (password !== confirmPassword) {
    //   setError("Passwords do not matching.");
    //   setLoading(false);
    //   return;
    // }
    if (referCode == null) {
      referCode = paramsCode;
    }

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, referCode }),
      });
      const data = await response.json();
      if (response.ok) {
        router.push("/user/dashboard");
      } else {
        setLoading(false);
        setError(data.message);
      }
    } catch (error) {
      setLoading(false);
      setError("SignUp failed. Please try again.");
    }
  };

  return (
    <>
      <Head>
        <title>Sign Up</title>
        <meta
          name="description"
          content="Create an account to join YourAppName. Sign up today to enjoy our services and stay connected."
        />
      </Head>
      <div className="bg-gray-100 min-h-screen  flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center md:space-x-24 p-6">
          <Cpage />
          <form
            onSubmit={handleSubmit}
            className="mt-8 md:mt-0 md:w-1/2 bg-white p-8 rounded-lg shadow max-w-md"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Welcome to {config.name}
            </h2>
            <div className="flex flex-col space-y-4">
              <div className="flex gap-2 items-center justify-center py-2 px-4 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-100">
                <svg
                  width="25px"
                  height="25px"
                  viewBox="-3 0 262 262"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                >
                  <path
                    d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                    fill="#4285F4"
                  />
                  <path
                    d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                    fill="#34A853"
                  />
                  <path
                    d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                    fill="#FBBC05"
                  />
                  <path
                    d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                    fill="#EB4335"
                  />
                </svg>
                Sign Up with Google
              </div>
              <div className="relative flex py-2 items-center">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-4 text-gray-500">or</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>
              <input
                type="name"
                name="name"
                placeholder="Enter your name"
                className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
              />
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
              />
              {paramsCode ? (
                <input
                  type="text"
                  name="referCode"
                  value={paramsCode}
                  placeholder="Enter your refercode"
                  className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
                  disabled
                />
              ) : (
                <input
                  type="text"
                  name="referCode"
                  placeholder="Enter your refercode"
                  className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
                />
              )}
              {error && (
                <p className="text-red-600 border border-red-700 rounded mb-4 p-2 ">
                  {error}
                </p>
              )}
              <div className="flex justify-between items-center">
                <Link href="/user/forget-password" className="text-sm text-blue-600 hover:underline">
                  Forgot password?
                </Link>
              </div>
              <button
                className="w-full py-2 px-4 bg-gray-800 text-white rounded hover:bg-black transition rounded-md"
                disabled={loading}
              >
                {loading ? "Registering..." : "Sign in to your account"}
              </button>
              <p className="text-center text-sm text-gray-600">
                I Have an account yet?{" "}
                <Link
                  href="/user/login"
                  className="text-blue-600 hover:underline"
                >
                  Login here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default SignUp;
