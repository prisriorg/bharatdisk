"use client";
import config from "@/app/config";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import navData from "./Datas";

const Header = ({ activeLink }: { activeLink: string }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <nav className="fixed top-0 z-50 w-full border-b border-gray-600 main-background">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                type="button"
                onClick={toggleMobileMenu}
                className="inline-flex items-center p-2 text-sm rounded-lg sm:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200  dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <Link href="/" className="flex  sm:ml-8 ml-2 ms-2 md:me-24">
                <Image
                  src="\logo.svg"
                  width={40}
                  height={40}
                  className="w-9 h-9 rounded-full"
                  alt="FlowBite Logo"
                />
                <span className="self-center text-xl sm:ml-8 ml-2 font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  {config.name}
                </span>
              </Link>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div>
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      src="https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk"
                      className="w-8 h-8 rounded-full"
                      width={50}
                      height={50}
                      alt="user photo"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <aside
        id="logo-sidebar"
        className={`main-background fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 ${
          isMobileMenuOpen ? "sm:translate-x-0" : "translate-x-0"
        } dark:bg-gray-800 dark:border-gray-700`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            {navData.map((item, index) => (
              <li key={index}>
                {index > 2 ? (
                  <Link
                    href={item.link}
                    className={`flex items-center p-2 text-gray-900 rounded-lg text-white hover:bg-gray-700 group ${
                      item.link === activeLink ? "bg-gray-700" : ""
                    }`}
                  >
                    <svg
                      className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 21"
                    >
                      <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                      <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                    </svg>
                    <span className="ms-3">{item.name} </span>
                  </Link>
                ) : (
                  <></>
                )}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Header;
