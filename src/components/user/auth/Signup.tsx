"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React, { useState, useEffect, FormEvent } from "react";

export default function SignUp() {
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
    const confirmPassword = formData.get("confirmPassword");
    let referCode = formData.get("referCode");
    if (password !== confirmPassword) {
      setError("Passwords do not matching.");
      setLoading(false);
      return;
    }
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
    <div className="signup-background min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">SignUp</h1>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            className="w-full p-2 mb-4 border rounded"
            required
          />
          {/* Conditional rendering of Refer Code input */}
          {paramsCode ? (
            <input
              type="text"
              value={paramsCode}
              readOnly
              className="w-full p-2 mb-4 border rounded bg-gray-200"
              disabled
            />
          ) : (
            <input
              type="text"
              placeholder="Refer Code"
              name="referCode"
              className="w-full p-2 mb-4 border rounded"
            />
          )}
          <button
            type="submit"
            className="w-full py-2 bg-gray-800 text-white rounded hover:bg-black transition"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Signup"}
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link href="/user/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
