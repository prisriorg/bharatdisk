import config from "@/app/config";
import Link from "next/link";
import React from "react";

export const MainHome = () => {
  return (
    <section id="home" className="flex justify-center items-center text-center py-48 sm:32 md:py-48 2xl:py-56 border-b">
      <div className="animate-homeUp container">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 pb-2">Welcome to {config.name}</h1>
        <h2 className="text-1xl md:text-2xl font-bold mb-4">
          
          Securely Store, Share, View, Earn, and Manage
        </h2>
        <p className="mt-8 text-md md:text-xl mb-6">
          {config.name} is India&apos;s premier file storage platform. Securely store, manage, and share your files while earning rewards for views. Securely Store, Share, and Manage Files Seamlessly with Unlimited Space and Easy Uploads.
        </p>
        <div className="mt-16 flex flex-col md:flex-row p-2 justify-center items-center gap-8 md:m-16">
          <Link
            href="/user/login"
            className="button-background  px-6 py-3 rounded-lg shadow-lg hover:border"
          >
            Upload Your Files
          </Link>
          <Link
            href="#features"
            className="button-background px-6 py-3 rounded-lg shadow-lg  hover:border"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};
