"use client";
import config from "@/app/config";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

const FloatingHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState("0px");
  const menuRef = useRef<HTMLUListElement>(null);
  const { name, url } = config;

  interface MenuItem {
    label: string;
    href: string;
  }
  const menuItems: MenuItem[] = [
    { label: "About", href: url + "/about" },
    { label: "Services", href: url + "/services" },
    { label: "Contact", href: url + "/contact" },
  ];
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (menuRef.current) {
      setMenuHeight(
        isMobileMenuOpen ? `${menuRef.current.scrollHeight}px` : "0px"
      );
    }
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 border border-gray-300 bg-gradient-to-r from-gray-900 via-blue-950 to-gray-900 shadow-lg bg-opacity-75 rounded-lg p-4 w-11/12 md:w-3/4 z-50 transition-all duration-500 ease-in-out`}
    >
      <nav className="flex justify-between items-center text-white">
        <Link href={url}>
          <div className="text-xl font-bold">{name}</div>
        </Link>
        <ul className="hidden md:flex space-x-4">
          {menuItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-blue-500">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="md:hidden">
          <button
            id="menu-toggle"
            className=" focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      <ul
        id="mobile-menu"
        ref={menuRef}
        className={`md:hidden space-y-2 overflow-hidden transform transition-all duration-500 ease-in-out`}
        style={{ height: menuHeight }}
      >
        <li className="mt-2"></li>
        {menuItems.map((item) => (
          <li key={item.href}>
            <a href={item.href} className="block hover:text-blue-500">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default FloatingHeader;
