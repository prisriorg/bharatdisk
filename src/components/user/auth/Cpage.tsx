import config from "@/app/config";
import React from "react";

const Cpage = () => {
  return (
    <div>
      <div className="hidden md:block text-center md:text-left ">
        <a
          href="/"
          className="flex items-center text-3xl font-bold text-gray-900 mb-4 pb-20"
        >
          <img
            className="rounded-full w-12 h-12 mr-4"
            src="/logo.svg"
            alt="logo"
          />
          <h2 className="">{config.name} </h2>
        </a>

        <ul className="space-y-4">
          <li className="flex items-start space-x-2">
            <span className="text-blue-600">✔</span>
            <div>
              <p className="font-semibold text-gray-800">Get started quickly</p>
              <p className="text-gray-500">
                Integrate with developer-friendly APIs or choose low-code.
              </p>
            </div>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-blue-600">✔</span>
            <div>
              <p className="font-semibold text-gray-800">
                Support any business model
              </p>
              <p className="text-gray-500">
                Host code that you don`&apos;t want to share with the world in
                private.
              </p>
            </div>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-blue-600">✔</span>
            <div>
              <p className="font-semibold text-gray-800">
                Join millions of businesses
              </p>
              <p className="text-gray-500">
                Flowbite is trusted by ambitious startups and enterprises of
                every size.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <a
        href="/"
        className="md:hidden flex items-center mb-6 text-2xl font-semibold text-gray-900"
      >
        <img
          className="rounded-full w-12 h-12 mr-2"
          src="/logo.svg"
          alt="logo"
        />
        <h2 className="">{config.name} </h2>
      </a>
    </div>
  );
};

export default Cpage;
