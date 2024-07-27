"use client"
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold text-black">404</h1>
      <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
      <p className="mt-4 text-lg text-gray-700">Sorry, we could not find the page you are looking for.</p>
      <Link href="/">
        <div className="mt-6 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-black transition">Go Back Home</div>
      </Link>
    </div>
  );
}
