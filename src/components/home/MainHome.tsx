import Link from "next/link";
import React from "react";

export const MainHome = () => {
  return (
    <section id="home" className="flex justify-center items-center text-center py-32 px-8 md:px-16 border-b">
      <div className="animate-homeUp container px-4 ">
        <h1 className="text-3xl md:m-8  md:text-3xl font-bold mb-4">
          Securely Store, Share, View, Earn, and Manage
        </h1>
        <p className="mt-8 text-md md:m-6 md:text-xl mb-6">
          BharatDisk is India&apos;s premier file storage platform. Securely store,
          manage, and share your files while earning rewards for views. Securely
          Store, Share, and Manage Files Seamlessly with Unlimited Space and
          Easy Uploads.
        </p>
        <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-8 md:m-16">
          <Link
            href="/user/login"
            className="bg-gradient-to-r from-gray-700 via-blue-950 to-gray-700 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-900 hover:border"
          >
            Upload Your Files
          </Link>
          <Link
            href="#features"
            className="bg-gradient-to-r from-gray-700 via-blue-950 to-gray-700 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-900 hover:border"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};
